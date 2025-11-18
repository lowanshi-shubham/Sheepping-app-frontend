import './About.css'

function About() {

  return (
    <>
    {/* About Start */}
<div class="container-xxl py-5">
    <div class="container">
        <div class="row g-5 align-items-center">
            <div class="col-lg-12">
                <h6 class="section-title text-start text-primary text-uppercase">About Page</h6>
                <h1 class="mb-4">🚚 ABOUT OF <span class="text-primary text-uppercase">Shipping War</span></h1>
                <p class="mb-4" style={{"text-align":"justify"}}>
This shipment management project is designed to streamline the process of handling, tracking, and managing product deliveries. It allows users to add shipment details such as sender, receiver, product information, and shipping status. The system supports real-time updates on the shipment’s progress, ensuring both transparency and efficiency. Admins can view all shipments, filter them based on status (like dispatched, in-transit, delivered), and update their current location or delivery status. It’s built using modern web technologies like React for the frontend and Node.js with MongoDB for the backend, offering a smooth and responsive experience. The project is ideal for small to medium businesses looking to digitize and manage their logistics efficiently.</p>
            </div>
        </div>
    </div>
</div>
{/* About End */}
    </>
  )
}

export default About;
  

