"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaFileAlt } from "react-icons/fa";
import { MdClose, MdFileDownload } from "react-icons/md";
import { data_type } from "@/Utils/Types";
export default function Card({
  data,
  reference,
}: {
  data: data_type;
  reference: any;
}) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      className=" relative w-52 h-64 rounded-[25px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
    >
      <FaFileAlt />
      <p className="text-sm font-light mt-5">{data.description}</p>
      <div className="footer absolute bottom-0 w-full left-0 text-sm font-medium">
        <div className="flex items-center justify-between px-8 py-2 mb-3 ">
          <h5>{data.file_size}</h5>
          <span className="bg-zinc-600 flex justify-center rounded-full p-1 items-center">
            {data.close ? (
              <MdClose />
            ) : (
              <MdFileDownload className="w-4 h-4 text-white" />
            )}
          </span>
        </div>
        {data.isOpen && (
          <div
            className={`tag w-full py-4 flex items-center justify-center ${
              data.tag_details.tag_color === "blue"
                ? "bg-blue-600"
                : "bg-green-500"
            }`}
          >
            <h3 className="text-xs font-semibold">
              {data.tag_details.tag_title}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}
