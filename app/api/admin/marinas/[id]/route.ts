import { NextResponse } from "next/server";
import { z } from "zod";


import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";


const requiredNumber = (
  schema: z.ZodNumber
) =>
  z.preprocess((value) => {
    const raw =
      String(value ?? "").trim();

    if (!raw) {
      return undefined;
    }

    return Number(raw);
  }, schema);


const optionalNumber = (
  schema: z.ZodNumber
) =>
  z.preprocess((value) => {
    const raw =
      String(value ?? "").trim();

    if (!raw) {
      return null;
    }

    return Number(raw);
  }, schema.nullable());


const optionalString = z
  .string()
  .trim()
  .transform((value) =>
    value.length > 0
      ? value
      : null
  );


const marinaUpdateSchema =
  z.object({
    name: z
      .string()
      .trim()
      .min(1),

    slug: z
      .string()
      .trim()
      .toLowerCase()
      .min(1)
      .regex(
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
        "Slug sadece küçük harf, rakam ve tire içerebilir."
      ),

    summary: z
      .string()
      .trim()
      .min(1),

    description: z
      .string()
      .trim()
      .min(1)
      .transform((value) =>
        value
          .split("\n")
          .map((item) =>
            item.trim()
          )
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
      .min(1),

    cityId: z
      .string()
      .trim()
      .min(1),

    districtId: z
      .string()
      .trim()
      .min(1),

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
      .min(1),

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
      .min(1),

    phone: optionalString,

    email: optionalString,

    website: optionalString,

    vhfChannel: optionalString,

    openingYear: optionalNumber(
      z
        .number()
        .int()
        .min(1800)
        .max(
          new Date().getFullYear() +
            1
        )
    ),

    nearestAirport:
      optionalString,

    airportDistance:
      optionalNumber(
        z
          .number()
          .int()
          .nonnegative()
      ),

    blueFlag: z.boolean(),

    petFriendly: z.boolean(),

    customsClearance:
      z.boolean(),

    charterAvailable:
      z.boolean(),

    winterStorageAvailable:
      z.boolean(),

      categoryIds: z.array(z.string()).default([]),
        amenityIds: z.array(z.string()).default([]),
        facilityIds: z.array(z.string()).default([]),
  });

 


interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}


export async function PATCH(
  request: Request,
  { params }: RouteContext
) {
  const session = await auth();

  if (
    !session?.user ||
    session.user.role !== "admin"
  ) {
    return NextResponse.json(
      {
        error:
          "Yetkisiz erişim.",
      },
      {
        status: 401,
      }
    );
  }


  const { id } = await params;


  try {
    const marina =
      await prisma.marina.findUnique({
        where: {
          id,
        },

        select: {
          id: true,
        },
      });


    if (!marina) {
      return NextResponse.json(
        {
          error:
            "Marina bulunamadı.",
        },
        {
          status: 404,
        }
      );
    }


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


    const parsed =
      marinaUpdateSchema.safeParse({
        name:
          formData.get("name"),

        slug:
          formData.get("slug"),

        summary:
          formData.get("summary"),

        description:
          formData.get(
            "description"
          ),

        rating:
          formData.get("rating"),

        regionId:
          formData.get(
            "regionId"
          ),

        cityId:
          formData.get("cityId"),

        districtId:
          formData.get(
            "districtId"
          ),

        latitude:
          formData.get(
            "latitude"
          ),

        longitude:
          formData.get(
            "longitude"
          ),

        coverImage:
          formData.get(
            "coverImage"
          ),

        seaBerth:
          formData.get(
            "seaBerth"
          ),

        landBerth:
          formData.get(
            "landBerth"
          ),

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
          formData.get(
            "website"
          ),

        vhfChannel:
          formData.get(
            "vhfChannel"
          ),

        openingYear:
          formData.get(
            "openingYear"
          ),

        nearestAirport:
          formData.get(
            "nearestAirport"
          ),

        airportDistance:
          formData.get(
            "airportDistance"
          ),

        blueFlag:
          formData.get(
            "blueFlag"
          ) === "on",

        petFriendly:
          formData.get(
            "petFriendly"
          ) === "on",

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
      return NextResponse.json(
        {
          error:
            parsed.error.issues[0]
              ?.message ??
            "Form alanlarını kontrol edin.",
        },
        {
          status: 400,
        }
      );
    }


    const data = parsed.data;


    /*
     * BAŞKA MARINA AYNI
     * SLUG'I KULLANIYOR MU?
     */

    const duplicate =
      await prisma.marina.findFirst({
        where: {
          slug: data.slug,

          NOT: {
            id,
          },
        },

        select: {
          id: true,
        },
      });


    if (duplicate) {
      return NextResponse.json(
        {
          error:
            "Bu slug başka bir marina tarafından kullanılıyor.",
        },
        {
          status: 409,
        }
      );
    }


    /*
     * LOCATION RELATION
     * DOĞRULAMASI
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
          regionId:
            data.regionId,
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


    await prisma.$transaction(async (tx) => {
        await tx.marina.update({
          where: {
            id,
          },
      
          data: {
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
          },
        });
      
        await Promise.all([
          tx.marinaCategory.deleteMany({
            where: {
              marinaId: id,
            },
          }),
      
          tx.marinaAmenity.deleteMany({
            where: {
              marinaId: id,
            },
          }),
      
          tx.marinaFacility.deleteMany({
            where: {
              marinaId: id,
            },
          }),
        ]);
      
        if (data.categoryIds.length > 0) {
          await tx.marinaCategory.createMany({
            data: data.categoryIds.map((categoryId) => ({
              marinaId: id,
              categoryId,
            })),
          });
        }
      
        if (data.amenityIds.length > 0) {
          await tx.marinaAmenity.createMany({
            data: data.amenityIds.map((amenityId) => ({
              marinaId: id,
              amenityId,
            })),
          });
        }
      
        if (data.facilityIds.length > 0) {
          await tx.marinaFacility.createMany({
            data: data.facilityIds.map((facilityId) => ({
              marinaId: id,
              facilityId,
            })),
          });
        }
      });


    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(
      "Marina update error:",
      error
    );

    return NextResponse.json(
      {
        error:
          "Marina güncellenirken beklenmeyen bir hata oluştu.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
    _request: Request,
    { params }: RouteContext
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
  
    const { id } = await params;
  
    try {
      const marina = await prisma.marina.findUnique({
        where: {
          id,
        },
        select: {
          id: true,
          name: true,
        },
      });
  
      if (!marina) {
        return NextResponse.json(
          {
            error: "Marina bulunamadı.",
          },
          {
            status: 404,
          }
        );
      }
  
      await prisma.marina.delete({
        where: {
          id,
        },
      });
  
      return NextResponse.json({
        success: true,
      });
    } catch (error) {
      console.error(
        "Marina delete error:",
        error
      );
  
      return NextResponse.json(
        {
          error:
            "Marina silinirken beklenmeyen bir hata oluştu.",
        },
        {
          status: 500,
        }
      );
    }
  }