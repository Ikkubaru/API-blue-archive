import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

type CharacterDetail = {
    _id: string;
    name: string;
    school: string;
    birthday: string;
    photoUrl: string;
    imageSchool: string;
    damageType: string;
  };

export default function CharacterDetail(){
    const router = useRouter();
    const { _id } = router.query; // Ambil parameter id dari URL
    const [character, setCharacter] = useState<CharacterDetail | null>(null);

    useEffect(() => {
        if (_id) {
          async function fetchCharacter() {
            try {
              const response = await axios.get(
                `https://api-blue-archive.vercel.app/api/characters/${_id}`
              );
              setCharacter(response.data); // Ambil data detail karakter
            } catch (error) {
              console.error("Error fetching character:", error);
            }
          }
          fetchCharacter();
        }
      }, [_id]);
    
      if (!character) {
        return(
          <>
          <div className="justify-center ">
              <p>Loading... atau data tidak ditemukan</p>
          </div>
          </>
        ) 
      }

    return(
        <main>
            <div>
                <Image
                src={character.photoUrl}
                alt={`${character.name}`}
                width={200}
                height={200}
                />
                <h1>{character.name}</h1>
                <p>School : {character.school}</p>
                <Image 
                src={character.imageSchool} 
                alt={`${character.school}`} 
                />
                <p>Birthday : {character.birthday}</p>
                <p>Damage Type : {character.damageType}</p>
            </div>
        </main>
    )
}