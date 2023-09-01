import env from 'react-dotenv';
import { getToken } from './ecommerceAPI/getToken';
import { RouterApp } from './components/router/RouterApp';
import { AuthContext } from './context/authContext/AuthContext';
import Header from './components/layer/header/Header';
import Footer from './components/layer/footer/Footer'
import { useState } from 'react';
// getToken();
function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <Header />
      <RouterApp />
      <Footer/>
    </AuthContext.Provider>
  );
}

export default App;
