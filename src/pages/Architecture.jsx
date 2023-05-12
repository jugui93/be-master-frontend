import React from 'react';
import Card from '../components/UIElements/Card';
import { ReactComponent as DiagramFiles} from '../diagrams/estructura-archivos-carpetas.svg';
import { ReactComponent as DiagramArc} from '../diagrams/arquitectura-de-aplicacion.svg';

const Architecture = () => {
  return (
    <>
      <div className="center">
        <Card className="wide">
          <h2>Ejercicio 5: Arquitectura del backend</h2>
          <h3>Tecnologías</h3>
          <p>
            Para el backend de una aplicación de comercio electrónico,
            utilizaría una combinación de tecnologías para lograr un alto
            rendimiento, escalabilidad y seguridad. A continuación se detallan
            algunas de las tecnologías y herramientas que utilizaría y por qué
            las elegiría:
          </p>
          <ul>
            <li>
              Node.js: Es una plataforma de tiempo de ejecución de JavaScript
              que permite ejecutar código JavaScript en el lado del servidor.
              Utilizaría Node.js como la base de mi backend debido a su
              capacidad para manejar grandes cantidades de solicitudes
              simultáneas de manera eficiente. También es altamente escalable,
              lo que significa que puede agregar más recursos de hardware para
              manejar cargas de trabajo adicionales sin disminuir la velocidad o
              el rendimiento.
            </li>
            <li>
              Express.js: Es un marco web minimalista para Node.js que permite
              crear aplicaciones web y APIs de manera rápida y sencilla.
              Utilizaría Express.js para crear una capa de abstracción entre las
              solicitudes entrantes y las respuestas del servidor, así como para
              manejar las rutas y controladores de la aplicación.
            </li>
            <li>
              MongoDB: Es una base de datos NoSQL que utiliza documentos JSON
              para almacenar datos. Utilizaría MongoDB como la base de datos
              para mi aplicación de comercio electrónico debido a su
              flexibilidad y escalabilidad. También es compatible con una
              variedad de aplicaciones web modernas y se integra bien con
              Node.js a través del controlador oficial de MongoDB para Node.js.
            </li>
            <li>
              JWT: Es una tecnología de autenticación y autorización basada en
              tokens. Utilizaría JWT para proporcionar una capa adicional de
              seguridad a mi aplicación de comercio electrónico. Los tokens JWT
              pueden ser firmados y cifrados para garantizar que solo el
              servidor pueda leer y verificar los datos de autorización.
            </li>
            <li>
              Stripe: Es una plataforma de pago en línea que permite a las
              empresas procesar pagos con tarjeta de crédito y débito.
              Utilizaría Stripe para manejar las transacciones de pago en mi
              aplicación de comercio electrónico, ya que es una solución
              confiable y segura.
            </li>
          </ul>
          <h3>Estructura de carpetas y archivos</h3>
          <p>
            En cuanto a la organización de archivos, utilizaría una estructura
            de archivos modular y organizada para facilitar el mantenimiento y
            la escalabilidad de la aplicación. Separaría los controladores,
            modelos, servicios y rutas en diferentes carpetas. Cada uno de estos
            servicios y controladores debe tener las funciones necesarias para
            realizar las operaciones CRUD (crear, leer, actualizar y eliminar)
            correspondientes a cada entidad de la aplicación. Además, deberían
            implementar la lógica de negocio necesaria para validar y procesar
            los datos enviados por el cliente, y responder adecuadamente con los
            datos requeridos.
            <br />
            <a href="#folders">Ver estrutura de carpetas y archivos</a>
          </p>
          <h3>Patrones de diseño</h3>
          <p>
            La utilización de patrones de diseño en la estructuración de una
            aplicación es esencial para lograr una arquitectura modular,
            escalable y fácil de mantener. A continuación, se describen algunos
            patrones de diseño que podrían ser utilizados en la estructura
            propuesta:
          </p>
          <ul>
            <li>
              Patrón de diseño MVC (Modelo-Vista-Controlador): Este patrón se
              utiliza para separar la lógica de negocio de la lógica de
              presentación. La idea es que el modelo representa los datos y las
              reglas de negocio, la vista se encarga de mostrar los datos al
              usuario y el controlador actúa como intermediario, manejando las
              solicitudes del usuario y coordinando la interacción entre la
              vista y el modelo. Este patrón se utiliza comúnmente en los
              controladores de la API y en los servicios.
            </li>{" "}
            <li>
              Patrón de diseño Repositorio: Este patrón se utiliza para abstraer
              la capa de acceso a datos y permitir un acceso más sencillo a la
              base de datos. El repositorio actúa como una interfaz para acceder
              a los datos y encapsula la lógica de acceso a datos complejos,
              como las consultas JOIN. Este patrón se utiliza comúnmente en la
              capa de acceso a datos.
            </li>{" "}
            <li>
              Patrón de diseño Singleton: Este patrón se utiliza para garantizar
              que una clase tenga solo una instancia y proporciona un punto de
              acceso global a esa instancia. En una aplicación basada en
              Node.js, este patrón se utiliza comúnmente para instanciar un
              objeto de conexión a la base de datos que se utiliza en toda la
              aplicación.
            </li>
            <li>
              Patrón de diseño Middleware: Este patrón se utiliza para
              proporcionar un mecanismo flexible y modular para agregar
              funcionalidades a una aplicación. Los middleware se utilizan
              comúnmente en el enrutador para manejar la lógica de middleware,
              como la autenticación, la autorización y el manejo de errores.
            </li>
          </ul>
          <h3>Arquitectura de la aplicación</h3>
          <p>
            En la arquitectura propuesta, el servidor HTTP es la capa superior,
            que maneja las solicitudes HTTP entrantes y las enruta al
            Router/Middleware. El Router/Middleware maneja la lógica de
            enrutamiento y middleware, y envía las solicitudes a los
            controladores de la API correspondientes. Los controladores de la
            API manipulan las solicitudes y las respuestas, y llaman a los
            servicios correspondientes para realizar operaciones de negocio. Los
            servicios realizan operaciones de negocio complejas, encapsulando
            las operaciones de acceso a datos y llamando a la capa de acceso a
            datos correspondiente para realizar operaciones en la base de datos.
            La capa de acceso a datos es responsable de manipular la capa de
            almacenamiento de datos, ya sea una base de datos relacional o no
            relacional, y devolver los resultados de las operaciones al servicio
            correspondiente. La base de datos en sí es la capa inferior,
            responsable del almacenamiento y recuperación de datos.
            <br />
            <a href="#architecture">Ver estrutura de aplicación</a>
          </p>
        </Card>
      </div>
      <h3 className="center" id='folders'>Diagrama de carpetas y archivos</h3>
      <div className="center">
        <DiagramFiles />
      </div>
      <div className="center" id='architecture'>
        <DiagramArc />
      </div>
    </>
  );
}

export default Architecture