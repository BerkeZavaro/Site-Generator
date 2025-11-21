import { ReactNode } from "react";

interface LayoutShellProps {
  children: ReactNode;
}

export default function LayoutShell({ children }: LayoutShellProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav>
            {/* Header content */}
          </nav>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t mt-auto">
        <div className="container mx-auto px-4 py-4">
          {/* Footer content */}
        </div>
      </footer>
    </div>
  );
}

