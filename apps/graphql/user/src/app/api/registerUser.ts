import bcrypt from 'bcryptjs';
import { IUser } from '../types';
import UserModel from '../model';

import { ERRORS } from '@jade/graphql/base';

interface IAddUser {
  firstName: IUser['firstName'];
  lastName?: IUser['lastName'];
  email: IUser['email'];
  password?: IUser['password'];
  phoneNumber?: IUser['phoneNumber'];
  profilePicture?: IUser['profilePicture'];
  provider?: IUser['provider'];
  googleId?: IUser['googleId'];
  facebookId?: IUser['facebookId'];
  role?: IUser['role'];
}

export const registerUser = async (data: IAddUser): Promise<IUser> => {
  const { email, password } = data;
  const emailAlreadyRegistered = await UserModel.findOne({ email });
  return new Promise(async (resolve, reject) => {
    if (!emailAlreadyRegistered) {
      try {
        let encryptedPassword;
        let user = { ...data };
        if (password) {
          encryptedPassword = await bcrypt.hash(password, 10);
          user = { ...data, password: encryptedPassword };
        }
        const doc = new UserModel(user);
        const result = await doc.save();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    } else {
      reject(ERRORS.EMAIL_ALREADY_REGISTERED);
    }
  });
};
