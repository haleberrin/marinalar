import { NextResponse } from "next/server";
import { z } from "zod";
import type { Prisma } from "@prisma/client";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";


const requiredNumber = (
  schema: z.ZodNumber
) =>
  z.preprocess((value) => {
    const raw = String(value ?? "").trim();

    if (!raw) {
      return undefined;
    }

    return Number(raw);
  }, schema);


const optionalNumber = (
  schema: z.ZodNumber
) =>
  z.preprocess((value) => {
    const raw = String(value ?? "").trim();

    if (!raw) {
      return null;
    }

    return Number(raw);
  }, schema.nullable());


const optionalString = z
  .string()
  .trim()
  .transform((value) =>
    value.length > 0 ? value : null
  );


const marinaSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Marina adı zorunludur."),

  slug: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Slug zorunludur.")
    .regex(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug sadece küçük harf, rakam ve tire içerebilir."
    ),

  summary: z
    .string()
    .trim()
    .min(1, "Özet zorunludur."),

  description: z
    .string()
    .trim()
    .min(1, "Açıklama zorunludur.")
    .transform((value) =>
      value
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean)
    ),

  rating: optionalNumber(
    z
      .number()
      .finite()
      .min(0)
      .max(5)
  ),

  regionId: z
    .string()
    .trim()
    .min(1, "Bölge seçilmelidir."),

  cityId: z
    .string()
    .trim()
    .min(1, "Şehir seçilmelidir."),

  districtId: z
    .string()
    .trim()
    .min(1, "İlçe seçilmelidir."),

  latitude: requiredNumber(
    z
      .number()
      .finite()
      .min(-90)
      .max(90)
  ),

  longitude: requiredNumber(
    z
      .number()
      .finite()
      .min(-180)
      .max(180)
  ),

  coverImage: z
    .string()
    .trim()
    .min(1, "Kapak görseli zorunludur."),

  seaBerth: requiredNumber(
    z
      .number()
      .int()
      .nonnegative()
  ),

  landBerth: optionalNumber(
    z
      .number()
      .int()
      .nonnegative()
  ),

  maxBoatLength: requiredNumber(
    z
      .number()
      .int()
      .positive()
  ),

  depth: z
    .string()
    .trim()
    .min(1, "Derinlik bilgisi zorunludur."),

  phone: optionalString,

  email: z
    .string()
    .trim()
    .transform((value) =>
      value.length > 0 ? value : null
    )
    .refine(
      (value) =>
        value === null ||
        z.string().email().safeParse(value).success,
      "Geçerli bir email adresi girin."
    ),

    website: z
    .string()
    .trim()
    .transform((value) =>
      value.length > 0 ? value : null
    )
    .refine(
      (value) =>
        value === null ||
        z.string().url().safeParse(value).success,
      "Website adresi http:// veya https:// ile başlamalıdır."
    ),
  
  categoryIds: z.array(z.string()).default([]),
  amenityIds: z.array(z.string()).default([]),
  facilityIds: z.array(z.string()).default([]),
  

  vhfChannel: optionalString,

  openingYear: optionalNumber(
    z
      .number()
      .int()
      .min(1800)
      .max(new Date().getFullYear() + 1)
  ),

  nearestAirport: optionalString,

  airportDistance: optionalNumber(
    z
      .number()
      .int()
      .nonnegative()
  ),

  blueFlag: z.boolean(),
  petFriendly: z.boolean(),
  customsClearance: z.boolean(),
  charterAvailable: z.boolean(),
  winterStorageAvailable: z.boolean(),
});


export async function POST(
  request: Request
) {
  const session = await auth();

  if (
    !session?.user ||
    session.user.role !== "admin"
  ) {
    return NextResponse.json(
      {
        error: "Yetkisiz erişim.",
      },
      {
        status: 401,
      }
    );
  }


  try {
    const formData =
      await request.formData();

      const categoryIds = formData
        .getAll("categoryIds")
        .map(String);

      const amenityIds = formData
        .getAll("amenityIds")
        .map(String);

      const facilityIds = formData
        .getAll("facilityIds")
        .map(String);


    const parsed = marinaSchema.safeParse({
      name: formData.get("name"),
      slug: formData.get("slug"),
      summary: formData.get("summary"),
      description:
        formData.get("description"),

      rating: formData.get("rating"),

      regionId:
        formData.get("regionId"),

      cityId:
        formData.get("cityId"),

      districtId:
        formData.get("districtId"),

      latitude:
        formData.get("latitude"),

      longitude:
        formData.get("longitude"),

      coverImage:
        formData.get("coverImage"),

      seaBerth:
        formData.get("seaBerth"),

      landBerth:
        formData.get("landBerth"),

      maxBoatLength:
        formData.get(
          "maxBoatLength"
        ),

      depth:
        formData.get("depth"),

      phone:
        formData.get("phone"),

      email:
        formData.get("email"),

      website:
        formData.get("website"),

      vhfChannel:
        formData.get("vhfChannel"),

      openingYear:
        formData.get("openingYear"),

      nearestAirport:
        formData.get(
          "nearestAirport"
        ),

      airportDistance:
        formData.get(
          "airportDistance"
        ),

      blueFlag:
        formData.get("blueFlag") ===
        "on",

      petFriendly:
        formData.get("petFriendly") ===
        "on",

      customsClearance:
        formData.get(
          "customsClearance"
        ) === "on",

      charterAvailable:
        formData.get(
          "charterAvailable"
        ) === "on",

      winterStorageAvailable:
        formData.get(
          "winterStorageAvailable"
        ) === "on",

        categoryIds,
        amenityIds,
        facilityIds,
    });


    if (!parsed.success) {
      const firstIssue =
        parsed.error.issues[0];

      return NextResponse.json(
        {
          error:
            firstIssue?.message ??
            "Form alanlarını kontrol edin.",

          fields:
            parsed.error.flatten()
              .fieldErrors,
        },
        {
          status: 400,
        }
      );
    }


    const data = parsed.data;


    /*
     * SLUG / ID ÇAKIŞMA KONTROLÜ
     */

    const existingMarina =
      await prisma.marina.findFirst({
        where: {
          OR: [
            {
              id: data.slug,
            },
            {
              slug: data.slug,
            },
          ],
        },

        select: {
          id: true,
        },
      });


    if (existingMarina) {
      return NextResponse.json(
        {
          error:
            "Bu slug ile kayıtlı bir marina zaten var.",
        },
        {
          status: 409,
        }
      );
    }


    /*
     * REGION → CITY → DISTRICT
     * İLİŞKİ DOĞRULAMASI
     */

    const [
      region,
      city,
      district,
    ] = await Promise.all([
      prisma.region.findUnique({
        where: {
          id: data.regionId,
        },

        select: {
          id: true,
        },
      }),

      prisma.city.findFirst({
        where: {
          id: data.cityId,
          regionId: data.regionId,
        },

        select: {
          id: true,
        },
      }),

      prisma.district.findFirst({
        where: {
          id: data.districtId,
          cityId: data.cityId,
        },

        select: {
          id: true,
        },
      }),
    ]);


    if (!region) {
      return NextResponse.json(
        {
          error:
            "Seçilen bölge geçerli değil.",
        },
        {
          status: 400,
        }
      );
    }


    if (!city) {
      return NextResponse.json(
        {
          error:
            "Seçilen şehir bu bölgeye ait değil.",
        },
        {
          status: 400,
        }
      );
    }


    if (!district) {
      return NextResponse.json(
        {
          error:
            "Seçilen ilçe bu şehre ait değil.",
        },
        {
          status: 400,
        }
      );
    }


    /*
     * MARINA CREATE
     */

    const marina = await prisma.$transaction(
      async (tx: Prisma.TransactionClient) => {
      const createdMarina = await tx.marina.create({
        data: {
          id: data.slug,
          slug: data.slug,
    
          name: data.name,
          summary: data.summary,
          description: data.description,
    
          rating: data.rating,
    
          regionId: data.regionId,
          cityId: data.cityId,
          districtId: data.districtId,
    
          latitude: data.latitude,
          longitude: data.longitude,
    
          coverImage: data.coverImage,
    
          seaBerth: data.seaBerth,
          landBerth: data.landBerth,
          maxBoatLength: data.maxBoatLength,
          depth: data.depth,
    
          phone: data.phone,
          email: data.email,
          website: data.website,
          vhfChannel: data.vhfChannel,
    
          openingYear: data.openingYear,
    
          nearestAirport: data.nearestAirport,
          airportDistance: data.airportDistance,
    
          blueFlag: data.blueFlag,
          petFriendly: data.petFriendly,
          customsClearance: data.customsClearance,
          charterAvailable: data.charterAvailable,
          winterStorageAvailable:
            data.winterStorageAvailable,
    
          tags: [],
          aiTags: [],
        },
      });
    
      if (data.categoryIds.length > 0) {
        await tx.marinaCategory.createMany({
          data: data.categoryIds.map((categoryId) => ({
            marinaId: createdMarina.id,
            categoryId,
          })),
        });
      }
    
      if (data.amenityIds.length > 0) {
        await tx.marinaAmenity.createMany({
          data: data.amenityIds.map((amenityId) => ({
            marinaId: createdMarina.id,
            amenityId,
          })),
        });
      }
    
      if (data.facilityIds.length > 0) {
        await tx.marinaFacility.createMany({
          data: data.facilityIds.map((facilityId) => ({
            marinaId: createdMarina.id,
            facilityId,
          })),
        });
      }
    
      return createdMarina;
    });


    return NextResponse.json(
      {
        id: marina.id,
        slug: marina.slug,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(
      "Marina create error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Marina oluşturulurken beklenmeyen bir hata oluştu.",
      },
      {
        status: 500,
      }
    );
  }
}