import MetricFilter from './MetricFilter'

const Metrics = ({columnFormats, metricOptions, metricCriteria, onChange}) => {
  const handleMetricChange = (e, {metricindex, name, value}) => {
    const newMetricCriteria = metricCriteria.map((criteria, index) => (
      index === metricindex ? {...criteria, [name]: value} : criteria
    ))

    onChange(newMetricCriteria)
  }

  const addMetric = () => {
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
      metricCount={metricCriteria.length}
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
