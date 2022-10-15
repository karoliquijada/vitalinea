import Menu from "./components/menu/menu.component";
import Header from "./components/header/header.component";
import Information from "./components/information/information.component";
import Footer from "./components/footer/footer.component";
import "./styles/global.scss"

const App = () => {
  return (
    <div className="App">
      <Menu />
      <Header/>
      <Information/>
      <Footer/>
    </div>
  );
};

export default App;
