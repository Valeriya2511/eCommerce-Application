import env from 'react-dotenv';
import axios from 'axios';


export const getToken = async () => {
  const data = await fetch(`${env.AUTH_URL}/oauth/token?grant_type=client_credentials&scope=${env.SCOPES}`, {
    method: 'POST',
    headers: {
      Authorization: `${env.AUTORIZATION}`,
    },
  });
  const token = await data.json();

  //console.log(`${token_type} ${access_token}`);
  return console.log('Полученный от ecommerceTools обьект токена: ', token);
};
