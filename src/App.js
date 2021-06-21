import React, { useState } from "react";
import "./App.css";

import FormInput from "./components/form-input/form-input.component";
import TextArea from "./components/text-area/text-area.component";
import Checkbox from "./components/checkbox/checkbox.component";
import Radio from "./components/radio/radio.component";
import Button from "./components/button/button.component";

const initialState = {
  address: "",
  addition: "",
  meaning: "",
  chocolate: false,
  vanilla: false,
  strawberry: false
};

function App() {
  const [state, setState] = useState(initialState);

  const { address, meaning, addition, chocolate, vanilla, strawberry } = state;
  const radioOptions = ["1", "2", "3", "4", "5"];

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleClick = (e) => {
    setState({ ...state, [e.target.name]: !e.target.checked });
  };

  return (
    <div className='App'>
      <form action=''>
        <FormInput
          label='What is your street Address'
          id='address'
          name='address'
          value={address}
          type='text'
          placeholder='Your answer'
          onChange={onChange}
        />
        <Radio
          label='What is 2 + 2?'
          options={radioOptions}
          type='radio'
          name='addition'
          onChange={onChange}
        />

        <TextArea
          label='What is the meaning of life?'
          id='meaningOfLife'
          name='meaning'
          value={meaning}
          onChange={onChange}
        />
        <div className='check-group'>
          <p>Which are your favorite ice cream flavors?</p>
          <Checkbox
            label='Chocolate'
            type='checkbox'
            id='chocolate'
            name='chocolate'
            checked={!!chocolate}
            onchange={handleClick}
          />
        </div>

        <Button type='submit' label='Submit' />
      </form>
    </div>
  );
}

export default App;
