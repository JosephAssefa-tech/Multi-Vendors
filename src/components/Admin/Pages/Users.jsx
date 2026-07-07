import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import MultiVendorUserForm from '../../../shared/common/Forms/UserForm/MultiVendorUserForm'

function Users() {
      const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <Stack direction="vertical" gap={3} className="p-2">

     
        <div>
            <h3>Users</h3>
        </div>
        <Row>
            <Col></Col>
    
            <Col xs={6} lg={4} className="d-flex  justify-content-end">
                <div className="d-flex   mb-3 gap-4">
                           <Form.Control
          placeholder="Search users"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
                    <button onClick={handleShow} className="btn btn-primary">Add User</button>
                </div>
            </Col>
        </Row>

        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><img src="https://via.placeholder.com/40" alt="Avatar" className="rounded-circle" />
                        </td>
                        <td>John Doe</td>
                        <td>john.doe@example.com</td>
                        <td>Admin</td>
                        <td>
                            <button className="btn btn-sm btn-outline-primary">Edit</button>
                            <button className="btn btn-sm btn-outline-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </Table>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <MultiVendorUserForm/>
          


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
           </Stack>


        
    );
}
export default Users;