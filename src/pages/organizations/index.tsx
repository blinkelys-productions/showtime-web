function Organization() {
    const organizations = [
        {
            id: 1,
            name: "Organization 1",
            logo: "https://placehold.co/200x200",
            joinedDate: "January 1, 2023"
        },
        {
            id: 2,
            name: "Organization 2",
            logo: "https://placehold.co/200x200",
            joinedDate: "February 15, 2023"
        },
        {
            id: 3,
            name: "Organization 3",
            logo: "https://placehold.co/200x200",
            joinedDate: "March 30, 2023"
        }
    ];

    return (
        <div className="flex flex-col items-center h-screen pt-32">
            <h1 className="text-4xl font-bold mb-8">My Organizations</h1>
            {organizations.length === 0 ? (
                <p className="text-gray-600">You have no organizations</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <a href="/organizations/create" className="bg-transparent border-2 border-blue-500 text-blue-500 rounded-lg p-4 flex text-xl items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                        <span className="font-semibold">Create Organization</span>
                    </a>
                    {organizations.map((org) => (
                        <a key={org.id} href={`/organizations/${org.id}`} className="bg-white shadow-md rounded-lg p-4 flex items-center hover:shadow-lg transition-shadow">
                            <div className="w-32 h-32 mr-4">
                                <img 
                                    src={org.logo}
                                    alt={`${org.name} logo`}
                                    className="w-full h-full object-contain"
                                />
                            </div>
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