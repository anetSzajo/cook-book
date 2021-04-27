import {Box, Grid, GridItem, Heading} from "@chakra-ui/react"
import React from "react";
import History from "../components/history";
import RecipesList from "../components/recipesList";
import Footer from "../components/footer";
import FindRecipes from "../components/findRecipes";
import HeadingBar from "../components/headingBar";
import {RecipeModel} from "../model/recipe/recipeModel";
import {addQueryToHistory, getRecipesFromHistory} from "../lib/history";
import RecipesSkeleton from "../components/recipesSkeleton";


export default function Home() {

    const [recipesData, setRecipesData] = React.useState([]);
    const [recentQueries, setRecentQueries] = React.useState(Object.keys(localStorage))
    const [loading, setLoading] = React.useState(false)


    async function handleFindButton(query: string) {
        setLoading(true);
        setRecentQueries(previousState => [...previousState, query]);
        if (recentQueries.includes(query)) {
            setRecipesData(getRecipesFromHistory(query));
            return;
        }
        try {
            const url = 'api/recipes?'
            const recipesResponse: Response = await fetch(url + new URLSearchParams({
                ingredients: query
            }));
            const recipes: RecipeModel[] = await recipesResponse.json();
            addQueryToHistory(query, recipes);
            setRecipesData(recipes);
            setLoading(false)
        } catch (err) {
            alert("Error occurred! " + err)
        }
    }

    const handleHistoryLinkClicked = (query: string) => {
        setRecipesData(getRecipesFromHistory(query));
    }

    return (
        <Grid
            h="100vh"
            templateRows={{base: "repeat(9, 1fr)", md: "repeat(6, 1fr)"}}
            templateColumns={{base: "1fr", md: "repeat(4, 1fr)"}}
            gap={4}
        >
            <GridItem colSpan={{base: 1, md: 4}} rowSpan={1} bg="rgb(56, 161, 105)" d="flex" flexDirection="column"
                      justifyContent="center">
                <HeadingBar/>
            </GridItem>
            <GridItem colSpan={{base: 1, md: 3}} rowSpan={2}>
                <FindRecipes handleFindButton={handleFindButton}/>
            </GridItem>
            <GridItem colSpan={{base: 1, md: 1}} rowSpan={2}>
                <History queries={recentQueries} handleHistoryLinkClicked={handleHistoryLinkClicked}/>
            </GridItem>
            <GridItem colSpan={{base: 1, md: 4}} rowSpan={3}>
                <Box d="flex" flexDirection="column" alignItems="center" justifyContent="center" h="100%">
                    {(recipesData?.length > 0 || loading)
                    &&
                    <Heading as="h3" size="lg" d="flex" alignItems="center">
                        Recipes
                    </Heading>
                    }
                    {loading
                        ?
                        <RecipesSkeleton/>
                        :
                        recipesData?.length > 0 && <RecipesList recipes={recipesData}/>
                    }
                </Box>
            </GridItem>
            <GridItem colSpan={{base: 0.5, md: 4}} rowSpan={1} bg="lightGray">
                <Footer/>
            </GridItem>
        </Grid>
    )
}