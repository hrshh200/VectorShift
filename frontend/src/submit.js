import axios from "axios";
import { useStore } from "./store";

export const SubmitButton = () => {

  const handleSubmit = async () => {
    const { nodes, edges } = useStore.getState();

    try {
      const res = await axios.post(
        "http://127.0.0.1:8000/pipelines/parse",
        { nodes, edges }
      );

      const { num_nodes, num_edges, is_dag } = res.data;

      alert(
        `📊 Pipeline Summary\n\n` +
        `Nodes: ${num_nodes}\n` +
        `Edges: ${num_edges}\n` +
        `Is DAG: ${is_dag ? "✅ Yes" : "❌ No"}`
      );

    } catch (err) {
      console.error(err);
      alert("❌ Failed to process pipeline");
    }
  };

  return (
    <div className="flex justify-center items-center mt-6">
      <button
        onClick={handleSubmit}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg shadow-md transition-all duration-200 font-medium"
      >
        Submit 
      </button>
    </div>
  );
};