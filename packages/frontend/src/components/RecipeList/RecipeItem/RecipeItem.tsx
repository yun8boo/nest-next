import { RecipeItemFragment } from "@/generated/graphql"

export const RecipeItem = ({id, title, createdAt}: RecipeItemFragment) => {
  return (
    <div>
      <p>RecipeItem</p>
      <p>ID: {id}</p>
      <p>title: {title}</p>
      <p>createdAt: {createdAt}</p>
    </div>
  )
}