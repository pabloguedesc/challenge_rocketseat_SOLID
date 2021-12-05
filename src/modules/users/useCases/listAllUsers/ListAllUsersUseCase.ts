import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userIsAdmin = this.usersRepository.findById(user_id);
    if (!userIsAdmin) {
      throw new Error("Error message");
    } else if (userIsAdmin.admin === false) {
      throw new Error("Error message")
    }
    return this.usersRepository.list()
  }
}

export { ListAllUsersUseCase };
