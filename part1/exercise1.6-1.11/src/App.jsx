import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <div>
        {text} {value}
      </div>
    </>
  );
};

// a proper place to define a component
const Statistics = ({ good, neutral, bad, setGood, setNeutral, setBad }) => {
  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      {good || neutral || bad ? (
        <>
          <table>
            <thead>
              <tr>
                <td>
                  <h1>statistics</h1>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <StatisticLine text="good" value={good} />
                </td>
              </tr>
              <tr>
                <td>
                  <StatisticLine text="neutral" value={neutral} />
                </td>
              </tr>
              <tr>
                <td>
                  <StatisticLine text="bad" value={bad} />
                </td>
              </tr>
              <tr>
                <td>
                  <StatisticLine text="all" value={good + neutral + bad} />
                </td>
              </tr>
            </tbody>
          </table>

          <div>average {(good + neutral + bad) / 3}</div>
          <div>positive {(good / (good + neutral + bad)) * 100}%</div>
        </>
      ) : (
        <h2>No feedback given</h2>
      )}
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Statistics {...{ good, neutral, bad, setGood, setNeutral, setBad }} />
    </div>
  );
};

export default App;
