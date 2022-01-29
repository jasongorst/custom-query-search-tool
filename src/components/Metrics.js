import { useState } from 'react'
import MetricFilter from './MetricFilter'

const Metrics = ({metricDefinitions, metricOptions, formData, setFormData}) => {
  const [metricCount, setMetricCount] = useState(2)

  const changeMetricCriteria = (metricIndex, name, value) => {
    var newMetricCriteria = []

    for (var i = 0; i < metricCount; i++) {
      if (i === metricIndex) {
        newMetricCriteria.push(
          {
            ...formData.metricCriteria[i],
            [name]: value,
          },
        )
      } else {
        newMetricCriteria.push(formData.metricCriteria[i])
      }
    }

    return newMetricCriteria
  }

  const handleMetricChange = (e, {metricIndex, name, value}) => {
    setFormData({
      ...formData,
      metricCriteria: changeMetricCriteria(metricIndex, name, value),
    })
  }

  var metricFilters = []
  for (var i = 0; i < metricCount; i++) {
    metricFilters.push(
      <MetricFilter
        key={i}
        metricIndex={i}
        metricDefinitions={metricDefinitions}
        metricOptions={metricOptions}
        metricCriteria={formData.metricCriteria[i]}
        metricCount={metricCount}
        onChange={handleMetricChange}
      />)
  }

  return (
    <div>
      {metricFilters}
    </div>
  )
}

export default Metrics
