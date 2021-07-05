export default function () {
  const data = new Date()
  const year = data.getFullYear().toString()
  const month = parseInt(data.getMonth().toString()) + 1
  const day = data.getDate().toString()
  return year + '年' + month + '月' + day + '日'
}
