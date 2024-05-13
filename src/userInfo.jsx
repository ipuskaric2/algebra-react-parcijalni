import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(response=>response.json());

// function Repository({repo}){
//   const { data, error, isLoading } = useSWR(`https://api.github.com/users/name/reduxjs/repos${repo.toLowerCase()}`, fetcher)
  
//   if(isLoading){
//     return <p>Loading info about {repo}...</p>
//   }
//   if(error){
//     return <p>There was an error loading {repo}, please check your input</p>
//   }

//   if(data.status === 404){
//     return <p>{repo} not found! Try another input</p>
//   }
//   return <>
//     <h3>Repositories: {repo}</h3>
//     <ul>
//     {data.map(name=><li key={name.name}>{name.name}</li>)}
//     </ul>
//   </>
// }

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
    <p><b>Repositories:</b></p>
    {/* {repo && <Repository repo={repo}/>} */}
  </div>
}

export default UserInfo;
