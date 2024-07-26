"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <div>
          <button onClick={() => router.push('/week-2')}>Week 2</button>
        </div>
        <div>
          <button onClick={() => router.push('/week-3')}>Week 3</button>
        </div>
        <div>
          <button onClick={() => router.push('/week-4')}>Week 4</button>
        </div>
        <div>
          <button onClick={() => router.push('/week-5')}>Week 5</button>
        </div>
        <div>
          <button onClick={() => router.push('/week-6')}>Week 6</button>
        </div>
        <div>
          <button onClick={() => router.push('/week-7')}>Week 7</button>
        </div>
        <div>
          <button onClick={() => router.push('/week-8')}>Week 8</button>
        </div>
        <div>
          <button onClick={() => router.push('/week-9')}>Week 9</button>
        </div>
    </main>
  );
};