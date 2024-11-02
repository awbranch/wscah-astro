import { z } from "zod";
import { DataPointSchema } from "@/schemas/DataPointSchema";

export type DataPoint = z.infer<typeof DataPointSchema>;
