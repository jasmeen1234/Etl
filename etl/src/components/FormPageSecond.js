import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone';
const FormPageSecond = () => {
    const [files, setFiles] = useState({});
    const [formData, setFormData] = useState({
        '10thMarksheet': '',
        '12thMarksheet': '',
        'graduationMarksheet': '',
        'offerLetter': '',
        'salarySlip': '',
        'bankStatement': '',
    });

    const onDrop = (acceptedFiles, fieldName) => {
        // Validate file size
        const maxSize = 100 * 1024*1024; // 5KB
        const isValidSize = acceptedFiles.every((file) => file.size <= maxSize);

        if (!isValidSize) {
            alert('File size exceeds the limit (5KB). Please upload smaller files.');
            return;
        }

        // Handle accepted files
        setFiles({ ...files, [fieldName]: acceptedFiles[0] });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name)
        setFormData({ ...formData, [name]: value });
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: (acceptedFiles) => onDrop(acceptedFiles, '10thMarksheet'),
        accept: 'application/pdf, image/png',
        multiple: false,
    });
    return (
       
            <div style={{margin:"20px"}} >
                <div {...getRootProps()} >
                    <input {...getInputProps()} />
                </div>
                <label>1. 10th Marksheet*</label><br></br>
                <div {...getRootProps()} >
                    <input
                        type="text"
                        id="10thMarksheet"
                        placeholder="Attach file upto 5kb"
                        name="10thMarksheet"
                        value={formData['10thMarksheet']}
                        onChange={handleChange}
                        style={{ width: "50%", padding: "5px" }}
                    /><br></br>
                </div>
                <label htmlFor="12thMarksheet">2. 12th Marksheet*</label>
                <div {...getRootProps()} >
                    <input
                        type="text"
                        id="10thMarksheet"
                        placeholder="Attach file upto 5kb"
                        name="10thMarksheet"
                        value={formData['10thMarksheet']}
                        onChange={handleChange}
                        style={{ width: "50%", padding: "5px" }}
                    />
                </div><br></br>
                <label htmlFor="graduationMarksheet">3. Graduation Marksheet:</label>
                <div {...getRootProps()} >
                    <input
                        type="text"
                        id="10thMarksheet"
                        placeholder="Attach file upto 5kb"
                        name="10thMarksheet"
                        value={formData['10thMarksheet']}
                        onChange={handleChange}
                        style={{ width: "50%", padding: "5px" }}
                    />
                </div><br></br>
                <label htmlFor="pgMarksheet">4.Post Graduation Marksheet:</label>
                <div {...getRootProps()} >
                    <input
                        type="text"
                        id="10thMarksheet"
                        placeholder="Attach file upto 5kb"
                        name="10thMarksheet"
                        value={formData['10thMarksheet']}
                        onChange={handleChange}
                        style={{ width: "50%", padding: "5px" }}
                    /></div><br></br>
                <label htmlFor="offerletter">5. Offer Letter*:</label>
                <div {...getRootProps()} >
                    <input
                        type="text"
                        id="10thMarksheet"
                        name="10thMarksheet"
                        placeholder="Attach file upto 5kb"
                        value={formData['10thMarksheet']}
                        onChange={handleChange}
                        style={{ width: "50%", padding: "5px" }}
                    /></div><br></br>
                <label htmlFor="salaryslipst">6. Salary Slips*:</label>
                <div {...getRootProps()} >
                    <input
                        type="text"
                        id="10thMarksheet"
                        placeholder="Attach file upto 5kb"
                        name="10thMarksheet"
                        value={formData['10thMarksheet']}
                        onChange={handleChange}
                        style={{ width: "50%", padding: "5px" }}
                    /></div><br></br>
                <label htmlFor="bankStatement">7. Bank Statement:</label>
                <div {...getRootProps()} >
                    <input
                        type="text"
                        id="10thMarksheet"
                        placeholder="Attach file upto 5kb"
                        name="10thMarksheet"
                        value={formData['10thMarksheet']}
                        onChange={handleChange}
                        style={{ width: "50%", padding: "5px" }}
                    /></div><br></br>
                <label htmlFor="incrementletter">8. increment Letter(if any):</label>
                <div {...getRootProps()} >
                    <input
                        type="text"
                        style={{ width: "50%", padding: "5px" }}
                        id="10thMarksheet"
                        placeholder="Attach file upto 5kb"
                        name="10thMarksheet"
                        value={formData['10thMarksheet']}
                        onChange={handleChange}
                    /></div><br></br>
                <label htmlFor="others">9. Others(if any)</label>
                <div {...getRootProps()} >
                    <input
                        style={{ width: "50%", padding: "5px" }}
                        type="text"
                        id="10thMarksheet"
                        placeholder="Attach file upto 5kb"
                        name="10thMarksheet"
                        value={formData['10thMarksheet']}
                        onChange={handleChange}
                    />
                </div>
            </div>

     
    )
}

export default FormPageSecond