import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento web</td>
            <td className="deposit">R$12.000</td>
            <td>Projetos</td>
            <td>20/12/2021</td>
          </tr>

          <tr>
            <td>Financiamento</td>
            <td className="withdraw">- R$500,00</td>
            <td>Projetos</td>
            <td>20/12/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}