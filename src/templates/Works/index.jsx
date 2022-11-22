import * as S from './styles'
import Header from '../../components/Header'
import Carroussel from '../../components/Carroussel/'
import Contact from '../../components/Contact/'
import { NextSeo } from 'next-seo'

const WorksTemplate = ({ heading, images, introText, url }) => (
  <>
    <NextSeo title={`Works - ${heading}`} />
    <Header />
    <div className="container">
      <S.Content>
        <S.Heading>{heading}</S.Heading>
        {introText && (
          <S.IntroText dangerouslySetInnerHTML={{ __html: introText }} />
        )}

        {url && (
          <S.Url href={url} target="_blank">
            See Online <S.LinkExternalIcon />
          </S.Url>
        )}
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
