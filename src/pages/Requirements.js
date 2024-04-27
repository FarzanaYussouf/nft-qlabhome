import "./Requirements.css"
import reqcategories from "../req data"

const Requirements = () => {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-lg-12 col-md-12  text-center second-child">
                        <h1>Technologies we work in</h1>
                        <hr />

                        <div className="col-lg-12 col-md-12 col-sm-6 sm-6 ">
                            <button1 className="me-3 mt-3 bg-primary text-white ">All</button1>
                            <button2 className="me-3 mt-3 bg-primary text-white ">PM</button2>
                            <button className="me-3 mt-3 bg-primary text-white">Development</button>
                            <button3 className="bg-primary mt-3 text-white">Design</button3>
                        </div>
                    </div>
                    <div className="col-lg-12 third-child text-center">
                        <div className="row">{
                            reqcategories.map((abc) => (
                                <>
                                    <div className="col-lg-4 col-md-6 col-sm-6 sm-6">
                                        <img className="mt-5" src={abc.img} alt="" />

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
export default Requirements