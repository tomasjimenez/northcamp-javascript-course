import ModuleBlock from "../../../modules/Block/ModuleBlock";

export default function ConociendoJavascript() {
  return (
    <ModuleBlock
      ComponentToRender={<TemarioConociendoJavaScript />}
      now="Conociendo JavaScript"
      nextLink="/"
    ></ModuleBlock>
  );
}

function TemarioConociendoJavaScript() {
  return (
    <div>
      Esto es un componente <strong style={{ color: "red" }}>paco</strong>
    </div>
  );
}
