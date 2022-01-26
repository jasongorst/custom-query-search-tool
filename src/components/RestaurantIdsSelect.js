import { Form } from 'semantic-ui-react'
import { restaurantIdOptions } from '../helpers/dropdownOptions'

const RestaurantSelect = ({restaurantIds, onRestaurantIdsChange}) => {
  return (
    <Form.Select
      fluid
      multiple
      name="restaurantIds"
      label="Restaurant ID"
      placeholder="Select Restaurant IDs&hellip;"
      options={restaurantIdOptions}
      onChange={onRestaurantIdsChange}
      value={restaurantIds}
    />
  )
}

export default RestaurantSelect
