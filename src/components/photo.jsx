import React, { Fragment, useState, useEffect, useRef } from "react";

import useAuthRedirection from "../hooks/useAuthRedirection";

import "./photo.css";

import useSWR from "swr";

import axios from "../utils/axios";

import { useParams } from "react-router-dom";

import PageHeader from "./page-header";

import { MdModeEdit } from "react-icons/md";

import { Button } from "@mui/material";

import Loader from "./loader";

import Snackbar from "@mui/material/Snackbar";

const fetcher = (url) => axios.get(url).then((response) => response.data);

const Photo = () => {
  useAuthRedirection();

  const [photo, setPhoto] = useState();
  const [edit, setEdit] = useState(true);
  const [newTitle, setNewTitle] = useState();
  const [open, setOpen] = useState(false);

  const photoId = useParams().id;

  const { data: photoDetails } = useSWR(
    `https://jsonplaceholder.typicode.com/photos/${photoId}`,
    fetcher
  );

  const editRef = useRef(null);

  useEffect(() => {
    if (photoDetails) {
      setPhoto(photoDetails);
    }
  }, [photoDetails]);

  // update photo object when photo title is changed
  const handleChange = (e) => {
    const newName = e.target.value;

    setNewTitle(newName);
  };

  const makeEditable = () => {
    setNewTitle(() => photo.title);

    setEdit(false);

    editRef.current.focus();
  };

  const cancelEditing = () => {
    setEdit(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  const changePhotoTitle = (e) => {
    e.preventDefault();

    setPhoto({
      ...photo,
      title: newTitle,
    });

    let patchContent = {
      title: newTitle      
    }

    axios
      .patch(
        `https://jsonplaceholder.typicode.com/photos/${photoId}`, patchContent,
        {
          headers: {
            "Content-Type": "application/json", 
          },
        }
      )
      .then((res) => {
        setOpen(true);
      })
      .catch((err) => {
        console.log(err); 
      });

    setEdit(true);
  };

  return (
    <Fragment>
      <Snackbar open={open} autoHideDuration={3000} message={`Photo title changed successfully`} anchorOrigin={{ vertical: "top", horizontal: "right" }}
       onClose={handleClose} />
      <main className="photo-component">
        <PageHeader header={`Photo`} />
        {photo ? (
          <>
            <div className="photo-title">
              <span className="title">
                <form onSubmit={changePhotoTitle}>
                  <input
                    className={!edit ? "editable-input" : ""}
                    name="title"
                    ref={editRef}
                    value={
                      !edit
                        ? newTitle !== ""
                          ? newTitle
                          : ""
                        : photo
                        ? photo.title
                        : ""
                    }
                    type="text"
                    onChange={handleChange}
                    readOnly={edit}
                  ></input>

                  {!edit && (
                    <div className="submit-btns">
                      <Button
                        variant="outlined"
                        color="error"
                        style={{ textTransform: "capitalize" }}
                        onClick={cancelEditing}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        type="submit"
                        color="success"
                        style={{ textTransform: "capitalize" }}
                      >
                        Save New Title
                      </Button>
                    </div>
                  )}
                </form>
              </span>
              <span className="edit" onClick={makeEditable}>
                <i>
                  <MdModeEdit />
                </i>{" "}
                Edit Title
              </span>
            </div>
            <div className="photo">
              <img src={photo && photo.url} alt="retrievedPhoto" />
            </div>
          </>
        ) : (
          <Loader info={`photo details`} />
        )}
      </main>
    </Fragment>
  );
};

export default Photo;
