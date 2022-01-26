import React, { useState } from 'react'
import { Container, Form, Grid } from 'semantic-ui-react'
import RestaurantIdsSelect from './RestaurantIdsSelect'
import DateRangePicker from './DateRangePicker'
import TimeRange from './TimeRange'
import MetricFilter from "./MetricFilter"
import formatRequest from '../helpers/formatRequest'

const FilterForm = () => {
  const [formData, setFormData] = useState({
    restaurantIds: [],
    dateRange: '',
    fromTime: '06:00 am',
    toTime: '05:00 am',
    metricCriteria: {
      metricCode: '',
      compareType: '',
      value: '',
    },
  })

  const handleChange = (e, {name, value}) => {
    setFormData({...formData, [name]: value})
  }

  const handleMetricChange = (e, {name, value}) => {
    setFormData({
      ...formData,
      metricCriteria: {
        ...formData.metricCriteria,
        [name]: value,
      },
    })
  }

  const filterTransactions = () => {
    console.log(formatRequest(formData))
  }

  return (
    <Container>
      <Form>
        <Grid>
          <Grid.Row>

            <Grid.Column width={8}>
              <RestaurantIdsSelect
                restaurantIds={formData.restaurantIds}
                onRestaurantIdsChange={handleChange}
              />

              <DateRangePicker
                dateRange={formData.dateRange}
                onDateRangeChange={handleChange}
              />

              <TimeRange
                fromTime={formData.fromTime}
                toTime={formData.toTime}
                onTimeChange={handleChange}
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
                metricCriteria={formData.metricCriteria}
                onMetricChange={handleMetricChange}
              />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Form>
    </Container>
  )
}

export default FilterForm
