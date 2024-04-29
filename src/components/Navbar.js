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
                                <a class="nav-link active ms-3 text-white " aria-current="page" href="/home.html">Home</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link active ms-3 text-white" aria-current="page" href="#">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active ms-3 text-white" aria-current="page" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active ms-3 text-white" aria-current="page" href="#">Requirements</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-3  me-3 text-white" aria-current="page" href="#">Contact</a>
                            </li>


                        </ul>

                        <button class="btn btn bg-primary text-white" type="submit">Contact Us</button>

                    </div>
                </div>
            </nav>
        </>
    )

}
export default Navbar