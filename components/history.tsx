import {Box, Heading, Link, ListItem, OrderedList} from "@chakra-ui/react";

type ComponentProps = {
    recentQueries: Array<string>
}

export default function History({recentQueries}: ComponentProps) {
    return (
        <Box d="flex" flexDirection="column" alignItems="center" justifyContent="center" h="100%" borderLeft={{md: "1px solid lightgray"}}
        borderTop={{base: "1px solid lightgray",  md: "0"}} borderBottom={{base: "1px solid lightgray", md: "0"}} padding="1rem">
            <Heading as="h2" size="md" d="flex" alignItems="center">
                Last 10 recipes
            </Heading>
            <Box overflowY="scroll" d="flex" alignItems="center" justifyContent="center" w="100%" paddingTop="8px">
                <OrderedList h="100%">
                    {recentQueries.map(query =>
                        <ListItem key={query}>
                            <Link href={`/${query}`}>{query}</Link>
                        </ListItem>
                    )}
                </OrderedList>
            </Box>
        </Box>
    )
}