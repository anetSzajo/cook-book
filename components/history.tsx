import {Box, Heading, ListItem, OrderedList} from "@chakra-ui/react";

type ComponentProps = {
    queries: Array<string>,
    handleHistoryLinkClicked: Function
}

export default function History({queries, handleHistoryLinkClicked}: ComponentProps) {
    return (
        <Box d="flex" flexDirection="column" alignItems="center" justifyContent="center" h="100%"
             borderLeft={{md: "1px solid lightgray"}}
             borderTop={{base: "1px solid lightgray", md: "0"}} borderBottom={{base: "1px solid lightgray", md: "0"}}
             padding="1rem">
            <Heading as="h2" size="md" d="flex" alignItems="center">
                Last 10 searches
            </Heading>
            <Box id="history" overflowY="scroll" d="flex" alignItems="center" justifyContent="center" w="100%" paddingTop="8px">
                <OrderedList h="100%">
                    {queries.slice(0, 10).map((historyItem, index) =>
                        <ListItem key={`${historyItem}-${index}`}>
                            <a href='#' title={historyItem}
                               onClick={() => handleHistoryLinkClicked(historyItem)}>{historyItem}</a>
                        </ListItem>
                    )}
                </OrderedList>
            </Box>
        </Box>
    )
}