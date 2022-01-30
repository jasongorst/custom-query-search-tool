import 'semantic-ui-css/semantic.min.css'
import { useEffect, useState } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import FilterForm from './components/FilterForm'
import DataTable from './components/DataTable'
import { defaultColumns, URL_API } from './config'


const App = () => {
  const [metricDefinitions, setMetricDefinitions] = useState([])
  const [request, setRequest] = useState([])

  const getData = async (url = "") => {
    const response = await fetch(url, {
      method: "GET",
      cache: "no-cache",
    })
    return response.json()
  }

  useEffect(() => {
    getData(URL_API + "/Search/MetricDefinitions")
      .then((defs) => {
        setMetricDefinitions(defs)
      })
      .catch((error) => {
        console.error("Error fetching metric definitions from API: " + error)
      })
  }, [])

  const metricOptions = metricDefinitions.map((metric, index) => {
    return {
      key: index,
      text: metric.alias,
      value: metric.metricCode,
    }
  })

  const columnFormats = defaultColumns.concat(metricDefinitions)

  return (
    <div className="App">
      <Container style={{margin: 50}}>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <FilterForm
                columnFormats={columnFormats}
                metricOptions={metricOptions}
                setRequest={setRequest}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} style={{overflowX: "auto", overflowY: "hidden"}}>
            <Grid.Column>
              <DataTable
                columnFormats={columnFormats}
                request={request}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default App
