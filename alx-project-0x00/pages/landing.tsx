import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6 space-y-8">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6">Landing Page</h1>

      {/* Cards Section */}
      <div className="flex flex-wrap gap-6">
        <Card />
        <Card />
      </div>

      {/* Buttons Section */}
      <div className="space-y-4 mt-8">
        <h2 className="text-2xl font-semibold mb-2">Buttons</h2>

        {/* Small Buttons */}
        <div className="flex gap-2">
          <Button title="Small Rounded-sm" size="small" shape="rounded-sm" />
          <Button title="Small Rounded-md" size="small" shape="rounded-md" />
          <Button title="Small Rounded-full" size="small" shape="rounded-full" />
        </div>

        {/* Medium Buttons */}
        <div className="flex gap-2">
          <Button title="Medium Rounded-sm" size="medium" shape="rounded-sm" />
          <Button title="Medium Rounded-md" size="medium" shape="rounded-md" />
          <Button title="Medium Rounded-full" size="medium" shape="rounded-full" />
        </div>

        {/* Large Buttons */}
        <div className="flex gap-2">
          <Button title="Large Rounded-sm" size="large" shape="rounded-sm" />
          <Button title="Large Rounded-md" size="large" shape="rounded-md" />
          <Button title="Large Rounded-full" size="large" shape="rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
