export interface RecipeModel {
    id:                    number;
    title:                 string;
    image:                 string;
    imageType:             string;
    usedIngredientCount:   number;
    missedIngredientCount: number;
    missedIngredients:     any[];
    usedIngredients:       UsedIngredient[];
    unusedIngredients:     any[];
    likes:                 number;
}

export interface UsedIngredient {
    id:              number;
    amount:          number;
    unit:            string;
    unitLong:        string;
    unitShort:       string;
    aisle:           string;
    name:            string;
    original:        string;
    originalString:  string;
    originalName:    string;
    metaInformation: string[];
    meta:            string[];
    extendedName?:   string;
    image:           string;
}