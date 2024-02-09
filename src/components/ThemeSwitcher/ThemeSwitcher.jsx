import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../features/themeSlice";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className="darkmode">
      <button className="dark" onClick={() => dispatch(toggleTheme())}>
        {darkMode ? "☀️ Light Mode" : "🌑 Dark Mode"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
