import React,{useState,useEffect}from 'react'
import './Nav.css'

function Nav() {

const [show,setShow]=useState(false)

useEffect(()=>{
window.addEventListener('scroll',()=>{
    if(window.scrollY>500){
        setShow(true)
    }
    else{
        setShow(false)
    }
    
})
},[])

  return (
    <div className={`nav ${show && "nav_black"}`}>
<img className='nav-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png'/>
    </div>
  )
}

export default Nav