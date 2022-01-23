import { Container, Form, Grid } from 'semantic-ui-react'
import MetricFilter from "./MetricFilter"

const FilterForm = ({restaurantIdOptions, metricOptions, measureOptions}) => {
  return (
    <Container>
      <Form>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
              <Form.Select
                fluid
                multiple
                label="Restaurant ID"
                placeholder="Select restaurant id"
                options={restaurantIdOptions}
              />
              <Form.Group widths="equal">
                <Form.Input
                  label="Date Range"
                  type="date"
                  icon="calendar alternate outline"
                />
                <Form.Input
                  label="To"
                  type="date"
                  icon="calendar alternate outline"
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  label="Transaction Time"
                  type="time"
                  placeholder="06:00 AM"
                  icon="clock outline"
                />
                <Form.Input
                  label="To"
                  type="time"
                  placeholder="05:00 AM"
                  icon="clock outline"
                />
              </Form.Group>
              <Form.Button fluid primary>
                Filter Transactions
              </Form.Button>
          </Grid.Column>
          <Grid.Column width={8}>
            <MetricFilter
              metricOptions={metricOptions}
              measureOptions={measureOptions}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Form>
    </Container>
  )
}

export default FilterForm
