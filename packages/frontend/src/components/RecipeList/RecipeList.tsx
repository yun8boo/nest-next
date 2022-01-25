import { useRecipesQuery } from "@/generated/graphql"
import { RecipeItem } from "./RecipeItem"

export const RecipeList = () => {
  const {data, error, loading} = useRecipesQuery()
  console.log({data, error, loading});
  return (
    <ul>
      <RecipeItem />
    </ul>
  )
}