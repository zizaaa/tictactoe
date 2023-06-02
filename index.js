let player_1_name = '';
let player_2_name = '';
const botname = 'ziza d great!';
let gameRounds = 0;
let gameMode = '';

document.getElementById('pvp').addEventListener('click',()=>{
    gameMode = 'pvp';
    document.getElementById('container').style.display = 'none';
    document.querySelector('.pvpNames-container').style.display = 'flex';
    document.querySelector('.player-1-name').style.display = 'flex';

    pvpGame();
});
document.getElementById('pvbot').addEventListener('click',()=>{
    gameMode = 'pvb';
    document.getElementById('container').style.display = 'none';
    document.querySelector('.pvpNames-container').style.display = 'flex';
    document.querySelector('.player-1-name').style.display = 'flex';

    pvpGame();
});

document.getElementById('player_1_Btn').addEventListener('click',()=>{
    player_1_name = document.getElementById('player_1_name').value;

    if(player_1_name.length <= 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
    }else{
        // set player names
        document.getElementById('name_1').innerText = player_1_name;

        if(gameMode === 'pvb'){
            document.querySelector('.player-1-name').style.display = 'none';
            document.querySelector('.player-2-name').style.display = 'none';
            document.querySelector('.rounds').style.display = 'flex';
            document.getElementById('name_2').innerText = botname;
        }else{
            document.querySelector('.player-1-name').style.display = 'none';
            document.querySelector('.player-2-name').style.display = 'flex';
        }
    }
});
document.getElementById('player_2_Btn').addEventListener('click',()=>{
    player_2_name = document.getElementById('player_2_name').value;

    if(player_2_name.length <= 0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        })
    }else{
        // set player names
            document.getElementById('name_2').innerText = player_2_name;

    document.querySelector('.player-2-name').style.display = 'none';
    document.querySelector('.rounds').style.display = 'flex';
    }
});
document.getElementById('round_5').addEventListener('click',()=>{
    gameRounds += 5;

    document.querySelector('.rounds').style.display = 'none';
    document.querySelector('.playerVSbot-container').style.display = 'grid';
    document.querySelector('.playerScores').style.display = 'flex';
});
document.getElementById('round_10').addEventListener('click',()=>{
    gameRounds += 10;
    
    document.querySelector('.rounds').style.display = 'none';
    document.querySelector('.playerVSbot-container').style.display = 'grid';
    document.querySelector('.playerScores').style.display = 'flex';
});

    //for pvp
    let firstLine = ['','',''];
    let secondLine = ['','',''];
    let thirdLine = ['','',''];

        player_1 = {
            attacking:true,
            attack:"X"
        }
        player_2 = {
            attacking:false,
            attack:"O"
        }
        let tieScore = 0;
        let player_1_Score = 0;
        let player_2_Score = 0;
        let botScores = 0;

        let attack ='';
        let botAttacking = false;
        const rands=()=>{
            let aifirstLine = ['firstLine_1','firstLine_2','firstLine_3'];
            let aisecondLine = ['secondLine_1','secondLine_2','secondLine_3'];
            let aithirdLine = ['thirdLine_1','thirdLine_2','thirdLine_3'];
            
            setTimeout(()=>{
                if(firstLine[0] != '' && firstLine[1] === '' && firstLine[2] === ''){
                    aifirstLine = ['firstLine_2','firstLine_3'];
                }else if(firstLine[0] === '' && firstLine[1] != '' && firstLine[2] === ''){
                    aifirstLine = ['firstLine_1','firstLine_3'];
                }else if(firstLine[0]==='' &&firstLine[1]===''&& firstLine[2] != ''){
                    aifirstLine = ['firstLine_1','firstLine_2'];
                }else if(firstLine[0] !='' &&firstLine[1] !=''&& firstLine[2] != ''){
                    aifirstLine=[];
                }

                if(secondLine[0] != '' && secondLine[1] === '' && secondLine[2]=== ''){
                    aisecondLine = ['secondLine_2','secondLine_3'];
                }else if(secondLine[0] === '' && secondLine[1] != '' && secondLine[2] === ''){
                    aisecondLine = ['secondLine_1','secondLine_3'];
                }else if(secondLine[0] === '' && secondLine[1] === '' && secondLine[2] != ''){
                    aisecondLine = ['secondLine_1','secondLine_2'];
                }else if(secondLine[0] != '' && secondLine[1] != '' && secondLine[2] != ''){
                    aisecondLine = [];
                }

                if(thirdLine[0] != '' && thirdLine[1] === '' && thirdLine[2] === ''){
                    aithirdLine = ['thirdLine_2','thirdLine_3'];
                }else if(thirdLine[0] === '' && thirdLine[1] != '' && thirdLine[2] === ''){
                    aithirdLine = ['thirdLine_1','thirdLine_3'];
                }else if(thirdLine[0] === '' && thirdLine[1] === '' && thirdLine[2] != ''){
                    aithirdLine = ['thirdLine_1','thirdLine_2'];
                }else if(thirdLine[0] != '' && thirdLine[1] != '' && thirdLine[2] != ''){
                    aithirdLine=[]
                }

                let pattern = [aifirstLine,aisecondLine,aithirdLine];
                let selectPat = Math.floor(Math.random() * pattern.length)
                let selectLine = pattern[selectPat];
                let selectId = Math.floor(Math.random() * selectLine.length);
                attack = selectLine[selectId];
                console.log(aifirstLine);
                console.log(aisecondLine);
                console.log(aithirdLine);
            },500);
        } 
const pvpGame = ()=>{
    document.querySelector('.playerVSbot-container').addEventListener('click',(e)=>{
        let id = e.target.id;
            rands();
        //firstLine index of 0
            if(player_1.attacking && id == 'firstLine_1' && firstLine[0] === ''){
                document.getElementById(`${id}`).innerHTML = player_1.attack;
                firstLine[0] = player_1.attack
                player_1.attacking = false;
                player_2.attacking = true;

                    if(gameMode === 'pvb' && !botAttacking){
                        botAttacking = true;
                    }else if(gameMode === 'pvb' && !botAttacking){
                        botAttacking = false;
                    }

            }else if(gameMode === 'pvp' && firstLine[0] === '' && player_2.attacking && id == 'firstLine_1'){
                document.getElementById(`${id}`).innerHTML = player_2.attack;
                firstLine[0] = player_2.attack
                player_2.attacking = false;
                player_1.attacking = true;
            }

            //bot
            setTimeout(()=>{
                console.log(firstLine);
                console.log(secondLine);
                console.log(thirdLine);
                console.log('attack', attack);

                if(botAttacking && attack === undefined){
                    Swal.fire({title:'Your enemy pass, its your turn!',
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        player_1.attacking = true;
                        botAttacking = false;   
                    }
                    })
                }
                if(botAttacking && gameMode === 'pvb' && firstLine[0] === '' && attack == 'firstLine_1'){
                    document.getElementById(`${attack}`).innerHTML ="O";
                    firstLine[0] = 'O'
                    player_1.attacking = true;
                    botAttacking = false;
                }else if(botAttacking && gameMode === 'pvb' && firstLine[0] != '' && attack == 'firstLine_1'){
                    Swal.fire({title:'Your enemy pass, its your turn!',
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        player_1.attacking = true;
                        botAttacking = false;
                    }
                    })
                }
                if(botAttacking && gameMode === 'pvb' && firstLine[1] === '' && attack == 'firstLine_2'){
                    document.getElementById(`${attack}`).innerHTML ="O";
                    firstLine[1] = 'O'
                    player_1.attacking = true;
                    botAttacking = false;
                }else if(botAttacking && gameMode === 'pvb' && firstLine[1] != '' && attack == 'firstLine_2'){
                    Swal.fire({title:'Your enemy pass, its your turn!',
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        player_1.attacking = true;
                        botAttacking = false;
                    }
                    })
                }

                if(botAttacking && gameMode === 'pvb' && firstLine[2] === '' && attack == 'firstLine_3'){
                    document.getElementById(`${attack}`).innerHTML ="O";
                    firstLine[2] = 'O'
                    player_1.attacking = true;
                    botAttacking = false;
                }else if(botAttacking && gameMode === 'pvb' && firstLine[2] != '' && attack == 'firstLine_3'){
                    Swal.fire({title:'Your enemy pass, its your turn!',
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        player_1.attacking = true;
                        botAttacking = false;
                    }
                    })
                }

                if(botAttacking && gameMode === 'pvb' && secondLine[0] === '' && attack == 'secondLine_1'){
                    document.getElementById(`${attack}`).innerHTML ="O";
                    secondLine[0] ='O'
                    player_1.attacking = true;
                    botAttacking = false;
                }else if(botAttacking && gameMode === 'pvb' && secondLine[0] != '' && attack == 'secondLine_1'){
                    Swal.fire({title:'Your enemy pass, its your turn!',
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        player_1.attacking = true;
                        botAttacking = false;
                    }
                    })
                }

                if(botAttacking && gameMode === 'pvb' && secondLine[1] === '' && attack == 'secondLine_2'){
                    document.getElementById(`${attack}`).innerHTML ="O";
                    secondLine[1] = 'O'
                    player_1.attacking = true;
                    botAttacking = false;
                }else if(botAttacking && gameMode === 'pvb' && secondLine[1] != '' && attack == 'secondLine_2'){
                    Swal.fire({title:'Your enemy pass, its your turn!',
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        player_1.attacking = true;
                        botAttacking = false;
                    }
                    })
                }

                if(botAttacking && gameMode === 'pvb' && secondLine[2] === '' && attack == 'secondLine_3'){
                    document.getElementById(`${attack}`).innerHTML ="O";
                    secondLine[2] = 'O'
                    player_1.attacking = true;
                    botAttacking = false;
                }else if(botAttacking && gameMode === 'pvb' && secondLine[2] != '' && attack == 'secondLine_3'){
                    Swal.fire({title:'Your enemy pass, its your turn!',
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        player_1.attacking = true;
                        botAttacking = false;
                    }
                    })
                }

                if(botAttacking && gameMode === 'pvb' && thirdLine[0] === '' && attack == 'thirdLine_1'){
                    document.getElementById(`${attack}`).innerHTML ="O";
                    thirdLine[0] ='O'
                    player_1.attacking = true;
                    botAttacking = false;
                }else if(botAttacking && gameMode === 'pvb' && thirdLine[0] != '' && attack == 'thirdLine_1'){
                    Swal.fire({title:'Your enemy pass, its your turn!',
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        player_1.attacking = true;
                        botAttacking = false;
                    }
                    })
                }

                if(botAttacking && gameMode === 'pvb' && thirdLine[1] === '' && attack == 'thirdLine_2'){
                    document.getElementById(`${attack}`).innerHTML ="O";
                    thirdLine[1] = 'O'
                    player_1.attacking = true;
                    botAttacking = false;
                }else if(botAttacking && gameMode === 'pvb' && thirdLine[1] != '' && attack == 'thirdLine_2'){
                    Swal.fire({title:'Your enemy pass, its your turn!',
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        player_1.attacking = true;
                        botAttacking = false;
                    }
                    })
                }

                if(botAttacking && gameMode === 'pvb' && thirdLine[2] === '' && attack == 'thirdLine_3'){
                    document.getElementById(`${attack}`).innerHTML ="O";
                    thirdLine[2] = 'O'
                    player_1.attacking = true;
                    botAttacking = false;
                }else if(botAttacking && gameMode === 'pvb' && thirdLine[2] != '' && attack == 'thirdLine_3'){
                    Swal.fire({title:'Your enemy pass, its your turn!',
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        player_1.attacking = true;
                        botAttacking = false;
                    }
                    })
                }

            },1000);

        //firstLine index of 1
            if(player_1.attacking && id == 'firstLine_2' && firstLine[1] === ''){
                document.getElementById(`${id}`).innerHTML = player_1.attack;
                firstLine[1] = player_1.attack
                player_1.attacking = false;
                player_2.attacking = true;

                    if(gameMode === 'pvb' && !botAttacking){
                        botAttacking = true;
                    }else if(gameMode === 'pvb' && !botAttacking){
                        botAttacking = false;
                    }

            }else if(gameMode === 'pvp' && firstLine[1] === '' && player_2.attacking && id == 'firstLine_2'){
                document.getElementById(`${id}`).innerHTML = player_2.attack;
                firstLine[1] = player_2.attack
                player_2.attacking = false;
                player_1.attacking = true;
            }
            
        //firstLine index of 2
            if(player_1.attacking && id == 'firstLine_3' && firstLine[2] === ''){
                document.getElementById(`${id}`).innerHTML = player_1.attack;
                firstLine[2] = player_1.attack
                player_1.attacking = false;
                player_2.attacking = true;

                if(gameMode === 'pvb' && !botAttacking){
                    botAttacking = true;
                }else if(gameMode === 'pvb' && !botAttacking){
                    botAttacking = false;
                }

            }else if(gameMode === 'pvp' && firstLine[2] === '' && player_2.attacking && id == 'firstLine_3'){
                document.getElementById(`${id}`).innerHTML = player_2.attack;
                firstLine[2] = player_2.attack
                player_2.attacking = false;
                player_1.attacking = true;
            }
        //secondLineindex of 0
            if(player_1.attacking && id == 'secondLine_1' && secondLine[0] === ''){
                document.getElementById(`${id}`).innerHTML = player_1.attack;
                secondLine[0] = player_1.attack
                player_1.attacking = false;
                player_2.attacking = true;

                if(gameMode === 'pvb' && !botAttacking){
                    botAttacking = true;
                }else if(gameMode === 'pvb' && !botAttacking){
                    botAttacking = false;
                }

            }else if(gameMode === 'pvp' && secondLine[0] === '' && player_2.attacking && id == 'secondLine_1'){
                document.getElementById(`${id}`).innerHTML = player_2.attack;
                secondLine[0] = player_2.attack
                player_2.attacking = false;
                player_1.attacking = true;
            }
            
        //secondLineindex of 1
            if(player_1.attacking && id == 'secondLine_2' && secondLine[1] === ''){
                document.getElementById(`${id}`).innerHTML = player_1.attack;
                secondLine[1] = player_1.attack
                player_1.attacking = false;
                player_2.attacking = true;

                if(gameMode === 'pvb' && !botAttacking){
                    botAttacking = true;
                }else if(gameMode === 'pvb' && !botAttacking){
                    botAttacking = false;
                }

            }else if(gameMode === 'pvp' && secondLine[1] === '' && player_2.attacking && id == 'secondLine_2'){
                document.getElementById(`${id}`).innerHTML = player_2.attack;
                secondLine[1] = player_2.attack
                player_2.attacking = false;
                player_1.attacking = true;
            }
        //secondLineindex of 2
            if(player_1.attacking && id == 'secondLine_3' && secondLine[2] === ''){
                document.getElementById(`${id}`).innerHTML = player_1.attack;
                secondLine[2] = player_1.attack
                player_1.attacking = false;
                player_2.attacking = true;

                if(gameMode === 'pvb' && !botAttacking){
                    botAttacking = true;
                }else if(gameMode === 'pvb' && !botAttacking){
                    botAttacking = false;
                }

            }else if(gameMode === 'pvp' && secondLine[2] === '' && player_2.attacking && id == 'secondLine_3'){
                document.getElementById(`${id}`).innerHTML = player_2.attack;
                secondLine[2] = player_2.attack
                player_2.attacking = false;
                player_1.attacking = true;
            }
            
            //thirdLine index of 0
                if(player_1.attacking && id == 'thirdLine_1' && thirdLine[0] === ''){
                    document.getElementById(`${id}`).innerHTML = player_1.attack;
                    thirdLine[0] = player_1.attack
                    player_1.attacking = false;
                    player_2.attacking = true;

                    if(gameMode === 'pvb' && !botAttacking){
                        botAttacking = true;
                    }else if(gameMode === 'pvb' && !botAttacking){
                        botAttacking = false;
                    }

                }else if(gameMode === 'pvp' && thirdLine[0] === '' && player_2.attacking && id == 'thirdLine_1'){
                    document.getElementById(`${id}`).innerHTML = player_2.attack;
                    thirdLine[0] = player_2.attack
                    player_2.attacking = false;
                    player_1.attacking = true;
                }

            //thirdLine index of 1
                if(player_1.attacking && id == 'thirdLine_2' && thirdLine[1] === ''){
                    document.getElementById(`${id}`).innerHTML = player_1.attack;
                    thirdLine[1] = player_1.attack
                    player_1.attacking = false;
                    player_2.attacking = true;

                    if(gameMode === 'pvb' && !botAttacking){
                        botAttacking = true;
                    }else if(gameMode === 'pvb' && !botAttacking){
                        botAttacking = false;
                    }

                }else if(gameMode === 'pvp' && thirdLine[1] === '' && player_2.attacking && id == 'thirdLine_2'){
                    document.getElementById(`${id}`).innerHTML = player_2.attack;
                    thirdLine[1] = player_2.attack
                    player_2.attacking = false;
                    player_1.attacking = true;
                }
            //thirdLine index of 2
                if(player_1.attacking && id == 'thirdLine_3' && thirdLine[2] === ''){
                    document.getElementById(`${id}`).innerHTML = player_1.attack;
                    thirdLine[2] = player_1.attack
                    player_1.attacking = false;
                    player_2.attacking = true;

                    if(gameMode === 'pvb' && !botAttacking){
                        botAttacking = true;
                    }else if(gameMode === 'pvb' && !botAttacking){
                        botAttacking = false;
                    }

                }else if(gameMode === 'pvp' && thirdLine[2] === '' && player_2.attacking && id == 'thirdLine_3'){
                    document.getElementById(`${id}`).innerHTML = player_2.attack;
                    thirdLine[2] = player_2.attack
                    player_2.attacking = false;
                    player_1.attacking = true;
                }
            winner(firstLine,secondLine,thirdLine);
    });

// check winner
    const winner = (firstLine,secondLine,thirdLine) =>{
        if(firstLine[0] === 'X' && firstLine[1] === 'X' && firstLine[2] === 'X'||firstLine[0] === 'O' && firstLine[1] === 'O' && firstLine[2] === 'O'){
            
            if(firstLine[0] === 'X'){
                if(gameMode === 'pvb' && botAttacking){
                    botAttacking=false;
                }
                Swal.fire({title:`${player_1_name} win!`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                    }
                })

                // add point for winner
                player_1_Score++;
            }else{
                Swal.fire({title:`${player_2_name} win!`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                    }
                })
                // add point for winner
                player_2_Score++;
            }

        }else if(secondLine[0] === 'X' && secondLine[1] === 'X' && secondLine[2] === 'X' || secondLine[0] === 'O' && secondLine[1] === 'O' && secondLine[2] === 'O'){

            if(secondLine[0] === 'X'){
                if(gameMode === 'pvb' && botAttacking){
                    botAttacking=false;
                }
                Swal.fire({title:`${player_1_name} win!`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                    }
                })
                // add point for winner
                player_1_Score++;
            }else{
                Swal.fire({title:`${player_2_name} win!`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                    }
                })
                // add point for winner
                player_2_Score++;
            }

        }else if(thirdLine[0] === 'X' && thirdLine[1] === 'X' && thirdLine[2] === 'X' || thirdLine[0] === 'O' && thirdLine[1] === 'O' && thirdLine[2] === 'O'){
            if(thirdLine[0] === 'X'){
                if(gameMode === 'pvb' && botAttacking){
                    botAttacking=false;
                }
                Swal.fire({title:`${player_1_name} win!`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                    }
                })
                // add point for winner
                player_1_Score++;
            }else{
                Swal.fire({title:`${player_2_name} win!`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                    }
                })
                // add point for winner
                player_2_Score++;
            }

        }else if(firstLine[0] === 'X' && secondLine[0] === 'X' && thirdLine[0] === 'X' || firstLine[0] === 'O' && secondLine[0] === 'O' && thirdLine[0] === 'O'){

            if(firstLine[0] === 'X'){
                if(gameMode === 'pvb' && botAttacking){
                    botAttacking=false;
                }
                Swal.fire({title:`${player_1_name} win!`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                    }
                })
                // add point for winner
                player_1_Score++;
            }else{
                Swal.fire({title:`${player_2_name} win!`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                    }
                })
                // add point for winner
                player_2_Score++;
            }

        }else if(firstLine[1] === 'X' && secondLine[1] === 'X' && thirdLine[1] === 'X' || firstLine[1] === 'O' && secondLine[1] === 'O' && thirdLine[1] === 'O'){

            if(firstLine[1] === 'X'){
                if(gameMode === 'pvb' && botAttacking){
                    botAttacking=false;
                }
                Swal.fire({title:`${player_1_name} win!`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                    }
                })
                // add point for winner
                player_1_Score++;
            }else{
                Swal.fire({title:`${player_2_name} win!`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                    }
                })
                // add point for winner
                player_2_Score++;
            }

        }else if(firstLine[2] === 'X' && secondLine[2] === 'X' && thirdLine[2] === 'X' || firstLine[2] === 'O' && secondLine[2] === 'O' && thirdLine[2] === 'O'){

            if(firstLine[2] === 'X'){
                if(gameMode === 'pvb' && botAttacking){
                    botAttacking=false;
                }
                Swal.fire({title:`${player_1_name} win!`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                    }
                })
                // add point for winner
                player_1_Score++;
            }else{
                Swal.fire({title:`${player_2_name} win!`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                    }
                })
                // add point for winner
                player_2_Score++;
            }

        }else if(firstLine[0] === 'X' && secondLine[1] === 'X' && thirdLine[2] === 'X' || firstLine[0] === 'O' && secondLine[1] === 'O' && thirdLine[2] === 'O'){
            if(firstLine[0] === 'X'){
                if(gameMode === 'pvb' && botAttacking){
                    botAttacking=false;
                }
                Swal.fire({title:`${player_1_name} win!`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                    }
                })
                // add point for winner
                player_1_Score++;
            }else{
                Swal.fire({title:`${player_2_name} win!`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                    }
                })
                // add point for winner
                player_2_Score++;
            }

        }else if(firstLine[2] === 'X' && secondLine[1] === 'X' && thirdLine[0] === 'X' || firstLine[2] === 'O' && secondLine[1] === 'O' && thirdLine[0] === 'O'){

            if(firstLine[2] === 'x'){
                if(gameMode === 'pvb' && botAttacking){
                    botAttacking=false;
                }
                Swal.fire({title:`${player_1_name} win!`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                    }
                })
                // add point for winner
                player_1_Score++;
            }else{
                Swal.fire({title:`${player_2_name} win!`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                    }
                })
                // add point for winner
                player_2_Score++;
            }

        }else{
            const template = [firstLine.join(''),secondLine.join(''),thirdLine.join('')];

            const tie = template.map(item => item.length === 3 ? true : false);
            if(tie[0] && tie[1] && tie[2]){
                tieScore++;
                document.getElementById('tie_Score').innerText = tieScore;
                Swal.fire({title:'Tie',
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                    }
                })
            }
        }

        document.getElementById('player_1_Score').innerText = player_1_Score;
        
            document.getElementById('player_2_Score').innerText = player_2_Score;
        // }else{
        //     document.getElementById('player_2_Score').innerText = botScores
        // }
        

        if(gameRounds === 5 && player_1_Score === 5){
            botAttacking=false;
            Swal.fire({title:`${player_1_name} win! - Final Scores ${player_1_Score} : ${player_2_Score}`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                        document.getElementById('container').style.display = 'flex';
                        document.querySelector('.playerVSbot-container').style.display = 'none';
                        document.querySelector('.playerScores').style.display = 'none';
                    }
                })
        }else if(gameRounds === 5 && player_2_Score === 5){
            botAttacking=false;
            Swal.fire({title:`${player_2_name} win! - Final Scores ${player_1_Score} : ${player_2_Score}`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                        document.getElementById('container').style.display = 'flex';
                        document.querySelector('.playerVSbot-container').style.display = 'none';
                        document.querySelector('.playerScores').style.display = 'none';
                    }
                })
        }else if(gameRounds === 5 && tieScore === 5){
            botAttacking=false;
            Swal.fire({title:`Tie! - Final Scores ${player_1_Score} : ${player_2_Score}`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                        document.getElementById('container').style.display = 'flex';
                        document.querySelector('.playerVSbot-container').style.display = 'none';
                        document.querySelector('.playerScores').style.display = 'none';
                    }
                })
        }

        if(gameRounds === 10 && player_1_Score === 10){
            botAttacking=false;
            Swal.fire({title:`${player_1_name} win! - Final Scores ${player_1_Score} : ${player_2_Score}`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                        document.getElementById('container').style.display = 'flex';
                        document.querySelector('.playerVSbot-container').style.display = 'none';
                        document.querySelector('.playerScores').style.display = 'none';
                    }
                })
                document.querySelector('.playerScores').style.display = 'none';
        }else if(gameRounds === 10 && player_2_Score === 10){
            botAttacking=false;
            Swal.fire({title:`${player_2_name} win! - Final Scores ${player_1_Score} : ${player_2_Score}`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                        document.getElementById('container').style.display = 'flex';
                        document.querySelector('.playerVSbot-container').style.display = 'none';
                        document.querySelector('.playerScores').style.display = 'none';
                    }
                })
        }else if(gameRounds === 10 && tieScore === 10){
            botAttacking=false;
            Swal.fire({title:`Tie!. Final Scores ${player_1_Score} : ${player_2_Score}`,
                            allowOutsideClick: false}).then((result)=>{
                    if(result['isConfirmed']){
                        resetGame();
                        document.getElementById('container').style.display = 'flex';
                        document.querySelector('.playerVSbot-container').style.display = 'none';
                        document.querySelector('.playerScores').style.display = 'none';
                    }
                })
        }
    }

    const resetGame =()=>{
        document.getElementById('firstLine_1').innerText = '';
        document.getElementById('firstLine_2').innerText = '';
        document.getElementById('firstLine_3').innerText = '';
        document.getElementById('secondLine_1').innerText = '';
        document.getElementById('secondLine_2').innerText = '';
        document.getElementById('secondLine_3').innerText = '';
        document.getElementById('thirdLine_1').innerText = '';
        document.getElementById('thirdLine_2').innerText = '';
        document.getElementById('thirdLine_3').innerText = '';

        firstLine=['','',''];
        secondLine=['','',''];
        thirdLine=['','',''];

        player_1.attacking = true;
        player_2.attacking = false;
        botAttacking=false;
    }
}
// pvpGame();