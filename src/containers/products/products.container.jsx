import griego from "../../assets/products/img-vitalinea-griego.png";
import bebible from "../../assets/products/img-vitalinea-bebible.png";
import sinAzucar from "../../assets/products/img-vitalinea-sin-azucar.png";
import "./products.styles.scss";

const Products = () => {
  return (
    <section id="products" className="products">
      <h2 className="products__title">La familia vitalínea</h2>
      <div className="products__container">
        <div className="products__container--card">
          <div className="products__container--card-img">
            <img src={griego} alt="vitalínea griego" />
          </div>
          <span>Vitalínea Griego</span>
        </div>
        <div className="products__container--card">
          <div className="products__container--card-img">
            <img src={sinAzucar} alt="vitalínea sin azucar" />
          </div>
          <span>Vitalínea sin Azúcar</span>
        </div>
        <div className="products__container--card">
          <div className="products__container--card-img">
            <img src={bebible} alt="vitalínea bebible" />
          </div>
          <span>Vitalínea Bebible</span>
        </div>
      </div>
    </section>
  );
};

export default Products;
