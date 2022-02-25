import moment from 'moment'
import { DATE_FORMAT } from '../config'

const isFormComplete = (formData) => {
  const [fromDate, toDate] = formData.dateRange.split(' - ').map((date) => moment(date, DATE_FORMAT).toISOString())

  if (formData.restaurantIds.length === 0 || fromDate === null || toDate === null ||
    formData.fromHour === "" || formData.toHour === ""
  ) {
    return false
  }

  let complete = true
  formData.metricCriteria.forEach((criteria) => {
    if (criteria.metricCode === "" || criteria.compareType === "" ||
      criteria.value === "") {
      complete = false
    }
  })
  return complete
}

export default isFormComplete
