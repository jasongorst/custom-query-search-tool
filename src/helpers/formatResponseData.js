import _ from 'lodash'
import moment from 'moment'

const formatResponseData = (data, columnFormats) => {
  const formatValue = (value, datatype, decimalPlaces) => {
    switch (datatype) {
      case "Number":
        return new Intl.NumberFormat('en-US',
          {useGrouping: false, minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces})
          .format(value)
      case "Percent":
        return new Intl.NumberFormat('en-US',
          {style: 'percent', minimumFractionDigits: decimalPlaces, maximumFractionDigits: decimalPlaces})
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
        return moment(value).format("MM/DD/YYYY")
      case "Time":
        return moment(value).format("hh:mm a")
      default:
        return value
    }
  }

  const tableHeaders = columnFormats.map((column) => column.alias)
  const tableData = data.map((row) =>
    (columnFormats.map((col) =>
        formatValue(row[_.camelCase(col.metricCode)], col.dataType, col.decimalPlaces),
      )
    ))

  return [tableHeaders, tableData]
}

export default formatResponseData
