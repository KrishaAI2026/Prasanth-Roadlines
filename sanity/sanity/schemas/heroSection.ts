import { defineType, defineField } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
      description: "e.g. PRASANTH ROADLINES",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle (below title)",
      type: "string",
      description: "e.g. Delivering More Than Cargo",
    }),
    defineField({
      name: "description",
      title: "Description Text",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      description: "e.g. Get a Free Quote",
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Background image shown before the video expands",
      options: { hotspot: true },
    }),
    defineField({
      name: "video",
      title: "Hero Video",
      type: "file",
      description: "Upload an MP4 video for the hero section",
      options: { accept: "video/*" },
    }),
  ],
  preview: {
    prepare() {
      return { title: "Hero Section" };
    },
  },
});
