import React from 'react'

const About = () => {
    return (
<div>
    <section id="About"></section>
    <div className="about-section">
        <div id="container-img">
        <img 
          src={"/folklore.jpg"} 
          alt="coin" style={{width:'25%', marginTop:'20px'}}
          className="rounded-circle shadow-lg p-img mr-3 mt-3 mb-3" 
        />
        </div>
    
      <div className="container">
        <h1><strong>About Me</strong></h1>
        <p className ="lead">Hi! I am Neil Patrick B. Llanto from C3B! </p>
        <p className="lead">I study in De La Salle Lipa and this is my output for my WebDevt course.</p>
        <p className ="lead">Coding is not my strongest suit but I really did my best....</p>
        <p className ="lead">I like drawing and desserts in general! My favorite Taylor Swift album is folklore.</p>
      </div>
    </div>
</div>
  
    )
}

export default About