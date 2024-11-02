import { z } from "zod";
import { DataUnitSchema } from "@/schemas/DataCardSchema";
import { DataCardSchema } from "@/schemas/DataCardSchema";

export type DataUnit = z.infer<typeof DataUnitSchema>;
export type DataCard = z.infer<typeof DataCardSchema>;
