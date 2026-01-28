import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">MyApp</h1>

        {/* Links */}
        <div className="flex gap-6">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
