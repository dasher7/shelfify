import React, { useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { withFirebase } from "../firebase";

/**
 * TODO: refactor the class separating the two forms
 */

export const LoginForm = ({ accessType, visible, exit, firebase }) => {
  const [user, setUser] = useState({
    email: "bbbbb@bbbb.it",
    password: "aaaaaaa",
    passwordConfirm: "aaaaaaa",
  });

  const handleSubmit = async (user) => {
    try {
      console.log("iiiiiii");
      console.log(firebase);
      console.log(user);
      const authUser = await firebase.doCreateUserWithEmailAndPassword(
        user.email,
        user.password
      );
      console.log(authUser);
    } catch (error) {
      console.log(error);
      alert("Something went bad.");
    }
  };

  return (
    <Modal
      title="Log In"
      visible={visible}
      onCancel={() => exit()}
      footer={null}
    >
      {accessType === "login" && (
        <Form
          onFinish={() => handleSubmit(user)}
          onFinishFailed={() => alert("Insert at least a letter.")}
        >
          <Form.Item name="email" label="email">
            <Input
              placeholder="email"
              onChange={(event) =>
                setUser({ [event.target.name]: event.target.value })
              }
            />
          </Form.Item>
          <Form.Item label="password">
            <Input
              placeholder="password"
              onChange={(event) =>
                setUser({ [event.target.name]: event.target.value })
              }
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
          </Form.Item>
        </Form>
      )}
      {accessType === "signup" && (
        <Form
          onFinish={() => handleSubmit(user)}
          onFinishFailed={() => alert("Insert at least a letter.")}
        >
          <Form.Item name="email" label="email">
            <Input
              placeholder="email"
              value={user.email}
              onChange={(event) =>
                setUser({ [event.target.name]: event.target.value })
              }
            />
          </Form.Item>
          <Form.Item name="password" label="password">
            <Input
              placeholder="password"
              value={user.password}
              onChange={(event) =>
                setUser({ [event.target.name]: event.target.value })
              }
            />
          </Form.Item>
          <Form.Item name="passwordConfirm" label="password-confirmation">
            <Input
              placeholder="password-confirmation"
              value={user.passwordConfirm}
              onChange={(event) =>
                setUser({ [event.target.name]: event.target.value })
              }
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
};

const LoginFormFirebase = withFirebase(LoginForm);

export { LoginFormFirebase };
