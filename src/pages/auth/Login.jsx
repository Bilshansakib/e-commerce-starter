import {
    Alert,
    Button,
    Card,
    Flex,
    Form,
    Input,
    message,
    Spin,
    Typography,
  } from "antd";
  import { Link,  useNavigate } from "react-router-dom";
import registerImage from "../../assets/MFSAppRegPage.jpg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
  

const Login = () => {
    const navigate = useNavigate()
 const {signIn, logOut} = useContext(AuthContext)
    const handleLogin = async (values)=> {
        console.log(values)
        signIn(values.email , values.password)
        .then(result => {
            const user = result.user
            console.log(user)
            navigate('/products')
            
        })
        
    }

    return (
        <Card className=" flex items-center justify-start border-2 ">
        <Flex gap="large" align="center">
        <Flex flex={1}>
            <img src={registerImage} className="w-full rounded-lg"></img>
          </Flex>
          <Flex vertical flex={1}>
            {/* form */}
            <Typography.Title level={3} strong className="title">
             Sign In
            </Typography.Title>
            <Typography.Text type="secondary" level={3} strong className="title">
             Unlock your world
            </Typography.Text>
            <Form layout="vertical" onFinish={handleLogin} autoComplete="off">
              {/* <Form.Item
                label="Full Name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "please input your full name",
                  },
                ]}
              >
                <Input size="large" placeholder="Enter your full name"></Input>
              </Form.Item> */}
              <Form.Item
                label="Email"
                name="email"
                size="large"
                rules={[
                  {
                    required: true,
                    message: "please input your email",
                  },
                  {
                    type: "email",
                    message: "Invalid email, Sweet Tit for Sweet Tat",
                  },
                ]}
              >
                <Input size="large" placeholder="Enter your email"></Input>
              </Form.Item>
  
              <Form.Item
                label="Password"
                name="password"
                size="large"
                rules={[
                  {
                    required: true,
                    message: "please input your password",
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Enter your password"
                ></Input.Password>
              </Form.Item>
              {/* <Form.Item
                label="Password"
                name="passwordConfirm"
                size="large"
                rules={[
                  {
                    required: true,
                    message: "please input your Confirm password",
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Re-Enter your password"
                ></Input.Password>
              </Form.Item> */}
  
              {/* {error && (
                  <Alert
                  description={error}
                  type="error"
                  showIcon
                  closable
                  className="alert"
                  >
  
                  </Alert>
              )} */}
  
              <Form.Item>
                <Button
                  // type={`${loading ? "" : "primary"}`}
                  htmlType="submit"
                  size="large"
                  className="btn w-full"
                >
                  {/* {loading ? <Spin></Spin> : " Create Account"} */}
                 Sign in
                </Button>
              </Form.Item>
              <Form.Item>
                <Link to="/register">
                  <Button size="large" className="btn btn-link w-full">
                    
                    Create account
                  </Button>
                </Link>
              </Form.Item>
            </Form>
          </Flex>
        
  
          {/* Image */}
        </Flex>
      </Card>
    );
};

export default Login;