import React from "react"
import SingleRecipe from "./SingleRecipe"

const Recipes = ({ arr }) => {
  return (
    <section className="featured-recipes">
      {arr.map((recipe, i) => {
        const {
          articleLink,
          recipeAuthor,
          recipeOverview,
          recipeTitle,
        } = recipe.node.recipes
        const thumbnail = recipe.node.recipes.mainThumbnail.srcSet
        return (
          <SingleRecipe
            articleLink={articleLink}
            recipeAuthor={recipeAuthor}
            recipeTitle={recipeTitle}
            recipeOverview={recipeOverview}
            thumbnail={thumbnail}
            key={i}
          />
        )
      })}
    </section>
  )
}

export default Recipes
