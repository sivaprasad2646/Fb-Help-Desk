"use client";
import { useId } from "react";
import "./Input.css";
import clsx from "clsx";
export default function Input({
  label = "",
  value,
  error = "",
  placeholder = "",
  setValue,
  type = "text",
  ...rest
}) {
  const id = useId();
  const handleChange = (e) => {
    if (type === "checkbox") setValue && setValue(e.target.checked);
    else setValue && setValue(e.target.value);
  };
  return (
    <>
      <>
        <div
          className={clsx(
            "input-container",
            type === "checkbox" && "checkbox-input"
          )}
        >
          <label htmlFor={id}>{label}</label>
          <input
            {...rest}
            id={id}
            className="input-field"
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            type={type}
          />
          {error && <p>{error}</p>}
        </div>
      </>
    </>
  );
}
