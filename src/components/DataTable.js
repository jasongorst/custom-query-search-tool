import { Table } from 'semantic-ui-react'

const DataTable = ({ tableHeaders, tableData }) => {

  const headers = tableHeaders.map((header) => {
    return (
      <Table.HeaderCell singleLine>{header}</Table.HeaderCell>
    )
  })

  const body = tableData.map((row) => {
    return (
      <Table.Row>
        {row.map((cell) => {
          return (
            <Table.Cell singleLine>{cell}</Table.Cell>
          )
        })}
      </Table.Row>
    )
  })

  return (
    <Table striped>
      <Table.Header>
      <Table.Row>
        {headers}
      </Table.Row>
      </Table.Header>

      <Table.Body>
        {body}
      </Table.Body>
    </Table>
  )
}

export default DataTable
