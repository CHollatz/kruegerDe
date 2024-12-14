import logo from "../assets/logo.png";

export const metadata = {
  title: "Fabian Krüger",
  description: "Die Stimme für dein Projekt",
  image: logo.src,
  url: "https://fabian-krüger.de/",
  type: "website",
  robots: "follow, index",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
