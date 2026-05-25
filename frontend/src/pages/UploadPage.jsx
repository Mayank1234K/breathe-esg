import Navbar from '../components/Navbar'

import UploadCard from '../components/UploadCard'


function UploadPage() {

  return (

    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-8">

        <h1 className="text-4xl font-bold mb-8">

          Upload ESG Data

        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <UploadCard
            title="Upload SAP Fuel Data"
            endpoint="ingestion/upload/sap/"
          />

          <UploadCard
            title="Upload Utility Data"
            endpoint="ingestion/upload/utility/"
          />

          <UploadCard
            title="Upload Travel Data"
            endpoint="ingestion/upload/travel/"
          />

        </div>

      </div>

    </div>
  )
}

export default UploadPage