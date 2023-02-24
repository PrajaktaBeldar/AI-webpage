import React from 'react'
import AI from "../images/AI.jpg";
import "../style/Home.scss";
import { 
  AiFillGoogleCircle, 
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram
} from "react-icons/ai";  


const Home = () => {
  return (
    <> 
    <div className="section1" id="home">
        <main>
        <h1>Technology</h1>
        <p>Solution to all my problems</p>
        </main>
    </div> 

    <div className="section2">
      <img src={AI} alt="Graphics" />
      <div>
        <p>
        Machinery and equipment developed from the application of scientific knowledge.
         </p> 
      </div>
    </div> 

    <div className="section3" id="about">
      <div>
        <h1>Information</h1>
        <p>Technological advancements have led to significant changes in society. The earliest known technology is the stone tool, used during prehistoric times, followed by the control of fire, which contributed to the growth of the human brain and the development of language during the Ice Age.</p>
      </div>
    </div>

    <div className="section4" id="brand">
    <div>
      <h1>Brands</h1>
      <article>  
        
        <div style={{
          animationDelay:"0.3s"
          }}>
            <a href="http://google.com">
          <AiFillGoogleCircle/>
          <p>Google</p>
          </a>
        </div>
        

        <div style={{
          animationDelay:"0.5s"
          }}>
            <a href="http://amezon.com"> 
          <AiFillAmazonCircle/>
          <p>Amazon</p>
          </a>
        </div>

        <div style={{
          animationDelay:"0.8s"
          }}>
            <a href="http://youtube.com">
          <AiFillYoutube/>
          <p>Yotube</p> 
          </a>
        </div>

        <div style={{
          animationDelay:"1s"
          }}>
             <a href="http://instagram.com">
          <AiFillInstagram/>
          <p>Instagram</p>
          </a>
        </div>
      </article>
    </div>

    </div>
    </>
  )
}

export default Home; 