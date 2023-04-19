import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { getToken } from "../../redux/selectors";

const Profile:React.FC = () => {

  const token = useAppSelector(getToken)
  const navigate = useNavigate()

  useEffect(() => {
    if (token === '') {
      navigate('/authorization')
    }
  }, [token])

  return (
    <div>
      <Outlet/>
    </div>
  );
};

export default Profile;