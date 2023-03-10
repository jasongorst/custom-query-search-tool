import { useEffect, useState } from 'react'
import { Container, Dimmer, Icon, Message, Table } from 'semantic-ui-react'
import DataPaginate from './DataPaginate'
import formatResponseData from '../helpers/formatResponseData'
import { URL_API } from '../config'

const DataTable = ({columnFormats, request, setError}) => {
  const perPage = 20

  const [loading, setLoading] = useState(false)
  const [headers, setHeaders] = useState([])
  const [body, setBody] = useState([])
  const [page, setPage] = useState(1)

  const createHeaders = (tableHeaders) => {
    return tableHeaders.map((header, hdridx) => (
      <Table.HeaderCell key={hdridx}>{header}</Table.HeaderCell>
    ))
  }

  const createBody = (tableData) => {
    return tableData.map((row, rowidx) => (
      <Table.Row key={rowidx}>
        {row.map((cell, colidx) => (
          <Table.Cell key={colidx} singleLine>{cell}</Table.Cell>
        ))}
      </Table.Row>
    ))
  }

  const getTableData = async (url = "", req) => {
    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(req),
    })
    return response.json()
  }

  useEffect(() => {
    if (request) {
      setLoading(true)

      getTableData(URL_API + "/Search/Query", request)
        .then(
          (data) => {
            const [tableHeaders, tableData] = formatResponseData(data, columnFormats)
            setHeaders(createHeaders(tableHeaders))
            setBody(createBody(tableData))
            setPage(1)

            setLoading(false)
          },
          (err) => {
            setError(err.message)
            setLoading(false)
          },
        )
    }
  }, [request, columnFormats, setPage, setError])

  const handlePageChange = (e, {activePage}) => {
    setPage(activePage)
  }

  return (
    <Container>

      {loading && <Message icon>
        <Icon name="spinner" loading/>
        <Message.Content>
          <Message.Header>One Moment</Message.Header>
          We are fetching that transaction data.
        </Message.Content>
      </Message>}

      {body.length > 0 && <Dimmer.Dimmable as={Container} blurring dimmed={loading}>
        <DataPaginate
          page={page}
          totalPages={Math.ceil(body.length / perPage)}
          handlePageChange={handlePageChange}
        />
        <Table striped>
          <Table.Header>
            <Table.Row key={'headers'}>
              {headers}
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {body.slice((page - 1) * perPage, page * perPage)}
          </Table.Body>
        </Table>
      </Dimmer.Dimmable>}

      {request && body.length === 0 && !loading && <Message info icon>
        <Icon name="x"/>
        <Message.Content>
          <Message.Header>No Transactions Found</Message.Header>
          Try relaxing your filter requirements.
        </Message.Content>
      </Message>}

    </Container>
  )
}

export default DataTable
