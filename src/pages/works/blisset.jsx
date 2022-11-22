import WorksTemplate from '../../templates/Works'

function Page() {
  const heading = 'Blissett Wealth'

  const images = [
    '/img/works/blisset/blisset-1.jpg',
    '/img/works/blisset/blisset-2.jpg',
    '/img/works/blisset/blisset-3.jpg',
    '/img/works/blisset/blisset-4.jpg'
  ]

  return <WorksTemplate heading={heading} images={images} />
}

export default Page
