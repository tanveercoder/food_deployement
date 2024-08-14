import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
    const [orderData, setOrderData] = useState({ order_data: [] });

    const fetchMyOrder = async () => {
        const email = localStorage.getItem('userEmail');
        try {
            const response = await fetch("http://localhost:5000/api/myorderData", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });
            const data = await response.json();
            console.log('Fetched data:', JSON.stringify(data, null, 2));

            // Sort the order data by order_date in descending order
            const sortedOrderData = data.order_data.map(order => 
                order.sort((a, b) => new Date(b.order_date) - new Date(a.order_date))
            ).sort((a, b) => new Date(b[0].order_date) - new Date(a[0].order_date));

            setOrderData({ order_data: sortedOrderData });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    const parseDate = (date) => {
        const parsedDate = new Date(date);
        return isNaN(parsedDate.getTime()) ? 'Invalid Date' : parsedDate.toLocaleDateString();
    };

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto p-4">
                <div className="flex flex-col space-y-8">
                    {Array.isArray(orderData.order_data) && orderData.order_data.length > 0 ? (
                        orderData.order_data.map((order, index) => (
                            <div key={index} className="space-y-6">
                                {order.length > 0 && order[0].order_date && (
                                    <div className="text-center mt-6">
                                        <h3 className="text-xl font-semibold text-gray-700">{parseDate(order[0].order_date)}</h3>
                                        <hr className="my-4 border-gray-300" />
                                    </div>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {order.map((item, itemIndex) => (
                                        item.order_date ? null : (
                                            <div className="bg-white border rounded-lg shadow-lg overflow-hidden" key={itemIndex}>
                                                <img src={item.imageSrc} className="w-full h-40 object-cover" alt={item.title} />
                                                <div className="p-4">
                                                    <h5 className="text-lg font-bold text-gray-800">{item.title}</h5>
                                                    <div className="flex justify-between items-center mt-2">
                                                        <span className="text-gray-600">{item.quantity} x {item.size}</span>
                                                        <span className="text-gray-800 text-lg font-semibold">₹{item.price}/-</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center text-gray-500">No orders found.</div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
