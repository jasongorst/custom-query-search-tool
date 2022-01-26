import moment from 'moment'

const formatRequest = ({restaurantIds, dateRange, fromHour, toHour, metricCriteria}) => {
  const DATE_FORMAT = "MM/DD/YYYY"
  const TIME_FORMAT = "hh:mm a"
  const HOUR_FORMAT = "H"

  var [fromDate, toDate] = dateRange.split(' - ').map((date) => moment(date, DATE_FORMAT).toISOString())

  fromHour = parseInt(moment(fromHour, TIME_FORMAT).format(HOUR_FORMAT))
  toHour = parseInt(moment(toHour, TIME_FORMAT).format(HOUR_FORMAT))

  // assume toHour is on the following day if it's less than fromHour
  if (toHour < fromHour) {
    toHour += 24
  }

  metricCriteria = [
    {
      ...metricCriteria,
      value: parseFloat(metricCriteria.value),
    },
  ]

  return JSON.stringify(
    {
      restaurantIds: restaurantIds,
      fromDate: fromDate,
      toDate: toDate,
      fromHour: fromHour,
      toHour: toHour,
      metricCriteria: metricCriteria,
    },
  )
}

export default formatRequest