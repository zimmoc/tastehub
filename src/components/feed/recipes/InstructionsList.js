import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/RecipePage.module.css';

function InstructionsList({ instructions }) {
  return (
    <>
      <h5 className="pb-1">Instrutions</h5>
      <hr className="w-100" style={{ backgroundColor: '#181818' }} />
      <ol className="w-100 p-0 m-0">
        {instructions.map((instruction, index) => (
          <>
            <li key={index} className={`pl-3 ${styles.RecipeIngredients}`}>
              {instruction}
            </li>
            <hr
              className="w-100"
              style={{ backgroundColor: 'rgba(243, 139, 41, 0.5)' }}
            />
          </>
        ))}
      </ol>
    </>
  );
}

InstructionsList.propTypes = {
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InstructionsList;
