import { z } from "zod";

import { PortableTextBlockArraySchema } from "@/schemas/PortableTextBlockArraySchema";
import { SlugSchema } from "@/schemas/SlugSchema";
import { BlockSchema } from "@/schemas/BlockSchema";
import { AddressSchema } from "@/schemas/AddressSchema";
import { OnlineMeetingSchema } from "@/schemas/OnlineMeetingSchema";
import { ImageSchema } from "@/schemas/ImageSchema";

const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
const timeRegex = /^(1[0-2]|[1-9]):[0-5][0-9] [AaPp][Mm]$/;

const LocationInfoSchema = z.union([
  z.object({
    locationType: z.literal("address"),
    location: z.string(),
    address: AddressSchema.omit({ _key: true }),
    mapUrl: z.string().optional(),
  }),
  z.object({
    locationType: z.literal("online"),
    location: z.string(),
    onlineMeeting: OnlineMeetingSchema,
  }),
  z.object({
    locationType: z.literal("none"),
  }),
]);

const AllDayInfoSchema = z.union([
  z.object({
    allDay: z.literal(true),
  }),
  z.object({
    allDay: z.literal(false),
    startTime: z.string().refine((date) => timeRegex.test(date), {
      message: "Invalid date format. Please use HH:MM [AM|PM].",
    }),
    endTime: z.string().refine((date) => timeRegex.test(date), {
      message: "Invalid date format. Please use HH:MM [AM|PM].",
    }),
  }),
]);

export const EventCoreSchema = z
  .object({
    _type: z.literal("event"),
    _id: z.string(),
    title: z.string(),
    startDate: z.string().refine((date) => dateRegex.test(date), {
      message: "Invalid date format. Please use YYYY-MM-DD.",
    }),
    endDate: z.string().refine((date) => dateRegex.test(date), {
      message: "Invalid date format. Please use YYYY-MM-DD.",
    }),
    slug: SlugSchema,
    summary: z.string(),
    previewImage: ImageSchema.optional(),
    text: PortableTextBlockArraySchema,
  })
  .and(AllDayInfoSchema)
  .and(LocationInfoSchema);

export const EventSchema = EventCoreSchema.and(
  z.object({
    blocks: z.array(BlockSchema).optional(),
  }),
);
