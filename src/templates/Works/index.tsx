import * as S from './styles'
import Header from 'components/Header/'
import Carroussel from 'components/Carroussel/'
import Contact from 'components/Contact/'

export type WorksTemplateProps = {
  heading: string
  images: Array<string>
}

const WorksTemplate = ({ heading, images }: WorksTemplateProps) => (
  <>
    <Header />
    <div className="container">
      <S.Content>
        <S.Heading>{heading}</S.Heading>

        <S.Body>
          {images.map((image) => (
            <img src={image} key={image} alt="" />
          ))}

          <S.LinkHome href="/"> See more</S.LinkHome>
        </S.Body>
      </S.Content>
    </div>
    <Carroussel />
    <Contact />
  </>
)

export default WorksTemplate
