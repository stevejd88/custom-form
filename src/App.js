import React, { useState } from "react";
import "./App.css";

import FormInput from "./components/form-input/form-input.component";
import TextArea from "./components/text-area/text-area.component";
import Checkbox from "./components/checkbox/checkbox.component";
import Radio from "./components/radio/radio.component";
import ToggleSwitch from "./components/toggle-switch/toggle-switch.component";
import Button from "./components/button/button.component";

const initialState = {
  address: "",
  addition: "",
  meaning: "",
  flavors: [
    { id: 1, value: "chocolate", label: "Chocolate", isChecked: false },
    { id: 2, value: "vanilla", label: "Vanilla", isChecked: false },
    { id: 3, value: "strawberry", label: "Strawberry", isChecked: false }
  ]
};

function App() {
  const [state, setState] = useState(initialState);
  const [disabled, setDisabled] = useState(true);
  const [errors, setErrors] = useState({ address: "", meaning: "" });
  const [touched, setTouched] = useState({});

  const { address, addition, meaning, flavors } = state;
  const radioOptions = ["1", "2", "3", "4", "5"];

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleClick = (e) => {
    let iceCreamFLavors = flavors;
    flavors.forEach((flavor) => {
      if (flavor.value === e.target.value) {
        flavor.isChecked = e.target.checked;
      }
    });
    setState({ ...state, flavors: iceCreamFLavors });
  };

  const onToggle = () => {
    setDisabled(!disabled);
  };

  function handleBlur(e) {
    e.persist();
    if (e.target.id === "address") {
      setErrors((prev) => ({
        ...prev,
        address: "Address is required"
      }));
    } else if (e.target.id === "meaningOfLife") {
      setErrors((prev) => ({
        ...prev,
        meaning: "Please give a meaning"
      }));
    }

    setTouched((cur) => {
      console.log(e.target.id);
      return { ...cur, [e.target.id]: true };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!address) {
      setErrors((prev) => ({ ...prev, address: "Address is required" }));
    } else if (!meaning) {
      setErrors((prev) => ({
        ...prev,
        meaning: "Please give a meaning"
      }));
    } else {
      alert("Form submitted!");
      setState(initialState);
      setDisabled(!disabled);
      setErrors({});
    }
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <ToggleSwitch
          label='Do you live in the US?'
          name='toggle'
          onToggle={onToggle}
        />
        <FormInput
          label='What is your street Address?'
          id='address'
          name='address'
          value={address}
          type='text'
          placeholder='Your answer'
          onChange={onChange}
          onBlur={handleBlur}
          disabled={disabled}
          error={errors}
          touched={touched}
          requiredField='true'
        />
        <Radio
          label='What is 2 + 2?'
          options={radioOptions}
          type='radio'
          name='addition'
          value={addition}
          onChange={onChange}
        />

        <TextArea
          label='What is the meaning of life?'
          id='meaningOfLife'
          name='meaning'
          value={meaning}
          onChange={onChange}
          onBlur={handleBlur}
          error={errors}
          touched={touched}
          requiredField='true'
        />
        <div className='check-group'>
          <p>Which are your favorite ice cream flavors?</p>
          {flavors.map((flavor) => {
            return (
              <Checkbox key={flavor.id} handleClick={handleClick} {...flavor} />
            );
          })}
        </div>

        <Button type='submit' label='Submit' />
      </form>
    </div>
  );
}

export default App;
