import "./App.css";
import Header from "./lib/Header";
import Items, {Item} from "./lib/Items";


const meuItem: Item = {
    nome: "Produto",
    descricao: "Descrição do produto",
    preco: 10.99,
    quantidade: 5

}
function App() {
  return (
    <>
      <div>
        <Header></Header>
        <Items items={[meuItem]} />
      </div>
    </>
  );
}

export default App;
