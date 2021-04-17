import Recipe from './recipe';
import {chocolateRecipes} from "../mock/data";
import {Box, Heading} from "@chakra-ui/react";
import React from "react";


export default function RecipesList() {
    return (
        <Box d="flex" flexDirection="column" alignItems="center" justifyContent="center" h="100%">
            <Heading as="h1" size="lg" d="flex" alignItems="center">
                Recipes
            </Heading>
            <Box d="flex" flexDirection="row" flexWrap="wrap" alignItems="center" justifyContent="center" overflow="scroll">
                {chocolateRecipes.map(recipe =>
                    <Recipe key={recipe.id} recipe={recipe} />
                )}
            </Box>
        </Box>
    )
}