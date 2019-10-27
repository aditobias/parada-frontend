import React from 'react'
import {Button, Card, Form, Input, Modal, Radio} from "antd";

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
            const { visible, onCancel, onCreate, form } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title="Increase Parking Lot Capacity"
                    okText="Add"
                    onCancel={onCancel}
                    onOk={onCreate}
                >
                    <Form layout="vertical">
                        <Form.Item label="New Capacity">
                            {getFieldDecorator('New Capacity', {
                                rules: [{ required: true, message: 'Please enter parking lot spaces to add to the parking lot' }],
                            })(<Input />)}
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    },
);
class AdminAddSpace extends React.Component{

    state = {
        visible: false,
    };

    showModal = () => {
        this.setState({ visible: true });
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    handleCreate = () => {
        const { form } = this.formRef.props;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            form.resetFields();
            this.setState({ visible: false });
        });
    };

    saveFormRef = formRef => {
        this.formRef = formRef;
    };

    render(){
        return (
            <div>
                <Card >
                    <div style={{float: "left"}} >
                        <p>This parkingLot: {this.props.parkingLot.parkingLotName}</p>
                        <p>Current capacity: {this.props.parkingLot.capacity}</p>
                    </div>
                    <div style={{float: "right"}}>
                        <Button type="primary" style={{height: "50px"}} onClick={this.showModal}>Add</Button>
                        <CollectionCreateForm
                            wrappedComponentRef={this.saveFormRef}
                            visible={this.state.visible}
                            onCancel={this.handleCancel}
                            onCreate={this.handleCreate}
                        />
                    </div>
                </Card>
            </div>
        )
    }
}
export default AdminAddSpace;