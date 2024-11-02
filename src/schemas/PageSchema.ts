import { z } from "zod";
import { BlockSchema } from "@/schemas/BlockSchema";

export const PageCoreSchema = z.object({
  _type: z.literal("page"),
  _id: z.string(),
  path: z.string(),
  title: z.string(),
  noIndex: z.boolean().optional(),
  metaDescription: z.string().optional(),
  priority: z.number().min(0).max(100).optional(),
  changefreq: z
    .enum(["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"])
    .optional(),
});

export const PageSchema = PageCoreSchema.and(
  z.object({
    blocks: z.array(BlockSchema).optional(),
  }),
);
