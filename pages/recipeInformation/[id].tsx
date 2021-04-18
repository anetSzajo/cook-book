import {RecipeInformation} from '../../model/recipe/recipeInformationModel'
import {Badge, Box, Heading, Image} from "@chakra-ui/react"
import {ChevronLeftIcon, StarIcon} from '@chakra-ui/icons'
import {AxiosResponse} from "axios";
import Link from 'next/link'
import Api from "../../Api";


export async function getServerSideProps(context) {
    try {
        const getRecipeInformationData: AxiosResponse<RecipeInformation> = await Api.Api.getRecipeInformation(context.params.id) as any;
        return {
            props: getRecipeInformationData.data
        }
    } catch (err) {
        alert("Error occurred! " + err)
    }
}

export default function RecipePage(props: RecipeInformation) {
    return (
        <Box>
            <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden" d="flex" flexDirection="column"
                 alignItems="center" justifyContent="center" h="100%" w='100%' padding="8px" margin="2rem auto">
                <Heading as="h1" size="2xl" textAlign={"center"} padding="1rem">{props.title}</Heading>
                <Image src={props.image} alt={props.title}/>
                <Box p="6" d="flex" flexDirection="row" flexWrap="wrap">
                    <Box d="flex" alignItems="baseline" margin="4px">
                        {props.vegetarian &&
                        <Badge borderRadius="full" px="2" colorScheme="green">
                            Vegetarian
                        </Badge>
                        }
                    </Box>
                    <Box d="flex" alignItems="baseline" margin="4px">
                        {props.vegan &&
                        <Badge borderRadius="full" px="2" colorScheme="green">
                            Vegan
                        </Badge>
                        }
                    </Box>
                    <Box d="flex" alignItems="baseline" margin="4px">
                        {props.glutenFree &&
                        <Badge borderRadius="full" px="2" colorScheme="yellow">
                            Gluten Free
                        </Badge>
                        }
                    </Box>
                    <Box d="flex" alignItems="baseline" margin="4px">
                        {props.dairyFree &&
                        <Badge borderRadius="full" px="2" colorScheme="blue">
                            Dairy Free
                        </Badge>
                        }
                    </Box>
                </Box>
                <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                >
                    {props.servings} servings &bull; {props.readyInMinutes} minutes
                </Box>
                <Box>
                    <Box as="span" color="gray.600" fontSize="sm">
                        ${props.pricePerServing} per serving
                    </Box>
                </Box>
                <Box d="flex" mt="2" alignItems="center">
                    {props.aggregateLikes > 0 &&
                    <Box d="flex" flexDirection="row" alignItems="center"
                         justifyContent="center"><StarIcon marginRight="4px"/>{props.aggregateLikes} likes</Box>
                    }
                </Box>
                {props.instructions
                    ?
                    < Box dangerouslySetInnerHTML={{__html: props.instructions}} margin="1rem auto"></Box>
                    :
                    <Box>No instructions found. Please use Google.</Box>
                }
            </Box>
            <Box d="flex" flexDirection="row" alignItems="center" justifyContent="center">
                <Link href="/"><a><ChevronLeftIcon/>Back</a></Link>
            </Box>
        </Box>
    )
}