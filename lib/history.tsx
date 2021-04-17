import {RecipeModel} from "../model/recipe/recipeModel";

export function addQueryToHistory(query: string, recipes: RecipeModel[]) {
    localStorage.setItem(query, JSON.stringify(recipes));
}

export function getRecipesFromHistory(query: string): RecipeModel[] {
    return JSON.parse(localStorage.getItem(query)) || [];
}