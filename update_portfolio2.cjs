const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(appPath, 'utf-8');

// Replacements

// 1. Header
content = content.replace(
  '[ DEV // CSE UNDERGRAD ]',
  '[ VIDEO EDITOR // VISUAL STORYTELLER ]'
);
content = content.replace(
  'DEV // 2024 - 2025 PORTFOLIO',
  'PORTFOLIO // 2024 - 2025'
);
content = content.replace(
  'TERMINAL',
  'WORKSPACE'
);
content = content.replace(
  '<span className="material-symbols-outlined text-[18px]">terminal</span>',
  '<span className="material-symbols-outlined text-[18px]">movie_edit</span>'
);

// 2. Hero Section
content = content.replace(
  />\s*2029\s*</g,
  '>2024<'
);
content = content.replace(
  '[ DEV // ARCHIVE ]',
  '[ VIDEO // ARCHIVE ]'
);
content = content.replace(
  'CSE ENGINEER',
  'VIDEO EDITOR'
);
content = content.replace(
  'COMPUTER SCIENCE STUDENT',
  'VIDEO EDITOR'
);
content = content.replace(
  />\s*DEVELOPER\s*</,
  '>MOTION GRAPHICS DESIGNER<'
);
content = content.replace(
  'CREATIVE TECHNOLOGIST',
  'VISUAL STORYTELLER'
);
content = content.replace(
  '[ CSE UNDERGRAD ]',
  '[ VIDEO EDITOR ]'
);
content = content.replace(
  '[ CREATIVE TECHNOLOGIST ]',
  '[ MOTION DESIGNER ]'
);

// 3. About Section / Camera
content = content.replace(
  'SCROLL DOWN TO INSPECT DEV DOSSIER',
  'SCROLL DOWN TO INSPECT DOSSIER'
);
content = content.replace(
  'REC [DEV-TERM.01]',
  'REC [EDIT-TERM.01]'
);
content = content.replace(
  'NAVEEN VISHNU // DEV-TERM.01',
  'NAVEEN VISHNU // EDIT-TERM.01'
);
content = content.replace(
  'CSE // TAMIL NADU',
  'EDITOR // INDIA'
);
content = content.replace(
  'MEM: 512GB ARCHIVE',
  'MEM: 1TB ARCHIVE'
);

// 4. About Me Text
const aboutOld = `<p className="font-body-lg text-body-lg text-inverse-on-surface font-normal leading-relaxed mt-space-sm">
              Hi! I'm <strong className="font-bold underline decoration-2">Naveen Vishnu</strong>. I’m a Computer Science Engineering student from Tamil Nadu, India, exploring the intersection of software, AI, and design.<br/><br/>I enjoy turning ideas into simple, intuitive digital experiences while continuously learning new technologies and improving my craft.
            </p>`;
const aboutNew = `<p className="font-body-lg text-body-lg text-inverse-on-surface font-normal leading-relaxed mt-space-sm">
              I'm <strong className="font-bold underline decoration-2">Naveen Vishnu</strong>, a video editor and visual storyteller from [City], India. I'm [studying / a graduate in] [course] at [college] and have worked on [type of projects] for [clients/creators/brands].<br/><br/>I enjoy finding the rhythm of a story, whether it's a fast reel, a cinematic short or a music video. My style is [clean / dynamic / cinematic], and I care about pacing, sound design and color as much as the cuts. I'm open to freelance work and collaborations.
            </p>`;
content = content.replace(aboutOld, aboutNew);

// 5. Contact Section
const linkedInBtn = `<MagneticButton as="a" className="group flex items-center justify-between p-space-sm border-2 border-inverse-on-surface bg-inverse-surface/90 hover:bg-inverse-on-surface hover:text-inverse-surface transition-colors" href="https://linkedin.com/in/naveen-vishnu2006" rel="noopener noreferrer" target="_blank">
<div className="flex items-center gap-space-md">
<span className="font-bold font-mono text-[16px] px-1 border border-current">in</span>
<span className="font-label-lg text-label-lg tracking-wider font-bold">NAVEEN VISHNU</span>
</div>
<span className="font-label-sm text-label-sm uppercase tracking-widest px-2 py-0.5 border border-current">
                CONNECT [LINKEDIN] ↗
              </span>
</MagneticButton>`;
const instagramBtn = `\n<MagneticButton as="a" className="group flex items-center justify-between p-space-sm border-2 border-inverse-on-surface bg-inverse-surface/90 hover:bg-inverse-on-surface hover:text-inverse-surface transition-colors mt-space-xs" href="https://instagram.com/[@handle]" rel="noopener noreferrer" target="_blank">
<div className="flex items-center gap-space-md">
<span className="font-bold font-mono text-[16px] px-1 border border-current">ig</span>
<span className="font-label-lg text-label-lg tracking-wider font-bold">[@handle]</span>
</div>
<span className="font-label-sm text-label-sm uppercase tracking-widest px-2 py-0.5 border border-current">
                CONNECT [INSTAGRAM] ↗
              </span>
</MagneticButton>`;
content = content.replace(linkedInBtn, linkedInBtn + instagramBtn);

// 6. Skills & Stack
const educationOld = `<div className="lg:col-span-4 p-space-lg bg-surface-container-lowest/80 border-2 border-surface-container-highest flex flex-col justify-between shadow-[6px_6px_0px_0px_#201f1f]">
<div>

<div className="flex flex-wrap items-start justify-between gap-2 pb-space-md border-b border-surface-container-highest mb-space-lg">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[28px] text-inverse-surface">school</span>
<h3 className="font-display-hero text-headline-sm font-black uppercase tracking-tight">EDUCATION</h3>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono whitespace-nowrap pt-1">[ 01 / ACAD ]</span>
</div>

<div className="flex flex-col gap-space-lg">

<div className="flex flex-col gap-1">
<div className="flex justify-between items-baseline">
<span className="font-headline-sm text-headline-sm font-bold text-inverse-surface leading-tight">Computer Science &amp; Engineering</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 bg-surface-container text-on-surface">B.E. / B.TECH</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Engineering Institute · Tamil Nadu, India</p>
<div className="w-full bg-surface-container h-1 mt-1">
<div className="bg-inverse-surface/90 h-1 w-full"></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Focus on Algorithms, Systems &amp; AI</span>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between items-baseline">
<span className="font-headline-sm text-headline-sm font-bold text-inverse-surface leading-tight">Higher Secondary</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 bg-surface-container text-on-surface">GRAD</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Tamil Nadu State Board</p>
<div className="w-full bg-surface-container h-1 mt-1">
<div className="bg-inverse-surface/90 h-1 w-full"></div>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant mt-1">Physics, Chemistry, Mathematics &amp; CS</span>
</div>
</div>
</div>
<div className="mt-space-xl pt-space-md border-t border-surface-container-highest flex justify-between items-center font-label-sm text-label-sm text-on-surface-variant">
<span>ACADEMIC STATUS</span>
<span className="text-inverse-surface font-bold">CURRENTLY ENROLLED [OK]</span>
</div>
</div>`;

const expertiseNew = `<div className="lg:col-span-4 p-space-lg bg-surface-container-lowest/80 border-2 border-surface-container-highest flex flex-col justify-between shadow-[6px_6px_0px_0px_#201f1f]">
<div>

<div className="flex flex-wrap items-start justify-between gap-2 pb-space-md border-b border-surface-container-highest mb-space-lg">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[28px] text-inverse-surface">movie_edit</span>
<h3 className="font-display-hero text-headline-sm font-black uppercase tracking-tight">EXPERTISE</h3>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono whitespace-nowrap pt-1">[ 01 / SKILLS ]</span>
</div>

<div className="flex flex-col gap-space-lg">

<div className="flex flex-col gap-1">
<div className="flex justify-between items-baseline">
<span className="font-headline-sm text-headline-sm font-bold text-inverse-surface leading-tight">Video Editing &amp; Post-Production</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Finding the rhythm of a story through cuts and pacing.</p>
<div className="w-full bg-surface-container h-1 mt-1">
<div className="bg-inverse-surface/90 h-1 w-full"></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between items-baseline">
<span className="font-headline-sm text-headline-sm font-bold text-inverse-surface leading-tight">Sound Design &amp; Audio Syncing</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Elevating visuals with immersive soundscapes.</p>
<div className="w-full bg-surface-container h-1 mt-1">
<div className="bg-inverse-surface/90 h-1 w-full"></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between items-baseline">
<span className="font-headline-sm text-headline-sm font-bold text-inverse-surface leading-tight">Motion Graphics &amp; Animation</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">Dynamic titles and engaging visual effects.</p>
<div className="w-full bg-surface-container h-1 mt-1">
<div className="bg-inverse-surface/90 h-1 w-full"></div>
</div>
</div>

</div>
</div>
<div className="mt-space-xl pt-space-md border-t border-surface-container-highest flex justify-between items-center font-label-sm text-label-sm text-on-surface-variant">
<span>STATUS</span>
<span className="text-inverse-surface font-bold">READY TO COLLABORATE [OK]</span>
</div>
</div>`;
content = content.replace(educationOld, expertiseNew);

const focusOld = `<div className="lg:col-span-3 p-space-lg bg-surface-container-lowest/80 border-2 border-surface-container-highest flex flex-col justify-between shadow-[6px_6px_0px_0px_#201f1f]">
<div>

<div className="flex flex-wrap items-start justify-between gap-2 pb-space-md border-b border-surface-container-highest mb-space-lg">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[28px] text-inverse-surface">hub</span>
<h3 className="font-display-hero text-headline-sm font-black uppercase tracking-tight">FOCUS AREAS</h3>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">[ 02 / DOMAINS ]</span>
</div>
<div className="flex flex-col gap-space-md">

<div className="flex flex-col gap-1 border-b border-surface-container-high pb-space-xs">
<div className="flex justify-between items-baseline">
<span className="font-headline-sm text-[17px] font-bold">Software Development</span>
<span className="font-label-sm text-[10px] tracking-widest uppercase font-bold text-inverse-surface">[HIGH PRIORITY]</span>
</div>
<div className="grid grid-cols-5 gap-1.5 w-full mt-1">
<div className="h-2 bg-inverse-surface/90"></div>
<div className="h-2 bg-inverse-surface/90"></div>
<div className="h-2 bg-inverse-surface/90"></div>
<div className="h-2 bg-inverse-surface/90"></div>
<div className="h-2 bg-inverse-surface/90"></div>
</div>
</div>

<div className="flex flex-col gap-1 border-b border-surface-container-high pb-space-xs">
<div className="flex justify-between items-baseline">
<span className="font-headline-sm text-[17px] font-bold">Artificial Intelligence &amp; ML</span>
<span className="font-label-sm text-[10px] tracking-widest uppercase font-bold text-inverse-surface">[ACTIVE]</span>
</div>
<div className="grid grid-cols-5 gap-1.5 w-full mt-1">
<div className="h-2 bg-inverse-surface/90"></div>
<div className="h-2 bg-inverse-surface/90"></div>
<div className="h-2 bg-inverse-surface/90"></div>
<div className="h-2 bg-inverse-surface/90"></div>
<div className="h-2 bg-surface-container-highest"></div>
</div>
</div>

<div className="flex flex-col gap-1 border-b border-surface-container-high pb-space-xs">
<div className="flex justify-between items-baseline">
<span className="font-headline-sm text-[17px] font-bold">Full-Stack Development</span>
<span className="font-label-sm text-[10px] tracking-widest uppercase font-bold text-inverse-surface">[PRODUCTION]</span>
</div>
<div className="grid grid-cols-5 gap-1.5 w-full mt-1">
<div className="h-2 bg-inverse-surface/90"></div>
<div className="h-2 bg-inverse-surface/90"></div>
<div className="h-2 bg-inverse-surface/90"></div>
<div className="h-2 bg-inverse-surface/90"></div>
<div className="h-2 bg-surface-container-highest"></div>
</div>
</div>

<div className="flex flex-col gap-1 border-b border-surface-container-high pb-space-xs">
<div className="flex justify-between items-baseline">
<span className="font-headline-sm text-[17px] font-bold">Data &amp; Analytics</span>
<span className="font-label-sm text-[10px] tracking-widest uppercase font-bold text-inverse-surface">[CORE]</span>
</div>
<div className="grid grid-cols-5 gap-1.5 w-full mt-1">
<div className="h-2 bg-inverse-surface/90"></div>
<div className="h-2 bg-inverse-surface/90"></div>
<div className="h-2 bg-inverse-surface/90"></div>
<div className="h-2 bg-surface-container-highest"></div>
<div className="h-2 bg-surface-container-highest"></div>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between items-baseline">
<span className="font-headline-sm text-[17px] font-bold">Creative Tech &amp; UI/UX</span>
<span className="font-label-sm text-[10px] tracking-widest uppercase font-bold text-inverse-surface">[PASSION]</span>
</div>
<div className="grid grid-cols-5 gap-1.5 w-full mt-1">
<div className="h-2 bg-inverse-surface/90"></div>
<div className="h-2 bg-inverse-surface/90"></div>
<div className="h-2 bg-inverse-surface/90"></div>
<div className="h-2 bg-inverse-surface/90"></div>
<div className="h-2 bg-inverse-surface/90"></div>
</div>
</div>
</div>
</div>

<div className="mt-space-lg p-space-sm bg-surface-container border border-surface-container-highest flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">INTERESTS &amp; PASSIONS</span>
<span className="material-symbols-outlined text-[18px]">explore</span>
</div>
</div>`;

const domainsNew = `<div className="lg:col-span-3 p-space-lg bg-surface-container-lowest/80 border-2 border-surface-container-highest flex flex-col justify-between shadow-[6px_6px_0px_0px_#201f1f]">
<div>

<div className="flex flex-wrap items-start justify-between gap-2 pb-space-md border-b border-surface-container-highest mb-space-lg">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[28px] text-inverse-surface">category</span>
<h3 className="font-display-hero text-headline-sm font-black uppercase tracking-tight">CONTENT</h3>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant font-mono">[ 02 / DOMAINS ]</span>
</div>
<div className="flex flex-col gap-space-md">

<div className="flex flex-col gap-1 border-b border-surface-container-high pb-space-xs">
<div className="flex justify-between items-baseline">
<span className="font-headline-sm text-[17px] font-bold">Short-form (Reels/Shorts)</span>
<span className="font-label-sm text-[10px] tracking-widest uppercase font-bold text-inverse-surface">[HIGH PRIORITY]</span>
</div>
</div>

<div className="flex flex-col gap-1 border-b border-surface-container-high pb-space-xs">
<div className="flex justify-between items-baseline">
<span className="font-headline-sm text-[17px] font-bold">Cinematic Shorts</span>
<span className="font-label-sm text-[10px] tracking-widest uppercase font-bold text-inverse-surface">[ACTIVE]</span>
</div>
</div>

<div className="flex flex-col gap-1 border-b border-surface-container-high pb-space-xs">
<div className="flex justify-between items-baseline">
<span className="font-headline-sm text-[17px] font-bold">Music Videos</span>
<span className="font-label-sm text-[10px] tracking-widest uppercase font-bold text-inverse-surface">[PRODUCTION]</span>
</div>
</div>

<div className="flex flex-col gap-1 border-b border-surface-container-high pb-space-xs">
<div className="flex justify-between items-baseline">
<span className="font-headline-sm text-[17px] font-bold">Storyboarding</span>
<span className="font-label-sm text-[10px] tracking-widest uppercase font-bold text-inverse-surface">[CORE]</span>
</div>
</div>

<div className="flex flex-col gap-1">
<div className="flex justify-between items-baseline">
<span className="font-headline-sm text-[17px] font-bold">Languages: English, Tamil</span>
<span className="font-label-sm text-[10px] tracking-widest uppercase font-bold text-inverse-surface">[FLUENT]</span>
</div>
</div>
</div>
</div>

<div className="mt-space-lg p-space-sm bg-surface-container border border-surface-container-highest flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">INTERESTS &amp; PASSIONS</span>
<span className="material-symbols-outlined text-[18px]">explore</span>
</div>
</div>`;
content = content.replace(focusOld, domainsNew);

// Spotlights (Projector Zone)
content = content.replace(
  '<span className="font-label-md text-label-md font-bold uppercase tracking-wider">C++</span>',
  '<span className="font-label-md text-label-md font-bold uppercase tracking-wider">VIDEO EDITING</span>'
);
content = content.replace(
  '<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary-container">[SYSTEMS &amp; DSA]</span>',
  '<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary-container">[PREMIERE / DAVINCI]</span>'
);

content = content.replace(
  '<span className="font-label-md text-label-md font-bold uppercase tracking-wider">PYTHON</span>',
  '<span className="font-label-md text-label-md font-bold uppercase tracking-wider">COLOR GRADING</span>'
);
content = content.replace(
  '<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary-container">[AI / DATA / BACKEND]</span>',
  '<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary-container">[DAVINCI RESOLVE]</span>'
);

content = content.replace(
  '<span className="font-label-md text-label-md font-bold uppercase tracking-wider">JAVA</span>',
  '<span className="font-label-md text-label-md font-bold uppercase tracking-wider">SOUND DESIGN</span>'
);
content = content.replace(
  '<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary-container">[ENTERPRISE &amp; OOP]</span>',
  '<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary-container">[AUDITION / SFX]</span>'
);

content = content.replace(
  '<span className="font-label-md text-label-md font-bold uppercase tracking-wider">ANDROID</span>',
  '<span className="font-label-md text-label-md font-bold uppercase tracking-wider">AUDIO SYNC</span>'
);
content = content.replace(
  '<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary-container">[MOBILE APPS]</span>',
  '<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary-container">[PERFECT TIMING]</span>'
);

content = content.replace(
  '<span className="font-label-md text-label-md font-bold uppercase tracking-wider">AI &amp; ML</span>',
  '<span className="font-label-md text-label-md font-bold uppercase tracking-wider">MOTION GRAPHICS</span>'
);
content = content.replace(
  '<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary-container">[MODELS &amp; EXPLORATION]</span>',
  '<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary-container">[AFTER EFFECTS]</span>'
);

content = content.replace(
  '<span className="font-label-md text-label-md font-bold uppercase tracking-wider">UI/UX &amp; DESIGN</span>',
  '<span className="font-label-md text-label-md font-bold uppercase tracking-wider">TITLES &amp; TEXT</span>'
);
content = content.replace(
  '<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary-container">[INTERACTION &amp; EXP]</span>',
  '<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary-container">[TYPOGRAPHY / ANIM]</span>'
);

content = content.replace(
  '<span className="font-label-md text-label-md font-bold uppercase tracking-wider">FULL-STACK WEB</span>',
  '<span className="font-label-md text-label-md font-bold uppercase tracking-wider">STORYBOARDING</span>'
);
content = content.replace(
  '<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary-container">[REACT/TS/NODE]</span>',
  '<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary-container">[VISUAL PLANNING]</span>'
);

content = content.replace(
  '<span className="font-label-md text-label-md font-bold uppercase tracking-wider">SYSTEM ARCH</span>',
  '<span className="font-label-md text-label-md font-bold uppercase tracking-wider">ANIMATION</span>'
);
content = content.replace(
  '<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary-container">[OPTIMIZATION]</span>',
  '<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary-container">[KEYFRAMES &amp; EASE]</span>'
);

// 7. Software Icons (SpotlightGrid)
content = content.replace(
  'C++',
  'Premiere'
);
content = content.replace(
  'SYSTEMS &amp; DSA',
  'VIDEO EDITING'
);

content = content.replace(
  />\s*Py\s*</,
  '>AE<'
);
content = content.replace(
  'PYTHON / ML',
  'MOTION GRAPHICS'
);
content = content.replace(
  '<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary-container">terminal</span>',
  '<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary-container">animation</span>'
);

content = content.replace(
  />\s*Java\s*</,
  '>Resolve<'
);
content = content.replace(
  'CORE &amp; ANDROID',
  'COLOR &amp; EDIT'
);
content = content.replace(
  '<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary-container">coffee</span>',
  '<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary-container">palette</span>'
);

content = content.replace(
  />\s*And\s*</,
  '>Ps<'
);
content = content.replace(
  'STUDIO / APPS',
  'PHOTOSHOP'
);
content = content.replace(
  '<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary-container">android</span>',
  '<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary-container">image</span>'
);

content = content.replace(
  />\s*AI\s*</,
  '>Audition<'
);
content = content.replace(
  'MODELS &amp; LLMS',
  'AUDIO / SFX'
);
content = content.replace(
  '<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary-container">psychology</span>',
  '<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary-container">graphic_eq</span>'
);

content = content.replace(
  />\s*UX\s*</,
  '>CapCut<'
);
content = content.replace(
  'FIGMA &amp; CLEAN UI',
  'SHORT-FORM'
);
content = content.replace(
  '<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary-container">draw</span>',
  '<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary-container">smartphone</span>'
);

fs.writeFileSync(appPath, content, 'utf-8');
console.log('Update complete');
