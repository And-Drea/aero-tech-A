import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <>
      <Navbar />

      {/* Main Content */}
      <main className="main-content">
        <div className="logo-circle">App Logo</div>

        <div className="app-info">
          <h1 className="app-name">AeroTech</h1>
          <p className="app-description">
            An hour-by-hour weather calendar that shows ideal conditions
            and time slots for outdoor tasks.
          </p>
          <button
            className="navigate-button"
            onClick={() => handleNavigate("/dashboard")}
          >
            Shows  weather of default location
          </button>
        </div>
      </main>
    </>
  );
}
