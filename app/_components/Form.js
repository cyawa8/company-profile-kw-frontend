"use client"

import { Upload } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";

export default function Form({ fields=[], onSubmit, formData, setFormData }){

    const handleChange = (e, name, type) => {
    if (type === "file") {
        const fileList = (e.fileList || []).map((file, index) => ({
        ...file,
        uid: file.uid || `${name}-${index}-${Date.now()}`, // pastikan UID ada dan unik
        }));
        setFormData(prev => ({ ...prev, [name]: fileList }));
    } else {
        const { value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }
    };

    return(
        <form onSubmit={onSubmit} className="space-y-4"> 
            {fields.map((field)=>(
                <div key={field.name} className="flex flex-col">
                    <label htmlFor={field.name} className="mb-1 font-medium">
                        {field.label}
                    </label>

                    {field.type === "file" ? 
                        (
                            <Upload
                                listType="picture-card"
                                multiple={field.multiple}
                                accept=".jpg,.jpeg,.png"
                                beforeUpload={(file) => {
                                    const isImage = file.type === "image/jpeg" || file.type === "image/png";
                                    if (!isImage) {
                                    alert("Hanya file JPG/PNG yang diperbolehkan!");
                                    }
                                    return false;
                                }}
                                fileList={formData[field.name]}
                                onChange={(info) => {
                                    handleChange({ fileList: info.fileList }, field.name, "file");
                                }}

                                >
                                {formData[field.name].length < (field.max || 1) && (
                                    <div>
                                    <PlusOutlined />
                                    <div style={{ marginTop: 8 }}>Upload</div>
                                    </div>
                                )}
                            </Upload>
                        ) : (
                            <input 
                                type={field.type || "text"}
                                name={field.name}
                                id={field.name}
                                placeholder={field.placeholder || ""}
                                value={formData[field.name]}
                                onChange={(e) =>
                                    setFormData((prev) => ({
                                    ...prev,
                                    [field.name]: e.target.value,
                                    }))
                                }
                                required={field.required}
                                className="border rounded-md px-3 py-2"
                            />
                        )
                    }
                </div>
            ))}
        </form>
    );
}