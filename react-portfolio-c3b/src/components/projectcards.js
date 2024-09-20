import React from 'react'

const Projectcards = (item) => {
    return (
       <div>
         <div className="col">
         <div className="card border-0 rounded-0" style={{ width: '18rem', marginLeft:'15%'}}>
                            <img src={item.img} className="card-img-top" alt="game screen"></img>
                            <div className="card-body">
                              <h5 className="card-title">{item.title}</h5>
                              <p className="card-text"><i>{item.desc}</i></p>
                              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={item.modal}>See More</button>
                            </div>
                          </div>
         </div>
                    
                        </div>
       
       
       
    )
}

export default Projectcards