import express from 'express'
import http from 'http'
import dotenv from "dotenv-defaults";
import mongoose from "mongoose";
import WebSocket from 'ws';
import wsConnect from "./wsConnect.js"
import { Game } from './Game.js';

const app = express()
const server = http.createServer(app)
const serverWS = new WebSocket.Server({server})

let game = ''

serverWS.on("connection", (ws) => {
    game = new Game()
    console.log("Start Game")
    // console.log(game)
})

serverWS.on("connection", (ws) => {
    ws.onmessage = wsConnect.do(ws, serverWS, game);
})

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`server is on ${PORT}`);
})