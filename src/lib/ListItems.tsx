import { items } from "./Items";

export default function ListItems() {
   
    return (
      <>
        {items.map((item) => {
          // Criar uma variável para armazenar o valor formatado
          const valorFormatado = item.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    
          return (
            <ul>
              <li style={{ textAlign: 'left' }}>
                {item.nome}: {valorFormatado}
              </li>
            </ul>
          );
        })}
      </>
    );
  }
  