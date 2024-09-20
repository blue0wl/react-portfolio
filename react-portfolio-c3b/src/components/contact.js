import React from 'react'

const Contact = () => {
    return (
       <div>
                 <section id="contact" class="contact-container">
        <div class="contact-title-block">
            <h2 align="center"><strong>Like my Designs?</strong></h2>
        </div>
       
    </section>


  <footer id="footer" class="footer">
    <div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3>Send me a message here!</h3>
                        <p><strong>I appreciate your remarks</strong></p>
                        <form class="requires-validation" action="index.html" onsubmit="alert('Thank you for reaching out!')">

                            <div class="col-md-12">
                               <input class="form-control" type="text" name="name" placeholder="Full Name" required></input>
                               <div class="invalid-feedback">Please type your name</div>
                            </div>

                            <div class="col-md-12">
                                <input class="form-control" type="email" name="email" placeholder="E-mail Address" required></input>
                                 <div class="valid-feedback">Email field is valid!</div>
                                 <div class="invalid-feedback">Email field cannot be blank!</div>
                            </div>


                            <div class="col-md-12">
                                <input class="form-control" type="text" name="message" placeholder="Type your message here" required></input>
                                <div class="invalid-feedback">Please type a message</div>
                             </div>
                  

                            <div class="form-button mt-3">
                                <button id="submit" type="submit" class="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </footer>
       </div>
    
    )
}

export default Contact