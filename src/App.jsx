import Menu from "./components/menu/menu.component";
import Header from "./components/header/header.component";
import Information from "./components/information/information.component";
import "./styles/global.scss"

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Header/>
      <Information/>
    </div>
  );
};

export default App;
