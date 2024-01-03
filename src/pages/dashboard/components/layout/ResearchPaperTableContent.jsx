import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import axios from "axios";
import Link from 'next/link';
import Loader from '@/common/Loader';

const ResearchPaperTableContent = () => {

    const [feedbackdata, setFeedbackdata] = useState([])
    const [isLoading, setisLoading] = useState(false)

    const fetchFeedback = async () => {
        const token01 = localStorage.getItem('token');
        setisLoading(true)
        axios({
            method: "get",
            url: "http://api.clinicalbiosamples.com/api/research/paper/getAll",
            headers: {
                'Authorization': `Bearer ${token01}`,
                token: token01
            }
        }).then((res) => {
            setisLoading(false)
            setFeedbackdata(res?.data?.data);
        }).catch((response) => {
            setisLoading(false)
            console.log(response);
        })
    }

    useEffect(() => {
        fetchFeedback();
    }, [])

    const handleDeleteFeedback = async (id) => {
        const token02 = localStorage.getItem('token');
        setisLoading(true)
        axios({
            method: "delete",
            url: `http://api.clinicalbiosamples.com/api/research/paper/delete/${id}`,
            headers: {
                'Authorization': `Bearer ${token02}`,
                token:token02
            }
        }).then((response) => {
            setisLoading(false)
            console.log(response);
            fetchFeedback()
        }).catch((response) => {
            setisLoading(false)
            console.log(response);
        })
    }

    return (
        <div className="layout-page">
            <Navbar />
            <div className="w-full flex justify-center mx-auto" style={{ marginTop: '100px' }}>
                <div className="flex flex-col">
                    <div className='row' style={{ marginBottom: '20px' }}>
                        <div className='col-6'>
                            <div className='research-paper'>
                                <h3 className='text-gray-500'>Research Paper</h3>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='research-paper text-right'>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                    <Link href="/dashboard/add-research-paper">Add Research Paper</Link>
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
                                                    {index + 1}
                                                </td>

                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-900 flex-shrink-0 w-10 h-10">
                                                        <img className="w-10 h-10 rounded-full" src="/assets/img/blog/research-image-01.png" alt="" />
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="text-sm text-gray-500 research-paper description-limit">
                                                        {items.description}
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-500 research-paper description-limit">
                                                    {items.title}
                                                </td>
                                                
                                                <td className="px-6 py-4">
                                                    <Link href={`/dashboard/edit-research-paper/${items._id}`} className="px-4 py-1 text-sm text-blue-600 bg-blue-200 rounded-full">Edit</Link>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button className="px-4 py-1 text-sm text-red-400 bg-red-200 rounded-full" onClick={() => handleDeleteFeedback(items._id)}>Delete</button>
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
            <Loader isLoading={isLoading} />
        </div>
    )
}

export default ResearchPaperTableContent;