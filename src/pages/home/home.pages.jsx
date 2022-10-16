import Menu from "../../components/menu/menu.component"
import Header from "../../containers/header/header.container"
import Information from "../../containers/information/information.container"
import Products from "../../containers/products/products.container"
import Footer from "../../containers/footer/footer.container"
import "../../styles/global.scss"

const Home = () => {
  return (
    <div>
      <Menu/>
      <Header/>
      <Information/>
      <Products/>
      <Footer/>
    </div>
  );
};

export default Home;
