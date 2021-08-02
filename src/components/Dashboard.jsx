import React from 'react';
import ReadingBlock from './dashboard/ReadingBlock';
import NotifsContainer from "./dashboard/NotifsContainer";
import Chart from './Chart';

const SAMPLE_NOTIFS = [
    {
        content: "Air pressure very high",
        date: '2020-12-17T03:24:00',
        priority: 0,
    },
    {
        content: "Cool beans",
        date: '2020-12-17T03:26:00',
        priority: 1,
    },
    {
        content: "Temperature low",
        date: '20202-12-17T03:27:00',
    }
]

class DashboardPage extends React.Component {
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

    const pressureURL = 'http://127.0.0.1:8080/arduinos/get_multiple_readings?sensor_type=pressure&sensor_id=1'
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

    console.log(this.state.temperature)
    return (
      <div>
        <div className="fade-in">
            <ReadingBlock tempVal={this.state.temperature} pressureVal={this.state.pressure} airQualVal={this.state.airquality}/>
            <NotifsContainer notifs={SAMPLE_NOTIFS}/>
            <Chart></Chart>
        </div>
      </div>
    );
  }
}

export default DashboardPage;