import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { CardCharacter, MainContainer } from "./Characters.styled";

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
// -> Mendefinisikan type data characters dari API

export default function Characters(){
  const [data, setData] = useState<Characters[]>([]);
  // -> Membuat state data untuk menyimpan array dari Character API
  // -> useState<Characters[]> memastikan bahwa state ini akan selalu berupa array dengan tipe Characters
  useEffect(() => {
    // -> useEffect : Digunakan untuk menjalankan kode setelah komponen pertama kali dirender
    async function fetchData() {
      // -> setelah merender component memanggil fetchData()

      // SETIAP MELAKUKAN FETCH DATA DARI API SELALU GUNAKAN TRY CATCH

    try{
        const response = await axios.get("https://api-blue-archive.vercel.app/api/characters"); 
        // -> membuat variable response yg memilki value data dari API, value data API diambil dgn cara axios.get
        // -> GET melakukan request HTTP GET ke url API
        const result = response.data;
        // -> membuat variable utk menampung data yg dikembalikan oleh API
        setData(Array.isArray(result) ? result : result.data || []);
        // -> setData memperbarui nilai state data dengan data dari Character API 
      }catch(error){
      console.error("Error fetching data:", error); 
      // -> menampilkan error di console
    }
  }

    fetchData();
    // Memanggil fungsi untuk mengambil data dari API
  }, []);
  // -> [] memastikan efek hanya dijalankan sekali saat komponen pertama kali dirender
    return(
    <main>
        <MainContainer>
            {Array.isArray(data) && data.map((item) => (
              // -> mapping data dari API dan lakukan pengkondisian && agar mengembalikan nilai null jika kondisi bernilai false
                <CardCharacter key={item._id}>
                  {/* -> array key harus memiliki nilai unique contoh index / _id*/}
                  <Image
                    // menggunakan image bawaan dari next js untuk merender image dengan props ....
                    src={item.photoUrl}
                    alt={`${item.name} Photo`}
                    width={200}
                    height={200}
                    />
                    <h2>{item.name}</h2>
                      <p>School : {item.school}</p>
                      <Image
                    src={item.imageSchool}
                    alt={`${item.school} Logo`}
                    width={50}
                    height={50}
                  />
                        <p>Birthday : {item.birthday}</p>
                          <p>Damage type : {item.damageType}</p>
                </CardCharacter>
            ))}
        </MainContainer>
    </main>
    )
}