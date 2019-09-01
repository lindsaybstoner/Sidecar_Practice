import React, { useState, useEffect } from 'react';
// useState and useEffect are built in functionality to mimic lifecylcle methods

const Example = () => {
  // cant be in a class --- must be in a function whether that is an arrow or traditional
  // Declare a new state variable
  // by connecting the variable set perviously in state to the action to take
  // in order to change it allows it for specifificity of action to variable pairing

  const [count, setCount] = useState(0); //set equal to the first time is the default setting
  const [age, setAge] = useState(42);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  // useEffect is the combination of componentDidMount, componentDidUpdate, componentWillUnmount
  // second argument of [count] Only re-run the effect if count changes

  return (
    <div>
      <p>This is your age {age}</p>
      <button onClick={() => setAge(age + 1)}> Increase your age </button>
      <button onClick={() => setAge(age - 1)}> Decrease your age </button>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;
