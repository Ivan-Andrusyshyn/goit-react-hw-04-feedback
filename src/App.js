// import PropTypes from "prop-types";
import { Statistics } from "./components/statistics/statistic";
import { FeedbackOptions } from "./components/feedbackOpt/options";
import React, { Component, useState } from "react";
import { Notification } from "components/notification/notif";
import { Section } from "components/section";
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const hendlerIncrement = (e) => {
    const { id } = e.target;
    if (id === "good") {
      setGood(good + 1);
    }
    if (id === "neutral") {
      setNeutral(neutral + 1);
    }
    if (id === "bad") {
      setBad(bad + 1);
    }
  };
  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    let percGood = good / (good + bad + neutral);
    return good ? Math.floor(percGood * 100) : 0;
  };
  const arrOptions = Object.keys({ good, neutral, bad });

  return (
    <div>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          hendlerIncrement={hendlerIncrement}
          options={arrOptions}
        />
      </Section>
      <Section>
        <h2>Statistics</h2>
        {countTotalFeedback() ? (
          <Statistics
            neutral={neutral}
            good={good}
            bad={bad}
            countTotalFeedback={countTotalFeedback()}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={"There is no feedback"} />
        )}
      </Section>
    </div>
  );
}

export { App };
