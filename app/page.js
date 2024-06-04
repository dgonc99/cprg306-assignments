import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <div>
        <Link href="http://localhost:3000/week-2">
        Week 2 Page
      </Link>
        </div>
      <Link href="http://localhost:3000/week-3">
        Week 3 Page
      </Link>
    </main>
  );
};