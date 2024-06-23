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
import { useNavigate, useParams } from 'react-router-dom'
import { getAllOrderItems, deleteOrderItemById, IMAGE_URL } from '../../api/apiService'
import TablePagination from '@mui/material/TablePagination'
import { AiTwotoneDelete } from 'react-icons/ai'
const OrderItem = () => {
    const { orderId } = useParams();
    const [orderItems, setOrderItems] = useState([])
    const [checkDeleteOrderItem, setCheckDeleteOrderItem] = useState(false)
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const navigate = useNavigate()
    const [dataChanged, setDataChanged] = useState(false);
    useEffect(() => {
        getAllOrderItems('orderItems').then((item) => {
            const filteredOrderItems = item.data.filter((item) => item.order.id === parseInt(orderId));
            setOrderItems(filteredOrderItems)
        })
    }, [dataChanged, navigate, orderId])

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const deleteOrderItemByIdHandler = (id) => {
        deleteOrderItemById('orderItems', id).then((item) => {
            console.log(item)
            if (item.status === 204) {
                setCheckDeleteOrderItem(true)
                setDataChanged(!dataChanged);
                item.preventDefault();
                setOrderItems(orderItems.filter((key) => key.id !== id))
               
            }
        })
    }

    return (
        <div style={{ flexGrow: 1, marginTop: 20 }}>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper style={{ width: '100%', margin: 'auto' }}>
                        {checkDeleteOrderItem && (
                            <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            setCheckDeleteOrderItem(false)
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
                                        <TableCell align="center" >Id: </TableCell>
                                        <TableCell align="center">Id đơn hàng: </TableCell>
                                        <TableCell align="center" >Id sản phẩm: </TableCell>
                                        <TableCell align="center" >Tên sản phẩm: </TableCell>
                                        <TableCell align="center" >Hình ảnh </TableCell>
                                        <TableCell align="center">Màu </TableCell>
                                        <TableCell align="center" >Kích thước </TableCell>
                                        <TableCell align="center" >Số lượng: </TableCell>
                                        <TableCell align="center" >Giá: </TableCell>
                                        <TableCell align="center" >Tổng cộng: </TableCell>
                                        <TableCell align="center">Xoá</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(rowsPerPage > 0
                                        ? orderItems.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : orderItems
                                    ).map((row) => {
                                        console.log(row.id);

                                        return (
                                            <TableRow key={row.id}>

                                                <TableCell component="th" scope="row" align="center">
                                                    {row.id}
                                                </TableCell>
                                                <TableCell align="center" >
                                                    {row.order?.id || ''}
                                                </TableCell>

                                                <TableCell component="th" scope="row" align="center">
                                                    {row.product?.id}
                                                </TableCell>
                                                <TableCell component="th" scope="row" align="center">
                                                    {row.product?.title}
                                                </TableCell>

                                                <TableCell align="left">
                                                    <div>
                                                        {row.product?.galleries && row.product?.galleries.length > 0 && (
                                                            <img
                                                                src={IMAGE_URL + row.product?.galleries[0].imagePath}
                                                                style={{ width: 100 }}
                                                                alt={row.product?.galleries[0].imagePath}
                                                            />
                                                        )}
                                                    </div>
                                                </TableCell>

                                                <TableCell component="th" scope="row" align="center">
                                                    {row.color?.name}
                                                </TableCell>

                                                <TableCell component="th" scope="row" align="center">
                                                    {row.size?.name}
                                                </TableCell>

                                                <TableCell component="th" scope="row" align="center">
                                                    {row?.quantity}
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {row?.product?.price.toLocaleString()}VNĐ
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    {(row.product?.price * row?.quantity).toLocaleString()}VNĐ
                                                </TableCell>

                                                <TableCell align="center">
                                                    <Button
                                                        size="small"
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={() => deleteOrderItemByIdHandler(row.id)}
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
                            count={orderItems.length}
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

export default OrderItem
