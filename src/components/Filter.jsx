import React from "react";
import './Filter.css'
const Filter=({filterData,category,setCategory})=>{
    function filterHandler(title){
        setCategory(title)
    }
    return (
        <div className="filter">
      
{
    filterData.map((data)=>{
        return  <button className='btn' key={data.id} onClick={()=>filterHandler(data.title)}>
        {data.title}
       </button> 
    })
}
    </div>
    )
}
export default Filter