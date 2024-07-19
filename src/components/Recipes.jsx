/* eslint-disable react/prop-types */

export const Recipes = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.text}</li>
        ))}
      </ol>
      <p>
        <b>Calories: {calories.toFixed(1)}</b>
      </p>
      <img className="image" src={image} alt={title} />
    </div>
  );
};
