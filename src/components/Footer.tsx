export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 px-6 py-4 mt-auto">
      <div className="max-w-7xl mx-auto text-center text-sm">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
}
