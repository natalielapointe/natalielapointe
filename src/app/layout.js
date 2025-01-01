import "./globals.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="background shimmer">
        {children}
      </body>
    </html>
  );
}
