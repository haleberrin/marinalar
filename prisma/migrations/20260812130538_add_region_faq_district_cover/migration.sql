-- AlterTable
ALTER TABLE "District" ADD COLUMN     "coverImage" TEXT;

-- AlterTable
ALTER TABLE "Region" ADD COLUMN     "faq" JSONB NOT NULL DEFAULT '[]';
