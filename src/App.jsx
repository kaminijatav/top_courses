import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {apiUrl, filterData } from "./data"
import Filter from "./components/Filter"
import Navbar from "./components/Navbar"
import Cards from  "./components/Cards"
import { useEffect } from 'react'
import Spinner from './components/Spinner'
import {toast} from "react-toastify";

const App=()=> {
   const [courses,setCourses]=useState(null)
   const [loading,setLoading]=useState(true);
   const[category,setCategory]=useState(filterData[0].title)
   const fetchData=async()=>{
     try{
       const res =await fetch(apiUrl);
      const output =await res.json();
    setCourses(output.data)
    }
    catch(error){
      toast.error("Something went wrong");

    }
    setLoading(false)
  }
  useEffect(()=>{
  fetchData();
},[])
  return (
    <div className="app">
        <Navbar ></Navbar>
        <div className='backgd'>
      <Filter  category={category} setCategory={setCategory}filterData={filterData}></Filter>
      {/* <Cards courses={courses}></Cards> */}
      <div className='app_loadCard'>
        {
          loading ?(<Spinner/>):(<Cards courses={courses} category={category} />)
          
        }

      
        </div>
      </div>
    </div>
     
  )
}

export default App
