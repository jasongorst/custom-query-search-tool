import { Button, Form } from 'semantic-ui-react'
import { compareOptions, metricOptions } from '../helpers/dropdownOptions'

const MetricFilter = ({metricCriteria, onChange}) => {

  return (
    <Form.Group widths="equal">
      <Form.Select
        name="metricCode"
        fluid
        label="Metric"
        placeholder="Choose&hellip;"
        options={metricOptions}
        value={metricCriteria.metricCode}
        onChange={onChange}
      />
      <Form.Select
        name="compareType"
        fluid
        label="Comparison"
        placeholder="Choose&hellip;"
        options={compareOptions}
        value={metricCriteria.compareType}
        onChange={onChange}
      />
      <Form.Input
        name="value"
        fluid
        label="Value"
        placeholder=""
        value={metricCriteria.value}
        onChange={onChange}
      />
      <Button.Group basic icon style={{border: 'none'}}>
        <Button compact type="button" icon="minus square outline" style={{padding: 0, border: 'none'}}/>
        <Button compact type="button" icon="plus square outline" style={{padding: 0, border: 'none'}}/>
      </Button.Group>
    </Form.Group>
  )
}

export default MetricFilter
