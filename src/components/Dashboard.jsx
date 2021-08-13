import React from 'react';
import ReadingBlock from './dashboard/ReadingBlock';
import NotifsContainer from "./dashboard/NotifsContainer";
import Chart from './Chart';

//so not null at start
var currentNotifs = [
  {
    content: "No new notifications",
    date: new Date(),
    priority: 0
  },
  
];

var lowPressureNotif = {
        content: "Air pressure very low",
        date: new Date(),
        priority: 0
    }

var highPressureNotif = {
      content: "Air pressure very high",
      date: new Date(),
      priority: 0
  }


var EnterNotif = {
      content: "Enter command pressed",
      date: new Date(),
      priority: 1
  }


var ExitNotif =  {
      content: "Exit command pressed",
      date: new Date(),
      priority: 2
  }

class DashboardPage extends React.Component {
  state = {
    loading: true,
    temperature: null,
    pressure: null,
    airquality: null,
    enter: null,
    exit: null
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
    var pressureResponse = await fetch(pressureURL)

    const temperatureURL = 'http://127.0.0.1:8080/arduinos/get_multiple_readings?sensor_type=temperature&sensor_id=2'
    var temperatureResponse = await fetch(temperatureURL)
    
    const airQualityURL = 'http://127.0.0.1:8080/arduinos/get_multiple_readings?sensor_type=air_quality&sensor_id=3'
    var airQualityResponse = await fetch(airQualityURL)

    const enterURL = "http://127.0.0.1:8080/airlockevent/enter"
    var enterResponse = await fetch(enterURL)

    const exitURL = "http://127.0.0.1:8080/airlockevent/exit"
    var exitResponse = await fetch(exitURL)

    if (this.state.temperature == null || this.state.pressure == null || this.state.airquality == null || this.state.enter == null || this.state.exit == null) {
      this.setState({
        temperature: "N/A",
        pressure: "N/A",
        airquality: "N/A",
        enter: "N/A",
        //for some reason uncommenting exit causes a problem
        //exit: "N/A",
      })
    } else {
      this.setState({ 
        temperature: temperatureResponse,
        pressure: pressureResponse,
        airquality: airQualityResponse,
        enter: enterResponse,
        exit: exitResponse,
        loading: false 
    });
      if(pressureResponse <= 5) {
        currentNotifs.unshift(highPressureNotif);
      } else if (pressureResponse >= 40) {
        currentNotifs.unshift(lowPressureNotif);
      }
      
      if(enterResponse) {
        currentNotifs.unshift(EnterNotif);
      } else if (exitResponse) {
        currentNotifs.unshift(ExitNotif);
      }
    }

    if(currentNotifs.length > 3) {
      currentNotifs = currentNotifs.slice(0, 3);
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
            <NotifsContainer notifs={currentNotifs}/>
            <Chart></Chart>
        </div>
      </div>
    );
  }
}

export default DashboardPage;