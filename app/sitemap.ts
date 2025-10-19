import { getAllLogs } from "@/lib/getAllLogs";

export const baseUrl = "https://bitsofismael.vercel.app/";

export default async function sitemap() {
  let blogs = getAllLogs().map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
  }));

  let routes = ["", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
