import "./scroll-x.styles.scss";

const ProductsScroll = (props) => {
  const {slide1, name1, slide2, name2, slide3, name3} = props;
  return (
    <div className="products__container">
      <div className="products__container--card">
        <div className="products__container--card-img">
          <img src={slide1} alt="vitalínea griego" />
        </div>
        <span>{name1}</span>
      </div>
      <div className="products__container--card">
        <div className="products__container--card-img">
          <img src={slide2} alt="vitalínea sin azucar" />
        </div>
        <span>{name2}</span>
      </div>
      <div className="products__container--card">
        <div className="products__container--card-img">
          <img src={slide3} alt="vitalínea bebible" />
        </div>
        <span>{name3}</span>
      </div>
    </div>
  );
};

export default ProductsScroll;
