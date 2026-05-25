import StatusBadge from './StatusBadge'

function RecordTable({
  records,
  approveRecord,
  selectedRecords,
  toggleSelectRecord,
}) {

  return (

    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">

      <div className="px-8 py-6 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-gray-50 to-white">

        <div>

          <h2 className="text-2xl font-bold text-gray-800">
            Analyst Review Dashboard
          </h2>

          <p className="text-gray-500 mt-1">
            Review, approve and audit imported ESG activity records.
          </p>

        </div>

        <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-xl font-semibold">

          {records.length} Records

        </div>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="bg-gray-100 text-gray-700 uppercase text-sm tracking-wide">

              <th className="p-4">Select</th>
              <th className="p-4">Scope</th>
              <th className="p-4">Category</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">CO2e</th>
              <th className="p-4">Flagged</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>

            </tr>

          </thead>

          <tbody>

            {records.map((record) => (

              <tr
                key={record.id}
                className="border-b hover:bg-gray-50 transition-all duration-200 text-center"
              >

                <td className="p-4">

                  <input
                    type="checkbox"
                    checked={selectedRecords.includes(record.id)}
                    onChange={() => toggleSelectRecord(record.id)}
                    className="w-4 h-4 accent-emerald-500"
                  />

                </td>

                <td className="p-4 font-semibold text-gray-700">
                  {record.scope}
                </td>

                <td className="p-4 text-gray-600">
                  {record.category}
                </td>

                <td className="p-4 font-medium">
                  {record.quantity}
                </td>

                <td className="p-4 font-semibold text-emerald-600">
                  {record.co2e_kg}
                </td>

                <td className="p-4">
                  {record.is_flagged ? '⚠️ Yes' : 'No'}
                </td>

                <td className="p-4">

                  <StatusBadge status={record.status} />

                </td>

                <td className="p-4">

                  {
                    record.status !== 'approved' && (

                      <button
                        className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-xl shadow-md transition-all duration-300 font-medium"
                        onClick={() => approveRecord(record.id)}
                      >
                        Approve
                      </button>

                    )
                  }

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default RecordTable