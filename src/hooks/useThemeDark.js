import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Toggle from 'react-toggle';
import { modeSelected } from '../features/themeSlice';
import "../css/useThemeDark.css";



function useThemeDark() {
    const [mode, setMode] = useState(() => localStorage.getItem("mode"));
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener("storage", setPreferedTheme);
        return () => {
            window.removeEventListener("storage", setPreferedTheme);
        }

    }, [])

    const setPreferedTheme = () => {
        const _mode = localStorage.getItem("mode");
        if (_mode === "dark") {
            setMode("dark");
        } else {
            setMode("light");
        }
    }

    useEffect(() => {
        var elementApp = document.getElementsByClassName("App")[0];
        var elementApp2 = document.getElementsByClassName("react-toggle-track")[0];
        var elementApp3 = document.getElementsByClassName("projects__container")[0];
        var elementApp4 = document.getElementsByClassName("experience__container")[0];
        var elementApp5 = document.getElementsByClassName("skills__container")[0];
        var elementApp6 = document.getElementsByClassName("extras__container")[0];
        var elementApp8 = document.getElementsByClassName("footer__container")[0];
        var elementApp7 = document.getElementsByClassName("cover__title")[0];



        if (mode === "dark") {
            elementApp.classList.add("dark-mode");
            elementApp2.classList.add("toggle-dark-theme");
            elementApp3.classList.add("dark-font");
            elementApp4.classList.add("dark-font");
            elementApp5.classList.add("dark-font");
            elementApp6.classList.add("dark-font");
            elementApp8.classList.add("dark-font");
            elementApp7.classList.add("dark-cover");

            localStorage.setItem("mode", "dark");
            dispatch(
                modeSelected({
                    mode: "dark",
                    day: "dark-today",
                })
            )
        } else {
            elementApp.classList.remove("dark-mode");
            elementApp2.classList.remove("toggle-dark-theme");
            elementApp3.classList.remove("dark-font");
            elementApp4.classList.remove("dark-font");
            elementApp5.classList.remove("dark-font");
            elementApp6.classList.remove("dark-font");
            elementApp8.classList.remove("dark-font");
            elementApp7.classList.remove("dark-cover");
            localStorage.setItem("mode", "light");
            dispatch(
                modeSelected({
                    mode: "light",
                    day: "light-today",
                })
            )
        }
    }, [mode, dispatch])

    return (
        <div id="toggler__darkTheme">
            <Toggle
                className="DarkToggle"
                onClick={() =>
                    setMode(mode === "dark" ? "light" : "dark")
                }
                aria-label="Dark mode"
            />
        </div>
    )
}

export default useThemeDark
