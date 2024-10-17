import React, { useState, useRef, useMemo } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Sidebar from "../../common/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import JoditEditor from 'jodit-react';
import { toast } from "react-toastify";
import { apiUrl, token, fileUrl } from "../../common/Http";
import { set, useForm } from "react-hook-form";

const Edit = ({ placeholder }) => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [service, setService] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const [imageId, setImageId] = useState(null);
    const params = useParams();

    const config = useMemo(() => (
        {
            readonly: false,
            placeholder: placeholder || ''
        }),
        [placeholder]

    );
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm({
        defaultValues: async () => {
            const res = await fetch(apiUrl + 'services/' + params.id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                }
            });
            const result = await res.json();
            setContent(result.data.content);
            setService(result.data);
            return {
                title: result.data.title,
                slug: result.data.slug,
                short_description: result.data.short_description,
                status: result.data.status,

            }
        }
    });
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        const newData = { ...data, "content": content, "imageId": imageId }
        const res = await fetch(apiUrl + 'services/' + params.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${token()}`
            },
            body: JSON.stringify(newData)
        });
        const result = await res.json();
        if (result.status == true) {
            toast.success(result.message);
            navigate('/admin/services');
        } else {
            toast.error(result.message);
        }
        console.log(result);

    };
    const handleFile = async (e) => {
        const formData = new FormData();
        const file = e.target.files[0];
        formData.append('image', file);
        try {
            const response = await fetch(apiUrl + 'temp-images', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                },
                body: formData
            });
            const result = await response.json();
            if (result.status === false) {
                toast.error(result.errors.image[0]);
            } else {
                setImageId(result.data.id);
            }
        } catch (error) {
            toast.error("An error occurred while uploading the image.");
            console.error(error); // Log the error for debugging
        }
    }
    return (
        <>
            <Header />
            <main className="dashboard my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            {/* Sidebar */}
                            <Sidebar />
                        </div>
                        <div className="col-md-9">
                            {/* SERVICES */}
                            <div className="card shadow border-0">
                                <div className="card-body P-4">
                                    <div className='d-flex justify-content-between'>
                                        <h5>Services/Edit</h5>
                                        <Link to="/admin/services" className="btn btn-primary">Back</Link>
                                    </div>
                                    <hr />
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">Title</label>
                                            <input
                                                {
                                                ...register('title', {
                                                    required: "Title is required"
                                                })
                                                }
                                                type="text" className={`form-control ${errors.title && 'is-invalid'}`} placeholder="Enter service title" />
                                            {
                                                errors.title && (<p className="invalid-feedback">{errors.title?.message}</p>)
                                            }
                                        </div>
                                        <div className="mb-3" >
                                            <label htmlFor="slug" className="form-label">Slug</label>
                                            <input type="text"
                                                {
                                                ...register('slug', {
                                                    required: "Slug is required"
                                                })
                                                }
                                                className={`form-control ${errors.slug && 'is-invalid'}`} placeholder="Enter service slug" />
                                            {
                                                errors.slug && (<p className="invalid-feedback">{errors.slug?.message}</p>)
                                            }
                                        </div>
                                        <div className="mb-3" >
                                            <label htmlFor="description" className="form-label">Description</label>
                                            <textarea
                                                {
                                                ...register('short_description')
                                                }
                                                placeholder="Description"
                                                className="form-control" rows={4}></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="content" className="form-label">Content</label>
                                            <JoditEditor
                                                ref={editor}
                                                value={content}
                                                tabIndex={1}
                                                onBlur={newContent => setContent(newContent)}
                                                onChange={newContent => { }}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="image" className="form-label">Image</label>
                                            <input onChange={handleFile} name="image" type="file" className="form-control" />

                                        </div>
                                        <div className="pb-3">
                                            {
                                                service.image && <img src={fileUrl + 'uploads/services/small/' + service.image} alt="" />
                                            }

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="status" className="form-label">Status</label>
                                            <select
                                                {
                                                ...register('status')
                                                }
                                                className="form-select" aria-label="Default select example">
                                                <option value="1">Active</option>
                                                <option value="0">Block</option>
                                            </select>
                                        </div>
                                        <button disabled={isDisabled} className="btn btn-primary">Update</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
            <Footer />
        </>
    )
}
export default Edit;