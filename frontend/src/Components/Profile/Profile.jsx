import { useReducer } from "react";
import "./profile.css";
import { Stack, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import Settings from "./Settings";
import UserNameAndAvatar from "./UserNameAndAvatar";

function Profile() {
	const initialState = {showSettings: false, isPrivate: false, showTopSongs: true, showLikedSongs: true, showTopArtists: true}
	const reducer = (state, action) => {
		switch(action.type) {
			case "toggleShowSettings":
				return {...state, showSettings: !state.showSettings}
			case "toggleIsPrivate":
				return {...state, isPrivate: !state.isPrivate}
			case "toggleShowTopSongs":
				return {...state, showTopSongs: !state.showTopSongs}
			case "toggleShowLikedSongs":
				return {...state, showLikedSongs: !state.showLikedSongs}
			case "toggleShowTopArtists":
				return {...state, showTopArtists: !state.showTopArtists}
			default:
				return {...state}
		}
	}
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<>
			<Stack direction="row" justifyContent="flex-end">
				<IconButton
					id="settingsButton"
					aria-label="settings"
					size="large"
					onClick={() => dispatch({ type: "toggleShowSettings" })}
				>
					<SettingsIcon fontSize="inherit" />
				</IconButton>
			</Stack>
			<UserNameAndAvatar />
			<Settings state={state} dispatch={(obj) => dispatch(obj)} />
		</>
	);
}

export default Profile;
