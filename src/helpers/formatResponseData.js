import _ from 'lodash'
import moment from 'moment'
import { DATE_FORMAT, TIME_FORMAT } from '../config'

const formatResponseData = (data, columnFormats) => {
  const formatValue = (value, dataType, decimalPlaces) => {
    switch (dataType) {
      case "Number":
        return new Intl.NumberFormat('en-US',
          {
            useGrouping: false,
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          })
          .format(value)
      case "Percent":
        return new Intl.NumberFormat('en-US',
          {
            style: 'percent',
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          })
          .format(value)
      case "Money":
        return new Intl.NumberFormat('en-US',
          {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          })
          .format(value)
      case "Date":
        return moment(value).format(DATE_FORMAT)
      case "Time":
        return moment(value).format(TIME_FORMAT)
      default:
        return value
    }
  }

  const tableHeaders = columnFormats.map((column) => column.alias)
  const tableData = data.map((row) => (
    columnFormats.map((column) =>
      formatValue(row[_.camelCase(column.metricCode)], column.dataType, column.decimalPlaces),
    )
  ))

  return [tableHeaders, tableData]
}

export default formatResponseData
