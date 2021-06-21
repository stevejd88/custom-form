import React, { useState } from "react";
import "./App.css";

import FormInput from "./components/form-input/form-input.component";
import TextArea from "./components/text-area/text-area.component";
import Checkbox from "./components/checkbox/checkbox.component";
import Button from "./components/button/button.component";

const initialState = {
  address: "",
  meaning: ""
};

function App() {
  const [state, setState] = useState(initialState);

  const { address, meaning } = state;
  const iceCream = ["Chocolate", "Vanilla", "Strawberry"];

  const onChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(e.target.value);
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
          onChange={onChange}
        />
        <Checkbox
          label='Which are your favorite ice cream flavors?'
          options={iceCream}
          type='checkbox'
        />
        <TextArea
          label='What is the meaning of life?'
          id='meaningOfLife'
          name='meaning'
          value={meaning}
          onChange={onChange}
        />
        <Button type='submit' label='Submit' />
      </form>
    </div>
  );
}

export default App;
