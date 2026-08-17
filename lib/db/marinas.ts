import { prisma } from "@/lib/prisma";

export async function getMarinasByIds(ids: string[]) {
  return prisma.marina.findMany({
    where: {
      id: {
        in: ids,
      },
    },
    include: {
      images: {
        orderBy: {
          sortOrder: "asc",
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
      amenities: {
        include: {
          amenity: true,
        },
      },
      facilities: {
        include: {
          facility: true,
        },
      },
    },
  });
}

export async function getMarinas() {
  return prisma.marina.findMany({
    include: {
      region: true,
      city: true,
      district: true,
      images: {
        orderBy: {
          sortOrder: "asc",
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
      amenities: {
        include: {
          amenity: true,
        },
      },
      facilities: {
        include: {
          facility: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });
}

export async function getMarinaBySlug(slug: string) {
    return prisma.marina.findUnique({
      where: {
        slug,
      },
      include: {
        images: {
          orderBy: {
            sortOrder: "asc",
          },
        },
  
        categories: {
          include: {
            category: true,
          },
        },
  
        amenities: {
          include: {
            amenity: true,
          },
        },
  
        facilities: {
          include: {
            facility: true,
          },
        },
      },
    });
  }

export async function getMarinasByRegion(regionId: string) {
  return prisma.marina.findMany({
    where: {
      regionId,
    },
    include: {
      region: true,
      city: true,
      district: true,
      images: {
        orderBy: {
          sortOrder: "asc",
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
      amenities: {
        include: {
          amenity: true,
        },
      },
      facilities: {
        include: {
          facility: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });
}

export async function getMarinasByCity(cityId: string) {
  return prisma.marina.findMany({
    where: {
      cityId,
    },
    include: {
      region: true,
      city: true,
      district: true,
      images: {
        orderBy: {
          sortOrder: "asc",
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
      amenities: {
        include: {
          amenity: true,
        },
      },
      facilities: {
        include: {
          facility: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });
}

export async function getMarinasByDistrict(districtId: string) {
  return prisma.marina.findMany({
    where: {
      districtId,
    },
    include: {
      region: true,
      city: true,
      district: true,
      images: {
        orderBy: {
          sortOrder: "asc",
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
      amenities: {
        include: {
          amenity: true,
        },
      },
      facilities: {
        include: {
          facility: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });
}

export async function getMarinasByCategory(categorySlug: string) {
  return prisma.marina.findMany({
    where: {
      categories: {
        some: {
          category: {
            slug: categorySlug,
          },
        },
      },
    },
    include: {
      region: true,
      city: true,
      district: true,
      images: {
        orderBy: {
          sortOrder: "asc",
        },
      },
      categories: {
        include: {
          category: true,
        },
      },
      amenities: {
        include: {
          amenity: true,
        },
      },
      facilities: {
        include: {
          facility: true,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });
}