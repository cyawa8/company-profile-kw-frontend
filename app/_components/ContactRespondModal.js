import { useState } from "react";
import { Modal, Form, Input } from "antd";
import Button from "./Button";
import toast from "react-hot-toast";
import { useContactRespond } from "@/hooks/useContactRespond";

export default function ContactRespondModal({ open, onClose }) {
  const [form] = Form.useForm();
  const { mutate, isLoading } = useContactRespond();

  const handleFinish = (values) => {
    mutate(values, {
      onSuccess: () => {
        toast.success("Message sent!");
        form.resetFields();
        onClose();
      },
      onError: (err) => {
        toast.error(err.message || "Failed to send");
      }
    });
  };

  return (
    <Modal open={open} onCancel={onClose} footer={null} title="Contact Us">
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[
          { required: true },
          { type: "email", message: "Email invalid" }
        ]}>
          <Input />
        </Form.Item>
        <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Message" name="message" rules={[{ required: true }]}>
          <Input.TextArea rows={3} />
        </Form.Item>
        <Button
          type="submit"
          htmlType="submit"
          loading={isLoading}
          className="w-full mt-2"
          variation="primary"
        >
          Send
        </Button>
      </Form>
    </Modal>
  );
}
