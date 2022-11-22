import WorksTemplate from '../../templates/Works'

function Page() {
  const heading = 'Kiwi Driving Test'

  const images = ['/img/works/kiwi-driving-test/kiwi-driving-test-1.jpg']

  const introText =
    '<p>Web app with Free NZ Road Code Practice Theory Test. <br/> Developed using React, Tailwind CSS, Graphql and Headless CMS.</p>'

  const url = 'https://kiwidrivingtest.netlify.app/'
  return (
    <WorksTemplate
      heading={heading}
      images={images}
      introText={introText}
      url={url}
    />
  )
}

export default Page
