import { gql } from "@apollo/client";
import { RecipeList } from "@/components/RecipeList"

// export const recipesQuery = gql`
//   ${recipeListFragment}
//   query recipes ($orderBy: RecipesOrderByInput, $searchValue: String, $skip: Int, $take: Int) {
//     recipes(orderBy: $orderBy, searchValue: $searchValue, skip: $skip, take: $take) {
//       ...RecipeList
//     }
//   }
// `;

const Recipes = () => {
  return (
    <div>
      <RecipeList />
    </div>
  )
}

export default Recipes