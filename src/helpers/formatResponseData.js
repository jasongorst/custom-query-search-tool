const formatResponseData = (data, columnFormats) => {
  const lookupAlias = (code) => {
    const column = columnFormats.find((col) => code.toLowerCase() === col.metricCode.toLowerCase())
    return column.alias
  }

  const tableHeaders = Object.keys(data[0]).map((header) => lookupAlias(header))
  const tableData = data.map((row) => Object.values(row))

  return [tableHeaders, tableData]
}

export default formatResponseData
