import { z } from "zod";

export const ClickAreaSchema = z.enum(["card", "button", "hybrid", "none"]);
