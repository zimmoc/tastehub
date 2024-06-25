import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from '../styles/MoreDropdown.module.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes from 'prop-types';

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const ThreeDots = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const MoreDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className={styles.DropdownHover} drop="left">
      <Dropdown.Toggle as={ThreeDots} />

      <Dropdown.Menu
        className={`text-center ${styles.DropDownMenu}`}
        popperConfig={{ strategy: 'fixed' }}>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleEdit}
          aria-label="edit">
          <i className="fas fa-edit" />
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleDelete}
          aria-label="delete">
          <i className="fas fa-trash-alt" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const ProfileEditDropdown = ({ id }) => {
  const history = useHistory();
  return (
    <Dropdown
      className={`ml-auto px-3 ${styles.Absolute} ${styles.DropdownHover}`}
      drop="left">
      <Dropdown.Toggle as={ThreeDots} />
      <Dropdown.Menu className={`text-center ${styles.DropDownMenu}`}>
        <Dropdown.Item
          className={`${styles.DropdownItem} ${styles.DropdownRow}`}
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile">
          <i className="fas fa-edit pr-2" /> edit profile
        </Dropdown.Item>
        <Dropdown.Item
          className={`${styles.DropdownItem} ${styles.DropdownRow}`}
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username">
          <i className="far fa-id-card pr-2" />
          change username
        </Dropdown.Item>
        <Dropdown.Item
          className={`${styles.DropdownItem} ${styles.DropdownRow}`}
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password">
          <i className="fas fa-key pr-2" />
          change password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

ThreeDots.propTypes = {
  onClick: PropTypes.func.isRequired,
};

MoreDropdown.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

ProfileEditDropdown.propTypes = {
  id: PropTypes.number.isRequired,
};

ThreeDots.displayName = 'ThreeDots';
MoreDropdown.displayName = 'MoreDropdown';
ProfileEditDropdown.displayName = 'ProfileEditDropdown';
