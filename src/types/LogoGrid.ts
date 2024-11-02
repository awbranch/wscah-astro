import { z } from "zod";
import { LogoGridSchema } from "@/schemas/LogoGridSchema";

export type LogoGrid = z.infer<typeof LogoGridSchema>;
