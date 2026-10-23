/* Campaign data stays independent of the renderer and DOM.
   Only numeric goals belong on CAMPAIGN_MISSIONS: the flight tracker sums them. */
export const CAMPAIGN_MISSIONS = [
 {name:'FIRST CONTACT',text:'Calibrate on 4 cattle and 2 humans. Scan the distress echo, then extract.',time:210,cow:4,human:2,intel:1},
 {name:'THE RECOVERY ROUTE',text:'Recover 4 witnesses, capture a Black Hawk intact, and scan the convoy relay.',time:240,human:4,blackhawk:1,intel:1},
 {name:'BORROWED WINGS',text:'Capture 2 fighters intact. Scan both identification relays, then extract.',time:270,fighter:2,intel:2},
 {name:'BREAK THE SILENCE',text:'Disable 3 SAM batteries and scan the jamming hub. Open a channel to the crew.',time:270,sam:3,intel:1},
 {name:'BLACKBIRD PROTOCOL',text:'Capture the SR-71 intact and scan the archive terminal. Find the crash approach.',time:330,sr71:1,intel:1},
 {name:'NO ONE LEFT BEHIND',text:'Rescue all 6 Asterion crew. Evade or disable the recovery troops, then extract together.',time:360,alien:6}
];

export const CREW_ROSTER = [
 {name:'NEM',role:'PATHFINDER',character:1,rescueLine:'I KEPT THE BEACON LIT. I KNEW SOMEONE WOULD HEAR.'},
 {name:'VEK',role:'ENGINEER',character:2,rescueLine:'THE DRIVE IS GONE. THE CREW IS WHAT MATTERS.'},
 {name:'SERA',role:'MEDIC',character:3,rescueLine:'EVERYONE IS ALIVE. KEEP THE EXTRACTION CHANNEL OPEN.'},
 {name:'LIO',role:'NAVIGATOR',character:4,rescueLine:'I HAVE OUR STAR CHARTS. WE CAN STILL FIND OUR WAY HOME.'},
 {name:'ORR',role:'PILOT',character:5,rescueLine:'I COULD NOT SAVE THE SHIP. THANK YOU FOR COMING FOR US.'},
 {name:'TAL',role:'SIGNALS OFFICER',character:6,rescueLine:'LAST SIGNAL ACCOUNTED FOR. THERE IS NO ONE LEFT BELOW.'}
];

const comm=(speaker,line)=>({speaker,line});
export const CAMPAIGN_STORY = [
 {
  title:'Six voices in the noise',chapter:'01 / THE DISTRESS CALL',
  brief:'The Asterion has fallen to Earth. Six crew survived, but a military jammer hides their location. Calibrate your bioscanner on local life, then read the faint distress echo before the recovery teams erase it.',
  outcome:'Six living crew confirmed. The echo contains a convoy call sign: BLACKPINE. Your search now has a direction.',
  intelLabel:'DISTRESS ECHO',intelBrief:'HOLD SPACE WITHIN 150 M AND BELOW 500 M AGL UNTIL THE SCAN COMPLETES.',
  objectiveDetails:{cow:'4 REQUIRED. THESE LARGE LIFE SIGNS CALIBRATE THE RESCUE SCANNER.',human:'2 REQUIRED. ISOLATE HUMAN SIGNATURES FROM THE SIX ALIEN LIFE SIGNS.',intel:'SCAN THE MARKED DISTRESS ECHO TO IDENTIFY THE RECOVERY CONVOY.'},
  openingComms:comm('COMMANDER ARA','SIX CREW ARE STILL ALIVE. CALIBRATE THE SCANNER; WE ARE BRINGING THEM HOME.'),
  intelComms:[comm('SHIP SYSTEMS','ECHO DECODED: BLACKPINE CONVOY. SIX ALIEN SIGNALS CONFIRMED.')],
  progressComms:{cow:comm('SHIP SYSTEMS','LARGE-LIFE CALIBRATION LOCKED. HUMAN SIGNATURES WILL REMOVE THE REMAINING NOISE.'),human:comm('COMMANDER ARA','SURVIVAL, NOT SPECIMENS. EVERY CONTACT HELPS US FIND OUR PEOPLE.')},
  readyComms:comm('COMMANDER ARA','WE HAVE A CONVOY CALL SIGN. TAKE THE BLUE EXTRACTION ROUTE TO BLACKPINE.')
 },
 {
  title:'A trail through Blackpine',chapter:'02 / FOLLOW THE CONVOY',
  brief:'A recovery convoy carried Asterion debris through Blackpine. Four witnesses hold the missing route; a Black Hawk flight recorder can verify it. Copy the convoy relay to find where the military sent the wreckage.',
  outcome:'The recorder places the wreck in a sealed mountain basin. Two fighter identification keys can open the military relay network.',
  intelLabel:'CONVOY RELAY',intelBrief:'HOLD SPACE OVER THE RELAY. THE BLACK HAWK MUST BE CAPTURED INTACT.',
  objectiveDetails:{human:'4 REQUIRED. RECONSTRUCT THE CONVOY ROUTE FROM WITNESS CONTACTS.',blackhawk:'1 REQUIRED, INTACT. STAY CLOSE WITH THE TRACTOR BEAM TO RECOVER ITS FLIGHT RECORDER.',intel:'COPY THE CONVOY RELAY AT THE MARKED SCAN SITE.'},
  openingComms:comm('COMMANDER ARA','THE CONVOY LEFT A TRAIL. FIND THE WITNESSES AND TAKE THAT BLACK HAWK INTACT.'),
  intelComms:[comm('SHIP SYSTEMS','RELAY COPIED. THE WRECK WAS MOVED INTO A SEALED MOUNTAIN SECTOR.')],
  progressComms:{human:comm('SHIP SYSTEMS','WITNESS ROUTE RECONSTRUCTED. CHECK IT AGAINST THE HELICOPTER RECORDER.'),blackhawk:comm('COMMANDER ARA','FLIGHT RECORDER SECURED. OUR CREW WERE ALIVE WHEN THE CONVOY ARRIVED.')},
  readyComms:comm('COMMANDER ARA','THE TRAIL ENDS BEHIND MILITARY IDENTIFICATION CHECKS. NEXT, WE BORROW THEIR WINGS.')
 },
 {
  title:'Two keys to a locked sky',chapter:'03 / INFILTRATE THE NETWORK',
  brief:'The military network rejects our signal. Capture two fighters for separate identification keys, then copy both relay nodes. Together they will reveal which transmitter is silencing the Asterion crew.',
  outcome:'The two relays agree: Port Halcyon is jamming the basin. Silence its defenses and the survivors can speak to us.',
  intelLabel:'IDENTIFICATION RELAYS',intelBrief:'SCAN BOTH MARKED RELAYS. EACH NODE COUNTS ONCE.',
  objectiveDetails:{fighter:'2 REQUIRED, INTACT. CAPTURE THEIR IDENTIFICATION KEYS WITH THE TRACTOR BEAM.',intel:'2 RELAYS REQUIRED. HOLD SPACE NEAR EACH MARKED NODE TO COPY ITS NETWORK DATA.'},
  openingComms:comm('COMMANDER ARA','TWO FIGHTERS, TWO KEYS. THEIR OWN NETWORK WILL LEAD US TO THE JAMMER.'),
  intelComms:[comm('SHIP SYSTEMS','FIRST RELAY COPIED. A SECOND NODE WILL TRIANGULATE THE JAMMER.'),comm('SHIP SYSTEMS','SECOND RELAY COPIED. JAMMING SOURCE: PORT HALCYON.')],
  progressComms:{fighter:comm('COMMANDER ARA','BOTH IDENTIFICATION KEYS SECURED. THE RELAY NETWORK CAN NO LONGER HIDE.')},
  readyComms:comm('COMMANDER ARA','PORT HALCYON IS THE LOCK. WE NOW HAVE THE KEYS. EXTRACT AND REGROUP.')
 },
 {
  title:'The first answer',chapter:'04 / RESTORE CONTACT',
  brief:'Port Halcyon shields its jammer with three SAM batteries. Disable them and copy the jamming hub. For the first time since the crash, we may hear the crew answer.',
  outcome:'NEM: “Six of us. The beacon is failing. Please hurry.” The crew are in Obsidian Basin; a Blackbird archive holds the safe approach.',
  intelLabel:'JAMMING HUB',intelBrief:'DISABLE THE THREE SAM BATTERIES AND COPY THE MARKED JAMMING HUB.',
  objectiveDetails:{sam:'3 REQUIRED. USE F FOR LASER OR R FOR MISSILES; AUTOMATIC FLARES HELP AGAINST LOCK-ONS.',intel:'HOLD SPACE AT THE JAMMING HUB TO RECOVER THE CREW CHANNEL.'},
  openingComms:comm('COMMANDER ARA','THOSE SAMS GUARD THE JAMMER. BREAK THE DEFENSES AND GET OUR CREW BACK ON THE AIR.'),
  intelComms:[comm('NEM / BROKEN SIGNAL','ARA? SIX OF US. OBSIDIAN BASIN. THE BEACON IS FAILING. PLEASE HURRY.')],
  progressComms:{sam:comm('SHIP SYSTEMS','ALL THREE SAM BATTERIES DISABLED. THE JAMMING HUB IS EXPOSED.')},
  readyComms:comm('COMMANDER ARA','WE HEARD YOU, NEM. HOLD TOGETHER. WE ARE FINDING A WAY IN.')
 },
 {
  title:'Catch the impossible',chapter:'05 / FIND THE APPROACH',
  brief:'The crash basin is ringed by military recovery teams. An SR-71 carries the only current survey of the perimeter. Capture the Blackbird intact and copy the archive terminal to chart a rescue route.',
  outcome:'Approach chart recovered. Six survivors are waiting around the Asterion wreck. The search is over. The rescue begins.',
  intelLabel:'RECON ARCHIVE',intelBrief:'CAPTURE THE SR-71 INTACT, THEN COMPLETE THE ARCHIVE SCAN. BOTH OBJECTIVES ARE REQUIRED.',
  objectiveDetails:{sr71:'1 REQUIRED, INTACT. INTERCEPT ITS PATH, BOOST TO CLOSE, AND HOLD SPACE TO MAINTAIN THE CAPTURE.',intel:'COPY THE MARKED ARCHIVE TERMINAL TO COMPLETE THE CRASH APPROACH CHART.'},
  openingComms:comm('COMMANDER ARA','THE BLACKBIRD HAS OUR WAY IN. INTERCEPT ITS PATH; DO NOT CHASE FROM FAR BEHIND.'),
  intelComms:[comm('SHIP SYSTEMS','ARCHIVE COPIED. COMBINE IT WITH THE BLACKBIRD SURVEY TO RESOLVE THE APPROACH.')],
  progressComms:{sr71:comm('COMMANDER ARA','BLACKBIRD SECURED. THAT IS THE LAST PIECE. OUR NEXT FLIGHT BRINGS THEM HOME.')},
  readyComms:comm('VEK / CREW CHANNEL','WE CAN SEE YOUR APPROACH SIGNAL. ALL SIX OF US WILL BE WAITING.')
 },
 {
  title:'No one left behind',chapter:'06 / THE ASTERION RESCUE',
  brief:'Nem, Vek, Sera, Lio, Orr, and Tal are alive around the Asterion wreck. Recovery troops surround them. Bring every named survivor aboard, then reach extraction together. This is why you came.',
  outcome:'All six crew are aboard. Their names replace the distress signals. The Asterion is lost; her people are going home.',
  intelLabel:'CREW BEACONS',intelBrief:'FOLLOW THE SIX VIOLET RESCUE MARKERS. HOLD SPACE TO BRING EACH SURVIVOR ABOARD.',
  objectiveDetails:{alien:'6 REQUIRED: NEM, VEK, SERA, LIO, ORR, AND TAL. HOLD SPACE OVER EACH VIOLET CREW MARKER.'},
  openingComms:comm('NEM / CREW CHANNEL','WE CAN SEE YOU. SIX OF US AROUND THE WRECK. PLEASE DO NOT LEAVE ANYONE BEHIND.'),
  intelComms:[],progressComms:{},
  readyComms:comm('COMMANDER ARA','SIX ABOARD. EVERYONE ACCOUNTED FOR. TAKE US HOME.')
 }
];

export const RESCUE_DIALOGUE = [
 {speaker:'COMMANDER ARA',character:0,line:'NEM. VEK. SERA. LIO. ORR. TAL. SIX ABOARD. I PROMISED WE WOULD FIND YOU.'},
 {speaker:'NEM / PATHFINDER',character:1,line:'WHEN THE BEACON WENT QUIET, WE THOUGHT NO ONE HAD HEARD. THEN YOUR LIGHT CAME THROUGH THE CLOUDS.'},
 {speaker:'VEK / ENGINEER',character:2,line:'THE ASTERION WAS OUR HOME. I COULD NOT SAVE HER. BUT YOU SAVED EVERYONE SHE CARRIED.'},
 {speaker:'COMMANDER ARA',character:0,line:'A SHIP CAN BE REBUILT. ALL OF YOU ARE HERE. SET A COURSE FOR THE OUTER COLONIES. WE ARE GOING HOME.'}
];

/** Pure, event-driven comm selection. The caller queues messages and deduplicates id.
 * level: 1..6. Events: launch, intel, progress, ready, crew, critical, time.
 * context: {key,current,required,crewIndex,remaining}. No clocks or state are mutated.
 * Progress speaks only on completion; per-capture HUD feedback remains separate.
 */
export function campaignComms(level,event,context={}) {
 const stage=CAMPAIGN_STORY[level-1];if(!stage)return null;
 let message=null,id=`${level}:${event}`,priority=1;
 if(event==='launch')message=stage.openingComms;
 else if(event==='intel'){
  const index=Math.max(0,Math.floor(Number(context.current)||1)-1);
  message=stage.intelComms[index];id+=`:${index+1}`;priority=2;
 }else if(event==='progress'){
  const required=Number(context.required)||CAMPAIGN_MISSIONS[level-1][context.key];
  const current=Number(context.current);
  if(!(required>0)||!Number.isFinite(current)||current<required)return null;
  message=stage.progressComms[context.key];id+=`:${context.key}`;
 }else if(event==='ready'){message=stage.readyComms;priority=3;}
 else if(event==='crew'){
  const index=Number.isInteger(context.crewIndex)?context.crewIndex:Math.floor(Number(context.current)||1)-1;
  const crew=CREW_ROSTER[index];if(level!==6||!crew)return null;
  message=comm(`${crew.name} / ${crew.role}`,crew.rescueLine);id+=`:${index}`;priority=3;
 }else if(event==='critical'){
  message=comm('SHIP SYSTEMS','HULL CRITICAL. BREAK CONTACT AND BOOST CLEAR. WE NEED THIS SHIP TO BRING THE CREW HOME.');priority=4;
 }else if(event==='time'){
  const remaining=Number(context.remaining);if(!Number.isFinite(remaining)||remaining>60||remaining<=0)return null;
  message=comm('COMMANDER ARA',level===6?'ONE MINUTE. CHECK THE CREW TRACKER; EVERY SURVIVOR MUST BE ABOARD BEFORE EXTRACTION.':'ONE MINUTE. CHECK YOUR REMAINING GOALS. ONCE COMPLETE, PRESS GO TO EXTRACT.');priority=2;
 }
 return message?{id,...message,priority}:null;
}
