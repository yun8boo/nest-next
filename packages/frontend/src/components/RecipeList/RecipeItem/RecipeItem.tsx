import { RecipeItemFragment } from "@/generated/graphql"
import { gql } from "@apollo/client";

export const recipeItemFragment = gql`
  fragment RecipeItem on Recipe {
    id
    title
    description
    createdAt
    updatedAt
  }
`;

export const RecipeItem = ({id, title, description, createdAt, updatedAt,}: RecipeItemFragment) => {
  return (
    <div>
      <p>RecipeItem</p>
      <p>ID: {id}</p>
      <p>title: {title}</p>
      <p>description: {description}</p>
      <p>createdAt: {createdAt}</p>
      <p>updatedAt: {updatedAt}</p>
    </div>
  )
}