import { useNavigate } from "react-router-dom";

function Contact() {
    const navigate=useNavigate();

    let Click=()=>{
        navigate('/About')
    }
    return (<>
    <h1>Contact</h1>
    
    <button onClick={Click}>Go TO Home</button>
    </>)
  }
  export default Contact;