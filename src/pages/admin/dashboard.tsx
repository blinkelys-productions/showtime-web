import axios from "axios";
import { apiBase } from "@/config";
import { useState } from "react";

function AdminDashboard() {
    const [message, setMessage] = useState("");

    const handleDeleteOrganizations = async () => {
        try {
            await axios.delete(`${apiBase}/admin/organizations`);
            setMessage("Organizations deleted successfully");
        } catch (error) {
            setMessage("Error deleting organizations");
        }
    };

    return (
        <div className="p-4 flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <div className="space-y-4">
                <button
                    onClick={handleDeleteOrganizations}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                    Delete All Organizations
                </button>
                {message && (
                    <p className={message.includes("Error") ? "text-red-500" : "text-green-500"}>
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
}

export default AdminDashboard;