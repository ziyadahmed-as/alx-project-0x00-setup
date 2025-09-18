import React from "react"
import Card from "@/components/Card"   // ✅ Correct import

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>

      {/* ✅ Render the Card component */}
      <Card />
      <Card />   {/* you can duplicate for testing */}
    </div>
  )
}

export default Landing
