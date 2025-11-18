import './Content.css'
import { Outlet } from 'react-router-dom';

function Content() {

  return (
    <>
    {/* About Start */}
<Outlet />
<div class="container-xxl py-5">
    <div class="container">
        <div class="row g-5 align-items-center">
            <div class="col-lg-12">
                <h6 class="section-title text-start text-primary text-uppercase">Home Page</h6>
                <h1 class="mb-4">Welcome to <span class="text-primary text-uppercase">Shipping War</span></h1>
                <p class="mb-4" style={{"text-align":"justify"}}>Shipment is the process of transporting goods from a seller or supplier to a buyer or end customer. It plays a crucial role in the supply chain and involves several steps, including order processing, packaging, labeling, and dispatch. Shipments can be carried out using various modes of transport such as trucks, trains, ships, or airplanes, depending on the distance and urgency. Each shipment is typically assigned a tracking ID, allowing both the sender and receiver to monitor its journey in real time. Logistics companies handle the coordination and ensure that the shipment reaches its destination safely and on time. Delays in shipment can occur due to weather conditions, customs clearance, or logistical issues. Proper handling and secure packaging are essential to avoid damage during transit. With the rise of e-commerce, the demand for fast and reliable shipment services has grown significantly. Overall, shipment ensures that products are delivered efficiently, maintaining customer satisfaction and supporting business operations.</p>
            </div>
        </div>
    </div>
</div>
{/* About End */}
    </>
  )
}

export default Content;
  
