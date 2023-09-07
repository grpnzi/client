import { useEffect, useState } from "react";
function FlagDisplay(props) {
  const { location } = props;
  const [country, setCountry] = useState(null);
  const apiUrl = `https://ih-countries-api.herokuapp.com/countries/${location}`;

  useEffect(() => {
    console.log("FlagDisplay useeffect");
    fetch(apiUrl)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return setCountry(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const alpha2 = country ? country.alpha2Code.toLowerCase() : "";
  return (
    <>
      {!country ? (
        <p>Loading flag</p>
      ) : (
        <div>

          <h1>{country?.name.common}</h1>

          <img src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2}.png`} alt="" />
        </div>
      )}
    </>
  );
}

export default FlagDisplay;
