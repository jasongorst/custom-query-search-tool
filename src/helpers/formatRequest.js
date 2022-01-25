import moment from 'moment'

const formatRequest = (restaurantIds, dateRange, fromTime, toTime, metric) => {
  const DATE_FORMAT = "MM/DD/YYYY"
  const TIME_FORMAT = "hh:mm a"
  const HOUR_FORMAT = "H"

  var [fromDate, toDate] = dateRange.split(' - ').map((date) => moment(date, DATE_FORMAT).toISOString())

  var fromHour = parseInt(moment(fromTime, TIME_FORMAT).format(HOUR_FORMAT))
  var toHour = parseInt(moment(toTime, TIME_FORMAT).format(HOUR_FORMAT))

  // assume toHour is on the following day if it's less than fromHour
  if (toHour < fromHour) {
    toHour += 24
  }

  var metricCriteria = [
    {
      metricCode: metric.metric,
      compareType: metric.measure,
      value: parseFloat(metric.value),
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