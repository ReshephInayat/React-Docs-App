"use client";
import React, { useRef } from "react";
import Card from "./Card";
import { data_type } from "@/Utils/Types";

const data: data_type[] = [
  {
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    file_size: ".9mb",
    close: false,
    isOpen: true,
    tag_details: {
      tag_title: "Upload",
      tag_color: "green",
    },
  },
  {
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    file_size: ".9mb",
    close: true,
    isOpen: false,
    tag_details: {
      tag_title: "Download Now",
      tag_color: "green",
    },
  },
  {
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
    file_size: ".9mb",
    close: false,
    isOpen: true,
    tag_details: {
      tag_title: "Download Now",
      tag_color: "blue",
    },
  },
];

export default function Foreground(props: data_type) {
  const ref = useRef(null);
  return (
    <div
      ref={ref}
      className="fixed z-[3] top-0 left-0 w-full h-full flex flex-wrap gap-5 p-5"
    >
      {data.map((item: data_type, index: any) => (
        <Card key={index} data={item} reference={ref} />
      ))}
    </div>
  );
}
