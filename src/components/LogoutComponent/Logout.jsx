import { Navigate } from 'react-router-dom';
import Header from '../HeaderComponent/Header';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';


function Logout()
{
    const { setAuth } = useContext(AuthContext);

  const confirmation=  confirm("are you sure to logout")
  if(confirmation){
      setAuth({ token: null, role: null, email: null });
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      localStorage.removeItem('email');
      localStorage.removeItem('name');
      localStorage.removeItem('mobile');
      localStorage.removeItem('address');
      localStorage.removeItem('city');
      localStorage.removeItem('gender');	  
      localStorage.removeItem('info');
      return <Navigate to='/login' />
    }else{
       return < Navigate to='/user' />  
    }
}

export default Logout