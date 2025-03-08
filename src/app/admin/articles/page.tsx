import React from "react";
import ArticleForm from "./article-form";

const AdminArticle = () => {
  return (
    <div className="p-4">
      <div className="text-2xl font-semibold mb-6">
        <h1>Add Articles</h1>
      </div>
      <ArticleForm />
    </div>
  );
};

export default AdminArticle;
