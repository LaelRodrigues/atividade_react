export type Item = {
  nome: string,
  descricao: string,
  preco: number,
  quantidade: number  
}

export type ItemProps = {
    items: Item[]
};

export default function Items(props: ItemProps) {

  const handleClick = () => alert('Clicou no item')

  const listItems = props.items.map((item, index) => {
    return (
      <li style={{ textAlign: 'left' }} key={index} onClick={ handleClick }>
        { item.nome } <br></br>
        { item.descricao} <br></br>
        { item.preco} <br></br>
        { item.quantidade} <br></br>
      </li>
    )
  })

  return <>
  <ul>
    { listItems }
  </ul>
</>
}