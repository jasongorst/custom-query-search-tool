import _ from 'lodash'

const ids = _.range(1, 11)
export const restaurantIdOptions = ids.map((x) => (
  {
    key: x,
    text: `Restaurant ${x}`,
    value: x,
  }
))

export const compareOptions = [
  {key: 'lt', text: '<', value: 'LessThan'},
  {key: 'lte', text: '<=', value: 'LessThanOrEqual'},
  {key: 'eq', text: '=', value: 'Equal'},
  {key: 'gte', text: '>=', value: 'GreaterThanOrEqual'},
  {key: 'gt', text: '>', value: 'GreaterThan'},
]
