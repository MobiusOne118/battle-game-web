import { Unit } from '@/components/units-table/units-schema'

type TableComponentProps = {
  unitData: Unit[]
}

export default function TableComponent({ unitData }: TableComponentProps) {

  const columns = Array.from(
  new Set(unitData.flatMap((unit) => Object.keys(unit)))
  ) as (keyof Unit)[]

  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {unitData.map((unit, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column}>{unit[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}