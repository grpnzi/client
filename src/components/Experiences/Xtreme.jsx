function Experiences(){
    const apiUrl = `${process.env.REACT_APP_SERVER_URL}/country/:location/xtreme`
    const [xtreme, setXtreme] = useState(null);

useEffect(() => {

    fetch(apiUrl)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            return setXtreme(data)
        })
        .catch((err) => console.log(err))



}, []);


}