import { gql } from "@apollo/client"

export const RecipeItemFragment = gql`
  fragment RecipeItem on Recipe {
    id
    title
    description
    createdAt
  }

`

export const RecipeItem = () => {
  return (
    <div>
      <p>RecipeItem</p>
    </div>
  )
}