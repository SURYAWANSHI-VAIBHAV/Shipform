'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "@/components/Navigation/nav";
import { useParams, useRouter } from "next/navigation";

// Define the expected shape of the analytics data
interface FormAnalytics {
  formId: string;
  totalSubmissions: number;
  responses: { label: string; value: string }[]; // Adjust `value` to be a string
}

const Analytics = () => {
  const { id } = useParams();
  const router = useRouter();
  const [analytics, setAnalytics] = useState<FormAnalytics | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [responseIndex, setResponseIndex] = useState<number>(0); // Track the current response index

  useEffect(() => {
    const fetchAnalytics = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`/api/analytics/${id}`);
        setAnalytics(response.data);
        setResponseIndex(0); // Reset the index when new data is fetched
      } catch (error) {
        setError("Error fetching analytics data.");
        console.error("Error fetching analytics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, [id]);

  const handleBackClick = () => {
    setResponseIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : analytics!.responses.length - 1
    );
  };

  const handleNextClick = () => {
    setResponseIndex((prevIndex) =>
      prevIndex < analytics!.responses.length - 1 ? prevIndex + 1 : 0
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500 font-semibold">{error}</div>
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div>No analytics data found for this form.</div>
      </div>
    );
  }

  const currentResponse = analytics.responses[responseIndex];

  return (
    <div>
      <Nav />
      <div className="py-20 px-4 bg-[#F0EBF8] min-h-screen text-black">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Form Analytics</h2>
        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold">{`Form ID: ${analytics.formId}`}</h3>
          <p>Total Submissions: {analytics.totalSubmissions}</p>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Response {responseIndex + 1} of {analytics.responses.length}:</h4>
            <div className="mb-4">
              <h5 className="font-medium">{currentResponse.label}:</h5>
              <p>{currentResponse.value}</p> {/* Display the value directly */}
            </div>
            <div className="flex justify-between mt-6">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={handleBackClick}
              >
                Previous Response
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={handleNextClick}
              >
                Next Response
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
