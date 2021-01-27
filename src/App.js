import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

function Header(props) {
  return (
    <div>
      <h1>Cill Musical School</h1>
      <h3>Number of Courses Available in Our Institute: {props.instrumentsList.length}</h3>
    </div>

  )

}


function ThingItem(props) {
  return (
    <li>
      <h3>
        Name: {props.inst.name}
      </h3>
      <h3>
        Classes per course: {props.inst.classes}
      </h3>

    </li>
  )
}

function InstList(props) {
  return (
    <>
      <h1>Instruments List</h1>
      <ul>
        {props.instrumentsList.map(item => <ThingItem inst={item} />)}
      </ul>
    </>
  )
}



class InstForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      name : " ",
      classes : " "

    };

    this.changeInst = this.changeInst.bind(this);
    this.submitInst = this.submitInst.bind(this);
  }

  changeInst(event){
    this.setState({
      name:document.getElementById('name').value,
      classes: document.getElementById('classes').value

    });
  }


  submitInst(event){
    event.preventDefault();
    this.props.add(this.state);
  }


  render() {
    return (
      <>
        <h4>Tell us what instrunment you want us to add</h4>

        <form onSubmit = {this.submitInst} id = 'form'>
          <label>instrunment
            <input type="text" id='name' onChange={this.changeInst}></input>
          </label>
          
          <label> Number of needed classes
            <input id='classes' type="text" onChange={this.changeInst}></input>
          </label>
         
          <input type="submit" value="Add" />
        </form>
      </>
    )
  }
}



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      thingList: [
        {
          id: 1,
          name: 'Guitar',
          classes: '20'

        },
        {
          id: 2,
          name: 'Piano',
          classes: '25'

        },
        {
          id: 3,
          name: 'Violin',
          classes: '30'
        }
      ]
    }
  }


  addInst(item){
    this.state.thingList.push({id:this.state.thingList.length+1, name:item.name, classes: item.classes})
    this.setState({inst:this.state.thingList})
  }

  render() {
    return (
      <>
        <Header instrumentsList={this.state.thingList} />
        <InstList instrumentsList={this.state.thingList} />
        <InstForm add = {(item)=> this.addInst(item)}/>
        <Footer text="Ⓒ RAND " />
      </>

    );
  }
}



function Footer(props) {
  return (
    <p>{props.text}</p>
  )
}
export default App;
