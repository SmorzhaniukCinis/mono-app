import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getClientInfoSelector, getIsClientInfoReady } from "../../redux/selectors";
import PageTitle from "../Surface/PageTitle";
import { personDataAction } from "../../redux/client/ClientSaga";
import { setIsClientInfoReady } from "../../redux/client/ClientSlice";
import ProfileTubs from "./ProfileTubs";

const Profile:React.FC = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const client = useAppSelector(getClientInfoSelector)
  const token = localStorage.getItem("token");
  const isClientInfoReady = useAppSelector(getIsClientInfoReady);

  useEffect(() => {
    if (token === '') {
      navigate('/authorization')
    }
  }, [token])

  useEffect(() => {
    if (token !== '' && isClientInfoReady) {
      dispatch(personDataAction.fetchClientInfo());
      setTimeout(() => {
        dispatch(setIsClientInfoReady(true));
      }, 10000);
    }
  }, []);

  return (
    <div>
      <PageTitle title={client?.name ?? ''}/>
      <ProfileTubs/>
    </div>
  );
};

export default Profile;