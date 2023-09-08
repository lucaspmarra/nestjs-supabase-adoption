-- AlterTable
ALTER TABLE "Cat" ADD COLUMN     "adopterId" INTEGER;

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Cat" ADD CONSTRAINT "Cat_adopterId_fkey" FOREIGN KEY ("adopterId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
