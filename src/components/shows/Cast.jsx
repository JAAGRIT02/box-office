export default function Cast({cast}){
    return <div>
        {cast.map(({person,character})=>{
            return<div key={person.id}>
            <img src={person.image?person.image.medium : '/not-found-image.png'} alt={person.name} />
            <div>
                <p>{person.name} as {character.name}</p>
            </div>
        </div>
        })}
        
    </div>
}