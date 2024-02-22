"use client";
import "./Button.css";
export default function Button({
  children = "Click me",
  variant = "contained",
  startIcon,
  ...rest
}) {
  return (
    <button {...rest} className="buttons" type="submit" variant={variant}>
      {startIcon}
      {children}
    </button>
  );
}
