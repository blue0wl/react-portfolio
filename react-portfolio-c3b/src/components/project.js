import React from 'react'
import Projectcards from './projectcards.js'
import Modals from './modals.js'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Project = () => {
    return (
        <section id="portfolio" class="project-container">
      <div className="container">
      <div className="title-block">
      <h2 align=" center"><strong>List of Projects</strong></h2></div>
      
      <div className="row pb-3 gx-4 justify-content-center align-items-center">
          <div className="col-md-4 mb-3">
            <Projectcards 
              img={"/coin_crisis.png"} 
              title="Coin Crisis" 
              desc="An Indie game made as a requirement in my 2nd Year in college."
              modal="#Modal-1">
            </Projectcards>          
          </div>

          <div className="col-md-4 mb-3">
            <Projectcards  
              img={"/lingua.png"} 
              title="Lingua Disco" 
              desc="A language learning and translator application made as a requirement in HuCoint."
              modal="#Modal-2">
            </Projectcards>
          </div>

          <div className="col-md-4 mb-3">
            <Projectcards 
              img={"/byahero.png"} 
              title="Byahero" 
              desc="A jeep routing application to alleviate traffic made as a requirement in Algocom."
              modal="#Modal-3">
            </Projectcards>
          </div>
        </div>
     
      </div>
        

      <Modals 
        modID="Modal-1" 
        title="Coin Crisis"
        desc="Coin Crisis is an Indie game made by my group and the game basically centers around managing your finances wisely as a college student that lives alone. The end goal of the game is that your character must stay healthy and balance out the thirst, hunger, and mood meters while saving some money."
      />  
      <Modals 
        modID="Modal-2" 
        title="Lingua Disco"
        desc="Lingua Disco is a mobile application that was developed in our HuCoint course. It is a language learning application with a built in translator as well. This application aims to develop users' linguistic knowledge that will equip them sufficient understanding in other languages to engage with other people even from other parts of the world."
      />  
      <Modals 
        modID="Modal-3" 
        title="Byahero"
        desc="Byahero is an application buddy that will help it's user's needs like hailing a jeep in a recommended jeepney stop. It makes commuting systematic and in a way, much convenient because it also helps the jeepney drivers to navigate routes with less or no traffic."
      />        
    </section>
    
    )
}

export default Project