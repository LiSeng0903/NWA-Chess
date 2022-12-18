import { Game } from "./Game.js"

const sendData = (data, ws) => {
    ws.send(JSON.stringify(data));
}   

const boardcastMessage = (wss, data) => {
    wss.clients.forEach(client => {
        sendData(data, client);
    });
}

export default {
    game: '',
    init:(ws) => {
        game = new Game();
    },

    do: (ws, wss, game) => {
        return((async (byteString) => {
            const { data } = byteString;
            const [task, payload] = JSON.parse(data);
            switch (task){
                case "preview" : {
                    const location = payload;
<<<<<<< HEAD
                    const response = game.preview([location[0], location[1]]);
=======
<<<<<<< HEAD
                    const response = game.preview([location[0], location[1]]);
=======
                    const response = game.preview_ava([location[0], location[1]]);
>>>>>>> 975d91b0c7b679f02aca483901fa44806dc4898e
>>>>>>> a5308c04cfc57798d5faf33f5193b3ab94f44de5
                    console.log(game)
                    boardcastMessage(wss, response);
                }
                break;
            }
        }))
    }
}