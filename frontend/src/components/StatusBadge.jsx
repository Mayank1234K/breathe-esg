function StatusBadge({ status }) {

  let color = 'bg-gray-500'

  if (status === 'approved') {
    color = 'bg-green-500'
  }

  if (status === 'rejected') {
    color = 'bg-red-500'
  }

  if (status === 'pending') {
    color = 'bg-yellow-500'
  }

  return (

    <span
      className={`${color} text-white px-3 py-1 rounded`}
    >
      {status}
    </span>
  )
}

export default StatusBadge