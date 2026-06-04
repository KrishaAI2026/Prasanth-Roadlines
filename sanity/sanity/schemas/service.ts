import { defineType, defineField } from "sanity";

export const service = defineType({
  name: "service",
  title: "Services",
  type: "document",
  fields: [
    defineField({
      name: "order",
      title: "Order (1, 2, 3...)",
      type: "number",
    }),
    defineField({
      name: "number",
      title: "Card Number",
      type: "string",
      description: "e.g. 001, 002, 003",
    }),
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Service Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "image",
      title: "Service Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "number" },
  },
});
