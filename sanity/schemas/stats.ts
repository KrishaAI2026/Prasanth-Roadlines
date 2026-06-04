import { defineType, defineField } from "sanity";

export const stats = defineType({
  name: "stats",
  title: "Stats Ribbon",
  type: "document",
  fields: [
    defineField({
      name: "stat1Value",
      title: "Stat 1 Value",
      type: "string",
      description: "e.g. 2,000+ KM",
    }),
    defineField({
      name: "stat1Label",
      title: "Stat 1 Label",
      type: "string",
      description: "e.g. Routes Daily",
    }),
    defineField({
      name: "stat2Value",
      title: "Stat 2 Value",
      type: "string",
      description: "e.g. 500+",
    }),
    defineField({
      name: "stat2Label",
      title: "Stat 2 Label",
      type: "string",
      description: "e.g. Deliveries/Month",
    }),
    defineField({
      name: "stat3Value",
      title: "Stat 3 Value",
      type: "string",
      description: "e.g. 50+",
    }),
    defineField({
      name: "stat3Label",
      title: "Stat 3 Label",
      type: "string",
      description: "e.g. Trusted Clients",
    }),
    defineField({
      name: "stat4Value",
      title: "Stat 4 Value",
      type: "string",
      description: "e.g. 100%",
    }),
    defineField({
      name: "stat4Label",
      title: "Stat 4 Label",
      type: "string",
      description: "e.g. Compliance",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Stats Ribbon" };
    },
  },
});
