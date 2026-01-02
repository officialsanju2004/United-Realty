import { Routes,Route, BrowserRouter } from "react-router-dom";
import ModernRealEstateWebsite from "./modernRealEstate";
import VermontLife from "./VermontLife";

export default function AppRouter() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/*" element={<VermontLife/>} />
         <Route path="/modernRealEstate" element={<ModernRealEstateWebsite/>} />
      
      
      
      </Routes>
    
</BrowserRouter>
  );
}