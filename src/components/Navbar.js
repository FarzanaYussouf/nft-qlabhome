import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
          
            <nav class="navbar navbar-expand-lg bg-body-tertriary shadow p-2 mb-0 bg-black rounded text-white">
                <div class="container-fluid ">
                    <a class="navbar-brand fs-1 fw-bold text-white" href="#">NFT</a>
                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon "></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul class="ms-auto navbar-nav me-auto mb-2 mb-lg-0 border border-3 ">
                            <li class="nav-item  ">
                                <Link class="nav-link active ms-3 text-white " aria-current="page" to ="/">Home</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link active ms-3 text-white" aria-current="page" to="/Projects">Projects</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active ms-3 text-white" aria-current="page" to="/About">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active ms-3 text-white" aria-current="page" to="/Requirements">Requirements</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link ms-3  me-3 text-white" aria-current="page" to="/Contact">Contact</Link>
                            </li>


                        </ul>

                        <button class="btn btn bg-primary text-white" type="submit">
                            <Link className="text-white" aria-current="page" to="/Contact">Contact Us </Link>
                            </button>

                    </div>
                </div>
            </nav>
        </>
    )

}
export default Navbar