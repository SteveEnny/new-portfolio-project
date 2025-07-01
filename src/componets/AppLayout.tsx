import { useRef } from "react";
import Header from "./Header";
import { Outlet } from "react-router";

function AppLayout() {
  const about = useRef<HTMLDivElement>(null);
  const project = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-background text-foreground">
      {/* <div className="  bg-gradient-to-r from-cyan-200 to-blue-400 rounded-[0px_0px_100px_100px]"> */}
      <Header about={about} contact={contact} project={project} />
      <Outlet />
    </div>
  );
}

export default AppLayout;
