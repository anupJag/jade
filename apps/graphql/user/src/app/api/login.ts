import bcrypt from 'bcryptjs';
import { ERRORS } from '@jade/graphql/base';

import { IUser, IObject } from '../types';
import UserModel from '../model';
import { generateAuthTokens, logoutUser } from '../service/token.service';
import { registerUser } from './registerUser';

interface ILogin {
  email: IUser['email'];
  password: IUser['password'];
}
interface ISSOLogin {
  firstName: IUser['firstName'];
  lastName?: IUser['lastName'];
  email: IUser['email'];
  profilePicture?: IUser['profilePicture'];
  facebookId?: IUser['facebookId'];
  googleId?: IUser['googleId'];
  provider?: IUser['provider'];
}

export const login = async (data: ILogin): Promise<IObject> => {
  const { email, password } = data;
  const User = await UserModel.findOne({ email });
  return new Promise((resolve, reject) => {
    if (!User) reject(ERRORS.USER_NOT_FOUND);
    bcrypt.compare(password, User.password).then(async result => {
      if (!result) reject(ERRORS.INCORRECT_PASSWORD);
      const token = await generateAuthTokens(User);
      resolve({
        id: User._id,
        firstName: User.firstName,
        lastName: User.lastName || null,
        email: User.email,
        profilePicture: User.profilePicture || null,
        googleId: User.googleId || null,
        facebookId: User.facebookId || null,
        phoneNumber: User.phoneNumber || null,
        role: User.role || null,
        provider: User.provider || null,
        ...token,
      });
    });
  });
};

export const ssoLogin = async (data: ISSOLogin): Promise<IObject> => {
  const { email } = data;
  const User = await UserModel.findOne({ email });
  if (User) {
    const token = await generateAuthTokens(User);
    return {
      id: User._id,
      firstName: User.firstName,
      lastName: User.lastName || null,
      email: User.email,
      profilePicture: User.profilePicture || null,
      googleId: User.googleId || null,
      facebookId: User.facebookId || null,
      phoneNumber: User.phoneNumber || null,
      role: User.role || null,
      provider: User.provider || null,
      ...token,
    };
  } else {
    const registeredUser = await registerUser(data);
    const token = await generateAuthTokens(registeredUser);
    console.log('registered user', registerUser);
    return {
      id: registeredUser.id,
      firstName: registeredUser.firstName,
      lastName: registeredUser.lastName || null,
      email: registeredUser.email,
      profilePicture: registeredUser.profilePicture || null,
      googleId: registeredUser.googleId || null,
      facebookId: registeredUser.facebookId || null,
      phoneNumber: registeredUser.phoneNumber || null,
      role: registeredUser.role || null,
      provider: registeredUser.provider || null,
      ...token,
    };
  }
};

export const logout = async (token: string): Promise<null> => {
  await logoutUser(token);
  return null;
};
