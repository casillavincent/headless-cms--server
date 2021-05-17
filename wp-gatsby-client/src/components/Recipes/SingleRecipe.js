import React from "react"

const SingleRecipe = ({
  articleLink,
  recipeAuthor,
  recipeTitle,
  recipeOverview,
  thumbnail,
}) => {
  return (
    <article className="single-item">
      <img srcSet={thumbnail} alt={recipeTitle} width="250" />
      <h2>{recipeTitle}</h2>
      <p className="author">{recipeAuthor}</p>
      <p className="overview">{recipeOverview}</p>
      <a href={articleLink}>View Recipe</a>
    </article>
  )
}

export default SingleRecipe
