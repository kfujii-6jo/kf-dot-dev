import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">My App</h1>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/projects">Projects</Link></li>
        </ul>
      </nav>
    </header>
  );
}