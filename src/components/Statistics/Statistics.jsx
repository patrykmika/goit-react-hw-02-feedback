import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const Array = [
    [1, `Good: ${good}`],
    [2, `Neutral: ${neutral}`],
    [3, `Bad: ${bad}`],
    [4, `Total: ${total}`],
    [5, `Positive feedback: ${positivePercentage}%`],
  ];
  return (
    <ul className={styles.list}>
      {Array.map(([id, superString]) => (
        <li key={id} className={styles.item}>
          <span className={styles.paragraph}>{superString}</span>
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
