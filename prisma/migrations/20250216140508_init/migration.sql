/*
  Warnings:

  - You are about to drop the `EmployeeIncentive` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Program` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_UserPrograms` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EmployeeIncentive" DROP CONSTRAINT "EmployeeIncentive_userId_fkey";

-- DropForeignKey
ALTER TABLE "_UserPrograms" DROP CONSTRAINT "_UserPrograms_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserPrograms" DROP CONSTRAINT "_UserPrograms_B_fkey";

-- DropTable
DROP TABLE "EmployeeIncentive";

-- DropTable
DROP TABLE "Program";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "_UserPrograms";
