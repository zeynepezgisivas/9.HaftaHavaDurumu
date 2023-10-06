/* eslint-disable react/prop-types */

const CityOption = (props) => {
  return (
    <>
    <option value={props.optionValue}>{props.optionText}</option>
    </>
  )
}

export default CityOption