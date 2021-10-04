import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import FusionWidgetsXT from "fusioncharts/fusioncharts.charts";
import RealTime from "fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, FusionWidgetsXT, RealTime, FusionTheme);

function Time() {
  const chartConfigs = {
    type: "realtimeline", // The chart type
    width: "300", // Width of the chart
    height: "200", // Height of the chart
    dataFormat: "json", // Data type
    chart: {
      caption: "Real-time Traffic of Users at Page",
      xAxisName: "Time",

      refreshinterval: "5",
      yaxisminvalue: "35",
      yaxismaxvalue: "36",
      numdisplaysets: "10",
      labeldisplay: "rotate",
      showRealTimeValue: "0",
      theme: "fusion"
    },
    categories: [
      {
        category: [
          {
            label: "Day Start"
          }
        ]
      }
    ],
    dataset: [
      {
        data: [
          {
            value: "35.27"
          }
        ]
      }
    ]
  };

  return (
    <div>
      <p className="widgetTitle">Real-time Traffic of Users at Page</p>

      <ReactFC {...chartConfigs} />
    </div>
  );
}

export default Time;
