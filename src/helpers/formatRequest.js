import moment from 'moment'

const formatRequest = (restaurantIds, dateRange, fromTime, toTime, metric) => {
  const DATE_FORMAT = "MM/DD/YYYY"

  var [fromDate, toDate] = dateRange.split(' - ').map((date) => moment(date, DATE_FORMAT).toISOString())

  var fromHour = parseInt(fromTime.slice(0, 2), 10)
  var toHour = parseInt(toTime.slice(0, 2), 10)

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

  return (
    {
      restaurantIds: restaurantIds,
      fromDate: fromDate,
      toDate: toDate,
      fromHour: fromHour,
      toHour: toHour,
      metricCriteria: metricCriteria,
    }
  )
}

export default formatRequest