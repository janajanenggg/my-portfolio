import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-4 py-3">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <div className="space-x-4">
          <Link href="/"><a>Home</a></Link>
          <Link href="/about"><a>About</a></Link>
          <Link href="/projects"><a>Projects</a></Link>
          <Link href="/contact"><a>Contact</a></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
