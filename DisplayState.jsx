import { Container } from "unstated";

class DisplayState extends Container {
  state = {
      Display: null,
      ...props
    };
  trigger = (Display = null) => {
    this.setState({ Display });
  };
}
//Now when we want to call a new instance, we will say
const LoginModalDisplayState = new DisplayState();
//or
const MoreInfoModalDisplayState = new DisplayState();
//We can use use the same container for more advanced use cases. For example:
const StepperDisplayState = Display => new DisplayState({ Display });

export default { LoginModalDisplayState, MoreInfoModalDisplayState, StepperDisplayState }
