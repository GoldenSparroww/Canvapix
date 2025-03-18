import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import './App.css'

function App() {
  const iconSize = 100;

  //material-symbols:brush
  //material-symbols:ink-pen-sharp
  //--guma
  //fluent:paint-bucket-16-filled
  //gg:color-picker
  //f7:plusminus-circle-fill
  //--prerusovany cary

  //--file
  //material-symbols:settings
  //material-symbols:wallpaper-rounded
  //material-symbols:undo
  //material-symbols:redo
  //material-symbols:help

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M6 21q-1.125 0-2.225-.55T2 19q.65 0 1.325-.513T4 17q0-1.25.875-2.125T7 14t2.125.875T10 17q0 1.65-1.175 2.825T6 21m5.75-6L9 12.25l8.95-8.95q.275-.275.688-.288t.712.288l1.35 1.35q.3.3.3.7t-.3.7z"
        ></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M15.275 12.475L11.525 8.7L14.3 5.95l-.725-.725L8.1 10.7L6.7 9.3l6.875-6.875L15.7 4.55l1.975-1.975l3.75 3.75zM6.75 21H3v-3.75l7.1-7.125l3.775 3.75z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="-1.5 -2.5 24 24"
      >
        <path
          fill="currentColor"
          d="M12.728 12.728L8.485 8.485l-5.657 5.657l2.122 2.121a3 3 0 0 0 4.242 0zM11.284 17H14a1 1 0 0 1 0 2H3a1 1 0 0 1-.133-1.991l-1.453-1.453a2 2 0 0 1 0-2.828L12.728 1.414a2 2 0 0 1 2.828 0L19.8 5.657a2 2 0 0 1 0 2.828z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 2.25a.75.75 0 0 0-1.5 0V3.5a2.24 2.24 0 0 0-.841.53L2.78 10.91a2.25 2.25 0 0 0 0 3.182l4.88 4.878a2.25 2.25 0 0 0 3.182 0l6.879-6.879a2.25 2.25 0 0 0 0-3.182L12.84 4.03A2.24 2.24 0 0 0 12 3.5zm-1.5 3.06v1.44a.75.75 0 0 0 1.5 0V5.31l4.659 4.66a.75.75 0 0 1 0 1.06l-.97.97H3.812l.029-.03zm9.021 8.292a.874.874 0 0 0-1.542 0l-2.008 3.766C14.85 19.466 16.372 22 18.75 22s3.898-2.534 2.78-4.632z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
      >
        <g fill="currentColor">
          <path d="M20.385 2.879a3 3 0 0 0-4.243 0L14.02 5l-.707-.708a1 1 0 1 0-1.414 1.415l5.657 5.656A1 1 0 0 0 18.97 9.95l-.707-.707l2.122-2.122a3 3 0 0 0 0-4.242"></path>
          <path
            fillRule="evenodd"
            d="M11.93 7.091L4.152 14.87a3 3 0 0 0-.587 3.415L2 19.85l1.414 1.415l1.565-1.566a3 3 0 0 0 3.415-.586l7.778-7.778zm1.414 4.243L11.93 9.92l-6.364 6.364a1 1 0 0 0 1.414 1.414z"
            clipRule="evenodd"
          ></path>
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 56 56"
      >
        <path
          fill="currentColor"
          d="M28 51.906c13.055 0 23.906-10.851 23.906-23.906c0-13.078-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.922 4.095 28c0 13.055 10.828 23.906 23.906 23.906m0-19.922c-1.078 0-2.063-.797-2.063-1.968v-4.641h-4.734c-1.031 0-1.875-.89-1.875-1.852c0-.96.844-1.898 1.875-1.898h4.734v-4.617c0-1.172.985-1.922 2.063-1.922s2.062.75 2.062 1.922v4.617h4.758c1.031 0 1.875.938 1.875 1.898c0 .961-.844 1.852-1.875 1.852h-4.758v4.64c0 1.172-.984 1.97-2.062 1.97m-6.797 7.758c-1.031 0-1.875-.937-1.875-1.898c0-.985.844-1.875 1.875-1.875H34.82c1.031 0 1.875.89 1.875 1.875c0 .96-.844 1.898-1.875 1.898Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 32 32"
      >
        <circle cx={9.5} cy={9.5} r={2.5} fill="currentColor"></circle>
        <circle cx={22.5} cy={22.5} r={2.5} fill="currentColor"></circle>
        <path
          fill="currentColor"
          d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 13H17V4h11ZM15 4v11H4V4ZM4 17h11v11H4Zm13 11V17h11v11Z"
        ></path>
      </svg>
      <br />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
          <path
            fill="currentColor"
            d="M12 2v6.5a1.5 1.5 0 0 0 1.356 1.493L13.5 10H20v10a2 2 0 0 1-1.85 1.995L18 22H6a2 2 0 0 1-1.995-1.85L4 20V4a2 2 0 0 1 1.85-1.995L6 2zm2 .043a2 2 0 0 1 .877.43l.123.113L19.414 7a2 2 0 0 1 .502.84l.04.16H14z"
          ></path>
        </g>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M10.825 22q-.675 0-1.162-.45t-.588-1.1L8.85 18.8q-.325-.125-.612-.3t-.563-.375l-1.55.65q-.625.275-1.25.05t-.975-.8l-1.175-2.05q-.35-.575-.2-1.225t.675-1.075l1.325-1Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337l-1.325-1Q2.675 9.9 2.525 9.25t.2-1.225L3.9 5.975q.35-.575.975-.8t1.25.05l1.55.65q.275-.2.575-.375t.6-.3l.225-1.65q.1-.65.588-1.1T10.825 2h2.35q.675 0 1.163.45t.587 1.1l.225 1.65q.325.125.613.3t.562.375l1.55-.65q.625-.275 1.25-.05t.975.8l1.175 2.05q.35.575.2 1.225t-.675 1.075l-1.325 1q.025.175.025.338v.674q0 .163-.05.338l1.325 1q.525.425.675 1.075t-.2 1.225l-1.2 2.05q-.35.575-.975.8t-1.25-.05l-1.5-.65q-.275.2-.575.375t-.6.3l-.225 1.65q-.1.65-.587 1.1t-1.163.45zm1.225-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M4 4h7V2H4c-1.1 0-2 .9-2 2v7h2zm6 9l-4 5h12l-3-4l-2.03 2.71zm7-4.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5M20 2h-7v2h7v7h2V4c0-1.1-.9-2-2-2m0 18h-7v2h7c1.1 0 2-.9 2-2v-7h-2zM4 13H2v7c0 1.1.9 2 2 2h7v-2H4z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7 19v-2h7.1q1.575 0 2.738-1T18 13.5T16.838 11T14.1 10H7.8l2.6 2.6L9 14L4 9l5-5l1.4 1.4L7.8 8h6.3q2.425 0 4.163 1.575T20 13.5t-1.737 3.925T14.1 19z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M9.9 19q-2.425 0-4.163-1.575T4 13.5t1.738-3.925T9.9 8h6.3l-2.6-2.6L15 4l5 5l-5 5l-1.4-1.4l2.6-2.6H9.9q-1.575 0-2.738 1T6 13.5T7.163 16T9.9 17H17v2z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M11.95 18q.525 0 .888-.363t.362-.887t-.362-.888t-.888-.362t-.887.363t-.363.887t.363.888t.887.362m-.9-3.85h1.85q0-.825.188-1.3t1.062-1.3q.65-.65 1.025-1.238T15.55 8.9q0-1.4-1.025-2.15T12.1 6q-1.425 0-2.312.75T8.55 8.55l1.65.65q.125-.45.563-.975T12.1 7.7q.8 0 1.2.438t.4.962q0 .5-.3.938t-.75.812q-1.1.975-1.35 1.475t-.25 1.825M12 22q-2.075 0-3.9-.787t-3.175-2.138T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
        ></path>
      </svg>
    </div>
  );
}

export default App;
