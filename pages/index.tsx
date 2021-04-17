import Head from 'next/head';
import {Box, Button, Center, Container, Flex, Heading, Input} from "@chakra-ui/react"
import React from "react";
import History from "../components/history";
import RecipesList from "../components/recipesList";
import {Grid, GridItem} from "@chakra-ui/react"
import Footer from "../components/footer";
import FindRecipes from "../components/findRecipes";
import NavBar from "../components/navBar";


export default function Home() {

    const [isFindButtonClicked, setFindButtonClicked] = React.useState(false);

    const handleFindButton = (query: string) => {
        // const encodedUrl = `/recipe/complexSearch?recipe=${encodeURIComponent(query)}`
        setFindButtonClicked(true);
    }

// klucz: utf8, wartosc: odpowiedz z api
// zrob zapytanie do api
// dodaj wartosc do mapy gdzie kluczem bedzie path i wartoscia odpowiedz z api

    return (
        <Grid
            h="100vh"
            templateRows={{base: "repeat(9, 1fr)", md: "repeat(6, 1fr)"}}
            templateColumns={{base: "1fr", md: "repeat(4, 1fr)"}}
            gap={4}
        >
            <GridItem colSpan={{base: 1, md: 4}} rowSpan={1}  bg="lightGray">
               <NavBar />
            </GridItem>
            <GridItem colSpan={{base: 1, md: 3}} rowSpan={2}>
                <FindRecipes handleFindButton={handleFindButton}/>
            </GridItem>
            <GridItem colSpan={{base: 1, md: 1}} rowSpan={2}>
                <History recentQueries={["Pizza", "Burger", "Cake", "Nuddle", "Cheese", "Egg", "Soup", "Chocolate", "Muffin", "Ice creams"]}/>
            </GridItem>
            <GridItem colSpan={{base: 1, md: 4}} rowSpan={3}>
                {isFindButtonClicked ?
                    <RecipesList/>
                    :
                    null
                }
            </GridItem>
            <GridItem colSpan={{base: 0.5, md: 4}} rowSpan={1}  bg="lightGray">
                <Footer/>
            </GridItem>
        </Grid>
    )
}
