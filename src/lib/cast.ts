/**
 * The cast: seven plush characters, one per part of the site.
 * Drawn as SVG with a shared fur filter (#plush) and shading gradients
 * defined once in PlushDefs.astro. Moods are switched with CSS via the
 * wrapper's `data-mood` attribute (see .mascot rules in global.css).
 */

export type CastName = 'tok' | 'pix' | 'bolt' | 'dot' | 'bean' | 'nova' | 'ping';

export type CastMember = {
  name: string;
  role: string;
  job: string;
  color: string;
  tips: string[];
};

export const CAST: Record<CastName, CastMember> = {
  tok:  { name: 'Tok',  role: 'Host · Planner',  job: 'Plans the run and keeps everyone on task.', color: '#FF6B33',
          tips: ["Hi! I'm Tok. I run the intro, then the rest of the cast takes over as you scroll.", '80% fewer support tickets. Not bad for a chat window.', "He's open to remote and hybrid roles, by the way."] },
  bolt: { name: 'Bolt', role: 'Tool-caller',     job: 'Calls the APIs and builds the thing.', color: '#4560F5',
          tips: ['Bolt here. I build things. Tap a project to see how it was made.', 'Try the Hackathons filter. That is where the trophies live.'] },
  pix:  { name: 'Pix',  role: 'Retriever',       job: 'Finds the right context, every time.', color: '#1FC995',
          tips: ["Pix! I fetch things. Here's everything he works with.", 'The top two groups are the daily drivers.'] },
  bean: { name: 'Bean', role: 'Memory',          job: 'Remembers the whole journey.', color: '#F2559A',
          tips: ["I'm Bean. I remember everything. Accenture is the newest chapter.", 'Four years at Hexaware, from RPA bots to multi-agent systems.'] },
  nova: { name: 'Nova', role: 'Recognition',     job: 'Keeps the trophies shiny.', color: '#FFC21A',
          tips: ['Nova here! Tap any photo to see it up close.', 'Two Designathon podiums and a win. I polish those daily.'] },
  dot:  { name: 'Dot',  role: 'Evaluator',       job: 'Checks every answer before it ships.', color: '#9B7BFF',
          tips: ['Dot. Evaluator. Every certificate here links to its public credential.', 'Look for the orange ones: Professional and Expert level.'] },
  ping: { name: 'Ping', role: 'Messenger',       job: 'Delivers your message, fast.', color: '#A6E22E',
          tips: ['Ping! Copy the email and say hello.', 'WhatsApp works too, if that is easier.'] },
};

export const CAST_ORDER: CastName[] = ['tok', 'bolt', 'pix', 'bean', 'nova', 'dot', 'ping'];

/* ---------------------------------------------------------------- */

const INK = '#141210';
const gloss = 'url(#g-gloss)';
const hi = (x: number, y: number, rx = 3, ry = 2) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#fff" opacity=".3"/>`;
const fur = (shape: string) => `<g filter="url(#plush)">${shape}</g>`;

type Face = { l: number; r: number; y: number; mouth: number; blush?: string; size?: number };

function face({ l, r, y, mouth, blush = '#FF3D7F', size = 1 }: Face) {
  const rx = 3.8 * size, ry = 5.2 * size, cx = (l + r) / 2;
  return `
    <g class="m-dot"><g class="look"><g class="blink">
      <ellipse cx="${l}" cy="${y}" rx="${rx}" ry="${ry}" fill="${INK}"/><ellipse cx="${r}" cy="${y}" rx="${rx}" ry="${ry}" fill="${INK}"/>
    </g></g></g>
    <g class="alt m-happy"><path d="M${l - 5} ${y + 2} Q${l} ${y - 5} ${l + 5} ${y + 2} M${r - 5} ${y + 2} Q${r} ${y - 5} ${r + 5} ${y + 2}" fill="none" stroke="${INK}" stroke-width="3.2" stroke-linecap="round"/></g>
    <circle cx="${l - 10}" cy="${y + 12}" r="5" fill="${blush}" opacity=".24"/><circle cx="${r + 10}" cy="${y + 12}" r="5" fill="${blush}" opacity=".24"/>
    <path class="m-mouth" d="M${cx - 5} ${mouth} Q${cx} ${mouth + 4} ${cx + 5} ${mouth}" fill="none" stroke="${INK}" stroke-width="2.6" stroke-linecap="round"/>
    <g class="alt m-wow-mouth"><ellipse cx="${cx}" cy="${mouth + 1}" rx="3.2" ry="4" fill="${INK}"/></g>`;
}

const extras = {
  think: `<g class="alt m-think bubbles" fill="currentColor" opacity=".55"><circle cx="102" cy="38" r="3"/><circle cx="110" cy="27" r="4"/><circle cx="116" cy="14" r="5"/></g>`,
  wow: `<g class="alt m-wow"><path class="spark" d="M106 24 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5z" fill="#FFC21A"/><path class="spark" d="M12 30 l1.8 4.2 4.2 1.8 -4.2 1.8 -1.8 4.2 -1.8 -4.2 -4.2 -1.8 4.2 -1.8z" fill="#FFC21A" style="animation-delay:.3s"/></g>`,
  search: `<g class="alt m-search"><circle cx="102" cy="96" r="9" fill="rgba(255,255,255,.3)" stroke="${gloss}" stroke-width="4"/><circle cx="102" cy="96" r="11.5" fill="none" stroke="#fff" stroke-opacity=".3"/><path d="M108.5 102.5 L115 109" stroke="${gloss}" stroke-width="5.5" stroke-linecap="round"/></g>`,
};

const BODIES: Record<CastName, (x: typeof extras) => string> = {
  /* Tok — orange squircle wearing headphones */
  tok: (x) => `
    ${fur(`<path d="M60 24 C93 24 102 32 102 66 C102 100 93 108 60 108 C27 108 18 100 18 66 C18 32 27 24 60 24 Z" fill="url(#g-orange)"/>`)}
    <path d="M21 62 C18 6 102 6 99 62" fill="none" stroke="${gloss}" stroke-width="6" stroke-linecap="round"/>
    <rect x="9" y="50" width="16" height="28" rx="8" fill="${gloss}"/>${hi(14, 56, 2.5, 4)}
    <rect x="95" y="50" width="16" height="28" rx="8" fill="${gloss}"/>${hi(100, 56, 2.5, 4)}
    ${face({ l: 48, r: 72, y: 66, mouth: 79 })}
    ${x.think}${x.wow}${x.search}`,

  /* Pix — mint pill with a miner's headlamp */
  pix: (x) => `
    <path class="alt m-search" d="M66 30 L116 6 L118 24 Z" fill="#FFF3A6" opacity=".45"/>
    ${fur(`<rect x="30" y="14" width="60" height="94" rx="30" fill="url(#g-mint)"/>`)}
    <rect x="29" y="33" width="62" height="9" rx="4.5" fill="${gloss}"/>
    <circle cx="60" cy="37" r="10" fill="${gloss}"/><circle cx="60" cy="37" r="5.5" fill="#FFF3A6"/><circle cx="58" cy="35" r="1.8" fill="#fff"/>
    ${face({ l: 50, r: 70, y: 63, mouth: 76, size: 0.95 })}
    ${x.think}${x.wow}`,

  /* Bolt — cobalt hex nut with welding goggles pushed up */
  bolt: (x) => `
    ${fur(`<polygon points="98,66 79,33 41,33 22,66 41,99 79,99" fill="url(#g-cobalt)" stroke="url(#g-cobalt)" stroke-width="14" stroke-linejoin="round"/>`)}
    <rect x="28" y="36" width="64" height="7" rx="3.5" fill="${gloss}"/>
    <circle cx="47" cy="39" r="10.5" fill="${gloss}"/><circle cx="73" cy="39" r="10.5" fill="${gloss}"/>
    <circle cx="47" cy="39" r="6.2" fill="#A9CBFF" opacity=".85"/><circle cx="73" cy="39" r="6.2" fill="#A9CBFF" opacity=".85"/>
    ${hi(44.5, 36.5, 2.2, 1.6)}${hi(70.5, 36.5, 2.2, 1.6)}
    ${face({ l: 49, r: 71, y: 70, mouth: 83 })}
    ${x.think}${x.wow}${x.search}`,

  /* Dot — lavender sphere in a tilted top hat */
  dot: (x) => `
    ${fur(`<circle cx="60" cy="72" r="36" fill="url(#g-lavender)"/>`)}
    <g transform="rotate(-10 60 40)">
      <path d="M45 39 L47.5 12 Q60 9 72.5 12 L75 39 Z" fill="${gloss}"/>
      <rect x="46" y="30" width="28" height="5" fill="#3A3A3A"/>
      <ellipse cx="60" cy="40" rx="25" ry="5.5" fill="${gloss}"/>${hi(53, 18, 2.5, 5)}
    </g>
    ${face({ l: 49, r: 71, y: 72, mouth: 85 })}
    ${x.think}${x.wow}${x.search}`,

  /* Bean — bubblegum egg in a newsboy cap */
  bean: (x) => `
    ${fur(`<path d="M60 20 C84 20 100 50 100 74 C100 96 83 108 60 108 C37 108 20 96 20 74 C20 50 36 20 60 20 Z" fill="url(#g-pink)"/>`)}
    <path d="M30 47 C29 24 52 13 70 17 C87 21 93 34 90 45 C72 40 48 40 30 47 Z" fill="${gloss}"/>
    <path d="M84 42 C96 39 109 43 107 50 C98 52 90 50 81 47 Z" fill="${gloss}"/>
    <circle cx="61" cy="17" r="3.2" fill="#2E2E2E"/>${hi(46, 28, 5, 2.4)}
    ${face({ l: 48, r: 70, y: 70, mouth: 83 })}
    ${x.think}${x.wow}${x.search}`,

  /* Nova — sunshine star with a tiny crown */
  nova: (x) => `
    ${fur(`<polygon points="60,26 72.9,48.2 99.9,53 80.9,72.8 84.7,100 60,88 35.3,100 39.1,72.8 20.1,53 47.1,48.2" fill="url(#g-yellow)" stroke="url(#g-yellow)" stroke-width="13" stroke-linejoin="round"/>`)}
    <path d="M47 22 L44 5 L53.5 12 L60 1 L66.5 12 L76 5 L73 22 Z" fill="${gloss}" stroke="${gloss}" stroke-width="2" stroke-linejoin="round"/>
    <rect x="46" y="18" width="28" height="6" rx="2" fill="${gloss}"/>${hi(52, 12, 1.8, 3)}
    ${face({ l: 52, r: 68, y: 64, mouth: 76, size: 0.9, blush: '#FF7A1A' })}
    ${x.think}${x.wow}${x.search}`,

  /* Ping — lime speech bubble carrying a letter */
  ping: (x) => `
    ${fur(`<path d="M30 26 H90 C100 26 106 32 106 42 V78 C106 88 100 94 90 94 H58 L40 109 L43 94 H30 C20 94 14 88 14 78 V42 C14 32 20 26 30 26 Z" fill="url(#g-lime)"/>`)}
    <g transform="rotate(14 96 26)">
      <rect x="82" y="15" width="29" height="21" rx="3" fill="${gloss}"/>
      <path d="M83.5 17 L96.5 27.5 L109.5 17" fill="none" stroke="#7A7A7A" stroke-width="1.8" stroke-linejoin="round"/>
    </g>
    ${face({ l: 47, r: 71, y: 58, mouth: 71 })}
    ${x.think}${x.wow}${x.search}`,
};

const shadow = '<ellipse cx="60" cy="113" rx="34" ry="5.5" fill="url(#g-shadow)"/>';

export function castSVG(name: CastName): string {
  return `<svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">${shadow}<g class="char">${BODIES[name](extras)}</g></svg>`;
}
