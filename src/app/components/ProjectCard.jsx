"use client";
import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden">
      {/* Image container with hover overlay */}
      <div
        className="h-52 md:h-72 relative group"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay shown on hover */}
        <div className="absolute inset-0 bg-[#181818] bg-opacity-0 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-4 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
          >
            <CodeBracketIcon className="h-6 w-6 text-[#ADB7BE] hover:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center"
          >
            <EyeIcon className="h-6 w-6 text-[#ADB7BE] hover:text-white" />
          </Link>
        </div>
      </div>

      {/* Text content */}
      <div className="bg-[#181818] text-white rounded-b-xl py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
