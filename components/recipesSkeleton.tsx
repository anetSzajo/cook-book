import {Box} from "@chakra-ui/react";
import {Skeleton} from "@chakra-ui/react";
import React from "react";

export default function RecipesSkeleton(){
    return(
        <Box d="flex" flexDirection="row" alignItems="center" justifyContent="center" flexWrap="wrap">
            <Skeleton height="244px" width="230px" margin="5px" borderRadius="8px"/>
            <Skeleton height="244px" width="230px" margin="5px" borderRadius="8px"/>
            <Skeleton height="244px" width="230px" margin="5px" borderRadius="8px"/>
            <Skeleton height="244px" width="230px" margin="5px" borderRadius="8px"/>
        </Box>
    )
}