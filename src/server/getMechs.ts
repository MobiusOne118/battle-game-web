export type UnitType = {
  name?: string
  weight?: number
}

const url = 'http://localhost:8080/mechs'

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