import React from 'react'

export default function SetOfEight(props) {
  return (
      
    <div className='container my-5'>

        
        <div class="container">
            <div class="row my-2">
                <div class="col mx-2">
                    <div class={`card h-100 border-${props.status}`}>
                        <img src={props.src1} class="card-img-top" style={{width: "100%", height: "15vw", objectFit: "cover"}} alt="1"/>
                        <div class="card-body text-center">
                            <p class="card-text">{props.p1}</p>
                        </div>
                        <div class="card-footer text-center">
                            <a href={`${props.path1}`} target="_blank" class={`btn btn-outline-${props.status} btn-sm`}>Read Book</a>
                        </div>
                    </div>
                </div>
                <div class="col mx-2">
                    <div class={`card h-100 border-${props.status}`}>
                        <img src={props.src2} class="card-img-top" style={{width: "100%", height: "15vw", objectFit: "cover"}} alt="2"/>
                        <div class="card-body text-center">
                            <p class="card-text">{props.p2}</p>
                        </div>
                        <div class="card-footer text-center">
                            <a href={`${props.path2}`} target="_blank" class={`btn btn-outline-${props.status} btn-sm`}>Read Book</a>
                        </div>
                    </div>
                </div>
                <div class="col mx-2">
                    <div class={`card h-100 border-${props.status}`}>
                        <img src={props.src3} class="card-img-top" style={{width: "100%", height: "15vw", objectFit: "cover"}} alt="3"/>
                        <div class="card-body text-center">
                            <p class="card-text">{props.p3}</p>
                        </div>
                        <div class="card-footer text-center">
                            <a href={`${props.path3}`} target="_blank" class={`btn btn-outline-${props.status} btn-sm`}>Read Book</a>
                        </div>
                    </div>
                </div>
                <div class="col mx-2">
                    <div class={`card h-100 border-${props.status}`}>
                        <img src={props.src4} class="card-img-top" style={{width: "100%", height: "15vw", objectFit: "cover"}} alt="4"/>
                        <div class="card-body text-center">
                            <p class="card-text">{props.p4}</p>
                        </div>
                        <div class="card-footer text-center">
                            <a href={`${props.path4}`} target="_blank" class={`btn btn-outline-${props.status} btn-sm`}>Read Book</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row my-2">
                <div class="col mx-2">
                    <div class={`card h-100 border-${props.status}`}>
                        <img src={props.src5} class="card-img-top" style={{width: "100%", height: "15vw", objectFit: "cover"}} alt="5"/>
                        <div class="card-body text-center">
                            <p class="card-text">{props.p5}</p>
                        </div>
                        <div class="card-footer text-center">
                            <a href={`${props.path5}`} target="_blank" class={`btn btn-outline-${props.status} btn-sm`}>Read Book</a>
                        </div>
                    </div>
                </div>
                <div class="col mx-2">
                    <div class={`card h-100 border-${props.status}`}>
                        <img src={props.src6} class="card-img-top" style={{width: "100%", height: "15vw", objectFit: "cover"}} alt="6"/>
                        <div class="card-body text-center">
                            <p class="card-text">{props.p6}</p>
                        </div>
                        <div class="card-footer text-center">
                            <a href={`${props.path6}`} target="_blank" class={`btn btn-outline-${props.status} btn-sm`}>Read Book</a>
                        </div>
                    </div>
                </div>
                <div class="col mx-2">
                    <div class={`card h-100 border-${props.status}`}>
                        <img src={props.src7} class="card-img-top" style={{width: "100%", height: "15vw", objectFit: "cover"}} alt="7"/>
                        <div class="card-body text-center">
                            <p class="card-text">{props.p7}</p>
                        </div>
                        <div class="card-footer text-center">
                            <a href={`${props.path7}`} target="_blank" class={`btn btn-outline-${props.status} btn-sm`}>Read Book</a>
                        </div>
                    </div>
                </div>
                <div class="col mx-2">
                    <div class={`card h-100 border-${props.status}`}>
                        <img src={props.src8} class="card-img-top" style={{width: "100%", height: "15vw", objectFit: "cover"}} alt="8"/>
                        <div class="card-body text-center">
                            <p class="card-text">{props.p8}</p>
                        </div>
                        <div class="card-footer text-center">
                            <a href={`${props.path8}`} target="_blank" class={`btn btn-outline-${props.status} btn-sm`}>Read Book</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
