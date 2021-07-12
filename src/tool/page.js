export default function (val, cpage, psize) {
  // onPagination() {
  //   this.tableView = this.logList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
  // },
  // handleCurrentChange(newCurrentPage) {
  //   this.currentPage = newCurrentPage
  //   this.onPagination()
  // },
  // handleSizeChange(newSize) {
  //   this.pageSize = newSize
  //   this.onPagination()
  // }
  return val.slice((cpage - 1) * psize, cpage * psize)
}
