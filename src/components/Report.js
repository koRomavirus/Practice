import{ useState, useEffect } from 'react';
import axios from 'axios';
import { resolvePath, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



function Report(props) {
  const [userData, setUserData] = useState(null);;
  const [loginError, setLoginError] = useState(null);

  const navigate = useNavigate();

  
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://mobileserver.atomexp.ru:8090/api/auth/login',
        {
          login: props.login,
          password: props.password
        }
      );
      setUserData(response.data);
      setLoginError(null);
      props.onSuccessfulLogin();
      navigateToMainPage(response.data);
      navigateNews(response.data);
    } catch (error) {
      console.error('Error:', error);
      setUserData(null);
      setLoginError('Ошибка авторизации. Проверьте логин и пароль.');
    }
  };

  const navigateToMainPage = (userData) => {
    const currentPath = window.location.pathname; 
    navigate(currentPath, {
      state: {
        token: userData.token,
        role: userData.user.roles,
      },
    });
  };
  
  const navigateNews = (userData) => {
    navigate('/News', { state: { 
      token: userData.token, 
      role: userData.user.roles,
      } });
  };
  return (
    <div>
      <Button className='mt-4 ms-5 ' onClick={handleLogin} variant="primary">Авторизоваться</Button>{' '}
      <p>{loginError}</p>
    </div>
  );
}
export default Report;
