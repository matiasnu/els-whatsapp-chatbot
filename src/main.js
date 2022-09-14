#!/usr/bin/env node

import { session, httpCtrl } from "./core";
import conversation from "./conversations/conversation";
import { chatbotOptions } from "./config";
// import conversation1 from './conversations/conversation1.js';
// import conversation2 from './conversations/conversation2.js';

/* Http chatbot control server (http://localhost:3000/) */
/* -----------------------------------------------------*/
httpCtrl("chatbotSession", chatbotOptions.httpCtrl.port);

/* Single WhatsApp account */
/* ------------------------*/
session("chatbotSession", conversation);

/* Multiple WhatsApp accounts */
/* ---------------------------*/
// session("chatbotSession", conversation1);
// session("chatbotSession", conversation2);
// ...
/* ---------------------------*/