import React from "react";

import { useParams } from 'react-router-dom';

import Post from "../components/post";

export default function PostNavPage() {

  const { slug } = useParams();

  return (
    <Post slug={slug}/>
  )

}