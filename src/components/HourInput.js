import { TimeInput } from 'semantic-ui-calendar-react'

const HourInput = ({name, placeholder, value, onChange}) => {
  return (
    <TimeInput
      fluid
      disableMinute
      icon="clock outline"
      timeFormat="ampm"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default HourInput
