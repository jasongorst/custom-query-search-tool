import { Pagination } from 'semantic-ui-react'

const DataPaginate = ({page, totalPages, handlePageChange}) => {
  return (
    <>
      {totalPages > 1 && <Pagination
        boundaryRange={1}
        siblingRange={2}
        firstItem={null}
        lastItem={null}
        totalPages={totalPages}
        activePage={page}
        onPageChange={handlePageChange}
      />}
    </>
  )
}

export default DataPaginate
