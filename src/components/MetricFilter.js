import { Button, Form, Icon } from 'semantic-ui-react'
import { compareOptions, metricOptions } from '../helpers/dropdownOptions'

const MetricFilter = ({metricCriteria, onMetricChange}) => {

  return (
    <Form.Group widths="equal">
      <Form.Select
        name="metricCode"
        fluid
        label="Metric"
        placeholder="Choose&hellip;"
        options={metricOptions}
        value={metricCriteria.metricCode}
        onChange={onMetricChange}
      />
      <Form.Select
        name="compareType"
        fluid
        label="Comparison"
        placeholder="Choose&hellip;"
        options={compareOptions}
        value={metricCriteria.compareType}
        onChange={onMetricChange}
      />
      <Form.Input
        name="value"
        fluid
        label="Value"
        placeholder=""
        value={metricCriteria.value}
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
