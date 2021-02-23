import Products from "./Products";
import React, { Component, useState } from 'react';
import './App.css';
import Comments from './component/comments/Comments';
import faker from 'faker';
import Approval from './component/approval/Approval';


const App=()=>{
    return(
      <div className="App">
          <div className="ui comments">
              <Approval>
              <Comments name="Valimai" time="2:30PM" comment="blockbuster"  image={faker.image.image()}/>
              </Approval>
              <Approval>
              <Comments name="Master" comment="blockbuster" time="4:30PM" image={faker.image.image()}/>
              </Approval>
              
              <Approval>
              <Comments name="Karnan" comment="blockbuster" time="6:30PM" image={faker.image.image()}/>
              </Approval>
              <Approval>
              <Comments name="Cobra" comment="blockbuster" time="8:30PM" image={faker.image.image()}/>
              </Approval>
              
             
          </div>
          </div>
    );
}
   export default App;
    

    
    
        
    
    
    