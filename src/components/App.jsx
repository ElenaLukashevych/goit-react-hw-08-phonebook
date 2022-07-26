import { Route, Routes } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { ToastContainer } from 'react-toastify';

import Container from "./Container";
import Header from "./Header";
import PrivateRoute from 'routes/PrivateRoutes';
import PublicRoutes from 'routes/PublicRoutes';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const Login = lazy(() => import('pages/Login'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

function App() {
   const dispatch = useDispatch();
   const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
   
 useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);


   return (
      !isFetchingCurrentUser && (
         <>
              <Header/>
         <Container>
         <Suspense fallback={<div>Loading...</div>}>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/contacts" element={<PrivateRoute><ContactsPage /></PrivateRoute>} />
               <Route path="/register" element={<PublicRoutes redirectTo="/contacts" restricted><Register /></PublicRoutes>} />
               <Route path="/login" element={<PublicRoutes redirectTo="/contacts" restricted><Login /></PublicRoutes>} />
               <Route path='*' element={<NotFoundPage />} />
               </Routes>
               <ToastContainer/>
         </Suspense>
            </Container>
            </>
      )
    )
 
};

export default App;

