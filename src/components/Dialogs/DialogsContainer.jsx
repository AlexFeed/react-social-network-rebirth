import Dialogs from "./Dialogs";
import {addMessageAC} from "../../Redux/reducers/dialog-reducer";
import {connect} from "react-redux";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return ({
        dialogsData: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messages,
        avaUrl: state.auth.photo
    })
}

export default compose(connect(mapStateToProps, {addMessage: addMessageAC}), withAuthRedirect)(Dialogs);