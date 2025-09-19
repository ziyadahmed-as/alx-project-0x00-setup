import React from "react";

interface PostCardProps {
  title: string;
  content: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default PostCard;
