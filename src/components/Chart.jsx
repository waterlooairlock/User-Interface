import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts';
import { Container, Row, Col } from 'reactstrap';

export default class Chart extends PureComponent {

  state = {
    loading: true,
    temperature: null,
    pressure: null,
    airquality: null,

  };

  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }

  async getData() {

    // AYO LISTEN UP
    // At the end of each url, I added the sensor_id.
    // I have no clue if these sensor readings are correct, so I am adding them temporarily

    const pressureURL = 'http://127.0.0.1:8080/arduinos/get_readings?sensor_type=pressure&sensor_id=1'
    const pressureResponse = await fetch(pressureURL)

    const temperatureURL = 'http://127.0.0.1:8080/arduinos/get_multiple_readings?sensor_type=temperature&sensor_id=2'
    const temperatureResponse = await fetch(temperatureURL)
    
    const airQualityURL = 'http://127.0.0.1:8080/arduinos/get_multiple_readings?sensor_type=air_quality&sensor_id=3'
    const airQualityResponse = await fetch(airQualityURL)

    if (this.state.temperature == null || this.state.pressure == null || this.state.airquality == null) {
      this.setState({
        temperature: "N/A",
        pressure: "N/A",
        airquality: "N/A",
      })
    } else {
      this.setState({ 
        temperature: temperatureResponse,
        pressure: pressureResponse,
        airquality: airQualityResponse,
        loading: false 
    });
    }
    console.log("called again");
  }

  componentDidMount() {
    this.getData();
    setInterval(this.getData, 1000);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
          <h1>Temperature</h1>
          <LineChart
          width={300}
          height={300}
          data={this.state.temperature}
          style={{backgroundColor: "white"}}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="timestamp" />

          <Tooltip />
          <CartesianGrid stroke="#000000" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
          </Col>
          <Col>
          <h1>Pressure</h1>
          <LineChart
          width={300}
          height={300}
          data={this.state.pressure}
          style={{backgroundColor: "white"}}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="timestamp" />

          <Tooltip />
          <CartesianGrid stroke="#000000" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
          </Col>
          <Col>
          <h1>Air Quality</h1>
          <LineChart
          width={300}
          height={300}
          data={this.state.airquality}
          style={{backgroundColor: "white"}}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="timestamp" />

          <Tooltip />
          <CartesianGrid stroke="#000000" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
        </LineChart>
          </Col>
        </Row>
      </Container>
    );
  }
}
