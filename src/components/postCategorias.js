import React, { useEffect, useState } from 'react';

import SectionContainer from "./sectionContainer";

import {
  MDBBtn
} from "mdbreact";

import parse from "html-react-parser";

import { getCategorias } from '../services/wordpressApi';

export default function PostCategorias() {
  const [categorias, setCategorias] = useState([]);

  const getCategoriasData = async () => {
    try {
      await getCategorias()
        .then((data) => {
          const list = data.json;        
          console.log('categorias') 
          list.splice(3,1)
          console.log(list)
          setCategorias(list);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategoriasData()
  }, [])


  return (
    <SectionContainer className="text-center">
      {categorias.map((categoria, index) =>
        <MDBBtn color="primary" href={"http://localhost:3000/blog/" + categoria.id} key={index}>
          {parse(categoria.name)}
        </MDBBtn>
      )}
    </SectionContainer>
  );
}