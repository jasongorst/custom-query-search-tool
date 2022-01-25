import { Container, Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import FilterForm from './components/FilterForm'
import DataTable from './components/DataTable'

const App = () => {
  return (
    <div className="App">
      <Container style={{margin: 50}}>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <FilterForm/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} style={{overflow: 'auto'}}>
            <Grid.Column>
              <DataTable/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default App
