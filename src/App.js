
import './App.css';
import Navbar from './componed/navbar';
import { useEffect,useState } from 'react';

import axios from "axios"
import Product from './componed/card';

function App() {
  const[data,setData]=useState([])
  useEffect(()=>{
   
    axios.get("http://192.168.3.202:3333/api/getallpost")

    .then((res)=> setData(res.data))
    .catch((errer)=>console.log(errer))
  },[])
  return (
    <div className="App">
      <Navbar  />
      {data.map((el)=>{
        return (
          <div className='mycard'>
            <Product card={el}/>
            
          </div>
      )})
        }
     
    </div>
  )
      }


export default App;
