import React from "react";
import "./Contest.css";

import {Radar} from "react-chartjs-2";

const data = {
    labels: [
        "Graph",
        "Dynamic Programming",
        "Number theory",
        "Combinatorics",
        "Data Structures",
        "Computational Geometry",
        "Backtracking",
        "Divide and Conquer",
    ],
    datasets: [{
        label: "Algo Skills",
        data: [80, 90, 30, 20, 70, 30, 60, 50],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.6",
        borderColor: "rgb(255, 99, 132",
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
}
const Contest = () => {
  return (
    <section id="contest">
        <div className="heading">
            <h1>Algorithms skills </h1>
        </div>
        <div className="contest-chart" data-aos="fade-up">
            <Radar
                data={data}
                width={600}
                height={300}
                options={{
                    maintainAspectRatio: false,
                    responsive: true,
                    elements: {
                        line: {
                            borderWidth: 3
                        }
                    }
                }
                }
            />
        </div>
      <div className="heading">
       <h1>Competitive Programming Achievements </h1>
      </div>
      <div className="contest-data" data-aos="fade-down">
        <h3>Solved 1600+ Algorithmic and Analytical Problems on Various Online Judges</h3>
      </div>
      <div className="contest-data" data-aos="fade-left">
      <h3>Participated At ICPC Dhaka Regional 2019 Hosted by Southeast University</h3>
        
      </div>
      <div className="contest-data" data-aos="fade-up">
      <h3>Participated At ICPC Dhaka Regional 2018 Hosted by Daffodil International University</h3>

      </div>

    </section>
  );
};

export default Contest;

























;