import { Form } from 'semantic-ui-react'
import { TimeInput } from 'semantic-ui-calendar-react'

const TimeRange = ({fromHour, toHour, onTimeChange}) => {
  return (
    <Form.Group widths="equal">
      <Form.Field>
        <label>Transaction Time</label>
        <TimeInput
          fluid
          disableMinute
          icon="clock outline"
          timeFormat="ampm"
          name="fromHour"
          placeholder="From"
          value={fromHour}
          onChange={onTimeChange}
        />
      </Form.Field>
      <Form.Field>
        <label>&nbsp;</label>
        <TimeInput
          fluid
          disableMinute
          icon="clock outline"
          timeFormat="ampm"
          name="toHour"
          placeholder="To"
          value={toHour}
          onChange={onTimeChange}
        />
      </Form.Field>
    </Form.Group>
  )
}

export default TimeRange
