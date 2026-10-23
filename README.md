# ABDUCTION PROTOCOL

A browser-playable 3D game with six missions, UFO abduction and aircraft Intercept modes. All game libraries, textures and sounds are included. No build command, API key, CDN or account is required to play.

## Publish with GitHub Pages

1. Upload this folder's **contents** into your repository, so `index.html`, `assets/` and `vendor/` are at its root. Include `.nojekyll`.
2. Commit to `main`.
3. Open **Settings → Pages**, choose **Deploy from a branch**, then **main** and **/(root)**. Save.
4. Open the game address shown in Pages after deployment finishes.

Upload the extracted files, rather than a ZIP or the enclosing GITHUB_UPLOAD folder. GitHub Desktop is also supported. All paths are relative, so project Pages addresses work.

## Play and controls

Revision 25 fixes Space after clicking cockpit controls: mouse/touch button use returns keyboard focus to flight, while keyboard navigation keeps button focus.

Use W/S for thrust, A/D to steer, Q/E for altitude, Shift to boost, and P/Esc to pause. UFO has three longer steerable boost charges. R fires homing missiles; capture an SR-71 intact to unlock the TR-3B, then V switches airframes (also available in Help). UFO: hold Space to abduct and F for the attack laser. Intercept aircraft: hold Space to attack or designate. Repeated captures level up the TR-3B; Q/E climb and dive through a compressed orbital layer with local NASA Earth imagery. Distinct ground markers identify required humans/cattle/crew and hostiles; police cars, officers and civilian vehicles add ground activity. Sirens respect mute. Live goal counters highlight every relevant capture and notify completion. Aircraft show hit flashes and temporary health bars, then burn and crash into terrain on destruction. Complete the goals and press GO in the tracker for extraction autopilot; steering, altitude or boost returns manual control. Touch controls, a walkthrough, audio, graphics quality and Reduced Motion are available in the game.

The six-operation story builds toward rescuing all six Asterion crew, followed by a real-time 3D reunion aboard the ship with English captions, optional speech, skip and replay. Orbital TR-3B flight extends horizontally beyond the original map; the north-up radar retains surface targets and GO returns to extraction.

All visible game text is uppercase. Menus and reports use curved glass surfaces, green/purple orbital artwork and Matrix text decoding with English letters and numbers. Mission briefing headings decode once in 0.32 seconds; objectives and launch controls stay immediately readable. Reduced Motion keeps the text stable. Screen readers receive the original wording throughout the effect.

To preview this upload folder locally with Python 3, run `python3 -m http.server 8123` here, then open `http://localhost:8123`. Direct file:// opening is unsupported. The separate PLAY_LOCAL folder includes a double-click Mac launcher.

## Graphics and credits

Three.js 0.170.0 is included under the MIT license in `vendor/THREE-LICENSE.txt`. Terrain scan credits are in `assets/terrain/README.txt`. Generated material provenance and exact prompts are in `AI-ASSETS.md`. Original aircraft, UFO, ground models and game systems were created for this game. Ultra uses native 4K photographed ground color maps and a 4K rendering budget; AI material images are 1672 × 941.
