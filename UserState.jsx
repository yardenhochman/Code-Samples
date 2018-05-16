import { Cache } from "aws-amplify";
import { Container } from "unstated";
import history from "../Config/history";

export default class UserState extends Container {
  constructor({ user }) {
    super();
    this.state = {
      user
    };
  }
  login = () => this.setState({ user: Cache.getItem("user") });
  logout = () => {
    this.setState({ user: undefined });
    Cache.removeItem("user");
    history.replace("/");
  };
}
