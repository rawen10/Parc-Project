-- CreateTable
CREATE TABLE `Reservation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nameprenom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `numero` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `sexe` VARCHAR(191) NOT NULL,
    `date` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
