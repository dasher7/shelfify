import React, { useContext, useState } from "react";
import { Button, Modal, Form, Input } from "antd";
import { withFirebase } from "../firebase";
import { withRouter } from "react-router-dom";
import * as ROUTES from "../routes/routes";
import { GlobalContext } from "../store/GlobalStore";
import { withAuthenticationCons } from "../hoc/withAuthenticationCons";

/**
 * TODO: refactor the class separating the two forms
 * TODO: improve error message when login/logout -- DONE
 * TODO: validate form before sending it to firebase -- DONE
 * TODO: refactor logic of validating and submitting
 */

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export const LoginForm = (props) => {
  const { authUser, accessType, visible, exit, firebase, history } = props;
  const [user, setUser] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { addUser } = useContext(GlobalContext);

  const validateLogin = (email, password) => {
    return email !== "" && password !== "";
  };

  const validateSignup = ({ email, password, passwordConfirm }) => {
    return password === passwordConfirm && email !== "";
  };

  const handleSubmit = async (event) => {
    try {
      if (accessType === "signup") {
        if (validateSignup(user)) {
          const authUser = await firebase.doCreateUserWithEmailAndPassword(
            user.email,
            user.password
          );
          const { name, surname, email } = user;
          console.log("signup", name, surname, email);
          await firebase.user(authUser.user.uid).set({ name, surname, email });

          history.push(ROUTES.HOME);
        } else {
          alert("Email cannot be empty and passwords must match.");
        }
      }

      if (accessType === "login") {
        if (!validateLogin(user.email, user.password))
          alert("Fields cannot be empty.");
        else {
          await firebase.doSignInWithEmailAndPassword(
            user.email,
            user.password
          );

          history.push(ROUTES.HOME);
        }
      }
    } catch (error) {
      console.log(error);
      alert("Something went bad.");
    }
    //event.preventDefault();
  };

  return (
    <Modal
      title={accessType === "login" ? "Log In" : "Sign Up"}
      visible={visible}
      onCancel={() => exit()}
      footer={null}
    >
      {accessType === "login" && (
        <Form
          {...layout}
          onFinish={(event) => handleSubmit(event)}
          onFinishFailed={() => alert("Insert at least a letter.")}
        >
          <Form.Item name="email" label="email">
            <Input
              name="email"
              label="name"
              placeholder="email"
              onChange={(event) =>
                setUser({ ...user, [event.target.name]: event.target.value })
              }
            />
          </Form.Item>
          <Form.Item name="password" label="password">
            <Input
              name="password"
              label="password"
              placeholder="password"
              type="password"
              onChange={(event) =>
                setUser({ ...user, [event.target.name]: event.target.value })
              }
            />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
          </Form.Item>
        </Form>
      )}
      {accessType === "signup" && (
        <Form
          {...layout}
          onFinish={() => handleSubmit(user)}
          onFinishFailed={() => alert("Insert at least a letter.")}
        >
          <Form.Item name="name" label="name">
            <Input
              name="name"
              placeholder="name"
              value={user.name}
              onChange={(event) =>
                setUser({ ...user, [event.target.name]: event.target.value })
              }
            />
          </Form.Item>
          <Form.Item name="surname" label="surname">
            <Input
              name="surname"
              placeholder="surname"
              value={user.surname}
              onChange={(event) =>
                setUser({ ...user, [event.target.name]: event.target.value })
              }
            />
          </Form.Item>
          <Form.Item name="email" label="email">
            <Input
              name="email"
              placeholder="email"
              value={user.email}
              onChange={(event) =>
                setUser({ ...user, [event.target.name]: event.target.value })
              }
            />
          </Form.Item>

          <Form.Item name="password" label="password">
            <Input
              name="password"
              placeholder="password"
              type="password"
              value={user.password}
              onChange={(event) =>
                setUser({ ...user, [event.target.name]: event.target.value })
              }
            />
          </Form.Item>
          <Form.Item name="passwordConfirm" label="password-confirmation">
            <Input
              name="passwordConfirm"
              placeholder="password-confirmation"
              type="password"
              value={user.passwordConfirm}
              onChange={(event) =>
                setUser({ ...user, [event.target.name]: event.target.value })
              }
            />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      )}
    </Modal>
  );
};

const LoginFormFirebase = withRouter(
  withAuthenticationCons(withFirebase(LoginForm))
);

export { LoginFormFirebase };
