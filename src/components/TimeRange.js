import { Form } from 'semantic-ui-react'
import { TimeInput } from 'semantic-ui-calendar-react'

const TimeRange = ({fromTime, toTime, onFromTimeChange, onToTimeChange}) => {
  return (
    <Form.Group widths="equal">
      <Form.Field>
        <label>Transaction Time</label>
        <TimeInput
          fluid
          disableMinute
          icon="clock outline"
          timeFormat="ampm"
          name="fromTime"
          placeholder="From"
          value={fromTime}
          onChange={onFromTimeChange}
        />
      </Form.Field>
      <Form.Field>
        <label>&nbsp;</label>
        <TimeInput
          fluid
          disableMinute
          icon="clock outline"
          timeFormat="ampm"
          name="toTime"
          placeholder="To"
          value={toTime}
          onChange={onToTimeChange}
        />
      </Form.Field>
    </Form.Group>
  )
}

export default TimeRange
