import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function Users() {
    return (
        <Stack direction="vertical" gap={3} className="p-3">

     
        <div>
            <h1>Users</h1>
        </div>
        <Row>
            <Col></Col>
    
            <Col xs={6} lg={4} className="d-flex justify-content-end">
                <div className="d-flex justify-content-end mb-3">
                    <button className="btn btn-primary">Add User</button>
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
        </div>
           </Stack>
        
    );
}
export default Users;