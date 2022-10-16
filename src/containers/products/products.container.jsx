import griego from "../../assets/products/img-vitalinea-griego.png";
import bebible from "../../assets/products/img-vitalinea-bebible.png";
import sinAzucar from "../../assets/products/img-vitalinea-sin-azucar.png";
import ProductsScroll from "../../components/scroll-x/scroll-x.component";
import "./products.styles.scss";

//Mandarle la lista y mapearlos
const Products = () => {
  return (
    <section id="products" className="products">
      <h2 className="products__title">La familia vitalínea</h2>
      <ProductsScroll 
        slide1={griego}
        name1="Vitalinea griego"
        slide2={sinAzucar}
        name2="Vitalinea sin azúcar"
        slide3={bebible}
        name3="Vitalinea bebible"
      />
    </section>
  );
};

export default Products;
