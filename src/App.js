import { Container, Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import FilterForm from './components/FilterForm'
import DataTable from './components/DataTable'

const App = () => {
  return (
    <div className="App">
      <Container style={{ margin: 50 }}>
        <Grid divided>
          <Grid.Row>
            <Grid.Column>
              <FilterForm/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={{overflow: 'auto'}}>
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
