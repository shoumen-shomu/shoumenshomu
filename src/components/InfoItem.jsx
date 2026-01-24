import React from "react";

const InfoItem = ({ label, value }) => {
  return (
    <div className="flex flex-col">
      <span className="text-gray-500 text-sm mb-1">{label}:</span>
      <span className="text-white font-medium text-lg">{value}</span>
    </div>
  );
};

export default InfoItem;