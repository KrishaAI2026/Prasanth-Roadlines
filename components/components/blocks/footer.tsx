import { Footer7 } from "@/components/ui/footer-7";

interface SiteSettings { phone1?: string; email?: string; }

export default function Footer({ siteSettings }: { siteSettings?: SiteSettings }) {
  const phone1 = siteSettings?.phone1 || "9948729999";
  const email = siteSettings?.email || "prasanthroadlines@gmail.com";

  return (
    <div id="contact">
      <Footer7 phone1={phone1} email={email} />
    </div>
  );
}
