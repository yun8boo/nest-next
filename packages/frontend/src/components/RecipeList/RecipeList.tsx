import { gql } from '@apollo/client';
import { useRecipesQuery } from "@/generated/graphql"
import { RecipeItem,  recipeItemFragment} from "./RecipeItem"

export const recipesQuery = gql`
  ${recipeItemFragment}
  query recipes ($orderBy: RecipesOrderByInput, $searchValue: String, $skip: Int, $take: Int) {
    recipes(orderBy: $orderBy, searchValue: $searchValue, skip: $skip, take: $take) {
      ...RecipeItem
    }
  }
`;


export const RecipeList = () => {
  const {data, error, loading} = useRecipesQuery()
  console.log({data, error, loading});
  if(!data) return null
  return (
    <ul>
      {
        data.recipes.map(recipe => {
          return (
            <li key={recipe.id}><RecipeItem {...recipe} /></li>
          )
        })
      }
    </ul>
  )
}