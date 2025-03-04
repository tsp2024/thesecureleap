-- CreateTable
CREATE TABLE "news" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "source" TEXT NOT NULL,

    CONSTRAINT "news_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stories" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT NOT NULL,

    CONSTRAINT "Stories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Program" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Program_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeIncentive" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "eventAccess" BOOLEAN NOT NULL,
    "educationAccess" BOOLEAN NOT NULL,

    CONSTRAINT "EmployeeIncentive_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserPrograms" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeIncentive_userId_key" ON "EmployeeIncentive"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_UserPrograms_AB_unique" ON "_UserPrograms"("A", "B");

-- CreateIndex
CREATE INDEX "_UserPrograms_B_index" ON "_UserPrograms"("B");

-- AddForeignKey
ALTER TABLE "EmployeeIncentive" ADD CONSTRAINT "EmployeeIncentive_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserPrograms" ADD CONSTRAINT "_UserPrograms_A_fkey" FOREIGN KEY ("A") REFERENCES "Program"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserPrograms" ADD CONSTRAINT "_UserPrograms_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
