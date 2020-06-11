import React from "react";
import { Button } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';
import "./LoaderButton.css";

export default function LoaderButton({
  isLoading,
  className = "",
  disabled = false,
  ...props
}) {
  return (
    <Button
      className={`LoaderButton ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <i className="fa fa-refresh" aria-hidden="true"></i>}
      {props.children}
    </Button>
  );
}
