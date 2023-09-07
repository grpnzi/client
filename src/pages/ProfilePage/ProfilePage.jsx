import './ProfilePage.css'
import UserProfile from "../../components/Profile/UserProfile";

function ProfilePage() {
  return (
    <div>
      <h1 className="text-center mt-5" style={{ color: 'black', fontSize: '26px', fontFamily:'Russo One' }}>Your Profile</h1>
      <UserProfile />
    </div>
  );
}

export default ProfilePage;
