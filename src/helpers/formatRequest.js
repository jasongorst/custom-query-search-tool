import moment from 'moment'

const formatRequest = ({restaurantIds, dateRange, fromHour, toHour, metricCriteria}, columnFormats) => {
  const DATE_FORMAT = "MM/DD/YYYY"
  const TIME_FORMAT = "hh:mm a"
  const HOUR_FORMAT = "H"

  const [fromDate, toDate] = dateRange.split(' - ').map((date) => moment(date, DATE_FORMAT).toISOString())

  fromHour = parseInt(moment(fromHour, TIME_FORMAT).format(HOUR_FORMAT))
  toHour = parseInt(moment(toHour, TIME_FORMAT).format(HOUR_FORMAT))

  // assume toHour is on the following day if it's less than fromHour
  if (toHour < fromHour) {
    toHour += 24
  }

  const getValueFormat = (metricCode) => {
    return columnFormats.find((col) => col.metricCode === metricCode)
  }

  // format value properties in metricCriteria
  metricCriteria = metricCriteria.map((criteria) => {
    const format = getValueFormat(criteria.metricCode)
    let value = parseFloat(criteria.value)

    if (format.dataType === "Percent") {
      value = value / 100
    }

    value = parseFloat(value.toFixed(format.decimalPlaces))

    return {
      ...criteria,
      value: value,
    }
  })

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