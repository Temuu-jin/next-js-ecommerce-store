import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div>
        <h1 className="text-center justify-center capitalize">
          Welcome to Yazu OnlineStore
        </h1>
        <br />

        <p>Order Sushi Online</p>
        <br />

        <Link href="/products">Order Now!</Link>
      </div>
    </main>
  );
}
