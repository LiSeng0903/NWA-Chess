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
                    const response = game.preview_ava([location[0], location[1]]);
>>>>>>> 93acdbb (connecting)
                    console.log(game)
                    boardcastMessage(wss, response);
                }
                break;
            }
        }))
    }
}