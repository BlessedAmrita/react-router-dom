export const GithubData =async ()=>{
const data=await fetch("https://api.github.com/users/blessedamrita")
return data.json()
}