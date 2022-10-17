import strawberry4 from "../../assets/strawberry/img-fresas-4.png";
import strawberry5 from "../../assets/strawberry/img-fresas-5.png";
import strawberry6 from "../../assets/strawberry/img-fresas-6.png";
import strawberry7 from "../../assets/strawberry/img-fresas-7.png";
import strawberry8 from "../../assets/strawberry/img-fresas-8.png";
import strawberry9 from "../../assets/strawberry/img-fresas-9.png";
import Table from "../../components/table/table.component";
import "./information.styles.scss";

const Information = () => {
  return (
    <section className="information">
      <div className="information__strawberrys">
        <div className="information__strawberrys--four">
          <img src={strawberry4} alt="fresa" />
        </div>
        <div className="information__strawberrys--five">
          <img src={strawberry5} alt="fresa" />
        </div>
        <div className="information__strawberrys--six">
          <img src={strawberry6} alt="fresa" />
        </div>
        <div className="information__strawberrys--seven">
          <img src={strawberry7} alt="fresa" />
        </div>
        <div className="information__strawberrys--eight">
          <img src={strawberry8} alt="fresa" />
        </div>
        <div className="information__strawberrys--nine">
          <img src={strawberry9} alt="fresa" />
        </div>
      </div>
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
