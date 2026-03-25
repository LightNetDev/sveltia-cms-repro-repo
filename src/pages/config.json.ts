import type { CmsConfig } from "@sveltia/cms";
import type { APIRoute } from "astro";

const config: CmsConfig = {
  app_title: "Sveltia CMS Repro Starter",
  backend: {
    name: "github",
    repo: "LightNetDev/sveltia-cms-repro-repo",
  },
  media_folder: "src/assets",
  public_folder: "/src/assets",
  collections: [
    {
      name: "entry-collection",
      label: "Entry Collection",
      folder: "src/content/entry-collection",
      format: "json",
      extension: "json",
      summary: "{{title}}",
      fields: [
        {
          name: "title",
          label: "Title",
        },
        {
          name: "body",
          label: "Body",
          widget: "markdown",
          required: false,
        },
      ],
    },
  ],
};

export const GET: APIRoute = () =>
  new Response(JSON.stringify(config, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
