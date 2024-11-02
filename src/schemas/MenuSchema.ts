import { z } from "zod";
import { MenuItemSchema } from "@/schemas/MenuItemSchema";

export const MenuSchema = z
  .object({
    _type: z.literal("menu"),
    _key: z.string(),
    name: z.string(),
    variant: z.enum(["text", "button"]),
  })
  .and(
    z.union([
      z.object({
        action: z.literal("link"),
        href: z.string(),
      }),
      z.object({
        action: z.literal("menu"),
        items: z.array(MenuItemSchema),
      }),
    ]),
  );

