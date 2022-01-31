import React, { useState } from 'react'
import MetricFilter from './MetricFilter'

const Metrics = ({columnFormats, metricOptions, metricCriteria, onChange}) => {
  const [metricCount, setMetricCount] = useState(1)

  const handleMetricChange = (e, {metricindex, name, value}) => {
    const newMetricCriteria = metricCriteria.map((criteria, index) => (
      index === metricindex ? {...criteria, [name]: value} : criteria
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

  const dropMetric = (e, {metricindex}) => {
    setMetricCount(metricCount - 1)

    const newMetricCriteria = metricCriteria.filter((criteria, index) => index !== metricindex)
    onChange(newMetricCriteria)
  }

  const metricFilters = metricCriteria.map((criteria, index) => (
    <MetricFilter
      key={index}
      metricindex={index}
      columnFormats={columnFormats}
      metricOptions={metricOptions}
      metricCriteria={metricCriteria[index]}
      metricCount={metricCount}
      onChange={handleMetricChange}
      addMetric={addMetric}
      dropMetric={dropMetric}
    />
  ))

  return (
    <div>
      {metricFilters}
    </div>
  )
}

export default Metrics
