import { Form } from 'semantic-ui-react'
import { DatesRangeInput } from 'semantic-ui-calendar-react'
import { MAX_DATE, MIN_DATE } from '../config'

const DatesRangePicker = ({dateRange, onChange}) => {
  return (
    <Form.Field>
      <label>Date Range</label>
      <DatesRangeInput
        name="dateRange"
        dateFormat="MM/DD/YYYY"
        icon="calendar alternate outline"
        iconPosition="right"
        allowSameEndDate
        initialDate={MIN_DATE}
        minDate={MIN_DATE}
        maxDate={MAX_DATE}
        placeholder="Date From &ndash; Date To"
        value={dateRange}
        onChange={onChange}
      />
    </Form.Field>
  )
}

export default DatesRangePicker
