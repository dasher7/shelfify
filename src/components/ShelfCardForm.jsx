import React, { useContext } from "react";
import { Button, Form, Input, Modal } from "antd";
import { useForm } from "../hooks/FormHooks";
import { GlobalContext } from "../store/GlobalStore";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/**
 * TODO: Validate form input (there is a prop in antd Form)
 * TODO: use the hooks -- DONE
 * TODO: find a way to not make the user type the category
 */

export const ShelfCardForm = ({ category, showForm, closeForm }) => {
  const { addCategoryContent } = useContext(GlobalContext);
  const { inputs, handleSubmit, handleInputChange } = useForm(
    addCategoryContent
  );

  return (
    <Modal
      title={`Add a new ${category} card`}
      visible={showForm}
      footer={null}
      onCancel={closeForm}
    >
      <Form
        {...layout}
        onFinish={() => {
          handleSubmit();
          closeForm();
        }}
        onFinishFailed={() => alert("Insert at something in each field.")}
      >
        <Form.Item label="Title">
          <Input
            name="title"
            value={inputs.title}
            onChange={(event) => {
              handleInputChange(event);
            }}
          />
        </Form.Item>
        <Form.Item label="Description">
          <Input.TextArea
            name="description"
            value={inputs.description}
            onChange={(event) => {
              handleInputChange(event);
            }}
          />
        </Form.Item>
        <Form.Item label="Category">
          <Input
            name="category"
            value={inputs.category}
            defaultValue={category}
            onChange={(event) => {
              handleInputChange(event);
            }}
            disabled={false}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Add card
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
