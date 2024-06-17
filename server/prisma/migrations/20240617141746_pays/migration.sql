/*
  Warnings:

  - Added the required column `pays` to the `Reservation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `reservation` ADD COLUMN `pays` VARCHAR(191) NOT NULL;
