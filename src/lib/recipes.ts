import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { type Recipe } from "@/types/recipe";

const recipesDirectory = path.join(process.cwd(), "public/recipes");

export async function getAllRecipes(): Promise<Recipe[]> {
  // Create recipes directory if it doesn't exist
  if (!fs.existsSync(recipesDirectory)) {
    fs.mkdirSync(recipesDirectory, { recursive: true });
  }

  const fileNames = fs.readdirSync(recipesDirectory);
  const recipes = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(recipesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        time: data.time as string,
        complexity: data.complexity as Recipe["complexity"],
        content,
      };
    });

  return recipes;
}

export async function getRecipeBySlug(slug: string): Promise<Recipe | null> {
  try {
    const fullPath = path.join(recipesDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title as string,
      description: data.description as string,
      time: data.time as string,
      complexity: data.complexity as Recipe["complexity"],
      content,
    };
  } catch (error) {
    return null;
  }
}
