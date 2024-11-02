import { z } from "zod";
import { ReportSchema } from "@/schemas/ReportSchema";

export type Report = z.infer<typeof ReportSchema>;
