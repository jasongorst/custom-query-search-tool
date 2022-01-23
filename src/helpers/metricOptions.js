import { metricDefinitions } from './metricDefinitions'

export const metricOptions = metricDefinitions.map((def, index) => {
  return (
    Object({
    key: index,
    text: def.alias,
    value: def.metricCode
    })
  )
})
