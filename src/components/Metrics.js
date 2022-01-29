import React, { useState } from 'react'
import MetricFilter from './MetricFilter'

const Metrics = ({metricDefinitions, metricOptions, metricCriteria, onChange}) => {
  const [metricCount, setMetricCount] = useState(2)

  const handleMetricChange = (e, {metricIndex, name, value}) => {
    let newMetricCriteria = []

    for (let i = 0; i < metricCount; i++) {
      newMetricCriteria.push((i === metricIndex) ? (
        {...metricCriteria[i], [name]: value}
      ) : (
        metricCriteria[i]
      ))
    }

    onChange(newMetricCriteria)
  }

  let metricFilters = []
  for (let i = 0; i < metricCount; i++) {
    metricFilters.push(
      <MetricFilter
        key={i}
        metricIndex={i}
        metricDefinitions={metricDefinitions}
        metricOptions={metricOptions}
        metricCriteria={metricCriteria[i]}
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
