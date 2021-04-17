import {Grid, GridItem} from "@chakra-ui/react"
import React from "react";
import History from "../components/history";
import RecipesList from "../components/recipesList";
import Footer from "../components/footer";
import FindRecipes from "../components/findRecipes";
import NavBar from "../components/navBar";
import Api from '../Api';
import {AxiosResponse} from "axios";
import {RecipeModel} from "../model/recipe/recipeModel";

export default function Home() {

    const [isFindButtonClicked, setFindButtonClicked] = React.useState(false);
    const [recipesData, setRecipesData] = React.useState([]);

    async function handleFindButton(query: string) {
        setFindButtonClicked(true);
        try {
            const getRecipesData: AxiosResponse<RecipeModel[]> = await Api.Api.searchRecipesByIngredients(query) as any
            setRecipesData(getRecipesData.data)
        } catch (err) {
            alert("Error occurred! " + err)
        }
    }

    return (
        <Grid
            h="100vh"
            templateRows={{base: "repeat(9, 1fr)", md: "repeat(6, 1fr)"}}
            templateColumns={{base: "1fr", md: "repeat(4, 1fr)"}}
            gap={4}
        >
            <GridItem colSpan={{base: 1, md: 4}} rowSpan={1} bg="lightGray">
                <NavBar/>
            </GridItem>
            <GridItem colSpan={{base: 1, md: 3}} rowSpan={2}>
                <FindRecipes handleFindButton={handleFindButton}/>
            </GridItem>
            <GridItem colSpan={{base: 1, md: 1}} rowSpan={2}>
                <History
                    recentQueries={["Pizza", "Burger", "Cake", "Nuddle", "Cheese", "Egg", "Soup", "Chocolate", "Muffin", "Ice creams"]}/>
            </GridItem>
            <GridItem colSpan={{base: 1, md: 4}} rowSpan={3}>
                {isFindButtonClicked ?
                    <RecipesList recipes={recipesData}/>
                    :
                    null
                }
            </GridItem>
            <GridItem colSpan={{base: 0.5, md: 4}} rowSpan={1} bg="lightGray">
                <Footer/>
            </GridItem>
        </Grid>
    )
}
