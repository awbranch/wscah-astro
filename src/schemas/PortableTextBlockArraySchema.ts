import { z } from "zod";
import type { PortableTextBlock } from "sanity";

export const PortableTextBlockArraySchema = z
  .array(
    z
      .object({
        _key: z.string(),
        _type: z.string(),
      })
      .passthrough(),
  )
  .transform((value) => value as PortableTextBlock[]);

