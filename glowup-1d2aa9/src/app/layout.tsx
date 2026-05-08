import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className="h-full bg-black text-white">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Glowup</title>
      </head>
      <body className="h-full flex flex-col">
        <header className="bg-black py-4">
          <nav className="container mx-auto flex justify-between">
            <a href="#" className="text-lg font-serif text-gold">Glowup</a>
            <ul className="flex items-center space-x-4">
              <li>
                <a href="#" className="text-lg font-serif text-white hover:text-gold">Home</a>
              </li>
              <li>
                <a href="#" className="text-lg font-serif text-white hover:text-gold">Services</a>
              </li>
              <li>
                <a href="#" className="text-lg font-serif text-white hover:text-gold">About</a>
              </li>
              <li>
                <a href="#" className="text-lg font-serif text-white hover:text-gold">Contact</a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-black py-4">
          <div className="container mx-auto text-center text-lg font-serif text-white">
            &copy; 2024 Glowup
          </div>
        </footer>
      </body>
    </html>
  );
}