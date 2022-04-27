import WorksTemplate from '../../templates/Works'

function MountEden() {
  const heading = 'Comlink'

  const images = [
    '/img/works/comlink/comlink-1.jpg',
    '/img/works/comlink/comlink-2.jpg',
    '/img/works/comlink/comlink-3.jpg',
    '/img/works/comlink/comlink-4.jpg'
  ]

  return <WorksTemplate heading={heading} images={images} />
}

export default MountEden
