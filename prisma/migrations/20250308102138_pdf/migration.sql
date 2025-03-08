-- CreateTable
CREATE TABLE "Article" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "pdfData" BYTEA NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);
