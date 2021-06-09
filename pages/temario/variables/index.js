import Image from "next/image";
import styles from "../../../styles/modules/ModuleBlock.module.scss";
import ModuleBlock from "../../../modules/Block/ModuleBlock";
import Code from "../../../components/Code/Code";

export default function VariablesJS() {
  return (
    <ModuleBlock
      ComponentToRender={<TemarioVariablesJS />}
      back={{
        title: "Agregando JavaScript en HTML",
        link: "/temario/agregando-javascript-en-html",
      }}
      next={{
        title: "Tipos de datos",
        link: "/temario/tipos-de-datos/",
      }}
    ></ModuleBlock>
  );
}

const initVar = `let data = "Esto es un texto";`;

const undefinedVar = `// Declaramos una variable, pero no le damos ningun valor
let x; 
// Declaramos una variable, pero si la inicializamos
let y = 0;

// Nos devuelve "undefined" no tiene valor
console.log(x);
// Nos devuelve 0, porque se lo hemos asignado
console.log(y);
`;

const varFunctionScope = `var nombre = "Jose";

function ejemploFuncion() {
  // Nos va a dar valor undefined
  console.log(nombre)
  var nombre = "Rubén"
  // Nos va a devolver Rubén
  console.log(nombre)
}

// Ejecutamos el código de la función
ejemploFuncion()
// Llamámos a la variable nombre y ahora tiene el valor Jose
console.log(nombre)`;

const varGlobalScope = `var nombre = "Jose";
console.log(nombre);

function ejemploFuncion() {
  // Nos va a dar valor de José
  console.log(nombre)
  // Asignamos un nuevo valor
  nombre = "Rubén"
  // Nos va a devolver Rubén
  console.log(nombre)
  console.log(window.nombre)
}

// Ejecutamos el código de la función
ejemploFuncion()
// Llamamos a la variable nombre y ahora tiene el valor de Rubén
console.log(nombre)`;

const constExample = `const GRAVITY = 9.8;
console.log(GRAVITY);`;

const varVsLetExample = `/** OPCIÓN CON LET **/
// Nos tiene que dar valor undefined
console.log("Valor anterior" + x);  
for (let x = 0; x < 2; x++) {
  // Valores: 0, 1
  console.log("Valor: " + x);   
}
// Lo llamamos al final y es undefined    
console.log("Al acabar" +  x);  

/** OPCIÓN CON VAR **/
// Nos tiene que dar valor undefined
console.log("Valor anterior" + x);  
for (var x = 0; x < 2; x++) {
  // Valores: 0, 1
  console.log("Valor: " + x);   
}
// Nos devuelve hasta 2 :_D
console.log("Al acabar" +  x);`;

function TemarioVariablesJS() {
  return (
    <div className={styles.container}>
      <article>
        <h2 className={styles.title_block}>Variables</h2>
        <p>
          JavaScript es un lenguaje con tipado débil, no tenemos que asignar los
          tipos a una variable. Otros lenguajes como Java necesitaremos realizar
          esto, y a mucha gente no le gusta JavaScript por este motivo, por
          suerte, gracias a TypeScript podrán darle una oportunidad a
          JavaScript.
        </p>
        <p>
          El uso de las variables es muy fácil, como a la hora de declararlas y
          de utilizarlas, pero siempre debemos de tener en cuenta ciertos
          puntos. Durante esta sección veremos como utilizar variables, que
          tipos de variables hay, como invocarlas, como nombrarlas y el ámbito
          de una variable.
        </p>
        <h3 className={styles.subtitle_block}>¿Qué es una variable?</h3>
        <p>
          Una variable es un espacio en memoria donde guardamos información y se
          lo asociamos a un nombre. Para saber que contiene la variable, siempre
          debemos de llamarlo por el nombre que hemos declarado. A mi siempre me
          ha gustado ver las variables como cajas que guardan cosas, y en esa
          caja, por fuera, se le pone un nombre para poder identificarla y
          acceder a ella.
        </p>
        <p>
          Para que una variable exista, debemos de{" "}
          <strong>inicializar una variable</strong>. Cuando inicializamos una
          variable, le asignamos un nombre y un valor la primera vez. Si
          llamamos a una variable que no ha sido inicializada, JavaScript nos va
          a devolver un valor <strong>undefined</strong>, que significa que su
          valor no se ha definido todavía o que no contiene información alguna.
          A continuación en código vamos a ver como se inicializa una variable.
        </p>
        <Code language="javascript" code={initVar} />
        <p>
          Vamos a ver también a continuación cómo ver un valor{" "}
          <strong>undefined</strong> y verlo por pantalla:
        </p>
        <Code language="javascript" code={undefinedVar} />
        <p>
          Hemos dado nuestros primeros pasos con las variables, hemos podido
          inicializar una variable y ver que si no inicializamos una variable,
          como resultado tenemos el valor <strong>undefined</strong>. Vamos a
          ver los distintos tipos de variables que tiene JavaScript.
        </p>
        <h3 className={styles.subtitle_block}>VAR</h3>
        <p>
          Es la forma antigua de declarar variables, sólo teníamos este tipo de
          variable y podíamos tener muchos errores. A la hora de inicializarla,
          podemos volverle a asignarle un valor nuevo y eso podía ser una barra
          libre si no se tenía un control. También es peculiar porque tiene un
          scope por le general que es <strong>global</strong> (que desde
          cualquier parte del código podemos acceder a ella) y también tiene un
          scope a nivel de <strong>función</strong>. Vamos a ver varios ejemplos
          para poder entender como funciona el scope en var, y así poder
          hacernos una idea de como funciona, aunque <strong>var</strong> no lo
          utilicemos, podemos verlo en código legacy y debemos de entender cómo
          funciona.
        </p>
        <p>
          Este es un ejemplo donde vemos que tenemos un{" "}
          <strong>scope global</strong> y un{" "}
          <strong>scope en la función</strong>, nos va a devolver valores
          distintos, fuera de la función y dentro de la función:
        </p>
        <Code language="javascript" code={varFunctionScope} />
        <p>
          Para ver el scope global de una variable con <strong>var</strong>{" "}
          podemos utilizar el objeto <strong>window</strong>, que es quien
          almacena todas las variables globales. Vamos a ver esto en el
          siguiente código y vamos analizarlo para ver si lo podemos seguir:
        </p>
        <Code language="javascript" code={varGlobalScope} />
        <p>
          El uso de <strong>var</strong>, sólo lo debemos de utilizar si
          queremos realizar proyectos en navegadores antiguos, o estamos
          empezando, o para mantener un código que es antiguo.
        </p>
        <h3 className={styles.subtitle_block}>LET</h3>
        <p>
          <strong>Let</strong>, junto a <strong>const</strong>, se introdujo en
          la versión de ES6 o ES2015. Se realizó este cambio porque en vez de
          tener un scope global o de función, ahora tendremos ambitos globales o
          locales, como otros lenguajes de programación.
        </p>
        <p>Esta diferencia de ámbito podemos verlo si usamos un bucle for:</p>
        <Code language="javascript" code={varVsLetExample} />
        <p>
          Esto está sucediendo porque con <strong>let</strong> la variable es de{" "}
          <strong>ámbito local</strong>, mientras que con <strong>var</strong>,
          tenemos un ámbito global o como se llamaba antes, ámbito a nivel de
          función.
        </p>
        <h3 className={styles.subtitle_block}>CONST</h3>
        <p>
          Como hemos dicho antes, antiguamente <strong>const</strong>, no se
          incorporaba y ha sido algo "realativamente" nuevo en el lenguaje. La
          peculiaridad de <strong>const</strong> es que una vez inicializada la
          variable con un valor, sus valores no se pueden cambiar.
        </p>
        <Code language="javascript" code={constExample} />
        <p>
          Vemos que realmente funciona de forma muy parecida a{" "}
          <strong>let</strong>, pero que en esta ocasión no podemos asignarme un
          valor. Realmente lo que no podemos hacer con <strong>const</strong> es
          volver a declarar un valor, pero realmente podemos mutar objetos o
          arrays con una variable del tipo <strong>const</strong>.
        </p>
        <p>
          Una buena práctica para el uso de constantes, es utilizar su nombre en
          mayúsculas, y si un nombre de variable con espacios (por ejemplo
          firstName) lo usaríamos de la siguiente manera:{" "}
          <strong>FIRST_NAME</strong>. Al ver una variable en mayúsculas, vamos
          a saber rápidamente que es una constante.
        </p>
        <h3 className={styles.subtitle_block}>
          Convenciones en el nombrado de variables
        </h3>
        <div className={styles.img_center}>
          <Image
            src="/images/temario/variables/searching-variable.jpeg"
            width="500"
            height="600"
            alt="Carga JavaScript"
            loading="lazy"
          />
        </div>
        <p>
          Muchas veces estamos nombrando variables o cualquier elemento de
          nuestro código y no le damos la importancia que debe. Las variables
          son muy importantes, si eliges un buen nombre, puede ser muy
          descriptivo y podemos saber en todo momento que está haciendo.
        </p>
        <p>
          De esta manera podremos obviar los comentarios ya que al tener un
          nombre muy descriptivo, nos va a ayudar a que otras personas también
          entiendan nuestro código. Imaginaros que hay una variable se llama a,
          ¿qué hace realmente a?. Si pusieramos un nombre a la variable del tipo{" "}
          <strong>getAvatar()</strong>, ¿a qué podéis intuir lo que está
          haciendo esa función?.
        </p>
        <p>
          Cuando empezamos le ponemos cualquier nombre a las variables, y eso es
          un gran fallo, debemos de pensar bien que nombre ponerles, porque
          nosotros podemos entender nuestro código, pero siempre tenemos que
          estar escribiendo código para que todo el mundo pudiera leerlo.
          Siempre imaginaros que el código es un libro de instrucciones, y tú
          tienes que decirle a quién lo lea, que está haciendo el código en todo
          momento. Así que debemos de poner{" "}
          <strong>nombres descriptivos</strong> a nuestras variables, o se puede
          volver todo insostenible.
        </p>
        <p>
          Muchas veces cuando escribimos código, ponemos un nombre a una
          variable, y más adelante lo volvemos a cambiar, tranquilidad con esto,
          hasta la persona más experimentada hace esto.
        </p>
        <p>
          La única excepción a esta norma es en los bucles como un for que
          tienen indices, solemos utilizarlo con una letra (i, j, k, o a, b,
          c...)pero siempre de una forma correlativa.
        </p>
        <h3 className={styles.subtitle_block}>Nombres de convenciones</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Uso</th>
              <th>Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>🐍 snake_case</strong>
              </td>
              <td>
                Las palabras se separan con un guión bajo y se escriben siempre
                en minúsculas.
              </td>
              <td>north_camp</td>
            </tr>
            <tr>
              <td>
                <strong>🥙 kebab-case</strong>
              </td>
              <td>
                Las palabras se separan con un guión normal y se escriben
                siempre en minúsculas.
              </td>
              <td>north-camp</td>
            </tr>
            <tr>
              <td>
                <strong>🐪 camelCase</strong>
              </td>
              <td>
                Primera palabra, minúsculas. El resto en minúsculas, salvo la
                primera letra. La más utilizada en Javascript.
              </td>
              <td>northCamp</td>
            </tr>
            <tr>
              <td>
                <strong>💨 PascalCase</strong>
              </td>
              <td>
                Idem a la anterior, pero todas las palabras empiezan con la
                primera letra mayúscula. Se utiliza en las Clases.
              </td>
              <td>NorthCamp</td>
            </tr>
            <tr>
              <td>
                <strong>⚫️ dot.case</strong>
              </td>
              <td>
                Las palabras van en minúsculas separadas por puntos. En
                Javascript no se puede usar.
              </td>
              <td>north.camp</td>
            </tr>
            <tr>
              <td>
                <strong>🤦🤦‍♀️ mElaSuDatodOcAsE</strong>
              </td>
              <td>Desquiciar a cualquiera que programe</td>
              <td>Mejor no dar ejemplos 😱</td>
            </tr>
          </tbody>
        </table>
      </article>
    </div>
  );
}
