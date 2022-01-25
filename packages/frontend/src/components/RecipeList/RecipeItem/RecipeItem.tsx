import { RecipeItemFragment } from "@/generated/graphql"

export const RecipeItem = ({id, title}: RecipeItemFragment) => {
  return (
    <div>
      <p>RecipeItem</p>
      <p>ID: {id}</p>
      <p>title: {title}</p>
    </div>
  )
}