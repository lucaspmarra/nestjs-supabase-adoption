-- CreateTable
CREATE TABLE "Cat" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "neutered" BOOLEAN NOT NULL,
    "forAdoption" BOOLEAN NOT NULL,
    "adopted" BOOLEAN NOT NULL,

    CONSTRAINT "Cat_pkey" PRIMARY KEY ("id")
);
