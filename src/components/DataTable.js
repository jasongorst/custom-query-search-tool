import React, { useEffect, useState } from 'react'
import { Container, Message, Table } from 'semantic-ui-react'
import DataPaginate from './DataPaginate'
import formatResponseData from '../helpers/formatResponseData'
import { URL_API } from '../config'

const DataTable = ({columnFormats, request}) => {
  const [headers, setHeaders] = useState([])
  const [body, setBody] = useState([])
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(25)

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
    getTableData(URL_API + "/Search/Query", request)
      .then((data) => {
        const [tableHeaders, tableData] = formatResponseData(data, columnFormats)
        setHeaders(createHeaders(tableHeaders))
        setBody(createBody(tableData))
      })
      .catch((error) => {
        console.error("Error fetching transaction data from API: " + error)
      })
  }, [request, columnFormats])

  const handlePageChange = (e, {activePage}) => {
    setPage(activePage)
  }

  const handlePerPageChange = (e, {value}) => {
    setPerPage(value)
  }

  return (
    <Container>
      {body.length > 0 && <>
        <DataPaginate
          rows={body.length}
          page={page}
          perPage={perPage}
          handlePageChange={handlePageChange}
          handlePerPageChange={handlePerPageChange}
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
      </>}
      {request && body.length === 0 && <Message info>
        <Message.Header>
          No Transactions Found
        </Message.Header>
        <p>
          Try relaxing your filter requirements.
        </p>
      </Message>
      }
    </Container>
  )
}

export default DataTable
