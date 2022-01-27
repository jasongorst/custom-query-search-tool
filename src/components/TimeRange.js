import { Form } from 'semantic-ui-react'
import HourInput from './HourInput'

const TimeRange = ({fromHour, toHour, onChange}) => {
  return (
    <Form.Group widths="equal">
      <Form.Field>
        <label>Transaction Time</label>
        <HourInput
          name="fromHour"
          placeholder="From"
          value={fromHour}
          onChange={onChange}
        />
      </Form.Field>
      <Form.Field>
        <label>&nbsp;</label>
        <HourInput
          name="toHour"
          placeholder="To"
          value={toHour}
          onChange={onChange}
        />
      </Form.Field>
    </Form.Group>
  )
}

export default TimeRange
