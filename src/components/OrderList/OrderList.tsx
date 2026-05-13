import type React from "react"
import "./OrderList.css"
import type { ChangeEvent } from "react"

type Props = {
  setSortUsers: React.Dispatch<React.SetStateAction<User[]>>
}

function OrderList({ setSortUsers }: Props) {
  

  //funcao para pegar a opcao selecionada no select
  function onSelectOption(event: ChangeEvent<HTMLSelectElement>) {
    console.log('selecionou uma opcao no select do order list:', event.target.value)

    setSortUsers(event.target.value)
  }

  return (
    <>
      <select onChange={onSelectOption} name="" id="">
        <option value="">Selecione um filtro</option>
        <option value="a-z">Nome A-Z</option>
        <option value="z-a">Nome Z-A</option>
        <option value="idadeCrescente">Idade crescente</option>
        <option value="idadeDecrescente">Idade decrescente</option>
      </select>
    </>
  )
}

export default OrderList