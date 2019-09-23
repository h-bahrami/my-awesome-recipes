import React from "react";
import { Form, Input } from "antd";
import PropTypes from "prop-types";

const TextInput = ({
  values,
  errors,
  handleSubmit,
  setFieldValue,
  setFieldTouched,
  name,
  placeholder,
  prefix
}) => (
  <Form.Item
    hasFeedback={!!errors[name]}
    validateStatus={errors[name] && "error"}
    help={errors[name]}
  >
    <Input
      placeholder={placeholder}
      value={values[name]}
      onChange={event => setFieldValue(name, event.target.value)}
      onBlur={() => setFieldTouched(name)}
      onPressEnter={handleSubmit}
      prefix={prefix}
    />
  </Form.Item>
);

TextInput.propTypes = {
  values: PropTypes.isRequired,
  errors: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setFieldTouched: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default TextInput;
