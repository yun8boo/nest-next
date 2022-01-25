import { useRecipesQuery } from "@/generated/graphql"
import { RecipeItem } from "./RecipeItem"

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