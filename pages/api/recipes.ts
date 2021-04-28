import Api from '../../Api';
import {AxiosResponse} from "axios";
import {NextApiRequest, NextApiResponse} from "next";
import {RecipeModel} from "../../model/recipe/recipeModel";

export const historyData: Map<string, RecipeModel[]> = new Map();

export default async (request: NextApiRequest, response: NextApiResponse<RecipeModel[] | { message: string }>) => {
    const ingredients: string = request.query.ingredients as string;

    if (!ingredients) {
        response.status(400).json({message: "Bad request. Missing ingredients in query parameter."})
        return;
    }
    if (historyData.has(ingredients)) {
        response.send(historyData.get(ingredients));
        return;
    } else {
        try {
            const recipesResponse: AxiosResponse<RecipeModel[]> = await Api.Api.searchRecipesByIngredients(ingredients) as any;
            if (recipesResponse.status == 200) {
                historyData.set(ingredients, recipesResponse.data);
                response.send(recipesResponse.data)
            }
        } catch (e) {
            if (e.message.includes('401')) {
                response.status(503).json({message: "Sorry, server is not ready to handle your request. Please try again later."})
            } else {
                response.status(500).json({message: "Sorry, server is unable to handle your request. Please contact with host."})
            }
        }
    }


}
