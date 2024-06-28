//About.jsx
import React from 'react'
//import Header from './Header';
import Typography from '@mui/material/Typography';
import Image from './img9.png';
import Footer from '../component/Footer';

export default function About() {
    
    const style={
        backgroundImage: `url(${Image})`,
        width:"100%",
        height:"200px", 
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
          textAlign:"center",
    }
    const about={
        display:'flex' ,   
            padding:'20px',
          
    }

    const child1={
        flex:"1",
        padding:"20px",
    }
    const child2={
        flex:"2",
        padding:"20px",
       
    }
  return (
   <div> 
   <div style={style}>
   <Typography sx={{ fontSize: 20 }} color="Black" gutterBottom>
   About
 </Typography>
</div>
    <div style={about}>
        <div style={child1}>
            <img src={Image} width="250px" height="200px" alt=""></img>
        </div>
        <div style={child2}>
        <Typography sx={{ fontSize: 20 }} color="Black" gutterBottom>
        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
      </Typography>
      </div>
        </div>
    <div style={
        {width:'1300px', height:'100px', backgroundColor:'Pink',padding:'20px' }
    }>

    </div>
    <Footer/>
    </div>
  )
  }