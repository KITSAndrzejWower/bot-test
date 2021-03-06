import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {delayTests} from "./consts";

function wait(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
  }
}

it('renders change without crashing 111', () => {

  const i = document.createElement('i');
  ReactDOM.render(<App />, i);
  ReactDOM.unmountComponentAtNode(i);
});


it('renders without crashing 222', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  wait(delayTests)
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing 333', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  wait(delayTests)
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing 44', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  wait(delayTests)
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  wait(delayTests)
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  wait(delayTests)
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  wait(delayTests)
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  wait(delayTests)
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  wait(delayTests)
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  wait(delayTests)
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  wait(delayTests)
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  wait(delayTests)
  ReactDOM.unmountComponentAtNode(div);
});
