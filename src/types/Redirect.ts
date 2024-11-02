import { z } from "zod";
import { RedirectSchema } from "@/schemas/RedirectSchema";

export type Redirect = z.infer<typeof RedirectSchema>;
