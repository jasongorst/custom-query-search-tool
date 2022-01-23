import { Container, Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import FilterForm from './components/FilterForm'
import DataTable from './components/DataTable'

import { restaurantIdOptions, measureOptions, tableHeaders, tableData } from './helpers/mockData'
import { metricOptions } from './helpers/metricOptions'

const App = () => {
  return (
    <div className="App">
      <Container style={{ margin: 50 }}>
        <Grid divided>
          <Grid.Row>
            <Grid.Column>
              <FilterForm
                restaurantIdOptions={restaurantIdOptions}
                metricOptions={metricOptions}
                measureOptions={measureOptions}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <DataTable
                tableHeaders={tableHeaders}
                tableData={tableData}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default App
