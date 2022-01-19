import React from 'react'

import SectionContainer from "../components/sectionContainer";

import imagem from '../assets/img/404.jpg'
import './Pagina404.css'

const Pagina404 = ({
  totalPages
}) => {
  if (totalPages == 0) {
    return (
      <SectionContainer className="text-center">
        <img className="doguito-imagem" src={imagem} alt="ilustração doguito" />
        <h2 className="h2-responsive mb-4">
          <strong className="font-weight-bold">
          Essa página não existe!
          </strong>
        </h2>
      </SectionContainer>
    )
  } else {
    return null
  }
}

export default Pagina404