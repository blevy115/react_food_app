import { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")

  const getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === 'granted') {
      let location = await Location.getCurrentPositionAsync({});
      if (location) {
        setLatitude(location.coords.latitude)
        setLongitude(location.coords.longitude)
        searchApi('', location.coords.latitude, location.coords.longitude)
      }
  }
  }

  const searchApi = async (term, latitude, longitude) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          latitude,
          longitude,
        }
      })
      setResults(response.data.businesses);
    } catch (err) {
      setError("Something went wrong");
    }
  }

  useEffect(() => {
    getLocationAsync()
  }, [])
  return [searchApi, results, error, latitude, longitude]
};
