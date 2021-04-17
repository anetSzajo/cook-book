import Recipe from './recipe';
import {Box, Heading} from "@chakra-ui/react";
import {RecipeModel} from "../model/recipe/recipeModel";

type ComponentProps = {
    recipes?: RecipeModel[];
}

export default function RecipesList({recipes}: ComponentProps) {
    return (
        <Box d="flex" flexDirection="column" alignItems="center" justifyContent="center" h="100%">
            <Heading as="h1" size="lg" d="flex" alignItems="center">
                Recipes
            </Heading>
            <Box d="flex" flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center"
                 overflow="scroll">
                {recipes.map(recipe =>
                    <Recipe key={recipe.id} recipe={recipe}/>
                )}
            </Box>
        </Box>
    )
}