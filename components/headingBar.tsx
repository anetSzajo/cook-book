import {Box, Heading} from "@chakra-ui/react";
import Head from "next/head";

export default function HeadingBar() {
    return (
        <Box>
            <Head>
                <title>Cook Book</title>
            </Head>
            <Box>
                <Heading as="h1" size="lg" fontSize="50px" textAlign={"center"}>
                    Cook Book
                </Heading>
            </Box>
        </Box>
    )
}