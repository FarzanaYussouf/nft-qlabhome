import "./Home.css"
import categories from "../data"
const Home =()=>{
  return( 
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
  <hr/>
  <div className="row text-center">
    {
      categories.map((abc) =>(
       <>
       <div className="col-lg-4 col-md-4 col-sm-6 col-6 ">
        <img src={abc.img} alt="" />
        <h4 className="mt-3">{abc.name}</h4>

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
export default Home






