import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Result from "./components/Result";


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<SignIn />} />
            <Route path="*" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/result" element={<Result />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}