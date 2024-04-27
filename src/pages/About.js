import aboutcatageroies from "../about data"
import "./About.css"

const About = () => {
    return (
        <>
            <div className="container mt-5 mb-5 ">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="mb-4">Top Developers In Our Team</h2>
                        <hr />
                    </div>
                    <div className="col-lg-12 second-child mb-5 text-center">
                        <div className="row">
                            {
                                aboutcatageroies.map((abc)=>(
                            <>
                                <div className="col-lg-2 col-md-6 col-sm-6 col-6 ">
                                    <img className="mt-3" src={abc.img} alt="" />
                                    <h4 className="mt-3 ">{abc.name}</h4>
                                    <button className="mt-3 bg-primary text-white">{abc.btn}</button>
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
export default About