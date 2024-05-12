import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(response=>response.json())

function userInfo({userName}){
    const { data, error, isLoading } = useSWR(`https://api.github.com/users/${userName.toLowerCase()}`, fetcher)
    
    if(isLoading){
      return <p>Loading info about {userName}...</p>
    }
    if(error){
      return <p>There was an error loading {userName}, please check your input</p>
    }
  
    if(data.status === 404){
      return <p>{userName} not found! Try another input</p>
    }

    const {avatar_url, name, location, bio} = data;

    return <div style={{textAlign: "left"}}>
    <p>Avatar_url: <b>{avatar_url}</b></p>
    <p>Name: <b>{name}</b></p>
    <p>Location: <b>{location}</b></p>
    <p>Bio: <b>{bio}</b></p>
  </div>
}

export default userInfo;
