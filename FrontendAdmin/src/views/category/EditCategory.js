import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { editCatgory, getCategoryById } from '../../api/apiService'

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

const EditCategory = () => {
  const classes = useStyles()
  const [checkUpdate, setCheckUpdate] = useState(false)
  const { id: idCategory } = useParams()
  const [categoryName, setCategoryName] = useState("");
  const [categoryDescription, setCategoryDescription] = useState("");
  const navigate = useNavigate()

  // get data 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const category = await getCategoryById('categories', idCategory)
        console.log(category.data)
        setCategoryName(category.data.categoryName)
        setCategoryDescription(category.data.categoryDescription)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [idCategory])

  // handle edit category
  const handleEditCategory = async (event) => {
    event.preventDefault()
    if (
      categoryName !== '' &&
      categoryDescription !== ''
    ) {
      const category = {
        categoryName,
        categoryDescription,
      }
      console.log(category)
      try {
        const editedCategory = await editCatgory(`categories/${idCategory}`, category)
        if (editedCategory.status === 200) {
          setCheckUpdate(true)
        } else {
          alert('Bạn chưa nhập đủ thông tin!')
        }
      } catch (error) {
        console.error('Error editing category:', error)
      }
    }
  }
  // navigate after update
  useEffect(() => {
    if (checkUpdate) {
      const timeout = setTimeout(() => {
        navigate('/Category/all-category')
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
              Cập Nhật Danh Mục
            </Typography>
            <Grid item xs={12} container>
              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Danh Mục Sản Phẩm
                </Typography>
                <TextField
                  id="categoryName"
                  onChange={(e) => setCategoryName(e.target.value)}
                  value={categoryName}
                  name="categoryName"
                  variant="outlined"
                  className={classes.txtInput}
                  size="small"
                />
              </Grid>

              <Grid item xs={12}>
                <Typography gutterBottom variant="subtitle1">
                  Mô Tả Danh Mục
                </Typography>
                <TextField
                  id="categoryDescription"
                  onChange={(e) => setCategoryDescription(e.target.value)}
                  value={categoryDescription}
                  name="categoryDescription"
                  className={classes.txtInput}
                  multiline
                  rows={4}
                  variant="outlined"

                />
              </Grid>

              <Grid item xs={12} style={{ marginTop: '30px' }}>
                <Button
                  type="button"
                  onClick={handleEditCategory}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Cập Nhật Danh Mục
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default EditCategory
