import React from "react";
import images from "../assets/image.jpg";
import './style.css'

const listusers = [
  {
    name: "Mohamed",
    age: 25,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
  },
  {
    name: "Ahmed",
    age: 28,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
  },
  {
    name: "Ali",
    age: 30,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, maiores!",
  },
];

const Listusers = () => {
  return (
    <div className="container">
      <img src={images} alt=" not existe" />
      {/* {list of users } */}
      <h2 className="title">List of users</h2>
      <div className="users">
        {listusers.map((user, i) => (
          <div key={i} className="block">
            <h2> {user.name} </h2>
            <h2> {user.age} </h2>
            <p> {user.desc} </p>{" "}
          </div>
        ))}
      </div>

      {/* {users < 25} */}
      <h2 className="title">List of users greater than 25</h2>
      <div className="users">
        {listusers
          .filter((user) => user.age > 25)
          .map((user, i) => (
            <div key={i} className="block">
              <h2 > {user.name} </h2>
              <h2> {user.age} </h2>
              <p> {user.desc} </p>{" "}
            </div>
          ))}
      </div>

      {/* {Sum of age } */}
      <h2 className="title">Sum of age</h2>
      <h3 className="sum">
          {
              //   put zero to init sum 
              listusers.reduce((sum,user)=>user.age + sum, 0) 
            
          }
      </h3>



{/* end of div global  */}
    </div>  
  );
};

export default Listusers;
