import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry.lib";
import ThemeProviderWrapper from "@/providers/theme-wrapper.providers";
import { Navbar } from "@/components/navbar/navbar.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Company | Sancrisoft Challenge",
  description:
    "Responsive multi-step form to create and submit company information. Built with Next.js, TypeScript, and styled-components as part of the Sancrisoft technical challenge.",
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Styled Components",
    "Multi-step form",
    "Sancrisoft Challenge",
    "Company creation form",
  ],
  authors: [{ name: "Néstor Vargas" }],
  openGraph: {
    title: "Create Company | Sancrisoft Challenge",
    description:
      "Multi-step company creation form built with Next.js, TypeScript, and styled-components.",
    url: "https://sancrisoft-zeta.vercel.app/",
    siteName: "Sancrisoft Challenge",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className} `}>
        <StyledComponentsRegistry>
          <ThemeProviderWrapper>
            <header>
              <Navbar name="New Company" />
            </header>
            <main>{children}</main>
          </ThemeProviderWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
