import _ from 'lodash'
import { metricDefinitions } from './metricDefinitions'

const ids = _.range(1, 11)
export const restaurantIdOptions = ids.map((x) => Object(
  {
    key: x,
    text: `Restaurant ${x}`,
    value: x
  }
))

export const metricOptions = metricDefinitions.map((def, index) => Object(
  {
      key: index,
      text: def.alias,
      value: def.metricCode
    }
))

export const compareOptions = [
  {key: 'lt', text: '<', value: 'LessThan'},
  {key: 'lte', text: '<=', value: 'LessThanOrEqual'},
  {key: 'eq', text: '=', value: 'Equal'},
  {key: 'gte', text: '>=', value: 'GreaterThanOrEqual'},
  {key: 'gt', text: '>', value: 'GreaterThan'},
]
