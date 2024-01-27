import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Error from "./pages/error/Error";
import Home from "./pages/home/Home";
import RootLayout from "./components/layout/RootLayout";
import Home001 from "./pages/home/home001/Home001";
import Home003 from "./pages/home/home003/Home003";
import Home004 from "./pages/home/home004/Home004";
import Home002 from "./pages/home/home002/Home002";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>

        <Route element={<RootLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/home001" element={<Home001/>}/>
          <Route path="/home002" element={<Home002/>}/>
          <Route path="/home003" element={<Home003/>}/>
          <Route path="/home004" element={<Home004/>}/>
        </Route>

        <Route path="*" element={<Error/>}/>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App