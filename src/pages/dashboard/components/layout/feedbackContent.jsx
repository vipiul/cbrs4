import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import axios from "axios";

const feedbackContent = () => {

    const [feedbackdata, setFeedbackdata] = useState([])

    const fetchFeedback = async () => {
        let token = localStorage.getItem('token');
        axios({
            method: "get",
            url: "https://sndigitech.in/cbrs/api/feedbacks",
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        }).then((response) => {
            setFeedbackdata(response.data.feedbacks);
        }).catch((response) => {
            console.log(response);
        })
    }

    useEffect(() => {
        fetchFeedback();
    }, [])

    return (
        <div className="layout-page">
            <Navbar />
            <div className="w-full flex justify-center mx-auto" style={{ marginTop: '100px' }}>
                <div className="flex flex-col">
                    <div className="w-full">
                        <div className="border-b border-gray-200 shadow">
                            <table className="divide-y divide-gray-300 ">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-2 text-center text-xs text-gray-500">
                                            ID
                                        </th>
                                        <th className="px-6 py-2 text-center text-xs text-gray-500">
                                            Image
                                        </th>
                                        <th className="px-6 py-2 text-center text-xs text-gray-500">
                                            Description
                                        </th>
                                        <th className="px-6 py-2 text-center text-xs text-gray-500">
                                            Title
                                        </th>
                                        <th className="px-6 py-2 text-center text-xs text-gray-500">
                                            Name
                                        </th>
                                        <th className="px-6 py-2 text-center text-xs text-gray-500">
                                            Edit
                                        </th>
                                        <th className="px-6 py-2 text-center text-xs text-gray-500">
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-300">
                                    {
                                        feedbackdata.map((items, index) => (
                                            <tr className="whitespace-nowrap" key={index}>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {items.id}
                                                </td>

                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900 flex-shrink-0 w-10 h-10">
                                                        <img className="w-10 h-10 rounded-full" src={items.thumbnail} alt="" />
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-500">
                                                        {items.description}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {items.title}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500">
                                                    {items.name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <a href="#" className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full">Edit</a>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <a href="#" className="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full">Delete</a>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default feedbackContent