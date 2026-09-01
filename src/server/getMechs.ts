export type UnitType = {
  name?: string
  weight?: number
}


//
// Old - Probably should delete
//
const url = 'http://localhost:8080/units'

export async function getMechs() {
  try {
    const res = await fetch(url)

    if(!res.ok) {
      throw new Error(`Status - ${res.status}`)
    }

    const result: UnitType[] = await res.json()
    return result
  } catch(e) {
    console.error(e)
  }
}