/* import headerImage from "../../assets/products/img-bote-fresa.png"; */
import "./information.styles.scss";

const Information = () => {
  return (
    <section className="information">
      <div className="information__text">
        <h2 className="information__text--title">Información nutrimental</h2>
        <p className="information__text--description">Vitalínea® Bebible Guayaba 217gr</p>
        <p className="information__text--description">Valor promedio por porción de 217gr</p>
        <p className="information__text--description">Porciones por envase: 1</p>
      </div>

      <div className="information__ingredients">
        <span>Ingredientes:</span>
        <p>
          Leche descremada pasteurizada y/o reconstituida pasteurizada de vaca. 3.5% preparado de fruta guayaba (acesulfame K y sucralosa
          (27.2mg/100g)), crema, almidón modificado, maltodextrina y cultivos lácticos.
        </p>
        <div className="information__ingredients--table">
          <table>
            <tr>
              <td>Contenido energético kJ/kcal</td>
              <td>413,2/97,9</td>
            </tr>
            <tr>
              <td>Proteínas (g) </td>
              <td>5.3</td>
            </tr>
            <tr>
              <td>Grasas (lípidos) (g)</td>
              <td>2.1</td>
            </tr>
            <tr>
              <td>Grasas saturadas (g)</td>
              <td>1.4</td>
            </tr>
            <tr>
              <td>Carbohidratos (Hidratos de carbono) (g)</td>
              <td>12.4</td>
            </tr>
            <tr>
              <td>Azúcares (g)</td>
              <td>7.7</td>
            </tr>
            <tr>
              <td>Azúcares añadidos (g) </td>
              <td>0.1</td>
            </tr>
            <tr>
              <td>Fibra dietética (g) </td>
              <td>0.0</td>
            </tr>
            <tr>
              <td>Sodio (mg) </td>
              <td>92.7</td>
            </tr>
            <tr>
              <td>Calcio (mg) </td>
              <td>199.6</td>
            </tr>
            <tr>
              <td>%VNR* </td>
              <td>22</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Information;
