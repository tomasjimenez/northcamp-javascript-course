import ModuleBlock from "../../../modules/Block/ModuleBlock";

function Pepe() {
  return (
    <div>
      Esto es un componente <strong style={{ color: "red" }}>paco</strong>
    </div>
  );
}

export default function ConociendoJavascript() {
  return <ModuleBlock ComponentToRender={<Pepe />}></ModuleBlock>;
}
