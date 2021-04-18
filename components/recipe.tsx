import {Box, Image} from "@chakra-ui/react"
import Link from 'next/link'
import {RecipeModel} from "../model/recipe/recipeModel";

type ComponentProps = {
    recipe: RecipeModel
}

export default function Recipe({recipe}: ComponentProps) {
    return (
        <Link href={`/recipeInformation/${recipe.id}`} passHref>
            <Box id="recipe" maxW="230px" borderWidth="1px" borderRadius="lg" overflow="hidden" margin="8px">
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
        </Link>
    )
}