import { Form, Icon } from 'semantic-ui-react'

const MetricFilter = ( {metricOptions, measureOptions} ) => {
  return (
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
      <Icon name='plus square outline' />
      <Icon name='minus square outline' />
    </Form.Group>
  )
}

export default MetricFilter
