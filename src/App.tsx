import Home from "./routes/home/home.component.tsx";
import {Route, Routes} from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component.tsx";
import SignIn from "./routes/sign-in/sign-in.component.tsx";

const Shop = () => {
    return <h1>SHOP</h1>
}

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path="shop" element={<Shop/>}/>
                <Route path="signIn" element={<SignIn/>}/>
            </Route>


        </Routes>
    )
}

export default App
