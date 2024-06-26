import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/RecipePage.module.css';

function IngredientsList({ ingredients }) {
  return (
    <>
      <h5 className="pb-1">Ingredients</h5>
      <hr className="w-100" style={{ backgroundColor: '#181818' }} />
      <ul className="w-100 p-0 m-0 pl-2 pr-2" style={{ listStyleType: 'none' }}>
        {ingredients.map((ingredient, index) => (
          <React.Fragment key={index}>
            <li className={styles.RecipeIngredients}>{ingredient}</li>
            {index < ingredients.length - 1 && (
              <hr
                key={`hr-${index}`}
                className="w-100"
                style={{ backgroundColor: 'rgba(243, 139, 41, 0.5)' }}
              />
            )}
          </React.Fragment>
        ))}
      </ul>
    </>
  );
}

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default IngredientsList;
