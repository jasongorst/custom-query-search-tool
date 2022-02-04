const isFormComplete = (formData) => {
  if (formData.restaurantIds === [] || formData.dataRange === "" ||
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
