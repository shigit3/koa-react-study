import React from "react";
import { useNavigate } from "react-router";
import { Form, Input, Button } from "@arco-design/web-react";
const FormItem = Form.Item;

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const values = await form.validate();
      console.log("表单值:", values);
    } catch (error) {}
  };

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full flex flex-col px-8">
        <Form form={form} layout="vertical" requiredSymbol={false}>
          <FormItem
            label="用户名"
            field="username"
            rules={[{ required: true, message: "不能为空" }]}
          >
            <Input placeholder="请输入用户名" />
          </FormItem>
          <FormItem
            label="密码"
            field="password"
            rules={[{ required: true, message: "不能为空" }]}
          >
            <Input.Password placeholder="请输入密码" autoComplete="off" />
          </FormItem>
          <FormItem>
            <Button type="primary" long onClick={handleLogin}>
              登录
            </Button>
          </FormItem>
        </Form>
        <div className="flex flex-row">
          <span>没有？</span>
          <span
            className="cursor-pointer text-[#165dff]"
            onClick={handleRegisterRedirect}
          >
            立即注册！
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
