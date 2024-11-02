import { z } from "zod";
import { ImpactCardSchema } from "@/schemas/ImpactCardSchema";

export type ImpactCard = z.infer<typeof ImpactCardSchema>;
