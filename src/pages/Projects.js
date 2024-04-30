import { projectscategories } from "../data"
import "./Projects.css"
import { aboutcategories } from "../data"

const Projects = () => {
    return (
        <>
            <div className="container mt-2 mb-3">
                <div className="row">
                    <div className="col-12">


                        <textarea class="form-control block" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-12 col-12 text-center pro-child">
                        <img className="mt-4 mb-2" src="/images/location (1).jpg" alt="" />
                        <h2>QLAB</h2>
                        <p>@qlab <br />
                            Followers.1M</p>
                        <button className=" btn bg-primary text-white mb-4"> Activities</button><br />
                        <button className=" btn bg-primary text-white mb-4">Testimonial</button><br />
                        <button className="btn bg-primary text-white mb-4">Our Projects</button><br />
                        <button className="btn bg-primary text-white ">Case Studies</button>

                    </div>
                    <div className="col-lg-10 col-md-8 col-sm-12 col-12 text-center mt-4 second-child2">
                        <h1 className="fw-bold">Projects</h1>
                        <div className="row">{
                            projectscategories.map((projectscategory) => (
                                <>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <img className="mt-3" src={projectscategory.img} alt="" />
                                        <h5 className="mt-3">{projectscategory.name}</h5>
                                        < button className="bg-primary text-white">{projectscategory.btn}</button>

                                    </div>
                                </>
                            )
                            )
                        }

                        </div>

                    </div>
                </div>


            </div>
            <div className="container mt-2 mb-3">
                <div className="row">
                    <div className="col-12">


                        <textarea class="form-control block" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-12 col-12 text-center pro-child">
                        <img className="mt-4 mb-2" src="/images/location (1).jpg" alt="" />
                        <h2>QLAB</h2>
                        <p>@qlab <br />
                            Followers.1M</p>
                        <button className=" btn bg-primary text-white mb-4"> Activities</button><br />
                        <button className=" btn bg-primary text-white mb-4">Testimonial</button><br />
                        <button className="btn bg-primary text-white mb-4">Our Projects</button><br />
                        <button className="btn bg-primary text-white ">Case Studies</button>

                    </div>
                    <div className="col-lg-10 col-md-8 col-sm-12 col-12 text-center mt-4 second-childa">
                        <h1 className="fw-bold">Testimonial</h1>
                        <div className="row">{
                            aboutcategories.map((aboutcategory) => (
                                <>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <img className="mt-3" src={aboutcategory.img} alt=""/>
                                        <h5 className="mt-3">{aboutcategory.name}</h5>
                                        < button className="bg-primary text-white mt-3">{aboutcategory.btn}</button>

                                    </div>
                                </>
                            )
                            )
                        }

                        </div>

                    </div>
                </div>


            </div>
            <div className="container mt-2 mb-3">
                <div className="row">
                    <div className="col-12">


                        <textarea class="form-control block" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-2 col-md-4 col-sm-12 col-12 text-center pro-child">
                        <img className="mt-4 mb-2" src="/images/location (1).jpg" alt="" />
                        <h2>QLAB</h2>
                        <p>@qlab <br />
                            Followers.1M</p>
                        <button className=" btn bg-primary text-white mb-4"> Activities</button><br />
                        <button className=" btn bg-primary text-white mb-4">Testimonial</button><br />
                        <button className="btn bg-primary text-white mb-4">Our Projects</button><br />
                        <button className="btn bg-primary text-white ">Case Studies</button>

                    </div>
                    <div className="col-lg-10 col-md-8 col-sm-12 col-12 text-center mt-4 second-child2">
                        <h1 className="fw-bold">Our Previous Projects</h1>
                        <div className="row">{
                            projectscategories.map((projectscategory) => (
                                <>
                                    <div className="col-lg-3 col-md-6 col-sm-12">
                                        <img src={projectscategory.img} alt="" />
                                        <h5>{projectscategory.name}</h5>
                                        < button className="bg-primary text-white">{projectscategory.btn}</button>

                                    </div>
                                </>
                            )
                            )
                        }

                        </div>

                    </div>
                </div>


            </div>
           
        </>
    )
}

export default Projects