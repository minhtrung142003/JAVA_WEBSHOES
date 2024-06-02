import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { getAllCategories, addProduct } from "../../api/apiService";
import MenuItem from "@mui/material/MenuItem";
import { Image } from "react-bootstrap";
import axios from "axios";

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
  const [errors, setErrors] = useState({});

  // reset image
  const handleResetImages = () => {
    setSelectedImages([]);
    setImageFiles([]);
  };

  // get data
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

  // upload image to server
  const handleUploadImages = async (id) => {
    const formData = new FormData();
    imageFiles.forEach((image) => {
      formData.append("files", image);
    });

    try {
      const response = await axios.post(
        `http://localhost:8080/api/galleries/uploadImages/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        setCheckAdd(true);
      } else {
        alert("Đã xảy ra lỗi khi upload ảnh!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Đã xảy ra lỗi khi upload ảnh!");
    }
  };

  // check validation
  const validateFields = () => {
    const newErrors = {};
    if (imageFiles.length === 0) {
      newErrors.images = "Bạn phải chọn ít nhất một ảnh.";
    }
    if (isNaN(price) || price === null || price === "") {
      newErrors.price = "Giá tiền phải là số và không được để trống.";
    }
    if (isNaN(discount) || discount === null || discount === "") {
      newErrors.discount = "Giảm giá phải là số và không được để trống.";
    }
    if (isNaN(quantity) || quantity === null || quantity === "") {
      newErrors.quantity = "Số lượng phải là số và không được để trống.";
    }
    if (!title) {
      newErrors.title = "Tên sản phẩm không được để trống.";
    }
    if (!description) {
      newErrors.description = "Mô tả không được để trống.";
    }
    if (categories.length === 0) {
      newErrors.categories = "Bạn phải chọn ít nhất một danh mục.";
    }
    if (tags.length === 0) {
      newErrors.tags = "Bạn phải chọn ít nhất một thương hiệu.";
    }
    if (!shortDescription) {
      newErrors.shortDescription = "Mã số không được để trống.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // handle add product
  const handleAddProduct = (event) => {
    event.preventDefault();
    if (validateFields()) {
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
      addProduct("products", product).then((item) => {
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

  // navigate when update
  useEffect(() => {
    if (checkAdd) {
      const timeout = setTimeout(() => {
        navigate("/Product/all-product");
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [checkAdd, navigate]);

  // add categories
  const handleChangeCategories = (event) => {
    const selectedIds = event.target.value;
    setCategories(selectedIds);
  };

  // add tags
  const handleChangeTags = (event) => {
    const selectedIds = event.target.value;
    setTags(selectedIds);
  };

  // handle choose file images
  const handleFileChange = (event) => {
    const files = event.target.files;
    const imagesArray = [];
    const filesArray = [];
    const acceptedExtensions = ["jpg", "jpeg", "png", "gif"]; 
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      const extension = file.name.split(".").pop().toLowerCase();
      if (!acceptedExtensions.includes(extension)) {
        alert("Chỉ chấp nhận các tệp JPG, JPEG, PNG, GIF.");
        continue; 
      }
      reader.onloadend = () => {
        imagesArray.push(reader.result);
        if (imagesArray.length === files.length) {
          setSelectedImages([...selectedImages, ...imagesArray]);
          setImageFiles([...imageFiles, ...filesArray]);
        }
      };
      if (file) {
        reader.readAsDataURL(file);
        filesArray.push(file);
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
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                  error={!!errors.title}
                  helperText={errors.title}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Giá tiền
                </Typography>
                <TextField
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                  error={!!errors.price}
                  helperText={errors.price}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Giảm giá
                </Typography>
                <TextField
                  id="discount"
                  onChange={(e) => setDiscount(e.target.value)}
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                  error={!!errors.discount}
                  helperText={errors.discount}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Số lượng
                </Typography>
                <TextField
                  id="quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                  error={!!errors.quantity}
                  helperText={errors.quantity}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Mô tả sản phẩm
                </Typography>
                <TextField
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                  className={classes.txtInput}
                  multiline
                  rows={4}
                  variant="outlined"
                  error={!!errors.description}
                  helperText={errors.description}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                Ghi chú
                </Typography>
                <TextField
                  id="shortDescription"
                  onChange={(e) => setShortDescription(e.target.value)}
                  className={classes.txtInput}
                  multiline
                  rows={4}
                  variant="outlined"
                  error={!!errors.shortDescription}
                  helperText={errors.shortDescription}
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
                  error={!!errors.categories}
                  helperText={errors.categories}
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
                      const selectedTags = selected.map((id) => {
                        const tag = tagAll.find((tag) => tag.id === id);
                        return tag ? tag.name : "";
                      });
                      return selectedTags.join(", ");
                    },
                  }}
                  variant="outlined"
                  className={classes.txtInput}
                  error={!!errors.tags}
                  helperText={errors.tags}
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
                {errors.images && (
                  <Typography color="error" variant="subtitle2">
                    {errors.images}
                  </Typography>
                )}
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
