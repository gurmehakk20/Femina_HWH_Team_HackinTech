import React, { useState } from "react";
// import axios from "axios";
import Button  from "../components/Button";
// import { Card, CardContent } from "../components/Card";

const BlogPage = () => {
  const [blogText, setBlogText] = useState("");
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // try {
    //   const response = await axios.post("http://localhost:5000/api/extract", { text: blogText });
    //   setFaqs(response.data.faqs);
    // } catch (error) {
    //   alert("Failed to extract FAQs");
    // }
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          className="w-full p-4 border rounded-lg"
          placeholder="Write your journal here..."
          value={blogText}
          onChange={(e) => setBlogText(e.target.value)}
          rows="6"
        ></textarea>
        <Button type="submit" className="mt-4 w-full" disabled={loading}>
          {loading ? "Extracting..." : "Generate FAQs"}
        </Button>
      </form>

      {loading && <div className="text-center text-[#ff4d94]">⏳ Extracting Keywords...</div>}

      {faqs.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-[#ff4d94]">Related FAQs</h2>
          {faqs.map((faq, index) => (
            <Card key={index} className="mb-4">
              <CardContent>{faq}</CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;



