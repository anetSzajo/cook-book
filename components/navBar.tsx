import {Box, Heading} from "@chakra-ui/react";
import Head from "next/head";

export default function NavBar() {
    return (
        <Box>
            <Head>
                <title>Cook Book</title>
            </Head>
            <Box d="flex" mt="4" justifyContent="center" alignItems="center">
                <Heading size="lg" fontSize="50px" textAlign={"center"}>
                    Cook Book
                </Heading>
            </Box>
        </Box>
    )
}