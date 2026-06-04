import { client } from "./client";

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`);
}

export async function getHeroSection() {
  return client.fetch(`*[_type == "heroSection"][0]`);
}

export async function getStats() {
  return client.fetch(`*[_type == "stats"][0]`);
}

export async function getServices() {
  return client.fetch(`*[_type == "service"] | order(order asc)`);
}

export async function getTestimonials() {
  return client.fetch(`*[_type == "testimonial"] | order(order asc)`);
}
