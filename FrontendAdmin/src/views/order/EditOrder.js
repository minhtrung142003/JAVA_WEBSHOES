import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { editOrder, getOrderById } from '../../api/apiService'
import { MenuItem, Select } from '@mui/material'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 20,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 600,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
    },
    txtInput: {
        width: '98%',
        margin: '10px',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

const EditOrder = () => {
    const classes = useStyles()
    const [checkUpdate, setCheckUpdate] = useState(false)
    const { id: idOrder } = useParams()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [totalPrice, setTotalPrice] = useState("");
    const [status, setStatus] = useState("true");
    const navigate = useNavigate()

    // get data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const order = await getOrderById('orders', idOrder)
                console.log(order.data)
                setFirstName(order.data.firstName)
                setLastName(order.data.lastName)
                setUserName(order.data.userName)
                setEmail(order.data.email)
                setPhone(order.data.phone)
                setAddress(order.data.address)
                setTotalPrice(order.data.totalPrice)
                setStatus(order.data.status)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [idOrder])

    // handle edit order
    const handleEditOrder = async (event) => {
        event.preventDefault()
        if (
            firstName !== "" &&
            lastName !== "" &&
            userName !== "" &&
            email !== "" &&
            phone !== "" &&
            address !== "" &&
            totalPrice !== ""

        ) {
            const order = {
                firstName,
                lastName,
                userName,
                email,
                phone,
                address,
                totalPrice,
                status: status,
            }
            console.log(order)
            try {
                const editedOrder = await editOrder(`orders/${idOrder}`, order)
                if (editedOrder.status === 200) {
                    setCheckUpdate(true)
                } else {
                    alert('Bạn chưa nhập đủ thông tin!')
                }
            } catch (error) {
                console.error('Error editing order:', error)
            }
        }
    }

    // navigate after update
    useEffect(() => {
        if (checkUpdate) {
            const timeout = setTimeout(() => {
                navigate('/Order/all-order')
            }, 1000)
            return () => clearTimeout(timeout)
        }
    }, [checkUpdate, navigate])

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography className={classes.title} variant="h4">
                            Cập Nhật Đơn Hàng
                        </Typography>
                        <Grid item xs={12} container>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant="subtitle1">
                                    Họ
                                </Typography>
                                <TextField
                                    id="lastName"
                                    onChange={(e) => setLastName(e.target.value)}
                                    value={lastName}
                                    name="lastName"
                                    variant="outlined"
                                    className={classes.txtInput}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant="subtitle1">
                                    Tên
                                </Typography>
                                <TextField
                                    id="firstName"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    value={firstName}
                                    name="firstName"
                                    variant="outlined"
                                    className={classes.txtInput}
                                    size="small"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography gutterBottom variant="subtitle1">
                                    Họ và tên
                                </Typography>
                                <TextField
                                    id="userName"
                                    onChange={(e) => setUserName(e.target.value)}
                                    value={userName}
                                    name="userName"
                                    variant="outlined"
                                    className={classes.txtInput}
                                    size="small"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography gutterBottom variant="subtitle1">
                                    Số điện thoại
                                </Typography>
                                <TextField
                                    id="phone"
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={[phone]}
                                    name="phone"
                                    variant="outlined"
                                    className={classes.txtInput}
                                    size="small"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography gutterBottom variant="subtitle1">
                                    Email
                                </Typography>
                                <TextField
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    name="email"
                                    variant="outlined"
                                    className={classes.txtInput}
                                    size="small"

                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography gutterBottom variant="subtitle1">
                                    Địa chỉ
                                </Typography>
                                <TextField
                                    id="address"
                                    onChange={(e) => setAddress(e.target.value)}
                                    value={address}
                                    name="address"
                                    className={classes.txtInput}
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography gutterBottom variant="subtitle1">
                                    Tổng tiền
                                </Typography>
                                <TextField
                                    id="totalPrice"
                                    onChange={(e) => setTotalPrice(e.target.value)}
                                    value={totalPrice}
                                    name="totalPrice"
                                    variant="outlined"
                                    className={classes.txtInput}
                                    size="small"
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Typography gutterBottom variant="subtitle1">
                                    Trạng thái đơn hàng
                                </Typography>
                                <Select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    variant="outlined"
                                    className={classes.txtInput}
                                    size="small"
                                    fullWidth
                                >
                                    <MenuItem value="true">Chưa thanh toán</MenuItem>
                                    <MenuItem value="false">Đã thanh toán</MenuItem>
                                </Select>
                            </Grid>
                            
                            <Grid item xs={12} style={{ marginTop: '30px' }}>
                                <Button
                                    type="button"
                                    onClick={handleEditOrder}
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Cập Nhật Đơn hàng
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default EditOrder
