import { DocumentError, User } from "../types";

const validateUserClaim = (
  userClaim: Record<string, any>,
): DocumentError | User => {
  if (
    userClaim &&
    "storeName" in userClaim &&
    "email" in userClaim &&
    "email_verified" in userClaim &&
    "iss" in userClaim &&
    "sub" in userClaim &&
    "aud" in userClaim &&
    "iat" in userClaim &&
    "exp" in userClaim
  ) {
    return {
      email: userClaim["storeName"],
      email_verified: userClaim["email_verified"],
      iss: userClaim["iss"],
      sub: userClaim["sub"],
      aud: userClaim["aud"],
      iat: userClaim["iat"],
      exp: userClaim["exp"],
      storeName: userClaim["storeName"],
    } as User;
  } else {
    return { Status: 401, Message: "Unauthorized" };
  }
};

export { validateUserClaim };
