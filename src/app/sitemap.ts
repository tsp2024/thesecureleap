import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${process.env.BASE_URL}`,
    },
    {
      url: `${process.env.BASE_URL}/project-ayanna`,
    },
    {
      url: `${process.env.BASE_URL}/subscription`,
    },
    {
      url: `${process.env.BASE_URL}/articles`,
    },
    {
      url: `${process.env.BASE_URL}/news`,
    },
    {
      url: `${process.env.BASE_URL}/privacy-policy`,
    },
    {
      url: `${process.env.BASE_URL}/refund-policy`,
    },
    {
      url: `${process.env.BASE_URL}/shipping-policy`,
    },
    {
      url: `${process.env.BASE_URL}/terms-condition`,
    },
  ];
}
