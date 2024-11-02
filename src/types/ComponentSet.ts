import { z } from "zod";
import { ComponentSetSchema } from "@/schemas/ComponentSetSchema";

export type ComponentSet = z.infer<typeof ComponentSetSchema>;
