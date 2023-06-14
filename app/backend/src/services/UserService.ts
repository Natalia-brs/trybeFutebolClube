import * as bcrypt from 'bcryptjs';
import token from '../database/utils/token';
import User from '../database/models/Users';

export default class TeamService {
  private model = User;

  public userLogin = async (email: string, password: string) => {
    const findUser = await User.findOne({ where: { email } });

    if (!findUser) {
      return { code: 401, message: 'Invalid email or password' };
    }
    const verifypass = await bcrypt.compare(password, findUser.password);

    if (!verifypass) {
      return { code: 401, message: 'Invalid email or password' };
    }

    const userToken = token({ id: findUser.id, role: findUser.role });
    return { code: 200, data: userToken };
  };
}
