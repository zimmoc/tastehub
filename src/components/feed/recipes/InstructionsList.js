import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/RecipePage.module.css';

function InstructionsList({ instructions }) {
  return (
    <>
      <h5 className="pb-1">Instructions</h5>
      <hr className="w-100" style={{ backgroundColor: '#181818' }} />
      <ol className="w-100 p-0 m-0">
        {instructions.map((instruction, index) => (
          <React.Fragment key={index}>
            <li className={`pl-3 ${styles.RecipeInstructions}`}>
              {instruction}
            </li>
            {index < instructions.length - 1 && (
              <hr
                key={`hr-${index}`}
                className="w-100"
                style={{ backgroundColor: 'rgba(243, 139, 41, 0.5)' }}
              />
            )}
          </React.Fragment>
        ))}
      </ol>
    </>
  );
}

InstructionsList.propTypes = {
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InstructionsList;
