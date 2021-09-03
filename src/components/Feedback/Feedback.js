import React from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

import s from './Feedback.module.css';

class Feedback extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = event => {

    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,

    })
    )
  }

  // onLeaveFeedback = event => {
  //   this.setState({ [event.target.name]: this.state[event.target.name] + 1 })    
  // }

  countTotalFeedback = () => {
    let total = 0;
    Object.values(this.state).forEach((value) => total = total + value)
    return total;
    //   return this.state.good + this.state.neutral + this.state.bad;
  }

  positivePercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) return 0;
    return Math.round(this.state.good * 100 / total);

  }

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.positivePercentage();
    const { good, neutral, bad } = this.state;

    return (
      <div className={s.feedback}>

        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>

        {total === 0 ? (<Notification />) : (<Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>)}

      </div>

    )
  }
}

export default Feedback;







