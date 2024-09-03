import React from "react";
import './Card.css'
 import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
const Card =({course,likedCourses,setLikedCourses})=>{
    function clickHandler(){
if(likedCourses.includes(course.id)){
    setLikedCourses((prev)=>prev.filter((cid)=>(cid!==course.id)));
    toast.warning("like removed");
}
else{

    //pehle se liked nhi h insert krna hai ye liked course me
if(likedCourses.length==0){
    setLikedCourses([course.id])
}
else{
    setLikedCourses((prev)=>[...prev,course.id])
}
toast.success("Liked Successfully")
}
    }
    return (
<div className="card">
     <div className="img">
    <img   src={course.image.url}  />
        <div className="heartBtn" >
        <button onClick={clickHandler} >
      {

        likedCourses.includes(course.id)?(<FcLikePlaceholder fontSize="1.75rem"/>):(<FcLike fontSize="1.75rem"/>)
    }  
        
        </button>
        </div>
    </div>
      
    
    <div>
    <p className="courseTitle" >{course.title}</p>
    <p className=" courseDes">{
    (course.description.length>100)?(course.description.substr(0,100)+"..."):(course.description)
    }</p>
</div>


        </div>
    )
}
export default Card;