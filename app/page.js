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
        <div>
          <Link href="http://localhost:3000/week-3">
            Week 3 Page
          </Link>
        </div>
        <div>
          <Link href="http://localhost:3000/week-4">
            Week 4 Page
          </Link>
        </div>
        <div>
          <Link href="http://localhost:3000/week-5">
            Week 5 Page
          </Link>
        </div>
    </main>
  );
};