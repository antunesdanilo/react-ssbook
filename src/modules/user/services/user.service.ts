import { ApiService } from "../../../app/services/api.service";
import { USER_PICTURE_QUERY } from "../../books/queries/user-picture.query";

class UserService extends ApiService {
  async getUserPicture(): Promise<string> {
    return this.apollo.query({
      query: USER_PICTURE_QUERY,
    }).then((res: any) => res.data.userPicture);
  }
}

export { UserService };
