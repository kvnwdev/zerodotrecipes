import { getRecipeBySlug } from "@/lib/recipes";
import { ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import { type Complexity } from "@/types/recipe";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";
import { ShareButton } from "./ShareButton";

const complexityColors: Record<Complexity, string> = {
  easy: "bg-green-500/10 text-green-500",
  medium: "bg-yellow-500/10 text-yellow-500",
  hard: "bg-red-500/10 text-red-500",
};

interface RecipePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { slug } = await params;
  const recipe = await getRecipeBySlug(slug);

  if (!recipe) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl space-y-8">
      <header className="space-y-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-gray-300 transition-colors duration-150 hover:text-gray-100"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to recipes
        </Link>
        <h1 className="text-4xl font-bold">{recipe.title}</h1>
        {recipe.description && (
          <p className="text-xl text-gray-400">{recipe.description}</p>
        )}
        <div className="flex items-center gap-4">
          <div className="flex items-center text-gray-500">
            <Clock className="mr-1 h-4 w-4" />
            <span>{recipe.time}</span>
          </div>
          <span
            className={`rounded-full px-2 py-1 text-xs ${
              complexityColors[recipe.complexity]
            }`}
          >
            {recipe.complexity}
          </span>
          <ShareButton />
        </div>
      </header>

      <Suspense
        fallback={<div className="h-96 animate-pulse rounded-lg bg-gray-800" />}
      >
        <div className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-blue-400">
          <MDXRemote
            source={recipe.content}
            options={{
              parseFrontmatter: false,
              mdxOptions: {
                format: "mdx",
              },
            }}
          />
        </div>
      </Suspense>
    </article>
  );
}
