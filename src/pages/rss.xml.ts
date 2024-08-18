import { AppConfig } from "../lib/utils";
import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import api from "../lib/api";

export const GET: APIRoute = async () => {
  const resp = await api.getPosts({});
  const posts = resp.data?.posts;
  if (!posts) return new Response(null, { status: 404 });

  return rss({
    title: AppConfig.title,
    description: AppConfig.description,
    site: AppConfig.site,
    stylesheet: "/pretty-feed-v3.xsl",
    items: posts.map((post) => ({
      title: post.title,
      pubDate: new Date(post.modifiedDate),
      description: post.summary,
      categories: post.tags,
      link: `/blog/${post.slug}/`
    }))
  });
};
