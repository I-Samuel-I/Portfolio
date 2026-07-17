import FilmGrain from "../components/atoms/filmGrain";
import "../styles/globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      data-theme="dark"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children} <FilmGrain /></body>
    </html>
  );
}
