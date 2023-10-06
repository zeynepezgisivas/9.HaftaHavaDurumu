/* eslint-disable react/prop-types */
import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import CitySelect from "./CitySelect";
import CountryOption from "./CountryOption";

const CountrySelect = (props) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://countriesnow.space/api/v0.1/countries');
        if (!response.ok) {
          throw new Error('API yanıt vermedi');
        }
        const data = await response.json();
        setCountries(data.data);
      } catch (error) {
        console.error('Hata:', error);
      }
    };

    fetchData();
  }, []);

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const isCitySelectDisabled = !selectedCountry || selectedCountry === "Ülke Seçin";

  return (
    <>
      <div className="mb-4">
        <label htmlFor="" className="mb-2">{props.lblName}</label>
        <Form.Select onChange={handleCountryChange}>
          <option selected>
            Ülke Seçin
          </option>
          {countries.map((country, index) => (
             <CountryOption key={index} optionValue={country.country} optionText={country.country} />
          ))}
        </Form.Select>
      </div>
      <CitySelect lblName={"Şehir"} selectedCountry={selectedCountry} disabled={isCitySelectDisabled} />
    </>
  )
}

export default CountrySelect;
