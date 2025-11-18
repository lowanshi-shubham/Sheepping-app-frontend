import axios from "axios";
import { useState, useEffect } from "react";
import { __shipmentapiurl, __bidapiurl } from "../../API_URL";
import { Link, useParams } from "react-router-dom";
import "./show.css";

function Show() {
  const params = useParams();
  const [pDetails, setProductDetails] = useState([]);


  useEffect(() => {
    


    axios
      .get(__shipmentapiurl + "fetch", {
        params: { subcatnm: params.subcatnm },
      })
      .then(async (response) => {
        const products = response.data;

        // For each product, fetch its highest bid
        const productsWithBid = await Promise.all(
          products.map(async (product) => {
            try {
              const res = await axios.get(
                __bidapiurl + "fetchById/" + product._id
              );
              return {
                ...product,
                highestBid: res.data?.bidprice || product.baseprice, // ✅ fallback to baseprice if no bid
              };
            } catch {
              return {
                ...product,
                highestBid: product.baseprice,
              };
            }
          })
        );

        // Add time difference
        const final = productsWithBid.map((product) => {
          const initialtime = new Date(product.info);
          const timedifference =
            (new Date() - initialtime) / (1000 * 60 * 60); // in hours
          return {
            ...product,
            timedifference,
          };
        });

        setProductDetails(final);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.subcatnm]);

  return (
    <div className="container-xxl py-5">
     
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-12">
            <h1 className="mb-4">
              Product List <span className="text-primary text-uppercase">&gt;&gt;</span>
            </h1>

            <div id="main">
              <table border={0} className="text-center w-100">
                <tbody>
                  {pDetails.map((row, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={`/assets/uploads/shipmenticons/${row.piconnm}`}
                          alt="product"
                          height={250}
                          width={300}
                        />
                      </td>
                      <td className="text-start p-4">
                        <p><b>Title:</b> {row.title}</p>
                       <p>
                        <b>Description:</b>{" "}
                        <span
                          style={{ color: "blue", textDecoration: "underline", cursor: "pointer" }}
                          onClick={() => window.open(`/assets/uploads/shipmentDescription/${row.description}`, '_blank')}
                          rel="noopener noreferrer"
                        >
                          View Description
                        </span>
                      </p>

                        <p><b>Base Price:</b> ₹{row.baseprice}</p>
                        <p><b>Action Price:</b> ₹{row.highestBid}</p>
                        <p>
                          {row.timedifference > 24 ? (
                            <button
                              style={{
                                width: "100px",
                                backgroundColor: "#fd2828a3",
                                borderRadius: "4px",
                                color: "#fff",
                                border: "none"
                              }}
                            >
                              Bid Closed
                            </button>
                          ) : (
                            <Link to={`/bidp/${row._id}`}>
                              <button className="b">Bid Running</button>
                            </Link>
                          )}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Show;
