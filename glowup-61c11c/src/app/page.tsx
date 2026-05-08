import Link from 'next/link';

export default function Page() {
  return (
    <div className="h-full flex flex-col justify-center items-center">
      <nav className="mb-4">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-lg font-serif text-gold hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-lg font-serif text-gold hover:text-white">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-lg font-serif text-gold hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg font-serif text-gold hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className="text-5xl font-serif text-white">glowup</h1>
    </div>
  );
}