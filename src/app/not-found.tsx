import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="mb-4 text-4xl font-bold">404</h1>
      <p className="mb-8 text-gray-400">Recipe not found</p>
      <Link href="/" className="text-green-400 hover:underline">
        Return to recipes
      </Link>
    </div>
  );
}
