import * as express from 'express';
import router from './routes/TeamRoutes';
import userRouter from './routes/UserRoutes';
import matchesRouter from './routes/MatchesRoutes';
import leaderboard from './routes/LeaderBoardRoutes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.routes();
    this.userRouter();
    this.matchesRouter();
    this.leaderRouter();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private routes(): void {
    this.app.use('/teams', router);
  }

  private userRouter(): void {
    this.app.use('/login', userRouter);
  }

  private matchesRouter(): void {
    this.app.use('/matches', matchesRouter);
  }

  private leaderRouter(): void {
    this.app.use('/leaderboard', leaderboard);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();
