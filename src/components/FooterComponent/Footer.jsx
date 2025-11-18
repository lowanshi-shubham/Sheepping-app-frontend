import './Footer.css'
import { useState , useEffect} from 'react';

function Footer() {

  const [ FooterContent , setFooterContent ] = useState();    

  useEffect(()=>{
    setInterval(()=>{
    if(localStorage.getItem("token")!=undefined)
    {
        setFooterContent(<>
{/* Footer Start */}
<div style={{'margin-top':'50px'}} class="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
    <div class="container">
        <div class="copyright">
            <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                    &copy; <a class="border-bottom" href="#">Shipping War</a>, All Right Reserved. 
      
      {/*This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
      Designed By <a class="border-bottom" href="">Shipping War</a>
                </div>
                <div class="col-md-6 text-center text-md-end">
                    <div class="footer-menu">
                        <a href="">Home</a>
                        <a href="">Cookies</a>
                        <a href="">Help</a>
                        <a href="">FQAs</a>
                    </div>
                </div>
            </div>
        </div>
            <img class="w-100" src="public/assets/img/footer-img.png" width=" " height="200px " alt="Image" />

    </div>
</div>
{/* Footer End */}
        </>);
    }
    else
    {
        setFooterContent(<>
        {/* Newsletter Start */}
{/* <div class="container newsletter mt-5 wow fadeIn" data-wow-delay="0.1s">
    <div class="row justify-content-center">
        <div class="col-lg-10 border rounded p-1">
            <div class="border rounded text-center p-1">
                <div class="bg-white rounded text-center p-5">
                    <h4 class="mb-4">Subscribe Our <span class="text-primary text-uppercase">Newsletter</span></h4>
                    <div class="position-relative mx-auto" style={{"max-width":"400px"}}>
                        <input class="form-control w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email" />
                        <button type="button" class="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> */}
{/* Newsletter Start */}


{/* Footer Start */}
<div class="container-fluid bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
    {/* <div class="container pb-5">
        <div class="row g-5">
            <div class="col-md-6 col-lg-4">
                <div class="bg-primary rounded p-4">
                    <a href="index.html"><h1 class="text-white text-uppercase mb-3">Shipping War</h1></a>
                    <p class="text-white mb-0">
A shipment refers to the process of transporting goods from one location to another, often from a seller to a buyer. It includes packaging, dispatch, and tracking until the goods reach their destination.      </p>
                </div>
            </div>
            <div class="col-md-6 col-lg-3">
                <h6 class="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
                <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>X Street, Indore, India</p>
                <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>XXX XXX XXXX</p>
                <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                <div class="d-flex pt-2">
                    <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                    <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div class="col-lg-5 col-md-12">
                <div class="row gy-5 g-4">
                    <div class="col-md-6">
                    </div>
                    <div class="col-md-6">
                        <h6 class="section-title text-start text-primary text-uppercase mb-4">Services</h6>
                        <a class="btn btn-link" href="">Transportation</a>
                        <a class="btn btn-link" href="">Global Auction</a>
                        <a class="btn btn-link" href="">Cost Management</a>
                        <a class="btn btn-link" href="">Time Saving</a>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
    <div class="container">
        <div class="copyright">
            <div class="row">
                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0 D">





              <div class=" ">
                <div class="bg-primary rounded p-2">
                    <a href="index.html"><h1 class="text-white text-uppercase mb-3">Shipping War</h1></a>
                    <p class="text-white mb-0">
A shipment refers to the process of transporting goods from one location to another, often from a seller to a buyer. It includes packaging, dispatch, and tracking until the goods reach their destination.      </p>
                </div>
            </div>


                <div class="col-md-6 MR">
                <h6 class="section-title text-start text-primary text-uppercase mb-4">Contact</h6>
                <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>X Street, Indore, India</p>
                <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>XXX XXX XXXX</p>
                <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                <div class="d-flex pt-2">
                    <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                    <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>



                


                    {/* &copy; <a class="border-bottom" href="#">Shipping War</a>, All Right Reserved.  */}
      
      {/*This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
      {/* Designed By <a class="border-bottom" href="">Shipping War</a> */}
                </div>
                <div class="col-md-6 text-center text-md-end">
                    <div class="footer-menu">
                        <a href="" >home</a>
                        <a href="">Cookies</a>
                        <a href="">Help</a>
                        <a href="">FQAs</a>
                    </div>


            



                </div>
            </div>
        </div>
    </div>
    <img class="w-100" src="public/assets/img/footer-img.png" width=" " height="200px " alt="Image" />
</div>
{/* Footer End */}
        
        </>)
    }
    },1);
  },[]);

  return (
    <>
{ FooterContent }
    </>
  )
}

export default Footer;
  