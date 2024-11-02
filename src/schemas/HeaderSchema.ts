import { z } from "zod";
import { PortableTextBlockArraySchema } from "@/schemas/PortableTextBlockArraySchema";
import { MenuSchema } from "@/schemas/MenuSchema";

export const AlertPaletteSchema = z.enum(["blue", "dark-blue", "orange"]);

export const HeaderSchema = z
  .object({
    _type: z.literal("header"),
    _id: z.string(),
    menus: z.array(MenuSchema),
  })
  .and(
    z.union([
      z.object({
        showAlert: z.literal(true),
        alertMessage: PortableTextBlockArraySchema,
        alertPalette: AlertPaletteSchema,
      }),
      z.object({
        showAlert: z.literal(false),
      }),
    ]),
  );
