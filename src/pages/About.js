
import "./About.css"

const About = () => {
    return (
        <>
            <div className="container mt-5 mb-0">
                <div className="row text-center ">
                    <div className="col-12">
                        <h1 className="fw-bold ">About Us</h1>
                        <div className="row about-child text-center mt-5">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <h2 className="text-white fw-bold mt-3">On a mission to environmental sustainability with NFT's</h2>
                                <p className="text-white mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsa, at harum est, inventore animi fuga praesentium ex qui consequuntur officia minus laborum natus, ut incidunt unde laudantium commodi velit consectetur corrupti asperiores accusamus facere reiciendis non! Similique, esse, quidem facere ea sapiente modi tenetur vero, laborum provident expedita odio. </p>


                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
                                <img src="/images/about.svg" alt="" />

                            </div>

                        </div>

                    </div>

                </div>
                <div className="row text-center video-child">
                    <div className="col-12">
                        <h1 className="fw-bold mt-5">NFT Gen Marketplace with everything for everyone</h1>

                    </div>
                    <div className="col-12">
                        <video className="mt-5" src="/video/about (1).mp4" type="" controls />


                    </div>


                </div>
                <div className="row text-center">
                    <div className="col-12">

                        <h1 className="fw-bold mt-5">NFT Gen Marketplace with everything for everyone</h1>


                    </div>

                </div>
                <div className="row text-center final-child mt-4 ">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 text-center">
                        <img src="/images/about.svg" alt="" />

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 video-child2">
            <h3 className="mt-5 fw-bold">Create,Sell,Well and collect your best NFTs with us very fast</h3>
            <p className="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, reiciendis bhyiu hgty juik.</p>
            <button className="bg-primary text-white mt-3">Connect Wallet</button>
          </div>


                </div>


            </div>





        </>
    )
}
export default About