/* import headerImage from "../../assets/products/img-bote-fresa.png"; */
import Table from "../../components/table/table.component";
import "./information.styles.scss";

const Information = () => {
  return (
    <section className="information">
      <div className="information__container">
        <div className="information__container--left">
          <h2 className="information__title">Información nutrimental</h2>
          <div className="information__text">
            <p className="information__text--description">Vitalínea® Bebible Guayaba 217gr</p>
            <p className="information__text--description">Valor promedio por porción de 217gr</p>
            <p className="information__text--description">Porciones por envase: 1</p>
          </div>
          <div className="information__ingredients">
            <span>Ingredientes:</span>
            <p>
              Leche descremada pasteurizada y/o reconstituida pasteurizada de vaca. 3.5% preparado de fruta guayaba (acesulfame K y
              sucralosa (27.2mg/100g)), crema, almidón modificado, maltodextrina y cultivos lácticos.
            </p>
          </div>
        </div>
        <div className="information__container--right">
          <Table />
        </div>
      </div>
    </section>
  );
};

export default Information;
