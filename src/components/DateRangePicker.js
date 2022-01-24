import React from 'react'
import { DatesRangeInput } from 'semantic-ui-calendar-react'

export class DateRangePicker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      date: '',
      time: '',
      dateTime: '',
      datesRange: '',
    }
  }

  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({[name]: value})
    }
  }

  render() {
    return (
      <DatesRangeInput
        name="dateRange"
        placeholder="From &ndash; To"
        value={this.state.datesRange}
        iconPosition="right"
        onChange={this.handleChange}
      />
    )
  }
}
