'use client';
import PreviewCard from "@/components/PreviewCard";
import { Button, Alert } from "flowbite-react";

const MainView = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-10 mx-auto w-[90%] px-8">
      <PreviewCard />
      <PreviewCard />
      <PreviewCard />
    </div>
  )
}

export default MainView;
