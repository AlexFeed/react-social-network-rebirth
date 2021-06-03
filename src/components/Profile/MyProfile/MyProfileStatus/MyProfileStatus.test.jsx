import MyProfileStatus from "./MyProfileStatus";
import {create} from "react-test-renderer";

describe("ProfileStatus component", () => {
    test("Status from props should be in the state", () => {
        const component = create(<MyProfileStatus status={'test status'}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('test status');
    });
});