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
            link="kiwi-driving-test"
            title="Kiwi Driving Test"
            description="Web App"
          />
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
        </S.FeaturedWorkItems>

        <S.MoreWorks>
          <h2 className="subtitle">More Works</h2>
          <S.MoreWorkWrapper>
            <WorkItem
              link="https://www.freedom2play.co.nz/"
              title="Freedom2Play"
              tag="Shopify - Ecommerce"
              icon="shopify"
            />
            <WorkItem
              link="https://aspirefurniture.co.nz/"
              title="Aspire Furniture"
              tag="Website"
              icon="wordpress"
            />
            <WorkItem
              link="https://flowerstation.co.nz"
              title="Flower Station"
              tag="Woocommerce - Ecommerce "
              icon="woo"
            />

            <WorkItem
              link="https://kiwi4wdexplore.co.nz/"
              title="Kiwi 4WD Explore"
              tag="Shopify - Ecommerce"
              icon="shopify"
            />

            <WorkItem
              link="https://www.figma.com/proto/NVnjx6slugKcV3jgKYsKKJ/Harcourts-Milestone-Projects?page-id=0%3A1&node-id=1%3A66&viewport=241%2C48%2C0.14&scaling=min-zoom"
              title="Harcouts Milestone Projects"
              tag="Figma - Website Design File"
              icon="figma"
            />
            <WorkItem
              link="https://www.figma.com/proto/oMp7p30PggYt35hjuEa4eD/Me-Moir?page-id=0%3A1&node-id=7%3A2&viewport=241%2C48%2C0.51&scaling=min-zoom"
              title=" Me-Moir "
              tag="Figma - Website Design File"
              icon="figma"
            />

            <WorkItem
              link="https://kiwicoasthoney.co.nz "
              title="Kiwi Coast Honey"
              tag="Website"
              icon="wordpress"
            />
            <WorkItem
              link="https://www.figma.com/proto/sR5UBh1NzcdpFiwaj67GXP/6Movement?page-id=103%3A24&node-id=103%3A88&viewport=482%2C381%2C0.16&scaling=min-zoom"
              title="6 Movement"
              tag="Figma - Website Design File"
              icon="figma"
            />
          </S.MoreWorkWrapper>
        </S.MoreWorks>
      </S.Container>
    </S.Wrapper>
  </>
)

export default Works
