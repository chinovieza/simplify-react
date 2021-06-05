import React from 'react'

const Student = (props) => {

    const { data, deleteStudent, editStudent } = props;
    const updateNameInput = React.createRef();

    const onDeleteStudent = () => {
        deleteStudent();
    }

    const onEditStudent = () => {
        const editData = {
            id: data.id,
            name: data.name,
            editingStatus: !data.editingStatus
        };
        editStudent(data.id, editData);
    }

    const onConfirmEdit = () => {
        const editData = {
            id: data.id,
            name: updateNameInput.current.value,
            editingStatus: false
        }
        editStudent(data.id, editData);
    }

    const onCancelEdit = () => {
        const editData = {
            id: data.id,
            name: data.name,
            editingStatus: false
        }
        editStudent(data.id, editData);
    }

    const editForm = (
        <div className="row">
            <div className="input-group mb-3">
                <input type="text" name="updatedName" className="form-control col-6" defaultValue={data.name} ref={updateNameInput} />
                <button onClick={onCancelEdit.bind()} className="btn btn-outline-primary btn-sm ml-1 col-3">Cancel</button>
                <button onClick={onConfirmEdit.bind()} className="btn btn-primary btn-sm ml-1 col-3">OK</button>
            </div>
        </div>
    )

    return (
        <div className="card">
            <div className="card-header text-center">
                <button onClick={onEditStudent} className="btn btn-outline-success btn-sm mr-1">edit</button>
                <button onClick={onDeleteStudent} className="btn btn-danger btn-sm ml-1">delete</button>
            </div>
            <div className="card-body">
                <dl className="row">
                    <dt className="col-6">ID: </dt>
                    <dd className="col-6">{props.data.id}</dd>
                    <dt className="col-6">Name: </dt>
                    <dd className="col-6">{props.data.name}</dd>
                </dl>
                {
                    props.data.editingStatus ? editForm : null
                }
            </div>
        </div>
    )

}

export default Student;