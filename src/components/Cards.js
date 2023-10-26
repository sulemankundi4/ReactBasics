import React, { useState } from 'react'
import Card from './Card';
const Cards = (props) => {
   let category = props.category;
   let courses = props.courses;
   const [likedCourses, setLikedCourses] = useState([]);

   const courseData = () => {
      if(category === 'All'){
         let coursesData = [];
         Object.values(courses).forEach((courseCategory)=>{
            courseCategory.forEach((course) => {
               coursesData.push(course);
            })
         })
         return coursesData;
      } else {
         return courses[category];
      }

   }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
         courseData().map((course) => {
            return <Card  course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
         })
      }
    </div>
  )
};

export default Cards
