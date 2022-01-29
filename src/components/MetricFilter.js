import { Button, Form } from 'semantic-ui-react'
import { compareOptions } from '../helpers/dropdownOptions'

const MetricFilter = ({metricDefinitions, metricOptions, metricCriteria, metricIndex, onChange}) => {

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
        metricIndex={metricIndex}
      />
      <Form.Select
        name="compareType"
        fluid
        label="Comparison"
        placeholder="Choose&hellip;"
        options={compareOptions}
        value={metricCriteria.compareType}
        onChange={onChange}
        metricIndex={metricIndex}
      />
      <Form.Input
        name="value"
        fluid
        label="Value"
        placeholder=""
        value={metricCriteria.value}
        onChange={onChange}
        metricIndex={metricIndex}
      />
      <Button.Group basic icon style={{border: 'none'}}>
        <Button compact type="button" icon="minus square outline" style={{padding: 0, border: 'none'}}/>
        <Button compact type="button" icon="plus square outline" style={{padding: 0, border: 'none'}}/>
      </Button.Group>
    </Form.Group>
  )
}

export default MetricFilter
