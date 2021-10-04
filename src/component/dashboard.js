import React, { Component } from "react";
import "./dashboard.css";
import { Container, Row, Col } from "react-bootstrap";
import WidgetText from "./widgettext";
import WidgetGraph from "./widgetgraph";
import WidgetGraphs from "./widgetgraphs";
import Dropdown from "react-dropdown";
import MapChart from "./map";
import "react-dropdown/style.css";
import Time from "./real";

const config = {
  apiKey: "AIzaSyDMu-Vw30ykPPmFT3cXeunzKEi4EahzglI",
  spreadsheetId: "1vcDPrMexD8bxNwwzK9IxF8wch6Hfezq2eooJACDiqgg"
};
const url = `https://sheets.googleapis.com/v4/spreadsheets/${config.spreadsheetId}/values:batchGet?ranges=Sheet1&majorDimension=ROWS&key=${config.apiKey}`;

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      dropdownOptions: [],
      selectedValue: null,
      organicSource: null,
      directSource: null,
      referralSource: null,
      items: [],
      pageViews: null,
      users: null,
      newUsers: null,
      sourceArr: [],
      userArr: []
    };
  }

  getData = (arg) => {
    const arr = this.state.items;
    const arrLen = arr.length;

    let organicSource = 0;
    let directSource = 0;
    let referralSource = 0;
    let pageViews = 0;
    let users = 0;
    let newUsers = 0;
    let sourceArr = [];
    let userArr = [];
    let selectedValue = null;

    for (let i = 0; i < arrLen; i++) {
      if (arg === arr[i]["month"]) {
        organicSource = arr[i].organic_source;
        directSource = arr[i].direct_source;
        referralSource = arr[i].referral_source;
        pageViews = arr[i].page_views;
        users = arr[i].users;
        newUsers = arr[i].new_users;

        sourceArr.push(
          {
            label: "Organic Source",
            value: arr[i].organic_source
          },
          {
            label: "Direct Source",
            value: arr[i].direct_source
          },
          {
            label: "Referral Source",
            value: arr[i].referral_source
          }
        );

        userArr.push(
          {
            label: "Users",
            value: arr[i].users
          },
          {
            label: "New Users",
            value: arr[i].new_users
          }
        );
      }
    }
    selectedValue = arg;
    this.setState({
      organicSource: organicSource,
      directSource: directSource,
      referralSource: referralSource,
      pageViews: pageViews,
      users: users,
      newUsers: newUsers,
      sourceArr: sourceArr,
      userArr: userArr
    });
  };
  updateDashboard = (event) => {
    this.getData(event.value);
    this.setState({ selectedValue: event.value });
  };

  componentDidMount() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let batchRowValues = data.valueRanges[0].values;

        const rows = [];

        for (let i = 1; i < batchRowValues.length; i++) {
          let rowObject = {};
          for (let j = 0; j < batchRowValues[i].length; j++) {
            rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
          }
          rows.push(rowObject);
        }

        let dropdownOptions = [];

        for (let i = 0; i < rows.length; i++) {
          dropdownOptions.push(rows[i].month);
        }

        dropdownOptions = Array.from(new Set(dropdownOptions)).reverse();
        this.setState(
          {
            items: rows,
            dropdownOptions: dropdownOptions,
            selectedValue: "Jan 2018"
          },
          () => this.getData("Jan 2018")
        );
      });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col className="style"> Dashboard</Col>
            <Col>
              <Dropdown
                options={this.state.dropdownOptions}
                onChange={this.updateDashboard}
                value={this.state.selectedValue}
                placeholder="Select an option"
              />
            </Col>
          </Row>
        </Container>
        <br />
        <Container>
          <Row>
            <Col>
              <Row>
                {" "}
                <WidgetText
                  title="Organic Source"
                  value={this.state.organicSource}
                />
                <WidgetText
                  title="Direct Source"
                  value={this.state.directSource}
                />
              </Row>
              <br />
              <Row className="position">
                {" "}
                <WidgetText
                  title="Referral Source"
                  value={this.state.referralSource}
                />
              </Row>
            </Col>
            <Col>
              {" "}
              <WidgetGraph
                title="Source Comparision"
                data={this.state.sourceArr}
              />{" "}
            </Col>
          </Row>
        </Container>
        <br />
        <Container>
          <Row>
            <Col>
              {" "}
              <WidgetGraphs
                title="User Comparision"
                data={this.state.userArr}
              />
            </Col>

            <Col>
              <Time />
            </Col>
          </Row>
        </Container>
        <br />
        <Container>
          <Row>
            <Col>
              <WidgetText
                title="users"
                value={this.state.users}
                className="move"
              />
            </Col>
            <br />
            <Col>
              <WidgetText title="new users" value={this.state.newUsers} />
            </Col>
            <Col>
              <WidgetText title="page views" value={this.state.pageViews} />
            </Col>
          </Row>
        </Container>

        <br />
        <Container>
          <MapChart />
        </Container>
      </div>
    );
  }
}
export default Dashboard;
