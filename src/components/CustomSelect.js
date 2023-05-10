import React from "react"
import Select from "react-select"
import styled from "styled-components"
import color from "../constant/color"

const selectThemeColors = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary25: "#7367f01a", // for option hover bg-color
    primary: "#1E40AF", // for selected option bg-color
    neutral10: "#1E40AF", // for tags bg-color
    neutral20: "#ededed", // for input border-color
    neutral30: "#ededed", // for input hover border-color
  },
})

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    padding: "12px 12px",
    marginTop: "10px",
  }),
  singleValue: (provided, state) => {
    const colorSet = color.gray400
    return { ...provided, colorSet }
  },
}

export default function CustomSelect({
  flex,
  label,
  placeholder,
  defaultValue,
  isDisabled,
  value,
  options,
  onChange,
  isSearchable,
  isOptionSelected,
  ...rest
}) {
  return (
    <Container flex={flex}>
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <Select
        theme={selectThemeColors}
        defaultValue={defaultValue}
        isSearchable={isSearchable ? true : false}
        className="react-select"
        classNamePrefix="select"
        styles={customStyles}
        placeholder={placeholder}
        value={options[getIndexNumber(options, value)]}
        options={options}
        onChange={onChange}
        isOptionSelected={isOptionSelected}
        isDisabled={isDisabled}
        {...rest}
      />
    </Container>
  )
}

const getIndexNumber = (collection, query) => {
  if (collection && query) {
    let number = collection.map((item, index) => {
      let num
      if (item.value === query) {
        num = index
      }
      return num
    })
    number = number.filter(function (element) {
      return element !== undefined
    })

    return number[0]
  }
}

const Container = styled.div`
  width: 100%;

  .label {
    font-size: 14px;
    font-weight: 600;
    color: ${color.gray600};
    text-transform: capitalize;
  }
`
