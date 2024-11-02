import type { Event } from "@/types/Event";
import type { News } from "@/types/News";
import type { Page } from "@/types/Page";

import { createClient } from "@sanity/client";
import { I } from "dist/_worker.js/chunks/astro/env-setup_DUaZ-hTo.mjs";

const SANITY_PROJECT_ID = "n427st2j";
const SANITY_DATASET = "production";
const SANITY_API_VERSION = "2024-06-21";

const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: false,
});

export function getClient() {
  return client;
}

// TODO: Add caching of results during static builds to cut down on API calls
export async function getPage(path: string) {
  let page = await getClient().fetch<Page>(
    `*[_type == "page" && path == $path][0]`,
    {
      path: path,
    }
  );
  return page;
}

export async function getNewsStory(slug: string) {
  return getClient().fetch<News>(
    `*[_type == "news" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}

export async function getEvent(slug: string) {
  return getClient().fetch<Event>(
    `*[_type == "event" && slug.current == $slug][0]`,
    {
      slug,
    }
  );
}
