import React, { useState } from 'react'
import MetricFilter from './MetricFilter'

const Metrics = ({metricDefinitions, metricOptions, metricCriteria, onChange}) => {
  const [metricCount, setMetricCount] = useState(1)

  const handleMetricChange = (e, {metricIndex, name, value}) => {
    const newMetricCriteria = metricCriteria.map((criteria, index) => (
      index === metricIndex ? {...criteria, [name]: value} : criteria
    ))

    onChange(newMetricCriteria)
  }

  const addMetric = () => {
    setMetricCount(metricCount + 1)

    const newMetricCriteria = [
      ...metricCriteria,
      {
        metricCode: '',
        compareType: '',
        value: '',
      },
    ]
    onChange(newMetricCriteria)
  }

  const dropMetric = (e, {metricIndex}) => {
    setMetricCount(metricCount - 1)

    const newMetricCriteria = metricCriteria.filter((criteria, index) => index !== metricIndex)
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
        addMetric={addMetric}
        dropMetric={dropMetric}
      />)
  }

  return (
    <div>
      {metricFilters}
    </div>
  )
}

export default Metrics
