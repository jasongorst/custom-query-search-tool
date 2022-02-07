import { useEffect, useState } from 'react'
import { Container, Dimmer, Icon, Message, Table } from 'semantic-ui-react'
import DataPaginate from './DataPaginate'
import formatResponseData from '../helpers/formatResponseData'
import useQueryParam from '../helpers/useQueryParam'
import { URL_API } from '../config'

const DataTable = ({columnFormats, request}) => {
  const perPage = 20

  const [loading, setLoading] = useState(false)
  const [headers, setHeaders] = useState([])
  const [body, setBody] = useState([])

  let [page, setPage] = useQueryParam("page")
  if (!page) {
    page = 1
  }

  const createHeaders = (tableHeaders) => {
    return tableHeaders.map((header, hdridx) => (
      <Table.HeaderCell key={`headers-${hdridx}`}>{header}</Table.HeaderCell>
    ))
  }

  const createBody = (tableData) => {
    return tableData.map((row, rowidx) => (
      <Table.Row key={rowidx}>
        {row.map((cell, colidx) => (
          <Table.Cell key={`${rowidx}-${colidx}`} singleLine>{cell}</Table.Cell>
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

            setLoading(false)
          },
          (error) => {
            console.error("Error: " + error.message)
            setLoading(false)
          },
        )
    }
  }, [request, columnFormats])

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
          rows={body.length}
          page={page}
          perPage={perPage}
          handlePageChange={handlePageChange}
          // handlePerPageChange={handlePerPageChange}
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
        <Icon name="x icon"/>
        <Message.Content>
          <Message.Header>No Transactions Found</Message.Header>
          Try relaxing your filter requirements.
        </Message.Content>
      </Message>}

    </Container>
  )
}

export default DataTable
