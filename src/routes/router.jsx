import { createBrowserRouter } from "react-router-dom";
import StickersPanel from '@/routes/pages/components/StickersPanel/StickersPanel';
// import { getCards } from "@/data/forStorage";
import Root from "./root";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { 
        index: true, 
        element:  <StickersPanel />,
        // loader: getCards,
      },
    ],
  },
]);

export default router
