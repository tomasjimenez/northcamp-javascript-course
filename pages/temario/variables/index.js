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
          inicializar una variable y ver que si no inicializamos tenemos el
          valor undefined. Vamos a ver los distintos tipos de variables que
          tiene JavaScript.
        </p>
        <h3 className={styles.subtitle_block}>VAR</h3>
        <p>
          Es la forma antigua de declarar variables, antiguamente sólo teníamos
          este tipo de variable y podíamos tener muchos errores. A la hora de
          inicializarla, podemos volverle a asignarle un valor nuevo y eso podía
          ser una barra libre si no se tenía un control. También es peculiar
          porque tiene un scope por le general que es global (que desde
          cualquier parte del código podemos acceder a él) y también tiene un
          scope a nivel de función. Vamos a ver varios ejemplos para poder
          entender como funciona el scope en var, y así poder hacernos una idea
          como funciona, aunque <strong>var</strong> no lo utilicemos, podemos
          verlo en código legacy y debemos de entender cómo funciona.
        </p>
        <p>
          Este es un ejemplo donde vemos que tenemos un scope global y un scope
          en la función, nos va a devolver valores distintos, fuera de la
          función y dentro de la función:
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
          empezando, o para mantener un código que es antiguo. Realmente
          deberíamos de huír del uso de <strong>var</strong>.
        </p>
        <h3 className={styles.subtitle_block}>LET</h3>
        <p>
          <strong>Let</strong>, junto a <strong>const</strong>, se introdujo en
          la versión de ES6 o ES2015. Se realizó este cambio porque en vez de
          tener un scope global o de función, ahora tendremos ambitos globales o
          locales, como otros lenguajes de programación.
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
          mayúsculas, y si un nombre de variable compuesto (por ejemplo
          firstName) lo usaríamos de la siguiente manera: FIRST_NAME. Al ver una
          variable en mayúsculas, vamos a saber rápidamente que es una
          constante.
        </p>
        <h3 className={styles.subtitle_block}>Nomenclaturas</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </article>
    </div>
  );
}
