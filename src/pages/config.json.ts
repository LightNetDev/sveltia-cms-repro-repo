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
          name: "published",
          label: "Published",
          widget: "boolean",
          required: false,
        },
        {
          name: "body",
          label: "Body",
          widget: "markdown",
          required: false,
        },
      ],
    },
    {
      name: "todo-file",
      label: "Todo File",
      format: "json",
      files: [
        {
          name: "todo-list",
          label: "Todo List",
          file: "src/content/file-collection/todo-list.json",
          fields: [
            {
              name: "title",
              label: "Title",
            },
            {
              name: "items",
              label: "Items",
              widget: "list",
              summary: "{{fields.text}}",
              fields: [
                {
                  name: "text",
                  label: "Text",
                },
                {
                  name: "done",
                  label: "Done",
                  widget: "boolean",
                  required: false,
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
