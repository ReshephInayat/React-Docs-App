import Background from "@/Components/Background";
import Foreground from "@/Components/Foreground";
import React from "react";

export default function page() {
  return (
    <div className="selection:text-white relative w-full h-screen bg-zinc-800">
      <Background />
      <Foreground
        description={""}
        file_size={""}
        close={false}
        isOpen={false}
        tag_details={{
          tag_title: "",
          tag_color: "",
        }}
      />
    </div>
  );
}
