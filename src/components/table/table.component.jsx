import "./table.styles.scss";

const Table = () => {
  return (
    <div className="ingredients__table">
      <table>
        <thead></thead>
        <tbody>
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
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default Table;
