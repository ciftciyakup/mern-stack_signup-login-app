import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomeScreen = ({ user }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate("/signin");
  }, [user]);
  return (
    <Fragment>
      <div>Hoş Geldiniz</div>
      <div>Ad Soyad: {user?.fullname}</div>
      <div>E-posta: {user?.email}</div>
      <div>Parola (Hash'lenmiş): {user?.password}</div>
      <div>Kullanıcı Türü: {user?.userType}</div>
      <div>Telefon Numarası: {user?.phoneNumber}</div>
    </Fragment>
  );
};

export default HomeScreen;
