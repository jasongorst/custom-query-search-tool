import { Form } from 'semantic-ui-react'
import { DatesRangeInput } from 'semantic-ui-calendar-react'

const DatesRangePicker = ({dateRange, onDateRangeChange}) => {
  return (
    <Form.Field>
      <label>Date Range</label>
      <DatesRangeInput
        name="dateRange"
        dateFormat="MM/DD/YYYY"
        icon="calendar alternate outline"
        placeholder="Date From &ndash; Date To"
        value={dateRange}
        iconPosition="right"
        onChange={onDateRangeChange}
      />
    </Form.Field>
  )
}

export default DatesRangePicker
