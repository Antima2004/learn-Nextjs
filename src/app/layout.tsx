import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css"

export const metadata={
    title:'learn',
    description:'heavy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar/>

        {/* Main content */}
        <main className="grow">
          {children}
        </main>

        <Footer/>
      </body>
    </html>
  );
}