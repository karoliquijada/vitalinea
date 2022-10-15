import Menu from "./components/menu/menu.component";
import Header from "./components/header/header.component";
import "./styles/global.scss"

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Header/>
    </div>
  );
};

export default App;
