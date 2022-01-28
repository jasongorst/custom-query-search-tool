import { useEffect, useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { compareOptions } from '../helpers/dropdownOptions'
import { URL_API } from '../config.js'

const MetricFilter = ({metricCriteria, onChange}) => {

  const [metricDefinitions, setMetricDefinitions] = useState([])

  const getData = async (url = "") => {
    const response = await fetch(url, {
      method: "GET",
      cache: "no-cache",
    })
    return response.json()
  }

  useEffect(() => {
    getData(URL_API + "/Search/MetricDefinitions")
      .then((defs) => {
        setMetricDefinitions(defs)
      })
      .catch((error) => {
        console.log("Error fetching metric definitions from API: " + error)
      })
  }, [])

  const metricOptions = metricDefinitions.map((metric, index) => Object(
    {
      key: index,
      text: metric.alias,
      value: metric.metricCode,
    },
  ))

  return (
    <Form.Group widths="equal">
      <Form.Select
        name="metricCode"
        fluid
        label="Metric"
        placeholder="Choose&hellip;"
        options={metricOptions}
        value={metricCriteria.metricCode}
        onChange={onChange}
      />
      <Form.Select
        name="compareType"
        fluid
        label="Comparison"
        placeholder="Choose&hellip;"
        options={compareOptions}
        value={metricCriteria.compareType}
        onChange={onChange}
      />
      <Form.Input
        name="value"
        fluid
        label="Value"
        placeholder=""
        value={metricCriteria.value}
        onChange={onChange}
      />
      <Button.Group basic icon style={{border: 'none'}}>
        <Button compact type="button" icon="minus square outline" style={{padding: 0, border: 'none'}}/>
        <Button compact type="button" icon="plus square outline" style={{padding: 0, border: 'none'}}/>
      </Button.Group>
    </Form.Group>
  )
}

export default MetricFilter
