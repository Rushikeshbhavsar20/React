import React from "react";
import ReactDOM from "react-dom";



const heading = React.createElement('h1',{id:"header"},"Hello from React application")



/*
creating nested elemrnt 
    <div> 
        <div> 
              <h1></h1>
         /div>
    </div>


    React element are object and gets converted to html which browser understands 
*/


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