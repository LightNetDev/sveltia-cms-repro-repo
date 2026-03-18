import type { CmsConfig } from "@sveltia/cms";
import type { APIRoute } from "astro";

const config: CmsConfig = {
  app_title: "Sveltia CMS Repro Starter",
  backend: {
    name: "github",
    repo: "https://github.com/LightNetDev/sveltia-cms-repro-repo",
  },
  media_folder: "src/assets",
  public_folder: "/src/assets",
  output: {
    omit_empty_optional_fields: true,
  },
  collections: [
    {
      name: "entry-collection",
      label: "Entry Collection",
      folder: "src/content/entry-collection",
      format: "json",
      extension: "json",
      fields: [
        {
          name: "list",
          widget: "list",
          label_singular: "list item",
          types: [
            {
              name: "my-type",
              fields: [
                { name: "title" },
                {
                  name: "optionalObject",
                  label: "Optional Object",
                  required: false,
                  widget: "object",
                  fields: [
                    {
                      name: "foo",
                      widget: "string",
                    },
                  ],
                },
              ],
            },
          ],
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
