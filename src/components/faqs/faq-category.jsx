import React from "react";
import { cn } from "@/lib/utils";

const FaqCategory = ({ title, isActive, onClick }) => {
  return (
    <button
      className={cn(
        "w-full px-5 py-4 text-left text-sm font-medium rounded-md transition-all",
        isActive ? "bg-primary text-white" : "hover:bg-gray-100"
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default FaqCategory;
