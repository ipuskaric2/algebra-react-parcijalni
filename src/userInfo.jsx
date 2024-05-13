import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(response=>response.json());

function UserInfo({userName}){
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
    <img src={avatar_url} alt="avatar" />
    <p className="username"> {name}</p>
    <p><b>LOCATION:</b> {location}</p>
    <p><b>BIO:</b> {bio}</p>
  </div>
}

export default UserInfo;
