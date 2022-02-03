import { Button, Form, Input } from 'semantic-ui-react'
import { compareOptions } from '../helpers/dropdownOptions'

const MetricFilter = ({
                        columnFormats, metricOptions, metricCriteria, metricindex,
                        metricCount, onChange, addMetric, dropMetric,
                      }) => {

  const showMinusButton = (metricCount > 1)
  const showPlusButton = (metricindex === (metricCount - 1)) && (metricCount < 5)

  const getValueFormat = () => {
    return columnFormats.find((col) => col.metricCode === metricCriteria.metricCode)
  }

  let label = null
  let labelPosition = "left"

  if (getValueFormat()) {
    switch (getValueFormat().dataType) {
      case "Money":
        label = {basic: true, content: "$"}
        break
      case "Percent":
        label = {basic: true, content: "%"}
        labelPosition = "right"
        break
      case "Number":
      default:
    }
  }

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
        metricindex={metricindex}
      />
      <Form.Select
        name="compareType"
        fluid
        label="Comparison"
        placeholder="Choose&hellip;"
        options={compareOptions}
        value={metricCriteria.compareType}
        onChange={onChange}
        metricindex={metricindex}
      />
      <Form.Field>
        <label>Value</label>
        <Input
          label={label}
          labelPosition={labelPosition}
          name="value"
          fluid
          placeholder=""
          value={metricCriteria.value}
          onChange={onChange}
          metricindex={metricindex}
        />
      </Form.Field>
      <Button.Group basic icon style={{border: 'none'}}>
        <Button
          compact
          type="button"
          icon="minus square outline"
          style={{padding: 0, border: 'none', visibility: (showMinusButton ? 'visible' : 'hidden')}}
          metricindex={metricindex}
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
