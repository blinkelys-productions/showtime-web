import axios from "axios";
import { useEffect, useState } from "react";
import { apiBase } from "@/config";

function Organization() {
    const [organizations, setOrganizations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrganizations = async () => {
            try {
                const response = await axios.get(`${apiBase}/organizations/`);
                console.log("Fetched organizations:", response.data);
                setOrganizations(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching organizations:', error);
                setLoading(false);
            }
        };

        fetchOrganizations();
    }, []);


    if (loading) {
        return (
            <div className="flex flex-col items-center h-screen pt-32">
                <p>Loading organizations...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center h-screen pt-32">
            <h1 className="text-4xl font-bold mb-8">My Organizations</h1>
            {organizations.length === 0 ? (
                <div className="flex flex-col items-center">
                    <p className="text-gray-600 mb-4">You have no organizations</p>
                    <a href="/organizations/create" className="bg-transparent border-2 border-blue-500 text-blue-500 rounded-lg p-4 flex text-xl items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                        <span className="font-semibold">Create Organization</span>
                    </a>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <a href="/organizations/create" className="bg-transparent border-2 border-blue-500 text-blue-500 rounded-lg p-4 flex text-xl items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                        <span className="font-semibold">Create Organization</span>
                    </a>
                    {organizations.map((org: { id: string; logo: string; name: string; joinedDate: string }) => (
                        <a key={org.id} href={`/organizations/${org.id}`} className="bg-white shadow-md rounded-lg p-4 flex items-center hover:shadow-lg transition-shadow">
                            <div className="w-32 h-32">
                                <img 
                                    src={org.logo}
                                    alt={`${org.name} logo`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="w-1 h-32 bg-gray-300 mx-4"></div>
                            <div className="flex flex-col justify-between h-full">
                                <h2 className="text-xl font-semibold text-gray-800">{org.name}</h2>
                                <p className="text-gray-600">Joined {org.joinedDate}</p>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Organization;