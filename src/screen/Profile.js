import  {useParams} from "react-router-dom";
function Profile() {
    const params = useParams ()
    console.log(params);
    return (
    <h1> welcome {params.userName}</h1>
    );
  }
  export default Profile;