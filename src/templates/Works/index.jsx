import * as S from './styles'
import Header from '../../components/Header'
import Carroussel from '../../components/Carroussel/'
import Contact from '../../components/Contact/'
import { NextSeo } from 'next-seo'

const WorksTemplate = ({ heading, images }) => (
  <>
    <NextSeo title={`Works - ${heading}`} />
    <Header />
    <div className="container">
      <S.Content>
        <S.Heading>{heading}</S.Heading>

        <S.Body>
          {images.map((image) => (
            <img src={image} key={image} alt="" />
          ))}

          <S.LinkHome href="/#works"> See more Works</S.LinkHome>
        </S.Body>
      </S.Content>
    </div>
    <Carroussel />
    <Contact />
  </>
)

export default WorksTemplate
