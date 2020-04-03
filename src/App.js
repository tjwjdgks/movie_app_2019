import React from 'react';

function Food(props){
  return <h1>I like {props.name}</h1>
}
const foodILike = [
  {
    id:1,
    name:"kimchi",
    rating :5
  },
  {
    id:2,
    name: "sam",
    rating :5.1
  },
  {
    id:3,
    name: "sss",
    rating :4
  }
];

function App() {
  return (
    <div className="App">
      {foodILike.map(dish =>(<Food key={dish.id} name={dish.name}/>))}
    </div>
  );
}

export default App;
