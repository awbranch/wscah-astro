import { z } from "zod";
import { TitleCardSchema } from "@/schemas/TitleCardSchema";

export type TitleCard = z.infer<typeof TitleCardSchema>;
