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
import { getAllCategories, addProduct } from "../../api/apiService";
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

export default function Product() {
  const classes = useStyles();
  const [checkAdd, setCheckAdd] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [discount, setDiscount] = useState(null);
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryAll, setCategoryAll] = useState([]);
  const [tagAll, setTagAll] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const navigate = useNavigate();
  const handleResetImages = () => {
    setSelectedImages([]);
    setImageFiles([]);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryData = await getAllCategories("categories");
        setCategoryAll(categoryData.data);
        const tagData = await getAllCategories("tags");
        setTagAll(tagData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleUploadImages = async (id) => {
    const formData = new FormData();
    imageFiles.forEach((image) => {
      formData.append("files", image);
    });
    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });

    try {
      const response = await axios.post(
        `http://localhost:8080/api/galleries/uploadImages/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Đặt header Content-Type là multipart/form-data
          },
        }
      );

      console.log("added ga", response);
      if (response.status === 200) {
        setCheckAdd(true); // Nếu upload thành công, setCheckAdd thành true
      } else {
        alert("Bạn chưa nhập đủ thông tin!"); // Nếu có lỗi, hiển thị thông báo
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Đã xảy ra lỗi khi upload ảnh!"); // Xử lý khi có lỗi xảy ra trong quá trình upload
    }
  };
  const handleAddProduct = (event) => {
    event.preventDefault();

    if (
      title !== "" &&
      description !== "" &&
      price !== 0 &&
      discount !== 0 &&
      categories.length > 0
    ) {
      const product = {
        title,
        price,
        discount,
        description,
        quantity,
        shortDescription,
        categories: categories.map((c) => ({ id: c })),
        tags: tags.map((c) => ({ id: c })),
      };
      console.log(product);
      console.log("images", selectedImages);
      addProduct("products", product).then((item) => {
        console.log("added", item);
        if (item.status === 201) {
          handleUploadImages(item.data.id);
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
        navigate("/Product/all-product");
      }, 1000); // Thời gian chờ trước khi chuyển hướng (miliseconds)

      // Xóa timeout khi component unmount hoặc khi checkUpdate thay đổi
      return () => clearTimeout(timeout);
    }
  }, [checkAdd, navigate]);
  const handleChangeCategories = (event) => {
    const selectedIds = event.target.value;
    console.log(selectedIds);
    setCategories(selectedIds);
  };
  // published
  const handlePublishedChange = (event, newPublished) => {
    if (newPublished !== null) {
      setPublished(newPublished === 'true');
    }
  };
  // 
  const handleChangeTags = (event) => {
    const selectedIds = event.target.value;
    setTags(selectedIds);
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    const imagesArray = [];
    const filesArray = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      reader.onloadend = () => {
        imagesArray.push(reader.result);
        if (imagesArray.length === files.length) {
          setSelectedImages([...selectedImages, ...imagesArray]); // Cập nhật mảng hiển thị hình ảnh
          setImageFiles([...imageFiles, ...filesArray]); // Cập nhật mảng các file hình ảnh

          // Sắp xếp lại mảng selectedImages để đảm bảo thứ tự đún
        }
      };

      if (file) {
        reader.readAsDataURL(file);
        filesArray.push(file); // Thêm file vào mảng các file
      }
    }
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h4">
              Thêm sản phẩm
            </Typography>

            <Grid item xs={12} container>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Sản phẩm
                </Typography>
                <TextField
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                  // value={productName}
                  name="title"
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                />
              </Grid>

              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Giá tiền
                </Typography>
                <TextField
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}
                  // value={regularPrice}
                  name="price"
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Giảm giá
                </Typography>
                <TextField
                  id="discount"
                  onChange={(e) => setDiscount(e.target.value)}
                  // value={discountPrice}
                  name="discount"
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                />
              </Grid>

              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  quantity
                </Typography>
                <TextField
                  id="quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                  // value={regularPrice}
                  name="quantity"
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Mô tả sản phẩm
                </Typography>
                <TextField
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                  // value={productDescription}
                  name="description"
                  className={classes.txtInput}
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Mã số 
                </Typography>
                <TextField
                  id="shortDescription"
                  onChange={(e) => setShortDescription(e.target.value)}
                  // value={productDescription}
                  name="shortDescription"
                  className={classes.txtInput}
                  multiline
                  rows={4}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Chọn danh mục
                </Typography>
                <TextField
                  id="categories"
                  name="categories"
                  select
                  value={categories}
                  onChange={handleChangeCategories}
                  SelectProps={{
                    multiple: true,
                    renderValue: (selected) => {
                      const selectedCategories = selected.map((id) => {
                        const category = categoryAll.find(
                          (category) => category.id === id
                        );
                        return category ? category.categoryName : "";
                      });
                      return selectedCategories.join(", ");
                    },
                  }}
                  variant="outlined"
                  className={classes.txtInput}
                >
                  {categoryAll.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.categoryName}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Chọn thương hiệu
                </Typography>
                <TextField
                  id="tags"
                  name="tags"
                  select
                  value={tags}
                  onChange={handleChangeTags}
                  SelectProps={{
                    multiple: true,
                    renderValue: (selected) => {
                      const selectedCategories = selected.map((id) => {
                        const category = tagAll.find(
                          (category) => category.id === id
                        );
                        return category ? category.name : "";
                      });
                      return selectedCategories.join(", ");
                    },
                  }}
                  variant="outlined"
                  className={classes.txtInput}
                >
                  {tagAll.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  id="imageInput"
                />
                <label htmlFor="imageInput">
                  <Button component="span">Chọn hình ảnh</Button>
                  <Button
                    type="button"
                    onClick={handleResetImages}
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                  >
                    Làm mới ảnh
                  </Button>
                </label>

                {selectedImages.map((image, index) => (
                  <div key={index}>
                    <Image src={image} alt={`Selected ${index}`} width={80} />
                  </div>
                ))}
              </div>
              <Grid item xs={12} style={{ marginTop: "30px" }}>
                <Button
                  type="button"
                  onClick={handleAddProduct}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Thêm Sản Phẩm
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
