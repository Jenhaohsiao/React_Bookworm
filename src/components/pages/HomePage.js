import React from 'react';
import {Link}from "react-router-dom";

// const HomePage = () => (

//     <div>
//         <h1>Home Page</h1>
//         <div><Link to ="/login">Login</Link></div>
//         <div><Link to ="/about">About</Link></div>
        
//     </div>
// );

class HomePage extends React.Component {
    render(){
        return(
    <div>
        <h1>Home Page</h1>
        <div><Link to ="/login">Login</Link></div>
        <div><Link to ="/about">About</Link></div>
    </div>
        );
    }
}

export default HomePage;