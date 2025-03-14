import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full p-4 flex justify-center items-center">
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Azvdo Logo"
          width={100}
          height={100}
          className="h-auto"
          crossOrigin="anonymous"
        />
      </Link>
    </header>
  );
}
