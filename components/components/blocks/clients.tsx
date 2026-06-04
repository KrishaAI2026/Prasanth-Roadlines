import { Logos3, type ClientLogo } from "@/components/ui/logos3";

const logos: ClientLogo[] = [
  { id: "1", description: "Client 1",       image: "/logos/client1.png", className: "h-14 w-auto object-contain" },
  { id: "2", description: "Client 2",       image: "/logos/client2.png", className: "h-14 w-auto object-contain" },
  { id: "3", description: "Client 3",       image: "/logos/client3.png", className: "h-14 w-auto object-contain" },
  { id: "4", description: "Matrix Labs",    image: "/logos/client4.png", className: "h-14 w-auto object-contain" },
  { id: "5", description: "Indian Oil",     image: "/logos/client5.gif", className: "h-14 w-auto object-contain" },
  { id: "6", description: "KLG",            image: "/logos/client6.png", className: "h-14 w-auto object-contain" },
  { id: "7", description: "APL",            image: "/logos/client7.png", className: "h-14 w-auto object-contain" },
  { id: "8", description: "Andhra Surgical",image: "/logos/client8.png", className: "h-14 w-auto object-contain" },
];

export default function Clients() {
  return (
    <Logos3
      heading="Trusted by Industry Leaders"
      subheading="Proudly serving leading companies across chemical, pharmaceutical and industrial sectors across India"
      logos={logos}
    />
  );
}
