import { Container, Form } from 'semantic-ui-react'

const FilterForm = ({ restaurantIdOptions, metricOptions, measureOptions }) => {
  return (
    <Container>
      <Form>
        <Form.Select
          fluid
          multiple
          label='Restaurant ID'
          placeholder='Select restaurant id'
          options={restaurantIdOptions}
        />
        <Form.Group widths='equal'>
          <Form.Input
            label='Date Range'
            type='date'
            icon='calendar alternate outline'
          />
          <Form.Input
            label='To'
            type='date'
            icon='calendar alternate outline'
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Input
            label='Transaction Time'
            type='time'
            placeholder='06:00 AM'
            icon='clock outline'
          />
          <Form.Input
            label='To'
            type='time'
            placeholder='05:00 AM'
            icon='clock outline'
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Select
            fluid
            label='Metric'
            placeholder='Choose&hellip;'
            options={metricOptions}
          />
          <Form.Select
            fluid
            label='Measure'
            placeholder='Choose&hellip;'
            options={measureOptions}
          />
          <Form.Input
            fluid
            label='Value'
            placeholder='0'
          />
        </Form.Group>
        <Form.Button fluid primary>
          Filter Transactions
        </Form.Button>
      </Form>
    </Container>
  )
}

export default FilterForm
