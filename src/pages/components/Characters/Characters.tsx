import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { CardCharacter } from "./Characters.styled";


type Characters= {
  _id: number;
  name: string;
  school: string;
  birthday: string;
  damageType: string;
  photoUrl: string;
  image: string;
  imageSchool: string;
};

export default function Characters(){
    const [data, setData] = useState<Characters[]>([]);

  useEffect(() => {
    async function fetchData() {
    try{
        const response = await axios.get("https://api-blue-archive.vercel.app/api/characters"); 
        const result = response.data;
        setData(Array.isArray(result) ? result : result.data || []);
      }catch(error){
      console.error("Error fetching data:", error); 
    }
  }

    fetchData();
  }, []);
    return(
    <main>
        <div>
            {Array.isArray(data) && data.map((item) => (
                <CardCharacter key={item._id}>
                    <h2>{item.name}</h2>
                    <p>School : {item.school}</p>
                    <p>Birthday : {item.birthday}</p>
                    <p>Damage type : {item.damageType}</p>
                    <Image
                    src={item.photoUrl}
                    alt={`${item.name} Photo`}
                    width={200}
                    height={200}
                    />
                    <Image
                    src={item.image}
                    alt={`${item.name} Full Image`}
                    width={150}
                    height={150}
                  />
                  <Image
                    src={item.imageSchool}
                    alt={`${item.school} Logo`}
                    width={50}
                    height={50}
                  />
                </CardCharacter>
            ))}
        </div>
    </main>
    )
}