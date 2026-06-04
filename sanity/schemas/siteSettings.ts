import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "contact", title: "Contact Info" },
    { name: "colors",  title: "Brand Colors" },
  ],
  fields: [
    defineField({
      name: "phone1",
      title: "Primary Phone Number",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "phone2",
      title: "Secondary Phone Number",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp Number (with country code, e.g. 919407279999)",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "address",
      title: "Office Address",
      type: "text",
      rows: 3,
      group: "contact",
    }),
    defineField({
      name: "workingHours",
      title: "Working Hours",
      type: "string",
      group: "contact",
    }),
    defineField({
      name: "primaryColor",
      title: "Primary Color (Brand Orange)",
      type: "string",
      description: "Hex code e.g. #f97316 — used for buttons, accents, highlights",
      initialValue: "#f97316",
      group: "colors",
    }),
    defineField({
      name: "darkColor",
      title: "Dark Background Color",
      type: "string",
      description: "Hex code e.g. #0d1f3c — used for dark sections background",
      initialValue: "#0d1f3c",
      group: "colors",
    }),
    defineField({
      name: "navColor",
      title: "Navbar Background Color",
      type: "string",
      description: "Hex code e.g. #1e3a5f — used for navbar when scrolled",
      initialValue: "#1e3a5f",
      group: "colors",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
