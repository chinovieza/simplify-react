import React from 'react'

const StudentLists = () => {

    const data = [
        { id:1, name:'Monkey D. Luffy' },
        { id:2, name:'Roronoa Zoro' },
        { id:3, name:'Nami' },
        { id:4, name:'Usopp' },
        { id:5, name:'Sanji' },
        { id:6, name:'Tony Tony Chopper' },
        { id:7, name:'Nico Robin' },
        { id:8, name:'Franky' },
        { id:9, name:'Brook' },
        { id:10, name:'Jinbe' },
    ]

    const lists = data.map((item) => {
        return(
            <div key={item.id} className="col-lg-3 col-sm-4 mt-2">
                <div className="card">
                    <div className="card-body">
                        <dl className="row">
                            <dt className="col-lg-6 col-sm-5 col-6">ID: </dt>
                            <dd className="col-lg-6 col-sm-7 col-6">{item.id}</dd>
                            <dt className="col-lg-6 col-sm-5 col-6">Name: </dt>
                            <dd className="col-lg-6 col-sm-7 col-6">{item.name}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="row">
            {lists}
        </div>
    )
}

export default StudentLists;