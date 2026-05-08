import { ReactNode } from 'react';

interface PageProps {
  children: ReactNode;
}

export default function Page({ children }: PageProps) {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-8 xl:p-10">
      {children}
    </div>
  );
}