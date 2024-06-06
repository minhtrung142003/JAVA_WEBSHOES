import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useNavigate, useParams } from 'react-router-dom'
import MenuItem from '@mui/material/MenuItem'
import { Image } from 'react-bootstrap'
import axios from 'axios'
import { getAllCategories, IMAGE_URL, editProduct, getProductById, getAllColors } from '../../api/apiService'

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

const EditProduct = () => {
  const classes = useStyles()
  const [checkUpdate, setCheckUpdate] = useState(false)
  const { id: idProduct } = useParams()
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(null);
  const [discount, setDiscount] = useState(null);
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [categories, setCategories] = useState([])
  const [categoryAll, setCategoryAll] = useState([])
  const [tagAll, setTagAll] = useState([])
  const [tags, setTags] = useState([])
  const [images, setImages] = useState([])
  const [selectedImages, setSelectedImages] = useState([])
  const [imageFiles, setImageFiles] = useState([])
  const [errors, setErrors] = useState({});
  const [colors, setColors] = useState([]);
  const [selectedColor, setSelectedColor] = useState({});
  const navigate = useNavigate()

  const handleResetImages = () => {
    setSelectedImages([])
    setImageFiles([])
  }

  // get data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await getProductById('products', idProduct)
        console.log(product.data)
        setTitle(product.data.title)
        setPrice(product.data.price)
        setDiscount(product.data.discount)
        setQuantity(product.data.quantity)
        setDescription(product.data.description)
        setShortDescription(product.data.shortDescription)
        setSelectedColor(product.data.colors)
        setCategories(product.data.categories.map((category) => category.id))
        setTags(product.data.tags.map((category) => category.id))
        const categoryData = await getAllCategories('categories')
        setCategoryAll(categoryData.data)
        const tagData = await getAllCategories('tags')
        setTagAll(tagData.data)
        const colorData = await getAllColors('colors')
        setColors(colorData.data)
        console.log(product.data.colors)

      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [idProduct])

  // get data images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/galleries/product/${idProduct}`)
        setImages(response.data)
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    fetchImages()
  }, [idProduct])

  // handle upload image
  const handleUploadImages = async (id) => {
    const formData = new FormData()
    imageFiles.forEach((image) => {
      formData.append('files', image)
    })
    try {
      const response = await axios.post(
        `http://localhost:8080/api/galleries/update/${id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      console.log('added ga', response)
      if (response.status === 200) {
        setCheckUpdate(true)
      } else {
        alert('Bạn chưa nhập đủ thông tin!')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Đã xảy ra lỗi khi upload ảnh!')
    }
  }
  // check validation
  const validateFields = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Vui lòng nhập thông tin.";
    }

    if (!description.trim()) {
      newErrors.description = "Vui lòng nhập thông tin.";
    }

    if (!shortDescription.trim()) {
      newErrors.shortDescription = "Vui lòng nhập thông tin.";
    }

    if (isNaN(price)) {
      newErrors.price = "Giá tiền phải là số.";
    } else if (!price) {
      newErrors.price = "Giá tiền không được để trống.";
    }

    if (isNaN(discount)) {
      newErrors.discount = "Giảm giá phải là số.";
    } else if (!discount) {
      newErrors.discount = "Giảm giá không được để trống.";
    }

    if (isNaN(quantity)) {
      newErrors.quantity = "Số lượng phải là số.";
    } else if (!quantity) {
      newErrors.quantity = "Số lượng không được để trống.";
    }

    if (!selectedColor.id) {
      newErrors.colors = "Màu không được để trống.";
    }

    if (categories.length === 0) {
      newErrors.categories = "Bạn phải chọn ít nhất một danh mục.";
    }
    if (tags.length === 0) {
      newErrors.tags = "Bạn phải chọn ít nhất một thương hiệu.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // handle edit product
  const handleEditProduct = async (event) => {
    event.preventDefault()
    if (
      validateFields()
    ) {
      const product = {
        title,
        price,
        discount,
        quantity,
        description,
        shortDescription,
        colors: { id: selectedColor.id, name: selectedColor.name },
        categories: categories.map((c) => ({ id: c })),
        tags: tags.map((c) => ({ id: c })),
      }
      console.log(product)
      try {
        const editedProduct = await editProduct(`products/${idProduct}`, product)
        if (editedProduct.status === 200) {
          if (imageFiles.length > 0) {
            handleUploadImages(editedProduct.data.id)
          } else {
            setCheckUpdate(true)
          }
        } else {
          alert('Bạn chưa nhập đủ thông tin!')
        }
      } catch (error) {
        console.error('Error editing product:', error)
      }

    }
  }

  // navigate when update
  useEffect(() => {
    if (checkUpdate) {
      const timeout = setTimeout(() => {
        navigate('/Product/all-product')
      }, 1000)
      return () => clearTimeout(timeout)
    }
  }, [checkUpdate, navigate])

  // edit categories
  const handleChangeCategories = (event) => {
    const selectedIds = event.target.value
    console.log(selectedIds)
    setCategories(selectedIds)
  }

  // edit tags
  const handleChangeTags = (event) => {
    const selectedIds = event.target.value
    setTags(selectedIds)
  }

  // edit colors
  const handleChangeColor = (event) => {
    const selectedColorId = event.target.value;
    console.log(selectedColorId);
    const color = colors.find(c => c.id === selectedColorId);
    console.log('Selected color object:', color)
    setSelectedColor(color);

  };

  // handle choose file image
  const handleFileChange = (event) => {
    const files = event.target.files
    const imagesArray = []
    const filesArray = []
    const acceptedExtensions = ["jpg", "jpeg", "png", "gif"];
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const reader = new FileReader()
      const extension = file.name.split(".").pop().toLowerCase();
      if (!acceptedExtensions.includes(extension)) {
        alert("Chỉ chấp nhận các tệp JPG, JPEG, PNG, GIF.");
        continue;
      }
      reader.onloadend = () => {
        imagesArray.push(reader.result)
        if (imagesArray.length === files.length) {
          setSelectedImages([...selectedImages, ...imagesArray])
          setImageFiles([...imageFiles, ...filesArray])
        }
      }
      if (file) {
        reader.readAsDataURL(file)
        filesArray.push(file)
      }
    }
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h4">
              Cập Nhật sản phẩm
            </Typography>
            <Grid item xs={12} container>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Sản phẩm
                </Typography>
                <TextField
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  name="title"
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
                  value={price}
                  name="price"
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                  error={!!errors.price}
                  helperText={errors.price}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Giá gốc
                </Typography>
                <TextField
                  id="discount"
                  onChange={(e) => setDiscount(e.target.value)}
                  value={discount}
                  name="discount"
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
                  value={quantity}
                  name="quantity"
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
                  value={description}
                  name="description"
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
                  value={shortDescription}
                  name="shortDescription"
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                  error={!!errors.shortDescription}
                  helperText={errors.shortDescription}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Chọn màu sản phẩm
                </Typography>
                <TextField
                  id="colors"
                  select
                  value={selectedColor?.id ?? ''}
                  onChange={handleChangeColor}
                  variant="outlined"
                  className={classes.txtInput}
                  error={!!errors.colors}
                  helperText={errors.colors}
                >
                  {colors.map((color) => (
                    <MenuItem key={color.id} value={color.id}>
                      {color.name}
                    </MenuItem>
                  ))}
                </TextField>
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
                        const category = categoryAll.find((category) => category.id === id)
                        return category ? category.categoryName : ''
                      })
                      return selectedCategories.join(', ')
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
                      const selectedCategories = selected.map((id) => {
                        const category = tagAll.find((category) => category.id === id)
                        return category ? category.name : ''
                      })
                      return selectedCategories.join(', ')
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
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                  id="imageInput"
                />
                <label htmlFor="imageInput">
                  <Button component="span">Chọn ảnh</Button>
                  <Button
                    type="button"
                    onClick={handleResetImages}
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                  >
                    Làm Mới Ảnh
                  </Button>
                </label>

                {selectedImages.length === 0
                  ? images.map((image, index) => (
                    <div key={index}>
                      <Image
                        src={IMAGE_URL + image.imagePath}
                        alt={`Selected ${index}`}
                        width={80}
                      />
                    </div>
                  ))
                  : selectedImages.map((image, index) => (
                    <div key={index}>
                      <Image src={image} alt={`Selected ${index}`} width={80} />
                    </div>
                  ))}
              </div>
              <Grid item xs={12} style={{ marginTop: '30px' }}>
                <Button
                  type="button"
                  onClick={handleEditProduct}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Cập Nhật Sản Phẩm
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default EditProduct
