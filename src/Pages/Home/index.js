import React from 'react'
import Navbar from "../../Components/Navbar"
import Banner from "../../Components/Banner"
import Posts from "../../Components/Posts"
import Footer from "../../Components/Footer"

const Home = (props) => {
  
  return (
    <div>
      <Navbar setScreen={props.setScreen}/>
      <Banner/>
      <Posts/>
      <Footer/>
    </div>
  )
}

export default Home
