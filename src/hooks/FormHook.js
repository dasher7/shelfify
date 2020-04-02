import { useState } from "react";

export const useForm = callback => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
    }
    callback(inputs);
  };

  const handleInputChange = event => {
    event.persist();
    console.log(event.target.value);
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return {
    inputs,
    handleSubmit,
    handleInputChange
  };
};
