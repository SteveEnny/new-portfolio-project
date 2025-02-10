import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./componets/AppLayout";
import AllProject from "./componets/AllProject";
import AboutMe from "./componets/AboutMe";
import Home from "./componets/Home";
import ProjectDetailsPage from "./componets/ProjectDetailPage";
function App() {
  // const about = useRef<HTMLDivElement>(null);
  // const project = useRef<HTMLDivElement>(null);
  // const contact = useRef<HTMLDivElement>(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<AllProject />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="projects/:id" element={<ProjectDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
