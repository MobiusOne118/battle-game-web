import { getMechs, UnitType } from "@/server/getMechs"

export default async function UnitTable() {
  const data = await getMechs() || []
  const tableRowStyle = ""

  return (
    <div className="flex w-full grow px-5">
      <table className="block bg-gray-800 w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {data.map((unit: UnitType) => (
            <tr key={unit.name}>
              <td>{unit.name}</td>
              <td>{unit.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}