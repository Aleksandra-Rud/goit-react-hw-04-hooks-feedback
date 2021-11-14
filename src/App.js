// import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Title/Title";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notifications";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [good, setGoog] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleButtonClick = (e) => {
    switch (e.target.textContent) {
      case "good":
        setGoog(good + 1);
        break;
      case "neutral":
        setNeutral(neutral + 1);
        break;
      case "bad":
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((good / countTotalFeedback()) * 100);
  }

  const keys = Object.keys({ good, neutral, bad });

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={keys}
        onLeaveFeedback={handleButtonClick}
      ></FeedbackOptions>
      {countTotalFeedback() ? (
        <Statistics
          title="Statistics"
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          percentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </Section>
  );
}

// export default App;
