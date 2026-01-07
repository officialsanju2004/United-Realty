import { createRoot } from "react-dom/client";
import "./index.css";
import "sweetalert2/src/sweetalert2.scss";





import AppRouter from "./app";


createRoot(document.getElementById("root")).render(


     <AppRouter/>
      

);
