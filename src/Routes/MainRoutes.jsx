import { Route, Routes } from "react-router-dom"
import DefaultLayout from "../Layouts/DefaultLayout"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Blogs from "../pages/Blog/Blogs"
import NewPost from "../pages/Blog/NewPost"
import Article from "../pages/Blog/Article"
import AuthLayout from "../Layouts/AuthLayout"
import Login from "../pages/auth/Login"
import SignUp from "../pages/auth/SignUp"
import Contact from "../pages/auth/Contact"

const MainRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<DefaultLayout />}>
                <Route index element={<Home/>} />
                <Route path="*" element={<NotFound/>} />
            </Route>

            <Route path="/blogs" element={<DefaultLayout />}>
                <Route index element={<Blogs/>} />
                <Route path="new" element={<NewPost/>} />
                <Route path=":slug" element={<Article/>} />
            </Route>

            <Route path="/" element={<AuthLayout />}>
                <Route path="login" element={<Login/>} />
                <Route path="signUp" element={<SignUp/>} />
                <Route path="contact" element={<Contact/>} />
            </Route>

        </Routes>
    )
}

export default MainRoutes