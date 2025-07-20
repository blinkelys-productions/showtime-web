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

    const handleDeleteUsers = async () => {
        try {
            await axios.delete(`${apiBase}/admin/users`);
            setMessage("Users deleted successfully");
        } catch (error) {
            setMessage("Error deleting users");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-white text-center mb-8">Admin Dashboard</h1>
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
                    <div className="space-y-6">
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={handleDeleteOrganizations}
                                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-sm hover:shadow-md"
                            >
                                Delete All Organizations
                            </button>
                            <button
                                onClick={handleDeleteUsers}
                                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-sm hover:shadow-md"
                            >
                                Delete All Users
                            </button>
                        </div>
                        {message && (
                            <div className={`p-4 rounded-lg ${message.includes("Error") ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}>
                                {message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;