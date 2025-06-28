import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./componets/AppLayout";
import AllProject from "./componets/AllProject";
import AboutMe from "./componets/AboutMe";
import Home from "./componets/Home";
import ProjectDetailsPage from "./componets/ProjectDetailPage";
import { LoadingProvider } from "./components/LoadingProvider";

function App() {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<AllProject />} />
            <Route path="about" element={<AboutMe />} />
            <Route path="projects/:id" element={<ProjectDetailsPage />} />
          </Route> 
        </Routes>
      </LoadingProvider>
    </BrowserRouter>
  );
}

export default App;
