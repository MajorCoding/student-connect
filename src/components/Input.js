import React, { useState } from "react"
import styled from "styled-components/macro"
import color from "../constant/color"

const Input = ({
  ref,
  label,
  type,
  placeholder,
  value,
  onChange,
  disabled,
  required,
  icon,
  prefix,
  mt,
  max,
  maxLength,
  autoFocus,
  ...rest
}) => {
  const [show, setShow] = useState(false)
  return (
    <Container prefix={prefix} icon={icon} mt={mt}>
      <label className="label" htmlFor={label}>
        {label}
      </label>
      <div className="field">
        {icon && (
          <div className="icon">
            <i className={`ph ${icon}`}></i>
          </div>
        )}
        {prefix && (
          <div className="prefix">
            <span>{prefix}</span>
          </div>
        )}
        <input
          {...rest}
          ref={ref}
          className="input"
          type={show ? "text" : type}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          value={value}
          max={max}
          maxLength={maxLength}
          required={required ? true : false}
          autoFocus={autoFocus}
        />
        {type === "password" && (
          <div className="eye" onClick={() => setShow(!show)}>
            <i className={show ? `ph ph-eye` : "ph ph-eye-slash"}></i>
          </div>
        )}
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  .label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: ${color.gray600};
    text-transform: capitalize;
    margin-bottom: 8px;
  }
  .field {
    position: relative;
    margin-top: ${({ mt }) => (mt ? mt : "6px")};
  }
  .input {
    width: 100%;
    font-size: 14px;
    color: ${color.gray500};
    padding: 14px 16px;
    background: #fff;
    border: 1px solid ${color.gray300};
    outline: none;
    text-transform: capitalize;
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
    padding-left: ${({ prefix }) => prefix && "60px"};
    padding-left: ${({ icon }) => icon && "50px"};

    &:focus {
      color: ${color.gray400};
      border: 1px solid #1e40af;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),
        0px 0px 1px rgba(0, 0, 0, 0.04);
      transition: border 0.3s ease-in-out;
    }

    &::placeholder {
      color: ${color.gray500};
    }

    &:-ms-input-placeholder {
      border: 1px solid ${color.gray500};
    }

    &::-ms-input-placeholder {
      color: ${color.gray500};
    }

    &:disabled {
      color: ${color.gray600};
      background: ${color.gray100};
    }
  }
  input[type="email"] {
    text-transform: lowercase;
  }
  .icon {
    position: absolute;
    height: 50%;
    top: 12px;
    left: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 10px;
    border-right: 1px solid ${color.gray300};

    i {
      font-size: 18px;
      color: ${color.gray500};
    }
  }
  .prefix {
    position: absolute;
    height: 50%;
    top: 12px;
    left: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 12px;
    border-right: 1px solid ${color.gray300};

    span {
      font-size: 15px;
      color: ${color.gray500};
    }
  }
  .eye {
    position: absolute;
    height: 50%;
    top: 12px;
    right: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 6px;

    i {
      font-size: 18px;
      color: ${color.gray500};
    }
  }
`

export default Input
