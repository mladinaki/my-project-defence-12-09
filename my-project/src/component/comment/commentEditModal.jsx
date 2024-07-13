import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import * as commentServices from "../../services/commentServices";
import { useEffect } from 'react';


function EditModal({
    onCloseEd,
    show,
    onHandlerEditId,
    onSubmitHandle,
    id,
    selectShose }) {

    const onEditsId = (id) => {
        onHandlerEditId(id);
    }

    return (
        <div>
            <i className="bi bi-pencil" onClick={() => onEditsId(id)}
                style={{
                    fontSize: 15,
                    marginLeft: 330,
                    marginBottom: 26,
                    cursor: 'pointer'
                }}  ></i>

            <Modal show={show} >
                <form onSubmit={(e) => onSubmitHandle(e, selectShose._id)} >
                    <Modal.Header closeButton onClick={onCloseEd}>
                        <Modal.Title>Edit... Comments</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <textarea rows={3} cols={52}
                            type='text'
                            name='shoseData'
                            defaultValue={selectShose.shoseData} />

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onCloseEd}>
                            Close
                        </Button>
                        <Button variant="primary" type='submit' >
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </div>
    );
}

export default EditModal;