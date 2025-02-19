import { useTable } from 'react-table'

const Session = ({ columns, data, year, sessionIndex, setPlan, plan }) => {

  const updateMyData = (rowIndex, columnId, value) => {
    const newPlan = {...plan}
    const newSession = newPlan.years[year][sessionIndex]
    const editedCourse = newSession.courses[rowIndex]
    editedCourse[columnId] = value
    console.log(newPlan);
    setPlan(newPlan)
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    updateMyData
  })

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Session