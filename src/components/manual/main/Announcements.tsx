import { Ellipsis } from "lucide-react";
import React from "react";
import { propsObj } from "./Schedules";

const Announcements = ({row}:propsObj) => {
  return (
    <div className="rounded-md flex justify-between items-center text-gray-500 bg-muted/50 border-[1px] border-gray-200 p-2 my-2 ">
      <div className="w-[70%] h-full flex flex-col ">
        <p className="text-black">{row.text}</p>
        <p className="text-xs text-gray-500">{row.time}</p>
      </div>

      <div className="h-full w-[25%]  flex items-center justify-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-pin-angle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146" />
        </svg>
        <Ellipsis />
      </div>
    </div>
  );
};

export default Announcements;
