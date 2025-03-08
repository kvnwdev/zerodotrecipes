import Link from "next/link";
import { Clock } from "lucide-react";
import { type Recipe, type Complexity } from "@/types/recipe";

const complexityColors: Record<Complexity, string> = {
  easy: "bg-green-500/10 text-green-500",
  medium: "bg-yellow-500/10 text-yellow-500",
  hard: "bg-red-500/10 text-red-500",
};

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipes/${recipe.slug}`}
      className="block rounded-lg border border-gray-800 p-6 transition-colors hover:border-gray-700"
    >
      <h2 className="mb-2 text-xl font-semibold">{recipe.title}</h2>
      {recipe.description && (
        <p className="mb-4 line-clamp-2 text-gray-400">{recipe.description}</p>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-500">
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
      </div>
    </Link>
  );
}
