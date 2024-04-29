import "./Contact.css"
const Contact = () => {
    return (
        <>
            <div className="container mt-5 mb-4">
                <div className="row">
                    <div className="col-12 text-center mt-3 mb-4">
                        <h1>Contact Us</h1>

                    </div>
                    <div className="col-4 firstchild-con text-center mt-3 mb-3">
                        <img src="/images/2c.png" alt="" />
                        <h3>Phone</h3>
                        <h5>196574321</h5>

                    </div>
                    <div className="col-4 firstchild-con text-center mt-3 mb-3">
                        <img src="/images/email.png" alt="" />
                        <h3>Email</h3>
                        <h5>email@gmail.com</h5>
                    </div>
                    <div className="col-4 firstchild-con text-center mt-3 mb-3">
                        <img src="/images/location.jpg" alt="" />
                        <h3>Location</h3>
                        <h5>Australia</h5>
                    </div>

                </div>
                <div className=" row text-center mt-3 mb-3">
                    <div className="col-12">
                        <h3>Drop us your message</h3>
                        <p className="mt-3">Freely contact with us anytime.We are available here for you</p>

                    </div>

                    <div class=" row ">
                        <div class="col">
                            <input type="text" class="form-control contact-child border border-3 fw-bold" placeholder="Full Name" aria-label="First name" />
                        </div>
                        <div class="col">
                            <input type="text" class="form-control contact-child border border-3 fw-bold" placeholder="Subject" aria-label="Last name" />
                        </div>
                    </div>
                    <div class="mb-3 mt-5">
                     
                        <input type="email" class="form-control contact-child border border-3 fw-bold" id="exampleFormControlInput1" placeholder="Email" />
                    </div>
                    <div class="mb-3 mt-3 ">
                     
                        <input type="email" class="form-control contact-child border border-3 fw-bold" id="exampleFormControlInput1" placeholder="Phone No" />
                    </div>
                    <div class="mb-3 mt-3">
                       
                        <textarea class="form-control contact-child border border-3 fw-bold" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                    </div>



                </div>
                <div className="row text-center mt-3 mb-5">
                    <div className="col-12">
                        <button className=" btn-con bg-primary text-white fw-bold">Send Message</button>

                    </div>

                </div>

            </div>


        </>
    )
}
export default Contact