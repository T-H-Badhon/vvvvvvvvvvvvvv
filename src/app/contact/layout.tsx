import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — NovaTech",
  description:
    "Get in touch with NovaTech for your software development needs. Request a free consultation or quote.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
