import { Grid, Pagination } from 'semantic-ui-react'

const DataPaginate = ({rows, page, perPage, handlePageChange, handlePerPageChange}) => {
  // const perPageValues = [25, 50, 100]
  // const perPageOptions = perPageValues.map((value) => (
  //   {
  //     key: value,
  //     text: value.toString(),
  //     value: value,
  //   }
  // ))

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={13}>
          <br/>
          {rows > perPage && <Pagination
            boundaryRange={1}
            siblingRange={2}
            firstItem={null}
            lastItem={null}
            totalPages={Math.ceil(rows / perPage)}
            activePage={page}
            onPageChange={handlePageChange}
          />}
        </Grid.Column>
        <Grid.Column width={3}>
          {/*<Form>*/}
          {/*  <Form.Field>*/}
          {/*    <Form.Select*/}
          {/*      name="perPage"*/}
          {/*      label="Items Per Page"*/}
          {/*      fluid*/}
          {/*      placeholder="Items Per Page&hellip;"*/}
          {/*      value={perPage}*/}
          {/*      options={perPageOptions}*/}
          {/*      onChange={handlePerPageChange}*/}
          {/*    />*/}
          {/*  </Form.Field>*/}
          {/*</Form>*/}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default DataPaginate
