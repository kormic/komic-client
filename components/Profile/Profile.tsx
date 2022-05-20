import React, { useEffect, useState } from "react";
import { start as startLoader, done as stopLoader } from "nprogress";

import { getUserProfile } from "adapters/user";
import { ColorSpan } from "components/ColorSpan";
import { UserForm } from "components/UserForm/UserForm";
import { SBackButton, SUserInput, SWrapper } from "components/UserForm/styled";
import { UserProfileDTO } from "dto/UserProfileDTO";
import { usePortal } from "context/PortalContext";

const REGISTRATION_DATE_KEY = "registration_date";

const transformValue = (key = "", value: string) => {
  return key === REGISTRATION_DATE_KEY
    ? new Date(value).toLocaleDateString()
    : value;
};

type ProfileType = Omit<
  UserProfileDTO,
  "id" | "password" | "profile_image_url" | "confirmed"
>;

const transformProfileValues = (profile: ProfileType) => {
  const transformedProfileValues = Object.keys(profile).reduce<ProfileType>(
    (prev, curr) => ({
      ...prev,
      [curr]: transformValue(curr, profile[curr as keyof ProfileType]),
    }),
    {} as ProfileType
  );

  return transformedProfileValues;
};

const Profile = () => {
  const [userProfile, setUserProfile] = useState<ProfileType | undefined>(
    undefined
  );
  const { setIsProfileVisible } = usePortal();

  useEffect(() => {
    startLoader();
    const getProfile = async () => {
      const res = await getUserProfile(true);
      if (res.userProfile) {
        const { id, password, confirmed, profile_image_url, ...profile } =
          res.userProfile;

        setUserProfile(() => transformProfileValues(profile));
      }
      stopLoader();
    };
    getProfile();
  }, []);

  return userProfile ? (
    <SWrapper>
      <SBackButton onClick={() => setIsProfileVisible?.(false)}>
        Close
      </SBackButton>
      <UserForm
        initialFormData={userProfile}
        validateFormData={() => null}
        onSubmit={() => {}}
      >
        {Object.keys(userProfile).map((key) => (
          <SUserInput key={key} name={key} placeholder={key} disabled />
        ))}
        <ColorSpan>
          Updating your profile is not available at the moment
        </ColorSpan>
      </UserForm>
    </SWrapper>
  ) : null;
};

export default Profile;
