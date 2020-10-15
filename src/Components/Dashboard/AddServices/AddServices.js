import React, { useState } from "react";
import { Button, Form, FormGroup, Row } from "react-bootstrap";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import Axios from "axios";
import { useContext } from "react";
import { MessageContext } from "../../../App";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginFileEncode);

export default function AddServices() {
  const messageInfo = useContext(MessageContext);
  const { message, setMessage } = messageInfo;
  const [files, setFiles] = useState([]);
  const [service, setService] = useState({
    title: "",
    description: "",
  });

  // setting the data in formdata
  const formData = new FormData();
  if (files.length > 0) {
    formData.append("file", files[0].file);
    formData.append("title", service.title);
    formData.append("description", service.description);
  }

  // getting title and descriprion data
  const getServiceData = (e) => {
    if (e.target.name === "title") {
      setService({ ...service, title: e.target.value });
      setMessage({ ...message, success: "", error: "" });
    } else if (e.target.name === "description") {
      setService({ ...service, description: e.target.value });
      setMessage({ ...message, success: "", error: "" });
    }
  };

  const onSubmit = (e) => {
    // selecting title and description input section
    let title = document.querySelector(".title");
    let description = document.querySelector(".description");
    e.preventDefault();

    // sending data to server
    Axios.post("http://localhost:8000/addServices", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        setMessage({ ...message, success: "file Uploaded successfully", error: "" });
        setFiles([]);
        title.value = "";
        description.value = "";
      })
      .catch((error) => {
        setMessage({ ...message, success: "", error: "Sorry, Unable to upload please try again" });
        setFiles([]);
        title.value = "";
        description.value = "";
      });
  };
  return (
    <div className="col-md-12 my-4 p-5 dashboardItemContainer">
      {message.success.length > 0 ? <p className="success">{message.success}</p> : <p className="error">{message.error}</p>}
      <Form onSubmit={onSubmit}>
        <Row className=" ">
          <div className="col-md-6">
            <FormGroup>
              <Form.Label>Service Title</Form.Label>
              <Form.Control onChange={getServiceData} required type="text" className="title" name="title" placeholder="Enter title" />
            </FormGroup>
            <FormGroup>
              <Form.Label>Description</Form.Label>
              <textarea required onChange={getServiceData} className="form-control description" name="description" placeholder="Enter description" rows="3"></textarea>
            </FormGroup>
          </div>
          <div className="col-md-6">
            <FormGroup>
              <Form.Label>Icon</Form.Label>
              <FilePond
                files={files}
                required={true}
                allowFileEncode={true}
                onupdatefiles={setFiles}
                allowMultiple={false}
                maxFiles={3}
                name="files"
                labelIdle="Drag & Drop your photo"
              />
            </FormGroup>
          </div>
          <div className=" mt-5 col-sm-12 d-flex align-items-center justify-content-end">
            <Button className="commonBtn" type="submit">
              submit
            </Button>
          </div>
        </Row>
      </Form>
    </div>
  );
}
