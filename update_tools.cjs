const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'src', 'App.jsx');
let content = fs.readFileSync(appPath, 'utf-8');

const regex = /<SpotlightGrid className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-space-md w-full max-w-5xl">([\s\S]*?)<\/SpotlightGrid>/;

const newTools = `
<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: 0, ease: [0.22, 1, 0.36, 1] }} className="software-tilt-card group relative h-40 bg-surface-container-low border-2 border-inverse-surface flex flex-col justify-between p-space-sm cursor-pointer shadow-[6px_6px_0px_0px_#353534] transition-colors hover:bg-inverse-surface/90 hover:text-primary-container hover:-translate-y-2">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm uppercase font-mono group-hover:text-primary-container">01</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary-container">image</span>
</div>
<div className="font-display-hero text-headline-lg font-extrabold text-center tracking-tighter my-auto">Ps</div>
<div className="text-center font-label-sm text-[10px] uppercase font-bold tracking-widest">
            PHOTOSHOP
          </div>
</motion.div>

<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="software-tilt-card group relative h-40 bg-surface-container-low border-2 border-inverse-surface flex flex-col justify-between p-space-sm cursor-pointer shadow-[6px_6px_0px_0px_#353534] transition-colors hover:bg-inverse-surface/90 hover:text-primary-container hover:-translate-y-2">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm uppercase font-mono group-hover:text-primary-container">02</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary-container">brush</span>
</div>
<div className="font-display-hero text-headline-lg font-extrabold text-center tracking-tighter my-auto">Ai</div>
<div className="text-center font-label-sm text-[10px] uppercase font-bold tracking-widest">
            ILLUSTRATOR
          </div>
</motion.div>

<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="software-tilt-card group relative h-40 bg-surface-container-low border-2 border-inverse-surface flex flex-col justify-between p-space-sm cursor-pointer shadow-[6px_6px_0px_0px_#353534] transition-colors hover:bg-inverse-surface/90 hover:text-primary-container hover:-translate-y-2">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm uppercase font-mono group-hover:text-primary-container">03</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary-container">movie_edit</span>
</div>
<div className="font-display-hero text-headline-lg font-extrabold text-center tracking-tighter my-auto">Pr</div>
<div className="text-center font-label-sm text-[10px] uppercase font-bold tracking-widest">
            PREMIERE PRO
          </div>
</motion.div>

<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="software-tilt-card group relative h-40 bg-surface-container-low border-2 border-inverse-surface flex flex-col justify-between p-space-sm cursor-pointer shadow-[6px_6px_0px_0px_#353534] transition-colors hover:bg-inverse-surface/90 hover:text-primary-container hover:-translate-y-2">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm uppercase font-mono group-hover:text-primary-container">04</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary-container">animation</span>
</div>
<div className="font-display-hero text-headline-lg font-extrabold text-center tracking-tighter my-auto">Ae</div>
<div className="text-center font-label-sm text-[10px] uppercase font-bold tracking-widest">
            AFTER EFFECTS
          </div>
</motion.div>

<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }} className="software-tilt-card group relative h-40 bg-surface-container-low border-2 border-inverse-surface flex flex-col justify-between p-space-sm cursor-pointer shadow-[6px_6px_0px_0px_#353534] transition-colors hover:bg-inverse-surface/90 hover:text-primary-container hover:-translate-y-2">
<div className="flex justify-between items-start">
<span className="font-label-sm text-label-sm uppercase font-mono group-hover:text-primary-container">05</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant group-hover:text-primary-container">draw</span>
</div>
<div className="font-display-hero text-headline-lg font-extrabold text-center tracking-tighter my-auto">Fig</div>
<div className="text-center font-label-sm text-[10px] uppercase font-bold tracking-widest">
            FIGMA
          </div>
</motion.div>
`;

content = content.replace(regex, '<SpotlightGrid className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-space-md w-full max-w-5xl">\n' + newTools + '\n</SpotlightGrid>');

fs.writeFileSync(appPath, content, 'utf-8');
console.log('Update tools complete');
