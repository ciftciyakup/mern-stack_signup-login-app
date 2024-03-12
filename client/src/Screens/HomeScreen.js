import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomeScreen = ({ user }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/signin");
  }, [user]);
  return <div>{user?.fullname} hoşgeldiniz.</div>;
};

export default HomeScreen;
