import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;
  function clickHandler(){
    if(likedCourses.includes(course.id)){
      //Pehla sa like howa pada ha
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
    }else{
      //pehla sa like nai howa
      if(likedCourses.length === 0){
        setLikedCourses([course.id]);
      }else{
        //non empty pehla sa
        setLikedCourses((prev) => [...prev, course.id])
      }
    }
  }
  return (
    <div className='w-[300px] bg-[#132043] bg-opacity-70 rounded-md'>
      <div className='relative'>
         <img src={course.image.url} alt=''></img>
         <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-14px] grid place-items-center'>
          <button onClick={clickHandler}>
            {
                !likedCourses.includes(course.id) ? (<FcLikePlaceholder fontSize="1.75rem" />) : (<FcLike fontSize="1.75rem" />)
            }

          </button>
        </div>
      </div>
      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className='mt-2 text-white'>{course.description}</p>
      </div>
    </div>
  )
}

export default Card;
