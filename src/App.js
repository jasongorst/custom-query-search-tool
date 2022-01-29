import 'semantic-ui-css/semantic.min.css'
import { useEffect, useState } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import FilterForm from './components/FilterForm'
import DataTable from './components/DataTable'
import { URL_API } from './config'

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
        console.log("Error fetching metric definitions from API: " + error)
      })
  }, [])

  const metricOptions = metricDefinitions.map((metric, index) => {
    return {
      key: index,
      text: metric.alias,
      value: metric.metricCode,
    }
  })

  return (
    <div className="App">
      <Container style={{margin: 50}}>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <FilterForm
                metricDefinitions={metricDefinitions}
                metricOptions={metricOptions}
                setRequest={setRequest}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} style={{"overflow-x": "scroll"}}>
            <Grid.Column>
              <DataTable
                metricDefinitions={metricDefinitions}
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
