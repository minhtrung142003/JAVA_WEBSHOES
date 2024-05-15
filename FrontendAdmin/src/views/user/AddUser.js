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
import { getAllUsers, addUser } from "../../api/apiService";
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

export default function AddUser() {
  const classes = useStyles();
  const [checkAdd, setCheckAdd] = useState(false);
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAddUser = (event) => {
    event.preventDefault();
    if (
        fullname !== "" &&
        email !== "" &&
        phone_number !== "" &&
        address !== "" &&
        password !== "" 
    ) {
      const user = {
        fullname,
        email,
        phone_number,
        address,
        password,
      };
      console.log(user);
      addUser("users", user).then((item) => {
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
        navigate("/User/all-user");
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
              Thêm Thông tin Khách Hàng
            </Typography>

            <Grid item xs={12} container>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Họ và tên
                </Typography>
                <TextField
                  id="fullname"
                  onChange={(e) => setFullName(e.target.value)}
                  // value={productName}
                  name="fullname"
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
                  // value={productDescription}
                  name="email"
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
                  id="phone_number"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  // value={productDescription}
                  name="phone_number"
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
                  // value={productDescription}
                  name="address"
                  className={classes.txtInput}
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Mật khẩu
                </Typography>
                <TextField
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  // value={productDescription}
                  name="password"
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                />
              </Grid>

              {/*  */}
              <Grid item xs={12} style={{ marginTop: "30px" }}>
                <Button
                  type="button"
                  onClick={handleAddUser}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Thêm Thông tin Khách hàng
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
