import { Container, Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import FilterForm from './components/FilterForm'
import DataTable from './components/DataTable'

import { restaurantIdOptions, metricOptions, measureOptions, tableHeaders, tableData} from './helpers/mockData'

const App = () => {
  return (
    <div className="App">
      <Container style={{ margin: 50 }}>
        <Grid divided>
          <Grid.Row>
            <Grid.Column width={6}>
              <FilterForm
                restaurantIdOptions={restaurantIdOptions}
                metricOptions={metricOptions}
                measureOptions={measureOptions}
              />
            </Grid.Column>
            <Grid.Column width={10}>
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
