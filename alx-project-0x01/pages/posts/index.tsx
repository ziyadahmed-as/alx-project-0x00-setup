import React from "react";
import PostCard from "@/components/common/PostCard";

const PostsPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-4">Posts Page</h1>

      {/* Example Post */}
      <PostCard
        title="First Post"
        content="This is an example post created with Tailwind styling."
      />
      {/* Another Example */}
      <PostCard
        title="Second Post"
        content="You can add more posts here as needed."
      />
    </div>
  );
};

export default PostsPage;
