import { Table } from 'semantic-ui-react'

const DataTable = ({ tableHeaders, tableData }) => {

  const headers = tableHeaders.map((header, hdridx) => {
    return (
      <Table.HeaderCell key={`headers-${hdridx}`} singleLine>{header}</Table.HeaderCell>
    )
  })

  const body = tableData.map((row, rowidx) => {
    return (
      <Table.Row key={rowidx}>
        {row.map((cell, colidx) => {
          return (
            <Table.Cell key={`${rowidx}-${colidx}`} singleLine>{cell}</Table.Cell>
          )
        })}
      </Table.Row>
    )
  })

  return (
    <Table striped>
      <Table.Header>
        <Table.Row key={'headers'}>
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
