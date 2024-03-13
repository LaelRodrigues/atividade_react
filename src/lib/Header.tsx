import { items } from "./Items";

export default function Header() {
  let quantItens = 0
  items.forEach(item => {
    quantItens += item.quant
  });
  return (
    <>
      <h1>Carinho de compras</h1>
      <p>você tem {quantItens} itens</p>
    </>
  );
}
