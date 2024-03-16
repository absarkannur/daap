
import { express } from 'express';

const app = express();

app.get( "/", ( req: Request, res: Response )  => {
    res.sent("DAAP"); 
});

app.listen(8080);