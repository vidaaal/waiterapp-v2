/*
  Warnings:

  - You are about to drop the column `productId` on the `ingredients` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ingredients" DROP CONSTRAINT "ingredients_productId_fkey";

-- AlterTable
ALTER TABLE "ingredients" DROP COLUMN "productId",
ADD COLUMN     "product_id" TEXT;

-- AddForeignKey
ALTER TABLE "ingredients" ADD CONSTRAINT "ingredients_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;
