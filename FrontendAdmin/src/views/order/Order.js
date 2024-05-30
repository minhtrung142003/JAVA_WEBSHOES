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
import { getAllOrders, deleteOrderById } from '../../api/apiService'
import TablePagination from '@mui/material/TablePagination'
import { CNavLink } from '@coreui/react'
import { red } from '@mui/material/colors'
import { MdModeEdit } from 'react-icons/md'
import { AiTwotoneDelete } from 'react-icons/ai'
import { LiaEdit } from 'react-icons/lia'
const Order = () => {
    const [orders, setOrders] = useState([])
    const [checkDeleteOrder, setCheckDeleteOrder] = useState(false)
    const [page, setPage] = useState(0) // Thêm state cho trang hiện tại
    const [rowsPerPage, setRowsPerPage] = useState(5) // Thêm state cho số hàng trên mỗi trang
    const navigate = useNavigate()
    const [dataChanged, setDataChanged] = useState(false);
    useEffect(() => {
        getAllOrders('orders').then((item) => setOrders(item.data))
    }, [dataChanged, navigate])

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

    const deleteOrderByIdHandler = (id) => {
        deleteOrderById('orders', id).then((item) => {
            console.log(item)
            if (item.status === 204) {
                setCheckDeleteOrder(true)
                setDataChanged(!dataChanged);
                setOrders(orders.filter((key) => key.id !== id))
                // window.location.reload()
            }
        })
    }

    return (
        <div style={{ flexGrow: 1, marginTop: 20 }}>
            <div className="flex items-center gap-3 my-2 text-end">
                <Link to={`/Order/add-order`} style={{ textDecoration: 'none' }}>
                    <button
                        style={{
                            border: '2px solid #33FF66',
                            color: '#fff', // Chữ màu trắng
                            padding: '5px 10px', // Tùy chỉnh padding
                            borderRadius: '5px', // Bo góc
                            backgroundColor: '#339966',
                        }}
                    >
                        Thêm Đơn Hàng
                    </button>
                </Link>
            </div>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper style={{ width: '100%', margin: 'auto' }}>
                        {checkDeleteOrder && (
                            <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setCheckDeleteOrder(false)
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
                                        <TableCell >Id: </TableCell>

                                        <TableCell >Họ: </TableCell>
                                        <TableCell >Tên: </TableCell>
                                        <TableCell >Họ và tên: </TableCell>
                                        <TableCell >Số điện thoại: </TableCell>
                                        <TableCell >email: </TableCell>
                                        <TableCell >Địa chỉ: </TableCell>
                                        <TableCell >Tổng tiền: </TableCell>
                                        <TableCell >Trạng thái đặt hàng: </TableCell>
                                        <TableCell align="center">Cập nhật</TableCell>
                                        <TableCell align="center">Xoá</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(rowsPerPage > 0
                                        ? orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : orders
                                    ).map((row) => {
                                        return (
                                            <TableRow key={row.id}>

                                                <TableCell width={260} component="th" scope="row">
                                                    {row.id}
                                                </TableCell>
                                                <TableCell width={260} component="th" scope="row">
                                                    {row.lastName}
                                                </TableCell>

                                                <TableCell width={260} component="th" scope="row">
                                                    {row.firstName}
                                                </TableCell>
                                                <TableCell width={260} component="th" scope="row">
                                                    {row.userName}
                                                </TableCell>
                                                <TableCell width={260} component="th" scope="row">
                                                    {row.phone}
                                                </TableCell> <TableCell width={260} component="th" scope="row">
                                                    {row.email}
                                                </TableCell> <TableCell width={260} component="th" scope="row">
                                                    {row.address}
                                                </TableCell>
                                                <TableCell width={260} component="th" scope="row">
                                                    {row.totalPrice}
                                                </TableCell>

                                                <TableCell width={260} component="th" scope="row">
                                                    {row.paymentMethod  === 'shipcod' ? 'Chưa thanh toán' : 'Đã thanh toán'}
                                                </TableCell>



                                                <TableCell align="center">
                                                    <Link to={`/Order/edit/order/${row.id}`}>
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
                                                        onClick={() => deleteOrderByIdHandler(row.id)}
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
                            count={orders.length}
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

export default Order
