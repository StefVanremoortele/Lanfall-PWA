import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemPlayerService implements InMemoryDbService {
  createDb() {
    
    const competitions =  [
		{
			"id": 1,
			"game": "CS:GO",
			"teams": 16,
			"prizepool": 1000,
			"prizes": {
				"first": [
					"5 x Siberia 350",
					"3 x steelseries rival 100",
					"1 x EUR 500"
					],
				"second": [
					"5 x Siberia 200",
					"3 x steelseries rival 100",
					"1 x EUR 200"
					],
				"third": [
					"5 x Siberia 350",
					"3 x steelseries rival 100"
				]
			}
		},
		{
			"id": 2,
			"game": "FIFA17",
			"teams": 14,
			"prizepool": 500,
			"prizes": {
				"first": [
					"5 x Intel i7",
					"3 x Corsair 750W",
					"1 x EUR 100"
					],
				"second": [
					"5 x Siberia 350",
					"3 x steelseries rival 100",
					"1 x EUR 200"
					],
				"third": [
					"5 x Siberia 350",
					"3 x steelseries rival 100",
					"1 x EUR 500"
				]
			}
		}				
	]

    const players = [
		{
			"id": 1,
			"firstname": "Teresa",
			"lastname": "Denard",
			"nickname": "NWaldman",
			"avatar": "src/assets/images/avatars/photos/men/1.jpg",
			"game": "CS:GO",
			"ratings": {
				"brains": 75,
				"talent": 50,
				"respect": 80
			}
		},
		{
			"id": 2,
			"firstname": "Edward",
			"lastname": "Tierney",
			"nickname": "GRoethlisberger",
			"avatar": "src/assets/images/avatars/photos/men/2.jpg",
			"game": "FIFA17",
			"ratings": {
				"brains": 75,
				"talent": 50,
				"respect": 80
			  }
		},
		{
			"id": 3,
			"firstname": "Stella",
			"lastname": "Douglas",
			"nickname": "RLyden",
			"avatar": "src/assets/images/avatars/photos/men/3.jpg",
			"game": "CS:GO",
			"ratings": {
				"brains": 75,
				"talent": 50,
				"respect": 80
			  }
		},
		{
			"id": 4,
			"firstname": "Deirdre",
			"lastname": "Frederick",
			"nickname": "EStacy",
			"avatar": "src/assets/images/avatars/photos/men/4.jpg",
			"game": "FIFA17",
			"ratings": {
				"brains": 75,
				"talent": 50,
				"respect": 80
			  }
		},
		{
			"id": 5,
			"firstname": "Robbie",
			"lastname": "Morgan",
			"nickname": "CJackson",
			"avatar": "src/assets/images/avatars/photos/men/5.jpg",
			"game": "CS:GO",
			"ratings": {
				"brains": 75,
				"talent": 50,
				"respect": 80
			  }
		},
		{
			"firstname": "Rachel",
			"lastname": "Peszynski",
			"nickname": "ARadinsky",
			"avatar": "src/assets/images/avatars/photos/men/6.jpg",
			"game": "CS:GO",
			"ratings": {
				"brains": 75,
				"talent": 50,
				"respect": 80
			  }
		},
		{
			"id": 6,
			"firstname": "Haidi",
			"lastname": "Szymanski",
			"nickname": "ACovel",
			"avatar": "src/assets/images/avatars/photos/men/7.jpg",
			"game": "FIFA17",
			"ratings": {
				"brains": 75,
				"talent": 50,
				"respect": 80
			}
		},
		{
		
			"id": 7,
			"firstname": "Charlotte",
			"lastname": "Dedonato",
			"nickname": "MVicari",
			"avatar": "src/assets/images/avatars/photos/men/8.jpg",
			"game": "CS:GO",
			"ratings": {
				"brains": 75,
				"talent": 50,
				"respect": 80
			}
		},
		{
			"id": 8,
			"firstname": "Sherrell",
			"lastname": "Tippetts",
			"nickname": "SSherman",
			"avatar": "src/assets/images/avatars/photos/men/9.jpg",
			"game": "CS:GO",
			"ratings": {
				"brains": 75,
				"talent": 50,
				"respect": 80
			}
		},
		{
			"id": 9,
			"firstname": "Melody",
			"lastname": "Budgell",
			"nickname": "BBessko",
			"avatar": "src/assets/images/avatars/photos/men/10.jpg",
			"game": "FIFA17",
			"ratings": {
				"brains": 75,
				"talent": 50,
				"respect": 80
			}
		}
	]
  	
	  // rating wordt als volgt berekend: initiele waarde 50 50 50; bij vote-trigger: (huidige waarde + rate waarde) / (huidig vote count + 1)   (waarbij huidig vote count >= 0)
	  //	Vb: standaard user X heeft: 50 50 50
	  //			=> vote trigger van met waarden: 75 85 96 =>	(50+75)/(1+1) = 62.5 (nadien afronden)
	const players_ratings = [
		{
			"id": 1,
			"player_id": 1,
		 	"ratings": 
			 {
				"brains": 75,
				"talent": 75,
				"respect": 75
			},
			"count": 13		 
		 },
		 {
			"id": 2,
			"player_id": 2,
		 	"ratings": 
			 {
				"brains": 88,
				"talent": 76,
				"respect": 92
			},
			"count": 4		 
		 },
		 {
			"id": 3,
			"player_id": 3,
		 	"ratings": 
			 {
				"brains": 50,
				"talent": 50,
				"respect": 50
			},
			"count": 13		 
		 }
	]
    return {  competitions, players, players_ratings };
  }
}