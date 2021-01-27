import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    saveUserPhoto,
    saveUserProfile
} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import Login from "../Login/Login";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.authorizedUserId; // 13921, 2
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        if(!this.props.isAuth) {
            return (
                <Login/>
            )
        }
        return (
            <Profile {...this.props} profile={this.props.profile} isOwner={!this.props.match.params.userId}
                     status={this.props.status} updateUserStatus={this.props.updateUserStatus}
                     saveUserPhoto={this.props.saveUserPhoto} saveProfile={this.props.saveUserProfile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);
export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, saveUserPhoto, saveUserProfile}), // рез-т вызова withRouter закидывается сюда
    withRouter, // рез-т вызова withAuthRedirect закидывается сюда
    //withAuthRedirect // ProfileContainer сперва закидывается сюда
)(ProfileContainer);

