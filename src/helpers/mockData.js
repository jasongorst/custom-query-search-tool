import _ from 'lodash'

const ids = _.range(1, 11)
export const restaurantIdOptions = ids.map((x) => Object(
  {
    key: x,
    text: `Restaurant ${x}`,
    value: x
  }
))

export const measureOptions = [
  { key: 'lt', text: '<', value: 'lt' },
  { key: 'lte', text: '<=', value: 'lte' },
  { key: 'eq', text: '=', value: 'eq' },
  { key: 'gte', text: '>=', value: 'gte' },
  { key: 'gt', text: '>', value: 'gt' }
]

export const tableHeaders = [
  'RestaurantId',
  'BusDt',
  'OrderNumber',
  'OrderTime',
  'TransactionTotalAmount',
  'TransactionNetAmount',
  'ItemSoldQty',
  'BeverageQty',
  'DiscountAmount',
  'ItemDeletedAmount',
  'DiscountRatio',
  'RefundAmount'
]

export const tableData = [
  ['1', '2020-09-22', '5', '2020-09-22 07:23:00', '2.50', '2.32', '2', '0', '0.26', '0.00', '0.104', '0.00'],
  ['1', '2020-09-22', '5', '2020-09-22 07:23:00', '2.50', '2.32', '2', '0', '0.26', '0.00', '0.104', '0.00'],
  ['1', '2020-09-22', '5', '2020-09-22 07:23:00', '2.50', '2.32', '2', '0', '0.26', '0.00', '0.104', '0.00'],
  ['1', '2020-09-22', '5', '2020-09-22 07:23:00', '2.50', '2.32', '2', '0', '0.26', '0.00', '0.104', '0.00'],
  ['1', '2020-09-22', '5', '2020-09-22 07:23:00', '2.50', '2.32', '2', '0', '0.26', '0.00', '0.104', '0.00'],
  ['1', '2020-09-22', '5', '2020-09-22 07:23:00', '2.50', '2.32', '2', '0', '0.26', '0.00', '0.104', '0.00']
]
