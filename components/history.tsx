import {Box, Heading, ListItem, OrderedList, ScaleFade} from "@chakra-ui/react";
import React from "react";

type ComponentProps = {
    queries: Array<string>,
    handleHistoryLinkClicked: Function,
}

export default function History({queries, handleHistoryLinkClicked}: ComponentProps) {
    return (
        <Box d="flex" flexDirection="column" alignItems="center" justifyContent="center" h="100%"
             borderLeft={{md: "1px solid lightgray"}}
             borderTop={{base: "1px solid lightgray", md: "0"}} borderBottom={{base: "1px solid lightgray", md: "0"}}
             padding="1rem">
            <Heading as="h4" size="md" d="flex" alignItems="center">
                Last 10 searches
            </Heading>
            <Box id="history" overflowY="auto" d="flex" alignItems="center" justifyContent="center" w="100%"
                 paddingTop="8px">
                <OrderedList h="100%">
                    {queries.slice(Math.max(queries.length - 10, 0)).map((historyItem, index) =>
                        <ListItem key={`${historyItem}-${index}`}>
                            <ScaleFade initialScale={0.3} in={true}>
                                <a href='#' title={historyItem}
                                   onClick={() => handleHistoryLinkClicked(historyItem)}>{historyItem}</a>
                            </ScaleFade>
                        </ListItem>
                    )}
                </OrderedList>

            </Box>
        </Box>
    )
}