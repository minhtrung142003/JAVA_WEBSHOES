import React, { Suspense, useEffect } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { CSpinner, useColorModes } from '@coreui/react'
import './scss/style.scss'
import { ThemeProvider, createTheme } from '@mui/material/styles';
// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const Product = React.lazy(()=> import ('./views/product/Product'))
const AddProduct = React.lazy(()=> import ('./views/product/AddProduct'))
const EditProduct = React.lazy(()=> import ('./views/product/EditProduct'))
const Category = React.lazy(()=> import ('./views/category/Category'))
const AddCategory = React.lazy(()=> import ('./views/category/AddCategory'))
const EditCategory = React.lazy(()=> import ('./views/category/EditCategory'))
const User = React.lazy(()=> import ('./views/user/User'))
const AddUser = React.lazy(()=> import ('./views/user/AddUser'))
const EditUser = React.lazy(()=> import ('./views/user/EditUser'))
const Tag = React.lazy(()=> import ('./views/tag/Tag'))
const AddTag = React.lazy(()=> import ('./views/tag/AddTag'))
const EditTag = React.lazy(()=> import ('./views/tag/EditTag'))
const Order = React.lazy(()=> import ('./views/order/Order'))
const AddOrder = React.lazy(()=> import ('./views/order/AddOrder'))
const EditOrder = React.lazy(()=> import ('./views/order/EditOrder'))
const OrderItem = React.lazy(()=> import ('./views/orderitem/OrderItem'))

const theme = createTheme();

const App = () => {
  const { isColorModeSet, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const storedTheme = useSelector((state) => state.theme)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.href.split('?')[1])
    const theme = urlParams.get('theme') && urlParams.get('theme').match(/^[A-Za-z0-9\s]+/)[0]
    if (theme) {
      setColorMode(theme)
    }

    if (isColorModeSet()) {
      return
    }

    setColorMode(storedTheme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThemeProvider theme={theme}>
    <HashRouter>
      <Suspense
        fallback={
          <div className="pt-3 text-center">
            <CSpinner color="primary" variant="grow" />
          </div>
        }
      >
        <Routes>
          <Route exact path="/login" name="Login Page" element={<Login />} />
          <Route exact path="/register" name="Register Page" element={<Register />} />
          <Route exact path="/404" name="Page 404" element={<Page404 />} />
          <Route exact path="/500" name="Page 500" element={<Page500 />} />
          <Route path="*" name="Home" element={<DefaultLayout />} />
          <Route path="/all-product" name="Product" element={<Product />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit/product/:id" element={<EditProduct />} />
          <Route path="/all-category" name="Category" element={<Category />} />
          <Route path="/add-category" element={<AddCategory />} />
          <Route path="/edit/category/:id" element={<EditCategory />} />
          <Route path="/all-user" name="User" element={<User />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit/user/:id" element={<EditUser />} />
          <Route path="/all-tag" name="Tag" element={<Tag />} />
          <Route path="/add-tag" element={<AddTag />} />
          <Route path="/edit/tag/:id" element={<EditTag />} />
          <Route path="/all-order" name="Tag" element={<Order />} />
          <Route path="/add-order" element={<AddOrder />} />
          <Route path="/edit/order/:id" element={<EditOrder />} />
          <Route path="/all-orderItem" name="OrderItem" element={<OrderItem />} />

        </Routes>
      </Suspense>
    </HashRouter>
    </ThemeProvider>
  )
}

export default App
