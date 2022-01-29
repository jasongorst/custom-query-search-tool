import { Button, Form } from 'semantic-ui-react'
import { compareOptions } from '../helpers/dropdownOptions'

const MetricFilter = ({
                        metricDefinitions, metricOptions, metricCriteria, metricIndex,
                        metricCount, onChange, addMetric, dropMetric,
                      }) => {

  const showMinusButton = (metricCount > 1)
  const showPlusButton = (metricIndex === (metricCount - 1)) && (metricCount < 5)

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
        <Button
          compact
          type="button"
          icon="minus square outline"
          style={{padding: 0, border: 'none', visibility: (showMinusButton ? 'visible' : 'hidden')}}
          metricIndex={metricIndex}
          onClick={dropMetric}
        />
        <Button
          compact
          type="button"
          icon="plus square outline"
          style={{padding: 0, border: 'none', visibility: (showPlusButton ? 'visible' : 'hidden')}}
          onClick={addMetric}
        />
      </Button.Group>
    </Form.Group>
  )
}

export default MetricFilter
