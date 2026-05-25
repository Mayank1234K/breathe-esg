import { useEffect, useState } from 'react'

import API from '../api/axios'

import Navbar from '../components/Navbar'
import UploadCard from '../components/UploadCard'
import RecordTable from '../components/RecordTable'


function DashboardPage() {

  const [records, setRecords] = useState([])

  const [selectedRecords, setSelectedRecords] = useState([])


  const fetchRecords = async () => {

    const response = await API.get(
      'emissions/all/'
    )

    setRecords(response.data)
  }


  useEffect(() => {

    fetchRecords()

  }, [])


  const approveRecord = async (id) => {

    await API.post(
      `reviews/approve/${id}/`
    )

    fetchRecords()
  }


  const toggleSelectRecord = (id) => {

    if (selectedRecords.includes(id)) {

      setSelectedRecords(
        selectedRecords.filter(
          (recordId) => recordId !== id
        )
      )

    } else {

      setSelectedRecords([
        ...selectedRecords,
        id
      ])
    }
  }


  const bulkDelete = async () => {

    await API.post(
      'reviews/bulk-delete/',
      {
        ids: selectedRecords
      }
    )

    setSelectedRecords([])

    fetchRecords()
  }


  const totalEmissions = records.reduce(
    (sum, record) => sum + Number(record.co2e_kg),
    0
  )


  const approvedRecords = records.filter(
    (record) => record.status === 'approved'
  ).length


  const flaggedRecords = records.filter(
    (record) => record.is_flagged
  ).length


  return (

    <div
  className="min-h-screen bg-cover bg-center bg-fixed relative"
  style={{
    backgroundImage:
      "url('https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg')"
  }}
>

  <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>

  <div className="relative z-10">
      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-5xl font-extrabold text-gray-900">
              ESG Review Dashboard
            </h1>

            <p className="text-gray-500 mt-3 text-lg">
              Multi-source emissions ingestion and analyst verification workflow.
            </p>

          </div>

          <button
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-2xl shadow-lg transition-all duration-300 font-semibold"
            onClick={bulkDelete}
          >
            Delete Selected
          </button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-200">

            <p className="text-gray-500 text-sm uppercase tracking-wide">
              Total Emissions
            </p>

            <h2 className="text-4xl font-extrabold text-emerald-600 mt-3">

              {totalEmissions.toFixed(2)}

            </h2>

            <p className="text-gray-400 mt-2 text-sm">
              kg CO2e Processed
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-200">

            <p className="text-gray-500 text-sm uppercase tracking-wide">
              Approved Records
            </p>

            <h2 className="text-4xl font-extrabold text-blue-600 mt-3">

              {approvedRecords}

            </h2>

            <p className="text-gray-400 mt-2 text-sm">
              Analyst Approved
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-200">

            <p className="text-gray-500 text-sm uppercase tracking-wide">
              Flagged Records
            </p>

            <h2 className="text-4xl font-extrabold text-red-500 mt-3">

              {flaggedRecords}

            </h2>

            <p className="text-gray-400 mt-2 text-sm">
              Requires Review
            </p>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          <UploadCard
            title="SAP Fuel Data"
            endpoint="ingestion/upload/sap/"
            fetchRecords={fetchRecords}
          />

          <UploadCard
            title="Utility Electricity"
            endpoint="ingestion/upload/utility/"
            fetchRecords={fetchRecords}
          />

          <UploadCard
            title="Travel Emissions"
            endpoint="ingestion/upload/travel/"
            fetchRecords={fetchRecords}
          />

        </div>

        <RecordTable
          records={records}
          approveRecord={approveRecord}
          selectedRecords={selectedRecords}
          toggleSelectRecord={toggleSelectRecord}
        />

      </div>

    </div>
    </div>
  )
}

export default DashboardPage