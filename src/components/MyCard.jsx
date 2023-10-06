/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const MyCard = ({ cityData }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityData || 'Bursa'}&appid=2c006b98e2ee5b157418ce7c4325967d`
    )
    .then(response => {
        if (response.status === 404) {
          throw new Error('Seçilen şehrin hava bilgisi bulunamadı!');
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData(data);
        console.log("Data", data);
        console.log("CityData",cityData);
        console.log("Description", data.weather[0].description);
      })
      .catch((error) => {
        console.error("API Hata:", error);
      });
  }, [cityData]);

  if (!weatherData) {
    return <div>Hava durumu verileri alınamadı.</div>;
  }
    return (
        <div
        className="my-card text-white d-flex justify-content-center mt-3"
      >
        <div
          style={{
            background: "url('/backgrounds/mountain.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="max-w-sm bg-white bg-opacity-75 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              {weatherData.name}
              </h5>
            <p className="mb-3 font-normal text-white dark:text-white">
              {weatherData.weather[0].main}
            </p>
            <Container>
                <Row>
                    <Col>
                    <div>Current Temp.</div>
                    </Col>
                    <Col>
                    <div>Feels Like</div>
                    </Col>
                    <Col>
                    <div>Humidity</div>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col>
                    <div>{weatherData.main.temp}</div>
                    </Col>
                    <Col>
                    <div>{weatherData.main.feels_like}</div>
                    </Col>
                    <Col>
                    <div>{weatherData.main.humidity}</div>
                    </Col>
                </Row>
            </Container>
          </div>
        </div>
      </div>      
    );
  };
  
  export default MyCard;