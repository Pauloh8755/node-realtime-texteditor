import { Routes, Route, Navigate } from "react-router-dom";
import { RealTimeTextEditor } from "../pages/RealTimeTextEditor";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/realtime-editor" element={<RealTimeTextEditor />} />
      <Route path="*" element={<Navigate to="/realtime-editor" />} />
    </Routes>
  );
};

export { AppRoutes };
