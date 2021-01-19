import React from 'react';
import logo from './logo.svg';
import './App.css';

function Header(props){
  return(
    <div>
  <h1>Cill Musical School</h1>
  <h3>Number of Courses Available in Our Institute: {props.instrumentsList.length}</h3>
    </div>
  
    )

}


// function InstList(props){
//   return(
    
//     <h4>Instrumints Available: {props.instrumentsList.map(inst => )}
//     </h4>

//   )

// }


// function Footer(props){

// }

class App extends React.Component{
constructor(){
  super();
  this.state={
    thingList : [
      {
        id: 1,
        name: 'Guitar'
      },
      {
        id: 2,
        name: 'Piano'
      },
      {
        id: 3,
        name: 'Violin'
      }
    ]
  }
}

render(){
  return(
   <>
    <Header instrumentsList = {this.state.thingList} />
    
    </>
   
  );
}
}
export default App;
