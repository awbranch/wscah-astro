import { z } from "zod";
import { MenuItemSchema } from "@/schemas/MenuItemSchema";

export type MenuItem = z.infer<typeof MenuItemSchema>;

