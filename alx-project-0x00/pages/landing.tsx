// pages/landing.tsx
import React from "react";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Landing Page Buttons</h1>

      {/* Small Buttons */}
      <div className="flex gap-2">
        <Button title="Small Rounded-sm" size="small" shape="rounded-sm" styles="" />
        <Button title="Small Rounded-md" size="small" shape="rounded-md" styles="" />
        <Button title="Small Rounded-full" size="small" shape="rounded-full" styles="" />
      </div>

      {/* Medium Buttons */}
      <div className="flex gap-2">
        <Button title="Medium Rounded-sm" size="medium" shape="rounded-sm" styles="" />
        <Button title="Medium Rounded-md" size="medium" shape="rounded-md" styles="" />
        <Button title="Medium Rounded-full" size="medium" shape="rounded-full" styles="" />
      </div>

      {/* Large Buttons */}
      <div className="flex gap-2">
        <Button title="Large Rounded-sm" size="large" shape="rounded-sm" styles="" />
        <Button title="Large Rounded-md" size="large" shape="rounded-md" styles="" />
        <Button title="Large Rounded-full" size="large" shape="rounded-full" styles="" />
      </div>
    </div>
  );
};

export default Landing;
