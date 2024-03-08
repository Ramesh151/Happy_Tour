import React from 'react'
import { Carousel } from 'flowbite-react';

export default function SliderUi() {
  return (

    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        <img width="100%" className=' bg-cover' src="https://media.istockphoto.com/id/1848474625/photo/public-playground.jpg?s=612x612&w=0&k=20&c=akZ6MR5z2baKciIS4Oa0jyW5iRw49jTl1opYK6xO928=" alt="" srcSet="" />
        <img width="100%" className=' w-full' src="https://media.istockphoto.com/id/1323047421/photo/cute-child-girl-playing-in-park-stock-photo.jpg?s=612x612&w=0&k=20&c=fnXH3A5kSwajYoA89eTlK-C_tqeo-ilsbC2g0I0dxvY=" alt="" srcSet=""/>
         <img width="100%" className=' bg-cover' src="https://media.istockphoto.com/id/1455240515/photo/old-men-friends-having-fun-lying-on-slide-at-park.jpg?s=612x612&w=0&k=20&c=qnM_0XIPbeLICimqpdQlLop7Tb8UxBf1MyhbuXzhuoM=" alt="" srcSet="" />
         <img width="100%" className=' bg-cover' src="https://media.istockphoto.com/id/1390321784/photo/mother-with-son-having-fun-on-slide-at-playground.jpg?s=612x612&w=0&k=20&c=KuGsiKHq-mIurJrbh2lokLIOikvJ98Ms4MWUNB0s874=" alt="" srcSet="" />
       
      </Carousel>
    </div>

    
  )
}
