import { ReactComponent as DiagramDb} from '../diagrams/modelo-base-de-datos.svg'
import Card from '../components/UIElements/Card';

const Database = () => {
    
  return (
    <>
      <div className="center">
        <Card className="wide">
          <h2>Ejercicio 4: Modelado de bases de datos</h2>
          <p>
            Un diagrama entidad relación (DER o ERD por sus siglas en inglés) es
            una herramienta gráfica utilizada en el modelado de datos para
            representar las entidades relevantes para un sistema, las relaciones
            entre ellas, y los atributos que definen a cada entidad. El diagrama
            ER es utilizado para mostrar la estructura lógica de la base de
            datos y se compone de tres elementos principales: entidades,
            relaciones y atributos.
          </p>
          <p>
            A continuación se muestra el diagrama entidad relación para un
            sistema de gestión de videos, en este se muestran las entidades que
            conforman el modelo, los atributos y las relaciones entre ellas.{" "}
          </p>
        </Card>
      </div>
      <h3 className="center">Diagrama entidad relacion</h3>
      <div className="center">
        <DiagramDb />
      </div>
    </>
  );
}

export default Database