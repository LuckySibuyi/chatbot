import {Configuration, OpenAIApi} from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OpenAi_API_Key,});
const openai = new OpenAIApi(configuration);