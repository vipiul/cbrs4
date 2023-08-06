import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import axios from "axios";
import Link from 'next/link';

const CustomerFeedbackContent = () => {

    const [feedbackdata, setFeedbackdata] = useState([])

    const fetchFeedback = async () => {
        const token01 = localStorage.getItem('token');

        axios({
            method: "get",
            url: "https://sndigitech.in/cbrs/api/feedbacks",
            headers: {
                'Authorization': `Bearer ${token01}`,
            }
        }).then(({data : {feedbacks}}) => {
            setFeedbackdata(feedbacks);
        }).catch((response) => {
            console.log(response);
        })
    }

    useEffect(() => {
        fetchFeedback();
    }, [])

    const handleDeleteFeedback = async (id) => {
        const token02 = localStorage.getItem('token');

        axios({
            method: "delete",
            url: `https://sndigitech.in/cbrs/api/feedback/${id}`,
            headers: {
                'Authorization': `Bearer ${token02}`,
            }
        }).then((response) => {
            console.log(response);
            fetchFeedback()
        }).catch((response) => {
            console.log(response);
        })
    }

    return (
        <div className="layout-page">
            <Navbar />
            <div className="w-full flex justify-center mx-auto" style={{ marginTop: '100px' }}>
                <div className="flex flex-col">
                <div className='row' style={{marginBottom: '20px'}}>
                        <div className='col-6'>
                            <div className='research-paper'>
                                <h3 className='text-gray-500'>Research Paper</h3>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='research-paper text-right'>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    <Link href="/dashboard/add-customer-feedback">Add Feedback</Link>
                                </button>
                            </div>
                        </div>
                    </div>
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
                                                    <a href={`/dashboard/edit-feedback/${items.id}`} className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full">Edit</a>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button className="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full" onClick={() => handleDeleteFeedback(items.id)}>Delete</button>
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

export default CustomerFeedbackContent