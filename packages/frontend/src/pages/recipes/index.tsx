import { gql } from "@apollo/client";
import { RecipeList } from "@/components/RecipeList"
import { useState } from "react";

const Recipes = () => {
  return (
    <div>
      <RecipeList />
    </div>
  )
}

export default Recipes