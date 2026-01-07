import { Routes,Route, BrowserRouter } from "react-router-dom";
import ModernRealEstateWebsite from "./modernRealEstate";

import CorporateRealEstateWebsite from "./CorporateRealEstateWebsite";

import ModernRealEstateStartup from "./ModernRealEstateStartup";
import ModernLuxuryRealEstate from "./ModernLuxuryRealEstate";

export default function AppRouter() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/*" element={<ModernLuxuryRealEstate/>} />
         <Route path="/modernRealEstate" element={<ModernRealEstateWebsite/>} />
         <Route path="/CorporateRealEstateWebsite" element={<CorporateRealEstateWebsite/>} />

         <Route path="/ModernRealEstateStartup" element={<ModernRealEstateStartup/>} />

      
      
      
      </Routes>
    
</BrowserRouter>
  );
}