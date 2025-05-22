import {Routes, Route} from 'react-router-dom';
import Products from '../pages/productList';
import Contact from '../pages/contact';
import Home from '../pages/home';
import SignUp from '../pages/signUp';
import PrivateRoute from './privateRoute';

const RoutingAll=()=>{
    return(
        <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signUp' element={<SignUp/>}/>
            <Route path='/products' element={<PrivateRoute><Products/></PrivateRoute>}/>
            <Route path='/contact' element={<PrivateRoute><Contact/></PrivateRoute>}/>
        </Routes>
        </>
    )
}
export default RoutingAll;