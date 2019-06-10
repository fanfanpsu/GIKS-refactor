import React from "react";
import { Button, Glyphicon } from "react-bootstrap";
import "./LoaderButton.css";

//TODO: https://serverless-stack.com/chapters/give-feedback-while-logging-in.html
export default ({
                    isLoading,
                    text,
                    loadingText,
                    className = "",
                    disabled = false,
                    ...props
                }) =>
    <Button
        className={`LoaderButton ${className}`}
        disabled={disabled || isLoading}
        {...props}
    >
        {isLoading && <Glyphicon glyph="refresh" className="spinning" />}
        {!isLoading ? text : loadingText}
    </Button>;