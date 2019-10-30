import React from 'react';
import 'antd/dist/antd.css';
import 'tachyons';
import { Redirect } from 'react-router-dom'
import {Link} from 'react-router-dom';
import {message } from 'antd';

import {
  Form,
  Input,
  Tooltip,
  Icon,
  Select,
  Checkbox,
  Button,
} from 'antd';

const { Option } = Select;

class RegistrationForm extends React.Component {
  state = {
    username:"",
    password:"",
    email:"",
    firstName:"",
    lastName:"",
    mobileNumber:"",
    verified: false,
    redirect: false
  };

  componentDidMount() {
    console.log(this.state);
      }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        this.props.onSignUp(this.state);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  handleUserNameChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleFirstNameChange = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handleLastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handlePhoneNumChange = (event) => {
    this.setState({ mobileNumber: event.target.value });
  };

  redirectToLogIn = ()=>
  {
    this.setState({ redirect:true });
  }


  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '+63',
    })(
      <Select style={{ width: 70 }}>
        <Option value="63">+63</Option>
      </Select>,
    );


    return (
        <div>
          {this.state.redirect ? <Redirect to="/" /> : null}
            <div>
            &nbsp;
            </div>
            <div>
            &nbsp;
            </div>
        <article className="mw6 center shadow-5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <Form {...formItemLayout} onSubmit={this.handleSubmit} className="signin-form">
      <div>
            &nbsp;
            </div>
      <Form.Item
          label={
            <span>
              Username&nbsp;
              <Tooltip title="This will be your unique username">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
          })(<Input setfieldsvalue={this.state.username}
                    onChange={this.handleUserNameChange}
                    />)}
        </Form.Item>
      <Form.Item
          label={
            <span>
              First Name&nbsp;
            </span>
          }
        >
          {getFieldDecorator('firstname', {
            rules: [{ required: true, message: 'Please input your firstname!', whitespace: true }],
          })(<Input setfieldsvalue={this.state.firstname} 
                    onChange={this.handleFirstNameChange}/>)}
        </Form.Item>
        <Form.Item
          label={
            <span>
              Last Name&nbsp;
            </span>
          }
        >
          {getFieldDecorator('lastname', {
            rules: [{ required: true, message: 'Please input your lastname!', whitespace: true }],
          })(<Input setfieldsvalue={this.state.lastname} 
                    onChange={this.handleLastNameChange}/>)}
        </Form.Item>
        <Form.Item label="E-mail">
          {getFieldDecorator('email', {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input setfieldsvalue={this.state.email} 
                    onChange={this.handleEmailChange}/>)}
        </Form.Item>
        <Form.Item label="Password" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password setfieldsvalue={this.state.password} 
                             onChange={this.handlePasswordChange}/>)}
        </Form.Item>
        <Form.Item label="Confirm Password" hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item label="Phone Number">
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(<Input 
            setfieldsvalue={this.state.phoneNumber} 
            onChange={this.handlePhoneNumChange}
            addonBefore={prefixSelector} 
            style={{ width: '100%' }} />)}
        </Form.Item>
        <div align="left">
        <Form.Item {...tailFormItemLayout}>
          {getFieldDecorator('agreement', {valuePropName: 'checked',
             rules: [{ required: true, message: 'Please confirm the agreement!' }],
          })(
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>,
          )}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button style={{margin: "1%"}} type="primary" htmlType="submit"
          //  onClick = {this.dispatch}
           >
            Register
          </Button>
          <Button type="primary" onClick={this.redirectToLogIn}>
            Cancel
          </Button>
          
        </Form.Item>
        </div>
      </Form>
      </article>
      </div>
    );
  }
}

const SignUpForm = Form.create({ name: 'register' })(RegistrationForm);

export default SignUpForm;
          