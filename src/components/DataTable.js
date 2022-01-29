import { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import formatResponseData from '../helpers/formatResponseData'
import { URL_API } from '../config'

const DataTable = ({metricDefintions, request}) => {
  const [headers, setHeaders] = useState([])
  const [body, setBody] = useState([])

  console.log(request)

  const createHeaders = (tableHeaders) => {
    return tableHeaders.map((header, hdridx) => {
      return (
        <Table.HeaderCell key={`headers-${hdridx}`} singleLine>{header}</Table.HeaderCell>
      )
    })
  }

  const createBody = (tableData) => {
    return tableData.map((row, rowidx) => {
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
        console.log(data)
        const [tableHeaders, tableData] = formatResponseData(data)
        console.log(tableHeaders, tableData)
        setHeaders(createHeaders(tableHeaders))
        setBody(createBody(tableData))
      })
      .catch((error) => {
        console.log("Error fetching transaction data from API: " + error)
      })
  }, [request])

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
