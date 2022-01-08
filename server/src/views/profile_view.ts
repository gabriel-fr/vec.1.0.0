import { Profile } from "../models/Profile";

export default {
  render(profile: Profile) {
    return {
      profileId: profile.id,
      profileName: profile.name,
      profileSubtext: profile.subtext,
      profileImage: profile.image,
      profileBibles: profile.bibles
    }
  }
}