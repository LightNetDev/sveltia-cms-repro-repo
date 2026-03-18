import type { CmsConfig } from "@sveltia/cms";
import type { APIRoute } from "astro";

const config: CmsConfig = {
   backend: {
    name: "github",
    repo: "https://github.com/LightNetDev/sveltia-cms-repro-repo"
   },
   media_folder: "src/assets",
   collections:[]
}

export const GET: APIRoute = () => {
    return new Response(JSON.stringify(config))
}