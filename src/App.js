import './App.css';
import Header from './component/Header';
import Data from './component/Data';
import movies from './movie.json';
import React,{createContext, useState} from 'react';
import CompA from './component/CompA';
const appState=createContext();

function App() {
  // let login=true;
  //  if(login==false) {
  //   return <p> this is if statement</p>
  //  }

const [num,setNumber]=useState(1);
const [info,setInfo]=useState("hello context api...")
const [name,setName]=useState({name:"shiva",age:20})

function increment() {
  setNumber(num+1)
}
function decrement() {
  setNumber(num-1)
}
  return (
    <div className='App'>
{/* {login===true?<h1>true</h1>:<h1>false</h1>} */}
{/* {
  (()=>{
    if (login) {
     return <h1>hello true</h1>
    }
  })()
} */}
      <Header />
        <h1 className='counter'>{num}</h1>
      <div className='countbox'>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div className="main">
      {
        movies.map((element,index)=>{
          return(
          <Data 
          key={index}
          title={element.Title}
          year={element.Year}
          img={element.Poster}
          />
          )
        })
      }
      </div>
       {/* <appState.Provider value={info}> single data */}
      <appState.Provider value={{info,name}}>
      <CompA/>
      </appState.Provider>
    </div>
  );
}
export default App;
export {appState}
