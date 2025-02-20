import { useSelector } from 'react-redux'
import Produto from '../components/Produto'

import * as S from './styles'
import { RootState } from '../store'
import { Produto as ProdutoType } from '../App'

type Props = {
  produtos: ProdutoType[]
}

const ProdutosComponent = ({ produtos }: Props) => {
  // Pegando a lista de favoritos do Redux
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  // Verifica se o produto está nos favoritos, comparando o id
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = String(produto.id) // Convertendo o id do produto para string
    return favoritos.includes(produtoId) // Verifica se o id do produto está nos favoritos
  }

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          produto={produto}
          estaNosFavoritos={produtoEstaNosFavoritos(produto)} // Passa o estado de favorito para o Produto
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
