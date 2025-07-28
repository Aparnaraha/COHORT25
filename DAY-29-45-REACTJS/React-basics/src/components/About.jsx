import React, { useState } from 'react'

const About = () => {

  const [user, setUsername] = useState(
    {
      title: "About",
      description: "Dummy - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste corrupti ipsa debitis, sed obcaecati sapiente voluptate. Nemo quo tempora, vero quos laborum, dolores aspernatur sint, laudantium ex cupiditate nesciunt voluptate.",

    }
  )
  
  return (
    <>
     <p className=" py-1 m-1 text-2xl font-semi-bold border border-blue-300 w-40 rounded-lg shadow "> title: {user.title}</p>
     <div className='p-1 -tomato font-bold'>description: {user.description}</div> 
    </>
  )
}

export default About