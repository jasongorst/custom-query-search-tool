import React, { useState } from 'react'
import { Container, Form, Grid } from 'semantic-ui-react'
import RestaurantIdsSelect from './RestaurantIdsSelect'
import DateRangePicker from './DateRangePicker'
import TimeRange from './TimeRange'
import MetricFilter from "./MetricFilter"
import formatRequest from '../helpers/formatRequest'

const FilterForm = () => {
  const [restaurantIds, setRestaurantIds] = useState([])
  const [dateRange, setDateRange] = useState('')
  const [fromTime, setFromTime] = useState('06:00 am')
  const [toTime, setToTime] = useState('05:00 am')
  const [metric, setMetric] = useState({
    metric: '',
    measure: '',
    value: '',
  })

  const onRestaurantIdsChange = (e, {value}) => {
    setRestaurantIds(value)
  }

  const onDateRangeChange = (e, {value}) => {
    setDateRange(value)
  }

  const onTimeChange = (e, {name, value}) => {
    switch (name) {
      case 'fromTime':
        setFromTime(value)
        break
      case 'toTime':
        setToTime(value)
        break
      default:
        console.log(`onTimeChange called with unknown name ${name}.`)
    }
  }

  const onMetricChange = (e, {name, value}) => {
    setMetric({...metric, [name]: value})
  }

  const filterTransactions = () => {
    console.log(formatRequest(restaurantIds, dateRange, fromTime, toTime, metric))
  }

  return (
    <Container>
      <Form>
        <Grid>
          <Grid.Row>

            <Grid.Column width={8}>
              <RestaurantIdsSelect
                onRestaurantIdsChange={onRestaurantIdsChange}
                restaurantIds={restaurantIds}
              />

              <DateRangePicker
                dateRange={dateRange}
                onDateRangeChange={onDateRangeChange}
              />

              <TimeRange
                fromTime={fromTime}
                toTime={toTime}
                onTimeChange={onTimeChange}
              />

              <Form.Button
                fluid
                primary
                onClick={filterTransactions}
              >
                Filter Transactions
              </Form.Button>
            </Grid.Column>

            <Grid.Column width={8}>
              <MetricFilter
                metric={metric}
                onMetricChange={onMetricChange}
              />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Form>
    </Container>
  )
}

export default FilterForm
