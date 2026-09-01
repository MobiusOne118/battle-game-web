"use client"

import { useState, useEffect } from 'react'
import { Unit } from '@/components/units-table/units-schema'
import TableComponent from '@/components/units-table/table-component'

const url = 'http://localhost:8080/units'

export default function UnitsTable() {
  const [units, setUnits] = useState<Unit[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch")
          return res.json()
      })
      .then(data => setUnits(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  const LoadingContent = () => {
    return(
      <div>
        LOADING
      </div>
    )  
  }

  const ErrorMessage = () => {
    return (
      <div>
        Error
        <div>
          {error}
        </div>
      </div>
    )
  }

  return (
    <div>
      {loading ? <LoadingContent /> : 
      <div>
        {error == null ? 
          <TableComponent unitData={units}/> 
          :
          <ErrorMessage />
        }
      </div>

      }
    </div>
  )
}