'use client';
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

// Define the expected shape of a response
interface Response {
  label: string;
  value: string;
}

// Define the expected shape of each submission in analytics data
interface Submission {
  _id: string;
  formId: string;
  responses: Response[];
  submittedAt: string;
}

const Analytics = () => {
  const { id } = useParams();
  const router = useRouter();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [currentSubmissionIndex, setCurrentSubmissionIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnalytics = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`/api/analytics/${id}`);
        setSubmissions(response.data);
      } catch (error) {
        setError("Error fetching analytics data.");
        console.error("Error fetching analytics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, [id]);

  const handlePreviousClick = () => {
    setCurrentSubmissionIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : submissions.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentSubmissionIndex((prevIndex) =>
      prevIndex < submissions.length - 1 ? prevIndex + 1 : 0
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

  if (!submissions.length) {
    return (
      <div className="text-black">
        <div className="flex justify-center items-center h-screen bg-[#F0EBF8] text-black">
        <div>No analytics data found for this form.</div>
      </div>
      </div>
    );
  }

  const currentSubmission = submissions[currentSubmissionIndex];

  return (
    <div>
     <div className="w-full bg-[#F0EBF8] min-h-screen">
     <div className="w-1/2 mx-auto py-20 px-4  text-black">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Form Analytics</h2>
        
        <div className="text-center mb-4">
          <span className="text-lg font-semibold">
            Submission {currentSubmissionIndex + 1} of {submissions.length}
          </span>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold">{`Submission Date: ${new Date(currentSubmission.submittedAt).toLocaleString()}`}</h3>
          <div className="mt-4">
            {currentSubmission.responses.map((response, index) => (
              <div key={index} className="mb-4">
                <h5 className="font-medium capitalize text-lg mb-1 ">{response.label}:</h5>
                <p className="border p-2 rounded-md">{response.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handlePreviousClick}
          >
            Previous Submission
          </button>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleNextClick}
          >
            Next Submission
          </button>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Analytics;
