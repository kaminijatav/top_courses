import React, { useState } from "react";
import Card from "./Card";
import './Cards.css'
const Cards=({courses,category})=>{
    const [likedCourses,setLikedCourses]=useState([])
    const getCourses=()=>{
        if(category==="All"){
            let allCourses=[];
            Object.values(courses).forEach((courseCategory)=>{
                courseCategory.forEach((courseData)=>{
                    allCourses.push(courseData);
                })
            })
            return allCourses
        }
        else{
            return courses[category]
        }
        }
       
   return (
    <div className="cards">
        {
           getCourses().map((course)=>{
             return  <Card key ={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card> 
            })
        }
    </div>
   )
}
export default Cards;
