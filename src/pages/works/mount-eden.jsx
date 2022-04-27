import WorksTemplate from '../../templates/Works'

function MountEden() {
  const heading = 'Mount Eden'

  const images = [
    '/img/works/mount-eden/mt-eden1.jpg',
    '/img/works/mount-eden/mt-eden2.jpg',
    '/img/works/mount-eden/mt-eden3.jpg',
    '/img/works/mount-eden/mt-eden4.jpg'
  ]

  return <WorksTemplate heading={heading} images={images} />
}

export default MountEden
