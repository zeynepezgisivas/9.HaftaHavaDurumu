/* eslint-disable react/prop-types */

const CountryOption = (props) => {
  return (
    <>
    <option value={props.optionValue}>{props.optionText}</option>
    </>
  )
}

export default CountryOption