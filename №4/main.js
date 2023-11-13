
let players = +prompt('Сколько игроков в основном составе валейбола?', '');

switch(players) {
    case 1:
    case 2:
      alert( 'Это слишком мало...' );
      break;
    case 3:
    case 4: 
    case 5: 
        alert( 'Близко, но больше...' );
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        alert( 'Это много' );
        break;
    case 6:
        alert( 'Верно!' );
    default:
        alert( "Нет таких значений" );
}