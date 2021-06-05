import React, { useState } from 'react'
import Student from './Student'

const StudentLists = () => {

    const [studentState, setStudentState] = useState(
        {
            students : [
                { id:1, name:'Monkey D. Luffy', editingStatus:false },
                { id:2, name:'Roronoa Zoro', editingStatus:false },
                { id:3, name:'Nami', editingStatus:false },
                { id:4, name:'Usopp', editingStatus:false },
                { id:5, name:'Sanji', editingStatus:false },
                { id:6, name:'Tony Tony Chopper', editingStatus:false },
                { id:7, name:'Nico Robin', editingStatus:false },
                { id:8, name:'Franky', editingStatus:false },
                { id:9, name:'Brook', editingStatus:false },
                { id:10, name:'Jinbe', editingStatus:false },
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

    const editItemHandler = (editKey, data) => {
        const students = [...studentState.students];
        const editingIndex = students.findIndex((item) => {
            return item.id === editKey;
        });
        students[editingIndex] = data;
        setStudentState({
            students : students
        });
    }

    return (
        <div className="row">
            {studentState.students.map((item) => {
                return(
                    <div key={item.id} className="col-lg-3 col-sm-4 mt-2">
                        <Student data={item} deleteStudent={deleteItemHandler.bind(this, item.id)} editStudent={editItemHandler.bind(this)} />
                    </div>
                )
            })}
        </div>
    )
}

export default StudentLists;