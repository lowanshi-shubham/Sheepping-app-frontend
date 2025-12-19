import axios from 'axios';
import { useState, useEffect } from 'react';
import { __bidapiurl, __shipmentapiurl ,__subcategoryapiurl} from '../../API_URL';
import { useParams, useNavigate } from 'react-router-dom';

function Bidproduct() {
  const params = useParams();
  const navigate = useNavigate();

  const [pDetails, setProductDetails] = useState({});
  const [cPrice, setCurrentPrice] = useState(0);
  const [BidPrice, setBidPrice] = useState("");
  const [output, setOutput] = useState("");
    const [ scList , setSubCatList ] = useState([]);    


    // console.log(scList[0].catnm);

  const fetchData = () => {
      axios.get(__subcategoryapiurl+"fetch",{
        params :  {"catnm":params.catnm} 
    }).then((response)=>{
        setSubCatList(response.data);
        console.log(response.data);
    }).catch((error)=>{
        console.log(error);        
    }); 


    axios.get(__shipmentapiurl + "fetch", {
      params: { _id: params._id }
    }).then((response) => {
      const product = response.data[0];
      setProductDetails(product);
      setCurrentPrice(product.baseprice); 

      axios.get(__bidapiurl + "fetchById/" + params._id)
        .then((res) => {
          const highestBid = res.data?.bidprice;
          if (highestBid) {
            setCurrentPrice(highestBid);
          }
        })
        .catch((error) => {
          console.error("Error fetching bid:", error);
        });

    }).catch((error) => {
      console.error("Error fetching product:", error);
    });
  };

  useEffect(() => {
    fetchData();
  }, [params._id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!BidPrice || isNaN(BidPrice)) {
      setOutput(" Please enter a valid number.");
      return;
    }

    if (Number(BidPrice) > (cPrice || 0)) {
      const bidDetails = {
        p_id: params._id,
        u_id: localStorage.getItem("email"),
        bidprice: parseInt(BidPrice)
      };

      axios.post(__bidapiurl + "save", bidDetails)
        .then(() => {
          setOutput(" Bid placed successfully!");
          setBidPrice("");
          fetchData(); 

          
        })
        .catch(() => {
          setOutput(" Failed to place bid. Try again.");
        });
    } else {
      setOutput(" Your bid must be higher than the current price.");
    }
  };

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-12">
              <h1 className="mb-4">Bid Product Here!!!</h1>
              <p style={{ color: "blue" }}>{output}</p>

              <table className="table">
                <tbody>
                  <tr>
                    <td><strong>Product ID:</strong></td>
                    <td>{pDetails._id}</td>
                  </tr>
                  <tr>
                    <td><strong>Base Price:</strong></td>
                    <td>₹{pDetails.baseprice}</td>
                  </tr>
                  <tr>
                    <td><strong>Auction Current Price:</strong></td>
                    <td>₹{cPrice}</td>
                  </tr>
                  <tr>
                    <td><strong>Enter Your Bid Price:</strong></td>
                    <td>
                      <form onSubmit={handleSubmit}>
                        <input
                          type="number"
                          className="form-control"
                          value={BidPrice}
                          onChange={(e) => setBidPrice(e.target.value)}
                          placeholder="Enter your bid amount"
                          required
                        />
                        <br />
                        <button type="submit" className="btn btn-danger">
                          Bid Product
                        </button>
                      </form>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bidproduct;
