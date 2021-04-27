import Recipe from './recipe';
import {Box} from "@chakra-ui/react";
import {RecipeModel} from "../model/recipe/recipeModel";

type ComponentProps = {
    recipes?: RecipeModel[];
}

export default function RecipesList({recipes}: ComponentProps) {
    return (
        <Box id="recipes" d="flex" flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center"
             overflow="scroll">
            {recipes.map(recipe =>
                <Recipe key={recipe.id} recipe={recipe}/>
            )}
        </Box>
    )
}