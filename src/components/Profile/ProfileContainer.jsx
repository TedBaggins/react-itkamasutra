import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile, getUserStatus, updateUserStatus} from '../../redux/profile-reducer';
import {Redirect, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 13921; // 13921, 2
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                     status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);
export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}), // рез-т вызова withRouter закидывается сюда
    withRouter, // рез-т вызова withAuthRedirect закидывается сюда
    withAuthRedirect // ProfileContainer сперва закидывается сюда
)(ProfileContainer);

