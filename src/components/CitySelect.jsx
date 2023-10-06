/* eslint-disable react/prop-types */
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import CityOption from "./CityOption";
import MyCard from "./MyCard";
import SunnyBgImage from "./SunnyBgImage";

const CitySelect = (props) => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!props.selectedCountry) {
          setCities([]);
          return;
        }
        const response = await fetch('https://countriesnow.space/api/v0.1/countries');
        if (!response.ok) {
          throw new Error('API yanıt vermedi');
        }
        const data = await response.json();
  
        const selectedCountryData = data.data.find(country => country.country === props.selectedCountry);
  
        if (!selectedCountryData) {
          throw new Error('Seçilen ülke bulunamadı');
        }
        
        setCities(selectedCountryData.cities || []);
      } catch (error) {
        console.error('Hata:', error);
      }
    };
  
    fetchData();
  }, [props.selectedCountry]);

  return (
    <>
      <div className="mb-4">
        <label htmlFor="" className="mb-2">{props.lblName}</label>
        <Form.Select disabled={props.disabled}  onChange={(e) => {
          const selectedCity = e.target.value;
          setSelectedCity(selectedCity);
        }}>
          <option selected>
            Şehir Seçin
          </option>
          {cities.map((city, index) => (
            <>
            <CityOption key={index} optionValue={city} optionText={city} />
            </>
          ))}
        </Form.Select>
        {selectedCity && <div style={{ display: "none" }}><MyCard cityData={selectedCity || "Bursa"} /></div>}
        {selectedCity && <div style={{ display: "none" }}><SunnyBgImage cityData={selectedCity || "Bursa"} /></div>}
      </div>
    </>
  )
}

export default CitySelect;