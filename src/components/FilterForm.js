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
    fromHour: '06:00 am',
    toHour: '05:00 am',
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
              <MetricFilter
                metricCriteria={formData.metricCriteria}
                onChange={handleMetricChange}
              />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={3}>
            <Grid.Column/>
            <Grid.Column>
              <Form.Button
                fluid
                primary
                type="submit"
              >
                Filter Transactions
              </Form.Button>
            </Grid.Column>
            <Grid.Column/>
          </Grid.Row>
        </Grid>
      </Form>
    </Container>
  )
}

export default FilterForm
