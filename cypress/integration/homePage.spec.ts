/// <reference types="cypress" />

describe("should render recipes", () => {
    beforeEach(() => {
        cy.visit("/");
    });
    it('should navbar content to be Cook Book', () => {
        cy.get('head title').should('contain', 'Cook Book')
    })
    it('should headings content to be', () => {
        cy.get('h1').should('contain', 'Cook Book')
        cy.get('h2').should('contain', 'Find a recipe by ingredients')
    })
    it("should render recipes after find button clicked", () => {
        cy.get('input').type('chocolate')
        cy.intercept(
            {
                method: 'GET',
                url: '/recipes/*',
            },
            [{
                "id": 523194,
                "title": "MockedData",
                "image": "https://spoonacular.com/recipeImages/523194-312x231.jpg",
                "imageType": "jpg",
                "usedIngredientCount": 3,
                "missedIngredientCount": 0,
                "missedIngredients": [],
                "usedIngredients": [
                    {
                        "id": 19081,
                        "amount": 4.0,
                        "unit": "oz",
                        "unitLong": "ounces",
                        "unitShort": "oz",
                        "aisle": "Sweet Snacks",
                        "name": "chocolate",
                        "original": "4oz 100% Cacao Unsweetened Chocolate",
                        "originalString": "4oz 100% Cacao Unsweetened Chocolate",
                        "originalName": "100% Cacao Unsweetened Chocolate",
                        "metaInformation": [
                            "unsweetened",
                            "100%"
                        ],
                        "meta": [
                            "unsweetened",
                            "100%"
                        ],
                        "extendedName": "100% unsweetened chocolate",
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/milk-chocolate.jpg"
                    },
                    {
                        "id": 19904,
                        "amount": 7.0,
                        "unit": "oz",
                        "unitLong": "ounces",
                        "unitShort": "oz",
                        "aisle": "Sweet Snacks",
                        "name": "dark chocolate",
                        "original": "7oz Sugar-Free Dark Chocolate",
                        "originalString": "7oz Sugar-Free Dark Chocolate",
                        "originalName": "Sugar-Free Dark Chocolate",
                        "metaInformation": [
                            "dark",
                            "sugar-free"
                        ],
                        "meta": [
                            "dark",
                            "sugar-free"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/dark-chocolate-pieces.jpg"
                    },
                    {
                        "id": 19081,
                        "amount": 7.0,
                        "unit": "oz",
                        "unitLong": "ounces",
                        "unitShort": "oz",
                        "aisle": "Sweet Snacks",
                        "name": "milk chocolate",
                        "original": "7oz Sugar-Free Milk Chocolate",
                        "originalString": "7oz Sugar-Free Milk Chocolate",
                        "originalName": "Sugar-Free Milk Chocolate",
                        "metaInformation": [
                            "sugar-free"
                        ],
                        "meta": [
                            "sugar-free"
                        ],
                        "image": "https://spoonacular.com/cdn/ingredients_100x100/milk-chocolate.jpg"
                    }
                ],
                "unusedIngredients": [],
                "likes": 33
            }]
        )
        cy.get('button').contains('Find').click();
        cy.get('h3').should('contain', 'Recipes')
        cy.get('#history').find('li').should('contain', 'chocolate')
        cy.get('#recipes>#recipe').contains( "MockedData")
    })
})