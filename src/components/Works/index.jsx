import * as S from './style'
import FeaturedWork from '../FeaturedWork/'
import WorkItem from '../WorkItem/'

const Works = () => (
  <>
    <S.Wrapper id="works">
      <S.Container>
        <h4 className="subheading">WORKS</h4>
        <h2 className="subtitle">Some Things I’ve Built</h2>
        <S.FeaturedWorkItems>
          <FeaturedWork
            link="blisset"
            title="Blissett Wealth"
            description="Website"
          />
          <FeaturedWork
            link="comlink"
            title="Comlink"
            description="Portal B2B"
          />
          <FeaturedWork
            link="mount-eden"
            title="Mount Eden"
            description="Website"
          />
        </S.FeaturedWorkItems>

        <S.MoreWorks>
          <h2 className="subtitle">More Works</h2>
          <S.MoreWorkWrapper>
            <WorkItem
              link="https://aspirefurniture.co.nz/"
              title="Aspire Furniture"
              tag="Live Website"
            />
            <WorkItem
              link="https://www.figma.com/proto/NVnjx6slugKcV3jgKYsKKJ/Harcourts-Milestone-Projects?page-id=0%3A1&node-id=1%3A66&viewport=241%2C48%2C0.14&scaling=min-zoom"
              title="Harcouts Milestone Projects"
              tag="Figma Website Design File"
            />
            <WorkItem
              link="https://www.figma.com/proto/oMp7p30PggYt35hjuEa4eD/Me-Moir?page-id=0%3A1&node-id=7%3A2&viewport=241%2C48%2C0.51&scaling=min-zoom"
              title=" Me-Moir "
              tag="Figma Website Design File"
            />
            <WorkItem
              link="https://lusciouslivingsilverdale.co.nz/"
              title="Luscious Living Silverdale"
              tag="Live Landing Page"
            />
            <WorkItem
              link="https://flowerstation.co.nz"
              title="Flower Station"
              tag="eCommerce"
            />
            <WorkItem
              link="https://kiwicoasthoney.co.nz "
              title="Kiwi Coast Honey"
              tag="Live Website"
            />
          </S.MoreWorkWrapper>
        </S.MoreWorks>
      </S.Container>
    </S.Wrapper>
  </>
)

export default Works
