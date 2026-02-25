import "./Publications.css";
import "../Components/PaperDisplay"

import "./Publications.css";
import PaperDisplay, { Paper } from "../Components/PaperDisplay";

const papers: Paper[] = [
  {
    id: "0",
    title: "Closed-Loop Optimization of SLA-Printed Microfluidic Channels",
    authors: "William Luu*, Bhargavi Rakesh Savani∗, Ava Hedayatipour†",
    venue: "Under Developement",
    year: "Present",
    summary:
      "Bayesian optimization framework for minimizing dimensional variance in SLA microfluidic channels using Gaussian Processes.",
    thumbnail: "/portfolio/images/wip.png",
    tags: ["Bayesian Optimization", "SLA 3D Printing", "Machine Learning"],
    links: [
      { label: "Code", url: "https://github.com/WTL04/Closed-Loop-Optimization-For-SLA-Printed-Microfluidic-Channels" }
    ]
  },
  {
   id: "1",
    title: "Poster: Optimization of Low-Cost Flex Sensor Performance Using Machine Learning",
    authors: "Carla Zuccarini∗, Bhargavi Rakesh Savani∗, William Luu ∗, and Ava Hedayatipour†",
    venue: "IEEE BSN",
    year: "2025",
    summary:
      "Flex sensors are pivotal in wearable technology, robotics, and gesture recognition due to their affordability and flexibility. However, their performance is often hindered by non-linear behavior, environmental sensitivity, and variability. This paper explores the enhancement of low-cost flex sensor performance through machine learning regression models. A system was designed using an Arduino-based setup for automated data collection, integrating a servo motor for precise angle control and a voltage divider for resistance measurement. Several regression models, including Linear Regression, Polynomial Regression, Random Forest, XGBoost, Gaussian Process Regression (GPR),a Stacked Ensemble, and an uncertainty-aware fusion model, were evaluated based on Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), and R² scores. Results showed that GPR achieved the highest prediction accuracy with an MAE of 0.82° and R² of 0.9981, outperforming traditional methods. These findings demonstrate that applying advanced machine learning techniques significantly enhances the predictive reliability of flex sensors, making them more viable for precision applications in wearable and embedded systems.",
    thumbnail: "/portfolio/images/paper1-preview.png",
    tags: ["Flex Sensors", "Body Sensor", "Machine Learning"],
    links: [
      { label: "PDF", url: "https://openreview.net/pdf?id=fgb0w9PUnc" },
      { label: "Code", url: "https://github.com/WTL04/Uncertainty-Aware-Fusion-Model"}
    ]
  }
];

const Publications = () => {
  return (
    <>
      <div className="title-publications">
        <h1>PUBLICATIONS</h1>
      </div>

      <PaperDisplay papers={papers} />
    </>
  );
};

export default Publications;
