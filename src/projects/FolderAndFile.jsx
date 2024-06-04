import React from "react";

const myFiles = [
  {
    name: "Folder 1",
    type: "folder",
    children: [
      {
        name: "File1.js",
        type: "file",
      },
      {
        name: "File2.js",
        type: "file",
      },
    ],
  },
  {
    name: "Folder 2",
    type: "folder",
    children: [
      {
        name: "File3.js",
        type: "file",
      },
      {
        name: "File4.js",
        type: "file",
      },
    ],
  },
  {
    name: "File5.js",
    type: "file",
  },
  {
    name: "File6.js",
    type: "file",
  },
];

const FolderAndFile = () => {
  const [files, setFiles] = React.useState(myFiles);

  return (
    <div>
      {files.map((file, index) => (
        <div key={index}>
          {file.type === "folder" ? (
            <div>
              <p>{file.name}</p>
              {file.children.map((child, index) => {
                return <p key={index}>{child.name}</p>;
              })}
            </div>
          ) : (
            <p>{file.name}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FolderAndFile;
