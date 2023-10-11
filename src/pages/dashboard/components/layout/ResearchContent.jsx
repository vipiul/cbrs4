import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import axios from "axios";
import { useRouter } from 'next/router';
import Loader from '@/common/Loader';

const FeedbackContent = () => {

    const { push } = useRouter();

    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setisLoading] = useState(false)

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    // I am calling api form the server
    const addfeedback = async () => {
        // I am getting form th localstorage
        let token = localStorage.getItem('token');

        var formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('thumbnail', file);
        setisLoading(true)
        axios({
            method: "post",
            url: "https://cbrsweb.onrender.com/api/research/paper/add",
            data: formData,
            headers: {
                'Content-Type': `multipart/form-data;`,
                'Authorization': `Bearer ${token}`,
                token: token
            }
        }).then((res) => {
            setisLoading(false)
            console.log(res);
            if (res?.data?.error) {
                alert("Research feild data is not set in the table.")
            } else {
                alert("Research add successfully.");
                push("/dashboard/research-paper")
            }
        }).catch((response) => {
            setisLoading(false)
            console.log(response);
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        addfeedback();
        setTitle('');
        setDescription('');
        setFile(null);
    }

    return (
        <div className="layout-page">
            <Navbar />
            <div style={{ marginTop: '30px' }}>
                <section className="bg-gray-0 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center mx-auto lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Add Research
                                </h1>
                                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} method='POST'>
                                    <div>
                                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Title</label>
                                        <input type="text"
                                            name='title'
                                            value={title}
                                            onChange={handleTitleChange}
                                            id="title" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Your title"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Description</label>
                                        <textarea type="textarea"
                                            name='description'
                                            value={description}
                                            onChange={handleDescriptionChange}
                                            id="description" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            rows="3"
                                            placeholder="Your Description"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Only Pdf formate allow.</label>
                                        <input
                                            type="file" accept="application/pdf"
                                            onChange={handleFileChange}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                    </div>
                                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Loader isLoading={isLoading} />
        </div>
    )
}

export default FeedbackContent