import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'
import IconButton from '@mui/icons-material/IosShare'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { getAllProducts, deleteProductById, IMAGE_URL } from '../../api/apiService'
import TablePagination from '@mui/material/TablePagination'
import { CNavLink } from '@coreui/react'
import { red } from '@mui/material/colors'
import { MdModeEdit } from 'react-icons/md'
import { AiTwotoneDelete } from 'react-icons/ai'
import { LiaEdit } from 'react-icons/lia'

const Product = () => {
    const [products, setProducts] = useState([])
    const [checkDeleteProduct, setCheckDeleteProduct] = useState(false)
    const [page, setPage] = useState(0) // Thêm state cho trang hiện tại
    const [rowsPerPage, setRowsPerPage] = useState(5) // Thêm state cho số hàng trên mỗi trang
    const navigate = useNavigate()
    
    useEffect(() => {
        getAllProducts('products').then((item) => setProducts(item.data))
      }, [navigate])

      const RawHTML = (body, className) => (
        <div
          className={className}
          dangerouslySetInnerHTML={{
            __html: body ? body.replace(/\n/g, '<br />') : '',
          }}
        />
      )

      const handleChangePage = (event, newPage) => {
        setPage(newPage)
      }

      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
      }
    
      const deleteProductByIdHandler = (id) => {
        deleteProductById('products', id).then((item) => {
          console.log(item)
          if (item.status === 204) {
            setCheckDeleteProduct(true)
            setDataChanged(!dataChanged);
            setProducts(products.filter((key) => key.id !== id))
            window.location.reload()
          }
        })
      } 

  return (
    <div style={{ flexGrow: 1, marginTop: 20 }}>
    <div className="flex items-center gap-3 my-2 text-end">
      <Link to={`/Product/add-product`} style={{ textDecoration: 'none' }}>
        <button
          style={{
            border: '2px solid #33FF66',
            color: '#fff', // Chữ màu trắng
            padding: '5px 10px', // Tùy chỉnh padding
            borderRadius: '5px', // Bo góc
            backgroundColor: '#339966',
          }}
        >
          Thêm Sản Phẩm
        </button>
      </Link>
    </div>

    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper style={{ width: '100%', margin: 'auto' }}>
          {checkDeleteProduct && (
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setCheckDeleteProduct(false)
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              Delete successfully
            </Alert>
          )}
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                <TableCell align="center">Id:</TableCell>
                  <TableCell align="center">Tên sản phẩm</TableCell>
                  <TableCell align="center">Giá</TableCell>
                  <TableCell align="center">Giảm giá </TableCell>

                  <TableCell align="center">Số lượng </TableCell>
                  <TableCell align="center">Mô tả </TableCell>
                  <TableCell align="center">Mã số</TableCell>
                  <TableCell align="center">Hình ảnh</TableCell>

                  <TableCell align="center">Danh mục</TableCell>
                  <TableCell align="center">Nhãn hiệu</TableCell>
                  <TableCell align="center">Cập nhật</TableCell>
                  <TableCell align="center">Xoá</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(rowsPerPage > 0
                  ? products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : products
                ).map((row) => {
                  let tagName = row?.tags?.map((i) => i?.name)?.join(', ')
                  let cateName = row?.categories?.map((i) => i?.categoryName)?.join(', ')
                  return (
                    <TableRow key={row.id}>
                        <TableCell width={260} component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell width={260} component="th" scope="row">
                        {row.title}
                      </TableCell>

                      <TableCell align="center">
                        <strong>${Number(row.price).toLocaleString('vi-VN')}.00</strong>
                      </TableCell>
                      <TableCell align="center">
                        <strong>${Number(row.discount).toLocaleString('vi-VN')}.00</strong>
                      </TableCell>

                      <TableCell width={260} component="th" scope="row">
                        {row.quantity}
                      </TableCell>
                      <TableCell width={260} component="th" scope="row">
                        {row.description}
                      </TableCell>

                      <TableCell width={260} component="th" scope="row">
                        {row.shortDescription}
                      </TableCell>

                      <TableCell align="left">
                        <div>
                          {row.galleries && row.galleries.length > 0 && (
                            <img
                              src={IMAGE_URL + row.galleries[0].imagePath}
                              style={{ width: 100 }}
                              alt={row.galleries[0].imagePath}
                            />
                          )}
                        </div>
                      </TableCell>              
                      <TableCell width={100} align="center">
                        {cateName || ''}
                      </TableCell>
                      <TableCell width={100} align="center">
                        {tagName || ''}
                      </TableCell>
                      <TableCell align="center">
                        <Link to={`/Product/edit/product/${row.id}`}>
                          <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            style={{ backgroundColor: '#66FF99', color: 'white', height: '40px' }}
                          >
                            <LiaEdit size={20} />
                          </Button>
                        </Link>
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          onClick={() => deleteProductByIdHandler(row.id)}
                          style={{ backgroundColor: '#CC0000', color: 'white', height: '40px' }}
                        >
                          <AiTwotoneDelete size={20} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={products.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
    </Grid>
  </div>
  )
}

export default Product
