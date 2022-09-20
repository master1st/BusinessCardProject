import { isFocusable } from "@testing-library/user-event/dist/utils";
import Footer from "./components/footer/footer";
import Login from "./components/Login/login";
function App({authService}) {
  return <Login authService={authService}/>;
}

export default App;
