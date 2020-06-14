import React, { useContext, useState } from "react";

import { Button, Form, Input, Layout, Modal, Row } from "antd";
import { GlobalContext } from "../store/GlobalStore";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

/**
 * TODO: handle the form input and save it to the global store -- DONE
 * TODO: use a custom hook in order to handle user input change, it will make the code reusable -- DONE
 * TODO: later, when a category got added, make it the default one -- DONE
 * TODO: Validate form input (there is a prop in antd Form)
 */

export const CategoryForm = ({ visible, setVisibile }) => {
  const { addCategory, setActiveCategory } = useContext(GlobalContext);
  const [userInput, setUserInput] = useState("");

  return (
    <Layout>
      <Row>
        <Modal
          title="Add a new category"
          footer={null}
          visible={visible}
          onCancel={() => {
            setVisibile();
          }}
        >
          <Form
            {...layout}
            onFinish={() => {
              addCategory(userInput);
              setActiveCategory(userInput);
              setVisibile();
            }}
            onFinishFailed={() => alert("Insert at least a letter.")}
          >
            <Form.Item
              label="New Cateogry"
              name="new category name"
              rules={[
                {
                  required: true,
                  message: "Please, enter a cateogry before submit",
                },
              ]}
            >
              <Input
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
              />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Row>
    </Layout>
  );
};
