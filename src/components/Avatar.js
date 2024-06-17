import React from 'react';
import styles from '../styles/Avatar.module.css';

const Avatar = ({ src, height = 45, text }) => {
  return (
    <span className={styles.AvatarWrapper}>
      <div
        className={styles.AvatarFrame}
        style={{ height: height, width: height }}>
        <img
          className={styles.Avatar}
          src={src}
          height={height - 8}
          width={height - 8}
          alt="avatar"
        />
      </div>
      {text}
    </span>
  );
};

export default Avatar;
