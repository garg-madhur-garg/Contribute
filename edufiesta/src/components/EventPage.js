import React from 'react'
import EventInfo from './EventInfo'

export default function eventPage() {
  return (
    <>
    <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.pinimg.com/564x/1a/3e/a7/1a3ea756b8ec93542184c8bb4631205e.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://gumlet.assettype.com/freepressjournal/2021-10/faea486c-7593-4a46-9437-af1256818cb0/Screenshot_2021_10_22_at_10_45_44_PM.png?format=webp&w=400&dpr=2.6" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Sri_Mariamman_Temple_Singapore_2_amk.jpg/1200px-Sri_Mariamman_Temple_Singapore_2_amk.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
      <div className="container my-5 border border-success border-4 px-0 rounded">
        <h2 className="container bg-success p-2 text-dark bg-opacity-10 ">Morning Class</h2>
        <EventInfo para="jhgjhvdjmvfdjvdfydsjhdvskjvdjbbvdfbvdkjhdkfdn dnm, n,fndkvfdkvfdknvkdfnm, nbdfnk fdhdfnkdvbnm,vdfn,dvbfjkhjdhj vcbnmcb,bc j,bjh,vcxnm,ncvxn,nkjdjkbj,fdbm,vdflvhjvdfhk"/>
      </div>

    </>
  )
}
