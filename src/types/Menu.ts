import { z } from "zod";
import { MenuSchema } from "@/schemas/MenuSchema";

export type Menu = z.infer<typeof MenuSchema>;
