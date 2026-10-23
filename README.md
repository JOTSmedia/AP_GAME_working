# ABDUCTION PROTOCOL

A browser-playable 3D game with six missions, UFO abduction and aircraft Intercept modes. All game libraries, textures and sounds are included. No build command, API key, CDN or account is required to play.

## Publish with GitHub Pages

1. Upload this folder's **contents** into your repository, so `index.html`, `assets/` and `vendor/` are at its root. Include `.nojekyll`.
2. Commit to `main`.
3. Open **Settings → Pages**, choose **Deploy from a branch**, then **main** and **/(root)**. Save.
4. Open the game address shown in Pages after deployment finishes.

Upload the extracted files, rather than a ZIP or the enclosing GITHUB_UPLOAD folder. GitHub Desktop is also supported. All paths are relative, so project Pages addresses work.

## Play and controls

Use W/S for thrust, A/D to steer, Q/E for altitude, Shift to boost, and P/Esc to pause. UFO: hold Space to abduct and F for the attack laser. Intercept aircraft: hold Space to attack or designate. Touch controls, a walkthrough, audio, graphics quality and Reduced Motion are available in the game.

Menus, briefings and reports use visible green/purple Matrix text decoding. Reduced Motion keeps the text stable. Screen readers receive the original wording throughout the effect.

To preview this upload folder locally with Python 3, run `python3 -m http.server 8123` here, then open `http://localhost:8123`. Direct file:// opening is unsupported. The separate PLAY_LOCAL folder includes a double-click Mac launcher.

## Graphics and credits

Three.js 0.170.0 is included under the MIT license in `vendor/THREE-LICENSE.txt`. Terrain scan credits are in `assets/terrain/README.txt`. Generated material provenance and exact prompts are in `AI-ASSETS.md`. Original aircraft, UFO, ground models and game systems were created for this game. Ultra uses native 4K photographed ground color maps and a 4K rendering budget; AI material images are 1672 × 941.
