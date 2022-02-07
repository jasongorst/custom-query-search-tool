import { Pagination } from 'semantic-ui-react'

const DataPaginate = ({rows, page, perPage, handlePageChange}) => {
  return (
    <>
      {rows > perPage && <Pagination
        boundaryRange={1}
        siblingRange={2}
        firstItem={null}
        lastItem={null}
        totalPages={Math.ceil(rows / perPage)}
        activePage={page}
        onPageChange={handlePageChange}
      />}
    </>
  )
}

export default DataPaginate
