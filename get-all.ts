import {Request, Response, Next} from 'restify';
import {contacts} from './contacts';

export function getAll(req: Request, res: Response, next: Next): void{
    res.send(contacts);
    next();
}