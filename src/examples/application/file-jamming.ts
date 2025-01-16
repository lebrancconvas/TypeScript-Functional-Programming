import { readFileSync, writeFileSync } from 'fs';
import path from 'path';


const filePath = path.join(__dirname, '..', '..', 'data', 'message.txt');

const messageContent = readFileSync(filePath, 'utf8');

const jammedMessageContent = messageContent.split(' ').map(messageContent => messageContent + '@').join(' ');


writeFileSync(filePath, jammedMessageContent, 'utf8');

