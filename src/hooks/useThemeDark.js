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
        var elementApp9 = document.getElementsByClassName("skillsDetail__container")[0];
        

        if (mode === "dark") {
            elementApp  != null ? elementApp.classList.add("dark-mode"): console.log("elementApp does not exist") ;
            elementApp2 != null ? elementApp2.classList.add("toggle-dark-theme"): console.log("elementApp2 does not exist") ;
            elementApp3 != null ? elementApp3.classList.add("dark-font"): console.log("elementApp3 does not exist") ;
            elementApp4 != null ? elementApp4.classList.add("dark-font"): console.log("elementApp4 does not exist") ;
            elementApp5 != null ? elementApp5.classList.add("dark-font"): console.log("elementApp5 does not exist") ;
            elementApp6 != null ? elementApp6.classList.add("dark-font"): console.log("elementApp6 does not exist") ;
            elementApp8 != null ? elementApp8.classList.add("dark-font"): console.log("elementApp8 does not exist") ;
            elementApp7 != null ? elementApp7.classList.add("dark-cover"): console.log("elementApp7 does not exist") ;
            elementApp9 != null ? elementApp9.classList.add("dark-font"): console.log("elementApp9 does not exist") ;

            localStorage.setItem("mode", "dark");
            dispatch(
                modeSelected({
                    mode: "dark",
                    day: "dark-today",
                })
            )
        } else {
            elementApp   != null ? elementApp.classList.remove("dark-mode"): console.log("elementApp does not exist") ;
            elementApp2  != null ? elementApp2.classList.remove("toggle-dark-theme"): console.log("elementApp2 does not exist") ;
            elementApp3  != null ? elementApp3.classList.remove("dark-font"): console.log("elementApp3 does not exist") ;
            elementApp4  != null ? elementApp4.classList.remove("dark-font"): console.log("elementApp4 does not exist") ;
            elementApp5  != null ? elementApp5.classList.remove("dark-font"): console.log("elementApp5 does not exist") ;
            elementApp6  != null ? elementApp6.classList.remove("dark-font"): console.log("elementApp6 does not exist") ;
            elementApp8  != null ? elementApp8.classList.remove("dark-font"): console.log("elementApp8 does not exist") ;
            elementApp7  != null ? elementApp7.classList.remove("dark-cover"): console.log("elementApp7 does not exist") ;
            elementApp9  != null ? elementApp9.classList.remove("dark-font"): console.log("elementApp9 does not exist") ;
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
