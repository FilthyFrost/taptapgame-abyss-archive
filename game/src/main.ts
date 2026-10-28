import { startDebugRouter } from './debug/router';

const canvas = document.querySelector<HTMLCanvasElement>('#view');
if (!canvas) throw new Error('index.html must contain <canvas id="view">');

const query = new URLSearchParams(location.search);
if (query.has('scene')) {
  void startDebugRouter(canvas);
} else {
  // No ?scene=: the browser game (game-shell's startGame, src/game/app.ts); ?seed=, ?bot= and ?speed= still apply.
  void import('./game/app')
    .then(({ startGame }) =>
      startGame(canvas, {
        seed: Number(query.get('seed') ?? 1) || 1,
        bot: query.get('bot'),
        speed: Number(query.get('speed') ?? 1) || 1,
      }),
    )
    .then(() => {
      window.__ready = true;
    })
    .catch((e: unknown) => {
      window.__error = String((e as Error)?.stack ?? e);
      throw e;
    });
}
