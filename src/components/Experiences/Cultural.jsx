function Experiences(props){
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/country/:location/xtreme`
    const [cultural, setCultural] = useState(null);




return(
    <>
    <button onClick={()=> props.filter("cutural")}>Cultural</button>
    </>
)
}

