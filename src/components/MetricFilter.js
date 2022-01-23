import { Form, Button, Icon } from 'semantic-ui-react'

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
      <Button.Group basic icon style={{ padding: 0, border: 'none'}}>
        <Button compact style={{ padding: 0, border: 'none'}}><Icon name='plus square outline' /></Button>
        <Button compact style={{ padding: 0, border: 'none'}}><Icon name='minus square outline' /></Button>
      </Button.Group>
    </Form.Group>
  )
}

export default MetricFilter
