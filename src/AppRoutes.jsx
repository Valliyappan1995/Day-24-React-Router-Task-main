import { BrowserRouter,Routes,Route } from "react-router-dom";
import AllLayout from "./Layouts/AllLayout";
import FSDLayout from './Layouts/FSDLayout';
import DSLayout from './Layouts/DSLayout';
import CSCareerLayout from './Layouts/CS-CareerLayout';
import All from './Pages/All';
import FullStack from './Pages/FullStack';
import DataScience from './Pages/DataScience';
import CyberSecurity from './Pages/CyberSecurity';
import Career from './Pages/Career';
import NotFound from "./Pages/Not Found";


const AppRoutes = () => {
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AllLayout/>}>
        <Route path="/" element={<All/>}/>
        </Route>
        <Route path="/" element={<FSDLayout/>}>
        <Route path="/fullstack" element={<FullStack/>}/>
        </Route>
        <Route path="/" element={<DSLayout/>}>
        <Route path="/data-science" element={<DataScience/>}/>
        </Route>
        <Route path="/" element={<CSCareerLayout/>}>
        <Route path="/cyber-security" element={<CyberSecurity/>}/>
        </Route>
        <Route path="/" element={<CSCareerLayout/>}>
        <Route path="/career" element={<Career/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default AppRoutes;