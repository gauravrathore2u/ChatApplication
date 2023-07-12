import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

//component import
import Messenger from './components/Messenger';

function App() {

  const clientId = '754271877242-6lvhscpdp6b6sbgmdad77n1hgif1lrb4.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
