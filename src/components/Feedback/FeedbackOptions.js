import React from 'react';
import PropTypes from 'prop-types';

import s from './Feedback.module.css';

const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <>
    {
      Object.keys(options).map((option) => {
        return <button key={option} className={s.button} name={option} type="button" onClick={onLeaveFeedback}>{option}</button>

      })
    }
  </>
)

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};