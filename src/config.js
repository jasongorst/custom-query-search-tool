import moment from "moment"

export const URL_API = "https://customsearchquerytoolapi.azurewebsites.net"

export const MIN_DATE = moment("2021-10-01")
export const MAX_DATE = moment("2021-10-26")

export const defaultColumns = [
  {
    metricCode: "restaurantId",
    alias: "Restaurant ID",
    datatype: "Number",
    decimalPlaces: 0,
  },
  {
    metricCode: "busDt",
    alias: "Transaction Date",
    datatype: "Date",
    decimalPlaces: 0,
  },
  {
    metricCode: "orderTime",
    alias: "Transaction Time",
    datatype: "Time",
    decimalPlaces: 0,
  },
  {
    metricCode: "orderNumber",
    alias: "Ticket Number",
    datatype: "Number",
    decimalPlaces: 0,
  },
]
