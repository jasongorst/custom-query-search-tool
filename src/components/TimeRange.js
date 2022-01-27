import { Form } from 'semantic-ui-react'
import { TimeInput } from 'semantic-ui-calendar-react'

const TimeRange = ({fromHour, toHour, onChange}) => {
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
          onChange={onChange}
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
          onChange={onChange}
        />
      </Form.Field>
    </Form.Group>
  )
}

export default TimeRange
