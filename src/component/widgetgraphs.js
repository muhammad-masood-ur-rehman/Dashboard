import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Chart from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

function widgetGraph(props) {
  const chartConfigs = {
    type: "doughnut3d", // The chart type
    width: "300", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        // caption: "Countries With Most Oil Reserves [2017-18]", //Set the chart caption
        // subCaption: "In MMbbl = One Million barrels", //Set the chart subcaption
        //xAxisName: "Country", //Set the x-axis name
        //yAxisName: "Reserves (MMbbl)", //Set the y-axis name
        //numberSuffix: "K",
        bgColor: "#A8B26F",
        theme: "fusion" //Set the theme for your chart
      },
      // Chart Data - from step 2
      data: props.data
    }
  };

  return (
    <div>
      <div className="widgetGraphs">
        <div className="widgetTitle">{props.title}</div>
        <div className="widgetValue">
          <ReactFC {...chartConfigs} />
        </div>
      </div>
    </div>
  );
}

export default widgetGraph;
