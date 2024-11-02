import { z } from "zod";

export const MenuItemSchema = z
  .object({
    _type: z.literal("menuItem"),
    _key: z.string(),
    name: z.string(),
  })
  .and(
    z.union([
      z.object({
        header: z.literal(false),
        href: z.string(),
      }),
      z.object({
        header: z.literal(true),
      }),
    ]),
  );
