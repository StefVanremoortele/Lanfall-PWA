import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemPlayerService implements InMemoryDbService {
  createDb() {
    
    const competitions =  [
		{
			"id": 1,
			"game": "CS:GO",
			"teams": 16,
			"prizepool": 1000,
			"image_url": "assets/icons/competitions/csgo.png",
			"description": "Play CS:GO with your team of 5 and try to beat every team in the league..",
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
			"image_url": "assets/icons/competitions/fifa17.png",
			"description": "Experience complete innovation in FIFA 17 gameplay as it puts you in control of every moment on the pitch.",
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
		},
		{
			"id": 3,
			"game": "Rocket League",
			"teams": 14,
			"prizepool": 500,
			"image_url": "assets/icons/competitions/rocket-league.png",
			"description": "Play CS:GO with your team of 5 and try to beat every team in the league..",
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
		},
		{
			"id": 4,
			"game": "Unreal Tournament",
			"teams": 14,
			"prizepool": 500,
			"image_url": "assets/icons/competitions/unreal-tournament.png",
			"description": "Play CS:GO with your team of 5 and try to beat every team in the league..",
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
			"avatar": "assets/images/avatars/photos/men/1.jpg",
			"game": "CS:GO",
			"team": "defusekids",
			"ratings": {
				"brains": 75,
				"talent": 50,
				"respect": 80
			},
			"rate_count": 13		
		},
		{
			"id": 2,
			"firstname": "Edward",
			"lastname": "Tierney",
			"nickname": "GRoethlisberger",
			"avatar": "assets/images/avatars/photos/men/2.jpg",
			"game": "FIFA17",
			"team": "defusekids",
			"ratings": {
				"brains": 75,
				"talent": 50,
				"respect": 80
			  },
			"rate_count": 13		
			  
		},
		{
			"id": 3,
			"firstname": "Stella",
			"lastname": "Douglas",
			"nickname": "RLyden",
			"avatar": "assets/images/avatars/photos/men/3.jpg",
			"game": "CS:GO",
			"team": "defusekids",			
			"ratings": {
				"brains": 75,
				"talent": 50,
				"respect": 80
			  },
			"rate_count": 13					  
		},
		{
			"id": 4,
			"firstname": "Deirdre",
			"lastname": "Frederick",
			"nickname": "EStacy",
			"avatar": "assets/images/avatars/photos/men/4.jpg",
			"game": "FIFA17",
			"team": "defusekids",			
			"ratings": {
				"brains": 75,
				"talent": 50,
				"respect": 80
			  },
			"rate_count": 13		
			  
		},
		{
			"id": 5,
			"firstname": "Robbie",
			"lastname": "Morgan",
			"nickname": "CJackson",
			"avatar": "assets/images/avatars/photos/men/5.jpg",
			"game": "CS:GO",
			"team": "defusekids",			
			"ratings": [{
				"brains": 75
			},{
				"talent": 75
			},{
				"respect": 75
			}],
			"rate_count": 13					  
		},
		{
			"firstname": "Rachel",
			"lastname": "Peszynski",
			"nickname": "ARadinsky",
			"avatar": "assets/images/avatars/photos/men/6.jpg",
			"game": "CS:GO",
			"team": "defusekids",
			"ratings": [{
				"brains": 75
			},{
				"talent": 75
			},{
				"respect": 75
			}],
			"rate_count": 13					  
		},
		{
			"id": 6,
			"firstname": "Haidi",
			"lastname": "Szymanski",
			"nickname": "ACovel",
			"avatar": "assets/images/avatars/photos/men/7.jpg",
			"game": "FIFA17",
			"team": "defusekids",			
			"ratings": [{
				"brains": 75
			},{
				"talent": 75
			},{
				"respect": 75
			}],
			"rate_count": 13					
		},
		{
		
			"id": 7,
			"firstname": "Charlotte",
			"lastname": "Dedonato",
			"nickname": "MVicari",
			"avatar": "assets/images/avatars/photos/men/8.jpg",
			"game": "CS:GO",
			"team": "defusekids",			
			"ratings": [{
				"brains": 75
			},{
				"talent": 75
			},{
				"respect": 75
			}],
			"rate_count": 13					
		},
		{
			"id": 8,
			"firstname": "Sherrell",
			"lastname": "Tippetts",
			"nickname": "SSherman",
			"avatar": "assets/images/avatars/photos/men/9.jpg",
			"game": "CS:GO",
			"team": "defusekids",			
			"ratings": [{
				"brains": 75
			},{
				"talent": 75
			},{
				"respect": 75
			}],
			"rate_count": 13					
		},
		{
			"id": 9,
			"firstname": "Melody",
			"lastname": "Budgell",
			"nickname": "BBessko",
			"avatar": "assets/images/avatars/photos/men/10.jpg",
			"game": "FIFA17",
			"team": "defusekids",			
			"ratings": [{
				"brains": 75
			},{
				"talent": 75
			},{
				"respect": 75
			}],
			"rate_count": 13					
		}
	]
  	
	  // rating wordt als volgt berekend: initiele waarde 50 50 50; bij vote-trigger: (huidige waarde + rate waarde) / (huidig vote count + 1)   (waarbij huidig vote count >= 0)
	  //	Vb: standaard user X heeft: 50 50 50
	  //			=> vote trigger van met waarden: 75 85 96 =>	(50+75)/(1+1) = 62.5 (nadien afronden)
	const players_ratings = [
		{
			"id": 1,
			"player_id": 1,
		 	"ratings": [
			 {
				"brains": 75,
				"talent": 75,
				"respect": 75
			}],
			"count": 13		 
		 },
		 {
			"id": 2,
			"player_id": 2,
		 	"ratings": [
			 {
				"brains": 88,
				"talent": 76,
				"respect": 92
			}],
			"count": 4		 
		 },
		 {
			"id": 3,
			"player_id": 3,
		 	"ratings": [
			 {
				"brains": 50,
				"talent": 50,
				"respect": 50
			}],
			"count": 13		 
		 }
	]
    return {  competitions, players, players_ratings };
  }
}
