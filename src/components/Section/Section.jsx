import PropTypes from 'prop-types';
import styles from './Section.module.css';

export const Section = ({ title, children }) => (
  <div className={styles.container}>
    <h2 className={styles.headerSecond}>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
