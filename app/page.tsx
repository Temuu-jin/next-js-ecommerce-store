import './globals.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className=" align-top ">
        <h1 className="flex justify-center text-xl">
          Welcome to Yazu OnlineStore
        </h1>
        <br />

        <p className="flex justify-center text-l">Order Sushi Online</p>
        <br />

        <Link className="flex justify-center text-l" href="/products">
          Order Now!
        </Link>
      </div>
    </main>
  );
}
