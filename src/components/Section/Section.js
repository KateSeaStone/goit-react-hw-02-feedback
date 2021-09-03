import React from 'react';
import PropTypes from 'prop-types';

import s from '../Feedback/Feedback.module.css';

const Section = ({ title, children }) => (
  <section>
    <h2 className={s.title}>{title}</h2>

    {children}
  </section>
)

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,

};