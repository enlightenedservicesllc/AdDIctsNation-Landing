import React from "react";
import { cn } from "@/lib/utils";

const FeatureCard = ({ icon, title, description, className }) => {
  return (
    <div className={cn("feature-card", className)}>
      <div className="icon-circle flex items-center justify-center">
        <span className="text-4xl">{icon}</span>
      </div>
      <h3 className="text-2xl font-normal text-black mt-4">{title}</h3>
      <p className="text-center text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default FeatureCard;
