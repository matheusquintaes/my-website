import * as S from './style'

const Works = () => (
  <>
    <S.Wrapper>
      <S.Container>
        <h4 className="subheading">WORKS</h4>
        <h2 className="subtitle">Some Things I’ve Built</h2>
        <S.FeaturedWorkWrapper>
          <S.FeaturedWork>
            <S.FeaturedWorkTitle>Blissett Wealth</S.FeaturedWorkTitle>
            <S.FeaturedWorkDescription>Website</S.FeaturedWorkDescription>
          </S.FeaturedWork>
          <S.FeaturedWork>
            <S.FeaturedWorkTitle>ComLink</S.FeaturedWorkTitle>
            <S.FeaturedWorkDescription>
              Product Design/Development
            </S.FeaturedWorkDescription>
          </S.FeaturedWork>
          <S.FeaturedWork>
            <S.FeaturedWorkTitle>Mount Eden</S.FeaturedWorkTitle>
            <S.FeaturedWorkDescription>Website</S.FeaturedWorkDescription>
          </S.FeaturedWork>
        </S.FeaturedWorkWrapper>

        <S.MoreWorks>
          <h2 className="subtitle">More Works</h2>
          <S.MoreWorkWrapper>
            <S.WorkItem href="https://aspirefurniture.co.nz/" target="blank">
              <S.WorkTitle>
                aspirefurniture.co.nz <S.Arrow size="40" />
              </S.WorkTitle>
              <S.WorkTag>Website - Live</S.WorkTag>
            </S.WorkItem>
            <S.WorkItem
              target="blank"
              href="https://www.figma.com/proto/NVnjx6slugKcV3jgKYsKKJ/Harcourts-Milestone-Projects?page-id=0%3A1&node-id=1%3A66&viewport=241%2C48%2C0.14&scaling=min-zoom"
            >
              <S.WorkTitle>
                Harcouts Milestone Projects <S.Arrow size="40" />
              </S.WorkTitle>
              <S.WorkTag>Website - Figma Design File</S.WorkTag>
            </S.WorkItem>
            <S.WorkItem
              target="blank"
              href="https://www.figma.com/proto/oMp7p30PggYt35hjuEa4eD/Me-Moir?page-id=0%3A1&node-id=7%3A2&viewport=241%2C48%2C0.51&scaling=min-zoom"
            >
              <S.WorkTitle>
                Me-Moir <S.Arrow size="40" />
              </S.WorkTitle>
              <S.WorkTag>Website - Figma Design File</S.WorkTag>
            </S.WorkItem>
            <S.WorkItem
              target="blank"
              href="https://www.figma.com/proto/V8gRDiQEmOIgwTz8Mx7P7K/Shopfits?page-id=0%3A1&node-id=53%3A165&viewport=241%2C48%2C0.11&scaling=min-zoom"
            >
              <S.WorkTitle>
                Shopfits NZ <S.Arrow size="40" />
              </S.WorkTitle>
              <S.WorkTag>Website - Figma Design File</S.WorkTag>
            </S.WorkItem>
            <S.WorkItem
              target="blank"
              href="https://lusciouslivingsilverdale.co.nz/"
            >
              <S.WorkTitle>
                lusciouslivingsilverdale.co.nz <S.Arrow size="40" />
              </S.WorkTitle>
              <S.WorkTag>Landing Page</S.WorkTag>
            </S.WorkItem>
            <S.WorkItem target="blank" href="https://flowerstation.co.nz/">
              <S.WorkTitle>
                flowerstation.co.nz <S.Arrow size="40" />
              </S.WorkTitle>
              <S.WorkTag>eCommerce</S.WorkTag>
            </S.WorkItem>
            <S.WorkItem target="blank" href="https://kiwicoasthoney.co.nz/">
              <S.WorkTitle>
                kiwicoasthoney.co.nz <S.Arrow size="40" />
              </S.WorkTitle>
              <S.WorkTag>Website</S.WorkTag>
            </S.WorkItem>
          </S.MoreWorkWrapper>
        </S.MoreWorks>
      </S.Container>
    </S.Wrapper>
  </>
)

export default Works
