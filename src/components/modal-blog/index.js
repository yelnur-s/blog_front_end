import React, {useState, useEffect} from 'react';
import { Modal, Form, Input, Select, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const {Option} = Select


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

function ModalBlog({modalBlogVisible, close}) {
  const [visible, setVisible] = useState(modalBlogVisible)
  const [imageUrl, setImageUrl] = useState(``)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setVisible(modalBlogVisible)
  }, [modalBlogVisible])

  const handleOk = e => {
    console.log(e);
    close();
  };

  const onFinish = values => {
    console.log(values);
  };

  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not validate email!',
      number: '${label} is not a validate number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
        setLoading(true);
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
            setLoading(false);
            setImageUrl(imageUrl)
        });
      }
  }

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  );


  return (
    <Modal
        title="Add Blog"
        visible={visible}
        onOk={handleOk}
        onCancel={close}
    >

        <Form layout="vertical" name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={['blog', 'title']} label="Title" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        

        <Form.Item name={['blog', 'category']} label="Category">
            <Select defaultValue="lucy" onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
        </Form.Item>

        <Form.Item name={['blog', 'tags']} label="Tags">
            <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="select one country"
                defaultValue={['china']}
                onChange={handleChange}
                optionLabelProp="label"
            >
                <Option value="china" label="China">
                <div className="demo-option-label-item">
                    <span role="img" aria-label="China">
                    🇨🇳
                    </span>
                    China (中国)
                </div>
                </Option>
                <Option value="usa" label="USA">
                <div className="demo-option-label-item">
                    <span role="img" aria-label="USA">
                    🇺🇸
                    </span>
                    USA (美国)
                </div>
                </Option>
                <Option value="japan" label="Japan">
                <div className="demo-option-label-item">
                    <span role="img" aria-label="Japan">
                    🇯🇵
                    </span>
                    Japan (日本)
                </div>
                </Option>
                <Option value="korea" label="Korea">
                <div className="demo-option-label-item">
                    <span role="img" aria-label="Korea">
                    🇰🇷
                    </span>
                    Korea (韩国)
                </div>
                </Option>
            </Select>
        </Form.Item>
        <Form.Item name={['blog', 'description']} label="Description">
            <Input.TextArea />
        </Form.Item>
        <Form.Item>
            <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
        </Form.Item>
        </Form>

    </Modal>
  );
}

export default ModalBlog;
