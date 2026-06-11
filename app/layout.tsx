import "./globals.css";
import { ReduxProvider } from "./store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-gray-100">
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}