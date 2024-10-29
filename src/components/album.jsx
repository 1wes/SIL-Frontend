import React, { Fragment } from "react";

import PageHeader from "./page-header";

import useAuthRedirection from "../hooks/useAuthRedirection";

import axios from "../utils/axios";

import useSWR from "swr";

import { useParams, Link } from "react-router-dom";

import "./album.css";

import Loader from "./loader";

const fetcher = (url) => axios.get(url).then((response) => response.data);

const Album = () => {
  useAuthRedirection();

  const userId = useParams().userId;
  const albumId = useParams().albumId;

  const { isLoading, data: album } = useSWR(
    `https://sil-ta-api.onrender.com/api/albums/${albumId}`,
    fetcher
  );
  const { data: photos } = useSWR(
    `https://sil-ta-api.onrender.com/api/photos/album/${albumId}`,
    fetcher
  );

  const imageList =
    photos &&
    Array.from(photos).map((photo) => {
      return (
        <li key={photo.id}>
          <Link
            className="images-link"
            to={`/users/${userId}/albums/${albumId}/photos/${photo.id}`}
          >
            {photo.title}
          </Link>
        </li>
      );
    });

  return (
    <Fragment>
      <main className="album-component">
        <PageHeader header={album && album.title} />
        <h1 className="album-details">
          {photos && `${photos?.length || 0} total photos`}
        </h1>
        <PageHeader header={`Photos`} />
        {isLoading ? <Loader info={`album photos`} /> : <ul className="images-list">{imageList}</ul>}
      </main>
    </Fragment>
  );
};

export default Album;
