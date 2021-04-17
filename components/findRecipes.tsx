import {Box, Button, GridItem, Heading, Input} from "@chakra-ui/react";
import React from "react";

type ComponentProps = {
    handleFindButton: Function
}

export default function FindRecipes({handleFindButton}: ComponentProps) {
    const [query, setQuery] = React.useState("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.target.value.toLowerCase())


    return (
        <Box d="flex" flexDirection="column" alignItems="center" justifyContent="center" h="100%">
            <Heading size="lg" marginBottom="20px" textAlign={"center"}>
                Find a recipe by ingredients
            </Heading>
            <Input
                value={query}
                onChange={handleChange}
                placeholder="What ingredients do you have?"
                size="lg"
                focusBorderColor="green.400"
                marginBottom="20px"
                width={{base: "80%", md: "50%"}}
            />
            <Button colorScheme="green" size={"md"} marginBottom="20px" onClick={() => handleFindButton(query)}>
                Find
            </Button>
        </Box>
    )
}