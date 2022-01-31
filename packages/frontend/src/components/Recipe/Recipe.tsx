import { useRecipeQuery } from "@/generated/graphql"
import { gql } from "@apollo/client"

export const recipeQuery = gql`
  query recipe($recipeId: String!) {
    recipe(id:$recipeId) {
      id
      title
      description
    }
  }
`

export const Recipe = (id: string) => {
  const {data, error, loading} = useRecipeQuery({variables: {recipeId: id}})
  return (
    <div>
      <p>Recipe</p>
    </div>
  )
}