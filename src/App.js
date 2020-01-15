import React, { Component } from 'react'
import { connect } from 'react-redux'

import Action from './actions';
import { startAction } from "./actions/startAction";
import { stopAction } from "./actions/stopAction";

import Counter from './components/counter';

import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    const { rotating } = this.props
    return (
      <div className='App'>
        <header className='App-header'>
         <h1 className='App-title'> Welcome to React </h1>
          <Counter
            value={this.props.counter}
            onIncrement={() => this.props.increment()}
            onDecrement={() => this.props.decrement()}
          />
          <p>{this.props.message}</p>
            <img
                src={logo}
                className= {
                  "App-logo" +
                  (this.props.rotating ? "" :" App-logo-paused ")
                }
                alt='logo' />
            <button className="ampstart-btn ampstart-btn-secondary" 
            onClick={
                this.props.rotating ?
                  this.props.stopAction : this.props.startAction
              }>
              {
                 this.props.rotating ?
                  'stop' : 'start'
              }
            </button>
             <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Title Page#1</td>
                <td>
                  <a href='javascript:void(0)'>Show</a>
                </td>
              </tr>
            </tbody>
        </table>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
  rotating: state.rotateReducer.rotating
});

const mapDispatchToProps = dispatch => ({
    increment: () => dispatch({type: Action.INCREMENT, text: "INCREMENT Redux"}),
    decrement: () => dispatch({type: Action.DECREMENT, text: "DECREMENT Redux"}),
    startAction: () => dispatch(startAction),
    stopAction: () => dispatch(stopAction)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);