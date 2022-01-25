import { Button, Form, Icon } from 'semantic-ui-react'
import { measureOptions, metricOptions } from '../helpers/dropdownOptions'

const MetricFilter = ({metric, onMetricChange}) => {

  return (
    <Form.Group widths="equal">
      <Form.Select
        name="metric"
        fluid
        label="Metric"
        placeholder="Choose&hellip;"
        options={metricOptions}
        value={metric.metric}
        onChange={onMetricChange}
      />
      <Form.Select
        name="measure"
        fluid
        label="Measure"
        placeholder="Choose&hellip;"
        options={measureOptions}
        value={metric.measure}
        onChange={onMetricChange}
      />
      <Form.Input
        name="value"
        fluid
        label="Value"
        placeholder=""
        value={metric.value}
        onChange={onMetricChange}
      />
      <Button.Group basic icon style={{border: 'none'}}>
        <Button compact style={{padding: 0, border: 'none'}}><Icon name="plus square outline"/></Button>
        <Button compact style={{padding: 0, border: 'none'}}><Icon name="minus square outline"/></Button>
      </Button.Group>
    </Form.Group>
  )
}

export default MetricFilter
