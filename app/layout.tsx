// app/layout.tsx
import './globals.css'; // Import global CSS

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>My CRUD App</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 My App</p>
        </footer>
      </body>
    </html>
  );
}
