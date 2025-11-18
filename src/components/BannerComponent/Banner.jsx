import { Link } from 'react-router-dom';
import './Banner.css'
import { useState , useEffect} from 'react';

function Banner() {

  const [ BannerContent , setBannerContent ] = useState();
      
  useEffect(()=>{
    setInterval(()=>{
    if(localStorage.getItem("token")!=undefined)
    {
        setBannerContent(<></>);
    }
    else
    {
        setBannerContent(<>
            {/* Carousel Start */}
<div class="container-fluid p-0 mb-5">
    <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="w-100" src="public/assets/img/d.jpg" width="1366" height="500" alt="Image" />
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div class="p-3" style={{"max-width" : "700px"}} >
                        <h6 class="section-title text-white text-uppercase mb-3 animated slideInDown">Search For Best Deals</h6>
                        <h1 class="display-3 text-white mb-4 animated slideInDown">Discover For Consignments </h1>
                        <Link to="/service">
                        <a class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Services</a>
                        </Link>
                        <Link to="/login">
                        <a href="" class="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Consignment</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <img class="w-100" src="public/assets/img/p.jpg" width="1366" height="500" alt="Image" />
                <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div class="p-3" style={{"max-width":"700px"}}>
                        <h6 class="section-title text-white text-uppercase mb-3 animated slideInDown">Search For Best Deals</h6>
                        <h1 class="display-3 text-white mb-4 animated slideInDown">Discover For Consignments </h1>
                        <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Our Services</a>
                        <a href="" class="btn btn-light py-md-3 px-md-5 animated slideInRight">Book A Consignment</a>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</div>
{/* Carousel End */}

  
        </>)
    }
    },1);
  },[]);

  return (
    <>
    {BannerContent}
    </>
  )
}

export default Banner;
  