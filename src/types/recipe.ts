export type Complexity = "easy" | "medium" | "hard";

export interface Recipe {
  title: string;
  description: string;
  time: string;
  complexity: Complexity;
  slug: string;
  content: string;
}
