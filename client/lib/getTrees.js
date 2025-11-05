import trees from "./data/trees.json";

export async function getTrees() {
  // Could be replaced with a real API / DB later
  return trees;
}
