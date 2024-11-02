import { z } from "zod";
import { IconListItemSchema } from "@/schemas/IconListItemSchema";

export type IconListItem = z.infer<typeof IconListItemSchema>;
