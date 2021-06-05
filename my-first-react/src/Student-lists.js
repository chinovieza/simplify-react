import React, { useState } from 'react'
import Student from './Student'

const StudentLists = () => {

    const [studentState, setStudentState] = useState(
        {
            students : [
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
        }
    )

    const deleteItemHandler = (deleteKey) => {
        const data = [...studentState.students];
        const deleteIndex = data.findIndex((item) => {
            return item.id === deleteKey;
        });
        data.splice(deleteIndex, 1);
        setStudentState({
            students : data
        });
    }

    return (
        <div className="row">
            {studentState.students.map((item) => {
                return(
                    <div key={item.id} className="col-lg-3 col-sm-4 mt-2">
                        <Student data={item} deleteStudent={deleteItemHandler.bind(this, item.id)} />
                    </div>
                )
            })}
        </div>
    )
}

export default StudentLists;