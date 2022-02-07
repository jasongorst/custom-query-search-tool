import { useState } from 'react'
import { Container, Form, Grid, Icon, Message } from 'semantic-ui-react'
import RestaurantIdsSelect from './RestaurantIdsSelect'
import DateRangePicker from './DateRangePicker'
import TimeRange from './TimeRange'
import Metrics from './Metrics'
import useQueryParam from '../helpers/useQueryParam'
import formatRequest from '../helpers/formatRequest'
import isFormComplete from '../helpers/isFormComplete'

const FilterForm = ({columnFormats, metricOptions, setRequest}) => {
  const [formIncomplete, setFormIncomplete] = useState(false)

  let [formData, setFormData] = useQueryParam("filter")
  const formDataDefaults = {
    restaurantIds: [],
    dateRange: "",
    fromHour: "06:00 am",
    toHour: "05:00 am",
    metricCriteria: [
      {
        metricCode: "",
        compareType: "",
        value: "",
      },
    ],
  }
  if (!formData) {
    formData = formDataDefaults
  }

  const handleSubmit = () => {
    if (isFormComplete(formData)) {
      setFormIncomplete(false)
      setRequest(formatRequest(formData, columnFormats))
    } else {
      setFormIncomplete(true)
    }
  }

  const handleChange = (e, {name, value}) => {
    setFormData({...formData, [name]: value}, {replace: true})
    setFormIncomplete(false)
  }

  const handleMetricsChange = (metricCriteria) => {
    setFormData({...formData, metricCriteria: metricCriteria}, {replace: true})
    setFormIncomplete(false)
  }

  return (
    <Container>
      {formIncomplete && <Message warning icon>
        <Icon name="exclamation"/>
        <Message.Content>
          <Message.Header>Filter Incomplete</Message.Header>
          Please fill out all of the fields.
        </Message.Content>>
      </Message>}
      <Form onSubmit={handleSubmit}>
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
