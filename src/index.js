import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import { combineReducers, createStore } from 'redux';


let alert초기값=true;

function reducer2(state=alert초기값,액션){
  if(액션.type==='닫기'){
    state=false
    return state;
  }else{
    return state;
  }
}//무조건 function 안에있는 state를 이용해서 사용. 기존변수 사용 X 
let 기본값=[{id:3,name:'멋진신발',quan:2,price:110000},{id:4,name:'그냥신발',quan:3,price:99000}];

function reducer(state=기본값,액션){
    if(액션.type==='항목추가'){
      let found=state.findIndex((a)=>{return a.id===액션.payload.id})
      if(found>=0){
        
      let copy=[...state];
      copy[found].quan+=parseInt(액션.payload.quan);
      return copy; 
      }else{
       
      let copy=[...state];
      copy.push(액션.payload);
      return copy; 
      }
    } 
  else if(액션.type==='수량증가'){
    let copy=[...state];
    copy[액션.data].quan++;
    return copy
  }else if(액션.type==='수량감소'){
    let copy=[...state];
    if(copy[액션.data].quan<=0){
      return copy;
    }else{
    copy[액션.data].quan--;
    return copy
  }
  }
  else{
     return state;
  }
}

let store=createStore(combineReducers({reducer,reducer2}));//reducer 여러개 보낼 때



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
