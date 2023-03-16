import Layout from "../components/Layout";
import Cabecalho from "../components/cabecalho";

export default function Exemplo(){
    return(
      
      <Layout titulo="Utilizando Componentes">
            <Cabecalho  titulo={"Next.js & React"}/> 
            <Cabecalho  titulo={"Aprenda Next.js na prática"}/> 
      </Layout>
    )
}