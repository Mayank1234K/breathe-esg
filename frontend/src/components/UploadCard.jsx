import API from '../api/axios'

function UploadCard({
  title,
  endpoint,
  fetchRecords
}) {

  const handleUpload = async (e) => {

    const file = e.target.files[0]

    const formData = new FormData()

    formData.append('file', file)

    try {

      await API.post(
        endpoint,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      )

      fetchRecords()

      alert('Upload Successful')

    } catch (err) {

      console.log(err)

      alert('Upload Failed')
    }
  }

  return (

    <div className="bg-white rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 p-6 hover:-translate-y-1">

      <div className="flex items-center justify-between mb-5">

        <div>

          <h2 className="text-xl font-bold text-gray-800">
            {title}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            CSV ingestion and normalization
          </p>

        </div>

        <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 text-2xl">

          ⬆

        </div>

      </div>

      <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl p-6 cursor-pointer hover:border-emerald-400 transition-all bg-gray-50">

        <span className="text-gray-600 font-medium mb-2">
          Choose CSV File
        </span>

        <input
          type="file"
          className="hidden"
          onChange={handleUpload}
        />

        <span className="text-xs text-gray-400">
          Click to browse files
        </span>

      </label>

    </div>
  )
}

export default UploadCard