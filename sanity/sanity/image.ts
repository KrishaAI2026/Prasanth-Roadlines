import imageUrlBuilder from "@sanity/image-url";
import { client } from "./client";

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export function fileUrl(asset: any): string {
  if (!asset?.asset?._ref) return "";
  const ref: string = asset.asset._ref;
  // ref format: file-<id>-<extension>
  const [, id, ext] = ref.split("-");
  return `https://cdn.sanity.io/files/dxstz02z/production/${id}.${ext}`;
}
