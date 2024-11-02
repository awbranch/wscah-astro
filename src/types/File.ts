import { z } from "zod";
import { FileSchema } from "@/schemas/FileSchema";

export type File = z.infer<typeof FileSchema>;
