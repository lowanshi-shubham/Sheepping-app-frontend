// import './Addproduct.css';
import axios from 'axios';
import { useState , useEffect } from 'react';
import {__categoryapiurl , __subcategoryapiurl ,__shipmentapiurl} from '../../API_URL';

function Addproduct() {

  const [ cList , setCatList ] = useState([]);
  const [ scList , setSubCatList ] = useState([]);
  const [title, setTitle] = useState();
  const [categorynm, setCategorynm] = useState();
  const [subcategorynm, setSubCategorynm] = useState();
  const [description, setDescription] = useState();
  const [baseprice, setBaseprice] = useState();
  const [file, setFile] = useState();
  const [output, setOutput] = useState();
  useEffect(()=>{
    axios.get(__categoryapiurl+"fetch").then((response)=>{
        setCatList(response.data);
      console.log(response.data);
    }).catch((error)=>{
        console.log(error);        
        });  
  },[]);

  useEffect(()=>{
    if(categorynm)
    {
     axios.get(__subcategoryapiurl+"fetch",{
        params : {"catnm":categorynm}  
     }).then((response)=>{
        setSubCatList(response.data);
     }).catch((error)=>{
        console.log(error);        
     });
    }   
  },[categorynm]);


  const handleProductDescription = (event) => {
    setDescription(event.target.files[0]);
  };

  
  const handleProductIcon = (event) => {
    setFile(event.target.files[0]);
  };

  const handleAddProduct = () => {
    var formData = new FormData();
    console.log(formData)

    formData.append("title", title);
    formData.append("catnm", categorynm);
    formData.append("subcatnm", subcategorynm);
    formData.append("description", description);
    formData.append("baseprice", baseprice);
    formData.append("useremail", localStorage.getItem("email")); 
    formData.append("producticon", file);

    const config = {
      "content-type": "multipart/form-data",
    };

    axios
      .post(__shipmentapiurl+'save', formData, config)
      .then((response) => {
        setOutput("Shipping Product Added Successfully....");
        setTitle("");
        setCategorynm("");
        setSubCategorynm("");
        // setDescription("");
        document.getElementById("Description").value="";
        setBaseprice("");
        document.getElementById("myfile").value = "";
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <>
    {/* About Start */}
<div class="container-xxl py-5">
    <div class="container">
        <div class="row g-5 align-items-center">
<div class="col-lg-12">
<h1 class="mb-4">Add Shipping <span class="text-primary text-uppercase">Product Here!!!</span></h1>
<font style={{"color":"blue"}}>{output}</font>
<form>
  <div class="form-group">
    <label for="title">Title:</label>
    <input type="text" class="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Add Shipment Title" />
  </div>
  <br/>
  
  <div class="form-group">
    <label for="catnm">Category Name:</label>
    <select class="form-control" value={categorynm}
                onChange={(e) => setCategorynm(e.target.value)} >
        <option>Select Category</option>
        {
         cList.map((row)=>(
            <option>{row.catnm}</option>      
         ))   
        }
    </select>
  </div>
  <br/>

  <div class="form-group">
    <label for="subcatnm">SubCategory Name:</label>
    <select class="form-control"  value={subcategorynm} onChange={(e) => setSubCategorynm(e.target.value)} >
        <option>Select SubCategory</option>
        {
         scList.map((row)=>(
            <option>{row.subcatnm}</option>      
         ))   
        }
    </select>
  </div>
  <br/>

  <div class="form-group">
    <label for="description">Shipment Description:</label>
    <input type="file" class="form-control" id="Description"  onChange={handleProductDescription} ></input>
  </div>
  <br/>

  <div class="form-group">
    <label for="amount">Base Amount For Shipment:</label>
    <input type="text" class="form-control" value={baseprice} onChange={(e)=>setBaseprice(e.target.value)} placeholder="Add Shipment Amount" />
  </div>
  <br/>


  <div class="form-group">
    <label for="file">Shipment Photos:</label>
    <input type="file" id="myfile" onChange={handleProductIcon} class="form-control" multiple />
  </div>
  <br/>


  <button  type="button" onClick={handleAddProduct} class="btn btn-danger">Add Shipment</button>
</form>
</div>
        </div>
    </div>
</div>
{/* About End */}
    </>
  )
}

export default Addproduct;
  
