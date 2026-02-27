import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-screen bg-gray-100">
        {children}
      </body>
    </html>
  )
}