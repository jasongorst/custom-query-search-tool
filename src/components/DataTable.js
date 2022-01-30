import React, { useEffect, useState } from 'react'
import { Container, Dropdown, Grid, Pagination, Table } from 'semantic-ui-react'
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

  const perPageValues = [25, 50, 100]
  const perPageOptions = perPageValues.map((value) => (
    {
      key: value,
      text: value.toString(),
      value: value,
    }
  ))

  const handlePageChange = (e, {activePage}) => {
    setPage(activePage)
  }

  const handlePerPageChange = (e, {value}) => {
    setPerPage(value)
  }

  return (
    <>
      {body.length > 0 && <Container>
        <Grid>
          <Grid.Column width={8}>
            <Pagination
              boundaryRange={1}
              siblingRange={2}
              firstItem={null}
              lastItem={null}
              totalPages={Math.ceil(body.length / perPage)}
              activePage={page}
              onPageChange={handlePageChange}
            />
          </Grid.Column>
          <Grid.Column>
            <Dropdown
              placeholder="Items Per Page&hellip;"
              selection
              options={perPageOptions}
              onChange={handlePerPageChange}
            />
          </Grid.Column>
        </Grid>
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
      </Container>}
    </>
  )
}

export default DataTable
