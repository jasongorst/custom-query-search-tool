import { useEffect, useState } from 'react'
import { Container, Grid, Icon, Message } from 'semantic-ui-react'
import FilterForm from './FilterForm'
import DataTable from './DataTable'
import { defaultColumns, URL_API } from '../config'

const QueryTool = () => {
  const [metricDefinitions, setMetricDefinitions] = useState([])
  const [request, setRequest] = useState()
  const [error, setError] = useState()

  const getData = async (url = "") => {
    const response = await fetch(url, {
      method: "GET",
      cache: "no-cache",
    })
    return response.json()
  }

  useEffect(() => {
    getData(URL_API + "/Search/MetricDefinitions")
      .then(
        (defs) => {
          setMetricDefinitions(defs)
        },
        (err) => {
          setError(err.message)
        },
      )
  }, [])

  const metricOptions = metricDefinitions.map((metric) => (
    {
      key: metric.metricCode,
      text: metric.alias,
      value: metric.metricCode,
    }
  ))

  const columnFormats = defaultColumns.concat(metricDefinitions)

  return (
    <div className="App">
      <Container style={{margin: 50}}>
        {error && <Message error icon>
          <Icon name="exclamation triangle"/>
          <Message.Content>
            <Message.Header>Something Went Wrong</Message.Header>
            {error}
          </Message.Content>
        </Message>}
        <Grid celled="internally">
          <Grid.Row columns={1}>
            <Grid.Column>
              <FilterForm
                columnFormats={columnFormats}
                metricOptions={metricOptions}
                setRequest={setRequest}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1}>
            <Grid.Column style={{overflow: "auto hidden"}}>
              <DataTable
                columnFormats={columnFormats}
                request={request}
                setError={setError}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  )
}

export default QueryTool
