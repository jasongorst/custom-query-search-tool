import { Form } from 'semantic-ui-react'
import { DatesRangeInput } from 'semantic-ui-calendar-react'

const DatesRangePicker = ({dateRange, onChange}) => {
  return (
    <Form.Field>
      <label>Date Range</label>
      <DatesRangeInput
        allowSameEndDate
        name="dateRange"
        dateFormat="MM/DD/YYYY"
        icon="calendar alternate outline"
        placeholder="Date From &ndash; Date To"
        value={dateRange}
        iconPosition="right"
        onChange={onChange}
      />
    </Form.Field>
  )
}

export default DatesRangePicker
