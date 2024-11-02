import { z } from "zod";
import { PageHeaderSchema } from "@/schemas/PageHeaderSchema";

export type PageHeader = z.infer<typeof PageHeaderSchema>;
