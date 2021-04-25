# Cook Book

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [How to run app](#how-to-run-app)
* [Features](#features)
* [To do...](#to-do)


## General info
**Cook Book** is a simple app with cooking recipes. Search for recipe by entering many ingredients. Browse recipes to choose the one to cook and get more information and instruction. Check last ten searches to quickly get your favourite recipe.

## Technologies
Next.js, TypeScript, Chakra, 
API: https://spoonacular.com/food-api/

## How to run app

To run app, please enter the following command in terminal:

`npm install && API_KEY=<YOUR_API_KEY> npm run build && npm run start`

**Notice:** Please replace `<YOUR_API_KEY>` with your personal api key from https://spoonacular.com/food-api/

## Features
* Search for recipe by ingredients
* Browse matched recipes
* Browse recipe information and instruction.
* Browse last 10 searches
* Click on last search to check the results

## To do...
* Update input validation (show alert if user click find button and no input entered)
* Improve error handling
* Implement cache for recipeInformation page
* Implement tests for recipeInformation page

