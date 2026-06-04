import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Company Name",
      type: "string",
    }),
    defineField({
      name: "location",
      title: "Location (e.g. Chennai, Tamil Nadu)",
      type: "string",
    }),
    defineField({
      name: "quote",
      title: "Testimonial / Review",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "rating",
      title: "Rating (1-5)",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: "order",
      title: "Display Order (1, 2, 3...)",
      type: "number",
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
    select: { title: "name", subtitle: "company" },
  },
});
