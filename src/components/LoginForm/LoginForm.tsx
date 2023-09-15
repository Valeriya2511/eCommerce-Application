import InputField from '../UI/InputField/InputField';
import ButtonAutorization from '../UI/ButtonAutorization/ButtonAutorization';
import React, { useContext, useState } from 'react';
import { useAutorization } from '../../hooks/useAutorization/useAutorization';
import { AuthContext } from '../../context/authContext/AuthContext';
import { Navigate } from 'react-router-dom';
import { isLogin } from '../../ecommerceAPI/isLogin';
import { getTokenPSWDflow } from '../../ecommerceAPI/getTokenPSWDflow';
import { getBasketList } from '../../ecommerceAPI/getBasketList';

export default function LoginForm() {
  const [isDisabled, setIsDisabled] = useState(true);
  const { submitHandler, saveToken } = useAutorization();
  const { isAuth, setIsAuth } = useContext(AuthContext);

  if (isAuth) {
    return <Navigate replace to="/main" />;
  }

  return (
    <form
      onSubmit={async event => {
        const userData = await submitHandler(event);
        const tokenData = await getToken();
        //*****tokenPSWD */
        const tokenPSWDdata = await getTokenPSWDflow(userData.email, userData.password);
        const { access_token } = await tokenPSWDdata.json();
        console.log('tokenPSWDdata', access_token);
        localStorage.setItem(`tokenPSWD`, `${access_token}`);
        // const { access_token } = await tokenData.json();
        // console.log(access_token);
        const status = await isLogin(userData, await access_token);
        const user = await status.json();

        if ((await String(status.status)) === '200') {
          alert(`Hello ${user.customer.firstName}, we know you)`);
          setIsAuth(true);
          getBasketList(access_token, user.customer.id);
          //console.log(await String(status));
          //console.log(await user);
        } else {
          setIsAuth(false);
          //console.log(await String(status));
          alert('The user with this username or password was not found. Please check the data.');
        }
      }}
      autoComplete="off"
    >
      <p>
        <InputField type="email" name="email" placeholder="Login email" isDisabled={setIsDisabled} />
      </p>
      <p>
        <InputField type="password" name="password" placeholder="Password" isDisabled={setIsDisabled} />
      </p>
      <p>
        <ButtonAutorization type="submit" children="Login" disabled={isDisabled} />
      </p>
    </form>
  );
}
