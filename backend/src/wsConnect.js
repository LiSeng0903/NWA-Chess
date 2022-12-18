import { Game } from "./Game"

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
        this.game = new Game();
    },

    do: (ws, wss) => {
        return((async (byteString) => {
            const { data } = byteString;
            const [task, payload] = JSON.parse(data);
            switch (task){
                case "preview" : {
                    const location = payload;
                    const response = game.review_ava([location[0]. location[1]]);
                    boardcastMessage(wss, response);
                }
                break;
            }
        }))
    }
}