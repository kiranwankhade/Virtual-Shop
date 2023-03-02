import React, { useContext, useState } from "react";
import { useToast, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Sign.scss";
import { AuthContext } from "../Pages/login&signup/AuthContextProvider";
import { AiFillHome } from "react-icons/ai";
const userInit = {
  email: "",
  password: "",
};
const DSign = () => {
  const toast = useToast();
  const [user, setUser] = useState(userInit);
  const { createUser } = useContext(AuthContext);
  const handleChange = (e) => {
    setUser({ ...user, [e.target.type]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(user.email, user.password);
    } catch (e) {
    }
  };
  return (
    <div className="MainDiv">
        <div className="box ">
          <div className="form">
            <form onSubmit={handleSubmit} action="">
            <div className="SingHomeDiv">
              <h2>Register</h2>
              <div>
              <Link to="/" >
                 
                  <h3 className="homeSing"><AiFillHome/></h3>
                
                </Link>
                </div>
              
              </div>
              <div className="inputBox">
              <span>Name</span>
                <input required="required" />
                
                <i></i>
              </div>
              <div className="inputBox">
              <span>Email</span>
                <input
                  type="email"
                  value={user.email}
                  onChange={handleChange}
                  required="required"
                />
                
                <i></i>
              </div>
              <div className="inputBox">
              <span>Password</span>
                <input
                  type="password"
                  value={user.password}
                  onChange={handleChange}
                  required="required"
                />
           
                <i></i>
              </div>
              <div className="signDiv">
                <p>Already have an account?</p>
                <Link to="/DLogin">
                  <h6 className="sign">Login</h6>
                </Link>
              </div>
              <div>
                  <Button
                  type="submit"
                    className="submit"
                    onClick={() =>
                      toast({
                        title: "Register successfull.",
                        description: "Your Account have created.",
                        status: "success",
                        position:'top-right',
                        duration: 9000,
                        isClosable: true,
                      })
                    }
                  >
                    Register
                  </Button>
              </div>
            </form>
          </div>
        </div>
    </div>
  );
};
export default DSign;