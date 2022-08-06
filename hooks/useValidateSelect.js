import React from "react";

export const useValidateSelect = () => {
  const [error, setError] = React.useState(false);
  const [errormessage, setErrormessage] = React.useState("");

  const validateSelector = (message = "", param) => {
    if (param === "") {
      setError(true);
      setErrormessage(message);
    } else {
      setError(false);
      setErrormessage("");
    }
  };

  return {
    error,
    errormessage,
    validateSelector,
  };
};
