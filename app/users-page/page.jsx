

import Card from '@/components/card';
import React from 'react'

export default function page() {

  //First create the various users above return
  const users = [
    //user1
    {
      womanImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMCHeoVUkewo1f50aDT5w38zM_olDccd7qNA&s",
      middleStatement : "Miss Cathy",
      bottomStatement : "Full Stack Developer",
    },
     //user2
     {
      womanImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToELUtHRskjAk55P3pJRbYBjKH3sycgx4elQ&s",
      middleStatement : "Miss Diana",
      bottomStatement : "Full Stack Developer",
    },
     //user3
     {
      womanImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA7blAdsDS3qKz3dFyrmW6UXTKIiX6sAwtTw&s",
      middleStatement : "Miss Dorothy",
      bottomStatement : "Full Stack Developer",
    },
     //user4
     {
      womanImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnsmN0wVzrAetOR6GVu6_XE6P8jqQXO0Cc5w&s",
      middleStatement : "Miss Diana",
      bottomStatement : "Full Stack Developer",
    },
     //user5
     {
      womanImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73vM9qkRIYXmPcdg0s-tUa_kfGdM6Z1qKNg&s",
      middleStatement : "Miss Diana",
      bottomStatement : "Full Stack Developer",
    },
     //user6
     {
      womanImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg4KC-mGpEZaHvNywL2g3MlCGy9cyfTBjPKA&s",
      middleStatement : "Miss Irene",
      bottomStatement : "Full Stack Developer",
    }




  ]

  return (
    <div className='users-section'>
        <div className="div-1">
        <h2>Users Page</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit cum dolor, eos doloremque repellendus sequi accusamus delectus inventore illum, earum eligendi, tenetur odio labore sint. Eligendi, dignissimos placeat. Aut, numquam.</p>

        <a href="/">Go Back to Home</a>
        </div>
        <div className="div-2">

{/*           
          inside {users}
          we map through the users{users.map()}
          to get a single user{users.map((user))}
          then the arrow return function {users.map((user)=>{})}
          inside which we return and call the Card we created earlier in the components called card.jsx
          {users.map((user)=>{
            return(
              <Card/>
            )
          })}
          then lastly fully define the props you used
          {users.map((user)=>{
            return(
              <Card womanImage={user.womanImage}/>
            )
          })}
          and more */}
   
           

          

          {users.map((user)=>{
            return(
              <Card womanImage={user.womanImage} middleStatement={user.middleStatement} bottomStatement={user.bottomStatement}/>
            );

          }

          )}

        </div>
        
      
    </div>
  )
}
