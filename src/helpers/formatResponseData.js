const formatResponseData = (data) => {
  const tableHeaders = Object.keys(data[0])
  const tableData = data.map((row) => Object.values(row))

  return [tableHeaders, tableData]
}

export default formatResponseData
