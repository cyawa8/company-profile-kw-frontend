"use client"

import { useMemo, useState } from "react";
import Tabel from "../_components/Table";
import {useQueryClient, useMutation} from "@tanstack/react-query";
import Loading from "../loading";
import H1 from "../_components/H1";
import Button from "../_components/Button";
import Form from "../_components/Form";
import { Modal } from "antd";
import toast from "react-hot-toast";
import { createHomeContent } from "@/pages/_lib/api";
import Image from "next/image";
import { useAboutContent } from "@/pages/hooks/useAboutContent";

const metadata = {
  title: "About",
};

const fields=[
    {
        name: "title",
        label: "title",
        required:true,
    },
    {
        name:"subtitle",
        label:"SubTitle",
    },
    {
        name:"content",
        label:"content",
    },
    {
        name:"image",
        label:"image",
        type:"file",
        required:true,
        max:1,
    }
];

function generateInitialFormData(fields, initialValues = {}) {
return fields.reduce((acc, field) => {
    acc[field.name] =
    field.type === "file"
        ? initialValues[field.name] || []
        : initialValues[field.name] || "";
    return acc;
}, {});
}

export default function Page() {
    const {data, isLoading, error} = useAboutContent();
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState(()=>
    generateInitialFormData(fields)
    );

    const queryClient = useQueryClient();

    const {mutate : addContent, isLoading : isSaving} = useMutation({
        mutationFn : createHomeContent,
        onSuccess: ()=>{
            toast.success("Success add and save data");
            queryClient.invalidateQueries({queryKey:['homeContent']});
            setFormData(generateInitialFormData(fields));
            setShowModal(false);
        }, 
        onError: err=>{
            toast.error("err.message");
        }
    })

    const handleSubmit = async (e) => {
    e.preventDefault();

    const requiredField = fields.find(field => field.required && (
    !formData[field.name] ||
    (field.type === 'file' && formData[field.name].length === 0)
    ));

    if (requiredField) {
        toast.error(`${requiredField.label} is required.`)
        return;
    }

        const form = new FormData();
        form.append("title", formData.title);
        form.append("subtitle", formData.subtitle);
        form.append("image", formData.image[0].originFileObj); // Ambil file aslinya
        addContent(form);
    };

    const handleOpenForm = () => {
        setFormData(generateInitialFormData(fields));
        setShowModal(true);
    }
    
    const nameFilter = useMemo(() => {
        const uniqueNames = [...new Set(data.map((datas) => datas.title))];
        return uniqueNames.map((id) => ({
        text: id,
        value: id,
        }));
    }, [data]);

    if(error) return <p>Gagal:{error.message}</p>;
    if (isLoading || !data) return <Loading />;

    const columns = [{
        title : 'title',
        dataIndex : 'title',
        filters : nameFilter,
        onFilter : (value, record)=>record.title.includes(value),
    },
    {
        title : 'subtitle',
        dataIndex : 'subtitle',
        filters : nameFilter,
        onFilter : (value, record)=>record.title.includes(value),
    },
    {
        title : 'content',
        dataIndex : 'content',
        filters : nameFilter,
        onFilter : (value, record)=>record.title.includes(value),
    },
    {
        title : 'created_at',
        dataIndex : 'created_at',
        sorter : (a, b) => a.created_at - b.created_at,  
    },
    {
        title : 'image',
        dataIndex : 'image',
        render: (text) => (
        <Image 
            className="object-cover"
            src={`http://localhost:8000/storage/${text}`} 
            alt="content about" 
            width={40}    // w-10 = 2.5rem = 40px
            height={40}   // biar kotak persegi
        />
        ),
    },
    {
        title : 'Action',
    },
    ];

    return (
        <>
            <H1>About Page Management</H1>
            <Button variation="primary" 
                onClick={handleOpenForm}
                >
                Add Data
            </Button>

            {showModal && (
            <Modal
                open={showModal}
                title="Add Item"
                onCancel={() => setShowModal(false)}
                footer={null}
            >

                <Form
                    fields={fields}
                    formData={formData}
                    setFormData={setFormData}
                    onSubmit={handleSubmit}
                />

                <div className="flex justify-end gap-2 mt-4">
                <Button onClick={() => setShowModal(false)} variation="secondary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} disabled={isSaving} variation="primary">
                    Add and Save
                </Button>
                </div>
            </Modal>
            )}
            
            <Tabel columns={columns} dataSource={data}/>
        </>
    );
}