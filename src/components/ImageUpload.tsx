import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { Box } from "@mui/material";

import { signal } from "@preact/signals-react";

import UploadIcon from "../assets/svg/UploadIcon";

const ImageFiles = signal<File[]>([]);

const MyDropzone = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
    console.log(acceptedFiles);
    ImageFiles.value = acceptedFiles;
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        borderRadius: "1rem",
        backgroundColor: "#DFEFFF",
        marginInline: "auto",
        cursor: "pointer",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <UploadIcon />
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        {ImageFiles.value.map((item, index) => {
          return (
            <img
              src={URL.createObjectURL(item)}
              alt={item?.name}
              style={{ width: "100px", aspectRatio: 1 / 1 }}
              key={index + "ImageUpload"}
            />
          );
        })}
      </Box>
    </div>
  );
};

export default MyDropzone;
