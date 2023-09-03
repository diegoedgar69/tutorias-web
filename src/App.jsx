import Routes from "./routes";
import UsersProvider from "./contex/logins/Provider";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  return (
      <UsersProvider>
          <Routes />
      </UsersProvider>
  );
}

export default App;
