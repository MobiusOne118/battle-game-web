import { getMechs, UnitType } from "@/server/getMechs"
import GetUnits from '@/server/getUnits'

function formatHeader(key: string) {
  return key.charAt(0).toUpperCase() + key.slice(1)
}

export default function UnitTable() {
  const mechs = GetUnits()
  if (!mechs) {
    console.error("UnitTable: failed to load unit data")
  }
  const data = mechs || []
  const columns = Array.from(
    new Set(data.flatMap((unit: UnitType) => Object.keys(unit)))
  ) as (keyof UnitType)[]

  return (
    <div className="flex w-full grow px-5">
      <table className="block bg-gray-800 w-full">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{formatHeader(column)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((unit: UnitType, index: number) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column}>{unit[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}