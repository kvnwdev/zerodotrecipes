import { getAllRecipes } from "@/lib/recipes";
import { RecipeCard } from "@/components/RecipeCard";

export default async function Home() {
  const recipes = await getAllRecipes();

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Recipes</h1>
        <p className="text-muted-foreground">
          A collection of my personal recipes I have crafted over the years.
        </p>
      </section>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.slug} recipe={recipe} />
        ))}
      </div>

      {recipes.length === 0 && (
        <div className="py-12 text-center text-gray-500">
          <p>No recipes found. Add your first recipe to the /recipes folder.</p>
        </div>
      )}
    </div>
  );
}
