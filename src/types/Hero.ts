import { z } from "zod";
import { HeroSchema } from "@/schemas/HeroSchema";

export type Hero = z.infer<typeof HeroSchema>;
