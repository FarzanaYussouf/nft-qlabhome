import "./Home.css"
import { categories, projectscategories, reqcategories, aboutcategories } from "../data"

const Home = () => {
  return (
    <>
      <div className="container mt-5 mb-5 ">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 left-child text-white">
            <h1 className="mt-4 fw-bold fs-1">Not Just Another Digital Agency </h1>
            <p className="mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vel deleniti natus eius incidunt exercitationem</p>
            <button className="home-btn bg-primary text-white mt-4 mb-3">Explore</button>
            <button className="home-btn ms-3 bg-primary text-white mt-4 mb-3">Get a Quote</button>

          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 right-child">
            <h2 className="text-center">Top Categories</h2>
            <hr />

            <div className="row text-center">
              {
                categories.map((abc) => (
                  <>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-6 ">
                      <img src={abc.img} alt="" />
                      <h4 className="mt-3">{abc.name}</h4>

                    </div>
                    
                  </>
                
                ))
              }


            </div>
          </div>
        </div>

        <div className="container mt-5 mb-5 ">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="mb-4">Top Developers In Our Team</h2>
              <hr />
            </div>
            <div className="col-lg-12 second-childa mb-5 text-center">
              <div className="row">
                {
                  aboutcategories.map((abc) => (
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
        <div className="continer mt-5 mb-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="mb-5">Projects we mostly work on</h1>
              <hr />

            </div>
            <div className="col-12 col-sm-12 second-child2">
              <div className="row">{
                projectscategories.map((abc) => (
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
        <div className="container mt-5 mb-5 ">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="mb-4">Competitive Advantages</h1>
              <hr />

            </div>
            <div className="col-12 first-child text-center">
              <div className="row">
                < div className="col-lg-3 col-md-6 col-sm-12 sm-12">
                  <img className="ms-5" src="/images/OIP.jpg" alt="" />
                  <h3>Privacy Focused</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, voluptatum!</p>

                </div>
                < div className="col-lg-3 col-md-6 col-sm-12 sm-12">
                  <img className="ms-5" src="/images/OIP (1).jpg" alt="" />
                  <h3>Privacy Focused</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, voluptatum!</p>

                </div>
                < div className="col-lg-3 col-md-6 col-sm-12 sm-12">
                  < img className="ms-5" src="/images/th.jpg" alt="" />
                  <h3>Privacy Focused</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, voluptatum!</p>

                </div>
                < div className="col-lg-3 col-md-6 col-sm-12 sm-12">
                  < img className="ms-5" src="/images/download (1).jpg" alt="" />
                  <h3>Privacy Focused</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, voluptatum!</p>

                </div>




              </div>





            </div>

          </div>

        </div>



        

        


      </div >



    


      <div className="container mt-2 mb-2 ">
        <div className=" row text-center">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 last-child">
            <img src="/images/about.svg" alt="" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 last-child2">
            <h3 className="mt-4 fw-bold">Create,Sell,Well and collect your best NFTs with us very fast</h3>
            <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, reiciendis bhyiu hgty juik.</p>
            <button className="bg-primary text-white mt-3">Connect Wallet</button>
          </div>

        </div>
      </div>

    </>

  )
}
export default Home






