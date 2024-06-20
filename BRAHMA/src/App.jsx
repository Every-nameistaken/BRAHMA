import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Index";
 import SellPage from "./pages/Sell";
 import RentPage from "./pages/Rent";
import BuyPage from "./pages/Buy";
import Error from "./pages/Error";
function App() {

  document.title = 'BRAHMA'

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Homepage />} />
      <Route path="index" element={<Homepage />}/>
      <Route path="sell" element={<SellPage />}/>
      <Route path="buy" element={<BuyPage />}/>
      <Route path="rent" element={<RentPage />}/>
      <Route path="signup" element={<></>} />
      <Route path="*" element={<Error />} />
    </Routes>
    </BrowserRouter>

    
    
      
    </>
  )
}

export default App
