import styled from "styled-components";

export const ProfileWrapper = styled.div`
  flex-basis: 90%;
  font-size: 0.8rem;

  @media (min-width: 768px) {
    flex-basis: 30%;
    font-size: 1rem;
  }
`;

// NOTE: Not used due to the fact the profile
// is a UserForm now. Keep them for a while before
// to make sure they are not needed anymore
export const KeyValueWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ValueWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
// END NOTE
