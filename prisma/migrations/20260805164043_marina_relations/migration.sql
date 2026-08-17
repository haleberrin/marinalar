-- CreateTable
CREATE TABLE "Marina" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "description" JSONB NOT NULL,
    "rating" DOUBLE PRECISION,
    "regionId" TEXT NOT NULL,
    "cityId" TEXT NOT NULL,
    "districtId" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "logo" TEXT,
    "coverImage" TEXT NOT NULL,
    "seaBerth" INTEGER NOT NULL,
    "landBerth" INTEGER NOT NULL,
    "maxBoatLength" INTEGER NOT NULL,
    "depth" TEXT NOT NULL,
    "phone" TEXT,
    "email" TEXT,
    "website" TEXT,
    "vhfChannel" TEXT,
    "openingYear" INTEGER,
    "blueFlag" BOOLEAN NOT NULL DEFAULT false,
    "petFriendly" BOOLEAN NOT NULL DEFAULT false,
    "customsClearance" BOOLEAN NOT NULL DEFAULT false,
    "charterAvailable" BOOLEAN NOT NULL DEFAULT false,
    "winterStorageAvailable" BOOLEAN NOT NULL DEFAULT false,
    "nearestAirport" TEXT,
    "airportDistance" INTEGER,
    "scores" JSONB,
    "recommendedFor" JSONB,
    "aiTags" JSONB,
    "tags" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Marina_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarinaImage" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "marinaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MarinaImage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "shortDescription" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "heroTitle" TEXT NOT NULL,
    "heroSubtitle" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "coverImage" TEXT NOT NULL,
    "badge" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "seoTitle" TEXT NOT NULL,
    "seoDescription" TEXT NOT NULL,
    "highlights" JSONB NOT NULL,
    "faq" JSONB NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Amenity" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "color" TEXT,

    CONSTRAINT "Amenity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Facility" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "icon" TEXT NOT NULL,

    CONSTRAINT "Facility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarinaCategory" (
    "marinaId" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "MarinaCategory_pkey" PRIMARY KEY ("marinaId","categoryId")
);

-- CreateTable
CREATE TABLE "MarinaAmenity" (
    "marinaId" TEXT NOT NULL,
    "amenityId" TEXT NOT NULL,

    CONSTRAINT "MarinaAmenity_pkey" PRIMARY KEY ("marinaId","amenityId")
);

-- CreateTable
CREATE TABLE "MarinaFacility" (
    "marinaId" TEXT NOT NULL,
    "facilityId" TEXT NOT NULL,

    CONSTRAINT "MarinaFacility_pkey" PRIMARY KEY ("marinaId","facilityId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Marina_slug_key" ON "Marina"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_key" ON "Category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Amenity_slug_key" ON "Amenity"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Facility_slug_key" ON "Facility"("slug");

-- AddForeignKey
ALTER TABLE "Marina" ADD CONSTRAINT "Marina_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Marina" ADD CONSTRAINT "Marina_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Marina" ADD CONSTRAINT "Marina_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarinaImage" ADD CONSTRAINT "MarinaImage_marinaId_fkey" FOREIGN KEY ("marinaId") REFERENCES "Marina"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarinaCategory" ADD CONSTRAINT "MarinaCategory_marinaId_fkey" FOREIGN KEY ("marinaId") REFERENCES "Marina"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarinaCategory" ADD CONSTRAINT "MarinaCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarinaAmenity" ADD CONSTRAINT "MarinaAmenity_marinaId_fkey" FOREIGN KEY ("marinaId") REFERENCES "Marina"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarinaAmenity" ADD CONSTRAINT "MarinaAmenity_amenityId_fkey" FOREIGN KEY ("amenityId") REFERENCES "Amenity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarinaFacility" ADD CONSTRAINT "MarinaFacility_marinaId_fkey" FOREIGN KEY ("marinaId") REFERENCES "Marina"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarinaFacility" ADD CONSTRAINT "MarinaFacility_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE CASCADE ON UPDATE CASCADE;
