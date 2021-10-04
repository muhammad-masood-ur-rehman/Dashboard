import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Maps from 'fusioncharts/fusioncharts.maps';
import ReactFCWorld from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import World from 'fusioncharts/maps/fusioncharts.world';


ReactFCWorld.fcRoot(FusionCharts, Maps, World, FusionTheme);

class MapChart extends Component {
    state = {
        dataSource_world: {
            "chart": {
                canvasBorderColor: "#000000",
                canvasBorderThickness: 1,
                showBorder: true,
                borderColor: "#000000",
                showCanvasBorder: true,
                theme: "fusion",
                caption: " Percentage of Sessions Taken by Users across Globe",
                entityFillHoverColor: "#FFF9C4",
                numberSuffix: "%",
                showBorder: "1",
                bgColor: "#FFFFFF",
                //Tooltip customization
                toolTipBorderColor: "#666666",
                toolTipBgColor: "#efefef",
                toolTipBgAlpha: "80",
                showToolTipShadow: "1",
                //Theme
                plotBorderThickness: "0.25",
                showxaxispercentvalues: "1",
                showValues: "1"
            },
            colorrange: {
                "color": [{
                    "minvalue": "0",
                    "maxvalue": "100",
                    "color": "#FFD74D"
                }, {
                    "minvalue": "0",
                    "maxvalue": "100",
                    "color": "#FB8C00"
                }, {
                    "minvalue": "0",
                    "maxvalue": "100",
                    "color": "#E65100"
                }]
            },
            data: [{
                "id": "NA",
                "value": "20",
                "showLabel": "1"
            }, {
                "id": "SA",
                "value": "30",
                "showLabel": "1"
            }, {
                "id": "AS",
                "value": "48",
                "showLabel": "1"
            }, {
                "id": "EU",
                "value": "20",
                "showLabel": "1"
            }, {
                "id": "AF",
                "value": "2.58",
                "showLabel": "1"
            }, {
                "id": "AU",
                "value": "15",
                "showLabel": "1"
            }]
    
            
        }
    }

    render() {
        return (
            <React.Fragment>
                
                <div style={{ textAlign: 'center' }}>
                    <ReactFCWorld
                        type="world"
                        width="100%"
                        height="500"
                        dataFormat="JSON"
                        dataSource={this.state.dataSource_world} />
                </div>
                <br />
                <br />
            </React.Fragment>);
    }
  }

export default MapChart;