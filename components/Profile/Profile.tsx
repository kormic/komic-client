import React, { useEffect, useState } from "react";
import { start as startLoader, done as stopLoader } from "nprogress";

import { getUserProfile } from "adapters/user";
import { ProfileWrapper, KeyValueWrapper, ValueWrapper } from "./styled";

const REGISTRATION_DATE_KEY = "registration_date";

const Profile = () => {
  const [userProfile, setUserProfile] = useState<Record<string, any>>({});

  useEffect(() => {
    startLoader();
    const getProfile = async () => {
      const res = await getUserProfile(true);
      const { id, password, confirmed, profile_image_url, ...profile } =
        res.userProfile;
      stopLoader();
      setUserProfile(profile);
    };
    getProfile();
  }, []);

  const handleValue = (key: string, value: string) => {
    return key === REGISTRATION_DATE_KEY
      ? new Date(value).toLocaleDateString()
      : value;
  };

  return (
    <ProfileWrapper>
      {Object.entries(userProfile).map(([key, value]) => (
        <KeyValueWrapper key={key}>
          <div>{key}: </div>
          <ValueWrapper>{handleValue(key, value)}</ValueWrapper>
        </KeyValueWrapper>
      ))}
    </ProfileWrapper>
  );
};

export default Profile;
