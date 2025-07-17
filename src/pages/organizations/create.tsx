import React, { useState, useMemo } from "react";
import axios from "axios";
import { FixedSizeList as List } from "react-window";
import { apiBase } from "@/config";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { countries } from "@/utils/countries";

function OrganizationCreator() {
    const [orgName, setOrgName] = useState("");
    const [country, setCountry] = useState("");
    const [logo, setLogo] = useState<File | null>(null);

    const memoizedCountries = useMemo(() => countries, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", orgName);
        formData.append("country", country);
        if (logo) {
            formData.append("logo", logo);
        }

        try {
            const response = await axios.post(`${apiBase}/organizations/create`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            console.log("Organization created:", response.data);
        } catch (error) {
            console.error("Error creating organization:", error);
        }
    };

    const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
        const item = memoizedCountries[index];
        return (
            <div style={style}>
                <SelectItem value={item.code}>{item.name}</SelectItem>
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center px-4 sm:px-6 pt-16 sm:pt-32 min-h-screen">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Create Organization</h1>
            <div className="w-full max-w-md">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                    <label className="text-sm font-medium">Organization Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Organization Name"
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <label className="text-sm font-medium mt-6">Country</label>
                    <Select value={country} onValueChange={setCountry}>
                        <SelectTrigger className="w-full">
                            <SelectValue>
                                {country ? memoizedCountries.find(c => c.code === country)?.name : "Select a country"}
                            </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                            <List
                                height={200}
                                width="100%"
                                itemCount={memoizedCountries.length}
                                itemSize={40}
                            >
                                {Row}
                            </List>
                        </SelectContent>
                    </Select>

                    <label className="text-sm font-medium mt-6">Logo</label>
                    <input
                        type="file"
                        name="logo"
                        accept="image/*"
                        onChange={(e) => setLogo(e.target.files?.[0] || null)}
                        className="border border-gray-300 rounded-lg p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        className="bg-transparent border-2 border-blue-500 text-blue-500 text-lg sm:text-xl rounded-lg p-2 sm:p-3 hover:bg-blue-500 hover:text-white transition-colors mt-4"
                        type="submit"
                    >
                        Create Organization
                    </button>
                </form>
            </div>
        </div>
    );
}

export default OrganizationCreator;
