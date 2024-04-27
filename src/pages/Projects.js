import "./Projects.css"
import projectscategories from "../projects data"
const Projects =() =>{
    return (
        <>
        <div className="continer mt-5 mb-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="mb-5">Projects we mostly work on</h1>
                    <hr/>

                </div>
                <div className="col-12 col-sm-12 second-child2">
                    <div className="row">{
                        projectscategories.map((abc)=>(
                            <> 
                            <div className="col-lg-3 col-md-6 col-sm-6 col-6 text-center">
                                <img className="mt-4" src={abc.img} alt="" />
                                <h4 className="mt-3">{abc.name}</h4>
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
export default Projects