import { Container, Grid } from 'semantic-ui-react'
import _ from 'lodash'
import FilterForm from './components/FilterForm'
import DataTable from './components/DataTable'

import 'semantic-ui-css/semantic.min.css'

const ids = _.range(1, 11)
const restaurantIdOptions = ids.map( (x) => Object({ key: x, text: x, value: x }) )

const metricOptions = [
  {
    key: 'TransactionTotalAmount',
    text: 'TransactionTotalAmount',
    value: 'TransactionTotalAmount'
  },
  {
    key: 'ItemSoldQty',
    text: 'ItemSoldQty',
    value: 'ItemSoldQty'
  },
  {
    key: 'DiscountAmount',
    text: 'DiscountAmount',
    value: 'DiscountAmount'
  }
]

const measureOptions = [
  { key: 'lt', text: '<', value: 'lt' },
  { key: 'lte', text: '<=', value: 'lte' },
  { key: 'eq', text: '=', value: 'eq' },
  { key: 'gte', text: '>=', value: 'gte' },
  { key: 'gt', text: '>', value: 'gt' }
]

const tableHeaders = [
  'RestaurantId',
  'BusDt',
  'OrderNumber',
  'OrderTime',
  'TransactionTotalAmount',
  'TransactionNetAmount',
  'ItemSoldQty',
  'BeverageQty',
  'DiscountAmount',
  'ItemDeletedAmount',
  'DiscountRatio',
  'RefundAmount'
]

const tableData = [
  ['1', '2020-09-22', '5', '2020-09-22 07:23:00', '2.50', '2.32', '2', '0', '0.26', '0.00', '0.104', '0.00'],
  ['1', '2020-09-22', '5', '2020-09-22 07:23:00', '2.50', '2.32', '2', '0', '0.26', '0.00', '0.104', '0.00'],
  ['1', '2020-09-22', '5', '2020-09-22 07:23:00', '2.50', '2.32', '2', '0', '0.26', '0.00', '0.104', '0.00'],
  ['1', '2020-09-22', '5', '2020-09-22 07:23:00', '2.50', '2.32', '2', '0', '0.26', '0.00', '0.104', '0.00'],
  ['1', '2020-09-22', '5', '2020-09-22 07:23:00', '2.50', '2.32', '2', '0', '0.26', '0.00', '0.104', '0.00'],
  ['1', '2020-09-22', '5', '2020-09-22 07:23:00', '2.50', '2.32', '2', '0', '0.26', '0.00', '0.104', '0.00']
]

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
