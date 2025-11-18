import './App.css';
import { Route , Routes } from 'react-router-dom';
import Header from './components/HeaderComponent/Header';
import Banner from './components/BannerComponent/Banner';
import Content from './components/ContentComponent/Content';
import About from './components/AboutComponent/About';
import Contact from './components/ContactComponent/Contact';
import Service from './components/ServiceComponent/Service';
import Register from './components/RegisterComponent/Register';
import Login from './components/LoginComponent/Login';
import Logout from './components/LogoutComponent/Logout';
import Footer from './components/FooterComponent/Footer';
import Admin from './components/AdminComponent/Admin';
import Manageusers from './components/ManageusersComponent/Manageusers';
import Userhome from './components/UserComponent/Userhome';
import EPAdmin from './components/EPAdminComponent/EPAdmin';
import CPAdmin from './components/CPAdminComponent/CPAdmin';
import AddCategory from './components/AddCategoryComponent/AddCategory';
import AddSubCategory from './components/AddSubCategoryComponent/AddSubCategory';
import Search from './components/SearchComponent/Search';
import Verifyuser from './components/VerifyuserComponent/Verifyuser';
import Searchsc from './components/SearchSComponent/Searchsc';
// import Searchsc from './components/searchSComponent/searchsc';
import Addproduct from './components/Addproduct/Addproduct';
// import Searchsc from './components/SearchSComponent/Searchsc';
import Show from './components/showProduct/Showproduct'
import Bidproduct from './components/BidproductComponent/Bidproduct'
import ProtectedRoute from './components/protectRouting/protect'
// import Demo from './components/ContactComponent/Demo'
function App() {

  return (
    <>

<div class="container-xxl bg-white p-0">

<Header />

{/* <Banner /> */}

    <Routes>
        <Route path="/" element={<Content />} >
        
        <Route path="/" element={<Banner />} ></Route>
        </Route>
        <Route path="/about" element={<About />} ></Route>
        {/* <Route path="/demo" element={<Demo  />} ></Route> */}
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/service" element={<Service />} ></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/verify/:vemail" element={<Verifyuser />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/logout" element={<Logout />} ></Route>
        <Route path="/admin"  element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <Admin />
          </ProtectedRoute>}></Route>
        <Route path="/epadmin" element={<EPAdmin />} ></Route>
        <Route path="/cpadmin" element={<CPAdmin />} ></Route>
        <Route path="/manageusers" element={<Manageusers />} ></Route>
        <Route path="/addcategory" element={<AddCategory />} ></Route>
        <Route path="/addsubcategory" element={<AddSubCategory />} ></Route>
        <Route path="/user"    element={
          <ProtectedRoute allowedRoles={["user"]}>
            <Userhome />
          </ProtectedRoute>
        } ></Route>
        <Route path="/addproduct" element={<Addproduct />} ></Route>
        <Route path="/search" element={<Search />} ></Route>
        <Route path="searchsc/:catnm" element={< Searchsc /> }> </Route>
        <Route path="/show/:subcatnm" element={<Show />} ></Route>
        <Route path='/bidp/:_id' element={<Bidproduct />}></Route>
    </Routes>  

<Footer />

{/* Back to Top */}
<a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
</div>

    </>
  )
}

export default App;
