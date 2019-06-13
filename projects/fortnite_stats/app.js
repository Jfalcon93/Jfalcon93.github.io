const searchInput = document.getElementById('search-bar');
const searchForm = document.getElementById('search-form');

const getUser = async (searchText) => {
    const api = (`https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=${searchText}`);
    try{
       const response = await fetch (api);
        const json = await response.json();
        return json; 
    } catch (error) {
        return console.log(error);
    }
    
}

const getUserStats = async (searchText) => {
    const api = (`https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=${searchText}`);
    try {
        const response = await fetch (api);
        const json = await response.json();
        return json;
    } catch (error) {
        return console.log(error);
    }
    
}

const getRealUser = async (user) => {
    const real = await getUser(user);
    return userStats = await getUserStats(real.uid);
}

//async function main() {
//    return dataset = await getRealUser('Ninja');
//}

searchForm.addEventListener('submit', e => {
    // Get Username
    const username = searchInput.value;
        
    searchInput.value = "";
        
    getRealUser(username)
    .then(results => {
        // Check for actual User
        if(results.success === false) {
            document.getElementById('name').innerHTML = "Username not found";
        } 
        else {
            if(results.devices.length >= 1){
                // Updates Username, Wins, Win Percent, K/D, and Kills
                document.getElementById('name').innerHTML = results.epicName;
                document.getElementById('wins').innerHTML = `Wins: ${results.overallData.defaultModes.placetop1}`;
                document.getElementById('win-percent').innerHTML = `Win %: ${(results.overallData.defaultModes.placetop1 / results.overallData.defaultModes.matchesplayed).toFixed(2)}`;
                document.getElementById('kd').innerHTML = `K/D: ${(results.overallData.defaultModes.kills / results.overallData.defaultModes.matchesplayed).toFixed(2)}`;
                document.getElementById('kills').innerHTML = `Kills: ${results.overallData.defaultModes.kills}`;

                //Calculate Wins, Top 15, Top 25
                let soloWins  = 0;
                let soloTen = 0;
                let soloTwenty = 0;
                let duoWins = 0;
                let duoFive = 0;
                let duoTwelve = 0;
                let squadWins = 0;
                let squadThree = 0;
                let squadSix = 0;

                // Check for Gamepad
                if (results.devices.includes('gamepad')) {
                    if (results.data.gamepad.hasOwnProperty('defaultsolo')) {
                        // Check for win object
                        if (results.data.gamepad.defaultsolo.default.hasOwnProperty('placetop1')) {
                            soloWins += results.data.gamepad.defaultsolo.default.placetop1;
                        }
                        // Check for placetop10 object
                        if (results.data.gamepad.defaultsolo.default.hasOwnProperty('placetop10')) {
                            soloTen += results.data.gamepad.defaultsolo.default.placetop10;
                        }
                        // Check for placetop25 object
                        if (results.data.gamepad.defaultsolo.default.hasOwnProperty('placetop25')) {
                            soloTwenty += results.data.gamepad.defaultsolo.default.placetop25;
                        }
                    }
                    // Update Duo Stats
                    if (results.data.gamepad.hasOwnProperty('defaultduo')) {
                        if (results.data.gamepad.defaultduo.default.hasOwnProperty('placetop1')) {
                            duoWins += results.data.gamepad.defaultduo.default.placetop1;
                        }
                        if (results.data.gamepad.defaultduo.default.hasOwnProperty('placetop5')) {
                            duoFive += results.data.gamepad.defaultduo.default.placetop5;
                        }
                        if (results.data.gamepad.defaultduo.default.hasOwnProperty('placetop12')) {
                            duoTwelve += results.data.gamepad.defaultduo.default.placetop12;
                        }
                    }
                    // Update Squad Stats
                    if (results.data.gamepad.hasOwnProperty('defaultsquad')) {
                        if (results.data.gamepad.defaultsquad.default.hasOwnProperty('placetop1')) {
                            squadWins += results.data.gamepad.defaultsquad.default.placetop1;
                        }
                        if (results.data.gamepad.defaultsquad.default.hasOwnProperty('placetop3')) {
                            squadThree += results.data.gamepad.defaultsquad.default.placetop3;
                        }
                        if (results.data.gamepad.defaultsquad.default.hasOwnProperty('placetop6')) {
                            squadSix += results.data.gamepad.defaultsquad.default.placetop6;
                        }
                    }
                }
                // Check for keyboardmouse
                if (results.devices.includes('keyboardmouse')) {
                    if (results.data.keyboardmouse.hasOwnProperty('defaultsolo')) {
                        // Check for win object
                        if (results.data.keyboardmouse.defaultsolo.default.hasOwnProperty('placetop1')) {
                            soloWins += results.data.keyboardmouse.defaultsolo.default.placetop1;
                        }
                        // Check for placetop10 object
                        if (results.data.keyboardmouse.defaultsolo.default.hasOwnProperty('placetop10')) {
                            soloTen += results.data.keyboardmouse.defaultsolo.default.placetop10;
                        }
                        // Check for placetop25 object
                        if (results.data.keyboardmouse.defaultsolo.default.hasOwnProperty('placetop25')) {
                            soloTwenty += results.data.keyboardmouse.defaultsolo.default.placetop25;
                        }
                    }
                    // Update Duo Stats
                    if (results.data.keyboardmouse.hasOwnProperty('defaultduo')) {
                        if (results.data.keyboardmouse.defaultduo.default.hasOwnProperty('placetop1')) {
                            duoWins += results.data.keyboardmouse.defaultduo.default.placetop1;
                        }
                        if (results.data.keyboardmouse.defaultduo.default.hasOwnProperty('placetop5')) {
                            duoFive += results.data.keyboardmouse.defaultduo.default.placetop5;
                        }
                        if (results.data.keyboardmouse.defaultduo.default.hasOwnProperty('placetop12')) {
                            duoTwelve += results.data.keyboardmouse.defaultduo.default.placetop12;
                        }
                    }
                    // Update Squad Stats
                    if (results.data.keyboardmouse.hasOwnProperty('defaultsquad')) {
                        if (results.data.keyboardmouse.defaultsquad.default.hasOwnProperty('placetop1')) {
                            squadWins += results.data.keyboardmouse.defaultsquad.default.placetop1;
                        }
                        if (results.data.keyboardmouse.defaultsquad.default.hasOwnProperty('placetop3')) {
                            squadThree += results.data.keyboardmouse.defaultsquad.default.placetop3;
                        }
                        if (results.data.keyboardmouse.defaultsquad.default.hasOwnProperty('placetop6')) {
                            squadSix += results.data.keyboardmouse.defaultsquad.default.placetop6;
                        }
                    }
                }

                // Check for phone/tablet
                if (results.devices.includes('touch')) {
                    if (results.data.touch.hasOwnProperty('defaultsolo')) {
                        // Check for win object
                        if (results.data.touch.defaultsolo.default.hasOwnProperty('placetop1')) {
                            soloWins += results.data.touch.defaultsolo.default.placetop1;
                        }
                        // Check for placetop10 object
                        if (results.data.touch.defaultsolo.default.hasOwnProperty('placetop10')) {
                            soloTen += results.data.touch.defaultsolo.default.placetop10;
                        }
                        // Check for placetop25 object
                        if (results.data.touch.defaultsolo.default.hasOwnProperty('placetop25')) {
                            soloTwenty += results.data.touch.defaultsolo.default.placetop25;
                        }
                    }
                    // Update Duo Stats
                    if (results.data.touch.hasOwnProperty('defaultduo')) {
                        if (results.data.touch.defaultduo.default.hasOwnProperty('placetop1')) {
                            duoWins += results.data.touch.defaultduo.default.placetop1;
                        }
                        if (results.data.touch.defaultduo.default.hasOwnProperty('placetop5')) {
                            duoFive += results.data.touch.defaultduo.default.placetop5;
                        }
                        if (results.data.touch.defaultduo.default.hasOwnProperty('placetop12')) {
                            duoTwelve += results.data.touch.defaultduo.default.placetop12;
                        }
                    }
                    // Update Squad Stats
                    if (results.data.touch.hasOwnProperty('defaultsquad')) {
                        if (results.data.touch.defaultsquad.default.hasOwnProperty('placetop1')) {
                            squadWins += results.data.touch.defaultsquad.default.placetop1;
                        }
                        if (results.data.touch.defaultsquad.default.hasOwnProperty('placetop3')) {
                            squadThree += results.data.touch.defaultsquad.default.placetop3;
                        }
                        if (results.data.touch.defaultsquad.default.hasOwnProperty('placetop6')) {
                            squadSix += results.data.touch.defaultsquad.default.placetop6;
                        }
                    }
                }
                
                // Set Solo Elements
                document.getElementById('first-solo').innerHTML = `${soloWins}`;
                document.getElementById('top-ten-solo').innerHTML = `${soloTen}`;
                document.getElementById('top-twenty-solo').innerHTML = `${soloTwenty}`;
                // Set Duo Elements
                document.getElementById('first-duo').innerHTML = `${duoWins}`;
                document.getElementById('top-five-duo').innerHTML = `${duoFive}`;
                document.getElementById('top-twelve-duo').innerHTML = `${duoTwelve}`;
                // Set Squad Elements
                document.getElementById('first-squads').innerHTML = `${squadWins}`;
                document.getElementById('top-three-squads').innerHTML = `${squadThree}`;
                document.getElementById('top-six-squads').innerHTML = `${squadSix}`;
                
                // Create Charts to display data
                let ctx = document.getElementById('myChart').getContext('2d');
                let myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Solos', 'Duos', 'Squads',],
                        datasets: [{
                            label: 'Number of Wins',
                            data: [soloWins, duoWins, squadWins],
                            backgroundColor: [
                                '#E8FFB7',
                                '#23DDED',
                                '#EEBBFF'
                            ],
                            borderColor: [
                                '#a2b380',
                                '#199ba6',
                                '#a783b3'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        },
                        animation: {
                            duration: '1000',
                            easing: 'linear'
                        }
                    }
                });

            } else {
                document.getElementById('name').innerHTML = "Username not found";
            }
        }
    });
    
    e.preventDefault();
});