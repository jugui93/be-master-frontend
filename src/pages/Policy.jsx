import React from 'react';
import Card from '../components/UIElements/Card';


const Policy = () => {
  return (
    <div className="center">
      <Card className="wide">
        <h2>Ejercicio 6: Nomenclatura</h2>
        <p>
          Un documento de políticas de nomenclatura es un conjunto de
          directrices y reglas que se utilizan para nombrar variables,
          funciones, clases, objetos, archivos, carpetas, bases de datos,
          repositorios de código, endpoints de API, entre otros elementos
          utilizados en el desarrollo de software. El objetivo de un documento
          de políticas de nomenclatura es garantizar que todo el código
          producido por un equipo de desarrollo cumpla con un conjunto coherente
          de convenciones de nomenclatura, lo que facilita la lectura y el
          mantenimiento del código a largo plazo.
        </p>
        <h3>Políticas de nomenclatura</h3>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <a href="#database">Bases de datos</a>
          </li>
          <li>
            <a href="#variables">Variables</a>
          </li>
          <li>
            <a href="#functions">Funciones</a>
          </li>
          <li>
            <a href="#classes">Clases</a>
          </li>
          <li>
            <a href="#objects">Objetos</a>
          </li>
          <li>
            <a href="#arrays">Arreglos y listas</a>
          </li>
          <li>
            <a href="#files">Archivos y carpetas</a>
          </li>
          <li><a href="#git">Git y repositorio Github </a></li>
        </ul>
        <h4 id="database">Bases de datos</h4>
        <ul>
          <li>
            Los nombres de las bases de datos deben ser descriptivos y
            representar claramente su función. Deben ser en minúsculas y
            utilizar guiones bajos para separar las palabras. Ejemplo:
            "registros_medicos_db", "tienda_db"
          </li>
          <li>
            Los nombres de las tablas deben ser en minúsculas y utilizar guiones
            bajos para separar las palabras. Ejemplo: "usuarios", "productos",
            "ordenes".
          </li>
          <li>
            Los nombres de las columnas deben ser en minúsculas y utilizar
            guiones bajos para separar las palabras. Ejemplo: "nombre_usuario",
            "precio_producto", "fecha_orden".
          </li>
        </ul>
        <h4 id="variables">Variables</h4>
        <ul>
          <li>
            Usa nombres de variables claros y descriptivos que reflejen su
            propósito y contenido.
          </li>
          <li>
            Usa notación camelCase para las variables compuestas por varias
            palabras. Ejemplo: "numeroDeOrden".
          </li>
          <li>Usa minúsculas para las variables simples. Ejemplo: subtotal.</li>
          <li>Evita nombres genéricos o abreviaturas difíciles de entender.</li>
          <li>
            Si una variable almacena un valor booleano, el nombre debe empezar
            por "is", "has" o "should". Ejemplo: "isActive", "hasPermission",
            "shouldDisplay".
          </li>
        </ul>
        <h4 id="functions">Funciones</h4>
        <ul>
          <li>
            Usa nombres de funciones claros y descriptivos que reflejen su
            propósito y contenido.
          </li>
          <li>
            Usa notación camelCase para las funciones compuestas por varias
            palabras. Ejemplo: "calcularSubtotal","agregarProductoCarrito",
            "actualizarUsuario"
          </li>
          <li>Usa verbos para indicar acción. Ejemplo: "registrarUsuario".</li>
          <li>Evita nombres genéricos o abreviaturas difíciles de entender.</li>
        </ul>
        <h4 id='classes'>Clases</h4>
        <ul>
          <li>
            Usa nombres de clases claros y descriptivos que reflejen su
            propósito y contenido.
          </li>
          <li>
            Usa notación PascalCase para las clases compuestas por varias
            palabras. Ejemplo: "PedidoDeCompra".
          </li>
          <li>
            Usa sustantivos para indicar entidad. Ejemplo: "Usuario",
            "Producto".
          </li>
          <li>Evita nombres genéricos o abreviaturas difíciles de entender.</li>
        </ul>
        <h4 id='objects'>Objectos</h4>
        <ul>
          <li>
            Usa nombres de objetos claros y descriptivos que reflejen su
            propósito y contenido.
          </li>
          <li>
            Usa notación camelCase para los objetos compuestos por varias
            palabras. Ejemplo: "usuarioActivo".
          </li>
          <li>Usa minúsculas para los objetos simples. Ejemplo: "producto".</li>
          <li>Evita nombres genéricos o abreviaturas difíciles de entender.</li>
        </ul>
        <h4 id='arrays'>Arreglos y listas</h4>
        <ul>
          <li>
            Usa nombres de arrays claros y descriptivos que reflejen su
            propósito y contenido.
          </li>
          <li>
            Usa notación camelCase para los arrays compuestos por varias
            palabras. Ejemplo: "listaDeProductos".
          </li>
          <li>Usa plural para indicar una colección. Ejemplo: "productos".</li>
          <li>
            Si el array almacena objetos de una clase en particular, el nombre
            debe ser el mismo que la clase en plural. Ejemplo: "usuarios" para
            un array de objetos de la clase Usuario.
          </li>
          <li>Evita nombres genéricos o abreviaturas difíciles de entender.</li>
        </ul>
        <h4 id='files'>Archivos y carpetas</h4>
        <ul>
          <li>
            Usa nombres de archivos y carpetas claros y descriptivos que
            reflejen su propósito y contenido
          </li>
          <li>
            Los nombres de los archivos deben ser en minúsculas y utilizar
            guiones medios para separar las palabras. Ejemplo: "index.js",
            "producto-controller.js", "usuario-model.js".
          </li>
          <li>
            El nombre debe representar claramente la función o entidad que
            representa el archivo.
          </li>
        </ul>
        <h4 id='git'>Git y repositorio Github</h4>
        <ul><li>Los nombres de las ramas deben ser descriptivos y representar claramente su función. Ejemplo: "feature/agregar-productos", "hotfix/corregir-errores".</li>
        <li>Los nombres de los commits deben ser descriptivos y representar claramente el cambio realizado. Evitar nombres genéricos como "update", "fix", etc.</li>
        <li>Usa el formato {"<prefijo> <tipo>: <nombre>"} para los mensajes de commit (ejemplo: "feat: agregar registro de usuarios").</li>
        <li>Utilizar minúsculas en todo el nombre del repositorio. Utilizar guiones medios para separar palabras</li>
        <li>Utilizar nombres que sean cortos y descriptivos del contenido del repositorio.</li>
        <li>Incluir el tipo de proyecto en el nombre del repositorio (por ejemplo, "ecommerce-frontend" o "ecommerce-backend").</li></ul>
      </Card>
    </div>
  );
}

export default Policy