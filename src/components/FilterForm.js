import { Container, Form, Grid } from 'semantic-ui-react'
import RestaurantIdsSelect from './RestaurantIdsSelect'
import DateRangePicker from './DateRangePicker'
import TimeRange from './TimeRange'
import Metrics from "./Metrics"
import useQueryParam from '../helpers/useQueryParam'
import formatRequest from '../helpers/formatRequest'

const FilterForm = ({columnFormats, metricOptions, setRequest}) => {
  let [formData, setFormData] = useQueryParam("filter")

  if (!formData) {
    formData = {
      restaurantIds: [],
      dateRange: '',
      fromHour: '06:00 am',
      toHour: '05:00 am',
      metricCriteria: [
        {
          metricCode: '',
          compareType: '',
          value: '',
        },
      ],
    }
  }

  const handleChange = (e, {name, value}) => {
    setFormData({...formData, [name]: value}, {replace: true})
  }

  const handleMetricsChange = (metricCriteria) => {
    setFormData({...formData, metricCriteria: metricCriteria}, {replace: true})
  }

  const filterTransactions = () => {
    const formattedRequest = formatRequest(formData, columnFormats)
    setRequest(formattedRequest)
  }

  return (
    <Container>
      <Form onSubmit={filterTransactions}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <RestaurantIdsSelect
                restaurantIds={formData.restaurantIds}
                onChange={handleChange}
              />

              <DateRangePicker
                dateRange={formData.dateRange}
                onChange={handleChange}
              />

              <TimeRange
                fromHour={formData.fromHour}
                toHour={formData.toHour}
                onChange={handleChange}
              />
            </Grid.Column>

            <Grid.Column width={8}>
              <Metrics
                columnFormats={columnFormats}
                metricOptions={metricOptions}
                metricCriteria={formData.metricCriteria}
                onChange={handleMetricsChange}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row centered columns={3}>
            <Grid.Column>
              <Form.Button
                fluid
                primary
                type="submit"
                content="Filter Transactions"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form>
    </Container>
  )
}

export default FilterForm
