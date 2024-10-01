import React from "react";
import ReactDOM from "react-dom/client";

/*
creating nested elemrnt 
    <div> 
        <div> 
              <h1></h1>
         /div>
    </div>


    React element are object and gets converted to html which browser understands 
*/

/*
const parent  = React.createElement("div",{id:'parent'},[
  React.createElement("div",{id:"child"},[
    React.createElement("h1",{id:'name1'},"Hello from h1 tag"),
    React.createElement("h2",{id:'name1'},"Hello from h2 tag"),
  ]),
  React.createElement("div",{id:"child2"},[
    React.createElement("h1",{id:'name2'},"Hello from h1 tag from ch2"),
    React.createElement("h2",{id:'name2'},"Hello from h2 tag from ch2"),
  ]),
 
]);
const root = ReactDOM.createRoot(document.getElementById("root"))




const ok = React.createElement("div",{id:"box"},[
  React.createElement("div",{id:"box2"},React.createElement("h1",{},"Aye hello"))
])

root.render(ok) 
*/

//creating react in newer way


//creating a react element 
const jsxheading = ( <h1 id="ok" >Namaste react this is 
           rushikesh bhavsar
   </h1> 
   );

//creating functional component
const Component = () => {
   return <h1> Welcome to react </h1>
}


//creating functional Component-compostion

const Component2 = () => {
  return <div className="composition">
           <Component/>
           <h1> this is react </h1> 
    </div>
  
}

//types of defining various functional components 

//with () brackets we dont have to write return
const Component3 = () => (
 <h1> Welcome to react </h1>
);



//with {} we have to define return compulsory
const Component4 = () => {
 return  <div className="composition">
          <Component></Component>
          <h1> this is react </h1> 
   </div>
 
};

//we can write without  any {} and return statement if return on the single line
const Componet = () =>  <h1> this is react </h1> ;


//js code inside a jsx
const a = 100;
const Testingjava = (
    <h1>{a} </h1>
);


//react element inside a component

const Elm_inside_com = () => {
  return <div className="eio">
         {Testingjava}
  </div>
}

//react element inside a element

const elem_inside_elem = (
    <h1> ok , {Testingjava} </h1>

);

//Different types to write a react component 
//<Component4/>
//<Component4></Component4>
//{Component()}
console.log(Componet)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Component4());

///edited by the linux machine