import { Component } from '@angular/core';
import { Card } from "../ui/card/card";

@Component({
  selector: 'app-district',
  imports: [Card],
  templateUrl: './district.html',
  styleUrl: './district.css'
})
export class District {

    district = [
      {
        id: 1,
        title: "Thiruvananthapuram",
        description: "Capital of Kerala, known for its beaches and historical sites.",
        image: "https://keralatourism.travel/images/destinations/headers/trivandrum-kerala-tourism-entry-fee-timings-holidays-reviews-header.jpg"
      },
      {
        id: 2,
        title: "Kollam",
        description: "A coastal district famous for Ashtamudi Lake and cashew processing.",
        image: "https://static.wixstatic.com/media/c8e24e_389399b79d7d4ff2a10f52d619e12840~mv2.jpeg/v1/fill/w_616,h_346,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Jatayu-Nature-Park-In-Kerala.jpeg"
      },
      {
        id: 3,
        title: "Pathanamthitta",
        description: "Known for Sabarimala temple and lush forest areas.",
        image: "https://www.dtpcpathanamthitta.com/uploads/ebrochures/images/pathanamthittaebrochure-20230505131306993091.webp"
      },
      {
        id: 4,
        title: "Alappuzha",
        description: "Popular for its backwaters and houseboats.",
        image: "https://media1.thrillophilia.com/filestore/7yy1pd30junw4n15h89khh8oviza_steptodown.com137883%20(1).jpg"
      },
      {
        id: 5,
        title: "Kottayam",
        description: "Known for rubber plantations and literacy.",
        image: "https://www.keralatourism.org/images/enchanting_kerala/large/illickal_kallu20220103142808_1152_1.jpg"
      },
      {
        id: 6,
        title: "Idukki",
        description: "A high-range district famous for the Idukki Dam and hill stations.",
        image: "https://www.keralaholidays.com/uploads/destination-gallery/main/idukki.jpg"
      },
      {
        id: 7,
        title: "Ernakulam",
        description: "Commercial capital of Kerala, includes Kochi city.",
        image: "https://img.onmanorama.com/content/dam/mm/en/archive/travel/kerala/images/2025/7/9/ernakulam-kerala-tourism.jpg"
      },
      {
        id: 8,
        title: "Thrissur",
        description: "Cultural capital of Kerala, known for Thrissur Pooram.",
        image: "https://static.theprint.in/wp-content/uploads/2023/04/ANI-20230430054237.jpg"
      },
      {
        id: 9,
        title: "Palakkad",
        description: "Gateway to Kerala, known for the Palakkad Gap and paddy fields.",
        image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/15/31807bc2003781adc4146b15a98ba9fa_1000x1000.jpg"
      },
      {
        id: 10,
        title: "Malappuram",
        description: "A fast-growing city with cultural and educational institutions.",
        image: "https://media1.thrillophilia.com/filestore/sr60r6lbq76dbhaup9e9u6565dm2_download.jpg"
      },
      {
        id: 11,
        title: "Kozhikode",
        description: "Historic port city where Vasco da Gama landed in India.",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/d5/18/2b/psx-20170319-125048-largejpg.jpg"
      },
      {
        id: 12,
        title: "Wayanad",
        description: "Hill station with forests, wildlife, and tribal heritage.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Wayanad_Churam_thamarasseri.jpg"
      },
      {
        id: 13,
        title: "Kannur",
        description: "Famous for Theyyam and historical forts.",
        image: "https://www.keralatourism.org/images/enchanting_kerala/large/kannur_fort20200908052017_1019_1.jpg"
      },
      {
        id: 14,
        title: "Kasaragod",
        description: "Northernmost district, known for Bekal Fort and multilingual culture.",
        image: "https://gokulamhotels.com/images/property/park/nalanda-kasaragod/galley-1th.jpg"
      }
    ];
  }
  
 

