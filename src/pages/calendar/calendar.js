import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Pie } from "react-chartjs-2";
import styles from "./calendar.module.css";
import { Chart, ArcElement, Tooltip, Legend, Title } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend, Title);

function CustomCalendar() {
  const [value, setValue] = useState(new Date());
  const [activeButton, setActiveButton] = useState("challenge");
  const [showGraph, setShowGraph] = useState(false);

  const formatDay = (locale, date) => date.getDate();

  const data = {
    labels: ["Health", "Study", "Leisure"],
    datasets: [
      {
        data: [10, 11, 79],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}%`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    cutout: "50%",
    rotation: -90,
    circumference: 180,
  };

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
    setShowGraph(buttonType === "categories");
  };

  return (
    <div className={styles.outerContainer}>
      <div className={styles.header}>Calendar</div>
      <div className={styles.innerContainer}>
        <Calendar
          className={styles.calendar}
          onChange={setValue}
          value={value}
          formatDay={formatDay}
        />
        <div className={styles.buttons}>
          <button
            className={`${styles.challengeButton} ${
              activeButton === "challenge" ? styles.active : ""
            }`}
            onClick={() => handleButtonClick("challenge")}
          >
            Challenge
          </button>
          <button
            className={`${styles.categoriesButton} ${
              activeButton === "categories" ? styles.active : ""
            }`}
            onClick={() => handleButtonClick("categories")}
          >
            Categories
          </button>
        </div>
        {showGraph ? (
          <div className={styles.chartContainer}>
            <Pie data={data} options={options} />
          </div>
        ) : (
          <div className={styles.event}>
            <div className={styles.eventIcon}>🏃</div>
            <div className={styles.eventDetails}>
              <h2>대운동장 3바퀴 뛰기</h2>
              <p>운동</p>
            </div>
            <div className={styles.eventTime}>30m</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CustomCalendar;
