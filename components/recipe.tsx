import {Box, Image} from "@chakra-ui/react"
import {RecipeModel} from "../model/recipe/recipeModel";
import React from "react";

type ComponentProps = {
    recipe: RecipeModel
}

export default function Recipe({recipe}: ComponentProps) {
    return (
        <Box maxW="230px" borderWidth="1px" borderRadius="lg" overflow="hidden" margin="8px">
            <Image src={recipe.image} alt={recipe.title}/>
            <Box p="6">
                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {recipe.title}
                </Box>
            </Box>
        </Box>
    )
}