import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
// import {  ToggleButton, ToggleButtonGroup } from '@material-ui/core';
import { CheckBox } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { getAllOrderItems, addOrderItem } from "../../api/apiService";
import MenuItem from "@mui/material/MenuItem";
import { Image } from "react-bootstrap";
import axios from "axios";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
// import { Checkbox } from "@mui/material";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 600,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  txtInput: {
    width: "98%",
    margin: "10px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AddOrderItem() {
  const classes = useStyles();
  const [checkAdd, setCheckAdd] = useState(false);
  const [product, setProduct] = useState("");
  const [order, setOrder] = useState("");
  const navigate = useNavigate();

  const handleAddOrderItem = (event) => {
    event.preventDefault();
    if (
        product.id !== "" &&
        order.id !== "" 
    ) {
      const orderItem = {
        product: product.id,
        order: order.id
      };
      console.log(orderItem);
      addOrderItem("orderItems", orderItem).then((item) => {
        console.log("added", item);
        if (item.status === 201) {
          setCheckAdd(true);
        } else {
          alert("Bạn chưa nhập đủ thông tin!");
        }
      });
    } else {
      alert("Bạn chưa nhập đủ thông tin!");
    }
  };
  useEffect(() => {
    if (checkAdd) {
      const timeout = setTimeout(() => {
        navigate("/OrderItem/all-orderItem");
      }, 1000); // Thời gian chờ trước khi chuyển hướng (miliseconds)

      // Xóa timeout khi component unmount hoặc khi checkUpdate thay đổi
      return () => clearTimeout(timeout);
    }
  }, [checkAdd, navigate]);
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h4">
              Thêm Chi tiết đơn hàng
            </Typography>

            <Grid item xs={12} container>

            <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Id đơn hàng
                </Typography>
                <TextField
                  id="order"
                  onChange={(e) => setOrder(e.target.value)}
                  // value={productName}
                  name="order"
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Id sản phẩm
                </Typography>
                <TextField
                  id="product"
                  onChange={(e) => setProduct(e.target.value)}
                  // value={productName}
                  name="product"
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                />
              </Grid>

            

              {/*  */}
              <Grid item xs={12} style={{ marginTop: "30px" }}>
                <Button
                  type="button"
                  onClick={handleAddOrderItem}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Thêm Chi tiết đơn hàng
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
