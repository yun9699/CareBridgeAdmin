function CareTakerComponent() {
    const dummyData = [
        { id: 1, name: "John Doe", contact: "123-456-7890", address: "123 Main St, City, Country", role: "Nurse" },
        { id: 2, name: "Jane Smith", contact: "987-654-3210", address: "456 Oak St, City, Country", role: "Doctor" },
        { id: 3, name: "Michael Johnson", contact: "555-666-7777", address: "789 Pine St, City, Country", role: "Physiotherapist" },
        { id: 4, name: "Emily Davis", contact: "444-333-2222", address: "101 Maple St, City, Country", role: "Psychologist" }
    ];

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">CareTaker List</h2>
            <ul className="space-y-4">
                {dummyData.map((caretaker) => (
                    <li key={caretaker.id} className="p-4 bg-gray-100 rounded-md shadow-sm">
                        <div className="font-medium text-lg">{caretaker.name} - {caretaker.role}</div>
                        <div className="text-sm text-gray-600">Contact: {caretaker.contact}</div>
                        <div className="text-sm text-gray-600">Address: {caretaker.address}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CareTakerComponent;
