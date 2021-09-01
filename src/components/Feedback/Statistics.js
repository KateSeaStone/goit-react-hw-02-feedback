import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (

  <ul className={s.statList}>

    <li className={s.statItem}>
      <span className={s.label}>Good: </span>
      <span className="count">{good}</span>
    </li>

    <li className={s.statItem}>
      <span className={s.label}>Neutral: </span>
      <span className={s.count}>{neutral}</span>
    </li>

    <li className={s.statItem}>
      <span className={s.label}>Bad: </span>
      <span className={s.count}>{bad}</span>
    </li>

    <li className={s.statItem}>
      <span className={s.label}>Total: </span>
      <span className={s.count}>{total}</span>
    </li>

    <li className={s.statItem}>
      <span className={s.label}>Positive feedback: </span>
      <span className={s.count}>{positivePercentage}</span>
    </li>

  </ul>


)

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};