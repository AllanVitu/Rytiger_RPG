import{g as c,C as rt,P as Tt,s as ni,m as si,a as li,b as di,x as pi}from"./game-engine-BZj1797D.js";import{C as P,Z as _,e as ke,F as Ee,f as pt,c as kt,I as H,h as Q,i as ci,j as gi,R as fi}from"./game-data-DSHx8iI0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();class mi{constructor(){this.routes={},this.currentRoute=null,this.params={},window.addEventListener("hashchange",()=>this.handleRoute())}on(t,e){return this.routes[t]=e,this}navigate(t,e={}){this.params=e,window.location.hash=t}handleRoute(){const t=window.location.hash.slice(1)||"home",e=t.split("?")[0],i=t.split("?")[1];i&&i.split("&").forEach(o=>{const[r,n]=o.split("=");this.params[r]=decodeURIComponent(n)}),this.routes[e]?(this.currentRoute=e,this.routes[e](this.params),this.params={}):this.routes.home&&(this.currentRoute="home",this.routes.home({}))}start(){this.handleRoute()}}const w=new mi;function mt(a){const t={guerrier:"./assets/characters/guerrier.png",mage:"./assets/characters/mage.png",arche:"./assets/characters/arche.png",assassin:"./assets/characters/assassin.png"};return t[a]||t.guerrier}const ze={};function C(a,t=null,e="rare"){return t&&ze[t]?ze[t]:mt(a)}function ge(a=!1){return a?new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAFO0lEQVR42u2aT2wUVRzHP4scNjNvt4TGZWdrm+zSLS2CgpVuRWMjEi8QE+NBEsOFeOmpFzh4MPSmB+OJA/HsYb0YSkqkoVtSU5FiCIUCCmu7CZXddklju/tmXU/PQzvjTFkQYjIL43yTSXZm3mR2vu/7fn8fBAgQIECAAAECBAgQIIAbuiaUF8/8F2zy8F0qusV4qg/UNaGS2/cAKD8SQjgsOHrsxBORomtCDQ4Ne65iTwkpL+bt3339h9T6zDc61kiJRlleXvKUkM0evitk1qQq3l/g6LETnD51kl273yK27SV7gJRVHpSLFOavqeOffcX3IyNUVkoAIV8qBCA3lkVEdPs8brTZv197vc9aLuRv3+HK5XOYNenfJWPN9PnRM5z8/GsA3h54076Z7uzhxViCwaFhLubOup7x9A967Xqds55M7SWZ2oGUVW7dmLSvO8aE/KwQJzGMb+2g//4SIiKIGwZv/PkXI+GtTY2VPCfErMkQQCye5os/Spx9oYKsSmavXwXg25X7RLcYTVPw5mbNRL0uWdyVIWaaiIgAoJJ5j+tAuFxsmkKaRUioVMwrgNbWbciqpF6X1MxVAArz15qijmcBClBGIq2Sqb0KUF7nLs9isuc6mk1IM2WpdE0Qi6ep16Wd66wvl6b9t01NIkL19R/CrK3ZjnBYuNxxMrWXZqnFa6OqDhw8gpRVOtPd3LoxSc/OXvumiAhyi3k+/OhjfriYIG4Y5MayynLVvquH9PUfIm60ceXyOaItUQaHhpkYzzIxnmX60ii5sSxHj51AVk2uXD6HEC1k9h/2tB7iqUKEiNjLYmryAqnObg4cPEJ56XcAUp3dVFYr3JiZ/n9EqlJW+S3/q52nJNra6eruse93dXcTbYmi6S0A/PTjBFJW0TXhTxvyYEMEOjV5wXV+fvQMgE0IwMK9u56WADz3MlbVbHl5ya6GFeZmKMzN2NcX7t21xzo9kG8UomtCvfzKAEJEqNclZi1PqZhH1wSVlRKxeBqAm7NT6JqwFRGLp0mmdqDrOjdnp5QXsYknCnFKfr0kaH+wRYZVG3GeW2pyLiFfLZlfbl91RaHlxTzJ1A7X4ShEh8yaZPrSqD8Ds4V7d2lt3Uap+E/lPbl9D4X5O65xye17uDk75Tq3bIpfchn1/gefkGhr5/Spk873KoADB4+4Bk+MZ11jdE0wODTM+dEzFlGh514hi6USQrTYQZllU4xE2g7KLBiJtEtFZk0iq6ZndsQzG2JV0dfzEqVrgnfefZ/l5SXb7RbmZtiXGcBIpK1wPQQw8t03dpTrGxvi9C6AlaPQ3tEFHV32B8uqpGdnr0sllZUSUlb9oRAr7HYUjtE1gYgILubOIkTENfsbjaz1rG8UYtYkQkScs67WEr0WmwBdX+vkmaYJuLp5CmBfZgBZlf6xIVJWrXgipGvCpZbyYt4O4x3VMsuOAIRyY1l/BWYPykWsfR5mba1CJuWqraBSMe+yGYAzh1GZ/YcbLqXn1aiGCvPX1Mb44xHxUMN705dGrfZnyA+EPNWHWAXnDXbIv9shLPw8PdnwejgsnJ1//8PqxRiJ9EM7hnA0rhw9G3+ToWvC7tI94oNdY/y8CxGzJm2Xu957aQirJmIk0r7fQfSQe32cYbWqar4mxEistS4beZONpDxORb4hZF9mgJ6dvQ8lextV1N7Rxe5Xe/1PyJPmJDVzFVmVvrYh6vinX9LV3eOskzYKuEK6JijMzRA32qzdip55Gi+3HChntezf3u10t16F7QECBAgQIECAAAECBHhu8De9rTuG6WNGeQAAAABJRU5ErkJggg==",import.meta.url).href:"./assets/characters/boss.png"}function fe(){return"./assets/characters/minion.png"}function ui(a){return Promise.all(a.map(t=>new Promise(e=>{const i=new Image;i.src=t,i.onload=e,i.onerror=e})))}function xi(){return[mt("guerrier"),mt("mage"),mt("arche"),mt("assassin"),ge(),fe()]}function vi(){const a=document.getElementById("app"),t=P.filter(e=>e.starter);a.innerHTML=`
    <div style="width:100vw;height:100vh;background:#060610;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden">
      <!-- Void glow -->
      <div style="position:absolute;bottom:0;left:0;right:0;height:40%;background:radial-gradient(ellipse at 50% 100%,rgba(0,119,182,0.14),transparent 70%);pointer-events:none"></div>
      
      <div style="text-align:center;margin-bottom:48px;z-index:1">
        <h1 style="font-family:var(--font-title);font-size:48px;font-weight:900;letter-spacing:12px;margin-bottom:12px" class="glow-text">
          RYTIGER
        </h1>
        <div style="width:120px;height:1px;background:linear-gradient(90deg,transparent,var(--legendaire),transparent);margin:16px auto"></div>
        <p style="color:var(--text-secondary);font-size:14px;letter-spacing:4px;text-transform:uppercase;font-family:var(--font-ui)">
          Choisis ton premier compagnon
        </p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(${t.length},260px);gap:32px;z-index:1">
        ${t.map(e=>`
          <div class="glass" id="starter-${e.id}" style="
            padding:32px 24px;border-radius:12px;position:relative;overflow:hidden;cursor:pointer;
            border:1px solid rgba(200,155,60,0.15);text-align:center;
            transition:transform 0.2s ease, box-shadow 0.2s ease;
          ">
            <div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--legendaire),transparent)"></div>
            <img src="${C(e.type)}" class="sprite sprite--xl sprite--animate" alt="${e.name}" style="margin:0 auto 16px;display:block">
            <div style="font-family:var(--font-title);font-size:16px;color:var(--legendaire);font-weight:700;letter-spacing:2px;margin-bottom:8px">${e.name}</div>
            <span class="type-badge type-badge--${e.type}" style="margin-bottom:8px">${e.type.toUpperCase()}</span>
            <p style="font-size:12px;color:var(--text-secondary);margin-top:12px;line-height:1.6">${e.desc}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `,t.forEach(e=>{document.getElementById(`starter-${e.id}`).addEventListener("click",async()=>{await c.chooseStarter(e.id),c.addArchireve(500),je()})})}function je(){const a=c.state,t=document.getElementById("app");if(a.profile||(c.state.profile={pseudo:"Forgeron",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=local_hero",region:"Offline",level:1,xp:0},c.save()),!a.starterChosen){vi();return}const e=c.getTeamInstances(),i=a.totalBattles>0?Math.round(a.totalWins/a.totalBattles*100):0,o=(a.ownedCharacters||[]).some(p=>p.isNew),r=(a.inventory||[]).some(p=>p.isNew),n=c.canFuseAny(),l=["enchantement","osiris","supplice","maragorh","imotep"],s={enchantement:"Enchantement",osiris:"Osiris",supplice:"Supplice",maragorh:"Maragorh",imotep:"Imotep"};let d=l[0],g=0;for(const p of l){let m=0;for(let u=0;u<20;u++)c.getLevelFlames(p,u)>0&&m++;const f=Math.round(m/20*100);f>g&&(g=f,d=p)}t.innerHTML=`
    <div style="width:100vw;height:100vh;background:#06050a;display:flex;flex-direction:column;overflow:hidden;position:relative">

      <!-- Deep stone vignette -->
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(200,150,60,0.04),transparent 60%);pointer-events:none;z-index:0"></div>

      <!-- Ember particles -->
      <div id="ember-particles" style="position:absolute;inset:0;pointer-events:none;z-index:0;overflow:hidden"></div>

      <!-- VFX: Floating runes -->
      <div id="floating-runes" style="position:absolute;inset:0;pointer-events:none;z-index:0;overflow:hidden"></div>

      <!-- VFX: Chain decorations -->
      <div class="chain-deco" style="top:0;left:80px;height:200px;animation-delay:0s"></div>
      <div class="chain-deco" style="top:0;left:160px;height:140px;animation-delay:1.5s"></div>
      <div class="chain-deco" style="top:0;right:80px;height:180px;animation-delay:0.8s"></div>
      <div class="chain-deco" style="top:0;right:160px;height:120px;animation-delay:2.2s"></div>

      <!-- VFX: Heat distortion at bottom -->
      <div class="heat-layer"></div>

      <!-- Bonfire glow (Dark Souls) -->
      <div style="position:absolute;bottom:0;left:0;right:0;height:280px;background:radial-gradient(ellipse at 50% 100%,rgba(232,93,32,0.10),rgba(200,150,60,0.04) 40%,transparent 70%);pointer-events:none;z-index:0;animation:forgeGlow 6s ease-in-out infinite"></div>
      <!-- Gold floor line -->
      <div style="position:absolute;bottom:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(200,150,60,0.4),rgba(232,93,32,0.3),rgba(200,150,60,0.4),transparent);z-index:1"></div>

      <!-- ═══ TOP BAR ═══ -->
      <div style="
        display:flex;align-items:center;justify-content:space-between;
        padding:0 32px;height:56px;flex-shrink:0;
        background:rgba(8,6,10,0.98);
        border-bottom:2px solid transparent;
        border-image:linear-gradient(90deg,transparent,rgba(200,150,60,0.4),rgba(232,93,32,0.3),rgba(200,150,60,0.4),transparent) 1;
        z-index:10;
        box-shadow:0 2px 30px rgba(0,0,0,0.9),0 0 60px rgba(200,150,60,0.03);
      ">
        <!-- Left: Profile -->
        <div style="display:flex;align-items:center;gap:14px;cursor:pointer" id="btn-profile">
          <div style="
            width:38px;height:38px;border-radius:3px;
            background:linear-gradient(135deg,rgba(200,150,60,0.15),rgba(232,93,32,0.08));
            border:1px solid rgba(200,150,60,0.3);
            display:flex;align-items:center;justify-content:center;
            font-size:20px;overflow:hidden;
            box-shadow:0 0 12px rgba(200,150,60,0.15);
          ">${a.profile.avatarType==="custom"&&a.profile.customImg?`<img src="${a.profile.customImg}" style="width:100%;height:100%;object-fit:cover">`:`<span>${a.profile.avatar||"⚔️"}</span>`}</div>
          <div>
            <div style="font-family:var(--font-title);font-size:12px;font-weight:700;color:var(--text-bright);letter-spacing:2px">${a.profile.pseudo}</div>
            <div style="font-family:var(--font-stat);font-size:9px;color:var(--text-muted);letter-spacing:3px">NIVEAU ${a.profile.level}</div>
          </div>
        </div>

        <!-- Center: Title — Cinzel epic -->
        <div style="position:relative">
          <div style="font-family:var(--font-title-alt);font-size:24px;font-weight:900;letter-spacing:10px;
            background:linear-gradient(135deg,#8B6914,#C8963C,#F0D060,#C8963C,#8B6914);
            -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
            text-shadow:none;filter:drop-shadow(0 0 20px rgba(200,150,60,0.3))">
            RYTIGER
          </div>
          <!-- Gold underline -->
          <div style="position:absolute;bottom:-4px;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(200,150,60,0.6),transparent)"></div>
          <!-- VFX: Title sparkle particles -->
          <div id="title-sparkles" style="position:absolute;inset:-10px;pointer-events:none;overflow:visible"></div>
        </div>

        <!-- Right: Currency —  LoL gold badge -->
        <div style="display:flex;align-items:center;gap:12px">
          <div style="
            display:flex;align-items:center;gap:10px;
            padding:8px 18px;
            background:linear-gradient(180deg,rgba(20,14,4,0.98),rgba(12,8,2,0.99));
            border:1px solid rgba(200,150,60,0.3);
            border-top-color:rgba(240,200,80,0.35);
            border-radius:3px;
            box-shadow:0 0 15px rgba(200,150,60,0.1),inset 0 1px 0 rgba(200,150,60,0.08);
          ">
            <span style="font-family:var(--font-stat);font-size:12px;color:var(--star);font-weight:700;filter:drop-shadow(0 0 4px rgba(232,184,76,0.6))">◈</span>
            <span style="font-family:var(--font-stat);font-size:14px;font-weight:700;color:var(--text-bright);letter-spacing:1px">${a.archireve.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <!-- ═══ MAIN CONTENT ═══ -->
      <div style="flex:1;display:grid;grid-template-columns:290px 1fr 310px;gap:0;overflow:hidden;z-index:2">

        <!-- ═══ LEFT PANEL: Navigation (stone panel) ═══ -->
        <div style="
          background:linear-gradient(180deg,rgba(9,7,11,0.99),rgba(6,5,9,0.99));
          border-right:1px solid rgba(200,150,60,0.10);
          display:flex;flex-direction:column;
          padding:24px 16px;
          overflow-y:auto;
        ">
          <!-- Section: Actions -->
          <div style="font-family:var(--font-title);font-size:9px;letter-spacing:5px;color:rgba(200,150,60,0.35);margin-bottom:14px">── ACTIONS ──</div>
          
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:28px">
            <button class="btn btn--primary btn--full" id="btn-campaign" style="
              padding:15px 20px;font-size:11px;letter-spacing:3px;text-align:left;
              display:flex;align-items:center;gap:14px;
              border-radius:3px;position:relative;overflow:hidden;
            ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;flex-shrink:0;opacity:0.9">
                <circle cx="12" cy="12" r="9"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><circle cx="12" cy="12" r="3"/>
              </svg>
              CAMPAGNE
            </button>

            <button class="btn btn--full" id="btn-dungeon" style="
              padding:15px 20px;font-size:11px;letter-spacing:3px;text-align:left;
              display:flex;align-items:center;gap:14px;
              border-radius:3px;
              background:linear-gradient(180deg,rgba(60,8,8,0.95),rgba(40,5,5,0.98));
              border:1px solid rgba(160,30,30,0.35);
              color:rgba(255,160,160,0.8);
            ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;flex-shrink:0;opacity:0.8">
                <path d="M12 2L8 8H3l4 4-1.5 6L12 15l6.5 3L17 12l4-4h-5L12 2z"/>
              </svg>
              ÉPREUVE DE SAMAËL
            </button>

            <button class="btn btn--full" id="btn-tower" style="
              padding:15px 20px;font-size:11px;letter-spacing:3px;text-align:left;
              display:flex;align-items:center;gap:14px;
              border-radius:3px;
              background:linear-gradient(180deg,rgba(15,5,30,0.95),rgba(5,2,10,0.98));
              border:1px solid rgba(187,134,252,0.35);
              color:rgba(187,134,252,0.8);
            ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;flex-shrink:0;opacity:0.8">
                <path d="M12 2v20M8 5h8M6 10h12M4 15h16M2 20h20"/>
              </svg>
              TOUR DE L'INFINI
            </button>

            <button class="btn btn--star btn--full" id="btn-invocation" style="
              padding:15px 20px;font-size:11px;letter-spacing:3px;text-align:left;
              display:flex;align-items:center;gap:14px;border-radius:3px;
            ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;flex-shrink:0;opacity:0.8">
                <polygon points="12,2 15,9 22,9 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9 9,9"/>
              </svg>
              INVOCATION
            </button>

            <button class="btn btn--full" id="btn-forge" style="
              padding:15px 20px;font-size:11px;letter-spacing:3px;text-align:left;
              display:flex;align-items:center;gap:14px;border-radius:3px;position:relative;
              background:linear-gradient(180deg,rgba(50,25,5,0.97),rgba(30,15,2,0.99));
              border:1px solid rgba(200,100,20,0.35);
              color:rgba(255,180,80,0.85);
            ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;flex-shrink:0;opacity:0.8">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
              </svg>
              FORGE DE FUSION
              ${n?'<div style="position:absolute;top:10px;right:10px;width:8px;height:8px;background:var(--ember);border-radius:50%;box-shadow:0 0 10px var(--ember-glow);animation:pulseRed 2s infinite"></div>':""}
            </button>
          </div>
          <style>@keyframes pulseRed { 0%{transform:scale(1);opacity:1;} 50%{transform:scale(1.4);opacity:0.7;} 100%{transform:scale(1);opacity:1;} }</style>

          <!-- Section: Gestion -->
          <div style="font-family:var(--font-title);font-size:9px;letter-spacing:5px;color:rgba(200,150,60,0.35);margin-bottom:14px">── GESTION ──</div>

          <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:28px">
            <button class="btn btn--ghost btn--full" id="btn-team" style="
              padding:11px 18px;font-size:10px;letter-spacing:3px;text-align:left;
              display:flex;align-items:center;gap:12px;border-radius:2px;position:relative;
            ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:16px;height:16px;flex-shrink:0;opacity:0.6">
                <circle cx="9" cy="7" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2 20c0-4 3-6 7-6s7 2 7 6"/><path d="M16 14c2.5 0 5 1.5 5 4.5"/>
              </svg>
              ÉQUIPE
              ${o?'<div style="position:absolute;right:10px;background:var(--peucommun);color:#000;font-size:8px;font-weight:900;padding:2px 6px;border-radius:2px">NEW!</div>':""}
            </button>

            <button class="btn btn--ghost btn--full" id="btn-inventory" style="
              padding:11px 18px;font-size:10px;letter-spacing:3px;text-align:left;
              display:flex;align-items:center;gap:12px;border-radius:2px;position:relative;
            ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:16px;height:16px;flex-shrink:0;opacity:0.6">
                <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
              </svg>
              INVENTAIRE
              ${r?'<div style="position:absolute;right:10px;background:var(--peucommun);color:#000;font-size:8px;font-weight:900;padding:2px 6px;border-radius:2px">NEW!</div>':""}
            </button>

            <button class="btn btn--ghost btn--full" id="btn-dashboard" style="
              padding:11px 18px;font-size:10px;letter-spacing:3px;text-align:left;
              display:flex;align-items:center;gap:12px;border-radius:2px;
            ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:16px;height:16px;flex-shrink:0;opacity:0.6">
                <path d="M3 3h18v18H3z"/><path d="M3 9h18M9 3v18"/>
              </svg>
              TABLEAU DE BORD
            </button>

            <button class="btn btn--ghost btn--full" id="btn-achievements" style="
              padding:11px 18px;font-size:10px;letter-spacing:3px;text-align:left;
              display:flex;align-items:center;gap:12px;border-radius:2px;position:relative;
              border-color:rgba(163,53,238,0.2);
            ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:16px;height:16px;flex-shrink:0;opacity:0.6">
                <circle cx="12" cy="8" r="6"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/>
              </svg>
              SUCCÈS
              ${(()=>{const p=c.state.achievements||{},m=c.ACHIEVEMENTS?.length||12;return`<div style="position:absolute;right:10px;font-family:var(--font-stat);font-size:8px;color:var(--epique);background:rgba(163,53,238,0.1);padding:2px 6px;border-radius:2px;border:1px solid rgba(163,53,238,0.2)">${Object.keys(p).length}/${m}</div>`})()}
            </button>
          </div>

          <!-- Zone Progress -->
          <div style="font-family:var(--font-title);font-size:9px;letter-spacing:5px;color:rgba(200,150,60,0.35);margin-bottom:14px">── PROGRESSION ──</div>
          <div style="display:flex;flex-direction:column;gap:10px">
            ${l.map(p=>{let m=0;for(let v=0;v<20;v++)c.getLevelFlames(p,v)>0&&m++;const f=Math.round(m/20*100),u=f===100;return`
                <div>
                  <div style="display:flex;justify-content:space-between;margin-bottom:4px">
                    <span style="font-family:var(--font-title);font-size:9px;font-weight:700;color:${u?"var(--accent-light)":"var(--text-secondary)"};letter-spacing:2px">${(s[p]||p).toUpperCase()}</span>
                    <span style="font-family:var(--font-stat);font-size:9px;color:var(--text-muted)">${m}/20</span>
                  </div>
                  <div style="height:3px;background:rgba(0,0,0,0.7);border-radius:1px;overflow:hidden;border:1px solid rgba(200,150,60,0.06)">
                    <div style="height:100%;width:${f}%;background:${u?"var(--star-gradient)":"linear-gradient(90deg,#8B6914,#C8963C)"};border-radius:1px;transition:width 0.8s ease;box-shadow:${u?"0 0 8px rgba(200,150,60,0.5)":"none"}"></div>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>

        <!-- ═══ CENTER: Team / Champion Select ═══ -->
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 36px;position:relative;overflow:hidden">

          <!-- Ambient background orbs (gold + ember) -->
          <div style="position:absolute;top:10%;left:20%;width:350px;height:350px;border-radius:50%;background:rgba(200,150,60,0.03);filter:blur(80px);pointer-events:none;animation:forgeGlow 12s ease-in-out infinite"></div>
          <div style="position:absolute;bottom:15%;right:15%;width:280px;height:280px;border-radius:50%;background:rgba(232,93,32,0.025);filter:blur(60px);pointer-events:none;animation:forgeGlow 16s ease-in-out infinite 4s"></div>

          <!-- Gold horizontal rule above title -->
          <div style="width:120px;height:1px;background:linear-gradient(90deg,transparent,rgba(200,150,60,0.5),transparent);margin-bottom:10px;z-index:1"></div>
          <div style="font-family:var(--font-title);font-size:10px;letter-spacing:6px;color:rgba(200,150,60,0.45);margin-bottom:24px;z-index:1">— GARDIENS —</div>

          <!-- Team Grid — WoW Champion Cards -->
          <div style="display:grid;grid-template-columns:repeat(4,175px);gap:16px;z-index:1;margin-bottom:36px">
            ${[0,1,2,3].map(p=>{const m=e[p];if(m){const f=`var(--${m.rarity||"rare"})`;return`
                  <div style="
                    background:linear-gradient(180deg,rgba(14,11,16,0.98),rgba(8,6,10,0.99));
                    border:1px solid rgba(200,150,60,0.12);
                    border-radius:3px;
                    padding:18px 14px;
                    text-align:center;
                    position:relative;
                    transition:transform 0.2s ease,box-shadow 0.2s ease;
                    cursor:default;
                    box-shadow:inset 0 1px 0 rgba(200,150,60,0.04);
                  ">
                    <!-- Rarity top line (WoW style) -->
                    <div style="position:absolute;top:0;left:0;right:0;height:2px;background:${f};opacity:0.7;box-shadow:0 0 12px ${f}"></div>
                    <!-- Corner ornament top-left -->
                    <div style="position:absolute;top:0;left:0;width:8px;height:8px;border-top:1px solid rgba(200,150,60,0.4);border-left:1px solid rgba(200,150,60,0.4)"></div>
                    <!-- Corner ornament top-right -->
                    <div style="position:absolute;top:0;right:0;width:8px;height:8px;border-top:1px solid rgba(200,150,60,0.4);border-right:1px solid rgba(200,150,60,0.4)"></div>
                    
                    <img src="${C((m.type||"").split("/")[0])}" class="sprite sprite--xl sprite--animate" alt="${m.name}" style="margin:0 auto 10px;display:block">
                    
                    <div style="font-family:var(--font-title);font-size:10px;color:${f};font-weight:700;letter-spacing:0.5px;margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:170px" title="${m.name}">${m.name}</div>
                    <div style="font-family:var(--font-stat);font-size:9px;color:var(--text-muted);letter-spacing:2px;margin-bottom:9px">${(m.type||"").toUpperCase()} · NIV.${m.level}</div>
                    
                    <!-- HP Bar —  WoW style thick -->
                    <div style="height:6px;background:rgba(0,0,0,0.7);border-radius:1px;overflow:hidden;border:1px solid rgba(200,150,60,0.06)">
                      <div style="height:100%;width:100%;background:linear-gradient(90deg,#7A0000,#CC2222,#EE3333);box-shadow:0 0 6px rgba(200,30,30,0.5)"></div>
                    </div>
                    <div style="font-family:var(--font-stat);font-size:8px;color:var(--text-muted);margin-top:4px">${m.maxHp}/${m.maxHp} HP</div>
                  </div>
                `}return`
                <div style="
                  background:rgba(6,5,9,0.6);
                  border:1px dashed rgba(200,150,60,0.08);
                  border-radius:3px;
                  padding:48px 14px;text-align:center;
                  cursor:pointer;
                  transition:border-color 0.2s;
                " onclick="window.location.hash='team'">
                  <div style="font-size:28px;color:var(--text-muted);opacity:0.15;margin-bottom:8px">+</div>
                  <div style="font-family:var(--font-title);font-size:9px;color:var(--text-muted);letter-spacing:3px">RECRUTER</div>
                </div>
              `}).join("")}
          </div>

          <!-- Quick stats row — Dark Souls estus style -->
          <div style="
            display:flex;align-items:center;gap:0;
            background:linear-gradient(180deg,rgba(10,8,12,0.98),rgba(6,5,8,0.99));
            border:1px solid rgba(200,150,60,0.12);
            border-radius:2px;
            z-index:1;
            overflow:hidden;
            box-shadow:0 4px 20px rgba(0,0,0,0.8),inset 0 1px 0 rgba(200,150,60,0.04);
          ">
            ${[{val:a.totalBattles,label:"COMBATS",color:"var(--text-bright)"},{val:a.totalWins,label:"VICTOIRES",color:"var(--peucommun)"},{val:i+"%",label:"TAUX",color:"var(--accent-light)"},{val:a.ownedCharacters.length,label:"HÉROS",color:"var(--rare-light)"}].map((p,m)=>`
              <div style="flex:1;text-align:center;padding:14px 8px;position:relative">
                ${m>0?'<div style="position:absolute;left:0;top:20%;bottom:20%;width:1px;background:rgba(200,150,60,0.08)"></div>':""}
                <div style="font-family:var(--font-stat);font-size:22px;font-weight:700;color:${p.color}">${p.val}</div>
                <div style="font-family:var(--font-title);font-size:8px;color:var(--text-muted);letter-spacing:3px;margin-top:3px">${p.label}</div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- ═══ RIGHT PANEL: Missions + Collection ═══ -->
        <div style="
          background:linear-gradient(180deg,rgba(9,7,11,0.99),rgba(6,5,9,0.99));
          border-left:1px solid rgba(200,150,60,0.10);
          display:flex;flex-direction:column;
          padding:24px 16px;
          overflow-y:auto;
          scrollbar-width:thin;scrollbar-color:rgba(200,150,60,0.1) transparent;
        ">
          <!-- RIGHT PANEL section header -->
          <div style="font-family:var(--font-title);font-size:9px;letter-spacing:5px;color:rgba(200,150,60,0.35);margin-bottom:14px">── MISSIONS DU JOUR ──</div>

          <!-- Daily Missions Panel -->
          <div id="daily-missions-panel" style="display:flex;flex-direction:column;gap:8px;margin-bottom:28px">
            ${(()=>{const p=c.getDailyMissions(),m=p.every(f=>f.done);return p.map(f=>{const u=Math.min(100,Math.round(f.progress/f.target*100));return`
                  <div style="
                    padding:12px 14px;
                    background:${f.done?"rgba(134,239,172,0.06)":"rgba(0,0,0,0.3)"};
                    border:1px solid ${f.done?"rgba(134,239,172,0.25)":"rgba(255,107,157,0.06)"};
                    border-radius:8px;position:relative;overflow:hidden;
                    transition:all 0.3s ease;
                  ">
                    ${f.done?'<div style="position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(134,239,172,0.5),transparent)"></div>':""}
                    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
                      <span style="font-size:16px;flex-shrink:0">${f.icon}</span>
                      <div style="flex:1;min-width:0">
                        <div style="font-family:var(--font-ui);font-size:11px;font-weight:700;
                          color:${f.done?"var(--success)":"var(--text-primary)"};letter-spacing:0.5px;">
                          ${f.title}
                          ${f.done?'<span style="font-size:9px;margin-left:6px;opacity:0.7">✓</span>':""}
                        </div>
                        <div style="font-size:9px;color:var(--text-muted);letter-spacing:1px">${f.desc}</div>
                      </div>
                      <div style="font-family:var(--font-stat);font-size:10px;
                        color:${f.done?"var(--success)":"var(--star)"};font-weight:700;flex-shrink:0">
                        +${f.reward}⭐
                      </div>
                    </div>
                    <div style="height:3px;background:rgba(0,0,0,0.5);border-radius:2px;overflow:hidden">
                      <div style="height:100%;width:${u}%;
                        background:${f.done?"var(--success)":"var(--accent-gradient)"};
                        border-radius:2px;transition:width 0.5s ease;
                        box-shadow:${f.done?"0 0 6px rgba(134,239,172,0.5)":"0 0 6px rgba(255,107,157,0.4)"};"></div>
                    </div>
                    <div style="font-size:9px;color:var(--text-muted);margin-top:3px;text-align:right">${f.progress}/${f.target}</div>
                  </div>
                `}).join("")+(m?`
                <div style="text-align:center;padding:8px;font-size:10px;color:var(--success);letter-spacing:2px;animation:ultimateShine 2s infinite">
                  🌸 TOUTES LES MISSIONS COMPLÉTÉES !
                </div>`:"")})()}
          </div>

          <!-- COLLECTION -->
          <div style="font-family:var(--font-title);font-size:10px;letter-spacing:4px;color:var(--text-muted);margin-bottom:16px">— COLLECTION —</div>
          
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:32px">
            ${[{label:"RARE",count:a.ownedCharacters.filter(p=>P.find(f=>f.id===p.id)?.rarity==="rare").length,color:"var(--rare)"},{label:"EPIQUE",count:a.ownedCharacters.filter(p=>P.find(f=>f.id===p.id)?.rarity==="epique").length,color:"var(--epique)"},{label:"LEGEND.",count:a.ownedCharacters.filter(p=>P.find(f=>f.id===p.id)?.rarity==="legendaire").length,color:"var(--legendaire)"},{label:"ULTIMATE",count:a.ownedCharacters.filter(p=>P.find(f=>f.id===p.id)?.rarity==="ultimate").length,color:"var(--ultimate)"}].map(p=>`
              <div style="
                padding:12px;text-align:center;
                background:rgba(0,0,0,0.3);
                border:1px solid rgba(200,155,60,0.04);
                border-radius:6px;
              ">
                <div style="font-family:var(--font-stat);font-size:24px;font-weight:700;color:${p.color}">${p.count}</div>
                <div style="font-family:var(--font-ui);font-size:8px;color:var(--text-muted);letter-spacing:2px;margin-top:4px">${p.label}</div>
              </div>
            `).join("")}
          </div>

          <!-- Last Activity -->
          <div style="font-family:var(--font-title);font-size:9px;letter-spacing:5px;color:rgba(200,150,60,0.35);margin-bottom:14px">── DERNIÈRE ZONE ──</div>
          <div style="
            padding:16px;
            background:linear-gradient(180deg,rgba(10,8,12,0.98),rgba(6,5,8,0.99));
            border:1px solid rgba(200,150,60,0.10);
            border-radius:3px;
            margin-bottom:24px;
            position:relative;
            overflow:hidden;
          ">
            <!-- top accent line -->
            <div style="position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(200,150,60,0.3),transparent)"></div>
            <div style="font-family:var(--font-title);font-size:11px;font-weight:700;color:var(--text-primary);letter-spacing:2px;margin-bottom:5px">${(s[d]||d).toUpperCase()}</div>
            <div style="font-family:var(--font-stat);font-size:10px;color:var(--text-muted)">${g}% accompli</div>
            <div style="height:3px;background:rgba(0,0,0,0.7);border-radius:1px;overflow:hidden;margin-top:8px;border:1px solid rgba(200,150,60,0.06)">
              <div style="height:100%;width:${g}%;background:linear-gradient(90deg,#8B6914,#C8963C);border-radius:1px;box-shadow:0 0 6px rgba(200,150,60,0.3)"></div>
            </div>
          </div>

          <!-- Spacer -->
          <div style="flex:1"></div>

          <!-- Quick play button -->
          <button class="btn btn--primary btn--full" id="btn-quick-play" style="
            padding:15px;font-size:11px;letter-spacing:4px;border-radius:2px;
            margin-top:20px;
          ">
            ⚔ JOUER — ${(s[d]||d).toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  `,bi(),yi(),hi(),document.getElementById("btn-profile")?.addEventListener("click",()=>w.navigate("profile")),document.getElementById("btn-campaign")?.addEventListener("click",()=>w.navigate("campaign")),document.getElementById("btn-dungeon")?.addEventListener("click",()=>w.navigate("dungeon")),document.getElementById("btn-tower")?.addEventListener("click",()=>w.navigate("tower")),document.getElementById("btn-invocation")?.addEventListener("click",()=>w.navigate("invocation")),document.getElementById("btn-forge")?.addEventListener("click",()=>w.navigate("forge")),document.getElementById("btn-achievements")?.addEventListener("click",()=>w.navigate("achievements")),document.getElementById("btn-dashboard")?.addEventListener("click",()=>w.navigate("dashboard")),document.getElementById("btn-team")?.addEventListener("click",()=>{c.state.ownedCharacters&&(c.state.ownedCharacters.forEach(p=>delete p.isNew),c.save()),w.navigate("team")}),document.getElementById("btn-inventory")?.addEventListener("click",()=>{c.state.inventory&&(c.state.inventory.forEach(p=>delete p.isNew),c.save()),w.navigate("inventory")}),document.getElementById("btn-dashboard")?.addEventListener("click",()=>w.navigate("dashboard")),document.getElementById("btn-quick-play")?.addEventListener("click",()=>w.navigate("campaign"))}function bi(){const a=document.getElementById("ember-particles");if(!a)return;let t="";for(let e=0;e<65;e++){const i=Math.random()*100,o=Math.random()*12,r=5+Math.random()*12,n=1+Math.random()*2.5,l=.12+Math.random()*.35,s=(Math.random()-.5)*80,d=["rgba(255,107,157,0.8)","rgba(255,141,182,0.6)","rgba(192,132,252,0.5)","rgba(252,211,77,0.4)","rgba(255,182,193,0.5)"],g=d[Math.floor(Math.random()*d.length)];t+=`<div style="
      position:absolute;bottom:-10px;left:${i}%;
      width:${n}px;height:${n}px;
      background:${g};border-radius:50%;
      opacity:${l};
      box-shadow:0 0 ${n*3}px ${g};
      animation:emberRise ${r}s ${o}s ease-in infinite;
      --sway:${s}px;
      will-change:transform;
    "></div>`}a.innerHTML=t}function yi(){const a=document.getElementById("floating-runes");if(!a)return;const t=["花","月","雷","火","風","光","水","雪","星","龍","剣","神"];let e="";for(let i=0;i<12;i++){const o=5+Math.random()*90,r=5+Math.random()*90,n=14+Math.random()*18,l=Math.random()*20,s=15+Math.random()*15;e+=`<div class="floating-rune" style="
      left:${o}%;top:${r}%;font-size:${n}px;
      animation-duration:${s}s;
      animation-delay:${l}s;
    ">${t[i]}</div>`}a.innerHTML=e}function hi(){const a=document.getElementById("title-sparkles");if(!a)return;let t=setInterval(()=>{if(!document.getElementById("title-sparkles")){clearInterval(t);return}const e=document.createElement("div"),i=Math.random()*100,o=Math.random()*100,r=1+Math.random()*2,n=.8+Math.random()*.5,l=["#ff6b9d","#ff8db6","#c084fc","#fcd34d"],s=l[Math.floor(Math.random()*l.length)];e.style.cssText=`
      position:absolute;left:${i}%;top:${o}%;
      width:${r}px;height:${r}px;
      background:${s};border-radius:50%;
      box-shadow:0 0 ${r*4}px ${s};
      animation:titleSparkle ${n}s ease forwards;
      pointer-events:none;
    `,a.appendChild(e),setTimeout(()=>e.remove(),n*1e3+50)},300)}const Oe={enchantement:"#C89B3C",osiris:"#E85D20",supplice:"#4A7C59",maragorh:"#c084fc",imotep:"#DC2626",abysses:"#22D3EE",citadelle:"#A78BFA",terre_desolee:"#EF4444",nexus:"#F5D060",preludes:"#FDE68A",bifrost:"#818CF8",domaine:"#FBBF24"};let Zt=0;function _e(){const a=document.getElementById("app");a.innerHTML=`
    <div style="width:100vw;height:100vh;background:#0D0A08;display:flex;flex-direction:column;overflow:hidden;position:relative">

      <!-- Forge ambient -->
      <div style="position:absolute;bottom:0;left:0;right:0;height:200px;background:radial-gradient(ellipse at 50% 100%,rgba(192,57,11,0.1),transparent 70%);pointer-events:none;z-index:0"></div>

      <!-- Top Bar -->
      <div style="
        display:flex;align-items:center;justify-content:space-between;
        padding:0 32px;height:52px;flex-shrink:0;
        background:rgba(8,5,3,0.97);
        border-bottom:1px solid rgba(200,155,60,0.08);
        z-index:10;
      ">
        <button id="back-btn" style="
          background:none;border:1px solid rgba(200,155,60,0.15);
          color:var(--text-secondary);width:36px;height:36px;
          border-radius:6px;cursor:pointer;font-size:14px;
          display:flex;align-items:center;justify-content:center;
          transition:all 0.15s;
        ">&#9664;</button>
        <div style="font-family:var(--font-title);font-size:14px;font-weight:700;letter-spacing:6px;color:var(--text-bright)">CAMPAGNE</div>
        <div style="
          display:flex;align-items:center;gap:8px;
          padding:6px 14px;
          background:rgba(200,155,60,0.06);border:1px solid rgba(200,155,60,0.12);
          border-radius:6px;
        ">
          <span style="font-family:var(--font-stat);font-size:11px;color:var(--star);font-weight:700">&#9670;</span>
          <span style="font-family:var(--font-stat);font-size:13px;font-weight:700;color:var(--text-bright)">${c.state.archireve.toLocaleString()}</span>
        </div>
      </div>

      <!-- Main Content: Zone List (Desktop Layout) -->
      <div style="flex:1;display:flex;overflow:hidden;z-index:2">

        <!-- Left: Zone List (sidebar) -->
        <div style="
          width:300px;flex-shrink:0;
          background:rgba(10,6,3,0.95);
          border-right:1px solid rgba(200,155,60,0.06);
          display:flex;flex-direction:column;
          overflow-y:auto;
        ">
          <div style="padding:20px 18px 12px;font-family:var(--font-title);font-size:10px;letter-spacing:4px;color:var(--text-muted)">— ZONES —</div>
          
          <div style="display:flex;flex-direction:column;gap:2px;padding:0 8px 20px">
            ${_.map((t,e)=>{const i=c.isLevelUnlocked(t.id,0),o=t.levels||20,r=Object.keys(c.state.campaignProgress[t.id]||{}).length,n=Math.round(r/o*100),l=Oe[t.id]||"#C89B3C",s=e===Zt,d=e===0,g=t.tier===2&&(e===0||_[e-1]?.tier!==2),p=t.tier===3&&(e===0||_[e-1]?.tier!==3);return`
                ${d?'<div style="font-family:var(--font-title);font-size:9px;letter-spacing:3px;color:var(--text-muted);padding:4px 8px 8px;margin-top:4px">⚔ CAMPAGNE</div>':g?'<div style="font-family:var(--font-title);font-size:9px;letter-spacing:3px;color:var(--legendaire);padding:12px 8px 8px;margin-top:8px;border-top:1px solid rgba(200,155,60,0.1)">👑 ENDGAME</div>':p?'<div style="font-family:var(--font-title);font-size:9px;letter-spacing:3px;color:#FBBF24;padding:12px 8px 8px;margin-top:8px;border-top:1px solid rgba(251,191,36,0.2)">✦ DIVINITÉ</div>':""}
                <button class="zone-list-btn" data-zone-idx="${e}" style="
                  display:flex;align-items:center;gap:14px;
                  padding:14px 16px;
                  background:${s?"rgba(192,57,11,0.12)":"transparent"};
                  border:1px solid ${s?"rgba(192,57,11,0.25)":"transparent"};
                  border-radius:6px;
                  cursor:${i?"pointer":"default"};
                  transition:all 0.15s ease;
                  text-align:left;
                  color:var(--text-primary);
                  ${i?"":"opacity:0.3;filter:grayscale(0.6);"}
                ">
                  <!-- Zone Icon -->
                  <div style="
                    width:36px;height:36px;
                    border-radius:6px;flex-shrink:0;
                    background:${i?l+"18":"rgba(0,0,0,0.3)"};
                    border:1px solid ${l}40;
                    display:flex;align-items:center;justify-content:center;
                    font-family:var(--font-stat);font-size:14px;font-weight:700;
                    color:${l};
                  ">${i?t.icon:"&#9618;"}</div>

                  <!-- Zone Info -->
                  <div style="flex:1;min-width:0">
                    <div style="font-family:var(--font-ui);font-size:12px;font-weight:700;letter-spacing:1px;color:${i?"var(--text-bright)":"var(--text-muted)"};white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${t.name.toUpperCase()}</div>
                    <div style="display:flex;align-items:center;gap:8px;margin-top:4px">
                      <div style="flex:1;height:3px;background:rgba(0,0,0,0.5);border-radius:2px;overflow:hidden">
                        <div style="height:100%;width:${n}%;background:${l};border-radius:2px;transition:width 0.5s"></div>
                      </div>
                      <span style="font-family:var(--font-stat);font-size:10px;color:var(--text-muted)">${i?n+"%":"🔒"}</span>
                    </div>
                  </div>
                </button>
              `}).join("")}
          </div>
        </div>

        <!-- Right: Zone Detail (main area) -->
        <div id="zone-detail" style="flex:1;display:flex;flex-direction:column;overflow:hidden">
          ${wi(Zt)}
        </div>
      </div>
    </div>
  `,document.getElementById("back-btn").addEventListener("click",()=>w.navigate("home")),document.querySelectorAll(".zone-list-btn").forEach(t=>{t.addEventListener("click",()=>{const e=parseInt(t.dataset.zoneIdx),i=_[e];!i||!c.isLevelUnlocked(i.id,0)||(Zt=e,_e())})}),document.querySelectorAll(".level-tile-btn").forEach(t=>{t.addEventListener("click",e=>{const i=t.dataset.zone,o=parseInt(t.dataset.level),r=t.dataset.berserk==="true";w.navigate("vs",{zone:i,level:o,berserk:r})})})}function wi(a){const t=_[a];if(!t)return'<div style="flex:1;display:flex;align-items:center;justify-content:center;color:var(--text-muted)">Selectionnez une zone</div>';c.isLevelUnlocked(t.id,0);const e=t.levels||20,i=Object.keys(c.state.campaignProgress[t.id]||{}).length,o=c.getZoneStars(t.id),r=e*3,n=Math.round(i/e*100),l=Oe[t.id]||"#C89B3C",s=e>50?10:e>20?6:5;return`
    <!-- Zone Header with BG -->
    <div style="
      position:relative;flex-shrink:0;
      height:200px;overflow:hidden;
      ${t.bgImage?"background-image:url('"+t.bgImage+"');background-size:cover;background-position:center;":""}
    ">
      <!-- Dark overlays -->
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(13,10,8,0.5),rgba(13,10,8,0.95))"></div>
      <div style="position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,${l}80,transparent)"></div>

      <!-- Zone info centered -->
      <div style="position:relative;z-index:1;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
          <div style="font-family:var(--font-ui);font-size:10px;letter-spacing:4px;color:${l}">ZONE ${a+1}</div>
          ${t.tier===2?'<span style="font-size:8px;letter-spacing:2px;color:var(--legendaire);background:rgba(200,155,60,0.1);padding:2px 8px;border-radius:10px;border:1px solid rgba(200,155,60,0.2)">ENDGAME</span>':""}
        </div>
        <h2 style="font-family:var(--font-title);font-size:28px;font-weight:900;color:var(--text-bright);letter-spacing:4px;text-shadow:0 2px 20px rgba(0,0,0,0.5);margin-bottom:8px">${t.name.toUpperCase()}</h2>
        <div style="font-family:var(--font-stat);font-size:11px;color:var(--text-muted);letter-spacing:2px;margin-bottom:12px">NIV. ${t.levelRange[0]} — ${t.levelRange[1]} · ${e} niveaux</div>
        <p style="font-family:var(--font-body);font-size:13px;color:var(--text-secondary);text-align:center;max-width:500px;line-height:1.6">${t.desc}</p>

        <!-- Progress bar -->
        <div style="display:flex;align-items:center;gap:12px;margin-top:16px;width:300px">
          <div style="flex:1;height:5px;background:rgba(0,0,0,0.5);border-radius:3px;overflow:hidden;border:1px solid rgba(200,155,60,0.04)">
            <div style="height:100%;width:${n}%;background:${l};border-radius:3px;box-shadow:0 0 8px ${l}60;transition:width 0.8s"></div>
          </div>
          <span style="font-family:var(--font-stat);font-size:12px;color:${l};font-weight:700">${n}%</span>
        </div>
        <div style="font-family:var(--font-stat);font-size:10px;color:var(--text-muted);margin-top:6px;letter-spacing:1px">${o} / ${r} etoiles — Boss: ${t.boss.name}</div>
      </div>
    </div>

    <!-- Level Grid -->
    <div style="flex:1;overflow-y:auto;padding:24px 32px">
      <div style="font-family:var(--font-title);font-size:10px;letter-spacing:4px;color:var(--text-muted);margin-bottom:16px">— NIVEAUX —</div>
      
      <div style="display:grid;grid-template-columns:repeat(${s},1fr);gap:10px;max-width:${s===10?"900px":s===6?"800px":"700px"}">
        ${Array.from({length:e},(d,g)=>{const p=g===e-1,m=c.getLevelFlames(t.id,g),f=c.isLevelUnlocked(t.id,g),u=m>0,v=Array.from({length:3},(tt,ct)=>'<span style="font-size:10px;color:'+(ct<m?l:"rgba(200,155,60,0.15)")+'">&#9670;</span>').join("");if(!f)return'<div style="padding:14px 8px;text-align:center;background:rgba(10,6,3,0.6);border:1px solid rgba(200,155,60,0.04);border-radius:6px;opacity:0.25"><div style="font-family:var(--font-stat);font-size:16px;color:var(--text-muted);margin-bottom:4px">&#9618;</div><div style="font-size:9px;color:var(--text-muted);letter-spacing:1px">VERR.</div></div>';const k=p?"linear-gradient(135deg,rgba(127,29,29,0.3),rgba(13,10,8,0.8))":u?"rgba(15,10,5,0.8)":"rgba(10,6,3,0.6)",b=p?"rgba(220,38,38,0.3)":u?l+"25":"rgba(200,155,60,0.06)",z=p?"var(--font-title)":"var(--font-stat)",R=p?"12px":"16px",B=p?"var(--danger)":u?l:"var(--text-primary)",h=p?"2px":"0",E=p?"BOSS":g+1,x=p?t.boss.name.split(" ")[0]:"NIV."+(t.levelRange[0]+g),S=c.isBerserkCleared(t.id,g)?'<div style="font-size:7px;color:#FBBF24;letter-spacing:1px;margin-top:2px">🔥 BERSERK</div>':"";return'<button class="level-tile-btn" data-zone="'+t.id+'" data-level="'+g+'" data-berserk="false" style="padding:14px 8px;text-align:center;background:'+k+";border:1px solid "+b+';border-radius:6px;cursor:pointer;transition:all 0.15s ease;color:var(--text-primary);position:relative"><div style="font-family:'+z+";font-size:"+R+";font-weight:700;color:"+B+";margin-bottom:4px;letter-spacing:"+h+'">'+E+'</div><div style="font-family:var(--font-stat);font-size:9px;color:var(--text-muted);margin-bottom:6px;letter-spacing:1px">'+x+'</div><div style="display:flex;justify-content:center;gap:2px">'+v+"</div>"+S+"</button>"}).join("")}
      </div>
    </div>
  `}const V=50,St=6e3,$i=5e3,ki=35,Ei=8,zi=.5,Ii=1.5;class Ti{constructor(t,e){this.playerTeam=t.map((i,o)=>({...i,stats:{...i.stats},currentHp:i.currentHp??i.stats.hp,maxHp:i.stats.hp,alive:!0,buffs:[],debuffs:[],atbGauge:Math.random()*20,atbMax:100,isPlayer:!0,isGuarding:!1,x:400,y:300+o*120})),this.enemyTeam=e.map((i,o)=>({...i,stats:{...i.stats},currentHp:i.currentHp??i.stats.hp??i.maxHp,maxHp:i.maxHp??i.stats.hp,alive:!0,buffs:i.buffs||[],debuffs:i.debuffs||[],atbGauge:Math.random()*15,atbMax:100,isPlayer:!1,weakness:i.weakness||"physique",breakGauge:i.breakGauge||0,breakMax:i.breakMax||100,isBroken:i.isBroken||!1,breakTimer:0,x:1300+(i.isBoss?0:o*30),y:300+o*120})),this.running=!1,this.paused=!1,this.gameOver=!1,this.winner=null,this.tickInterval=null,this.elapsedTime=0,this.turnCount=0,this.activeUnit=null,this.log=[],this.totalDmgDealt=0,this.onTick=null,this.onPlayerReady=null,this.onActionExecuted=null,this.onLog=null,this.onBreak=null,this.onGameOver=null}start(){this.running||(this.running=!0,this.paused=!1,this.addLog("⚔️ Le combat commence !"),this.tickInterval=setInterval(()=>this._tick(),V))}stop(){this.running=!1,this.tickInterval&&(clearInterval(this.tickInterval),this.tickInterval=null)}destroy(){this.stop(),this.onTick=null,this.onPlayerReady=null,this.onActionExecuted=null,this.onLog=null,this.onBreak=null,this.onGameOver=null}setSpeed(t){const e=Math.round(V/t);this.tickInterval&&(clearInterval(this.tickInterval),this.tickInterval=setInterval(()=>this._tick(),e))}_tick(){if(!this.running||this.gameOver||this.paused)return;this.elapsedTime+=V;for(const i of this.enemyTeam)i.isBroken&&i.alive&&(i.breakTimer-=V,i.breakTimer<=0&&(i.isBroken=!1,i.breakGauge=0,i.breakTimer=0));this.elapsedTime%1e3<V&&this._processStatusEffects();const t=[...this.playerTeam,...this.enemyTeam];for(const i of t){if(!i.alive||i.isBroken)continue;const r=i.stats.spd/50*V*100/St;i.atbGauge=Math.min(i.atbMax,i.atbGauge+r)}const e=t.filter(i=>i.alive&&i.atbGauge>=i.atbMax).sort((i,o)=>o.stats.spd-i.stats.spd);if(e.length>0){const i=e[0];i.isPlayer?(this.paused=!0,this.activeUnit=i,this.onPlayerReady?.(i)):(this._executeEnemyAction(i),i.atbGauge=0)}this._checkWinCondition(),this.onTick?.({playerTeam:this.playerTeam,enemyTeam:this.enemyTeam,timeline:this.getTimeline(),elapsedTime:this.elapsedTime,activeUnit:this.activeUnit,paused:this.paused})}executePlayerAction(t,e){if(!this.paused||!this.activeUnit)return null;const i=this.activeUnit,o=i.skills[t];if(!o)return null;const r=this._resolveAction(i,o,e,!0),l=(o.recovery||2e3)/St*100;return i.atbGauge=-l,i.isGuarding=!1,this.turnCount++,this.paused=!1,this.activeUnit=null,setTimeout(()=>this._checkWinCondition(),100),r}executeGuard(){if(!this.paused||!this.activeUnit)return;const t=this.activeUnit;t.isGuarding=!0,t.atbGauge=-20,this.addLog(`🛡️ ${t.name} se met en garde !`),this.onActionExecuted?.({actor:t,skill:{id:"guard",name:"Garde",icon:"🛡️",type:"guard"},targets:[],results:{guards:[t.id]},isPlayer:!0}),this.turnCount++,this.paused=!1,this.activeUnit=null}_executeEnemyAction(t){const e=t.skills||[{id:"attaque",name:"Attaque",type:"physical",power:80,accuracy:100,icon:"👊",recovery:1800}],i=this.playerTeam.filter(p=>p.alive);if(i.length===0)return;let o=null,r=null;const n=e.find(p=>p.type==="heal"),l=this.enemyTeam.filter(p=>p.alive),s=l.find(p=>p.currentHp/p.maxHp<.4);if(n&&s&&(o=n,r=[...l].sort((p,m)=>p.currentHp/p.maxHp-m.currentHp/m.maxHp)[0].id),!o){const p=e.find(m=>m.type==="buff");p&&(!t.buffs||t.buffs.length===0)&&this.turnCount<=6&&(o=p,r=t.id)}if(!o){const p=e.filter(m=>m.type==="physical"||m.type==="magical");if(t.isBoss){const m=p.find(u=>u.aoe),f=p.find(u=>!u.aoe);m&&i.length>=2&&this.turnCount%3===0?o=m:f?o=f:o=p[0]||e[0],r=[...i].sort((u,v)=>u.currentHp-v.currentHp)[0].id}else if(t.type==="assassin"){o=p.find(u=>u.critBonus||u.executeMult)||p[0]||e[0];const m=i.filter(u=>u.type==="mage"||u.type==="arche");r=[...m.length>0?m:i].sort((u,v)=>u.currentHp-v.currentHp)[0].id}else t.type==="mage"?(o=p.length>0?p[Math.floor(Math.random()*p.length)]:e[0],r=[...i].sort((m,f)=>m.stats.magDef-f.stats.magDef)[0].id):(o=p.length>0?p[Math.floor(Math.random()*p.length)]:e[0],r=[...i].sort((m,f)=>m.stats.def-f.stats.def)[0].id)}o||(o=e[0]),r||(r=i[0].id),this._resolveAction(t,o,r,!1);const g=(o.recovery||2e3)/St*100;t.atbGauge=-g}_resolveAction(t,e,i,o){const r={hits:[],heals:[],buffs:[],misses:[]};if(Math.random()*100>(e.accuracy||100))return this.addLog(`${o?"🎯":"👹"} ${t.name} — RATÉ !`),r.misses.push(i),this.onActionExecuted?.({actor:t,skill:e,targets:[i],results:r,isPlayer:o}),r;if(e.type==="heal"){const l=this.findUnit(i);if(l&&l.alive){const s=Math.floor(e.power*(1+this._getEffectiveStat(t,"magAtk")/200));l.currentHp=Math.min(l.maxHp,l.currentHp+s),this.addLog(`💚 ${t.name} soigne ${l.name} (+${s} PV)`),r.heals.push({targetId:i,amount:s})}}else if(e.type==="buff"){const l=e.effect?.aoe?(o?this.playerTeam:this.enemyTeam).filter(s=>s.alive):[this.findUnit(i)].filter(Boolean);for(const s of l)e.effect?.type==="stealth"?(s.buffs.push({type:"stealth",turns:e.effect.turns}),this.addLog(`👤 ${t.name} se rend invisible !`)):e.effect&&(s.buffs.push({stat:e.effect.stat,boost:e.effect.boost,turns:e.effect.turns}),this.addLog(`✨ ${t.name} → ${e.name}`)),r.buffs.push({targetId:s.id})}else{const l=e.aoe?(o?this.enemyTeam:this.playerTeam).filter(s=>s.alive):[this.findUnit(i)].filter(Boolean);for(const s of l){if(!s||!s.alive)continue;const d=e.type==="magical"?this._getEffectiveStat(t,"magAtk"):this._getEffectiveStat(t,"atk");let g=e.type==="magical"?this._getEffectiveStat(s,"magDef"):this._getEffectiveStat(s,"def");e.ignoreDefPercent&&(g=Math.floor(g*(1-e.ignoreDefPercent)));let p=Math.floor(d*e.power/(g+50)*(.85+Math.random()*.3));const m=10+(t.type==="assassin"?15:0)+(e.critBonus||0),f=Math.random()*100<m;if(f&&(p=Math.floor(p*1.5)),e.executeMult&&s.currentHp/s.maxHp<.3&&(p=Math.floor(p*e.executeMult)),e.aoe&&(p=Math.floor(p*.7)),s.isBroken&&(p=Math.floor(p*Ii)),s.isGuarding&&(p=Math.floor(p*(1-zi)),s.isGuarding=!1),p=Math.max(1,p),s.currentHp-=p,o&&(this.totalDmgDealt+=p),this.addLog(`${o?"⚔️":"👹"} ${t.name} → ${e.name} → ${s.name} : -${p}${f?" 💥CRIT!":""}${s.isBroken?" 🔥BREAK!":""}`),s.currentHp<=0&&(s.currentHp=0,s.alive=!1,this.addLog(`💀 ${s.name} vaincu !`)),e.effect?.type==="poison"&&s.alive&&(s.debuffs.push({type:"poison",damage:e.effect.damage,turns:e.effect.turns}),this.addLog(`☠️ ${s.name} empoisonné !`)),o&&s.alive&&!s.isBroken&&s.weakness){const v=e.element===s.weakness?ki:Ei;s.breakGauge=Math.min(s.breakMax,(s.breakGauge||0)+v),s.breakGauge>=s.breakMax&&(s.isBroken=!0,s.breakTimer=$i,s.atbGauge=-60,this.addLog(`💥 ${s.name} est BRISÉ ! (+50% dégâts)`),this.onBreak?.(s))}r.hits.push({targetId:s.id,damage:p,isCrit:f,isBreakHit:s.isBroken})}}return this.onActionExecuted?.({actor:t,skill:e,targets:r.hits.map(l=>l.targetId),results:r,isPlayer:o}),r}getTimeline(){const t=[...this.playerTeam,...this.enemyTeam].filter(i=>i.alive),e=[];for(const i of t){const o=i.atbMax-i.atbGauge,n=i.stats.spd/50*V*100/St,s=(o>0?Math.ceil(o/n):0)*V;e.push({id:i.id,name:i.name,type:i.type,isPlayer:i.isPlayer,isBoss:i.isBoss,atbPct:Math.max(0,Math.min(100,i.atbGauge/i.atbMax*100)),msToReady:s,isReady:i.atbGauge>=i.atbMax,isBroken:i.isBroken,rarity:i.rarity})}return e.sort((i,o)=>i.msToReady-o.msToReady),e}findUnit(t){return this.playerTeam.find(e=>e.id===t)||this.enemyTeam.find(e=>e.id===t)}_getEffectiveStat(t,e){let i=t.stats[e];for(const o of t.buffs||[])o.stat===e&&(i=Math.floor(i*(1+o.boost)));return i}_processStatusEffects(){const t=[...this.playerTeam,...this.enemyTeam];for(const e of t)e.alive&&(e.debuffs=(e.debuffs||[]).filter(i=>(i.type==="poison"&&(e.currentHp-=i.damage,e.currentHp<=0&&(e.currentHp=0,e.alive=!1,this.addLog(`💀 ${e.name} succombe au poison !`))),i.turns--,i.turns>0)),e.buffs=(e.buffs||[]).filter(i=>(i.turns--,i.turns>0)))}_checkWinCondition(){const t=this.playerTeam.filter(i=>i.alive).length,e=this.enemyTeam.filter(i=>i.alive).length;t===0&&!this.gameOver&&(this.gameOver=!0,this.winner="enemy",this.addLog("💀 Défaite... Votre équipe a été vaincue."),this.stop(),this.onGameOver?.("enemy")),e===0&&!this.gameOver&&(this.gameOver=!0,this.winner="player",this.addLog("🏆 Victoire ! Les ennemis sont vaincus !"),this.stop(),this.onGameOver?.("player"))}addLog(t){this.log.push({message:t,time:this.elapsedTime}),this.onLog?.(t)}getSummary(){return{won:this.winner==="player",turnsPlayed:this.turnCount,playerTeamState:this.playerTeam,enemyTeamState:this.enemyTeam,log:this.log,totalDmgDealt:this.totalDmgDealt}}}const Ie={character:{frameW:48,frameH:48,idle:{row:0,frames:6,fps:8,loop:!0,holdLast:!1},walk:{row:1,frames:8,fps:12,loop:!0,holdLast:!1},attack:{row:2,frames:6,fps:14,loop:!1,holdLast:!1},hurt:{row:3,frames:3,fps:16,loop:!1,holdLast:!1},death:{row:4,frames:7,fps:8,loop:!1,holdLast:!0}},boss:{frameW:96,frameH:96,idle:{row:0,frames:6,fps:6,loop:!0,holdLast:!1},attack:{row:1,frames:6,fps:10,loop:!1,holdLast:!1},hurt:{row:2,frames:3,fps:14,loop:!1,holdLast:!1},death:{row:3,frames:8,fps:7,loop:!1,holdLast:!0}},minion:{frameW:48,frameH:48,idle:{row:0,frames:6,fps:10,loop:!0,holdLast:!1},walk:{row:1,frames:8,fps:14,loop:!0,holdLast:!1},attack:{row:2,frames:5,fps:14,loop:!1,holdLast:!1},hurt:{row:3,frames:3,fps:16,loop:!1,holdLast:!1},death:{row:4,frames:6,fps:8,loop:!1,holdLast:!0}}},Ue={guerrier:"/assets/characters/guerrier_sheet.png",mage:"/assets/characters/mage_sheet.png",arche:"/assets/characters/arche_sheet.png",assassin:"/assets/characters/assassin_sheet.png",boss:"/assets/characters/boss_sheet.png",minion:"/assets/characters/minion_sheet.png"},At={};async function Si(a){return At[a]!==void 0?At[a]:new Promise(t=>{const e=new Image;e.onload=()=>{At[a]=!0,t(!0)},e.onerror=()=>{At[a]=!1,t(!1)},e.src=Ue[a]})}class Ai{constructor(t,e,i="character"){this.el=t,this.type=e,this.config=Ie[i]||Ie.character,this.currentAnim=null,this.currentFrame=0,this.lastTime=0,this.rafId=null,this.onAnimEnd=null,this.hasSheet=!1,this._queue=null,this._init()}async _init(){const t=await Si(this.type);if(this.hasSheet=t,t){const{frameW:e,frameH:i}=this.config;this.el.style.backgroundImage=`url('${Ue[this.type]}')`,this.el.style.backgroundRepeat="no-repeat",this.el.style.backgroundSize="auto",this.el.style.imageRendering="pixelated",this.el.style.width=e+"px",this.el.style.height=i+"px";const o=this.el.querySelector("img");o&&(o.style.display="none"),this.play("idle")}}play(t,e=null){if(!this.hasSheet){this._triggerCSSFallback(t),e&&e();return}this.config[t]&&(this.currentAnim==="death"&&t!=="death"||(this.currentAnim=t,this.currentFrame=0,this.lastTime=performance.now(),this.onAnimEnd=e,this._queue=null,this.rafId&&cancelAnimationFrame(this.rafId),this._tick(this.lastTime)))}playThen(t,e){this.play(t,()=>this.play(e))}stop(){this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=null}destroy(){this.stop(),this.el=null}_tick(t){if(!this.el)return;const e=this.config[this.currentAnim];if(!e)return;const i=1e3/e.fps,o=t-this.lastTime;if(o>=i&&(this.lastTime=t-o%i,this._renderFrame(e),this.currentFrame++,this.currentFrame>=e.frames))if(e.loop)this.currentFrame=0;else if(e.holdLast){this.currentFrame=e.frames-1,this._renderFrame(e),this.onAnimEnd&&(this.onAnimEnd(),this.onAnimEnd=null);return}else{this.currentFrame=0,this.onAnimEnd&&(this.onAnimEnd(),this.onAnimEnd=null);return}this.rafId=requestAnimationFrame(r=>this._tick(r))}_renderFrame(t){if(!this.el)return;const{frameW:e,frameH:i}=this.config,o=-(this.currentFrame*e),r=-(t.row*i);this.el.style.backgroundPosition=`${o}px ${r}px`}_triggerCSSFallback(t){if(!this.el)return;const i={attack:"combat-unit--attack-player",hurt:"combat-unit--hit",death:"combat-unit--death"}[t];i&&(this.el.classList.add(i),setTimeout(()=>this.el?.classList.remove(i),600))}}const Nt=new Map;function Ci(a,t){Nt.set(a,t)}function He(){Nt.forEach(a=>a.destroy()),Nt.clear()}function et(a,t,e=null){const i=Nt.get(a);i&&i.play(t,e)}let y=null,U=null,Y=null,ae=[],it=null,M=null,K=!1,j=1,O=!1,nt=!1,at=0;function Bi(a,t,e){a.addEventListener(t,e),ae.push({target:a,type:t,fn:e})}function ot(){ae.forEach(({target:a,type:t,fn:e})=>a.removeEventListener(t,e)),ae=[],y&&(y.destroy(),y=null),it&&(clearInterval(it),it=null),He(),M=null,K=!1,j=1,O=!1,nt=!1,at=0}const me={feu:"🔥",glace:"❄️",foudre:"⚡",nature:"🌿",tenebres:"💀",physique:"⚔️"},Kt={feu:"#E85D20",glace:"#60A5FA",foudre:"#FBBF24",nature:"#4ADE80",tenebres:"#A855F7",physique:"#F87171"};function Et(a={}){const t=a.zone||U,e=parseInt(a.level??Y??0);O=!!a.berserk,nt=!!a.isTower,U=t,Y=e,at=0;let i,o,r;if(nt){i={id:"tower",name:"Tour de l'Infini",icon:"🏛️",color:"#888888",levels:9999,levelRange:[1,9999],bgGradient:"linear-gradient(180deg, #101015, #000000)"},o=(e+1)%10===0;const s=_[Math.floor(Math.random()*_.length)];r=ke(s.id,e,c.state.playerLevel),i.bgImage=s.bgImage}else{if(i=_.find(s=>s.id===t),!i){ot(),w.navigate("campaign");return}o=e===(i.levels||20)-1,r=ke(t,e,c.state.playerLevel)}const n=nt?c.getTowerTeamInstances():c.getTeamInstances();if(n.length===0||nt&&n.filter(s=>s.alive).length===0){ot(),w.navigate("team");return}y=new Ti(n,r),y.onTick=s=>{document.getElementById("atb-battlefield")&&(Li(s.timeline),Oi(),Xi())},y.onPlayerReady=s=>{if(K){const d=s.skills||[],g=d.filter(b=>b.type==="physical"||b.type==="magical"),p=d.filter(b=>b.type==="heal"),f=y.playerTeam.filter(b=>b.alive).find(b=>b.currentHp/b.maxHp<.4);let u=0,v=null;if(p.length&&f)u=d.indexOf(p[0]),v=f.id;else if(g.length){const b=g.sort((B,h)=>h.power-B.power)[0];u=d.indexOf(b),v=y.enemyTeam.filter(B=>B.alive).sort((B,h)=>B.currentHp-h.currentHp)[0]?.id}const k=j>=4?80:200;setTimeout(()=>{y&&v!==null&&(M=v,ue(u,s))},k);return}Ui(s),_i(s.id)},y.onActionExecuted=s=>{Hi(s)},y.onLog=s=>{const d=document.getElementById("atb-combat-log");d&&(d.textContent=s)},y.onBreak=s=>{Vi(s.id)},y.onGameOver=s=>{setTimeout(()=>Ki(i,o),600)};const l=y.enemyTeam.find(s=>s.alive);l&&(M=l.id),Mi(i),y.start()}function Mi(a,t){const e=document.getElementById("app");if(e.innerHTML=`
    <div class="screen combat-screen" style="${a.bgImage?"background-image: linear-gradient(to bottom, rgba(6,6,15,0.25), rgba(6,6,15,0.8)), url('"+a.bgImage+"'); background-size: cover; background-position: center;":""}">

      <!-- ATB TIMELINE BAR (Top) -->
      <div class="atb-timeline-container" id="atb-timeline-container">
        <div class="atb-timeline-label">TIMELINE</div>
        <div class="atb-timeline-track" id="atb-timeline-track"></div>
      </div>

      <!-- HUD TOP: Player Portraits & Target Info -->
      <div style="position:absolute; top:60px; left:0; right:0; padding:10px 20px; display:flex; justify-content:space-between; align-items:flex-start; pointer-events:none; z-index:10">
        <div id="player-portraits" class="atb-player-portraits"></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px">
          <div id="atb-timer" style="font-size:11px;color:var(--text-secondary);font-family:var(--font-stat);letter-spacing:1px;background:rgba(0,0,0,0.5);padding:3px 12px;border-radius:20px">00:00</div>
          <div id="atb-dmg-total" style="font-size:10px;color:var(--text-muted);background:rgba(0,0,0,0.3);padding:2px 10px;border-radius:12px">⚔ 0 dmg</div>
        </div>
        <div id="target-info-panel" class="atb-target-panel" style="opacity:0"></div>
      </div>

      <!-- Flee + Auto-Battle + Speed buttons -->
      <div style="position:absolute;top:12px;right:16px;z-index:15;display:flex;gap:6px;align-items:center">
        <button id="speed-btn" title="Vitesse" style="
          background:rgba(0,0,0,0.6);border:1px solid rgba(200,155,60,0.3);color:var(--text-bright);
          border-radius:8px;padding:5px 12px;font-family:var(--font-stat);font-size:11px;
          font-weight:700;letter-spacing:1px;cursor:pointer;pointer-events:auto;
        ">⚡ x1</button>
        <button id="auto-btn" title="Auto" style="
          background:rgba(0,0,0,0.6);border:1px solid rgba(200,155,60,0.3);color:var(--text-muted);
          border-radius:8px;padding:5px 12px;font-family:var(--font-stat);font-size:11px;
          font-weight:700;letter-spacing:1px;cursor:pointer;pointer-events:auto;
        ">AUTO</button>
        <button class="topbar__back" id="flee-btn" title="Fuir" style="pointer-events:auto">🏃</button>
      </div>

      <!-- Battlefield -->
      <div id="atb-battlefield" style="flex:1; position:relative; overflow:hidden;
        background:radial-gradient(ellipse at 50% 30%, rgba(192,57,11,0.03), transparent 60%); margin-top:50px">
        <div id="ambient-particles" style="position:absolute;inset:0;pointer-events:none;z-index:0;overflow:hidden"></div>
        <div id="unit-container" style="position:absolute; inset:0;"></div>
      </div>

      <!-- Skill Bar (Bottom) -->
      <div class="atb-action-panel" id="atb-action-panel">
        <div class="atb-guard-btn-wrap">
          <button class="btn btn--ghost atb-guard-btn" id="atb-guard-btn" title="Garde (Espace)">
            🛡️ <span style="font-size:9px;letter-spacing:1px">ESPACE</span>
          </button>
        </div>
        <div id="atb-skill-buttons" class="atb-skill-buttons"></div>
        <div id="atb-combat-log" class="atb-combat-log">⏳ En attente...</div>
      </div>

      <div id="victory-overlay"></div>

      <!-- BERSERK OVERLAY -->
      ${O?`
        <!-- Red vignette border -->
        <div style="
          position:absolute;inset:0;pointer-events:none;z-index:8;
          box-shadow:inset 0 0 80px rgba(220,20,20,0.35),inset 0 0 200px rgba(180,0,0,0.15);
          border:2px solid rgba(220,20,20,0.4);
          animation:berserkVignette 1.5s ease-in-out infinite alternate;
        "></div>
        <!-- Berserk badge top-center -->
        <div style="
          position:absolute;top:64px;left:50%;transform:translateX(-50%);z-index:15;
          background:linear-gradient(135deg,rgba(180,0,0,0.3),rgba(220,20,20,0.2));
          border:1px solid rgba(220,40,40,0.5);
          border-radius:20px;padding:4px 16px;
          font-family:var(--font-title);font-size:9px;letter-spacing:3px;color:#ff6666;
          animation:berserkBadgePulse 1s ease infinite alternate;
          pointer-events:none;
        ">🔥 MODE BERSERK · RÉCOMPENSES DOUBLÉES</div>
      `:""}
    </div>
  `,O&&!document.getElementById("berserk-styles")){const r=document.createElement("style");r.id="berserk-styles",r.textContent=`
        @keyframes berserkVignette {
          from { box-shadow:inset 0 0 60px rgba(220,20,20,0.25),inset 0 0 150px rgba(180,0,0,0.1); border-color:rgba(220,20,20,0.3); }
          to   { box-shadow:inset 0 0 100px rgba(220,20,20,0.5),inset 0 0 250px rgba(180,0,0,0.2); border-color:rgba(255,40,40,0.6); }
        }
        @keyframes berserkBadgePulse {
          from { opacity:0.7; filter:brightness(1); }
          to   { opacity:1;   filter:brightness(1.3) drop-shadow(0 0 8px rgba(255,80,80,0.6)); }
        }
        .combat-screen { background-color:#0a0205 !important; }
      `,document.head.appendChild(r)}Fi(),Pi();const i=y.onTick;y.onTick=r=>{i&&i(r);const n=document.getElementById("atb-dmg-total");n&&(n.textContent=`⚔ ${at.toLocaleString()} dmg`)},Bi(window,"keydown",r=>{if(!y||!y.paused)return;const n=y.activeUnit;if(!n)return;const s={a:0,z:1,e:2,r:3}[r.key.toLowerCase()];s!==void 0&&n.skills[s]&&ue(s,n),r.code==="Space"&&(r.preventDefault(),y.executeGuard(),oe())}),document.getElementById("flee-btn").addEventListener("click",()=>{confirm("Fuir le combat ?")&&(ot(),w.navigate("campaign"))}),document.getElementById("speed-btn").addEventListener("click",()=>{j=j===1?2:j===2?4:1;const r=document.getElementById("speed-btn");r&&(r.textContent=`⚡ x${j}`,r.style.color=j===1?"var(--text-bright)":j===2?"#FBBF24":"#FF6B2C",r.style.borderColor=j===1?"rgba(200,155,60,0.3)":j===2?"rgba(251,191,36,0.5)":"rgba(255,107,44,0.5)"),y&&y.setSpeed(j)}),document.getElementById("auto-btn").addEventListener("click",()=>{K=!K;const r=document.getElementById("auto-btn");r&&(r.style.color=K?"#4ADE80":"var(--text-muted)",r.style.borderColor=K?"rgba(74,222,128,0.5)":"rgba(200,155,60,0.3)",r.style.background=K?"rgba(74,222,128,0.1)":"rgba(0,0,0,0.6)",r.textContent=K?"🤖 AUTO":"AUTO")}),document.getElementById("atb-guard-btn").addEventListener("click",()=>{y?.paused&&(y.executeGuard(),oe())}),Yi(a.id)}function Li(a){const t=document.getElementById("atb-timeline-track");if(!t)return;const e=a.slice(0,10);t.innerHTML=e.map((i,o)=>{const r=i.isPlayer?"var(--accent-light)":"var(--danger)",n=i.isReady?"#fff":i.isPlayer?"var(--accent)":"rgba(220,38,38,0.5)",l=Math.min(100,i.atbPct),s=i.name.split(" ")[0].substring(0,5),d=i.isBroken?"atb-portrait--broken":"",g=i.isReady?"atb-portrait--ready":"";return`
      <div class="atb-portrait ${d} ${g}" style="--atb-pct:${l}%;border-color:${n}" title="${i.name}">
        <div class="atb-portrait-fill" style="width:${l}%;background:${r}"></div>
        <div class="atb-portrait-icon">${i.isPlayer?Ri(i.type):i.isBoss?"💀":"👹"}</div>
        <div class="atb-portrait-name">${s}</div>
      </div>
    `}).join("")}function Ri(a){return{guerrier:"⚔️",mage:"🔮",arche:"🏹",assassin:"🗡️"}[a]||"⚔️"}function Pi(){const a=document.getElementById("player-portraits");!a||!y||(a.innerHTML=y.playerTeam.map(t=>{const e=t.currentHp/t.maxHp*100,i=Math.max(0,t.atbGauge/t.atbMax*100);return`
      <div class="atb-hero-portrait" data-portrait-id="${t.id}">
        <div class="atb-hero-img">
          <img src="${C(t.type)}" style="width:100%;height:100%;object-fit:cover;transform:scale(1.4) translateY(3px)">
        </div>
        <div class="atb-hero-info">
          <div style="font-family:var(--font-title);font-size:11px;color:var(--text-bright);letter-spacing:0.5px">${t.name.split(" ")[0]}</div>
          <div class="bar-container" style="width:110px;height:5px;margin:2px 0">
            <div class="bar-fill bar-fill--hp" data-hp-bar="${t.id}" style="width:${e}%"></div>
          </div>
          <div class="bar-container" style="width:110px;height:3px">
            <div class="bar-fill" data-atb-bar="${t.id}" style="width:${i}%;background:linear-gradient(90deg,#c084fc,#ff6b9d);box-shadow:0 0 6px rgba(255,107,157,0.4)"></div>
          </div>
        </div>
      </div>
    `}).join(""))}function Di(){if(y)for(const a of y.playerTeam){const t=document.querySelector(`[data-hp-bar="${a.id}"]`),e=document.querySelector(`[data-atb-bar="${a.id}"]`);if(t){const o=Math.max(0,a.currentHp/a.maxHp*100);t.style.width=o+"%";const r=o<=25?"low":o<=50?"medium":"";t.className=`bar-fill bar-fill--hp ${r}`}if(e){const o=Math.max(0,Math.min(100,a.atbGauge/a.atbMax*100));e.style.width=o+"%"}const i=document.querySelector(`[data-portrait-id="${a.id}"]`);i&&(i.style.opacity=a.alive?"1":"0.3",i.style.filter=a.alive?"":"grayscale(1)")}}function Ne(){const a=document.getElementById("target-info-panel");if(!a||!y)return;const t=M?y.findUnit(M):null;if(!t||!t.alive||t.isPlayer){a.style.opacity="0";return}a.style.opacity="1";const e=t.currentHp/t.maxHp*100,i=(t.breakGauge||0)/(t.breakMax||100)*100,o=me[t.weakness]||"⚔️",r=Kt[t.weakness]||"#F87171";a.innerHTML=`
    <div style="pointer-events:auto;min-width:180px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
        <span style="font-family:var(--font-title);font-size:13px;color:var(--danger);letter-spacing:0.5px">${t.name}</span>
        ${t.isBroken?'<span style="font-size:10px;color:#FBBF24;font-weight:700;animation:comboPop 0.3s ease">BREAK!</span>':""}
      </div>
      <div class="bar-container" style="width:160px;height:7px;margin-bottom:4px">
        <div class="bar-fill bar-fill--hp" style="width:${e}%"></div>
      </div>
      <div style="font-size:9px;color:var(--text-muted);margin-bottom:6px">${t.currentHp}/${t.maxHp} PV</div>
      <div style="display:flex;align-items:center;gap:6px">
        <span style="font-size:9px;color:var(--text-muted);letter-spacing:1px">FAIBLESSE</span>
        <span style="font-size:14px;filter:drop-shadow(0 0 4px ${r})">${o}</span>
      </div>
      <div style="display:flex;align-items:center;gap:6px;margin-top:4px">
        <span style="font-size:9px;color:var(--text-muted);letter-spacing:1px">BREAK</span>
        <div class="bar-container" style="width:80px;height:4px">
          <div class="bar-fill" style="width:${i}%;background:linear-gradient(90deg,#FBBF24,#F59E0B);box-shadow:0 0 6px rgba(251,191,36,0.4);${t.isBroken?"animation:gaugeFullPulse 0.5s ease infinite":""}"></div>
        </div>
      </div>
    </div>
  `}function Fi(){const a=document.getElementById("unit-container");if(!a||!y)return;const t=[...y.playerTeam,...y.enemyTeam];a.innerHTML=t.map(e=>ji(e)).join(""),He(),t.forEach(e=>{if(!e.alive)return;const i=a.querySelector(`[data-unit-id="${e.id}"] img.sprite`);if(!i)return;const o=e.isBoss?"boss":e.isEnemy?"minion":e.type||"guerrier",r=e.isBoss?"boss":e.isEnemy?"minion":"character",n=new Ai(i.parentElement,o,r);Ci(e.id,n)}),a.querySelectorAll(".enemy-unit").forEach(e=>{e.addEventListener("click",()=>{const i=e.dataset.unitId,o=y?.findUnit(i);o&&!o.isPlayer&&o.alive&&(M=i,Ne(),qe())})})}function ji(a){const t=Math.max(0,a.currentHp/a.maxHp)*100,e=a.isBoss,i=a.isPlayer,o=e?ge(a.useNewBossSprite):a.isEnemy?fe():C(a.type),r=a.x,n=a.id===M,l=!i&&a.weakness&&me[a.weakness]||"";return`
    <div class="${i?"player-unit":"enemy-unit"} combat-unit"
         data-unit-id="${a.id}"
         style="width:${e?"150px":"110px"}; text-align:center;
         position:absolute; left:${r}px; top:${a.y}px;
         ${a.alive?"":"opacity:0.2;filter:grayscale(1);pointer-events:none"};
         transition: left 0.6s cubic-bezier(0.4,0,0.2,1), top 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.3s ease;
         cursor: ${!i&&a.alive?"pointer":"default"}">

      ${n?'<div class="selection-ring" style="left:50%"></div>':""}

      <img src="${o}" class="sprite ${e?"sprite--boss":"sprite--md"} ${a.alive?"sprite--animate":""}" alt="${a.name}" style="margin:0 auto 4px">

      <div style="font-size:10px;font-weight:700;color:var(--${a.rarity||"rare"});
           white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:4px;font-family:var(--font-title);letter-spacing:0.5px;
           text-shadow: 0 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.6);">
        ${a.name.length>12?a.name.split(" ")[0]:a.name}
      </div>

      <!-- HP Bar -->
      <div class="bar-container bar-container--thin" style="margin-bottom:3px;box-shadow:0 2px 4px rgba(0,0,0,0.8);">
        <div class="bar-fill bar-fill--hp" data-unit-hp="${a.id}" style="width:${t}%"></div>
      </div>
      <div style="font-size:9px;color:var(--text-primary);font-weight:600;text-shadow:0 1px 3px rgba(0,0,0,0.9);" data-unit-hp-text="${a.id}">${a.currentHp}/${a.maxHp}</div>

      ${!i&&a.weakness?`
        <div class="atb-weakness-badge" style="--weak-color:${Kt[a.weakness]||"#F87171"}">
          ${l}
        </div>
      `:""}

      ${i?"":`
        <div class="atb-break-ring" data-break-ring="${a.id}">
          <svg viewBox="0 0 44 44" width="44" height="44">
            <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="3"/>
            <circle cx="22" cy="22" r="18" fill="none" stroke="#FBBF24" stroke-width="3"
               stroke-dasharray="${2*Math.PI*18}" stroke-dashoffset="${2*Math.PI*18*(1-(a.breakGauge||0)/(a.breakMax||100))}"
               transform="rotate(-90 22 22)" style="transition:stroke-dashoffset 0.3s ease"/>
          </svg>
        </div>
      `}
    </div>
  `}function Oi(){if(!y)return;const a=[...y.playerTeam,...y.enemyTeam];for(const t of a){const e=document.querySelector(`[data-unit-id="${t.id}"]`);if(!e)continue;const i=document.querySelector(`[data-unit-hp="${t.id}"]`);if(i){const n=Math.max(0,t.currentHp/t.maxHp*100);i.style.width=n+"%";const l=n<=25?"low":n<=50?"medium":"";i.className=`bar-fill bar-fill--hp ${l}`}const o=document.querySelector(`[data-unit-hp-text="${t.id}"]`);o&&(o.textContent=`${Math.max(0,t.currentHp)}/${t.maxHp}`),t.alive||(e.style.opacity="0.2",e.style.filter="grayscale(1)",e.style.pointerEvents="none");const r=document.querySelector(`[data-break-ring="${t.id}"] circle:nth-child(2)`);if(r){const n=(t.breakGauge||0)/(t.breakMax||100),l=2*Math.PI*18;r.setAttribute("stroke-dashoffset",l*(1-n)),r.setAttribute("stroke",t.isBroken?"#FF6B35":"#FBBF24")}}if(M){const t=y.findUnit(M);if(!t||!t.alive){const e=y.enemyTeam.find(i=>i.alive);M=e?e.id:null}}Di(),Ne(),qe()}function qe(){if(document.querySelectorAll(".selection-ring").forEach(a=>a.remove()),M){const a=document.querySelector(`[data-unit-id="${M}"]`);if(a&&!a.querySelector(".selection-ring")){const t=document.createElement("div");t.className="selection-ring",t.style.left="50%",a.insertBefore(t,a.firstChild)}}}function _i(a){document.querySelectorAll(".atb-active-highlight").forEach(i=>i.remove());const t=document.querySelector(`[data-unit-id="${a}"]`);if(t){const i=document.createElement("div");i.className="atb-active-highlight",t.appendChild(i)}document.querySelectorAll(".atb-hero-portrait").forEach(i=>i.classList.remove("atb-hero-portrait--active"));const e=document.querySelector(`[data-portrait-id="${a}"]`);e&&e.classList.add("atb-hero-portrait--active")}function Ui(a,t,e){const i=document.getElementById("atb-skill-buttons");if(!i)return;i.innerHTML=a.skills.map((r,n)=>{const l=r.speed==="fast"?"atb-skill--fast":r.speed==="heavy"?"atb-skill--heavy":"atb-skill--medium",s=r.speed==="fast"?"⚡ Rapide":r.speed==="heavy"?"🐢 Lourd":"⚖️ Normal",d=((r.recovery||2e3)/1e3).toFixed(1),g=r.element&&me[r.element]||"",p=r.element&&Kt[r.element]||"#F87171",m=r.type==="heal"?"💚 Soin":r.type==="buff"?"✨ Buff":r.type==="magical"?"🔮 Magique":"⚔️ Physique",f=r.power?`${r.power}%`:"—",u=M?y?.findUnit(M):null,v=u&&u.weakness&&r.element===u.weakness;return`
      <button class="atb-skill-btn ${l}" data-skill-idx="${n}" style="position:relative">
        <div class="atb-skill-icon">${r.icon}</div>
        <div class="atb-skill-name" style="${v?"color:#FBBF24":""}">
          ${r.name}
          ${v?'<span style="font-size:8px;color:#FBBF24;margin-left:3px">FAIBLESSE!</span>':""}
        </div>
        <div class="atb-skill-meta">
          <span class="atb-skill-speed">${s}</span>
          ${g?`<span class="atb-skill-element" style="color:${p}">${g}</span>`:""}
        </div>
        <div class="atb-skill-key">${["A","Z","E","R"][n]}</div>

        <!-- Rich Tooltip -->
        <div class="skill-tooltip" style="
          position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);
          min-width:200px;max-width:240px;
          background:rgba(8,6,14,0.98);
          border:1px solid rgba(192,132,252,0.3);
          border-radius:10px;padding:12px 14px;
          pointer-events:none;z-index:100;
          opacity:0;transition:opacity 0.15s ease;
          box-shadow:0 8px 24px rgba(0,0,0,0.8),0 0 20px rgba(192,132,252,0.08);
        ">
          <div style="position:absolute;top:0;left:20%;right:20%;height:1px;background:linear-gradient(90deg,transparent,${p}80,transparent)"></div>
          <div style="font-family:var(--font-title);font-size:12px;font-weight:700;color:${v?"#FBBF24":"#faf5ff"};margin-bottom:6px">
            ${r.icon} ${r.name}
            ${v?' <span style="font-size:9px;color:#FBBF24">⚡FAIBLESSE</span>':""}
          </div>
          <div style="font-size:10px;color:var(--text-secondary);line-height:1.5;margin-bottom:8px">${r.desc||"Pas de description."}</div>
          <div style="display:flex;flex-direction:column;gap:4px">
            <div style="display:flex;justify-content:space-between;font-size:10px">
              <span style="color:var(--text-muted)">Type</span>
              <span style="color:var(--text-secondary)">${m}</span>
            </div>
            ${r.power?`<div style="display:flex;justify-content:space-between;font-size:10px">
              <span style="color:var(--text-muted)">Puissance</span>
              <span style="color:var(--text-bright);font-family:var(--font-stat);font-weight:700">${f}</span>
            </div>`:""}
            ${g?`<div style="display:flex;justify-content:space-between;font-size:10px">
              <span style="color:var(--text-muted)">Élément</span>
              <span style="color:${p}">${g} ${(r.element||"").charAt(0).toUpperCase()+(r.element||"").slice(1)}</span>
            </div>`:""}
            <div style="display:flex;justify-content:space-between;font-size:10px">
              <span style="color:var(--text-muted)">Vitesse</span>
              <span style="color:var(--text-secondary)">${s}</span>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:10px">
              <span style="color:var(--text-muted)">Recovery</span>
              <span style="color:var(--text-secondary);font-family:var(--font-stat)">${d}s</span>
            </div>
          </div>
        </div>

      </button>
    `}).join(""),i.querySelectorAll(".atb-skill-btn").forEach(r=>{const n=r.querySelector(".skill-tooltip");n&&(r.addEventListener("mouseenter",()=>{n.style.opacity="1"}),r.addEventListener("mouseleave",()=>{n.style.opacity="0"}))}),i.querySelectorAll(".atb-skill-btn").forEach(r=>{r.addEventListener("click",()=>{const n=parseInt(r.dataset.skillIdx);ue(n,a)})});const o=document.getElementById("atb-action-panel");o&&o.classList.add("atb-action-panel--active")}function ue(a,t){if(!y?.paused)return;const e=t.skills[a];if(e){if(e.type==="heal"||e.type==="buff")y.executePlayerAction(a,t.id);else if(M)y.executePlayerAction(a,M);else{const i=document.getElementById("atb-combat-log");i&&(i.textContent="🎯 Ciblez un ennemi (Clic Gauche) !");return}oe()}}function oe(){const a=document.getElementById("atb-action-panel");a&&a.classList.remove("atb-action-panel--active"),document.querySelectorAll(".atb-active-highlight").forEach(e=>e.remove()),document.querySelectorAll(".atb-hero-portrait--active").forEach(e=>e.classList.remove("atb-hero-portrait--active"));const t=document.getElementById("atb-skill-buttons");t&&(t.innerHTML='<div style="color:var(--text-muted);font-size:11px;padding:10px;letter-spacing:1px">⏳ ATB en cours...</div>')}function Hi(a){const{actor:t,skill:e,results:i,isPlayer:o}=a,r=document.querySelector(`[data-unit-id="${t.id}"]`);r&&(e.type==="physical"?(r.classList.add(o?"combat-unit--dash-right":"combat-unit--dash-left"),et(t.id,"attack",()=>et(t.id,"idle")),setTimeout(()=>r.classList.remove("combat-unit--dash-right","combat-unit--dash-left"),600)):(r.classList.add("combat-unit--casting"),et(t.id,"attack",()=>et(t.id,"idle")),setTimeout(()=>r.classList.remove("combat-unit--casting"),600))),t.type==="mage"&&e.type!=="heal"&&e.type!=="buff"&&i.hits?.length>0&&Ni(t,i.hits[0].targetId,e),setTimeout(()=>{let n=!1,l=0;if(i.hits&&(i.hits.forEach(s=>{s.isCrit&&(n=!0),l+=s.damage||0,qi(s.targetId,s.isCrit),Te(s.targetId,s.damage,s.isCrit,!1);const d=y?.findUnit(s.targetId);d&&!d.alive&&setTimeout(()=>Gi(s.targetId),300)}),l>0&&o&&(c.updateDailyStat("damage",l),at+=l),n)){const s=document.querySelector(".combat-screen");s&&(s.classList.add("screen--shake"),setTimeout(()=>s.classList.remove("screen--shake"),400))}i.heals&&i.heals.forEach(s=>{Te(s.targetId,s.amount,!1,!0)})},350)}function Ni(a,t,e){const i=document.getElementById("atb-battlefield"),o=document.querySelector(`[data-unit-id="${t}"]`);if(!i||!o)return;const r=i.getBoundingClientRect(),n=o.getBoundingClientRect(),l=n.left-r.left+n.width/2,s=n.top-r.top+n.height/2,d=a.x+55,g=a.y+60,p=e.element&&Kt[e.element]||"#ff6b9d",m=document.createElement("div");m.style.cssText=`position:absolute; left:${d}px; top:${g}px; width:24px; height:24px;
    background:radial-gradient(circle, ${p} 20%, transparent); border-radius:50%;
    box-shadow:0 0 15px ${p}; z-index:20; transition: all 0.45s cubic-bezier(0.4,0,0.2,1);`,i.appendChild(m),requestAnimationFrame(()=>{m.style.left=l+"px",m.style.top=s+"px",m.style.transform="scale(1.5)"}),setTimeout(()=>m.remove(),500)}function qi(a,t){const e=document.querySelector(`[data-unit-id="${a}"]`);if(!e)return;const i=t?"combat-unit--crit":"combat-unit--hit";e.classList.add(i),et(a,"hurt",()=>et(a,"idle")),setTimeout(()=>e.classList.remove(i),500)}function Gi(a){const t=document.querySelector(`[data-unit-id="${a}"]`);t&&(t.classList.add("combat-unit--death"),et(a,"death"))}function Vi(a){const t=document.querySelector(`[data-unit-id="${a}"]`),e=document.getElementById("atb-battlefield");if(!t||!e)return;t.classList.add("combat-unit--break"),setTimeout(()=>t.classList.remove("combat-unit--break"),700);const i=document.createElement("div");i.style.cssText="position:absolute;inset:0;background:rgba(251,191,36,0.15);z-index:30;pointer-events:none;animation:fadeIn 0.1s ease, fadeOut 0.5s ease 0.2s forwards",e.appendChild(i),setTimeout(()=>i.remove(),700);const o=document.querySelector(".combat-screen");o&&(o.classList.add("screen--shake"),setTimeout(()=>o.classList.remove("screen--shake"),400));const r=t.getBoundingClientRect(),n=e.getBoundingClientRect(),l=document.createElement("div");l.style.cssText=`position:absolute;left:${r.left-n.left+r.width/2}px;top:${r.top-n.top-20}px;
    transform:translateX(-50%);font-family:var(--font-stat);font-size:28px;font-weight:900;color:#FBBF24;
    text-shadow:0 0 20px rgba(251,191,36,0.8),0 2px 4px rgba(0,0,0,0.9);
    animation:damageFloat 1.2s ease forwards;pointer-events:none;z-index:35;letter-spacing:3px`,l.textContent="💥 BREAK!",e.appendChild(l),setTimeout(()=>l.remove(),1200)}function Te(a,t,e,i){const o=document.querySelector(`[data-unit-id="${a}"]`);if(!o)return;const r=document.createElement("div");r.className=`damage-number ${i?"damage-number--heal":""} ${e?"damage-number--crit":""}`,r.textContent=`${i?"+":"-"}${t}`,o.appendChild(r),setTimeout(()=>r.remove(),1e3)}function Xi(){if(!y)return;const a=Math.floor(y.elapsedTime/1e3),t=Math.floor(a/60),e=a%60,i=document.getElementById("atb-timer");i&&(i.textContent=`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`);const o=document.getElementById("atb-dmg-total");o&&(o.textContent=`⚔ ${(y.totalDmgDealt||0).toLocaleString()} dmg`)}const Se={enchantement:{emoji:"✨",count:15,speed:4,opacity:.6,sway:40},osiris:{emoji:"🏜️",count:20,speed:3,opacity:.4,sway:60,altEmoji:"💨"},supplice:{emoji:"🫧",count:12,speed:5,opacity:.5,sway:30},maragorh:{emoji:"🍃",count:18,speed:3.5,opacity:.5,sway:50,altEmoji:"🌿"},imotep:{emoji:"🌋",count:15,speed:2.5,opacity:.4,sway:20,altEmoji:"✦"},abysses:{emoji:"🫧",count:20,speed:6,opacity:.5,sway:60,altEmoji:"💎"},citadelle:{emoji:"⚡",count:12,speed:2,opacity:.4,sway:30,altEmoji:"✦"},terre_desolee:{emoji:"🔥",count:25,speed:3,opacity:.5,sway:20,altEmoji:"💀"},nexus:{emoji:"🌌",count:18,speed:5,opacity:.6,sway:50,altEmoji:"💫"}};function Yi(a){const t=document.getElementById("ambient-particles");if(!t)return;const e=Se[a]||Se.enchantement;it&&clearInterval(it);function i(){if(!document.getElementById("ambient-particles")){clearInterval(it);return}const o=document.createElement("div"),r=e.altEmoji&&Math.random()>.6,n=(Math.random()-.5)*2*e.sway,l=(Math.random()-.5)*720,s=Math.random()*100,d=e.speed+Math.random()*3,g=8+Math.random()*12;o.textContent=r?e.altEmoji:e.emoji,o.style.cssText=`position:absolute;left:${s}%;top:-20px;font-size:${g}px;
      --p-sway:${n}px;--p-rot:${l}deg;--p-opacity:${e.opacity};
      animation:ambientFall ${d}s linear forwards;pointer-events:none;z-index:0;`,t.appendChild(o),setTimeout(()=>o.remove(),d*1e3+100)}for(let o=0;o<Math.floor(e.count/3);o++)setTimeout(i,o*200);it=setInterval(i,1e4/e.count)}function Ki(a,t){if(!y)return;if(nt)return Zi();const e=y.winner==="player",i=document.getElementById("victory-overlay");if(i)if(e){const o=y.playerTeam,r=o.reduce((x,$)=>x+$.maxHp,0),l=o.reduce((x,$)=>x+Math.max(0,$.currentHp),0)/r,s=l>=.7?3:l>=.35?2:1,d=c.getLevelFlames(U,Y),g=d===0,p=s>d;let f=(t?Ee.boss:Ee.normal)[s]||0;!g&&!p&&(f=Math.floor(f*.3));const u=Y+1,v=Math.floor(t?u*8+150:s===3?u*5+80:s===2?u*3+50:u*2+30);let k=g?v:Math.floor(v*.3),b=Math.floor(k/3);c.completeLevel(U,Y,s),c.addArchireve(f);const z=c.addTeamXp(k);c.addProfileXp(b),c.recordBattle(!0),c.updateDailyStat("wins",1),c.updateDailyStat("levels",1),c.checkAchievements(),c.getTeamInstances().forEach(x=>{const $=c.state.ownedCharacters.find(S=>S.id===x.id);$&&($.currentHp=void 0)});const R=Math.floor(y.elapsedTime/1e3),B=`${Math.floor(R/60)}:${String(R%60).padStart(2,"0")}`,h=y.totalDmgDealt||at||0;c.recordCombat({zone:U,won:!0,timeSeconds:R,totalDamage:h,flames:s,type:"campaign",isBerserk:O}),O&&c.setBerserkClear(U,Y);const E=document.createElement("div");E.className="victory-banner",E.innerHTML=`
      <div style="font-family:var(--font-title);font-size:44px;letter-spacing:6px;color:#ff6b9d;text-shadow:0 0 30px rgba(255,107,157,0.5);margin-bottom:${O?8:16}px">VICTOIRE</div>
      ${O?'<div style="font-size:13px;color:#FBBF24;letter-spacing:2px;margin-bottom:8px;background:rgba(251,191,36,0.1);padding:4px 16px;border-radius:20px;border:1px solid rgba(251,191,36,0.3)">🔥 MODE BERSERK · RÉCOMPENSES DOUBLÉES</div>':""}
      ${g?'<div style="font-size:12px;color:var(--accent-light);letter-spacing:2px;margin-bottom:8px;background:rgba(232,93,32,0.1);padding:4px 12px;border-radius:20px;border:1px solid rgba(232,93,32,0.3)">🆕 PREMIÈRE VICTOIRE !</div>':""}
      ${p&&!g?'<div style="font-size:12px;color:var(--warning);letter-spacing:2px;margin-bottom:8px">⬆️ AMÉLIORATION !</div>':""}
      <div style="font-size:10px;color:var(--text-muted);margin-bottom:12px">⏱ ${B} · ⚔ ${h.toLocaleString()} dégâts</div>
      <div style="display:flex;justify-content:center;gap:14px;margin:16px 0 24px">
        ${Array.from({length:3},(x,$)=>`<span style="font-size:36px;filter:drop-shadow(0 0 12px #E85D20);transition:all 0.3s ease;${$>=s?"opacity:0.18;filter:grayscale(1)":""}">${t?"🔥":"🍃"}</span>`).join("")}
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:10px;padding:16px 24px;background:rgba(0,0,0,0.25);border-radius:var(--radius-xl);border:1px solid rgba(255,255,255,0.06);margin-bottom:8px">
        <div style="font-size:16px;color:var(--star);letter-spacing:2px;font-weight:700">+${f} ⭐</div>
        <div style="font-size:12px;color:var(--accent)">+${k} XP à l'équipe</div>
        ${z.some(x=>x.leveled)?'<div style="font-size:11px;color:var(--legendaire);font-weight:700">⬆️ Level Up !</div>':""}
        ${!g&&!p?'<div style="font-size:9px;color:var(--text-muted)">Récompenses réduites (déjà complété)</div>':""}
      </div>
    `,i.appendChild(E),z.some(x=>x.leveled)&&setTimeout(()=>Wi(z),700),setTimeout(()=>{const x=document.createElement("div");x.style.cssText="position:absolute;bottom:60px;left:50%;transform:translateX(-50%);z-index:50;display:flex;gap:12px;animation:fadeIn 0.5s ease";const $=Y+1,S=_.find(ct=>ct.id===U),tt=S&&$<S.levels;x.innerHTML=`
        ${tt?'<button id="next-level-btn" class="btn btn--primary" style="border-radius:var(--radius-xl);padding:14px 28px;font-size:13px;letter-spacing:1px">▶ Niveau suivant</button>':""}
        <button id="back-campaign-btn" class="btn btn--ghost" style="border-radius:var(--radius-xl);padding:14px 24px;font-size:12px">◀ Retour</button>
      `,i.appendChild(x),document.getElementById("next-level-btn")?.addEventListener("click",()=>{M=null,Et({zone:U,level:$,berserk:O})}),document.getElementById("back-campaign-btn")?.addEventListener("click",()=>{ot(),w.navigate("campaign")})},1500)}else{const o=Math.floor((y?.elapsedTime||0)/1e3);c.recordCombat({zone:U,won:!1,timeSeconds:o,totalDamage:at,flames:0,type:"campaign",isBerserk:O}),c.recordBattle(!1),i.innerHTML=`
      <div style="position:absolute; inset:0; background:rgba(0,0,0,0.8); display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:100; animation: fadeIn 0.5s ease">
        <div style="font-family:var(--font-title); font-size:48px; color:var(--danger); margin-bottom:20px; text-shadow:0 0 20px rgba(220,38,38,0.3)">DÉFAITE</div>
        <div style="font-size:10px;color:var(--text-muted);margin-bottom:6px">⏱ ${o}s · ⚔ ${at.toLocaleString()} dégâts</div>
        <div style="font-size:11px;color:rgba(255,255,255,0.4);margin-bottom:24px">Reconstruis ta stratégie et reviens plus fort !</div>
        <div style="display:flex; gap:15px">
          <button class="btn btn--primary" id="retry-btn">🔄 Réessayer</button>
          <button class="btn btn--ghost" id="back-btn">◀ Retour</button>
        </div>
      </div>
    `,document.getElementById("retry-btn").onclick=()=>Et({zone:U,level:Y,berserk:O}),document.getElementById("back-btn").onclick=()=>{ot(),w.navigate("campaign")}}}function Wi(a){const t=a.filter(r=>r.leveled);if(!t.length)return;const e=document.createElement("div");e.style.cssText=`
    position:fixed;inset:0;z-index:999;
    background:rgba(0,0,0,0.75);backdrop-filter:blur(4px);
    display:flex;align-items:center;justify-content:center;
    animation:fadeIn 0.3s ease;
    cursor:pointer;
  `;const i=t.map(r=>`
    <div style="
      text-align:center;padding:24px 32px;
      background:linear-gradient(135deg,rgba(200,155,60,0.12),rgba(20,12,6,0.98));
      border:1px solid rgba(200,155,60,0.4);
      border-radius:12px;
      box-shadow:0 0 40px rgba(200,155,60,0.2),0 0 80px rgba(200,155,60,0.05);
      animation:levelUpPop 0.5s cubic-bezier(0.34,1.56,0.64,1);
      min-width:180px;
    ">
      <div style="font-size:40px;margin-bottom:8px;filter:drop-shadow(0 0 20px rgba(200,155,60,0.6))">${r.icon||"⭐"}</div>
      <div style="font-family:var(--font-title);font-size:11px;letter-spacing:3px;color:var(--text-muted);margin-bottom:4px">LEVEL UP !</div>
      <div style="font-family:var(--font-title);font-size:18px;font-weight:700;color:var(--text-bright);margin-bottom:8px">${r.name||"Héros"}</div>
      <div style="font-family:var(--font-stat);font-size:28px;font-weight:700;
        background:linear-gradient(135deg,#C8963C,#F0D060);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
        filter:drop-shadow(0 0 10px rgba(200,155,60,0.6));
      ">NIV. ${r.newLevel||"?"}</div>
    </div>
  `).join("");e.innerHTML=`
    <div style="display:flex;flex-direction:column;align-items:center;gap:24px">
      <div style="font-family:var(--font-title);font-size:24px;letter-spacing:6px;color:#FBBF24;
        text-shadow:0 0 30px rgba(251,191,36,0.5);animation:levelUpPop 0.4s ease">
        ⬆ NIVEAU SUPERIEUR !
      </div>
      <div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center">
        ${i}
      </div>
      <div style="font-size:10px;color:rgba(255,255,255,0.3);letter-spacing:2px;margin-top:8px">Cliquez pour fermer</div>
    </div>
    <style>
      @keyframes levelUpPop {
        from {opacity:0;transform:scale(0.8) translateY(20px)}
        to {opacity:1;transform:scale(1) translateY(0)}
      }
    </style>
  `,document.body.appendChild(e);const o=setTimeout(()=>e.remove(),3e3);e.addEventListener("click",()=>{clearTimeout(o),e.remove()})}function Zi(a,t){const e=y.winner==="player",i=document.getElementById("victory-overlay");if(i){if(c.endTowerCombat(e,y.playerTeam),e){const o=c.state.tower.currentFloor-1,r=15+o*5;c.addArchireve(r);const n=o>0&&o%10===0,l=document.createElement("div");l.className="victory-banner",l.innerHTML=`
      <div style="font-family:var(--font-title);font-size:36px;color:#bb86fc;margin-bottom:12px;text-shadow:0 0 20px rgba(187,134,252,0.5)">ÉTAGE ${o} PURIFIÉ</div>
      <div style="font-size:12px;color:var(--text-muted);margin-bottom:16px">L'ascension continue...</div>
      <div style="padding:12px 20px;background:rgba(200,155,60,0.1);border-radius:10px;border:1px solid rgba(200,155,60,0.2)">
        <span style="font-size:14px;color:var(--star)">+${r} ⭐</span>
      </div>
    `,i.appendChild(l),setTimeout(n?()=>{Qi(o,()=>{Ae()})}:()=>Ae(),1e3)}else i.innerHTML=`
      <div class="victory-banner" style="background:rgba(220,38,38,0.9);box-shadow:0 10px 40px rgba(220,38,38,0.5)">
        CHUTE LORS DE L'ASCENSION
      </div>
      <div style="margin-top:20px;font-size:14px;color:white;text-align:center">Vos héros ont péri à l'étage ${c.state.tower.currentFloor}.</div>
      <button id="victory-close" style="margin-top:40px;padding:12px 32px;background:white;color:black;border:none;border-radius:30px;font-weight:bold;cursor:pointer;transition:transform 0.2s">REMPLACER L'ÉQUIPE</button>
    `,i.classList.add("victory-overlay--active"),document.getElementById("victory-close")?.addEventListener("click",()=>{ot(),w.navigate("tower")});e&&!isBuffFloor&&i.classList.add("victory-overlay--active")}}function Ae(){const a=document.getElementById("victory-overlay");if(!a)return;a.classList.add("victory-overlay--active");const t=document.createElement("div");t.style.cssText="position:absolute;bottom:60px;left:50%;transform:translateX(-50%);z-index:50;display:flex;gap:12px;animation:fadeIn 0.5s ease";const i=c.getTowerTeamInstances().filter(o=>o.alive).length;t.innerHTML=(i>0?"<button id='next-level-btn' class='btn btn--primary' style='border-radius:var(--radius-xl);padding:14px 28px;font-size:13px;letter-spacing:1px;background:#bb86fc;color:#000;border:none'>▶ Poursuivre l'ascension</button>":"<div style='padding:14px;color:red;font-size:12px'>Équipe décimée ! Repliez-vous.</div>")+"<button id='back-campaign-btn' class='btn btn--ghost' style='border-radius:var(--radius-xl);padding:14px 24px;font-size:12px'>◀ Se Replier au Hub</button>",a.appendChild(t),document.getElementById("next-level-btn")?.addEventListener("click",()=>{M=null,a.classList.remove("victory-overlay--active"),a.innerHTML="",Et({isTower:!0,level:c.state.tower.currentFloor-1})}),document.getElementById("back-campaign-btn")?.addEventListener("click",()=>{ot(),w.navigate("tower")})}function Qi(a,t){const e=document.getElementById("victory-overlay"),i=document.createElement("div");i.style.cssText=`
    position:absolute;inset:0;background:rgba(0,0,0,0.85);z-index:100;
    display:flex;flex-direction:column;align-items:center;justify-content:center;
    animation:fadeIn 0.3s ease;backdrop-filter:blur(8px);
  `;const r=[{id:"heal",type:"heal",name:"Repos du Guerrier",desc:"Soigne toute la Box de 40% de leurs PV max.",icon:"💚"},{id:"fury",type:"fury",name:"Furie Sanguinaire",desc:"+15% Dégâts pour chaque membre mort.",icon:"🩸"},{id:"atk_boost",type:"stat_boost",stat:"atk",amount:.2,name:"Bénédiction du Fer",desc:"Attaque physique +20%",icon:"⚔️"},{id:"mag_boost",type:"stat_boost",stat:"magAtk",amount:.2,name:"Illumination",desc:"Attaque magique +20%",icon:"🔮"},{id:"def_boost",type:"stat_boost",stat:"def",amount:.3,name:"Muraille d'Égide",desc:"Défense +30%",icon:"🛡️"}].sort(()=>.5-Math.random()).slice(0,3);i.innerHTML=`
    <div style="font-family:var(--font-title);font-size:28px;color:#bb86fc;margin-bottom:10px;text-shadow:0 0 15px rgba(187,134,252,0.5)">BÉNÉDICTION DU PALIER ${a}</div>
    <div style="font-size:13px;color:rgba(255,255,255,0.7);margin-bottom:30px">Choisissez un pouvoir pour le reste de votre ascension.</div>
    <div style="display:flex;gap:20px">
      ${r.map((l,s)=>`
        <button class="tower-buff-card" data-idx="${s}" style="
          width:180px;height:240px;background:rgba(20,15,30,0.9);
          border:1px solid rgba(187,134,252,0.3);border-radius:12px;
          display:flex;flex-direction:column;align-items:center;justify-content:center;
          padding:20px;cursor:pointer;transition:all 0.2s;
          box-shadow:0 4px 15px rgba(0,0,0,0.5);
        ">
          <div style="font-size:40px;filter:drop-shadow(0 0 10px rgba(255,255,255,0.3));margin-bottom:16px">${l.icon}</div>
          <div style="font-family:var(--font-ui);font-size:14px;color:#fff;font-weight:700;margin-bottom:10px;text-align:center">${l.name}</div>
          <div style="font-size:11px;color:rgba(255,255,255,0.6);text-align:center;line-height:1.4">${l.desc}</div>
        </button>
      `).join("")}
    </div>
  `,e.appendChild(i),i.querySelectorAll(".tower-buff-card").forEach(l=>{l.addEventListener("mouseenter",()=>{l.style.transform="translateY(-10px)",l.style.borderColor="#bb86fc",l.style.boxShadow="0 10px 30px rgba(187,134,252,0.2)"}),l.addEventListener("mouseleave",()=>{l.style.transform="translateY(0)",l.style.borderColor="rgba(187,134,252,0.3)",l.style.boxShadow="0 4px 15px rgba(0,0,0,0.5)"}),l.addEventListener("click",()=>{const s=r[parseInt(l.dataset.idx)];s.type==="heal"?(Object.values(c.state.tower.boxState).forEach(d=>{d.dead||(d.hp=Math.min(d.maxHp,d.hp+Math.floor(d.maxHp*.4)))}),c.save()):(c.state.tower.activeBuffs.push(s),c.save()),i.remove(),t()})})}const Qt=75,Jt=15;function re(){const a=document.getElementById("app"),t=c.state,e=t.pityCount||0,i=t.pityEpic||0,o=t.scories||0,r=Math.min(100,Math.round(e/Qt*100)),n=Math.min(100,Math.round(i/Jt*100)),l=t.archireve>=rt.single,s=t.archireve>=rt.multi;a.innerHTML=`
    <div class="screen" style="
      background:var(--bg-primary);display:flex;flex-direction:column;
      overflow-y:auto;padding-bottom:80px;
      background-image:
        radial-gradient(ellipse at 50% 90%,rgba(0,119,182,0.12),transparent 55%),
        radial-gradient(ellipse at 80% 20%,rgba(124,58,237,0.05),transparent 40%)">

      <!-- Topbar -->
      <div class="topbar" style="width:100%;position:relative;z-index:10;flex-shrink:0">
        <button class="topbar__back" id="back-btn">&#9664;</button>
        <div class="topbar__title" style="letter-spacing:4px">PORTAIL D'INVOCATION</div>
        <div class="currency">
          <span class="currency__icon" style="font-family:var(--font-stat);font-weight:700">◆</span>
          <span id="star-count">${t.archireve.toLocaleString()}</span>
        </div>
      </div>

      <!-- Dual Portals -->
      <div style="display:flex;gap:32px;justify-content:center;padding:32px 48px;flex-wrap:wrap">

        <!-- ═══ PORTAIL HÉROS ═══ -->
        <div style="flex:1;min-width:380px;max-width:480px;display:flex;flex-direction:column;align-items:center;
          background:rgba(10,6,3,0.6);border:1px solid rgba(200,155,60,0.08);border-radius:16px;padding:28px 24px;position:relative;overflow:hidden">
          
          <!-- Glow accent -->
          <div style="position:absolute;top:0;left:20%;right:20%;height:2px;background:linear-gradient(90deg,transparent,var(--legendaire),transparent)"></div>
          <div style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:200px;height:60px;background:radial-gradient(ellipse,rgba(200,155,60,0.12),transparent 70%);filter:blur(15px);pointer-events:none"></div>

        <!-- Portal Animation -->
          <div class="forge-portal" style="margin:0 0 16px;width:140px;height:140px">
            <div class="forge-portal-ring forge-portal-ring--1"></div>
            <div class="forge-portal-ring forge-portal-ring--2"></div>
            <div class="forge-portal-core" style="width:50px;height:50px">
              <div style="font-size:28px;color:#ff6b9d;filter:drop-shadow(0 0 12px rgba(255,107,157,0.7))">桜</div>
            </div>
          </div>

          <div style="font-family:var(--font-title);font-size:14px;letter-spacing:4px;color:var(--accent-light);margin-bottom:4px">HÉROS</div>
          <div style="font-size:10px;color:var(--text-muted);letter-spacing:2px;margin-bottom:20px">— INVOQUER DES PERSONNAGES —</div>

          <!-- Buttons -->
          <div style="display:flex;flex-direction:column;gap:10px;width:100%">
            <button class="btn btn--primary btn--full" id="char-pull-single" ${l?"":"disabled"}
              style="padding:14px;display:flex;flex-direction:column;align-items:center;gap:3px">
              <span style="font-size:12px;letter-spacing:2px">FORGER UN LIEN</span>
              <span style="font-size:9px;opacity:0.7;letter-spacing:1px">◆ ${rt.single.toLocaleString()} · ×1 Héros</span>
            </button>
            <button class="btn btn--star btn--full" id="char-pull-multi" ${s?"":"disabled"}
              style="padding:14px;display:flex;flex-direction:column;align-items:center;gap:3px">
              <span style="font-size:12px;letter-spacing:2px">BRISER LE SCEAU</span>
              <span style="font-size:9px;opacity:0.7;letter-spacing:1px">◆ ${rt.multi.toLocaleString()} · ×10 — Epique+ garanti</span>
            </button>
          </div>
        </div>

        <!-- ═══ PORTAIL ITEMS ═══ -->
        <div style="flex:1;min-width:380px;max-width:480px;display:flex;flex-direction:column;align-items:center;
          background:rgba(10,6,3,0.6);border:1px solid rgba(74,158,255,0.08);border-radius:16px;padding:28px 24px;position:relative;overflow:hidden">

          <!-- Glow accent -->
          <div style="position:absolute;top:0;left:20%;right:20%;height:2px;background:linear-gradient(90deg,transparent,#4a9eff,transparent)"></div>
          <div style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:200px;height:60px;background:radial-gradient(ellipse,rgba(74,158,255,0.12),transparent 70%);filter:blur(15px);pointer-events:none"></div>

          <!-- Portal Animation -->
          <div class="forge-portal" style="margin:0 0 16px;width:140px;height:140px">
            <div class="forge-portal-ring forge-portal-ring--1" style="border-color:rgba(74,158,255,0.2)"></div>
            <div class="forge-portal-ring forge-portal-ring--2" style="border-color:rgba(74,158,255,0.15)"></div>
            <div class="forge-portal-core" style="width:50px;height:50px;background:radial-gradient(circle,rgba(74,158,255,0.15),rgba(74,158,255,0.03))">
              <div style="font-size:28px">📦</div>
            </div>
          </div>

          <div style="font-family:var(--font-title);font-size:14px;letter-spacing:4px;color:#4a9eff;margin-bottom:4px">ITEMS</div>
          <div style="font-size:10px;color:var(--text-muted);letter-spacing:2px;margin-bottom:20px">— INVOQUER DES ÉQUIPEMENTS —</div>

          <!-- Buttons -->
          <div style="display:flex;flex-direction:column;gap:10px;width:100%">
            <button class="btn btn--full" id="item-pull-single" ${l?"":"disabled"}
              style="padding:14px;display:flex;flex-direction:column;align-items:center;gap:3px;
                background:linear-gradient(135deg,rgba(59,130,246,0.3),rgba(59,130,246,0.15));
                border:1px solid rgba(59,130,246,0.3);color:var(--text-primary)">
              <span style="font-size:12px;letter-spacing:2px">FORGER UN OBJET</span>
              <span style="font-size:9px;opacity:0.7;letter-spacing:1px">◆ ${rt.single.toLocaleString()} · ×1 Item</span>
            </button>
            <button class="btn btn--full" id="item-pull-multi" ${s?"":"disabled"}
              style="padding:14px;display:flex;flex-direction:column;align-items:center;gap:3px;
                background:linear-gradient(135deg,rgba(59,130,246,0.4),rgba(147,51,234,0.2));
                border:1px solid rgba(59,130,246,0.35);color:var(--text-primary)">
              <span style="font-size:12px;letter-spacing:2px">OUVRIR LE COFFRE</span>
              <span style="font-size:9px;opacity:0.7;letter-spacing:1px">◆ ${rt.multi.toLocaleString()} · ×10 — Epique+ garanti</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom section: Pity + Rates -->
      <div style="display:flex;gap:24px;justify-content:center;padding:0 48px;flex-wrap:wrap;max-width:1020px;margin:0 auto;width:100%">

        <!-- Pity & Scories -->
        <div style="flex:1;min-width:280px;max-width:480px">
          <!-- Pity Légendaire -->
          <div class="pity-container" style="margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
              <div style="font-family:var(--font-ui);font-size:10px;font-weight:700;letter-spacing:2px;color:var(--legendaire)">PITY LEGENDAIRE</div>
              <div style="font-family:var(--font-stat);font-size:12px;color:var(--legendaire)">${e} / ${Qt}</div>
            </div>
            <div class="pity-bar-track"><div class="pity-bar-fill" style="width:${r}%"></div></div>
            <div style="font-size:9px;color:var(--text-muted);letter-spacing:1px">${Qt-e} invocations avant un Legendaire garanti</div>
          </div>
          <!-- Pity Épique -->
          <div class="pity-container" style="margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
              <div style="font-family:var(--font-ui);font-size:10px;font-weight:700;letter-spacing:2px;color:var(--epique)">PITY EPIQUE</div>
              <div style="font-family:var(--font-stat);font-size:12px;color:var(--epique)">${i} / ${Jt}</div>
            </div>
            <div class="pity-bar-track"><div class="pity-bar-fill" style="width:${n}%;background:linear-gradient(90deg,rgba(147,51,234,0.4),var(--epique))"></div></div>
            <div style="font-size:9px;color:var(--text-muted);letter-spacing:1px">${Jt-i} invocations avant un Epique garanti</div>
          </div>
          <!-- Scories -->
          <div class="glass" style="padding:14px 18px;border-radius:12px;display:flex;align-items:center;justify-content:space-between">
            <div>
              <div style="font-family:var(--font-ui);font-size:10px;font-weight:700;letter-spacing:2px;color:var(--text-muted);margin-bottom:4px">SCORIES DE FORGE</div>
              <div style="font-family:var(--font-stat);font-size:22px;font-weight:700;color:var(--star)">${o.toLocaleString()}</div>
            </div>
            <div style="text-align:right;font-size:10px;color:var(--text-muted);letter-spacing:1px">Chaque invocation<br>génère 10 Scories</div>
          </div>
        </div>

        <!-- Drop Rates -->
        <div class="glass" style="flex:1;min-width:280px;max-width:480px;padding:20px;border-radius:16px">
          <div style="font-family:var(--font-title);font-size:10px;letter-spacing:3px;color:var(--text-muted);margin-bottom:12px">— TAUX DE DROP (identiques) —</div>
          <div style="display:flex;flex-direction:column;gap:8px">
            ${[{name:"Rare",color:"var(--rare)",pct:Tt.rare},{name:"Epique",color:"var(--epique)",pct:Tt.epique},{name:"Legendaire",color:"var(--legendaire)",pct:Tt.legendaire},{name:"ULTIMATE",color:"var(--ultimate)",pct:Tt.ultimate}].map(d=>`
              <div style="display:flex;align-items:center;gap:8px">
                <div style="width:80px;font-family:var(--font-ui);font-size:10px;font-weight:700;color:${d.color};letter-spacing:1px">${d.name.toUpperCase()}</div>
                <div style="flex:1;height:6px;background:rgba(0,0,0,0.4);border-radius:3px;overflow:hidden;border:1px solid rgba(255,255,255,0.04)">
                  <div style="height:100%;width:${Math.min(d.pct*5,100)}%;background:${d.color};border-radius:3px;opacity:0.9"></div>
                </div>
                <div style="width:36px;text-align:right;font-family:var(--font-stat);font-size:11px;color:var(--text-secondary)">${d.pct}%</div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </div>
  `,document.getElementById("back-btn").addEventListener("click",()=>w.navigate("home")),document.getElementById("char-pull-single").addEventListener("click",()=>{const d=ni();d.success?(Ct(1,d.results[0]?.rarity),c.updateDailyStat("pulls",1),Bt(d.results)):Mt(d.error,"error")}),document.getElementById("char-pull-multi").addEventListener("click",()=>{const d=si();d.success?(Ct(10,null,d.characters.map(g=>g.rarity)),c.updateDailyStat("pulls",10),Bt(d.characters)):Mt(d.error,"error")}),document.getElementById("item-pull-single").addEventListener("click",()=>{const d=li();d.success?(Ct(1,d.results[0]?.rarity),c.updateDailyStat("pulls",1),Bt(d.results)):Mt(d.error,"error")}),document.getElementById("item-pull-multi").addEventListener("click",()=>{const d=di();d.success?(Ct(10,null,d.characters.map(g=>g.rarity)),c.updateDailyStat("pulls",10),Bt(d.characters)):Mt(d.error,"error")})}function Ct(a,t,e){const i=c.state;i.pityCount=(i.pityCount||0)+a,i.pityEpic=(i.pityEpic||0)+a,i.scories=(i.scories||0)+a*10;const o=e||(t?[t]:[]);for(const r of o)r==="legendaire"||r==="ultimate"?(i.pityCount=0,i.pityEpic=0):r==="epique"&&(i.pityEpic=0);c.save?.()}function Bt(a){const t=document.createElement("div");t.className="modal-overlay",t.style.cssText="flex-direction:column;gap:0;background:rgba(0,0,0,0.97)";let e=0;const i={rare:{color:"#4a9eff",glow:"rgba(74,158,255,0.4)",name:"RARE"},epique:{color:"#c44aff",glow:"rgba(196,74,255,0.5)",name:"EPIQUE"},legendaire:{color:"#ffb84a",glow:"rgba(255,184,74,0.5)",name:"LEGENDAIRE"},ultimate:{color:"#ff4a6a",glow:"rgba(255,74,106,0.6)",name:"ULTIMATE"}},o={rare:0,epique:1,legendaire:2,ultimate:3};function r(l){const s=a[l],d=s.rarity||"rare",g=i[d]||i.rare,p=o[d]||0;t.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;position:relative;cursor:pointer" id="forge-phase">
        <div style="position:absolute;inset:0;opacity:0;background:radial-gradient(circle, ${g.glow}, transparent 70%);animation:gachaFlash 2s ease forwards"></div>
        <div style="position:relative;width:160px;height:160px;display:flex;align-items:center;justify-content:center">
          <div style="position:absolute;inset:0;border-radius:50%;border:2px solid ${g.color}88;animation:portalRotate 6s linear infinite;box-shadow:0 0 25px ${g.glow}"></div>
          <div style="position:absolute;inset:16px;border-radius:50%;border:1px dashed ${g.color}55;animation:portalRotate 4s linear infinite reverse"></div>
          <div style="font-size:64px;filter:drop-shadow(0 0 30px ${g.glow});animation:crystalGlow 1.5s ease infinite alternate;color:${g.color}">${s.type==="item"?"📦":"&#9874;"}</div>
          <div style="position:absolute;inset:-10px;border-radius:50%;border:2px solid ${g.color};opacity:0;animation:ringExpand 2s 0.5s ease forwards"></div>
          <div style="position:absolute;inset:-30px;border-radius:50%;border:2px solid ${g.color}88;opacity:0;animation:ringExpand 2s 0.9s ease forwards"></div>
          ${p>=2?`<div style="position:absolute;inset:-55px;border-radius:50%;border:2px solid ${g.color}55;opacity:0;animation:ringExpand 2s 1.3s ease forwards"></div>`:""}
        </div>
        <div id="forge-sparks" style="position:absolute;inset:0;pointer-events:none;overflow:hidden"></div>
        <div style="position:absolute;bottom:40px;font-family:var(--font-ui);font-size:11px;color:rgba(255,255,255,0.3);letter-spacing:3px">
          CLIQUEZ POUR FORGER — ${l+1}/${a.length}
        </div>
      </div>
      <style>
        @keyframes crystalGlow { from{filter:drop-shadow(0 0 20px ${g.glow}) brightness(1)} to{filter:drop-shadow(0 0 50px ${g.glow}) brightness(1.4)} }
        @keyframes ringExpand { 0%{transform:scale(0.5);opacity:0.9} 100%{transform:scale(1.6);opacity:0} }
        @keyframes gachaFlash { 0%{opacity:0} 60%{opacity:0} 70%{opacity:0.6} 85%{opacity:0.1} 100%{opacity:0.3} }
      </style>
    `;const m=document.getElementById("forge-sparks");if(m){for(let u=0;u<30;u++)setTimeout(()=>{const v=document.createElement("div"),k=Math.random()*Math.PI*2,b=80+Math.random()*200;v.style.cssText="position:absolute;left:50%;top:50%;width:"+(2+Math.random()*3)+"px;height:"+(4+Math.random()*8)+"px;background:linear-gradient("+g.color+",transparent);border-radius:50% 50% 0 0;opacity:0;transform-origin:bottom center;animation:particleBurst 1.2s "+(.6+Math.random()*.6)+"s ease forwards;--dx:"+Math.cos(k)*b+"px;--dy:"+Math.sin(k)*b+"px;",m.appendChild(v)},u*40);const f=document.createElement("style");f.textContent="@keyframes particleBurst { 0%{transform:translate(-50%,-50%) scale(0);opacity:1} 100%{transform:translate(calc(-50% + var(--dx)),calc(-50% + var(--dy))) scale(0.2);opacity:0} }",t.appendChild(f)}document.getElementById("forge-phase").addEventListener("click",()=>n(l))}function n(l){const s=a[l],d=s.type==="item",g=s.rarity||"rare",p=i[g]||i.rare;let m,f,u,v,k;if(d&&s.item){const b=s.item,z=pt[b.slot]||{name:b.slot,icon:""};m=b.name,f=b.desc||"",u='<div style="font-size:72px;margin:16px 0;filter:drop-shadow(0 0 25px '+p.glow+')">'+(b.icon||"📦")+"</div>";const R=Object.entries(b.stats||{}).map(B=>B[0].toUpperCase()+" +"+B[1]).join(" · ");v='<span class="type-badge" style="background:rgba(74,158,255,0.15);color:#4a9eff">'+z.icon+" "+z.name+'</span><span class="rarity-badge rarity-badge--'+g+'">'+g.toUpperCase()+"</span>",f+='<br><span style="color:var(--accent);font-size:10px;letter-spacing:1px">'+R+"</span>",k="📦 ITEM"}else{const b=s.character;m=b.name,f=b.desc,u='<img src="'+C(b.type)+'" class="sprite sprite--xxl" alt="'+b.name+'" style="filter:drop-shadow(0 0 25px '+p.glow+') drop-shadow(0 4px 8px rgba(0,0,0,0.5));animation:pullRevealSprite 0.6s ease">',v='<span class="type-badge type-badge--'+b.type+'">'+b.type.toUpperCase()+'</span><span class="rarity-badge rarity-badge--'+b.rarity+'">'+b.rarity.toUpperCase()+"</span>",k="⚔️ HÉROS"}t.innerHTML='<div class="modal" style="text-align:center;border-color:'+p.color+";box-shadow:0 0 60px "+p.glow+';min-width:320px;max-width:380px;border-radius:var(--radius-xl);overflow:hidden;position:relative;padding:0;animation:revealSlam 0.5s cubic-bezier(0.2,1.5,0.3,1)"><div style="height:3px;background:linear-gradient(90deg,transparent,'+p.color+',transparent)"></div><div style="padding:var(--space-xl) var(--space-lg)"><div style="font-family:var(--font-stat);font-size:9px;color:'+p.color+';letter-spacing:3px;margin-bottom:4px;opacity:0.7">'+k+'</div><div style="font-family:var(--font-title);font-size:11px;color:'+p.color+";letter-spacing:4px;margin-bottom:var(--space-sm);text-shadow:0 0 15px "+p.glow+'">◆ '+p.name+" ◆</div>"+(s.isNew?'<div style="color:var(--success);font-size:11px;font-weight:700;margin-bottom:var(--space-xs);letter-spacing:2px">NOUVEAU !</div>':"")+(s.levelUp?'<div style="color:var(--warning);font-size:11px;font-weight:700;margin-bottom:var(--space-xs);letter-spacing:2px">NIVEAU + !</div>':"")+'<div style="position:relative;margin:var(--space-md) auto;width:fit-content">'+u+'<div style="position:absolute;inset:-20px;background:radial-gradient(circle,'+p.glow+',transparent 60%);z-index:-1;filter:blur(20px)"></div></div><div style="font-family:var(--font-title);font-size:18px;color:'+p.color+";font-weight:800;margin:var(--space-md) 0 var(--space-sm);letter-spacing:1px;text-shadow:0 0 10px "+p.glow+'">'+m+'</div><div style="display:flex;justify-content:center;gap:var(--space-sm);margin-bottom:var(--space-sm)">'+v+'</div><p style="font-size:11px;color:var(--text-secondary);line-height:1.6;margin-bottom:var(--space-lg)">'+f+'</p><div style="font-size:10px;color:var(--text-muted);margin-bottom:var(--space-md);letter-spacing:1px">'+(l+1)+" / "+a.length+'</div><button class="btn btn--primary btn--full" id="pull-next" style="border-radius:var(--radius-lg)">'+(l<a.length-1?"SUIVANT":"TERMINER")+"</button>"+(a.length>1&&l<a.length-1?'<button class="btn btn--ghost btn--full btn--sm" id="skip-all" style="margin-top:var(--space-xs);font-size:9px;letter-spacing:2px">PASSER TOUT</button>':"")+"</div></div><style>@keyframes pullRevealSprite { 0%{transform:scale(0.2) rotate(-15deg);opacity:0;filter:brightness(3)} 50%{transform:scale(1.15) rotate(3deg)} 100%{transform:scale(1) rotate(0);opacity:1} }@keyframes revealSlam { 0%{transform:scale(0.5) translateY(30px);opacity:0} 60%{transform:scale(1.05) translateY(-5px)} 100%{transform:scale(1) translateY(0);opacity:1} }</style>",document.getElementById("pull-next").addEventListener("click",()=>{l<a.length-1?(e++,r(e)):(t.remove(),re())}),document.getElementById("skip-all")?.addEventListener("click",()=>{t.remove(),re()})}document.body.appendChild(t),r(0)}function Mt(a,t="warning"){const e=document.createElement("div");e.className="toast toast--"+t,e.textContent=a,document.body.appendChild(e),setTimeout(()=>e.remove(),3e3)}let Pt="all",Dt="all",ut="rarity";const st={guerrier:"#f87171",mage:"#c084fc",arche:"#86efac",assassin:"#ff6b9d"},yt={hp:"HP",atk:"ATK",def:"DEF",spd:"SPD",magAtk:"MAG",magDef:"RES"},Ce=["ultimate","legendaire","epique","rare"];function q(){const a=document.getElementById("app"),t=c.state,e=t.team,i=c.getTeamInstances(),o=c.getOwnedInstances();let r=[...o];Pt!=="all"&&(r=r.filter(s=>s.type===Pt)),Dt!=="all"&&(r=r.filter(s=>s.rarity===Dt)),r.sort((s,d)=>ut==="rarity"?Ce.indexOf(s.rarity||"rare")-Ce.indexOf(d.rarity||"rare"):ut==="level"?d.level-s.level:ut==="atk"?d.stats.atk+d.stats.magAtk-(s.stats.atk+s.stats.magAtk):0);const n=ia(i),l=i.reduce((s,d)=>s+Object.values(d.stats).reduce((g,p)=>g+p,0),0);a.innerHTML=`
    <div class="screen" style="background:var(--bg-primary);overflow:hidden;display:flex;flex-direction:column;">

      <!-- Topbar -->
      <div style="
        display:flex;align-items:center;justify-content:space-between;
        padding:0 32px;height:56px;flex-shrink:0;
        background:rgba(8,5,3,0.95);
        border-bottom:1px solid rgba(200,155,60,0.08);
        z-index:10;
      ">
        <button class="topbar__back" id="back-btn">&#9664;</button>
        <div style="font-family:var(--font-title);font-size:15px;font-weight:700;color:var(--text-bright);letter-spacing:4px">GESTION D'EQUIPE</div>
        <div style="display:flex;align-items:center;gap:8px;padding:8px 18px;background:rgba(200,155,60,0.06);border:1px solid rgba(200,155,60,0.15);border-radius:6px">
          <span style="font-family:var(--font-stat);font-size:11px;color:var(--star);font-weight:700">◆</span>
          <span style="font-family:var(--font-stat);font-size:14px;font-weight:700;color:var(--text-bright);letter-spacing:1px">${t.archireve.toLocaleString()}</span>
        </div>
      </div>

      <!-- Main two-panel layout -->
      <div style="flex:1;display:grid;grid-template-columns:440px 1fr;gap:0;overflow:hidden;">

        <!-- ═══ LEFT PANEL: Formation & Synergy ═══ -->
        <div style="
          background:rgba(10,6,3,0.95);
          border-right:1px solid rgba(200,155,60,0.06);
          display:flex;flex-direction:column;
          overflow-y:auto;
          scrollbar-width:thin;scrollbar-color:rgba(200,155,60,0.1) transparent;
        ">
          <!-- Formation Header -->
          <div style="padding:28px 28px 0;flex-shrink:0">
            <div style="font-family:var(--font-title);font-size:11px;letter-spacing:4px;color:var(--text-muted);margin-bottom:20px">— FORMATION ACTIVE —</div>
          </div>

          <!-- Team Slots Grid -->
          <div style="padding:0 28px;flex-shrink:0">
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-bottom:24px">
              ${[0,1,2,3].map(s=>{const d=e[s];if(d){const g=t.ownedCharacters.find(m=>m.id===d),p=kt(d,g?.level||1)||c.getFusedCharacterData(d);if(p){const m=`var(--${p.rarity||"rare"})`,f=st[p.type]||"var(--accent)",u=Math.floor(100*Math.pow(1.1,p.level-1)),v=Math.round((g?.xp||0)/u*100);return`
                      <div class="team-slot-card" data-slot="${s}" data-char-id="${d}" style="
                        background:linear-gradient(160deg,rgba(28,18,10,0.92),rgba(15,10,6,0.96));
                        border:1px solid rgba(200,155,60,0.12);
                        border-radius:10px;
                        padding:16px 14px;
                        text-align:center;
                        position:relative;
                        cursor:pointer;
                        transition:all 0.25s ease;
                      ">
                        <!-- Rarity accent line -->
                        <div style="position:absolute;top:0;left:20%;right:20%;height:2px;background:${m};border-radius:0 0 2px 2px;opacity:0.7;box-shadow:0 0 8px ${m}"></div>

                        <!-- Slot number -->
                        <div style="position:absolute;top:8px;left:10px;font-family:var(--font-stat);font-size:9px;color:var(--text-muted);letter-spacing:1px">${s+1}</div>

                        <!-- Remove button -->
                        <button class="remove-from-team" data-slot="${s}" style="
                          position:absolute;top:8px;right:8px;width:22px;height:22px;border-radius:50%;
                          background:rgba(220,38,38,0.1);border:1px solid rgba(220,38,38,0.25);
                          color:var(--danger);cursor:pointer;font-size:10px;
                          display:flex;align-items:center;justify-content:center;
                          transition:all 0.2s;z-index:2;
                        ">✕</button>

                        <img src="${C((p.type||"").split("/")[0])}" class="sprite sprite--lg sprite--animate" alt="${p.name}" style="margin:4px auto 10px;display:block">

                        <div style="font-family:var(--font-title);font-size:11px;color:${m};font-weight:700;letter-spacing:1px;margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="${p.name}">${p.name.length>16?p.name.split(" ")[0]:p.name}</div>
                        <div style="font-family:var(--font-stat);font-size:9px;color:${f};letter-spacing:2px;margin-bottom:8px">${(p.type||"").toUpperCase()} · NIV.${p.level}</div>

                        <!-- XP Bar -->
                        <div style="height:4px;background:rgba(0,0,0,0.5);border-radius:2px;overflow:hidden;border:1px solid rgba(200,155,60,0.04)">
                          <div style="height:100%;width:${v}%;background:var(--accent-gradient);border-radius:2px;transition:width 0.6s"></div>
                        </div>

                        <!-- Mini stats row -->
                        <div style="display:flex;justify-content:space-around;margin-top:10px">
                          ${["hp","atk","spd"].map(k=>`
                            <div style="text-align:center">
                              <div style="font-family:var(--font-stat);font-size:13px;font-weight:700;color:var(--text-primary)">${p.stats[k]}</div>
                              <div style="font-size:7px;color:var(--text-muted);letter-spacing:1px">${yt[k]}</div>
                            </div>
                          `).join("")}
                        </div>
                      </div>
                    `}}return`
                  <div class="team-slot-empty" data-slot="${s}" style="
                    background:rgba(15,10,5,0.4);
                    border:1px dashed rgba(200,155,60,0.08);
                    border-radius:10px;
                    padding:36px 16px;
                    text-align:center;
                    cursor:default;
                    transition:border-color 0.2s;
                    position:relative;
                  ">
                    <div style="position:absolute;top:8px;left:10px;font-family:var(--font-stat);font-size:9px;color:var(--text-muted);letter-spacing:1px">${s+1}</div>
                    <div style="font-size:28px;color:var(--text-muted);opacity:0.15;margin-bottom:6px">+</div>
                    <div style="font-family:var(--font-ui);font-size:9px;color:var(--text-muted);letter-spacing:2px">SLOT VIDE</div>
                  </div>
                `}).join("")}
            </div>
          </div>

          <!-- Synergy Section -->
          <div style="padding:0 28px;flex-shrink:0">
            <div style="
              background:linear-gradient(135deg,rgba(200,155,60,0.04),rgba(13,10,8,0.95));
              border:1px solid rgba(200,155,60,0.1);
              border-radius:10px;
              padding:18px;
              margin-bottom:20px;
            ">
              <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
                <div>
                  <div style="font-family:var(--font-title);font-size:9px;letter-spacing:3px;color:var(--text-muted)">SYNERGIE</div>
                  <div style="font-family:var(--font-stat);font-size:18px;color:var(--legendaire);font-weight:700;margin-top:4px">${n.label}</div>
                </div>
                <div style="text-align:right">
                  <div style="font-family:var(--font-stat);font-size:22px;font-weight:700;color:var(--accent-light)">${l}</div>
                  <div style="font-size:8px;color:var(--text-muted);letter-spacing:2px">PUISSANCE</div>
                </div>
              </div>
              ${n.bonus?`
                <div style="font-size:10px;color:var(--text-secondary);padding:8px 10px;background:rgba(200,155,60,0.04);border-radius:6px;border:1px solid rgba(200,155,60,0.06)">
                  ⚡ ${n.bonus}
                </div>
              `:`
                <div style="font-size:10px;color:var(--text-muted);font-style:italic">Aucun bonus actif</div>
              `}
            </div>
          </div>

          <!-- Quick Actions -->
          <div style="padding:0 28px 20px;flex-shrink:0">
            <button class="btn btn--ghost btn--full" id="btn-optimize" style="padding:12px;font-size:10px;letter-spacing:2px;border-radius:6px;margin-bottom:10px">
              ⚙ OPTIMISER AUTOMATIQUEMENT
            </button>
            <button class="btn btn--ghost btn--full" id="btn-clear-all" style="padding:10px;font-size:9px;letter-spacing:2px;border-radius:6px;color:var(--text-muted)">
              RETIRER TOUS
            </button>
          </div>

          <!-- Stat Comparison Table (if team has members) -->
          ${i.length>=2?`
          <div style="padding:0 28px 28px;flex-shrink:0">
            <div style="
              background:rgba(15,10,5,0.6);
              border:1px solid rgba(200,155,60,0.06);
              border-radius:10px;
              padding:18px;
            ">
              <div style="font-family:var(--font-title);font-size:9px;letter-spacing:3px;color:var(--text-muted);margin-bottom:14px">— COMPARAISON —</div>
              <table style="width:100%;border-collapse:collapse;font-family:var(--font-ui)">
                <thead>
                  <tr>
                    <th style="text-align:left;padding:6px 8px;font-size:8px;letter-spacing:2px;color:var(--text-muted);border-bottom:1px solid var(--border-metal)">NOM</th>
                    ${Object.values(yt).map(s=>`<th style="text-align:center;padding:6px 4px;font-size:8px;letter-spacing:1px;color:var(--text-muted);border-bottom:1px solid var(--border-metal)">${s}</th>`).join("")}
                  </tr>
                </thead>
                <tbody>
                  ${i.map((s,d)=>(st[s.type],`
                      <tr style="background:${d%2?"transparent":"rgba(200,155,60,0.015)"}">
                        <td style="padding:8px;border-bottom:1px solid rgba(200,155,60,0.03)">
                          <div style="font-weight:700;font-size:11px;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:80px">${s.name.split(" ")[0]}</div>
                        </td>
                        ${Object.keys(yt).map(g=>{const p=Math.max(...i.map(u=>u.stats[g]||0)),m=s.stats[g]||0;return`<td style="padding:6px 4px;text-align:center;border-bottom:1px solid rgba(200,155,60,0.03)">
                            <div style="font-family:var(--font-stat);font-size:12px;font-weight:700;color:${m===p&&p>0?"var(--legendaire)":"var(--text-secondary)"}">${m}</div>
                          </td>`}).join("")}
                      </tr>
                    `)).join("")}
                </tbody>
              </table>
            </div>
          </div>
          `:""}
        </div>

        <!-- ═══ RIGHT PANEL: Character Roster ═══ -->
        <div style="
          display:flex;flex-direction:column;
          overflow:hidden;
          background:rgba(13,10,8,0.98);
          position:relative;
        ">
          <!-- Section Title (separate from scrollable area) -->
          <div style="
            padding:16px 28px 0;
            flex-shrink:0;
            z-index:2;
          ">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
              <div style="font-family:var(--font-title);font-size:10px;letter-spacing:5px;color:var(--text-muted);text-transform:uppercase">PERSONNAGES DISPONIBLES</div>
              <div style="font-family:var(--font-stat);font-size:11px;color:var(--text-muted);letter-spacing:1px">${r.length} / ${o.length}</div>
            </div>
          </div>

          <!-- Filters Bar -->
          <div style="
            padding:8px 28px 14px;
            flex-shrink:0;
            border-bottom:1px solid rgba(200,155,60,0.06);
          ">

            <!-- Type Filters -->
            <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap">
              ${["all","guerrier","mage","arche","assassin"].map(s=>{const d=s===Pt,g=s==="all"?"var(--accent)":st[s]||"var(--accent)";return`
                  <button class="filter-type-btn" data-filter-type="${s}" style="
                    padding:6px 14px;border-radius:4px;font-family:var(--font-ui);font-size:10px;font-weight:700;
                    letter-spacing:1px;cursor:pointer;transition:all 0.2s;text-transform:uppercase;
                    background:${d?g+"20":"transparent"};
                    border:1px solid ${d?g+"60":"var(--border-metal)"};
                    color:${d?g:"var(--text-muted)"};
                  ">${s==="all"?"TOUS":s.toUpperCase()}</button>
                `}).join("")}
            </div>

            <!-- Rarity + Sort -->
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              ${["all","rare","epique","legendaire","ultimate"].map(s=>{const d=s===Dt,g=s==="all"?"var(--text-muted)":`var(--${s})`;return`
                  <button class="filter-rarity-btn" data-filter-rarity="${s}" style="
                    padding:5px 11px;border-radius:4px;font-family:var(--font-ui);font-size:9px;font-weight:700;
                    letter-spacing:1px;cursor:pointer;transition:all 0.2s;text-transform:uppercase;
                    background:${d?g+"15":"transparent"};
                    border:1px solid ${d?g+"40":"var(--border)"};
                    color:${d?g:"var(--text-muted)"};
                  ">${s==="all"?"TOUS":s.toUpperCase()}</button>
                `}).join("")}

              <div style="width:1px;height:18px;background:var(--border-metal);margin:0 6px"></div>

              ${["rarity","level","atk"].map(s=>{const d=s===ut;return`
                  <button class="sort-btn" data-sort="${s}" style="
                    padding:5px 11px;border-radius:4px;font-family:var(--font-ui);font-size:9px;font-weight:700;
                    letter-spacing:1px;cursor:pointer;transition:all 0.2s;text-transform:uppercase;
                    background:${d?"rgba(192,57,11,0.12)":"transparent"};
                    border:1px solid ${d?"rgba(192,57,11,0.3)":"var(--border)"};
                    color:${d?"var(--accent-light)":"var(--text-muted)"};
                  ">${s==="atk"?"⚔ ATK":s==="level"?"↑ NIV":"★ RARETÉ"}</button>
                `}).join("")}
            </div>
          </div>

          <!-- Character Grid (scrollable) -->
          <div style="flex:1;overflow-y:auto;padding:20px 28px;scrollbar-width:thin;scrollbar-color:rgba(200,155,60,0.1) transparent">
            ${r.length===0?`
              <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:300px;color:var(--text-muted);gap:var(--space-md)">
                <div style="font-size:40px;opacity:0.15">⚔</div>
                <div style="font-family:var(--font-title);font-size:11px;letter-spacing:3px">AUCUN PERSONNAGE TROUVÉ</div>
              </div>
            `:`
              <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:14px">
                ${r.map(s=>{const d=e.includes(s.id),g=`var(--${s.rarity||"rare"})`,p=st[s.type]||"var(--accent)",m=t.ownedCharacters.find(v=>v.id===s.id),f=Math.floor(100*Math.pow(1.1,s.level-1)),u=Math.round((m?.xp||0)/f*100);return`
                    <div class="roster-card ${d?"roster-card--in-team":""}" data-char-id="${s.id}" style="
                      background:linear-gradient(160deg,rgba(28,18,10,0.88),rgba(15,10,6,0.95));
                      border:1px solid ${d?"rgba(74,124,89,0.3)":"rgba(200,155,60,0.08)"};
                      border-radius:10px;
                      padding:16px 14px 14px;
                      text-align:center;
                      cursor:${d?"default":"pointer"};
                      transition:all 0.25s ease;
                      position:relative;
                      ${d?"opacity:0.45;":""}
                    ">
                      <!-- Rarity accent -->
                      <div style="position:absolute;top:0;left:25%;right:25%;height:2px;background:${g};opacity:0.5;border-radius:0 0 2px 2px"></div>

                      ${d?`
                        <div style="position:absolute;top:7px;right:8px;width:20px;height:20px;border-radius:50%;
                          background:rgba(74,124,89,0.15);border:1px solid rgba(74,124,89,0.35);
                          display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--success)">✓</div>
                      `:""}

                      <!-- Rarity badge -->
                      <div style="position:absolute;top:7px;left:8px;font-family:var(--font-stat);font-size:7px;font-weight:700;color:${g};letter-spacing:1px">${(s.rarity||"").toUpperCase()}</div>

                      <img src="${C((s.type||"").split("/")[0])}" class="sprite sprite--md" alt="${s.name}" style="margin:6px auto 8px;display:block">

                      <div style="font-family:var(--font-title);font-size:10px;color:${g};font-weight:700;letter-spacing:0.5px;margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${s.name}</div>

                      <div style="display:flex;align-items:center;justify-content:center;gap:6px;margin-bottom:8px">
                        <span style="font-size:8px;color:${p};letter-spacing:1px;padding:2px 6px;border-radius:3px;background:${p}10;border:1px solid ${p}25">${(s.type||"").toUpperCase()}</span>
                        <span style="font-family:var(--font-stat);font-size:9px;color:var(--text-muted)">NIV.${s.level}</span>
                      </div>

                      <!-- XP Bar -->
                      <div style="height:3px;background:rgba(0,0,0,0.5);border-radius:2px;overflow:hidden;margin-bottom:8px">
                        <div style="height:100%;width:${u}%;background:${g};opacity:0.7;border-radius:2px"></div>
                      </div>

                      <!-- Mini stat icons -->
                      <div style="display:flex;justify-content:space-around">
                        ${[{stat:"hp",icon:"♥",color:"#EF4444"},{stat:"atk",icon:"⚔",color:"#f87171"},{stat:"spd",icon:"↗",color:"#C89B3C"}].map(v=>`
                          <div style="text-align:center">
                            <div style="font-size:8px;color:${v.color};margin-bottom:1px">${v.icon}</div>
                            <div style="font-family:var(--font-stat);font-size:10px;font-weight:700;color:var(--text-secondary)">${s.stats[v.stat]}</div>
                          </div>
                        `).join("")}
                      </div>
                    </div>
                  `}).join("")}
              </div>
            `}
          </div>
        </div>
      </div>
    </div>
  `,Ji(t,e)}function Ji(a,t){document.getElementById("back-btn")?.addEventListener("click",()=>w.navigate("home")),document.querySelectorAll(".filter-type-btn").forEach(e=>{e.addEventListener("click",()=>{Pt=e.dataset.filterType,q()})}),document.querySelectorAll(".filter-rarity-btn").forEach(e=>{e.addEventListener("click",()=>{Dt=e.dataset.filterRarity,q()})}),document.querySelectorAll(".sort-btn").forEach(e=>{e.addEventListener("click",()=>{ut=e.dataset.sort,q()})}),document.querySelectorAll(".remove-from-team").forEach(e=>{e.addEventListener("click",i=>{i.stopPropagation();const o=[...a.team];o[parseInt(e.dataset.slot)]=null,c.setTeam(o),q()})}),document.querySelectorAll(".roster-card:not(.roster-card--in-team)").forEach(e=>{e.addEventListener("click",()=>{const i=e.dataset.charId;if(t.includes(i))return;const o=t.indexOf(null);if(o===-1){ea(i);return}const r=[...a.team];r[o]=i,c.setTeam(r),ta(e),setTimeout(()=>q(),250)}),e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-4px) scale(1.02)",e.style.borderColor="rgba(200,155,60,0.25)",e.style.boxShadow="0 8px 30px rgba(0,0,0,0.5), 0 0 15px rgba(192,57,11,0.08)"}),e.addEventListener("mouseleave",()=>{e.style.transform="",e.style.borderColor="",e.style.boxShadow=""}),e.addEventListener("contextmenu",i=>{i.preventDefault(),Be(e.dataset.charId)})}),document.querySelectorAll(".team-slot-card").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-3px)",e.style.borderColor="rgba(200,155,60,0.25)",e.style.boxShadow="0 6px 20px rgba(0,0,0,0.5), 0 0 12px rgba(192,57,11,0.1)"}),e.addEventListener("mouseleave",()=>{e.style.transform="",e.style.borderColor="",e.style.boxShadow=""}),e.addEventListener("click",i=>{i.target.closest(".remove-from-team")||Be(e.dataset.charId)})}),document.getElementById("btn-optimize")?.addEventListener("click",()=>{const e=aa();e&&(c.setTeam(e),q())}),document.getElementById("btn-clear-all")?.addEventListener("click",()=>{c.setTeam([null,null,null,null]),q()})}function ta(a){a.style.transition="all 0.25s cubic-bezier(0.34,1.56,0.64,1)",a.style.transform="scale(0.92)",a.style.opacity="0.5"}function ea(a){const t=c.state,e=document.createElement("div");e.className="modal-overlay";const i=t.ownedCharacters.find(n=>n.id===a),o=kt(a,i?.level||1)||c.getFusedCharacterData(a);if(!o)return;const r=`var(--${o.rarity||"rare"})`;e.innerHTML=`
    <div class="modal" style="text-align:center;max-width:400px;border-radius:12px;padding:32px">
      <div style="font-family:var(--font-title);font-size:11px;letter-spacing:3px;color:var(--text-muted);margin-bottom:20px">REMPLACER QUI ?</div>

      <div style="display:flex;align-items:center;gap:12px;justify-content:center;margin-bottom:24px;padding:14px;background:rgba(200,155,60,0.04);border-radius:8px;border:1px solid rgba(200,155,60,0.08)">
        <img src="${C((o.type||"").split("/")[0])}" class="sprite sprite--md" alt="${o.name}">
        <div style="text-align:left">
          <div style="font-family:var(--font-title);font-size:13px;color:${r};font-weight:700">${o.name}</div>
          <div style="font-size:10px;color:var(--text-muted);letter-spacing:1px;margin-top:2px">${o.type.toUpperCase()} · NIV.${o.level}</div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:8px">
        ${t.team.map((n,l)=>{if(!n)return"";const s=t.ownedCharacters.find(p=>p.id===n),d=kt(n,s?.level||1)||c.getFusedCharacterData(n);if(!d)return"";const g=st[d.type]||"var(--accent)";return`
            <button class="swap-btn" data-slot="${l}" style="
              display:flex;align-items:center;gap:12px;padding:12px 16px;
              background:rgba(20,12,6,0.8);border:1px solid var(--border-metal);
              border-radius:8px;cursor:pointer;transition:all 0.2s;
              color:var(--text-primary);font-family:var(--font-ui);width:100%;text-align:left;
            ">
              <img src="${C((d.type||"").split("/")[0])}" class="sprite sprite--sm" alt="${d.name}">
              <div style="flex:1">
                <div style="font-size:12px;font-weight:700;color:var(--text-primary)">${d.name}</div>
                <div style="font-size:9px;color:${g};letter-spacing:1px;margin-top:2px">${d.type.toUpperCase()} · NIV.${d.level}</div>
              </div>
              <div style="font-family:var(--font-stat);font-size:9px;color:var(--text-muted);letter-spacing:1px">SLOT ${l+1}</div>
            </button>
          `}).join("")}
        <button id="swap-cancel" style="
          padding:12px;border:1px solid rgba(220,38,38,0.3);background:rgba(220,38,38,0.08);
          border-radius:8px;cursor:pointer;color:var(--danger);font-family:var(--font-ui);
          font-size:11px;font-weight:700;letter-spacing:2px;margin-top:6px;width:100%;
          transition:all 0.2s;
        ">ANNULER</button>
      </div>
    </div>
  `,document.body.appendChild(e),e.querySelectorAll(".swap-btn").forEach(n=>{n.addEventListener("mouseenter",()=>{n.style.borderColor="var(--accent)",n.style.background="rgba(192,57,11,0.08)"}),n.addEventListener("mouseleave",()=>{n.style.borderColor="var(--border-metal)",n.style.background="rgba(20,12,6,0.8)"}),n.addEventListener("click",()=>{const l=[...t.team];l[parseInt(n.dataset.slot)]=a,c.setTeam(l),e.remove(),q()})}),document.getElementById("swap-cancel").addEventListener("click",()=>e.remove()),e.addEventListener("click",n=>{n.target===e&&e.remove()})}function Be(a){const e=c.state.ownedCharacters.find(f=>f.id===a);if(!e)return;const i=kt(a,e.level)||c.getFusedCharacterData(a);if(!i)return;const o=st[i.type]||"var(--accent)",r=`var(--${i.rarity||"rare"})`,n=c.getCharacterBonusStats(a);Object.values(n).some(f=>f>0);const l=Math.floor(100*Math.pow(1.1,i.level-1)),s=Math.round((e?.xp||0)/l*100),d=120,g=Me(i.stats,d*.42),p=[.33,.66,1].map(f=>Me({hp:1,atk:1,def:1,spd:1,magAtk:1,magDef:1},d*.42*f)),m=document.createElement("div");m.className="modal-overlay",m.innerHTML=`
    <div class="modal" style="max-width:520px;border-radius:14px;padding:0;overflow:hidden;border-color:rgba(200,155,60,0.15)">
      <!-- Rarity accent top -->
      <div style="height:3px;background:linear-gradient(90deg,transparent,${r},transparent)"></div>

      <div style="padding:28px 32px">
        <!-- Header -->
        <div style="display:flex;align-items:center;gap:20px;margin-bottom:24px">
          <div style="position:relative">
            <img src="${C((i.type||"").split("/")[0])}" class="sprite sprite--xl sprite--animate" alt="${i.name}"
                 style="filter:drop-shadow(0 0 18px ${r})">
            <div style="position:absolute;bottom:-4px;right:-4px;background:var(--bg-surface-solid);border:2px solid ${r};
              border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;
              font-family:var(--font-stat);font-weight:900;font-size:12px;color:${r}">${i.level}</div>
          </div>
          <div style="flex:1">
            <div style="font-family:var(--font-title);font-size:18px;font-weight:800;color:${r};letter-spacing:1px;margin-bottom:6px">${i.name}</div>
            <div style="display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap">
              <span style="font-size:9px;color:${o};letter-spacing:1px;padding:3px 10px;border-radius:3px;background:${o}15;border:1px solid ${o}30">${(i.type||"").toUpperCase()}</span>
              <span style="font-size:9px;color:${r};letter-spacing:1px;padding:3px 10px;border-radius:3px;background:${r}15;border:1px solid ${r}30">${(i.rarity||"").toUpperCase()}</span>
            </div>
            <p style="font-size:11px;color:var(--text-secondary);line-height:1.5;font-style:italic">${i.desc||""}</p>
          </div>
        </div>

        <!-- Radar + Stats Grid side by side -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px">
          <!-- Radar Chart -->
          <div style="background:rgba(0,0,0,0.2);border:1px solid var(--border);border-radius:10px;padding:16px;display:flex;align-items:center;justify-content:center">
            <svg viewBox="0 0 ${d} ${d}" style="width:${d}px;height:${d}px">
              ${p.map(f=>`<polygon points="${f}" fill="none" stroke="rgba(200,155,60,0.1)" stroke-width="0.8"/>`).join("")}
              ${oa(d*.42,d/2).map(([f,u])=>`<line x1="${d/2}" y1="${d/2}" x2="${f}" y2="${u}" stroke="rgba(200,155,60,0.06)" stroke-width="0.5"/>`).join("")}
              <polygon points="${g}" fill="${o}20" stroke="${o}" stroke-width="1.5" opacity="0.9"/>
              ${ra(i.stats,d*.42,d/2)}
            </svg>
          </div>

          <!-- Stats Grid -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
            ${Object.entries(yt).map(([f,u])=>{const v=i.stats[f]||0,k=n[f]||0,b=v+k;return`
                <div style="padding:8px;background:rgba(0,0,0,0.25);border-radius:6px;border:1px solid var(--border);text-align:center">
                  <div style="font-size:7px;color:var(--text-muted);letter-spacing:2px;margin-bottom:3px">${u}</div>
                  <div style="font-family:var(--font-stat);font-size:18px;font-weight:700;color:var(--text-bright);line-height:1">${b}</div>
                  ${k>0?`<div style="font-size:9px;color:var(--legendaire);font-weight:700;margin-top:2px">+${k}</div>`:""}
                </div>
              `}).join("")}
          </div>
        </div>

        <!-- XP Progress -->
        <div style="margin-bottom:24px">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px">
            <span style="font-size:9px;color:var(--text-muted);letter-spacing:2px">EXPERIENCE</span>
            <span style="font-family:var(--font-stat);font-size:10px;color:var(--text-muted)">${e.xp||0} / ${l} XP</span>
          </div>
          <div style="height:6px;background:rgba(0,0,0,0.5);border-radius:3px;overflow:hidden;border:1px solid var(--border)">
            <div style="height:100%;width:${s}%;background:var(--accent-gradient);border-radius:3px"></div>
          </div>
        </div>

        <!-- Skills -->
        <div style="font-family:var(--font-title);font-size:9px;letter-spacing:3px;color:var(--text-muted);margin-bottom:12px">— CAPACITES —</div>
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px">
          ${i.skills.map(f=>`
            <div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(0,0,0,0.2);border-radius:6px;border:1px solid var(--border)">
              <div style="font-size:18px;width:28px;text-align:center;flex-shrink:0">${f.icon}</div>
              <div style="flex:1">
                <div style="font-size:11px;font-weight:700;color:var(--text-bright)">${f.name}</div>
                <div style="font-size:9px;color:var(--text-secondary);margin-top:2px">${f.desc||""}</div>
              </div>
              <div style="text-align:right;flex-shrink:0">
                <div style="font-family:var(--font-stat);font-size:12px;font-weight:700;color:${f.type==="heal"?"var(--success)":f.type==="magical"?"#c084fc":"var(--accent-light)"}">
                  ${f.power>0?f.power:"—"}
                </div>
                <div style="font-size:8px;color:var(--text-muted)">${f.accuracy}%</div>
              </div>
            </div>
          `).join("")}
        </div>

        <button id="detail-close" style="
          width:100%;padding:12px;border:1px solid var(--border-metal);background:transparent;
          border-radius:8px;cursor:pointer;color:var(--text-muted);font-family:var(--font-ui);
          font-size:10px;font-weight:700;letter-spacing:2px;transition:all 0.2s;
        ">FERMER</button>
      </div>
    </div>
  `,document.body.appendChild(m),document.getElementById("detail-close").addEventListener("click",()=>m.remove()),m.addEventListener("click",f=>{f.target===m&&m.remove()})}function ia(a){if(!a.length)return{label:"Equipe vide",bonus:""};const t={};a.forEach(o=>{t[o.type]=(t[o.type]||0)+1});const e=Object.entries(t).sort((o,r)=>r[1]-o[1])[0],i=e[0].charAt(0).toUpperCase()+e[0].slice(1);return e[1]===4?{label:`Meute ${i}`,bonus:`+15% toutes les stats (${i})`}:e[1]===3?{label:`Formation ${i}`,bonus:`+10% ATK +5% SPD (${i})`}:e[1]===2?{label:`Duo ${i}`,bonus:`+5% ATK (${i})`}:Object.keys(t).length===4?{label:"Composition Mixte",bonus:"+3% SPD globale (flexibilite)"}:{label:"Standard",bonus:""}}function aa(){const a=c.state.ownedCharacters;return a.length<1?null:a.map(e=>{const i=P.find(r=>r.id===e.id)||c.getFusedCharacterData(e.id);if(!i)return null;const o={rare:1,epique:1.3,legendaire:1.7,ultimate:2.2,semi_ultimate:3.4,supreme:22}[i.rarity]||1;return{id:e.id,score:e.level*o}}).filter(Boolean).sort((e,i)=>i.score-e.score).slice(0,4).map(e=>e.id)}const xe=["hp","atk","def","spd","magAtk","magDef"],ve=a=>a*2*Math.PI/6-Math.PI/2;function Me(a,t){const e={hp:800,atk:200,def:200,spd:150,magAtk:220,magDef:200};return xe.map((i,o)=>{const l=Math.min(a[i]||0,e[i])/(e[i]||1)*t,s=ve(o),d=60+l*Math.cos(s),g=60+l*Math.sin(s);return`${d.toFixed(1)},${g.toFixed(1)}`}).join(" ")}function oa(a,t){return xe.map((e,i)=>{const o=ve(i);return[t+a*Math.cos(o),t+a*Math.sin(o)]})}function ra(a,t,e){return xe.map((i,o)=>{const r=ve(o),n=t+14,l=e+n*Math.cos(r),s=e+n*Math.sin(r);return`<text x="${l.toFixed(1)}" y="${s.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" fill="rgba(255,107,157,0.6)" font-size="8" font-family="DM Sans">${yt[i]}</text>`}).join("")}const na=[{id:"warrior",emoji:"⚔️",label:"Guerrier"},{id:"mage",emoji:"🔮",label:"Mage"},{id:"archer",emoji:"🏹",label:"Archer"},{id:"assassin",emoji:"🗡️",label:"Assassin"},{id:"paladin",emoji:"🛡️",label:"Paladin"},{id:"necro",emoji:"💀",label:"Nécromant"},{id:"dragon",emoji:"🐉",label:"Dragon"},{id:"wolf",emoji:"🐺",label:"Loup"},{id:"demon",emoji:"😈",label:"Démon"},{id:"phoenix",emoji:"🦅",label:"Phénix"},{id:"ghost",emoji:"👻",label:"Spectre"},{id:"king",emoji:"👑",label:"Roi"},{id:"samurai",emoji:"🥷",label:"Shinobi"},{id:"fire",emoji:"🔥",label:"Brasier"},{id:"skull",emoji:"💠",label:"Runique"},{id:"star",emoji:"⭐",label:"Étoile"}],gt=[{id:"gold",label:"Or",from:"#7A5A1A",to:"#E8B84C"},{id:"ember",label:"Braise",from:"#8B2500",to:"#F07030"},{id:"royal",label:"Royal",from:"#1A0A4A",to:"#7B3FEE"},{id:"blood",label:"Sang",from:"#4A0808",to:"#CC2222"},{id:"ocean",label:"Océan",from:"#0A2040",to:"#0070DD"},{id:"forest",label:"Forêt",from:"#0A2A10",to:"#ABD473"},{id:"silver",label:"Acier",from:"#1A1A2A",to:"#9D9D9D"},{id:"sakura",label:"Sakura",from:"#2A0A1A",to:"#FF6B9D"}];function Ge(){const a=document.getElementById("app"),t=c.state,e=t.profile||{},i=e.pseudo||"Héros",o=e.avatar||"⚔️",r=e.avatarType||"preset",n=e.customImg||null,l=e.bannerId||"gold",s=e.region||"Monde",d=e.level||1,g=e.xp||0,p=d*100,m=Math.min(100,Math.round(g/p*100)),f=t.totalBattles||0,u=t.totalWins||0,v=f-u,k=f>0?Math.round(u/f*100):0,b=gt.find(h=>h.id===l)||gt[0];a.innerHTML=`
    <div class="screen" style="background:#06050a;display:flex;flex-direction:column;overflow:hidden">

      <!-- ═══ TOP BAR ═══ -->
      <div style="
        display:flex;align-items:center;gap:16px;
        padding:0 28px;height:52px;flex-shrink:0;
        background:rgba(8,6,10,0.98);
        border-bottom:1px solid rgba(200,150,60,0.12);
        box-shadow:0 2px 20px rgba(0,0,0,0.8);
        z-index:10;
      ">
        <button id="back-btn" style="
          display:flex;align-items:center;gap:8px;
          background:none;border:1px solid rgba(200,150,60,0.2);border-radius:2px;
          padding:7px 14px;color:var(--text-secondary);cursor:pointer;
          font-family:var(--font-title);font-size:10px;letter-spacing:2px;
          transition:all 0.2s ease;
        ">◀ RETOUR</button>
        <div style="font-family:var(--font-title);font-size:14px;font-weight:700;letter-spacing:5px;color:var(--text-bright)">PROFIL</div>
      </div>

      <!-- ═══ CONTENT ═══ -->
      <div style="flex:1;overflow-y:auto;padding:32px 40px;scrollbar-width:thin;scrollbar-color:rgba(200,150,60,0.1) transparent">
        <div style="max-width:900px;margin:0 auto;display:grid;grid-template-columns:340px 1fr;gap:24px;align-items:start">

          <!-- ─── LEFT: Profile Card ─── -->
          <div style="display:flex;flex-direction:column;gap:16px">

            <!-- Profile Hero Card -->
            <div style="
              border:1px solid rgba(200,150,60,0.18);
              border-radius:4px;
              overflow:hidden;
              background:linear-gradient(180deg,rgba(12,10,14,0.99),rgba(7,6,10,0.99));
              box-shadow:0 8px 40px rgba(0,0,0,0.8),0 0 30px rgba(200,150,60,0.04);
              position:relative;
            ">
              <!-- Banner / Header -->
              <div id="profile-banner" style="
                height:100px;
                background:linear-gradient(135deg,${b.from},${b.to});
                position:relative;overflow:hidden;
              ">
                <!-- Banner shine -->
                <div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,0.08),transparent 60%)"></div>
                <!-- Grid pattern overlay -->
                <div style="position:absolute;inset:0;opacity:0.06;background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.3) 0px,rgba(255,255,255,0.3) 1px,transparent 1px,transparent 24px),repeating-linear-gradient(0deg,rgba(255,255,255,0.3) 0px,rgba(255,255,255,0.3) 1px,transparent 1px,transparent 24px)"></div>
              </div>

              <!-- Avatar bubble -->
              <div style="
                position:relative;
                display:flex;flex-direction:column;align-items:center;
                padding:0 24px 24px;
                margin-top:-44px;
              ">
                <div id="avatar-display" style="
                  width:88px;height:88px;border-radius:4px;
                  background:linear-gradient(180deg,rgba(14,11,18,0.98),rgba(8,6,12,0.99));
                  border:2px solid rgba(200,150,60,0.4);
                  box-shadow:0 0 20px rgba(200,150,60,0.15),0 8px 30px rgba(0,0,0,0.7);
                  display:flex;align-items:center;justify-content:center;
                  font-size:44px;
                  position:relative;overflow:hidden;
                ">
                  ${r==="custom"&&n?`<img src="${n}" style="width:100%;height:100%;object-fit:cover">`:`<span>${o}</span>`}
                  <!-- Level badge -->
                  <div style="
                    position:absolute;bottom:-1px;right:-1px;
                    background:linear-gradient(180deg,#8B6914,#C8963C);
                    color:#1A0A00;font-family:var(--font-title);font-weight:900;
                    font-size:10px;padding:3px 7px;border-radius:2px 0 4px 0;
                    box-shadow:0 0 10px rgba(200,150,60,0.3);
                  ">NIV.${d}</div>
                </div>

                <!-- Pseudo -->
                <div style="margin-top:14px;text-align:center">
                  <div id="pseudo-display" style="
                    font-family:var(--font-title);font-size:20px;font-weight:700;
                    color:var(--text-bright);letter-spacing:2px;margin-bottom:4px;
                  ">${i}</div>
                  <div style="font-family:var(--font-stat);font-size:9px;color:var(--text-muted);letter-spacing:3px">
                    ${s.toUpperCase()}
                  </div>
                </div>

                <!-- XP Bar -->
                <div style="width:100%;margin-top:16px">
                  <div style="display:flex;justify-content:space-between;margin-bottom:5px">
                    <span style="font-family:var(--font-title);font-size:9px;color:rgba(200,150,60,0.5);letter-spacing:3px">EXPÉRIENCE</span>
                    <span style="font-family:var(--font-stat);font-size:9px;color:var(--text-muted)">${g} / ${p}</span>
                  </div>
                  <div style="height:6px;background:rgba(0,0,0,0.8);border-radius:1px;overflow:hidden;border:1px solid rgba(200,150,60,0.08)">
                    <div style="height:100%;width:${m}%;background:linear-gradient(90deg,#8B6914,#C8963C,#E8B84C);box-shadow:0 0 8px rgba(200,150,60,0.4);transition:width 0.8s ease"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Stats -->
            <div style="
              border:1px solid rgba(200,150,60,0.1);border-radius:4px;
              background:linear-gradient(180deg,rgba(10,8,12,0.99),rgba(7,5,9,0.99));
              overflow:hidden;
            ">
              ${[{label:"COMBATS",val:f,color:"var(--text-bright)"},{label:"VICTOIRES",val:u,color:"var(--peucommun)"},{label:"DÉFAITES",val:v,color:"var(--danger)"},{label:"WIN RATE",val:k+"%",color:"var(--accent-light)"},{label:"HÉROS",val:t.ownedCharacters.length,color:"var(--rare-light)"}].map((h,E)=>`
                <div style="
                  display:flex;justify-content:space-between;align-items:center;
                  padding:12px 18px;
                  ${E>0?"border-top:1px solid rgba(200,150,60,0.06)":""}
                ">
                  <span style="font-family:var(--font-title);font-size:9px;letter-spacing:3px;color:var(--text-muted)">${h.label}</span>
                  <span style="font-family:var(--font-stat);font-size:15px;font-weight:700;color:${h.color}">${h.val}</span>
                </div>
              `).join("")}
            </div>

            <!-- Save management -->
            <div style="
              border:1px solid rgba(200,150,60,0.1);border-radius:4px;
              background:linear-gradient(180deg,rgba(10,8,12,0.99),rgba(7,5,9,0.99));
              padding:18px;display:flex;flex-direction:column;gap:8px;
            ">
              <div style="font-family:var(--font-title);font-size:9px;letter-spacing:5px;color:rgba(200,150,60,0.35);margin-bottom:6px">── SAUVEGARDE ──</div>
              <button class="btn btn--ghost btn--full btn--sm" id="export-save" style="justify-content:flex-start;gap:10px;border-radius:2px;padding:10px 14px;font-size:9px">
                📤 Exporter la sauvegarde (.json)
              </button>
              <button class="btn btn--ghost btn--full btn--sm" id="import-save" style="justify-content:flex-start;gap:10px;border-radius:2px;padding:10px 14px;font-size:9px">
                📥 Importer une sauvegarde
              </button>
              <input type="file" id="import-file" accept=".json" style="display:none">
              <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(200,150,60,0.1),transparent);margin:4px 0"></div>
              <button class="btn btn--danger btn--full btn--sm" id="reset-save" style="border-radius:2px;padding:10px 14px;font-size:9px">
                🗑️ Réinitialiser la partie
              </button>
            </div>

          </div>

          <!-- ─── RIGHT: Edit Panel ─── -->
          <div style="display:flex;flex-direction:column;gap:16px">

            <!-- Pseudo editor -->
            <div style="
              border:1px solid rgba(200,150,60,0.18);border-radius:4px;padding:22px;
              background:linear-gradient(180deg,rgba(12,10,14,0.99),rgba(7,5,9,0.99));
            ">
              <div style="font-family:var(--font-title);font-size:9px;letter-spacing:5px;color:rgba(200,150,60,0.45);margin-bottom:16px">── NOM DU GUERRIER ──</div>
              <div style="position:relative">
                <input
                  type="text"
                  id="pseudo-input"
                  value="${i.replace(/"/g,"&quot;")}"
                  maxlength="18"
                  placeholder="Ton nom de guerre..."
                  style="
                    width:100%;padding:14px 50px 14px 16px;
                    background:rgba(0,0,0,0.6);
                    border:1px solid rgba(200,150,60,0.25);
                    border-radius:2px;
                    color:var(--text-bright);
                    font-family:var(--font-title);font-size:15px;font-weight:700;letter-spacing:2px;
                    outline:none;box-sizing:border-box;
                    transition:border-color 0.2s ease;
                  "
                >
                <div id="pseudo-count" style="
                  position:absolute;right:12px;top:50%;transform:translateY(-50%);
                  font-family:var(--font-stat);font-size:10px;color:var(--text-muted);
                ">${i.length}/18</div>
              </div>
              <div style="display:flex;gap:8px;margin-top:10px">
                <button class="btn btn--primary" id="save-pseudo" style="flex:1;border-radius:2px;padding:11px;font-size:10px">
                  ✓ SAUVEGARDER
                </button>
                <button class="btn btn--ghost" id="random-pseudo" style="border-radius:2px;padding:11px 14px;font-size:10px" title="Pseudo aléatoire">
                  🎲
                </button>
              </div>
              <div id="pseudo-feedback" style="height:16px;margin-top:6px;font-family:var(--font-stat);font-size:9px;text-align:center"></div>
            </div>

            <!-- Avatar selector -->
            <div style="
              border:1px solid rgba(200,150,60,0.18);border-radius:4px;padding:22px;
              background:linear-gradient(180deg,rgba(12,10,14,0.99),rgba(7,5,9,0.99));
            ">
              <div style="font-family:var(--font-title);font-size:9px;letter-spacing:5px;color:rgba(200,150,60,0.45);margin-bottom:16px">── EMBLÈME ──</div>

              <!-- Preset emoji grid -->
              <div style="display:grid;grid-template-columns:repeat(8,1fr);gap:8px;margin-bottom:16px">
                ${na.map(h=>`
                  <button
                    class="avatar-btn"
                    data-avatar-id="${h.id}"
                    data-emoji="${h.emoji}"
                    title="${h.label}"
                    style="
                      aspect-ratio:1;padding:8px;border-radius:3px;
                      background:${o===h.emoji&&r!=="custom"?"rgba(200,150,60,0.18)":"rgba(0,0,0,0.5)"};
                      border:1px solid ${o===h.emoji&&r!=="custom"?"rgba(200,150,60,0.5)":"rgba(200,150,60,0.08)"};
                      cursor:pointer;font-size:24px;
                      transition:all 0.15s ease;
                      display:flex;align-items:center;justify-content:center;
                    "
                  >${h.emoji}</button>
                `).join("")}
              </div>

              <!-- Divider -->
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">
                <div style="flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(200,150,60,0.15))"></div>
                <span style="font-family:var(--font-title);font-size:8px;letter-spacing:3px;color:var(--text-muted)">OU</span>
                <div style="flex:1;height:1px;background:linear-gradient(90deg,rgba(200,150,60,0.15),transparent)"></div>
              </div>

              <!-- Custom image upload -->
              <div style="display:flex;gap:10px;align-items:center">
                <div id="custom-preview" style="
                  width:54px;height:54px;border-radius:3px;flex-shrink:0;
                  border:1px solid rgba(200,150,60,0.2);
                  background:rgba(0,0,0,0.5);
                  display:flex;align-items:center;justify-content:center;
                  font-size:22px;overflow:hidden;
                ">
                  ${r==="custom"&&n?`<img src="${n}" style="width:100%;height:100%;object-fit:cover">`:"🖼️"}
                </div>
                <div style="flex:1">
                  <button class="btn btn--ghost btn--full btn--sm" id="upload-avatar" style="border-radius:2px;justify-content:flex-start;gap:8px;border-color:rgba(200,150,60,0.2)">
                    📁 Importer une image
                  </button>
                  <div style="font-family:var(--font-stat);font-size:8px;color:var(--text-muted);margin-top:5px">PNG, JPG, WebP — max 2MB</div>
                </div>
                <input type="file" id="avatar-file" accept="image/*" style="display:none">
              </div>
            </div>

            <!-- Banner color -->
            <div style="
              border:1px solid rgba(200,150,60,0.18);border-radius:4px;padding:22px;
              background:linear-gradient(180deg,rgba(12,10,14,0.99),rgba(7,5,9,0.99));
            ">
              <div style="font-family:var(--font-title);font-size:9px;letter-spacing:5px;color:rgba(200,150,60,0.45);margin-bottom:16px">── COULEUR DE BANNIÈRE ──</div>
              <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px">
                ${gt.map(h=>`
                  <button
                    class="banner-btn"
                    data-banner-id="${h.id}"
                    title="${h.label}"
                    style="
                      height:44px;border-radius:3px;cursor:pointer;position:relative;overflow:hidden;
                      background:linear-gradient(135deg,${h.from},${h.to});
                      border:2px solid ${l===h.id?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.5)"};
                      transition:all 0.15s ease;
                    "
                  >
                    ${l===h.id?'<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:14px">✓</div>':""}
                    <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.5);padding:2px 4px;font-family:var(--font-title);font-size:7px;letter-spacing:1px;text-align:center;color:rgba(255,255,255,0.8)">${h.label.toUpperCase()}</div>
                  </button>
                `).join("")}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  `;const z=document.getElementById("pseudo-input");z.addEventListener("focus",()=>{z.style.borderColor="rgba(200,150,60,0.55)",z.style.boxShadow="0 0 0 2px rgba(200,150,60,0.08)"}),z.addEventListener("blur",()=>{z.style.borderColor="rgba(200,150,60,0.25)",z.style.boxShadow="none"}),z.addEventListener("input",()=>{document.getElementById("pseudo-count").textContent=`${z.value.length}/18`}),document.getElementById("save-pseudo").addEventListener("click",()=>{const h=z.value.trim(),E=document.getElementById("pseudo-feedback");if(!h||h.length<2){E.textContent="Minimum 2 caractères !",E.style.color="var(--danger)";return}c.state.profile.pseudo=h,c.save(),document.getElementById("pseudo-display").textContent=h,E.textContent="✓ Nom sauvegardé",E.style.color="var(--peucommun)",setTimeout(()=>{E.textContent=""},2500)});const R=["Lord","Dark","Dire","Iron","Storm","Shadow","Blood","Silent","Brave","Void"],B=["Fang","Blade","Rune","Crest","Ash","Forge","Bane","Soul","Claw","Mark"];document.getElementById("random-pseudo").addEventListener("click",()=>{const h=R[Math.floor(Math.random()*R.length)],E=B[Math.floor(Math.random()*B.length)];z.value=h+E,document.getElementById("pseudo-count").textContent=`${z.value.length}/18`,z.focus()}),document.querySelectorAll(".avatar-btn").forEach(h=>{h.addEventListener("click",()=>{const E=h.dataset.emoji;document.querySelectorAll(".avatar-btn").forEach(x=>{x.style.background="rgba(0,0,0,0.5)",x.style.borderColor="rgba(200,150,60,0.08)"}),h.style.background="rgba(200,150,60,0.18)",h.style.borderColor="rgba(200,150,60,0.5)",document.getElementById("avatar-display").innerHTML=`
        <span>${E}</span>
        <div style="position:absolute;bottom:-1px;right:-1px;background:linear-gradient(180deg,#8B6914,#C8963C);color:#1A0A00;font-family:var(--font-title);font-weight:900;font-size:10px;padding:3px 7px;border-radius:2px 0 4px 0;">${d}</div>
      `,c.state.profile.avatar=E,c.state.profile.avatarType="preset",c.state.profile.customImg=null,c.save(),X("Emblème mis à jour !")})}),document.getElementById("upload-avatar").addEventListener("click",()=>{document.getElementById("avatar-file").click()}),document.getElementById("avatar-file").addEventListener("change",h=>{const E=h.target.files[0];if(!E)return;if(E.size>2*1024*1024){X("Image trop lourde (max 2MB)","error");return}const x=new FileReader;x.onload=$=>{const S=$.target.result;document.getElementById("custom-preview").innerHTML=`
        <img src="${S}" style="width:100%;height:100%;object-fit:cover">
      `,document.getElementById("avatar-display").innerHTML=`
        <img src="${S}" style="width:100%;height:100%;object-fit:cover">
        <div style="position:absolute;bottom:-1px;right:-1px;background:linear-gradient(180deg,#8B6914,#C8963C);color:#1A0A00;font-family:var(--font-title);font-weight:900;font-size:10px;padding:3px 7px;border-radius:2px 0 4px 0;">${d}</div>
      `,document.querySelectorAll(".avatar-btn").forEach(tt=>{tt.style.background="rgba(0,0,0,0.5)",tt.style.borderColor="rgba(200,150,60,0.08)"}),c.state.profile.avatarType="custom",c.state.profile.customImg=S,c.save(),X("Image sauvegardée !")},x.readAsDataURL(E)}),document.querySelectorAll(".banner-btn").forEach(h=>{h.addEventListener("click",()=>{const E=h.dataset.bannerId,x=gt.find($=>$.id===E);x&&(document.querySelectorAll(".banner-btn").forEach($=>{$.style.border="2px solid rgba(0,0,0,0.5)",$.querySelector("div")?.remove(),$.innerHTML=`<div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.5);padding:2px 4px;font-family:var(--font-title);font-size:7px;letter-spacing:1px;text-align:center;color:rgba(255,255,255,0.8)">${gt.find(S=>S.id===$.dataset.bannerId)?.label.toUpperCase()}</div>`}),h.style.border="2px solid rgba(255,255,255,0.6)",h.innerHTML=`
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:14px">✓</div>
        <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.5);padding:2px 4px;font-family:var(--font-title);font-size:7px;letter-spacing:1px;text-align:center;color:rgba(255,255,255,0.8)">${x.label.toUpperCase()}</div>
      `,document.getElementById("profile-banner").style.background=`linear-gradient(135deg,${x.from},${x.to})`,c.state.profile.bannerId=E,c.save(),X("Bannière mise à jour !"))})}),document.getElementById("back-btn").addEventListener("click",()=>w.navigate("home")),document.getElementById("export-save").addEventListener("click",()=>{const h=JSON.stringify(c.state,null,2),E=new Blob([h],{type:"application/json"}),x=URL.createObjectURL(E),$=document.createElement("a");$.href=x,$.download=`rytiger_save_${new Date().toISOString().slice(0,10)}.json`,$.click(),URL.revokeObjectURL(x),X("Sauvegarde exportée !")}),document.getElementById("import-save").addEventListener("click",()=>{document.getElementById("import-file").click()}),document.getElementById("import-file").addEventListener("change",h=>{const E=h.target.files[0];if(!E)return;const x=new FileReader;x.onload=$=>{try{const S=JSON.parse($.target.result);if(!S.ownedCharacters||!S.team){X("Fichier invalide !","error");return}if(!confirm("Écraser la sauvegarde actuelle ?"))return;Object.assign(c.state,S),c.save(),X("Importée ! Rechargement..."),setTimeout(()=>Ge(),600)}catch{X("Erreur de lecture","error")}},x.readAsText(E)}),document.getElementById("reset-save").addEventListener("click",()=>{confirm(`⚠️ Supprimer TOUTE la progression ?
Cette action est irréversible !`)&&c.reset()})}function X(a,t="success"){const e={success:{bg:"rgba(30,255,0,0.06)",border:"rgba(30,255,0,0.25)",text:"#1EFF00"},error:{bg:"rgba(200,34,34,0.1)",border:"rgba(200,34,34,0.35)",text:"#FF6060"}},i=e[t]||e.success,o=document.createElement("div");o.style.cssText=`
    position:fixed;bottom:32px;left:50%;transform:translateX(-50%);
    padding:10px 24px;border-radius:2px;
    background:${i.bg};border:1px solid ${i.border};color:${i.text};
    font-family:var(--font-title);font-size:10px;letter-spacing:2px;text-transform:uppercase;
    z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,0.7);
    animation:toastIn 0.3s cubic-bezier(0.34,1.56,0.64,1);
  `,o.textContent=a,document.body.appendChild(o),setTimeout(()=>o.remove(),2800)}const sa={subtitle:"Seuls les plus braves oseront y entrer"},la={coup_titan:{id:"coup_titan",name:"Coup Titanesque",type:"physical",power:200,accuracy:90,cooldown:8,icon:"💥",desc:"Frappe colossale qui ébranle le sol"},bouclier_seuil:{id:"bouclier_seuil",name:"Bouclier du Seuil",type:"buff",power:0,accuracy:100,cooldown:20,icon:"🛡️",desc:"Régénère un bouclier absorbant 30% des dégâts",effect:{type:"shield",value:.3,turns:999}},seisme_titan:{id:"seisme_titan",name:"Séisme Titanesque",type:"physical",power:120,accuracy:85,cooldown:15,aoe:!0,icon:"🌋",desc:"Écrase tous les ennemis"},rayon_oracle:{id:"rayon_oracle",name:"Rayon de l'Oracle",type:"magical",power:220,accuracy:95,cooldown:6,icon:"⚡",desc:"Rayon d'énergie pure dévastateur"},clone_oracle:{id:"clone_oracle",name:"Dédoublement",type:"special",power:0,accuracy:100,cooldown:30,icon:"👥",desc:"Crée un clone à 50% des HP du boss"},malediction:{id:"malediction",name:"Malédiction",type:"debuff",power:0,accuracy:90,cooldown:12,aoe:!0,icon:"🔮",desc:"Réduit l'ATK de toute l'équipe de 30%"},morsure_hydre:{id:"morsure_hydre",name:"Morsure de l'Hydre",type:"physical",power:180,accuracy:90,cooldown:5,icon:"🐉",desc:"Morsure venimeuse qui empoisonne"},triple_frappe:{id:"triple_frappe",name:"Triple Frappe",type:"physical",power:90,accuracy:80,cooldown:10,aoe:!0,icon:"🔱",desc:"Frappe 3 cibles simultanément"},enrage_hydre:{id:"enrage_hydre",name:"Enrage!",type:"buff",power:0,accuracy:100,cooldown:999,icon:"😡",desc:"À 30% HP: ATK +100%, SPD +50%"},lame_sacree:{id:"lame_sacree",name:"Lame Sacrée",type:"physical",power:240,accuracy:85,cooldown:8,icon:"⚔️",desc:"Tranche avec une lame bénie corrompue"},invisibilite_ange:{id:"invisibilite_ange",name:"Disparition Divine",type:"buff",power:0,accuracy:100,cooldown:25,icon:"🌫️",desc:"Devient invisible 5s puis frappe tous"},pluie_plumes:{id:"pluie_plumes",name:"Pluie de Plumes",type:"physical",power:80,accuracy:95,cooldown:8,aoe:!0,icon:"🪶",desc:"Pluie de plumes tranchantes"},frappe_abyssale:{id:"frappe_abyssale",name:"Frappe Abyssale",type:"physical",power:300,accuracy:90,cooldown:6,icon:"💀",desc:"Puissance des abysses"},vague_tenebres:{id:"vague_tenebres",name:"Vague de Ténèbres",type:"magical",power:180,accuracy:90,cooldown:10,aoe:!0,icon:"🌑",desc:"Vague d'obscurité dévastatrice"},domaine_samael:{id:"domaine_samael",name:"Domaine de Samaël",type:"special",power:0,accuracy:100,cooldown:999,icon:"🔴",desc:"Crée un domaine: tous perdent 3% HP/s"},absorption_ame:{id:"absorption_ame",name:"Absorption d'Âme",type:"heal",power:400,accuracy:100,cooldown:20,icon:"💜",desc:"Absorbe les âmes pour se soigner"},armageddon:{id:"armageddon",name:"Armageddon",type:"magical",power:350,accuracy:85,cooldown:15,aoe:!0,icon:"☄️",desc:"Déchaîne la fin du monde"},malédiction_finale:{id:"malédiction_finale",name:"Malédiction Finale",type:"debuff",power:0,accuracy:100,cooldown:20,aoe:!0,icon:"🌀",desc:"Réduit tous les stats de 50%"}},Ft=[{floor:1,name:"Le Gardien du Seuil",subtitle:"Porte-parole des anciens pactes",icon:"🏛️",bgGradient:"linear-gradient(180deg, #0d0d1f, #0a0a15)",accentColor:"#7777ff",minDuration:120,boss:{id:"gardien_seuil",name:"Gardien du Seuil",desc:"Le premier gardien du temple. Sa cuirasse absorbe les coups les plus puissants.",type:"guerrier",rarity:"legendaire",icon:"🏛️",phase:1,stats:{hp:12e3,maxHp:12e3,atk:180,def:200,spd:30,magAtk:80,magDef:150},skills:["coup_titan","bouclier_seuil","seisme_titan"],mechanics:{shieldRegen:{interval:20,value:.3},passiveHeal:{interval:3,amount:60}},rewards:{archireve:300,items:["armure_maragorh","ceinture_force"],xpBonus:200}},minions:[]},{floor:2,name:"L'Oracle Déchu",subtitle:"Il voit l'avenir mais ne peut l'éviter",icon:"🔮",bgGradient:"linear-gradient(180deg, #1a0a2a, #0d0520)",accentColor:"#aa44ff",minDuration:120,boss:{id:"oracle_dechu",name:"Oracle Déchu",desc:"Un voyant corrompu par sa propre prophétie. Quand il souffre, il se dédouble.",type:"mage",rarity:"legendaire",icon:"🔮",phase:1,stats:{hp:15e3,maxHp:15e3,atk:100,def:120,spd:55,magAtk:280,magDef:180},skills:["rayon_oracle","clone_oracle","malediction"],mechanics:{cloneAt:.5,passiveHeal:{interval:4,amount:75},magAtkBoost:{interval:30,value:.1}},rewards:{archireve:400,items:["baton_mage","orbe_enchantement"],xpBonus:280}},minions:[]},{floor:3,name:"L'Hydre des Ténèbres",subtitle:"Chaque blessure la rend plus furieuse",icon:"🐉",bgGradient:"linear-gradient(180deg, #0a1a0a, #050f05)",accentColor:"#22ff44",minDuration:120,boss:{id:"hydre_tenebres",name:"Hydre des Ténèbres",desc:"Une créature primordiale à trois têtes. Entamer sa vie déclenche son enrage.",type:"guerrier",rarity:"ultimate",icon:"🐉",phase:1,stats:{hp:2e4,maxHp:2e4,atk:250,def:160,spd:40,magAtk:120,magDef:100},skills:["morsure_hydre","triple_frappe"],mechanics:{enrageAt:.3,enrageSkills:["morsure_hydre","triple_frappe","enrage_hydre"],enrageStatBoost:{atk:1,spd:.5},passiveHeal:{interval:5,amount:100}},rewards:{archireve:550,items:["arc_elfique","dague_ombre"],xpBonus:380}},minions:[]},{floor:4,name:"L'Archange Corrompu",subtitle:"La lumière divine souillée par les ombres",icon:"😇",bgGradient:"linear-gradient(180deg, #1a1a0a, #0f0f05)",accentColor:"#ffdd44",minDuration:120,boss:{id:"archange_corrompu",name:"Archange Corrompu",desc:"Autrefois gardien des cieux, désormais serviteur des ombres. Frappe en toute impunité.",type:"assassin",rarity:"ultimate",icon:"😇",phase:1,stats:{hp:25e3,maxHp:25e3,atk:320,def:140,spd:110,magAtk:200,magDef:160},skills:["lame_sacree","invisibilite_ange","pluie_plumes"],mechanics:{invisPhase:{cooldown:25,duration:5,burstDamage:2},passiveHeal:{interval:4,amount:125}},rewards:{archireve:700,items:["sceptre_samael","anneau_rapidite"],xpBonus:500}},minions:[]},{floor:5,name:"SAMAËL",subtitle:"Le dieu déchu, maître de l'obscurité éternelle",icon:"☠️",bgGradient:"linear-gradient(180deg, #150008, #0a0005)",accentColor:"#ff2244",minDuration:180,boss:{id:"samael_final",name:"Samaël le Maudit",desc:"La forme finale de Samaël. Trois phases de pouvoir croissant. Ne le sous-estimez jamais.",type:"assassin",rarity:"ultimate",icon:"☠️",phase:1,currentPhase:1,stats:{hp:4e4,maxHp:4e4,atk:280,def:200,spd:90,magAtk:260,magDef:220},phase1Skills:["frappe_abyssale","vague_tenebres"],phase2Skills:["frappe_abyssale","vague_tenebres","domaine_samael","absorption_ame"],phase3Skills:["frappe_abyssale","armageddon","malédiction_finale","absorption_ame"],skills:["frappe_abyssale","vague_tenebres"],mechanics:{phases:[{hpThreshold:.66,activated:!1,label:"Phase I — Éveil"},{hpThreshold:.33,activated:!1,label:"Phase II — Domination"},{hpThreshold:0,activated:!1,label:"Phase III — Apocalypse"}],passiveHeal:{interval:3,amount:200},domain:{active:!1,damagePerSecond:.03}},rewards:{archireve:2e3,items:["phylactere_samael","egide_samael"],xpBonus:1e3,firstClear:{archireve:5e3,title:"Vainqueur de Samaël"}}},minions:[]}];function da(a){return Ft.find(t=>t.floor===a)||null}function Lt(a){return a.map(t=>la[t]||{id:t,name:t,type:"physical",power:100,accuracy:90,cooldown:5,icon:"💥"})}const D=100,Rt=2e3;class pa{constructor(t,e){this.floorData=e,this.minDuration=(e.minDuration||120)*1e3,this.startTime=null,this.elapsedTime=0,this.gameOver=!1,this.winner=null,this.running=!1,this.tickInterval=null,this.log=[],this.dpsTracker={},this.aggroTable={},this.playerTeam=t.map((o,r)=>({...o,stats:{...o.stats},currentHp:o.stats.hp,maxHp:o.stats.hp,alive:!0,buffs:[],debuffs:[],autoAttackTimer:Rt-o.stats.spd*5,autoAttackCooldown:Math.max(800,Rt-o.stats.spd*5),skillCooldowns:{},isPlayer:!0,x:80+r*5,y:80+r*90,aggro:0}));const i=e.boss;this.boss={...i,currentHp:i.stats.hp,maxHp:i.stats.hp,alive:!0,buffs:[],debuffs:[],skills:Lt(i.skills||i.phase1Skills||[]),skillTimers:{},autoAttackTimer:Math.max(1e3,Rt-i.stats.spd*5),autoAttackCooldown:Math.max(1e3,Rt-i.stats.spd*5),isPlayer:!1,isBoss:!0,shieldValue:0,isInvisible:!1,invisTimer:0,currentPhase:1,enraged:!1,domainActive:!1,cloneCreated:!1},this.onTick=null,this.onSkillUsed=null,this.onLog=null,this.onPhaseChange=null,this.onBossAbility=null}start(){if(!this.running){this.startTime=Date.now(),this.running=!0,this.addLog("💀 L'Épreuve commence...");for(const t of this.boss.skills)this.boss.skillTimers[t.id]=(t.cooldown||10)*1e3*.3;this.tickInterval=setInterval(()=>this._tick(),D)}}pause(){this.running=!1}resume(){this.running=!0}stop(){this.running=!1,this.tickInterval&&(clearInterval(this.tickInterval),this.tickInterval=null)}_tick(){if(!this.running||this.gameOver)return;this.elapsedTime+=D;for(const e of this.playerTeam)if(e.alive){for(const i of Object.keys(e.skillCooldowns))e.skillCooldowns[i]=Math.max(0,e.skillCooldowns[i]-D);e.autoAttackTimer-=D,e.autoAttackTimer<=0&&(e.autoAttackTimer=e.autoAttackCooldown,this.boss.alive&&!this.boss.isInvisible&&this._doAutoAttack(e,this.boss)),this._tickStatusEffects(e)}if(this.boss.alive){if(this._checkBossPhases(),this._tickBossPassiveHeal(),this.boss.domainActive&&this._applyDomainDamage(),this.boss.isInvisible&&(this.boss.invisTimer-=D,this.boss.invisTimer<=0&&(this.boss.isInvisible=!1,this._doBossEmergeBurst())),this.boss.autoAttackTimer-=D,this.boss.autoAttackTimer<=0&&!this.boss.isInvisible){this.boss.autoAttackTimer=this.boss.autoAttackCooldown;const e=this._getBossTarget();e&&this._doBossAutoAttack(e)}for(const e of this.boss.skills)this.boss.skillTimers[e.id]||(this.boss.skillTimers[e.id]=0),this.boss.skillTimers[e.id]-=D,this.boss.skillTimers[e.id]<=0&&(this.boss.skillTimers[e.id]=(e.cooldown||10)*1e3,this._executeBossSkill(e))}if(this.playerTeam.filter(e=>e.alive).length===0){this._endCombat("enemy");return}if(!this.boss.alive)if(this.elapsedTime<this.minDuration)this.boss.currentHp=Math.floor(this.boss.maxHp*.25),this.boss.alive=!0,this.addLog(`⚠️ ${this.boss.name} refuse de mourir si vite !`),this.onBossAbility?.({type:"revive",boss:this.boss});else{this._endCombat("player");return}this.onTick?.({playerTeam:this.playerTeam,boss:this.boss,elapsedTime:this.elapsedTime,dpsTracker:this.dpsTracker,minDuration:this.minDuration})}activateSkill(t,e){const i=this.playerTeam.find(l=>l.id===t);if(!i||!i.alive)return!1;const o=i.skills[e];if(!o)return!1;const r=`${e}`;if((i.skillCooldowns[r]||0)>0)return!1;const n=this._executePlayerSkill(i,o);return i.skillCooldowns[r]=(o.cooldown||3)*1e3,n}_executePlayerSkill(t,e){const i={caster:t.id,skill:e.id,hits:[]};if(e.type==="heal"){const o=[...this.playerTeam.filter(n=>n.alive)].sort((n,l)=>n.currentHp/n.maxHp-l.currentHp/l.maxHp)[0],r=Math.floor(e.power*(1+t.stats.magAtk/200));o.currentHp=Math.min(o.maxHp,o.currentHp+r),this.addLog(`💚 ${t.name} soigne ${o.name} +${r} PV`),i.hits.push({target:o.id,heal:r})}else if(e.type==="buff"){const o=e.effect?.aoe?this.playerTeam.filter(r=>r.alive):[t];for(const r of o)e.effect?.stat&&r.buffs.push({stat:e.effect.stat,boost:e.effect.boost,durationMs:e.effect.turns*2e3,remainingMs:e.effect.turns*2e3});this.addLog(`✨ ${t.name} utilise ${e.name}`)}else{const o=e.aoe?[this.boss]:[this.boss];for(const r of o){if(!r.alive)continue;const n=this._calcDamage(t,r,e);this._applyDamageToTarget(r,n,t,e),i.hits.push({target:r.id,damage:n.amount,isCrit:n.isCrit})}}return this.onSkillUsed?.(i),i}_doAutoAttack(t,e){const i=Math.floor(t.stats.atk/(e.stats.def+50)*60*(.9+Math.random()*.2)),o=Math.max(1,i);this._applyDamageToTarget(e,{amount:o,isCrit:!1},t,{type:"physical",id:"auto"})}_doBossAutoAttack(t){const e=this.boss,i=Math.floor(e.stats.atk/(t.stats.def+50)*80*(.85+Math.random()*.3)),o=Math.random()<.08,r=Math.max(1,o?Math.floor(i*1.5):i);t.currentHp-=r,this.addLog(`👹 ${e.name} frappe ${t.name} -${r}${o?" CRIT!":""}`),t.currentHp<=0&&(t.currentHp=0,t.alive=!1,this.addLog(`💀 ${t.name} tombe !`))}_calcDamage(t,e,i){const o=i.type==="magical"?t.stats.magAtk:t.stats.atk;let r=i.type==="magical"?e.stats.magDef:e.stats.def;e.shieldValue>0&&(r+=100);let n=Math.floor(o*(i.power||80)/(r+50)*(.85+Math.random()*.3));i.aoe&&(n=Math.floor(n*.7));const l=10+(t.type==="assassin"?15:0),s=Math.random()*100<l;return s&&(n=Math.floor(n*1.5)),{amount:Math.max(1,n),isCrit:s}}_applyDamageToTarget(t,e,i,o){let{amount:r}=e;if(t.shieldValue>0){const n=Math.min(t.shieldValue,Math.floor(r*.4));t.shieldValue-=n,r-=n}t.currentHp=Math.max(0,t.currentHp-r),i.isPlayer&&(this.dpsTracker[i.id]=(this.dpsTracker[i.id]||0)+r,this.aggroTable[t.id]=this.aggroTable[t.id]||{},this.aggroTable[t.id][i.id]=(this.aggroTable[t.id][i.id]||0)+r,i.type==="guerrier"&&(this.aggroTable[t.id][i.id]*=1.5)),t.currentHp<=0&&(t.alive=!1)}_getBossTarget(){const t=this.playerTeam.filter(r=>r.alive);if(t.length===0)return null;const e=this.aggroTable[this.boss.id]||{};let i=-1,o=null;for(const r of t){const n=e[r.id]||0;n>i&&(i=n,o=r)}return!o||i<10?t.find(n=>n.type==="guerrier")||t[Math.floor(Math.random()*t.length)]:o}_executeBossSkill(t){if(!this.boss.alive)return;const e=this.playerTeam.filter(o=>o.alive);if(e.length===0)return;if(t.type==="special"){this._handleBossSpecial(t);return}if(t.type==="debuff"){this._handleBossDebuff(t);return}if(t.type==="buff"){this._handleBossBuff(t);return}const i=t.aoe?e:[this._getBossTarget()].filter(Boolean);for(const o of i){const r=this._calcDamage(this.boss,o,t);o.currentHp=Math.max(0,o.currentHp-r.amount),o.currentHp<=0&&(o.alive=!1,this.addLog(`💀 ${o.name} tombe !`))}this.addLog(`⚡ ${this.boss.name} utilise ${t.name}!`),this.onSkillUsed?.({caster:this.boss.id,skill:t.id,targets:i.map(o=>o.id)})}_handleBossSpecial(t){t.id==="clone_oracle"?this.boss.cloneCreated||(this.boss.cloneCreated=!0,this.addLog("👥 L'Oracle se dédouble !"),this.onBossAbility?.({type:"clone",boss:this.boss})):t.id==="domaine_samael"&&(this.boss.domainActive||(this.boss.domainActive=!0,this.addLog("🔴 Samaël active son Domaine ! Vous perdez 3% HP/s !"),this.onBossAbility?.({type:"domain",boss:this.boss})))}_handleBossDebuff(t){const e=this.playerTeam.filter(o=>o.alive),i=t.aoe?e:[this._getBossTarget()].filter(Boolean);for(const o of i)if(t.id==="malediction")o.buffs.push({stat:"atk",boost:-.3,durationMs:8e3,remainingMs:8e3,type:"debuff"});else if(t.id==="malédiction_finale")for(const r of["atk","magAtk","def","spd"])o.buffs.push({stat:r,boost:-.5,durationMs:15e3,remainingMs:15e3,type:"debuff"});this.addLog(`🔮 ${this.boss.name} lance ${t.name} !`),this.onBossAbility?.({type:"debuff",skill:t})}_handleBossBuff(t){if(t.id==="bouclier_seuil")this.boss.shieldValue=Math.floor(this.boss.maxHp*.3),this.addLog(`🛡️ ${this.boss.name} génère un bouclier !`),this.onBossAbility?.({type:"shield",value:this.boss.shieldValue});else if(t.id==="invisibilite_ange")this.boss.isInvisible=!0,this.boss.invisTimer=5e3,this.addLog("🌫️ L'Archange disparaît dans l'ombre..."),this.onBossAbility?.({type:"invisible"});else if(t.id==="absorption_ame"){const e=Math.min(t.power,this.boss.maxHp-this.boss.currentHp);this.boss.currentHp=Math.min(this.boss.maxHp,this.boss.currentHp+e),this.addLog(`💜 Samaël absorbe les âmes (+${e} PV)`),this.onBossAbility?.({type:"heal",amount:e})}}_doBossEmergeBurst(){const t=this.playerTeam.filter(i=>i.alive);let e=0;for(const i of t){const o=Math.floor(this.boss.stats.atk*2*(.9+Math.random()*.2));i.currentHp=Math.max(0,i.currentHp-o),i.currentHp<=0&&(i.alive=!1),e+=o}this.addLog("💥 L'Archange surgit ! Burst sur toute l'équipe !"),this.onBossAbility?.({type:"emerge_burst",totalDmg:e})}_checkBossPhases(){const t=this.boss.currentHp/this.boss.maxHp,e=this.boss.mechanics||{};if(e.enrageAt&&!this.boss.enraged&&t<=e.enrageAt){if(this.boss.enraged=!0,e.enrageStatBoost)for(const[i,o]of Object.entries(e.enrageStatBoost))this.boss.stats[i]=Math.floor(this.boss.stats[i]*(1+o));e.enrageSkills&&(this.boss.skills=Lt(e.enrageSkills)),this.addLog(`😡 ${this.boss.name} entre en mode ENRAGE !`),this.onPhaseChange?.({boss:this.boss,newPhase:"enrage"})}this.boss.id==="samael_final"&&(t<=.33&&this.boss.currentPhase<3?(this.boss.currentPhase=3,this.boss.skills=Lt(this.floorData.boss.phase3Skills||[]),this.addLog("☠️ SAMAËL — PHASE III : APOCALYPSE !"),this.onPhaseChange?.({boss:this.boss,newPhase:3})):t<=.66&&this.boss.currentPhase<2&&(this.boss.currentPhase=2,this.boss.skills=Lt(this.floorData.boss.phase2Skills||[]),this.addLog("🌑 SAMAËL — PHASE II : DOMINATION !"),this.boss.domainActive=!0,this.onPhaseChange?.({boss:this.boss,newPhase:2})))}_tickBossPassiveHeal(){const t=this.boss.mechanics?.passiveHeal;if(t&&(this._passiveHealTimer||(this._passiveHealTimer=t.interval*1e3),this._passiveHealTimer-=D,this._passiveHealTimer<=0)){this._passiveHealTimer=t.interval*1e3;const e=t.amount;this.boss.currentHp=Math.min(this.boss.maxHp,this.boss.currentHp+e)}}_applyDomainDamage(){const e=(this.boss.mechanics?.domain?.damagePerSecond||.03)*D/1e3;for(const i of this.playerTeam){if(!i.alive)continue;const o=Math.max(1,Math.floor(i.maxHp*e));i.currentHp=Math.max(0,i.currentHp-o),i.currentHp<=0&&(i.alive=!1)}}_tickStatusEffects(t){t.buffs=(t.buffs||[]).filter(e=>e.durationMs!==void 0?(e.remainingMs-=D,e.remainingMs>0):!0)}_tickShieldRegen(){const t=this.boss.mechanics?.shieldRegen;t&&(this._shieldRegenTimer||(this._shieldRegenTimer=t.interval*1e3),this._shieldRegenTimer-=D,this._shieldRegenTimer<=0&&this.boss.shieldValue===0&&(this._shieldRegenTimer=t.interval*1e3,this.boss.shieldValue=Math.floor(this.boss.maxHp*t.value),this.addLog(`🛡️ Le bouclier du ${this.boss.name} se régénère !`),this.onBossAbility?.({type:"shield",value:this.boss.shieldValue})))}_endCombat(t){this.gameOver=!0,this.winner=t,this.stop();const e=Math.floor(this.elapsedTime/1e3);t==="player"?this.addLog(`🏆 Victoire ! Temps: ${Math.floor(e/60)}m${String(e%60).padStart(2,"0")}s`):this.addLog(`💀 Défaite après ${Math.floor(e/60)}m${String(e%60).padStart(2,"0")}s`),this.onTick?.({playerTeam:this.playerTeam,boss:this.boss,elapsedTime:this.elapsedTime,dpsTracker:this.dpsTracker,minDuration:this.minDuration,gameOver:!0,winner:t})}addLog(t){this.log.push({message:t,time:this.elapsedTime}),this.onLog?.(t)}getElapsedSeconds(){return Math.floor(this.elapsedTime/1e3)}getSummary(){return{won:this.winner==="player",duration:this.elapsedTime,dpsTracker:this.dpsTracker,playerTeamState:this.playerTeam,bossState:this.boss}}getSkillCooldownPct(t,e){const i=this.playerTeam.find(s=>s.id===t);if(!i)return 0;const o=i.skills[e];if(!o)return 0;const r=`${e}`,n=i.skillCooldowns[r]||0,l=(o.cooldown||3)*1e3;return n/l}getAutoAttackProgress(t){const e=this.playerTeam.find(i=>i.id===t);return e?1-e.autoAttackTimer/e.autoAttackCooldown:0}}let ht=null,ne=!1,se=1;function wt(){ht&&(clearInterval(ht),ht=null),ne=!1,se=1}function ca(a,t,e,i){wt();const o=t.floor===5;a.innerHTML=`
    <style id="dungeon-cinema-styles">
      @keyframes infernalPulse { 0%,100%{opacity:0.4;transform:scaleX(1)} 50%{opacity:0.7;transform:scaleX(1.04)} }
      @keyframes floatRune { 0%{transform:translateY(0) rotate(0deg);opacity:0} 10%{opacity:0.5} 90%{opacity:0.3} 100%{transform:translateY(-120vh) rotate(540deg);opacity:0} }
      @keyframes emberRise { 0%{transform:translateY(0) translateX(0);opacity:1} 100%{transform:translateY(-90px) translateX(20px);opacity:0} }
      @keyframes bossRage { 0%,100%{filter:drop-shadow(0 0 35px ${t.accentColor}) brightness(1);transform:translateY(0) scale(1)} 25%{filter:drop-shadow(0 0 70px #ff0000) brightness(1.5);transform:translateY(-8px) scale(1.05)} 75%{filter:drop-shadow(0 0 90px #ff4400) brightness(1.3);transform:translateY(5px) scale(0.96)} }
      @keyframes bossHitFlash { 0%{filter:brightness(1)} 20%{filter:brightness(4) invert(0.4);transform:scale(1.1)} 60%{filter:brightness(1.5);transform:scale(0.95)} 100%{filter:brightness(1);transform:scale(1)} }
      @keyframes projRight { 0%{left:180px;opacity:1;transform:scaleX(1)} 100%{left:72%;opacity:0;transform:scaleX(2.5)} }
      @keyframes projLeft { 0%{right:200px;opacity:1} 100%{right:70%;opacity:0} }
      @keyframes impactBurst { 0%{transform:scale(0);opacity:1} 60%{transform:scale(1.5);opacity:0.8} 100%{transform:scale(3);opacity:0} }
      @keyframes playerDash { 0%{transform:translateX(0) scale(1)} 28%{transform:translateX(380px) scale(1.18)} 55%{transform:translateX(340px) scale(1.05)} 100%{transform:translateX(0) scale(1)} }
      @keyframes hellShake { 0%{transform:translate(0,0) rotate(0)} 15%{transform:translate(-9px,6px) rotate(-0.4deg)} 30%{transform:translate(8px,-7px) rotate(0.3deg)} 50%{transform:translate(-6px,4px) rotate(-0.2deg)} 70%{transform:translate(5px,-3px) rotate(0.2deg)} 100%{transform:translate(0,0) rotate(0)} }
      @keyframes phaseFlash { 0%{opacity:0} 25%{opacity:0.75} 75%{opacity:0.4} 100%{opacity:0} }
      @keyframes domainExpand { 0%{opacity:0;transform:scale(0.7)} 100%{opacity:1;transform:scale(1)} }
      @keyframes bannerIn { 0%{opacity:0;transform:translateX(-30px) scale(0.9)} 60%{transform:translateX(4px) scale(1.02)} 100%{opacity:1;transform:translateX(0) scale(1)} }
      @keyframes groundCrack { 0%{width:0;opacity:0.9} 100%{width:100%;opacity:0} }
      @keyframes soarUp { 0%{transform:translateY(0) scale(1);opacity:1} 100%{transform:translateY(-80px) scale(0.2);opacity:0} }
      /* Victory */
      @keyframes goldRain { 0%{transform:translateY(-10px) rotate(0);opacity:1} 100%{transform:translateY(110vh) rotate(720deg);opacity:0} }
      @keyframes victoryZoom { 0%{transform:scale(0.4);opacity:0} 65%{transform:scale(1.08)} 100%{transform:scale(1);opacity:1} }
      @keyframes divineBeam { 0%,100%{opacity:0.3} 50%{opacity:0.85} }
      @keyframes slideUp { 0%{transform:translateY(28px);opacity:0} 100%{transform:translateY(0);opacity:1} }
      /* Defeat */
      @keyframes eclipseIn { 0%{opacity:0;transform:scale(0.2)} 100%{opacity:1;transform:scale(1)} }
      @keyframes defeatReveal { 0%{opacity:0;transform:scale(2) translateY(-30px)} 100%{opacity:1;transform:scale(1) translateY(0)} }
      @keyframes bloodDrip { 0%{height:0;opacity:0.9} 100%{height:100%;opacity:0.2} }
      @keyframes shadowWave { 0%,100%{opacity:0.6} 50%{opacity:1} }
      @keyframes defeatEclipse { 0%{opacity:0} 100%{opacity:1} }
    </style>

    <div class="screen" id="dungeon-combat-screen" style="position:relative;overflow:hidden;background:#000">

      <!-- ──── BACKGROUND LAYERS ──── -->
      <!-- Deep abyss radial -->
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse 120% 100% at 50% 90%,
        #200010 0%,#0d0008 35%,#040008 70%,#010004 100%);z-index:0"></div>

      <!-- Lava glow from ground -->
      <div style="position:absolute;bottom:0;left:0;right:0;height:50%;
        background:radial-gradient(ellipse at 50% 100%,rgba(200,15,15,0.45) 0%,rgba(100,0,40,0.25) 40%,transparent 70%);
        z-index:1;animation:infernalPulse 3.5s ease-in-out infinite"></div>

      <!-- Lava horizon line -->
      <div style="position:absolute;bottom:160px;left:0;right:0;height:3px;
        background:linear-gradient(90deg,transparent 0%,rgba(255,60,0,0.85) 20%,rgba(255,180,0,1) 50%,rgba(255,60,0,0.85) 80%,transparent 100%);
        z-index:2;animation:infernalPulse 2.2s ease-in-out infinite"></div>
      <div style="position:absolute;bottom:158px;left:0;right:0;height:8px;
        background:linear-gradient(to bottom,rgba(255,100,0,0.3),transparent);z-index:2"></div>

      <!-- Dark pillars (architecture) -->
      <div style="position:absolute;inset:0;z-index:1;pointer-events:none">
        ${Array.from({length:6},(r,n)=>`
          <div style="position:absolute;bottom:160px;left:${5+n*16}%;width:22px;
            background:linear-gradient(to top,rgba(60,5,15,1),rgba(30,0,12,0.7),transparent);
            height:${45+Math.random()*15}%;border-radius:3px 3px 0 0;
            box-shadow:inset -4px 0 8px rgba(0,0,0,0.6),0 0 18px rgba(180,10,10,0.25)"></div>
          <div style="position:absolute;bottom:160px;right:${5+n*16}%;width:22px;
            background:linear-gradient(to top,rgba(60,5,15,1),rgba(30,0,12,0.7),transparent);
            height:${40+Math.random()*15}%;border-radius:3px 3px 0 0;
            box-shadow:inset 4px 0 8px rgba(0,0,0,0.6),0 0 18px rgba(180,10,10,0.25)"></div>
        `).join("")}
      </div>

      <!-- Sky crack effect (top) -->
      <div style="position:absolute;top:0;left:0;right:0;height:120px;
        background:linear-gradient(to bottom,rgba(100,0,0,0.4),transparent);z-index:1"></div>

      <!-- ──── PARTICLES ──── -->
      <div id="dungeon-particles" style="position:absolute;inset:0;pointer-events:none;z-index:2"></div>

      <!-- ──── DOMAIN VEIL (Phase 2 Samaël) ──── -->
      <div id="domain-overlay" style="display:none;position:absolute;inset:0;z-index:8;pointer-events:none">
        <div style="position:absolute;inset:0;
          background:radial-gradient(ellipse at 50% 50%,rgba(90,0,130,0.38),rgba(160,0,60,0.22) 50%,transparent 80%);
          animation:domainExpand 2s ease-out forwards"></div>
        <div style="position:absolute;inset:5%;border:2px solid rgba(180,0,255,0.25);border-radius:50%;
          animation:infernalPulse 2.5s ease-in-out infinite"></div>
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
          font-size:220px;opacity:0.035;pointer-events:none;animation:infernalPulse 5s ease-in-out infinite">☠️</div>
      </div>

      <!-- ──── PHASE FLASH ──── -->
      <div id="phase-flash" style="display:none;position:absolute;inset:0;z-index:40;pointer-events:none;
        background:radial-gradient(ellipse at 50% 50%,rgba(255,0,0,0.75),rgba(80,0,200,0.55))"></div>

      <!-- ──── BOSS HUD (top bar) ──── -->
      <div id="boss-hud" style="position:absolute;top:0;left:0;right:0;z-index:30;padding:14px 24px 10px;
        background:linear-gradient(to bottom,rgba(0,0,0,0.95) 60%,rgba(0,0,0,0))">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:6px">
          <div id="boss-hud-icon" style="font-size:34px;animation:bossRage ${o?"2":"3.5"}s ease-in-out infinite">${t.boss.icon}</div>
          <div style="flex:1">
            <div style="display:flex;justify-content:space-between;margin-bottom:5px">
              <span style="font-family:var(--font-title);font-size:17px;letter-spacing:3px;
                color:${t.accentColor};text-shadow:0 0 18px ${t.accentColor}99" id="boss-name">${t.boss.name}</span>
              <span id="boss-phase-badge" style="font-family:var(--font-stat);font-size:11px;letter-spacing:2px;color:${t.accentColor}"></span>
            </div>
            <div style="position:relative;height:18px;background:rgba(0,0,0,0.75);border-radius:9px;
              border:1px solid ${t.accentColor}44;overflow:hidden">
              <div id="boss-hp-bar" style="height:100%;width:100%;border-radius:9px;
                background:linear-gradient(90deg,#990020,#dd2244,#ff4466);transition:width 0.4s ease"></div>
              <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,0.14),transparent);
                border-radius:9px;pointer-events:none"></div>
            </div>
            <div style="display:flex;justify-content:space-between;margin-top:3px">
              <span style="font-size:9px;color:rgba(255,255,255,0.45)" id="boss-hp-text">
                ${t.boss.stats.hp.toLocaleString()} / ${t.boss.stats.hp.toLocaleString()}</span>
              <span style="font-size:9px;color:${t.accentColor}" id="boss-shield-text"></span>
            </div>
          </div>
        </div>
        <div style="display:flex;gap:16px;justify-content:flex-end;align-items:center">
          <span style="font-size:10px;color:rgba(255,215,0,0.8);font-family:var(--font-stat)" id="timer-display">⏱️ 0:00</span>
          <span style="font-size:10px;font-family:var(--font-stat)" id="min-timer-display">Min: ${Math.floor(t.minDuration/60)}:00</span>
          <button id="flee-btn" style="background:rgba(0,0,0,0.5);border:1px solid rgba(255,50,50,0.35);
            border-radius:6px;cursor:pointer;padding:4px 12px;color:rgba(255,100,100,0.8);
            font-size:10px;font-family:var(--font-stat);letter-spacing:1px">🏃 FUIR</button>
        </div>
      </div>

      <!-- ──── BATTLEFIELD ──── -->
      <div id="dungeon-battlefield" style="position:absolute;inset:0;z-index:5;
        display:flex;align-items:flex-end;justify-content:space-between;padding:90px 80px 165px">

        <!-- Player sprites left -->
        <div id="player-sprites" style="display:flex;flex-direction:column;gap:4px;align-items:flex-start"></div>

        <!-- Attack lane (projectiles) -->
        <div id="attack-lane" style="position:absolute;inset:0;pointer-events:none;z-index:6"></div>

        <!-- Boss right -->
        <div id="boss-display" style="position:relative;text-align:center;align-self:center;padding-bottom:20px">
          <div id="boss-aura" style="position:absolute;inset:-25px;border-radius:50%;
            background:radial-gradient(ellipse,${t.accentColor}28 0%,transparent 70%);
            animation:infernalPulse 2s ease-in-out infinite;z-index:0"></div>
          <div id="boss-invisible-overlay" style="display:none;position:absolute;inset:0;
            background:rgba(200,220,255,0.06);border-radius:50%;z-index:5"></div>
          <div id="boss-sprite" style="font-size:${o?"130":"105"}px;position:relative;z-index:1;
            filter:drop-shadow(0 0 45px ${t.accentColor});
            animation:bossRage ${o?"1.8":"3"}s ease-in-out infinite">${t.boss.icon}</div>
          <div style="position:absolute;bottom:-28px;left:50%;transform:translateX(-50%);
            font-size:11px;font-family:var(--font-title);letter-spacing:2px;
            color:${t.accentColor};opacity:0.7;white-space:nowrap">${t.boss.name.toUpperCase()}</div>
          <div id="boss-domain-sigil" style="position:absolute;top:-40px;left:50%;transform:translateX(-50%);
            font-size:20px;opacity:0;transition:opacity 1.5s ease;filter:drop-shadow(0 0 12px #ff00ff)">🔴</div>
        </div>
      </div>

      <!-- ──── PLAYER HUD (bottom) ──── -->
      <div id="player-hud-bottom" style="position:absolute;bottom:0;left:0;right:0;z-index:25;
        background:linear-gradient(to top,rgba(0,0,0,0.97) 60%,rgba(0,0,0,0.6));
        border-top:1px solid rgba(200,10,10,0.4);padding:10px 16px;display:flex;gap:8px"></div>

      <!-- ──── COMBAT LOG ──── -->
      <div id="dungeon-log" style="position:absolute;left:16px;top:112px;width:230px;
        max-height:170px;overflow:hidden;display:flex;flex-direction:column-reverse;
        gap:2px;pointer-events:none;z-index:15"></div>

      <!-- ──── ABILITY ALERT ──── -->
      <div id="boss-ability-alert" style="position:absolute;top:42%;left:50%;
        transform:translate(-50%,-50%);display:none;z-index:50;text-align:center;pointer-events:none"></div>

      <!-- ──── RESULT OVERLAY ──── -->
      <div id="dungeon-result-overlay"></div>
    </div>
  `,document.getElementById("flee-btn").addEventListener("click",()=>{confirm("Fuir l'épreuve ?")&&(wt(),i())}),ha(t),ga(t)}function ga(a,t){let e=0;ht=setInterval(()=>{const i=document.getElementById("attack-lane");if(!i){clearInterval(ht);return}e++,e%2===0?fa(i,a):ma(i,a),e%4===0&&Xe(i)},1100)}function fa(a,t){const e=["#4ADE80","#60A5FA","#FBBF24","#F87171","#A78BFA","#34D399"],i=e[Math.floor(Math.random()*e.length)],o=30+Math.random()*25,r=document.createElement("div");r.style.cssText=`position:absolute;left:180px;top:${o}%;
    width:26px;height:9px;border-radius:50%;pointer-events:none;
    background:radial-gradient(circle,#fff 20%,${i} 60%,transparent);
    box-shadow:0 0 18px ${i},0 0 35px ${i}77;
    animation:projRight 0.5s cubic-bezier(0.25,0.1,0.85,1) forwards;z-index:10`,a.appendChild(r),setTimeout(()=>{r.remove(),Ve(a,"72%",o,i,"right");const n=document.getElementById("boss-sprite");n&&(n.style.animation="bossHitFlash 0.35s ease-out",setTimeout(()=>{n.style.animation=`bossRage ${t.floor===5?"1.8":"3"}s ease-in-out infinite`},360))},470)}function ma(a,t){const e=t.accentColor||"#ff2244",i=32+Math.random()*22,o=document.createElement("div");o.style.cssText=`position:absolute;right:200px;top:${i}%;
    width:32px;height:11px;border-radius:50%;pointer-events:none;
    background:radial-gradient(circle,#fff 10%,${e} 50%,transparent);
    box-shadow:0 0 22px ${e},0 0 45px ${e}66;
    animation:projLeft 0.48s cubic-bezier(0.25,0.1,0.85,1) forwards;z-index:10`,a.appendChild(o),setTimeout(()=>{o.remove(),Ve(a,"12%",i,e,"left"),be()},460)}function Ve(a,t,e,i,o){const r=document.createElement("div");r.style.cssText=`position:absolute;${o}:${t};top:${e}%;
    width:55px;height:55px;border-radius:50%;pointer-events:none;
    transform:translate(${o==="left"?"-50%":"50%"},-50%);
    background:radial-gradient(circle,#fff 8%,${i} 35%,transparent 65%);
    box-shadow:0 0 35px ${i};
    animation:impactBurst 0.4s ease-out forwards;z-index:11`,a.appendChild(r),setTimeout(()=>r.remove(),420)}function Xe(a){const t=document.createElement("div");t.style.cssText=`position:absolute;bottom:168px;left:8%;height:2px;width:0;
    background:linear-gradient(90deg,transparent,rgba(255,80,0,0.9),rgba(255,200,0,0.7),transparent);
    animation:groundCrack 0.7s ease-out forwards;z-index:12;pointer-events:none`,a.appendChild(t),setTimeout(()=>t.remove(),720)}function be(){const a=document.getElementById("dungeon-combat-screen");a&&(a.style.animation="hellShake 0.32s ease-out",setTimeout(()=>{a.style.animation=""},340))}function ua(a,t,e){const{playerTeam:i,boss:o,elapsedTime:r,dpsTracker:n,minDuration:l,gameOver:s,winner:d}=a,g=Math.floor(r/1e3),p=Math.max(0,o.currentHp/o.maxHp*100),m=document.getElementById("boss-hp-bar");m&&(m.style.width=`${p}%`,m.style.background=p>60?"linear-gradient(90deg,#990020,#dd2244,#ff6644)":p>30?"linear-gradient(90deg,#cc4400,#ff6600,#ffaa00)":"linear-gradient(90deg,#660000,#aa0000,#ff2200)");const f=document.getElementById("boss-hp-text");f&&(f.textContent=`${Math.max(0,o.currentHp).toLocaleString()} / ${o.maxHp.toLocaleString()}`);const u=document.getElementById("boss-shield-text");u&&(u.textContent=o.shieldValue>0?`🛡️ ${o.shieldValue.toLocaleString()}`:"");const v=o.currentPhase||1;v!==se&&(se=v,xa(v));const k=document.getElementById("boss-phase-badge");if(k){const x={1:"PHASE I",2:"⚡ PHASE II",3:"💀 PHASE III — ARMAGEDDON"};k.textContent=x[v]||"",k.style.color=v===3?"#ff2244":v===2?"#cc44ff":t.accentColor}if(t.floor===5&&v>=2&&!ne){ne=!0;const x=document.getElementById("domain-overlay");x&&(x.style.display="block");const $=document.getElementById("boss-domain-sigil");$&&($.style.opacity="1")}const b=document.getElementById("timer-display");b&&(b.textContent=`⏱️ ${Math.floor(g/60)}:${String(g%60).padStart(2,"0")}`);const z=document.getElementById("min-timer-display");if(z){const x=Math.max(0,Math.floor(l/1e3)-g);z.textContent=x>0?`⏳ ${Math.floor(x/60)}:${String(x%60).padStart(2,"0")} restant`:"✅ Durée ok",z.style.color=x>0?"#ff8800":"#4ADE80"}const R=document.getElementById("boss-invisible-overlay");R&&(R.style.display=o.isInvisible?"block":"none");const B=document.getElementById("boss-sprite");B&&(B.style.opacity=o.isInvisible?"0.12":"1");const h=document.getElementById("player-sprites");h&&(h.innerHTML=i.map(x=>{const $=Math.max(0,x.currentHp/x.maxHp*100);return`
        <div id="ps-${x.id}" style="display:flex;align-items:center;gap:8px;
          opacity:${x.alive?1:.2};transition:opacity 0.5s">
          <div style="position:relative">
            <img src="${C(x.type)}" style="width:70px;height:70px;image-rendering:pixelated;
              filter:drop-shadow(0 0 12px ${x.alive?"rgba(100,200,255,0.55)":"rgba(255,0,0,0.2)"})
              ${x.alive?"":"grayscale(1)"};transition:filter 0.3s">
            <div style="position:absolute;bottom:-5px;left:2px;right:2px;height:4px;
              background:rgba(0,0,0,0.6);border-radius:2px;overflow:hidden">
              <div style="height:100%;width:${$}%;border-radius:2px;transition:width 0.3s;
                background:${$>55?"#4ADE80":$>25?"#FBBF24":"#ff2244"}"></div>
            </div>
            ${x.alive?"":'<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:22px">💀</div>'}
          </div>
        </div>`}).join(""));const E=document.getElementById("player-hud-bottom");E&&(E.innerHTML=i.map(x=>{const $=Math.max(0,x.currentHp/x.maxHp*100),S=n[x.id]||0,tt=e?e.getAutoAttackProgress(x.id)*100:0;return`<div style="flex:1;background:rgba(15,0,5,0.85);border-radius:8px;padding:8px;
        border:1px solid ${x.alive?"rgba(180,10,20,0.35)":"rgba(60,0,0,0.4)"}">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:5px">
          <img src="${C(x.type)}" style="width:26px;height:26px;image-rendering:pixelated;${x.alive?"":"filter:grayscale(1);opacity:0.35"}">
          <div>
            <div style="font-size:9px;font-weight:700;color:var(--${x.rarity})">${x.name.split(" ")[0]}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.35)">${S>0?Math.round(S/Math.max(1,g))+" DPS":x.type}</div>
          </div>
        </div>
        <div style="height:5px;background:rgba(0,0,0,0.55);border-radius:3px;margin-bottom:3px;overflow:hidden">
          <div style="height:100%;width:${$}%;border-radius:3px;transition:width 0.2s;
            background:${$>55?"#4ADE80":$>25?"#ff8800":"#ff2244"}"></div>
        </div>
        <div style="height:3px;background:rgba(255,255,255,0.06);border-radius:2px;margin-bottom:5px;overflow:hidden">
          <div style="height:100%;width:${tt}%;background:rgba(255,200,50,0.75);transition:width 0.1s linear;border-radius:2px"></div>
        </div>
        <div style="display:flex;gap:3px;flex-wrap:wrap">
          ${(x.skills||[]).slice(0,4).map((ct,$e)=>{const Wt=e?e.getSkillCooldownPct(x.id,$e)*100:0;return`<button class="dsk" data-char="${x.id}" data-skill="${$e}"
              style="width:28px;height:28px;font-size:12px;border:1px solid rgba(180,10,20,0.35);
              border-radius:6px;background:rgba(0,0,0,0.45);cursor:pointer;position:relative;overflow:hidden;
              ${x.alive?"":"opacity:0.3;pointer-events:none"}${Wt>0?";opacity:0.45":""}">
              ${ct.icon}
              ${Wt>0?`<div style="position:absolute;top:0;left:0;width:100%;height:${Wt}%;background:rgba(0,0,0,0.65)"></div>`:""}
            </button>`}).join("")}
        </div>
      </div>`}).join(""),E.querySelectorAll(".dsk").forEach(x=>{x.addEventListener("click",()=>{e&&e.activateSkill(x.dataset.char,parseInt(x.dataset.skill));const $=document.getElementById(`ps-${x.dataset.char}`)?.querySelector("img");$&&($.style.animation="playerDash 0.55s ease-out",setTimeout(()=>{$.style.animation=""},580)),Xe(document.getElementById("attack-lane"))})}))}function xa(a,t){const e=document.getElementById("phase-flash");e&&(e.style.display="block",e.style.animation="phaseFlash 1.3s ease-out forwards",setTimeout(()=>{e.style.display="none",e.style.animation=""},1320)),be();const i=document.getElementById("boss-aura");i&&(i.style.background=a===3?"radial-gradient(ellipse,rgba(255,0,0,0.55) 0%,rgba(80,0,200,0.3) 50%,transparent 70%)":"radial-gradient(ellipse,rgba(180,0,255,0.4) 0%,transparent 70%)"),le({newPhase:a})}function le(a){const t=document.getElementById("boss-ability-alert");if(!t)return;const e={2:{t:"— PHASE II : DOMINATION —",c:"#cc44ff"},3:{t:"☠ PHASE III : FIN DU MONDE ☠",c:"#ff2244"},enrage:{t:"⚡ ENRAGE !",c:"#FBBF24"},shield:{t:"🛡️ BOUCLIER RÉGÉNÉRÉ",c:"#60A5FA"},clone:{t:"👥 DÉDOUBLEMENT !",c:"#A78BFA"},domain:{t:"🔴 DOMAINE DE SAMAËL ACTIVÉ",c:"#ff2244"},invisible:{t:"🌫️ DISPARITION DIVINE",c:"#94A3B8"},emerge_burst:{t:"💥 BURST D'ÉMERGENCE !",c:"#FBBF24"},revive:{t:"⚠️ IL REFUSE LA MORT !",c:"#ff4400"}},i=a?.newPhase||a?.type,o=e[i]||{t:"Compétence!",c:"#fff"};if(t.innerHTML=`<div style="font-family:var(--font-title);font-size:${a?.newPhase?"30":"20"}px;
    letter-spacing:4px;color:${o.c};text-shadow:0 0 25px ${o.c}99;
    padding:12px 36px;background:rgba(0,0,0,0.75);border:1px solid ${o.c}44;
    border-radius:4px;animation:bannerIn 0.5s ease">${o.t}</div>`,t.style.display="block",i==="domain"){const r=document.getElementById("domain-overlay");r&&(r.style.display="block")}["domain","emerge_burst","revive","3"].includes(String(i))&&be(),setTimeout(()=>{t.style.display="none"},a?.newPhase?3e3:2200)}function va(a){const t=document.getElementById("dungeon-log");if(!t)return;const e=document.createElement("div");for(e.textContent=a,e.style.cssText="font-size:9px;color:rgba(255,180,180,0.75);padding:2px 6px;background:rgba(0,0,0,0.55);border-left:2px solid rgba(200,10,30,0.5);border-radius:0 3px 3px 0;animation:fadeIn 0.3s ease",t.prepend(e);t.children.length>11;)t.lastChild.remove()}function ba(a,t,e){const i=document.getElementById("dungeon-result-overlay");if(!i)return;const{archireveEarned:o,xpAmount:r,xpResults:n,itemEarned:l}=e,s=a.floor===5;return i.style.cssText="position:absolute;inset:0;z-index:100",i.innerHTML=`
    <div style="position:absolute;inset:0;
      background:radial-gradient(ellipse at 50% 0%,rgba(255,220,0,0.22) 0%,rgba(200,100,0,0.12) 35%,rgba(0,0,0,0.97) 65%);
      animation:defeatEclipse 1.2s ease-out forwards"></div>

    <!-- Divine light beam -->
    <div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:220px;height:65%;
      background:linear-gradient(to bottom,rgba(255,230,100,0.45),transparent);
      animation:divineBeam 2.5s ease-in-out infinite;pointer-events:none"></div>
    <div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:80px;height:40%;
      background:linear-gradient(to bottom,rgba(255,255,200,0.55),transparent);
      animation:divineBeam 1.8s 0.3s ease-in-out infinite;pointer-events:none"></div>

    <!-- Gold rain -->
    <div id="vp" style="position:absolute;inset:0;pointer-events:none;overflow:hidden"></div>

    <div style="position:absolute;inset:0;display:flex;flex-direction:column;
      align-items:center;justify-content:center;gap:18px">

      <div style="font-size:${s?"78":"60"}px;
        animation:victoryZoom 0.9s cubic-bezier(0.175,0.885,0.32,1.275) forwards">${s?"☠️":"🏆"}</div>

      <div style="font-family:var(--font-title);font-size:${s?"54":"42"}px;letter-spacing:8px;
        background:linear-gradient(135deg,#FFD700 0%,#FFA500 40%,#FFED4E 70%,#FFD700 100%);
        -webkit-background-clip:text;-webkit-text-fill-color:transparent;
        filter:drop-shadow(0 0 35px rgba(255,200,0,0.85));
        animation:victoryZoom 0.9s 0.2s cubic-bezier(0.175,0.885,0.32,1.275) both">
        ${s?"SAMAËL VAINCU":"VICTOIRE"}
      </div>

      ${t.isFirstClear?'<div style="font-size:13px;color:#4ADE80;letter-spacing:3px;animation:slideUp 0.5s 0.5s ease-out both">✦ PREMIÈRE VICTOIRE ✦</div>':`<div style="font-size:11px;color:rgba(255,255,255,0.45);animation:slideUp 0.5s 0.5s ease-out both">${t.clears}ème victoire · Récompenses ×0.3</div>`}

      <div style="display:flex;gap:20px;margin-top:6px;animation:slideUp 0.5s 0.7s ease-out both">
        <div style="text-align:center;background:rgba(255,200,0,0.09);border:1px solid rgba(255,200,0,0.25);border-radius:10px;padding:14px 22px">
          <div style="font-size:24px;color:#FFD700;font-family:var(--font-stat);font-weight:900">+${o}</div>
          <div style="font-size:9px;color:rgba(255,255,255,0.4);letter-spacing:2px">ARCHIRÊVES</div>
        </div>
        <div style="text-align:center;background:rgba(74,222,128,0.09);border:1px solid rgba(74,222,128,0.25);border-radius:10px;padding:14px 22px">
          <div style="font-size:24px;color:#4ADE80;font-family:var(--font-stat);font-weight:900">+${r}</div>
          <div style="font-size:9px;color:rgba(255,255,255,0.4);letter-spacing:2px">XP ÉQUIPE</div>
        </div>
        ${l?`
        <div style="text-align:center;background:rgba(167,139,250,0.09);border:1px solid rgba(167,139,250,0.25);border-radius:10px;padding:14px 22px">
          <div style="font-size:30px">${l.icon}</div>
          <div style="font-size:10px;color:#A78BFA;font-weight:700">${l.name}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.35)">Obtenu !</div>
        </div>`:""}
      </div>

      ${n.some(d=>d.leveled)?`<div style="display:flex;gap:8px;animation:slideUp 0.5s 0.9s ease-out both">
        ${n.filter(d=>d.leveled).map(()=>'<div style="font-size:11px;color:#FFD700;background:rgba(255,200,0,0.12);border:1px solid rgba(255,200,0,0.3);padding:4px 14px;border-radius:20px">⬆️ LEVEL UP !</div>').join("")}
      </div>`:""}

      <div style="display:flex;gap:12px;margin-top:10px;animation:slideUp 0.5s 1.1s ease-out both" id="victory-btns"></div>
    </div>
  `,setTimeout(()=>{const d=document.getElementById("vp");if(d)for(let g=0;g<65;g++){const p=document.createElement("div"),m=4+Math.random()*8,f=Math.random()*100,u=Math.random()*3.5,v=2.5+Math.random()*4,k=["#FFD700","#FFA500","#FFED4E","#fff","#FFC107"];p.style.cssText=`position:absolute;top:-20px;left:${f}%;width:${m}px;height:${m}px;border-radius:50%;
        background:${k[Math.floor(Math.random()*k.length)]};
        animation:goldRain ${v}s ${u}s linear infinite`,d.appendChild(p)}},300),document.getElementById("victory-btns")}function ya(a){const t=document.getElementById("dungeon-result-overlay");if(t)return t.style.cssText="position:absolute;inset:0;z-index:100",t.innerHTML=`
    <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 35%,
      rgba(80,0,0,0.97) 0%,rgba(20,0,0,0.99) 50%,rgba(0,0,0,1) 100%);
      animation:defeatEclipse 1.8s ease-out forwards"></div>

    <!-- Eclipse orb -->
    <div style="position:absolute;top:8%;left:50%;transform:translateX(-50%);width:210px;height:210px;
      border-radius:50%;background:radial-gradient(circle,rgba(140,0,0,0.65),rgba(40,0,0,0.85) 55%,rgba(0,0,0,1));
      border:2px solid rgba(160,0,0,0.35);
      box-shadow:0 0 90px rgba(160,0,0,0.45),0 0 180px rgba(60,0,0,0.3);
      animation:eclipseIn 1.8s cubic-bezier(0.175,0.885,0.32,1.275) forwards,shadowWave 3s 1.8s ease-in-out infinite"></div>

    <!-- Blood drips -->
    <div style="position:absolute;top:0;left:18%;width:2px;height:0;background:linear-gradient(to bottom,rgba(160,0,0,0.85),transparent);animation:bloodDrip 2.2s 0.8s ease-out forwards"></div>
    <div style="position:absolute;top:0;left:48%;width:1px;height:0;background:linear-gradient(to bottom,rgba(160,0,0,0.6),transparent);animation:bloodDrip 2.8s 0.3s ease-out forwards"></div>
    <div style="position:absolute;top:0;left:74%;width:2px;height:0;background:linear-gradient(to bottom,rgba(160,0,0,0.75),transparent);animation:bloodDrip 2.1s 1.2s ease-out forwards"></div>

    <!-- Boss looming -->
    <div style="position:absolute;top:12%;left:50%;transform:translateX(-50%);font-size:68px;opacity:0;
      filter:drop-shadow(0 0 35px rgba(255,0,0,0.65));
      animation:slideUp 1s 1.2s ease-out both">${a.boss.icon}</div>

    <div style="position:absolute;inset:0;display:flex;flex-direction:column;
      align-items:center;justify-content:center;gap:14px;padding-top:90px">

      <div style="font-family:var(--font-title);font-size:66px;letter-spacing:10px;color:#bb0000;
        text-shadow:0 0 50px rgba(255,0,0,0.65),0 0 100px rgba(80,0,0,0.4);
        animation:defeatReveal 0.8s 1s cubic-bezier(0.175,0.885,0.32,1.275) both">DÉFAITE</div>

      <div style="font-size:13px;color:rgba(255,100,100,0.7);letter-spacing:2px;
        animation:slideUp 0.6s 1.5s ease-out both">
        Anéantis par <span style="color:#ff4444;font-weight:700">${a.boss.name}</span>
      </div>

      <div style="font-size:11px;color:rgba(255,255,255,0.22);max-width:420px;text-align:center;
        line-height:1.9;margin-top:6px;font-style:italic;
        animation:slideUp 0.6s 1.8s ease-out both">
        "Les ténèbres de Samaël ont consumé vos âmes."
      </div>

      <div style="display:flex;gap:12px;margin-top:20px;animation:slideUp 0.6s 2.1s ease-out both" id="defeat-btns"></div>
    </div>
  `,document.getElementById("defeat-btns")}function ha(a){const t=document.getElementById("dungeon-particles");if(!t)return;const e=["ᚱ","ᚷ","ᛏ","ᚦ","ᛉ","☽","☿","⊕","❋","✦","⋆"];for(let i=0;i<28;i++){const o=document.createElement("div"),r=Math.random()*100,n=2+Math.random()*3.5,l=Math.random()*14,s=1.5+Math.random()*3;o.style.cssText=`position:absolute;left:${r}%;bottom:162px;width:${n}px;height:${n}px;
      background:${a.accentColor};border-radius:50%;opacity:0;
      animation:emberRise ${s}s ${l}s ease-out infinite;
      box-shadow:0 0 5px ${a.accentColor}`,t.appendChild(o)}for(let i=0;i<10;i++){const o=document.createElement("div"),r=5+Math.random()*90,n=12+Math.random()*10,l=Math.random()*18,s=10+Math.random()*14;o.style.cssText=`position:absolute;left:${r}%;bottom:0;font-size:${n}px;
      color:${a.accentColor};opacity:0;pointer-events:none;
      animation:floatRune ${s}s ${l}s linear infinite;
      text-shadow:0 0 10px ${a.accentColor}`,o.textContent=e[Math.floor(Math.random()*e.length)],t.appendChild(o)}}let L=null;function wa(){L=null,qt()}function qt(){const a=document.getElementById("app"),t=c.getTeamInstances(),e=Ft.reduce((o,r)=>o+(c.getDungeonFloorProgress(r.floor).clears||0),0),i=Ft.filter(o=>c.getDungeonFloorProgress(o.floor).clears>0).length;a.innerHTML=`
    <div style="width:100vw;height:100vh;overflow:hidden;position:relative;
      background:linear-gradient(180deg,#090012,#05000a);display:flex;flex-direction:column">

      <div style="position:absolute;top:0;left:50%;transform:translateX(-50%);
        width:800px;height:400px;pointer-events:none;z-index:0;
        background:radial-gradient(ellipse,rgba(180,0,20,0.06),transparent 70%)"></div>

      <div style="display:flex;align-items:center;justify-content:space-between;
        padding:0 32px;height:56px;flex-shrink:0;z-index:10;
        background:rgba(5,0,10,0.97);border-bottom:1px solid rgba(255,34,68,0.12)">
        <button id="back-btn" style="background:none;border:1px solid rgba(255,34,68,0.2);
          color:rgba(255,100,120,0.6);width:36px;height:36px;border-radius:6px;
          cursor:pointer;font-size:14px">◀</button>
        <div style="display:flex;align-items:center;gap:12px">
          <div style="font-size:18px;animation:deathPulse 2s ease infinite">☠️</div>
          <div style="font-family:var(--font-title);font-size:15px;font-weight:700;
            letter-spacing:6px;color:#ff4466">EPREUVE DE SAMAEL</div>
        </div>
        <div style="display:flex;gap:14px;align-items:center">
          <div style="text-align:center">
            <div style="font-family:var(--font-stat);font-size:16px;font-weight:700;color:#ff4466">${i}/5</div>
            <div style="font-size:8px;color:rgba(255,100,120,0.4);letter-spacing:1px">ETAGES</div>
          </div>
          <div style="display:flex;align-items:center;gap:6px;
            background:rgba(200,155,60,0.06);border:1px solid rgba(200,155,60,0.12);
            border-radius:6px;padding:6px 12px">
            <span style="color:#E8B860">⭐</span>
            <span style="font-family:var(--font-stat);font-size:13px;font-weight:700;color:#E8D9B5">${c.state.archireve.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div style="flex:1;overflow-y:auto;display:flex;z-index:2">

        <div style="width:300px;flex-shrink:0;padding:20px;border-right:1px solid rgba(255,34,68,0.06);
          display:flex;flex-direction:column;gap:12px">

          <div style="background:rgba(180,0,20,0.08);border:1px solid rgba(255,34,68,0.25);
            border-radius:8px;padding:14px">
            <div style="font-size:14px;margin-bottom:6px">⚠️</div>
            <div style="font-size:10px;color:rgba(255,120,140,0.8);line-height:1.7">${sa.subtitle}</div>
          </div>

          <div style="background:rgba(10,6,20,0.8);border:1px solid rgba(255,34,68,0.08);
            border-radius:8px;padding:12px">
            <div style="font-family:var(--font-title);font-size:9px;letter-spacing:2px;
              color:rgba(255,100,120,0.4);margin-bottom:8px">— EQUIPE —</div>
            <div style="display:flex;gap:6px;justify-content:center">
              ${t.slice(0,4).map(o=>`
                <div style="width:40px;height:40px;border-radius:6px;
                  background:rgba(255,34,68,0.06);border:1px solid rgba(255,34,68,0.15);
                  display:flex;align-items:center;justify-content:center;font-size:16px">
                  ⚔
                </div>
              `).join("")}
              ${Array.from({length:Math.max(0,4-t.length)},()=>`
                <div style="width:40px;height:40px;border-radius:6px;
                  border:1px dashed rgba(255,34,68,0.1);
                  display:flex;align-items:center;justify-content:center;
                  color:rgba(255,34,68,0.2);font-size:20px">+</div>
              `).join("")}
            </div>
            ${t.length<4?`<div style="font-size:9px;color:rgba(245,158,11,0.6);
              text-align:center;margin-top:6px">⚠ Equipe incomplete (${t.length}/4)</div>`:""}
          </div>

          <div style="background:rgba(10,6,20,0.8);border:1px solid rgba(255,34,68,0.08);
            border-radius:8px;padding:12px">
            <div style="font-family:var(--font-title);font-size:9px;letter-spacing:2px;
              color:rgba(255,100,120,0.4);margin-bottom:8px">— STATS DONJON —</div>
            <div style="display:flex;justify-content:space-between;padding:5px 0;
              border-bottom:1px solid rgba(255,34,68,0.06)">
              <span style="font-size:10px;color:rgba(255,100,120,0.4)">Total Clears</span>
              <span style="font-family:var(--font-stat);font-size:12px;color:#ff6688">${e}</span>
            </div>
            <div style="display:flex;justify-content:space-between;padding:5px 0">
              <span style="font-size:10px;color:rgba(255,100,120,0.4)">Etages debloques</span>
              <span style="font-family:var(--font-stat);font-size:12px;color:#ff6688">${i}/5</span>
            </div>
          </div>
        </div>

        <div style="flex:1;padding:20px 24px;overflow-y:auto">
          <div style="font-family:var(--font-title);font-size:9px;letter-spacing:4px;
            color:rgba(255,34,68,0.3);margin-bottom:16px">— NIVEAUX DU DONJON —</div>
          <div style="display:flex;flex-direction:column;gap:12px;max-width:680px">
            ${Ft.map(o=>$a(o)).join("")}
          </div>
        </div>
      </div>
    </div>

    <style>
      @keyframes deathPulse {
        0%,100%{filter:drop-shadow(0 0 4px rgba(255,80,100,0.4));}
        50%{filter:drop-shadow(0 0 16px rgba(255,80,100,0.9)) brightness(1.3);}
      }
      @keyframes bossGlow {
        0%,100%{box-shadow:0 0 20px rgba(255,20,50,0.12);}
        50%{box-shadow:0 0 40px rgba(255,20,50,0.28);}
      }
    </style>
  `,document.getElementById("back-btn").addEventListener("click",()=>w.navigate("home")),document.querySelectorAll(".floor-enter-btn").forEach(o=>{o.addEventListener("click",()=>{const r=parseInt(o.dataset.floor);de(r)})})}function $a(a){const t=c.getDungeonFloorProgress(a.floor),e=c.isDungeonFloorUnlocked(a.floor),i=a.floor===5,o=t.clears>0,r=t.bestTime?`${Math.floor(t.bestTime/60)}m${String(t.bestTime%60).padStart(2,"0")}s`:null,n=a.accentColor||(i?"#ff2244":"#aa44ff");return`
    <div style="
      border-radius:10px;overflow:hidden;
      border:1px solid ${e?i?"rgba(255,20,50,0.35)":"rgba(150,50,255,0.25)":"rgba(40,30,60,0.3)"};
      background:${i&&e?"linear-gradient(135deg,rgba(80,0,20,0.4),rgba(5,0,12,0.9))":"linear-gradient(135deg,rgba(20,10,35,0.6),rgba(5,0,12,0.9))"};
      ${e?"":"opacity:0.4;filter:grayscale(0.5);"}
      ${i&&e?"animation:bossGlow 2.5s ease infinite;":""}
    ">
      <div style="height:2px;background:${e?n:"rgba(60,40,80,0.4)"};opacity:0.6"></div>
      <div style="padding:16px 20px;display:flex;align-items:center;gap:14px">
        <div style="
          width:56px;height:56px;flex-shrink:0;border-radius:8px;
          background:${a.bgGradient||n+"12"};
          border:1px solid ${n}40;
          display:flex;align-items:center;justify-content:center;font-size:26px;
          ${o&&e?"box-shadow:0 0 12px "+n+"25;":""}
        ">${a.boss.icon}</div>

        <div style="flex:1;min-width:0">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
            <span style="font-size:9px;color:rgba(200,100,180,0.4);font-family:var(--font-title);letter-spacing:2px">ETAGE ${a.floor}</span>
            ${o?`<span style="font-size:8px;color:${n};background:${n}12;padding:1px 7px;border-radius:3px;border:1px solid ${n}25">✓ ${t.clears}x clear</span>`:""}
            ${i?'<span style="font-size:8px;color:#ff4466;background:rgba(255,0,30,0.1);padding:1px 7px;border-radius:3px;border:1px solid rgba(255,0,30,0.25)">☠ BOSS FINAL</span>':""}
          </div>
          <div style="font-family:var(--font-title);font-size:${i?"17px":"14px"};font-weight:700;color:${e?n:"rgba(150,100,180,0.3)"};margin-bottom:5px">${a.name}</div>
          <div style="font-size:10px;color:rgba(200,150,220,0.35);margin-bottom:7px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${a.boss.desc.substring(0,65)}...</div>
          <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
            <span style="font-size:9px;color:rgba(200,100,120,0.4)">🩸 ${a.boss.stats.hp.toLocaleString()} HP</span>
            <span style="font-size:9px;color:rgba(200,100,120,0.4)">⏱️ Min. ${Math.floor(a.minDuration/60)} min</span>
            ${r?`<span style="font-size:9px;font-family:var(--font-stat);font-weight:700;color:#E8B860;background:rgba(200,155,60,0.08);padding:2px 8px;border-radius:12px;border:1px solid rgba(200,155,60,0.15)">🏆 BEST ${r}</span>`:""}
          </div>
        </div>

        <div style="flex-shrink:0">
          ${e?`<button class="floor-enter-btn" data-floor="${a.floor}" style="
            padding:11px 18px;border-radius:8px;cursor:pointer;
            background:${i?"linear-gradient(135deg,rgba(150,0,20,0.4),rgba(220,20,30,0.2))":"linear-gradient(135deg,rgba(80,0,160,0.3),rgba(120,40,220,0.15))"};
            border:1px solid ${i?"rgba(220,40,40,0.4)":"rgba(140,60,240,0.35)"};
            color:${i?"#ff6688":"#c080ff"};
            font-family:var(--font-title);font-size:10px;letter-spacing:2px;transition:all 0.2s;"
          >${o?"🔄 Refaire":"⚔ Entrer"}</button>`:'<div style="width:40px;height:40px;border-radius:8px;border:1px solid rgba(80,40,120,0.2);display:flex;align-items:center;justify-content:center;font-size:16px;opacity:0.4">🔒</div>'}
        </div>
      </div>
    </div>
  `}function de(a){const t=da(a);if(!t)return;const e=c.getTeamInstances();if(e.length===0){Ea("Votre équipe est vide !","error");return}wt(),L&&(L.stop(),L=null),L=new pa(e,t);let i=!1;L.onTick=r=>{ua(r,t,L),r.gameOver&&!i&&(i=!0,wt(),L?.stop(),setTimeout(()=>ka(r.winner,t,Math.floor(r.elapsedTime/1e3)),500))},L.onLog=r=>va(r),L.onPhaseChange=r=>le(r),L.onBossAbility=r=>le(r);const o=document.getElementById("app");ca(o,t,L,()=>{wt(),L?.stop(),L=null,qt()}),L.start()}function ka(a,t,e){if(a==="player"){const i=c.recordDungeonClear(t.floor,e),o=i.isFirstClear?1:.3,r=Math.floor((t.boss.rewards?.archireve||300)*o);c.addArchireve(r);const n=Math.floor(pi({isDungeon:!0,dungeonFloor:t.floor})*o),l=c.addTeamXp(n);let s=null;const d=t.boss.rewards?.items||[];if(i.isFirstClear&&d.length>0){const p=d[Math.floor(Math.random()*d.length)];H[p]&&(s=H[p],c.addItem(p))}c.recordBattle(!0);const g=ba(t,i,{archireveEarned:r,xpAmount:n,xpResults:l,itemEarned:s});if(g){if(t.floor<5){const m=document.createElement("button");m.textContent=`→ ÉTAGE ${t.floor+1}`,m.style.cssText="padding:14px 32px;font-family:var(--font-title);font-size:13px;letter-spacing:3px;background:linear-gradient(135deg,rgba(255,200,0,0.3),rgba(255,100,0,0.2));border:1px solid rgba(255,200,0,0.4);border-radius:8px;color:#FFD700;cursor:pointer",m.addEventListener("click",()=>de(t.floor+1)),g.appendChild(m)}const p=document.createElement("button");p.textContent="◀ RETOUR",p.style.cssText="padding:14px 32px;font-family:var(--font-title);font-size:13px;letter-spacing:3px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:rgba(255,255,255,0.6);cursor:pointer",p.addEventListener("click",()=>{L=null,qt()}),g.appendChild(p)}}else{c.recordBattle(!1);const i=ya(t);if(i){const o=document.createElement("button");o.textContent="🔄 RÉESSAYER",o.style.cssText="padding:14px 32px;font-family:var(--font-title);font-size:13px;letter-spacing:3px;background:linear-gradient(135deg,rgba(180,0,20,0.35),rgba(80,0,0,0.45));border:1px solid rgba(180,0,20,0.45);border-radius:8px;color:#ff4444;cursor:pointer",o.addEventListener("click",()=>de(t.floor)),i.appendChild(o);const r=document.createElement("button");r.textContent="◀ RETOUR",r.style.cssText="padding:14px 32px;font-family:var(--font-title);font-size:13px;letter-spacing:3px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:8px;color:rgba(255,255,255,0.5);cursor:pointer",r.addEventListener("click",()=>{L=null,qt()}),i.appendChild(r)}}}function Ea(a,t="success"){const e=document.createElement("div");e.className=`toast toast--${t}`,e.textContent=a,document.body.appendChild(e),setTimeout(()=>e.remove(),3e3)}function za(){const a=document.getElementById("app");try{xt(a,null)}catch(t){console.error("[InventoryScreen] Crash:",t),a.innerHTML=`
      <div class="screen" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px">
        <div class="topbar">
          <button class="topbar__back" id="err-back">◀</button>
          <div class="topbar__title">🎒 Inventaire</div>
          <div></div>
        </div>
        <div style="color:var(--danger);font-size:14px;text-align:center;padding:40px">
          <div style="font-size:32px;margin-bottom:12px">⚠️</div>
          <div style="font-family:var(--font-stat)">Erreur: ${t.message}</div>
          <div style="font-size:11px;color:var(--text-muted);margin-top:8px">(Voir console pour details)</div>
        </div>
      </div>`,document.getElementById("err-back")?.addEventListener("click",()=>w.navigate("home"))}}function xt(a,t){const e=c.getOwnedInstances(),i=c.getInventoryItems(),o=t?e.find(r=>r.id===t):null;a.innerHTML=`
    <div class="screen">
      <div class="topbar">
        <button class="topbar__back" id="back-btn">◀</button>
        <div class="topbar__title">🎒 Inventaire</div>
        <div style="font-size:11px;color:var(--text-muted)">${i.length} objets</div>
      </div>

      <div style="display:flex;flex:1;overflow:hidden;gap:var(--space-md);padding:var(--space-md)">

        <!-- Left: Character selection + equipment slots -->
        <div style="width:320px;flex-shrink:0;display:flex;flex-direction:column;gap:var(--space-md);overflow-y:auto">
          <div class="section-header">👤 Personnage</div>
          <!-- Character picker -->
          <div style="display:flex;flex-wrap:wrap;gap:8px">
            ${e.map(r=>`
              <div class="glass char-picker-btn ${t===r.id?"char-picker-btn--active":""}"
                   data-char="${r.id}"
                   style="padding:8px 12px;cursor:pointer;display:flex;align-items:center;gap:8px;border-radius:var(--radius-md);
                   ${t===r.id?"border-color:var(--accent);background:rgba(34,197,94,0.1)":""}">
                <img src="${C(r.type)}" style="width:32px;height:32px;image-rendering:pixelated">
                <div>
                  <div style="font-size:11px;font-weight:700;color:var(--${r.rarity})">${r.name}</div>
                  <div style="font-size:9px;color:var(--text-muted)">Niv.${r.ownedData?.level||1}</div>
                </div>
              </div>
            `).join("")}
          </div>

          ${o?Ia(o,i):`
            <div style="text-align:center;padding:var(--space-xl);color:var(--text-muted)">
              <div style="font-size:24px;margin-bottom:8px">👈</div>
              <div style="font-size:11px">Sélectionnez un personnage</div>
            </div>
          `}
        </div>

        <!-- Right: Inventory grid -->
        <div style="flex:1;overflow-y:auto">
          <div class="section-header">📦 Objets (${i.length})</div>
          ${i.length===0?`
            <div style="text-align:center;padding:var(--space-xxxl);color:var(--text-muted)">
              <div style="font-size:48px;margin-bottom:var(--space-md)">🗝️</div>
              <div style="font-size:13px">Votre inventaire est vide</div>
              <div style="font-size:11px;margin-top:8px">Gagnez des objets en combat ou dans le donjon</div>
            </div>
          `:`
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:var(--space-sm)">
              ${i.map(r=>Ta(r,t,o)).join("")}
            </div>
          `}

          <!-- Debug: Add test items (dev only) -->
          <div style="margin-top:var(--space-xxl);border-top:1px solid var(--border);padding-top:var(--space-md)">
            <button class="btn btn--ghost btn--sm" id="dev-add-items">🎁 Ajouter objets de test</button>
          </div>
        </div>
      </div>
    </div>
  `,document.getElementById("back-btn").addEventListener("click",()=>w.navigate("home")),document.querySelectorAll(".char-picker-btn").forEach(r=>{r.addEventListener("click",()=>{xt(a,r.dataset.char)})}),document.querySelectorAll(".btn-equip").forEach(r=>{r.addEventListener("click",()=>{const{instanceId:n,charId:l}=r.dataset;c.equipItem(l,n)&&(te("Objet équipé !","success"),xt(a,l))})}),document.querySelectorAll(".btn-unequip").forEach(r=>{r.addEventListener("click",()=>{const{charId:n,slot:l}=r.dataset;c.unequipItem(n,l),te("Objet retiré","warning"),xt(a,n)})}),document.getElementById("dev-add-items")?.addEventListener("click",()=>{["epee_rouille","baton_mage","robe_arcane","anneau_rapidite","talisman_nature","dague_ombre"].forEach(n=>c.addItem(n)),te("Objets ajoutés !","success"),xt(a,t)})}function Ia(a,t){const e=c.getCharacterEquipped(a.id),i=c.getCharacterBonusStats(a.id);return`
    <div class="glass" style="padding:var(--space-md);border-radius:var(--radius-xl)">
      <div class="section-header" style="font-size:10px">⚔️ ÉQUIPEMENT — ${a.name}</div>
      
      ${Object.entries(pt).map(([o,r])=>{const n=e[o],l=n?t.find(g=>g.instanceId===n):null,s=l?l.fusedData||H[l.itemId]||l:null,d=s?Q[s.rarity]||Q.rare:null;return`
          <div style="display:flex;align-items:center;gap:var(--space-sm);padding:8px 0;border-bottom:1px solid var(--border)">
            <div style="width:36px;height:36px;border-radius:var(--radius-md);background:var(--bg-surface);
              border:1px solid ${d?d.color:"var(--border)"};display:flex;align-items:center;justify-content:center;font-size:18px;
              box-shadow: ${d?`0 0 8px ${d.glow}`:"none"}">
              ${s?s.icon:r.icon}
            </div>
            <div style="flex:1;min-width:0">
              <div style="font-size:10px;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px">${r.name}</div>
              ${s?`
                <div style="font-size:11px;color:${d?.color||"var(--text-primary)"};font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${s.name}</div>
                <div style="font-size:9px;color:var(--text-muted)">${Object.entries(s.stats||{}).map(([g,p])=>`+${p} ${g.toUpperCase()}`).join(" · ")}</div>
              `:'<div style="font-size:11px;color:var(--text-muted)">— Vide —</div>'}
            </div>
            ${s?`<button class="btn btn--danger btn--sm btn-unequip" data-char-id="${a.id}" data-slot="${o}" style="font-size:9px;padding:4px 8px">✕</button>`:""}
          </div>
        `}).join("")}

      <!-- Bonus stats -->
      ${Object.values(i).some(o=>o>0)?`
        <div style="margin-top:var(--space-sm);padding-top:var(--space-sm);border-top:1px solid var(--border)">
          <div style="font-size:9px;color:var(--accent);letter-spacing:1px;text-transform:uppercase;margin-bottom:4px">Bonus Total</div>
          <div style="display:flex;flex-wrap:wrap;gap:4px">
            ${Object.entries(i).filter(([,o])=>o>0).map(([o,r])=>`
              <span style="font-size:9px;background:rgba(34,197,94,0.1);color:var(--accent);padding:2px 6px;border-radius:4px;border:1px solid rgba(34,197,94,0.2)">+${r} ${o.toUpperCase()}</span>
            `).join("")}
          </div>
        </div>
      `:""}
    </div>
  `}function Ta(a,t,e){const i=Q[a.rarity]||Q.rare,o=pt[a.slot];let r=!1;if(e){const s=c.getCharacterEquipped(e.id);r=Object.values(s).includes(a.instanceId)}const l=(e?c.getCharacterEquipped(e.id):{})[a.slot];return`
    <div class="glass" style="padding:var(--space-sm);border-radius:var(--radius-lg);
      border-color:${i.color}33;box-shadow:0 0 10px ${i.glow};
      cursor:default;transition:all var(--transition-normal)">
      <div style="text-align:center;margin-bottom:6px">
        <div style="font-size:28px;filter:drop-shadow(0 0 6px ${i.color})">${a.icon}</div>
        <div style="font-size:9px;color:${i.color};font-weight:700;letter-spacing:1px;text-transform:uppercase">${i.name}</div>
      </div>
      <div style="font-size:10px;font-weight:700;color:var(--text-primary);margin-bottom:2px;text-align:center">${a.name}</div>
      <div style="font-size:9px;color:var(--text-muted);margin-bottom:6px;text-align:center">${o?.name||a.slot}</div>
      <div style="font-size:8px;color:var(--accent);margin-bottom:8px;text-align:center">
        ${Object.entries(a.stats||{}).map(([s,d])=>`+${d} ${s.toUpperCase()}`).join("<br>")}
      </div>
      ${t&&!r?`
        <button class="btn btn--primary btn--sm btn-equip btn--full" 
          data-instance-id="${a.instanceId}" data-char-id="${t}"
          style="font-size:8px;padding:4px 8px;border-radius:var(--radius-sm)">
          ${l?"🔄 Remplacer":"✓ Équiper"}
        </button>
      `:r?`
        <div style="text-align:center;font-size:9px;color:var(--accent);font-weight:700">✓ Équipé</div>
      `:""}
    </div>
  `}function te(a,t="success"){const e=document.createElement("div");e.className=`toast toast--${t}`,e.textContent=a,document.body.appendChild(e),setTimeout(()=>e.remove(),3e3)}let lt="fusion",W="characters",I=null,T=null,G=null,jt=null;const J={rare:"#4a9eff",epique:"#c044ff",legendaire:"#ffb84a",ultimate:"#E6CC80",semi_ultimate:"#FF6B2C",supreme:"#FF1493"},Ye={rare:"rgba(74,158,255,0.4)",epique:"rgba(192,68,255,0.4)",legendaire:"rgba(255,184,74,0.45)",ultimate:"rgba(230,204,128,0.5)",semi_ultimate:"rgba(255,107,44,0.5)",supreme:"rgba(255,20,147,0.6)"},ye={rare:30,epique:60,legendaire:120,ultimate:200,semi_ultimate:350,supreme:500},Z=5;function Ke(){jt&&(clearInterval(jt),jt=null)}function Sa(){Ke(),I=null,T=null,G=null;const a=document.getElementById("app");a.innerHTML=Aa(),Je(),Fa()}function Aa(){return`
    <div id="forge-root" style="
      width:100vw;height:100vh;overflow:hidden;
      background:radial-gradient(ellipse at 50% 100%,rgba(200,100,20,0.12),rgba(6,5,10,0.99) 60%),
                 radial-gradient(ellipse at 20% 20%,rgba(100,40,200,0.06),transparent 50%),
                 #06050a;
      display:flex;flex-direction:column;position:relative;
    ">

      <!-- Forge fire canvas ambient -->
      <div id="forge-particles-bg" style="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:0"></div>

      <!-- Rune circle bottom -->
      <div style="position:absolute;bottom:-150px;left:50%;transform:translateX(-50%);
        width:600px;height:600px;border-radius:50%;pointer-events:none;z-index:0;
        border:1px solid rgba(200,120,20,0.08);
        box-shadow:0 0 120px rgba(200,100,20,0.06) inset;
      "></div>
      <div style="position:absolute;bottom:-80px;left:50%;transform:translateX(-50%);
        width:400px;height:400px;border-radius:50%;pointer-events:none;z-index:0;
        border:1px solid rgba(200,120,20,0.12);
        animation:slowRotate 30s linear infinite;
      "></div>

      <!-- Top Bar -->
      <div style="
        display:flex;align-items:center;justify-content:space-between;
        padding:0 32px;height:56px;flex-shrink:0;z-index:10;
        background:rgba(8,5,3,0.97);border-bottom:1px solid rgba(200,120,20,0.1);
      ">
        <button id="forge-back" style="
          background:none;border:1px solid rgba(200,120,20,0.15);
          color:rgba(200,120,20,0.6);width:36px;height:36px;border-radius:6px;
          cursor:pointer;font-size:14px;transition:all 0.2s
        ">◀</button>
        <div style="display:flex;align-items:center;gap:12px">
          <div style="font-size:20px;filter:drop-shadow(0 0 12px rgba(200,120,20,0.8));
            animation:forgeFlicker 2s ease infinite alternate">⚒</div>
          <div style="font-family:var(--font-title);font-size:16px;font-weight:700;
            letter-spacing:6px;color:#E8B860">FORGE DE FUSION</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px;
          background:rgba(200,120,20,0.06);border:1px solid rgba(200,120,20,0.12);
          border-radius:6px;padding:6px 14px">
          <span style="font-size:14px;color:#E8B860">⭐</span>
          <span style="font-family:var(--font-stat);font-size:13px;font-weight:700;color:#E8D9B5">
            ${c.state.archireve.toLocaleString()}
          </span>
        </div>
      </div>

      <!-- Tab Bar -->
      <div style="display:flex;background:rgba(10,6,3,0.95);border-bottom:1px solid rgba(200,120,20,0.06);flex-shrink:0;z-index:10">
        ${[{id:"fusion",icon:"⚒",label:"FUSION"},{id:"trempe",icon:"🔥",label:"TREMPE"}].map(a=>`
          <button class="forge-tab-btn" data-tab="${a.id}" style="
            flex:1;padding:14px;border:none;
            background:${lt===a.id?"rgba(200,120,20,0.06)":"none"};
            border-bottom:2px solid ${lt===a.id?"#C87820":"transparent"};
            color:${lt===a.id?"#E8B860":"rgba(200,150,60,0.3)"};
            font-family:var(--font-title);font-size:11px;letter-spacing:3px;cursor:pointer;
            transition:all 0.2s;display:flex;align-items:center;justify-content:center;gap:8px
          ">${a.icon} ${a.label}</button>
        `).join("")}
      </div>

      <!-- Content -->
      <div id="forge-content" style="flex:1;overflow:hidden;position:relative;z-index:2">
        ${lt==="fusion"?We():Ze()}
      </div>
    </div>

    <style>
      @keyframes forgeFlicker { 0%,100%{filter:drop-shadow(0 0 8px rgba(200,120,20,0.6));} 50%{filter:drop-shadow(0 0 20px rgba(200,120,20,1)) brightness(1.3);} }
      @keyframes slowRotate { from{transform:translateX(-50%) rotate(0deg);} to{transform:translateX(-50%) rotate(360deg);} }
      @keyframes forgeItemPop { from{opacity:0;transform:scale(0.9) translateY(6px);} to{opacity:1;transform:scale(1) translateY(0);} }
      @keyframes forgeFire {
        0%   { transform:translateY(0) scale(1);   opacity:0; }
        10%  { opacity:0.9; }
        50%  { transform:translateY(-40px) translateX(var(--sway)) scale(0.7); opacity:0.6; }
        100% { transform:translateY(-90px) translateX(calc(var(--sway)*2)) scale(0.3); opacity:0; }
      }
      @keyframes awakePulse {
        0%,100% { box-shadow:0 0 20px rgba(200,120,20,0.2); }
        50%     { box-shadow:0 0 50px rgba(200,120,20,0.5),0 0 100px rgba(255,180,60,0.1); }
      }
      .forge-grid-card { transition:transform 0.15s ease,border-color 0.15s; }
      .forge-grid-card:hover { transform:translateY(-3px) scale(1.03) !important; }
      .forge-tab-btn:hover { background:rgba(200,120,20,0.04) !important; }
      .trempe-slot:hover { border-color:rgba(200,120,20,0.3) !important; transform:translateY(-2px); }
    </style>
  `}function We(){const a=W==="characters",t=Gt(I,a),e=Gt(T,a),i=t&&e&&t.rarity===e.rarity,o=i?Qe():null,r=Pa(),n=Da();return`
    <div style="display:flex;height:100%">

      <!-- Left panel: Forge slots -->
      <div style="width:460px;flex-shrink:0;display:flex;flex-direction:column;
        padding:24px;border-right:1px solid rgba(200,120,20,0.06);overflow-y:auto">

        <!-- Mode switcher -->
        <div style="display:flex;gap:8px;margin-bottom:24px">
          ${["characters","items"].map(l=>`
            <button id="fusion-mode-${l}" style="
              flex:1;padding:9px;border-radius:6px;cursor:pointer;
              background:${W===l?"rgba(200,120,20,0.12)":"rgba(0,0,0,0.3)"};
              border:1px solid ${W===l?"rgba(200,120,20,0.4)":"rgba(200,120,20,0.08)"};
              color:${W===l?"#E8B860":"rgba(200,150,60,0.4)"};
              font-family:var(--font-title);font-size:9px;letter-spacing:2px;
              transition:all 0.2s
            ">${l==="characters"?"⚔ PERSONNAGES":"📦 ITEMS"}</button>
          `).join("")}
        </div>

        <!-- Fusion slots -->
        <div style="font-family:var(--font-title);font-size:9px;letter-spacing:4px;
          color:rgba(200,120,20,0.4);text-align:center;margin-bottom:16px">— FUSION —</div>

        <div style="display:flex;align-items:center;gap:16px;justify-content:center;margin-bottom:16px">
          ${Le(t,1,a)}
          <div style="font-size:24px;color:rgba(200,120,20,0.3);">+</div>
          ${Le(e,2,a)}
        </div>

        <!-- Arrow + preview -->
        <div style="text-align:center;margin-bottom:12px">
          <div style="font-size:20px;color:rgba(200,120,20,0.5);
            animation:${i?"forgeFlicker 1.5s ease infinite alternate":"none"}">⇣</div>
        </div>

        <!-- Result preview -->
        ${o?Ba(o):Ma()}

        <!-- Rules box -->
        <div style="margin-top:20px;padding:14px 16px;
          background:rgba(200,120,20,0.04);border:1px solid rgba(200,120,20,0.1);border-radius:8px">
          <div style="font-family:var(--font-title);font-size:9px;letter-spacing:2px;color:#C87820;margin-bottom:8px">
            ⚒ RÈGLES
          </div>
          <div style="font-size:11px;color:rgba(200,180,120,0.5);line-height:1.8">
            ⚔ Légendaire × 2 → <span style="color:#FF6B2C;font-weight:700">Semi-Ultimate</span> (stats ×2)<br>
            ☀ Ultimate × 2 → <span style="color:#FF1493;font-weight:700">Suprême Divin</span> (stats ×10)<br>
            📦 Items : même règle, même slot requis
          </div>
        </div>

        <!-- Fuse button -->
        <button id="fuse-btn" ${i?"":"disabled"} style="
          margin-top:20px;padding:16px;border-radius:8px;
          background:${i?"linear-gradient(135deg,#8B4A08,#C87820,#8B4A08)":"rgba(0,0,0,0.3)"};
          border:1px solid ${i?"rgba(200,120,20,0.6)":"rgba(200,120,20,0.08)"};
          color:${i?"#FFD080":"rgba(200,150,60,0.2)"};
          font-family:var(--font-title);font-size:12px;letter-spacing:4px;
          cursor:${i?"pointer":"not-allowed"};transition:all 0.2s;width:100%;
          ${i?"box-shadow:0 0 20px rgba(200,120,20,0.2),0 0 40px rgba(200,120,20,0.05);animation:awakePulse 2s ease infinite;":""}
        ">⚒ FUSIONNER</button>
      </div>

      <!-- Right panel: Grid -->
      <div style="flex:1;display:flex;flex-direction:column;overflow:hidden">
        <div style="padding:16px 20px 8px;font-family:var(--font-title);font-size:9px;
          letter-spacing:3px;color:rgba(200,120,20,0.4);border-bottom:1px solid rgba(200,120,20,0.06)">
          ${a?`— ${r.length} PERSONNAGES ÉLIGIBLES —`:`— ${n.length} ITEMS ÉLIGIBLES —`}
        </div>
        <div style="flex:1;overflow-y:auto;padding:16px;scrollbar-width:thin;scrollbar-color:rgba(200,120,20,0.1) transparent">
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px">
            ${a?La(r):Ra(n)}
            ${(a?r:n).length===0?`
              <div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:rgba(200,150,60,0.2)">
                <div style="font-size:40px;margin-bottom:12px;opacity:0.3">⚒</div>
                <div style="font-family:var(--font-title);font-size:11px;letter-spacing:2px">
                  ${a?"Aucun personnage Légendaire/Ultimate":"Aucun item Légendaire/Ultimate"}
                </div>
                <div style="font-size:10px;margin-top:6px;opacity:0.5">
                  Progressez dans la campagne pour débloquer des héros puissants !
                </div>
              </div>
            `:""}
          </div>
        </div>
      </div>
    </div>
  `}function Ze(){const a=c.state.ownedCharacters||[];return`
    <div style="display:flex;height:100%">

      <!-- Left: selected char detail -->
      <div style="width:420px;flex-shrink:0;padding:24px;border-right:1px solid rgba(200,120,20,0.06);
        display:flex;flex-direction:column;gap:16px;overflow-y:auto">

        ${G?Ca():`
          <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;
            text-align:center;color:rgba(200,150,60,0.2);padding:40px">
            <div style="font-size:48px;margin-bottom:16px;opacity:0.2">🔥</div>
            <div style="font-family:var(--font-title);font-size:12px;letter-spacing:3px">TREMPE</div>
            <div style="font-size:12px;margin-top:8px;line-height:1.7;color:rgba(200,150,60,0.3)">
              Dépense des ⭐ Archirêves pour forger ton héros au-delà de ses limites.<br><br>
              Chaque trempe augmente toutes les stats de <span style="color:#C87820">+15%</span> et débloque un bonus unique.
            </div>
          </div>
        `}
      </div>

      <!-- Right: character list -->
      <div style="flex:1;display:flex;flex-direction:column;overflow:hidden">
        <div style="padding:16px 20px 8px;font-family:var(--font-title);font-size:9px;
          letter-spacing:3px;color:rgba(200,120,20,0.4);border-bottom:1px solid rgba(200,120,20,0.06)">
          — ${a.length} HÉROS DISPONIBLES —
        </div>
        <div style="flex:1;overflow-y:auto;padding:16px;scrollbar-width:thin;scrollbar-color:rgba(200,120,20,0.1) transparent">
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:10px">
            ${a.map(t=>{const e=P.find(s=>s.id===t.id)||c.getFusedCharacterData?.(t.id);if(!e)return"";const i=J[e.rarity]||"#aaa",o=t.trempe||0,r=ye[e.rarity]||100,n=o>=Z,l=G===t.id;return`
                <button class="forge-grid-card trempe-slot" data-trempe-id="${t.id}" style="
                  padding:14px 10px;text-align:center;border-radius:8px;cursor:pointer;
                  border:1px solid ${l?i:"rgba(200,120,20,0.08)"};
                  background:${l?i+"18":"rgba(10,6,3,0.6)"};
                  color:var(--text-primary);transition:all 0.15s;position:relative;
                  ${n?"background:linear-gradient(135deg,"+i+"08,rgba(10,6,3,0.8));":""}
                ">
                  ${n?`<div style="position:absolute;top:4px;right:4px;font-size:8px;
                    background:rgba(200,120,20,0.2);color:#C87820;padding:1px 4px;border-radius:3px;
                    letter-spacing:1px">MAX</div>`:""}
                  <img src="${C(e.type.split("/")[0])}"
                    style="width:44px;height:44px;filter:drop-shadow(0 0 6px ${i}50)">
                  <div style="font-family:var(--font-ui);font-size:9px;font-weight:700;color:${i};
                    margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
                    ${e.name.split(" ")[0]}
                  </div>
                  <div style="font-size:8px;color:var(--text-muted);letter-spacing:1px">LV.${t.level}</div>
                  <!-- Trempe stars -->
                  <div style="display:flex;justify-content:center;gap:2px;margin-top:6px">
                    ${Array.from({length:Z},(s,d)=>`<span style="font-size:8px;
                      color:${d<o?"#C87820":"rgba(200,120,20,0.15)"}">★</span>`).join("")}
                  </div>
                  <div style="font-size:7px;color:rgba(200,150,60,0.35);margin-top:3px">${r}⭐/trempe</div>
                </button>
              `}).join("")}
          </div>
        </div>
      </div>
    </div>
  `}function Ca(){const a=c.state.ownedCharacters.find(g=>g.id===G);if(!a)return"";const t=P.find(g=>g.id===a.id)||c.getFusedCharacterData?.(a.id);if(!t)return"";const e=J[t.rarity]||"#aaa",i=Ye[t.rarity]||"rgba(200,120,20,0.3)",o=a.trempe||0,r=ye[t.rarity]||100,n=o>=Z,l=c.state.archireve>=r,s=a.stats||{},d=["🛡️ +15% stats","⚔️ +15% stats · Critique +5%","🌟 +15% stats · SPD +10","💫 +15% stats · Garde absorbe 15%","👑 +15% stats · Compétence secrète débloquée"];return`
    <!-- Hero card -->
    <div style="background:${e}08;border:1px solid ${e}25;border-radius:10px;padding:20px;
      text-align:center;box-shadow:0 0 40px ${i}">
      <img src="${C(t.type.split("/")[0])}"
        style="width:80px;height:80px;filter:drop-shadow(0 0 16px ${e}70);margin-bottom:12px">
      <div style="font-family:var(--font-title);font-size:15px;font-weight:700;color:#E8D9B5;margin-bottom:4px">
        ${t.name}
      </div>
      <div style="font-size:9px;color:${e};letter-spacing:2px;margin-bottom:12px">
        ${t.rarity.toUpperCase()} · NIV.${a.level}
      </div>
      <!-- Trempe ring -->
      <div style="display:flex;justify-content:center;gap:6px;margin-bottom:4px">
        ${Array.from({length:Z},(g,p)=>`
          <div style="
            width:28px;height:28px;border-radius:50%;
            border:2px solid ${p<o?e:"rgba(200,120,20,0.12)"};
            background:${p<o?e+"20":"rgba(0,0,0,0.4)"};
            display:flex;align-items:center;justify-content:center;
            font-size:12px;transition:all 0.3s;
            ${p<o?"box-shadow:0 0 10px "+e+"40;":""}
          ">
            ${p<o?"★":"·"}
          </div>
        `).join("")}
      </div>
      <div style="font-size:9px;color:rgba(200,150,60,0.4);margin-bottom:16px">
        TREMPE ${o}/${Z}
      </div>
    </div>

    <!-- Stats grid -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      ${Object.entries({HP:"hp",ATK:"atk",DEF:"def",SPD:"spd",MagAtk:"magAtk",MagDef:"magDef"}).map(([g,p])=>`
        <div style="background:rgba(0,0,0,0.3);border:1px solid rgba(200,120,20,0.06);border-radius:6px;padding:8px 12px">
          <div style="font-size:8px;color:rgba(200,150,60,0.35);letter-spacing:1px;margin-bottom:2px">${g}</div>
          <div style="font-family:var(--font-stat);font-size:14px;font-weight:700;color:#E8D9B5">
            ${s[p]||"—"}
          </div>
          ${o>0?`<div style="font-size:8px;color:#4ADE80;margin-top:1px">
            +${Math.floor((s[p]||0)*.15*o)}
          </div>`:""}
        </div>
      `).join("")}
    </div>

    <!-- Trempe bonuses -->
    <div style="background:rgba(200,120,20,0.04);border:1px solid rgba(200,120,20,0.1);border-radius:8px;padding:12px">
      <div style="font-family:var(--font-title);font-size:9px;letter-spacing:2px;color:#C87820;margin-bottom:10px">
        PALIERS DE TREMPE
      </div>
      ${d.map((g,p)=>`
        <div style="display:flex;align-items:center;gap:8px;padding:5px 0;
          ${p<d.length-1?"border-bottom:1px solid rgba(200,120,20,0.06);":""}
          opacity:${p<o?1:.35}">
          <div style="width:18px;height:18px;border-radius:50%;flex-shrink:0;
            background:${p<o?e+"20":"rgba(0,0,0,0.4)"};
            border:1px solid ${p<o?e:"rgba(200,120,20,0.1)"};
            display:flex;align-items:center;justify-content:center;
            font-size:9px;color:${p<o?e:"rgba(200,120,20,0.2)"}">
            ${p+1}
          </div>
          <div style="font-size:10px;color:${p<o?e:"rgba(200,150,60,0.3)"}">
            ${g}
          </div>
        </div>
      `).join("")}
    </div>

    <!-- Trempe button -->
    ${n?`
      <div style="padding:16px;text-align:center;border-radius:8px;
        background:linear-gradient(135deg,${e}08,rgba(0,0,0,0.5));
        border:1px solid ${e}30">
        <div style="font-family:var(--font-title);font-size:12px;letter-spacing:3px;color:${e}">
          ✦ TREMPE MAXIMALE ✦
        </div>
        <div style="font-size:10px;color:rgba(200,150,60,0.3);margin-top:4px">
          Ce héros a atteint son plein potentiel
        </div>
      </div>
    `:`
      <button id="do-trempe-btn" style="
        padding:16px;border-radius:8px;width:100%;cursor:${l?"pointer":"not-allowed"};
        background:${l?"linear-gradient(135deg,#6B3A08,#C87820,#6B3A08)":"rgba(0,0,0,0.3)"};
        border:1px solid ${l?"rgba(200,120,20,0.5)":"rgba(200,120,20,0.08)"};
        color:${l?"#FFD080":"rgba(200,150,60,0.2)"};
        font-family:var(--font-title);font-size:11px;letter-spacing:3px;
        transition:all 0.2s;
        ${l?"box-shadow:0 0 20px rgba(200,120,20,0.2);animation:awakePulse 2.5s ease infinite;":""}
      ">
        🔥 TREMBLE (${r} ⭐)
        ${l?"":'<div style="font-size:9px;margin-top:4px;letter-spacing:1px">Archirêves insuffisants</div>'}
      </button>
    `}
  `}function Le(a,t,e){if(!a)return`
    <div class="forge-slot-empty" data-slot="${t}" style="
      width:130px;height:155px;border:2px dashed rgba(200,120,20,0.12);border-radius:10px;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      cursor:pointer;background:rgba(0,0,0,0.2);transition:all 0.2s;
    ">
      <div style="font-size:28px;opacity:0.15;margin-bottom:6px">+</div>
      <div style="font-size:8px;color:rgba(200,120,20,0.3);letter-spacing:1px">SLOT ${t}</div>
    </div>
  `;const i=J[a.rarity]||"#aaa";return`
    <div data-slot="${t}" data-selected="true" style="
      width:130px;height:155px;border:2px solid ${i}40;border-radius:10px;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      background:${i}08;position:relative;
      box-shadow:0 0 20px ${i}20,inset 0 0 30px ${i}06;
    ">
      ${e?`<img src="${C(a.type?.split("/")[0])}"
            style="width:52px;height:52px;filter:drop-shadow(0 0 10px ${i}80)">`:`<div style="font-size:38px;filter:drop-shadow(0 0 10px ${i}80)">${a.icon||"📦"}</div>`}
      <div style="font-family:var(--font-ui);font-size:10px;font-weight:700;color:${i};
        margin-top:8px;text-align:center;padding:0 6px;max-width:120px;
        white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${a.name}</div>
      <div style="font-size:7px;color:rgba(200,150,60,0.4);letter-spacing:1px;margin-top:2px">
        ${a.rarity?.toUpperCase()}
      </div>
      <button class="forge-slot-clear" data-clear="${t}" style="
        position:absolute;top:4px;right:4px;
        width:18px;height:18px;border:none;
        background:rgba(220,38,38,0.5);color:white;border-radius:50%;
        font-size:9px;cursor:pointer;
        display:flex;align-items:center;justify-content:center;
        transition:all 0.15s
      ">✕</button>
    </div>
  `}function Ba(a){const t=J[a.rarity]||"#FF6B2C",e=Ye[a.rarity]||"rgba(255,107,44,0.3)",i=a.stats||{},o=Object.entries({HP:"hp",ATK:"atk",DEF:"def",SPD:"spd"}).map(([r,n])=>`<div style="display:flex;justify-content:space-between;padding:3px 0">
      <span style="font-size:9px;color:rgba(200,150,60,0.4)">${r}</span>
      <span style="font-family:var(--font-stat);font-size:10px;color:${t};font-weight:700">${i[n]?.toLocaleString()||"—"}</span>
    </div>`).join("");return`
    <div style="border:2px solid ${t}30;border-radius:10px;padding:16px;
      background:${t}06;text-align:center;
      box-shadow:0 0 30px ${e};
      animation:awakePulse 2s ease infinite">
      <div style="font-size:8px;color:${t};letter-spacing:3px;margin-bottom:6px">
        ✦ ${a.rarity?.toUpperCase().replace("_","-")} ✦
      </div>
      <div style="font-family:var(--font-title);font-size:13px;font-weight:700;color:#E8D9B5;margin-bottom:10px">
        ${a.name}
      </div>
      <div style="border-top:1px solid rgba(200,120,20,0.1);padding-top:10px">
        ${o}
      </div>
    </div>
  `}function Ma(){return`
    <div style="border:2px dashed rgba(200,120,20,0.06);border-radius:10px;padding:24px;
      text-align:center;color:rgba(200,150,60,0.15)">
      <div style="font-size:24px;margin-bottom:6px;opacity:0.3">⚒</div>
      <div style="font-size:9px;letter-spacing:2px">Résultat de Fusion</div>
    </div>
  `}function La(a){return a.map(t=>{const e=P.find(r=>r.id===t.id)||c.getFusedCharacterData?.(t.id);if(!e)return"";const i=J[e.rarity]||"#aaa",o=I===t.id||T===t.id;return`
      <button class="forge-grid-card" data-char-id="${t.id}" style="
        padding:12px 8px;text-align:center;border-radius:8px;cursor:pointer;
        border:1px solid ${o?i:"rgba(200,120,20,0.08)"};
        background:${o?i+"15":"rgba(10,6,3,0.6)"};
        color:var(--text-primary);
        animation:forgeItemPop 0.25s ease both;
        ${o?`box-shadow:0 0 15px ${i}25;`:""}
      ">
        <img src="${C(e.type.split("/")[0])}"
          style="width:40px;height:40px;filter:drop-shadow(0 0 6px ${i}${o?"90":"40"})">
        <div style="font-family:var(--font-ui);font-size:9px;font-weight:700;color:${i};
          margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
          ${e.name.split(" ")[0]}
        </div>
        <div style="font-size:7px;color:rgba(200,150,60,0.35);margin-top:1px">LV.${t.level}</div>
        <div style="font-size:7px;color:${i};letter-spacing:1px;margin-top:2px">
          ${e.rarity.toUpperCase()}
        </div>
        ${o?`<div style="font-size:7px;color:${i};margin-top:3px">✓ SELECT.</div>`:""}
      </button>
    `}).join("")}function Ra(a){return a.map(t=>{const e=t.fusedData||H[t.itemId];if(!e)return"";const i=J[e.rarity]||"#aaa",o=I===t.instanceId||T===t.instanceId,r=pt[e.slot]||{name:"",icon:""};return`
      <button class="forge-grid-card" data-item-id="${t.instanceId}" style="
        padding:12px 8px;text-align:center;border-radius:8px;cursor:pointer;
        border:1px solid ${o?i:"rgba(200,120,20,0.08)"};
        background:${o?i+"15":"rgba(10,6,3,0.6)"};
        color:var(--text-primary);
        ${o?`box-shadow:0 0 15px ${i}25;`:""}
      ">
        <div style="font-size:28px;filter:drop-shadow(0 0 6px ${i}${o?"80":"30"})">
          ${e.icon||"📦"}
        </div>
        <div style="font-family:var(--font-ui);font-size:9px;font-weight:700;color:${i};
          margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">
          ${e.name?.split(" ").slice(0,2).join(" ")}
        </div>
        <div style="font-size:7px;color:rgba(200,150,60,0.35)">${r.icon} ${r.name}</div>
        <div style="font-size:7px;color:${i};letter-spacing:1px;margin-top:2px">
          ${e.rarity?.toUpperCase()}
        </div>
      </button>
    `}).join("")}function Pa(){return(c.state.ownedCharacters||[]).filter(a=>{const t=P.find(e=>e.id===a.id)||c.getFusedCharacterData?.(a.id);return t&&(t.rarity==="legendaire"||t.rarity==="ultimate")})}function Da(){return(c.state.inventory||[]).filter(a=>{const t=a.fusedData||H[a.itemId];return t&&(t.rarity==="legendaire"||t.rarity==="ultimate")})}function Gt(a,t){if(!a)return null;if(t)return P.find(e=>e.id===a)||c.getFusedCharacterData?.(a);{const e=(c.state.inventory||[]).find(i=>i.instanceId===a);return e?e.fusedData||H[e.itemId]:null}}function Qe(){if(W==="characters"){const a=Gt(I,!0),t=Gt(T,!0),e=c.state.ownedCharacters.find(o=>o.id===I),i=c.state.ownedCharacters.find(o=>o.id===T);return ci(a,t,e?.level||1,i?.level||1)}else{const a=(c.state.inventory||[]).find(e=>e.instanceId===I),t=(c.state.inventory||[]).find(e=>e.instanceId===T);return!a||!t?null:gi(a.fusedData||H[a.itemId],t.fusedData||H[t.itemId])}}function Je(){document.getElementById("forge-back")?.addEventListener("click",()=>{Ke(),w.navigate("home")}),document.querySelectorAll(".forge-tab-btn").forEach(a=>{a.addEventListener("click",()=>{lt=a.dataset.tab,I=null,T=null,G=null,N()})}),document.getElementById("fusion-mode-characters")?.addEventListener("click",()=>{W="characters",I=null,T=null,N()}),document.getElementById("fusion-mode-items")?.addEventListener("click",()=>{W="items",I=null,T=null,N()}),document.querySelectorAll("[data-char-id]").forEach(a=>{a.addEventListener("click",()=>{const t=a.dataset.charId;t===I?I=null:t===T?T=null:I?T=t:I=t,N()})}),document.querySelectorAll("[data-item-id]").forEach(a=>{a.addEventListener("click",()=>{const t=a.dataset.itemId;t===I?I=null:t===T?T=null:I?T=t:I=t,N()})}),document.querySelectorAll(".forge-slot-clear").forEach(a=>{a.addEventListener("click",t=>{t.stopPropagation(),a.dataset.clear==="1"&&(I=null),a.dataset.clear==="2"&&(T=null),N()})}),document.querySelectorAll("[data-trempe-id]").forEach(a=>{a.addEventListener("click",()=>{G=a.dataset.trempeId,N()})}),document.getElementById("do-trempe-btn")?.addEventListener("click",()=>{const a=c.state.ownedCharacters.find(i=>i.id===G),t=P.find(i=>i.id===G)||c.getFusedCharacterData?.(G);if(!a||!t)return;const e=ye[t.rarity]||100;if(!(c.state.archireve<e)&&!((a.trempe||0)>=Z)){if(c.state.archireve-=e,a.trempe=(a.trempe||0)+1,a.stats)for(const i of Object.keys(a.stats))a.stats[i]=Math.floor(a.stats[i]*1.15);c.save(),ja(t,a.trempe,J[t.rarity]||"#C87820"),N()}}),document.getElementById("fuse-btn")?.addEventListener("click",()=>{const a=Qe();a&&(W==="characters"?(c.removeFusionIngredients?.(I,T),c.addFusedCharacter?.(a)):c.fuseItems?.(I,T,a),I=null,T=null,Oa(a))})}function N(){const a=document.getElementById("forge-content");a&&(a.innerHTML=lt==="fusion"?We():Ze(),Je())}function Fa(){const a=document.getElementById("forge-particles-bg");a&&(jt=setInterval(()=>{const t=document.createElement("div"),e=20+Math.random()*60,i=2+Math.random()*4,o=2+Math.random()*3,r=(Math.random()-.5)*60,n=["rgba(200,120,20,0.8)","rgba(255,180,60,0.6)","rgba(255,80,20,0.5)","rgba(255,220,80,0.4)"],l=n[Math.floor(Math.random()*n.length)];t.style.cssText=`
      position:absolute;bottom:0;left:${e}%;
      width:${i}px;height:${i}px;
      background:${l};border-radius:50%;
      box-shadow:0 0 ${i*3}px ${l};
      opacity:0;
      animation:forgeFire ${o}s ease-in-out forwards;
      --sway:${r}px;
    `,a.appendChild(t),setTimeout(()=>t.remove(),o*1e3+100)},120))}function ja(a,t,e){const i=document.createElement("div");i.style.cssText=`
    position:fixed;inset:0;z-index:9999;
    background:rgba(0,0,0,0.88);
    display:flex;align-items:center;justify-content:center;
    animation:fadeIn 0.3s ease;cursor:pointer;
    backdrop-filter:blur(6px);
  `,i.innerHTML=`
    <div style="text-align:center;position:relative">
      <!-- Rune ring -->
      <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
        width:200px;height:200px;border-radius:50%;
        border:1px solid ${e}40;
        animation:slowRotate 4s linear infinite;pointer-events:none">
      </div>
      <div style="position:relative;z-index:1">
        <div style="font-size:70px;margin-bottom:4px;
          filter:drop-shadow(0 0 30px ${e}80);
          animation:forgeFlicker 0.5s ease infinite alternate">🔥</div>
        <img src="${C(a.type?.split("/")[0])}"
          style="width:80px;height:80px;margin-bottom:16px;
          filter:drop-shadow(0 0 20px ${e})brightness(1.3)">
        <div style="font-family:var(--font-title);font-size:13px;letter-spacing:4px;
          color:${e};margin-bottom:6px;animation:fadeIn 0.5s 0.3s both">
          TREMPE ${t}/${Z}
        </div>
        <div style="font-family:var(--font-title);font-size:22px;font-weight:700;
          color:#E8D9B5;margin-bottom:4px;animation:fadeIn 0.5s 0.5s both">
          ${a.name}
        </div>
        <div style="font-size:13px;color:#4ADE80;margin-bottom:24px;
          animation:fadeIn 0.5s 0.7s both">
          ✦ Toutes les stats +15% ✦
        </div>
        <div style="display:flex;justify-content:center;gap:6px;margin-bottom:24px;
          animation:fadeIn 0.5s 0.9s both">
          ${Array.from({length:Z},(r,n)=>`
            <div style="width:30px;height:30px;border-radius:50%;
              background:${n<t?e+"20":"rgba(0,0,0,0.4)"};
              border:2px solid ${n<t?e:"rgba(200,120,20,0.12)"};
              display:flex;align-items:center;justify-content:center;
              font-size:14px;color:${n<t?e:"rgba(200,120,20,0.15)"}">
              ★
            </div>
          `).join("")}
        </div>
        <div style="font-size:9px;color:rgba(255,255,255,0.3);letter-spacing:2px;animation:fadeIn 0.5s 1.2s both">
          Cliquer pour fermer
        </div>
      </div>
    </div>
    <style>@keyframes fadeIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}</style>
  `,document.body.appendChild(i);const o=setTimeout(()=>i.remove(),4e3);i.addEventListener("click",()=>{clearTimeout(o),i.remove()})}function Oa(a){const t=J[a.rarity]||"#FF6B2C",e=a.rarity==="supreme",i=document.createElement("div");i.style.cssText=`
    position:fixed;inset:0;z-index:9999;
    background:rgba(0,0,0,0.97);
    display:flex;align-items:center;justify-content:center;
    flex-direction:column;
    animation:fadeIn 0.3s ease;
  `,i.innerHTML=`
    <!-- Glow BG -->
    <div style="position:absolute;inset:0;
      background:radial-gradient(circle at 50% 50%,${t}${e?"20":"12"},transparent 55%);
      animation:${e?"awakePulse":"forgeFlicker"} 1.5s ease infinite"></div>

    <!-- Rotating outer ring -->
    <div style="position:absolute;width:400px;height:400px;border-radius:50%;
      border:1px solid ${t}30;animation:slowRotate 6s linear infinite"></div>
    <div style="position:absolute;width:280px;height:280px;border-radius:50%;
      border:1px solid ${t}20;animation:slowRotate 4s linear infinite reverse"></div>

    <!-- Central icon -->
    <div style="position:relative;z-index:5;display:flex;flex-direction:column;align-items:center;text-align:center">
      <div style="font-size:80px;
        filter:drop-shadow(0 0 40px ${t});
        animation:forgeFlicker 0.8s ease infinite alternate;margin-bottom:24px">⚒</div>

      <div style="font-family:var(--font-stat);font-size:9px;color:${t};letter-spacing:4px;
        margin-bottom:8px;animation:fadeIn 0.6s 1s both;opacity:0">
        ${e?"✦ SUPRÊME DIVIN ✦":"✦ SEMI-ULTIMATE ✦"}
      </div>

      <div style="font-family:var(--font-title);font-size:28px;font-weight:700;
        color:#E8D9B5;letter-spacing:3px;margin-bottom:8px;
        animation:fadeIn 0.6s 1.3s both;opacity:0;
        text-shadow:0 0 30px ${t}60">
        ${a.name}
      </div>

      <div style="font-size:12px;color:rgba(200,150,60,0.5);max-width:400px;line-height:1.7;
        animation:fadeIn 0.6s 1.7s both;opacity:0">
        ${a.desc}
      </div>

      <!-- Stat pills -->
      <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:20px;
        animation:fadeIn 0.6s 2s both;opacity:0">
        ${Object.entries({HP:"hp",ATK:"atk",DEF:"def"}).map(([o,r])=>`
          <div style="background:${t}12;border:1px solid ${t}30;
            padding:6px 14px;border-radius:20px;">
            <span style="font-size:9px;color:${t}">${o} </span>
            <span style="font-family:var(--font-stat);font-size:13px;font-weight:700;color:#E8D9B5">
              ${a.stats?.[r]?.toLocaleString()||"—"}
            </span>
          </div>
        `).join("")}
      </div>

      <button id="fusion-done-btn" style="
        margin-top:32px;padding:14px 48px;border-radius:8px;
        background:linear-gradient(135deg,#6B3A08,${t},#6B3A08);
        border:1px solid ${t}60;
        color:${e?"#fff":"#FFD080"};
        font-family:var(--font-title);font-size:12px;letter-spacing:3px;
        cursor:pointer;animation:fadeIn 0.6s 2.5s both;opacity:0;
        box-shadow:0 0 30px ${t}40;
      ">CONTINUER →</button>
    </div>
    <style>
      @keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
      @keyframes slowRotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
      @keyframes forgeFlicker{0%,100%{filter:drop-shadow(0 0 20px ${t}60)}50%{filter:drop-shadow(0 0 50px ${t}) brightness(1.3)}}
      @keyframes awakePulse{0%,100%{box-shadow:none}50%{box-shadow:0 0 80px ${t}20}}
    </style>
  `;for(let o=0;o<40;o++)setTimeout(()=>{const r=document.createElement("div"),n=Math.random()*Math.PI*2,l=80+Math.random()*300,s=2+Math.random()*4;r.style.cssText=`
        position:absolute;left:50%;top:50%;
        width:${s}px;height:${s}px;
        background:${t};border-radius:50%;
        box-shadow:0 0 ${s*3}px ${t};
        animation:emberBurstParticle ${1+Math.random()*1.5}s ease forwards;
        --dx:${Math.cos(n)*l}px;
        --dy:${Math.sin(n)*l}px;
        z-index:4;
      `,i.appendChild(r)},o*40);document.body.appendChild(i),setTimeout(()=>{document.getElementById("fusion-done-btn")?.addEventListener("click",()=>{i.remove(),N()})},100)}const _a={guerrier:{hp:1.5,def:1.5,atk:1,magDef:.5,spd:.3,magAtk:0},mage:{hp:.8,def:.3,atk:0,magDef:1.2,spd:.5,magAtk:2},arche:{hp:.7,def:.4,atk:1.8,magDef:.3,spd:1.5,magAtk:0},assassin:{hp:.6,def:.3,atk:1.6,magDef:.2,spd:2,magAtk:0}},Re=["commun","peucommun","rare","epique","legendaire","mythique","ultimate"],he={rare:{color:"#3B82F6",label:"Rare"},epique:{color:"#9333EA",label:"Epique"},legendaire:{color:"#C89B3C",label:"Legendaire"},ultimate:{color:"#F5F0E8",label:"Ultimate"}},zt={guerrier:"#f87171",mage:"#c084fc",arche:"#86efac",assassin:"#ff6b9d"},Vt={hp:"HP",atk:"ATK",def:"DEF",spd:"SPD",magAtk:"MAG",magDef:"RES"};let vt="overview",$t=null,Ot="all",bt="rarity",_t="all",Ut="all";const Ua=["overview","missions","team","characters","inventory","forge"];function ti(){const a=document.getElementById("app");a.innerHTML=`
    <div class="screen" style="background:var(--bg-primary);overflow:hidden;display:flex;flex-direction:column;">

      <!-- Topbar -->
      <div class="topbar" style="position:relative;z-index:10">
        <button class="topbar__back" id="dash-back">&#9664;</button>
        <div class="topbar__title" style="font-size:13px;letter-spacing:4px">TABLEAU DE BORD</div>
        <div style="width:36px"></div>
      </div>

      <!-- Tab Bar -->
      <div id="dash-tabs" style="display:flex;background:rgba(10,6,3,0.97);border-bottom:1px solid var(--border-metal);flex-shrink:0;overflow-x:auto;">
        ${Ua.map(t=>`
          <button class="dash-tab ${t===vt?"dash-tab--active":""}" data-tab="${t}" id="tab-${t}" style="
            flex:1;min-width:100px;padding:14px 8px;background:none;border:none;
            border-bottom:2px solid ${t===vt?"var(--accent)":"transparent"};
            color:${t===vt?"var(--accent-light)":"var(--text-muted)"};
            font-family:var(--font-ui);font-size:11px;font-weight:700;letter-spacing:2px;
            text-transform:uppercase;cursor:pointer;transition:all 0.2s;white-space:nowrap
          ">${Ha(t)}</button>
        `).join("")}
      </div>

      <!-- Content -->
      <div id="dash-content" style="flex:1;overflow-y:auto;overflow-x:hidden;scrollbar-width:thin;scrollbar-color:rgba(200,155,60,0.1) transparent">
      </div>
    </div>
  `,document.getElementById("dash-back").addEventListener("click",()=>w.navigate("home")),document.querySelectorAll(".dash-tab").forEach(t=>{t.addEventListener("click",()=>{vt=t.dataset.tab,ti()})}),dt()}function Ha(a){return{overview:"Apercu",missions:"Missions",team:"Equipe",characters:"Personnages",inventory:"Inventaire",forge:"Forge"}[a]}function dt(){const a=document.getElementById("dash-content");if(a)switch(vt){case"overview":a.innerHTML=qa();break;case"missions":a.innerHTML=Na();break;case"team":a.innerHTML=Ga(),Xa();return;case"characters":a.innerHTML=Wa(),Za();return;case"inventory":a.innerHTML=Qa(),Ja();return;case"forge":a.innerHTML=to();break}}function Na(){const a=c.getDailyMissions()||[],t=c.getWeeklyMissions()||[];function e(n,l=!1){const s=n.target>0?Math.min(100,Math.round(n.progress/n.target*100)):0,d=n.done?"var(--success)":l?"#FBBF24":"var(--accent)",g=n.done?"rgba(74,124,89,0.3)":l?"rgba(251,191,36,0.2)":"rgba(192,57,11,0.2)";return`
      <div style="
        display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:16px;
        padding:16px 20px;
        background:${n.done?"rgba(74,124,89,0.06)":"rgba(12,8,4,0.8)"};
        border:1px solid ${g};
        border-radius:8px;
        opacity:${n.done?.7:1};
        transition:all 0.2s;
      ">
        <!-- Icon -->
        <div style="
          width:44px;height:44px;border-radius:8px;
          background:${d}15;border:1px solid ${d}30;
          display:flex;align-items:center;justify-content:center;
          font-size:22px;filter:${n.done?"grayscale(0.3)":"none"};
        ">${n.icon}</div>

        <!-- Info -->
        <div>
          <div style="
            font-family:var(--font-ui);font-size:13px;font-weight:700;
            color:${n.done?"var(--text-muted)":"var(--text-primary)"};
            margin-bottom:3px;
          ">${n.done?"✓ ":""}${n.title}</div>
          <div style="font-size:11px;color:var(--text-muted);margin-bottom:8px">${n.desc}</div>
          <!-- Progress bar -->
          <div style="display:flex;align-items:center;gap:10px">
            <div style="flex:1;height:5px;background:rgba(0,0,0,0.5);border-radius:3px;overflow:hidden;max-width:200px">
              <div style="height:100%;width:${s}%;background:${n.done?"var(--success)":d};border-radius:3px;transition:width 0.5s ease;box-shadow:0 0 6px ${d}40"></div>
            </div>
            <span style="font-family:var(--font-stat);font-size:10px;color:var(--text-muted)">${n.progress}/${n.target}</span>
          </div>
        </div>

        <!-- Reward -->
        <div style="text-align:right">
          <div style="font-family:var(--font-stat);font-size:16px;font-weight:700;color:${n.done?"var(--text-muted)":"var(--star)"}">+${n.reward}</div>
          <div style="font-size:9px;color:var(--text-muted);letter-spacing:1px">⭐ ARCHIRÊVES</div>
          ${n.done?'<div style="font-size:9px;color:var(--success);margin-top:2px;letter-spacing:1px">RÉCLAMÉ</div>':""}
        </div>
      </div>
    `}const i=a.filter(n=>n.done).length,o=t.filter(n=>n.done).length,r=c.getWeekKey();return`
    <div style="padding:var(--space-xl);max-width:900px;margin:0 auto">

      <!-- Daily -->
      <div class="glass" style="padding:var(--space-xl);border-radius:var(--radius-xl);margin-bottom:var(--space-xl)">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-lg)">
          <div>
            <div style="font-family:var(--font-title);font-size:11px;letter-spacing:3px;color:var(--text-muted)">— MISSIONS JOURNALIÈRES —</div>
            <div style="font-size:10px;color:var(--text-secondary);margin-top:4px">Réinitialisées chaque jour à minuit</div>
          </div>
          <div style="font-family:var(--font-stat);font-size:14px;font-weight:700;color:${i===a.length?"var(--success)":"var(--accent)"}">
            ${i}/${a.length}
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px">
          ${a.map(n=>e(n,!1)).join("")}
        </div>
      </div>

      <!-- Weekly -->
      <div class="glass" style="padding:var(--space-xl);border-radius:var(--radius-xl);border-color:rgba(251,191,36,0.15)">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-lg)">
          <div>
            <div style="font-family:var(--font-title);font-size:11px;letter-spacing:3px;color:#FBBF24">— MISSIONS HEBDOMADAIRES —</div>
            <div style="font-size:10px;color:var(--text-secondary);margin-top:4px">Semaine ${r} · Meilleures récompenses</div>
          </div>
          <div style="font-family:var(--font-stat);font-size:14px;font-weight:700;color:${o===t.length?"var(--success)":"#FBBF24"}">
            ${o}/${t.length}
          </div>
        </div>
        <div style="display:flex;flex-direction:column;gap:10px">
          ${t.map(n=>e(n,!0)).join("")}
        </div>
      </div>

    </div>
  `}function qa(){const a=c.state,t=a.profile||{pseudo:"Forgeant",level:1,xp:0},e=a.totalBattles>0?Math.round(a.totalWins/a.totalBattles*100):0,i=a.ownedCharacters.length,o=t.level*100,r=Math.min(100,Math.round(t.xp/o*100)),n=["enchantement","osiris","supplice","maragorh","imotep"],l={enchantement:"Enchantement",osiris:"Osiris",supplice:"Supplice",maragorh:"Maragorh",imotep:"Imotep"},s=n.map(g=>{let p=0;for(let m=0;m<20;m++)c.getLevelFlames(g,m)>0&&p++;return{id:g,name:l[g],done:p,total:20,pct:Math.round(p/20*100)}}),d={rare:0,epique:0,legendaire:0,ultimate:0};return a.ownedCharacters.forEach(g=>{const p=P.find(m=>m.id===g.id);p&&d[p.rarity]!==void 0&&d[p.rarity]++}),Object.values(d).reduce((g,p)=>g+p,0),`
    <div style="padding:var(--space-xl);max-width:1100px;margin:0 auto">

      <!-- Profil Joueur -->
      <div class="glass" style="padding:var(--space-xl);border-radius:var(--radius-xl);margin-bottom:var(--space-xl);display:flex;align-items:center;gap:var(--space-xl);background:linear-gradient(135deg,rgba(192,57,11,0.08),rgba(13,10,8,0.95))">
        <div style="width:72px;height:72px;border-radius:var(--radius-lg);background:linear-gradient(135deg,var(--accent),var(--accent-light));display:flex;align-items:center;justify-content:center;font-family:var(--font-title);font-size:24px;font-weight:900;color:#fff;flex-shrink:0;box-shadow:0 0 30px var(--accent-glow)">
          ${(t.pseudo||"?").charAt(0).toUpperCase()}
        </div>
        <div style="flex:1">
          <div style="font-family:var(--font-title);font-size:20px;color:var(--text-bright);letter-spacing:2px">${t.pseudo||"Forgeron"}</div>
          <div style="font-family:var(--font-ui);font-size:11px;color:var(--text-muted);letter-spacing:2px;margin-top:4px">NIVEAU ${t.level} &nbsp;&#9670;&nbsp; ${i} PERSONNAGES</div>
          <div style="margin-top:var(--space-sm);display:flex;align-items:center;gap:var(--space-sm)">
            <div style="flex:1;height:6px;background:rgba(0,0,0,0.5);border-radius:3px;overflow:hidden;border:1px solid var(--border)">
              <div style="height:100%;width:${r}%;background:var(--accent-gradient);border-radius:3px;transition:width 0.8s ease"></div>
            </div>
            <span style="font-family:var(--font-stat);font-size:11px;color:var(--text-muted)">${t.xp}/${o} XP</span>
          </div>
        </div>
        <div style="text-align:right;font-family:var(--font-stat)">
          <div style="font-size:24px;font-weight:700;color:var(--star)">${a.archireve.toLocaleString()}</div>
          <div style="font-size:10px;color:var(--text-muted);letter-spacing:2px">ARCHIREVES</div>
        </div>
      </div>

      <!-- Stat Cards -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-md);margin-bottom:var(--space-xl)">
        ${ee("COMBATS",a.totalBattles,"#E8DCC8")}
        ${ee("VICTOIRES",a.totalWins,"var(--success)")}
        ${ee("TAUX VICTOIRE",e+"%",e>=50?"var(--legendaire)":"var(--danger)")}
      </div>

      <!-- Campaign Progress -->
      <div class="glass" style="padding:var(--space-xl);border-radius:var(--radius-xl);margin-bottom:var(--space-xl)">
        <div style="font-family:var(--font-title);font-size:11px;letter-spacing:3px;color:var(--text-muted);margin-bottom:var(--space-lg)">— PROGRESSION CAMPAGNE —</div>
        <div style="display:flex;flex-direction:column;gap:var(--space-md)">
          ${s.map(g=>`
            <div>
              <div style="display:flex;justify-content:space-between;margin-bottom:6px">
                <span style="font-family:var(--font-ui);font-size:12px;font-weight:700;color:var(--text-primary);letter-spacing:1px">${g.name.toUpperCase()}</span>
                <span style="font-family:var(--font-stat);font-size:12px;color:${g.pct===100?"var(--legendaire)":"var(--text-muted)"}">${g.done}/${g.total}</span>
              </div>
              <div style="height:8px;background:rgba(0,0,0,0.5);border-radius:var(--radius-sm);overflow:hidden;border:1px solid var(--border)">
                <div style="height:100%;width:${g.pct}%;background:${g.pct===100?"var(--star-gradient)":"var(--accent-gradient)"};border-radius:var(--radius-sm);transition:width 1s ease;${g.pct===100?"box-shadow:0 0 10px var(--star-glow)":""}"></div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Collection Rarity Chart -->
      <div class="glass" style="padding:var(--space-xl);border-radius:var(--radius-xl)">
        <div style="font-family:var(--font-title);font-size:11px;letter-spacing:3px;color:var(--text-muted);margin-bottom:var(--space-lg)">— COLLECTION —</div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:var(--space-md)">
          ${Object.entries(d).map(([g,p])=>{const m=he[g],f=Math.round(p/i*100)||0;return`
              <div style="text-align:center">
                <div style="font-family:var(--font-stat);font-size:32px;font-weight:700;color:${m.color};margin-bottom:4px">${p}</div>
                <div style="font-size:9px;color:var(--text-muted);letter-spacing:2px">${m.label.toUpperCase()}</div>
                <div style="margin-top:8px;height:4px;background:rgba(0,0,0,0.5);border-radius:2px;overflow:hidden">
                  <div style="height:100%;width:${f}%;background:${m.color};border-radius:2px"></div>
                </div>
              </div>
            `}).join("")}
        </div>
      </div>

    </div>
  `}function ee(a,t,e){return`
    <div class="glass" style="padding:var(--space-xl) var(--space-md);border-radius:var(--radius-xl);text-align:center">
      <div style="font-family:var(--font-stat);font-size:40px;font-weight:700;color:${e};line-height:1">${t}</div>
      <div style="font-family:var(--font-ui);font-size:9px;color:var(--text-muted);letter-spacing:3px;margin-top:8px">${a}</div>
    </div>
  `}function Ga(){const a=c.getTeamInstances(),t=Ya(a);return`
    <div style="padding:var(--space-xl);max-width:1100px;margin:0 auto">

      <!-- Synergie Banner -->
      <div class="glass" style="padding:var(--space-lg);border-radius:var(--radius-xl);margin-bottom:var(--space-xl);display:flex;align-items:center;justify-content:space-between;background:linear-gradient(135deg,rgba(200,155,60,0.06),rgba(13,10,8,0.95))">
        <div>
          <div style="font-family:var(--font-title);font-size:11px;letter-spacing:3px;color:var(--text-muted)">SYNERGIE D'EQUIPE</div>
          <div style="font-family:var(--font-stat);font-size:22px;color:var(--legendaire);font-weight:700;margin-top:6px">${t.label}</div>
        </div>
        <div style="text-align:right">
          <div style="font-size:11px;color:var(--text-secondary);${t.bonus?"":"opacity:0.4"}">${t.bonus||"Aucun bonus actif"}</div>
          <button class="btn btn--ghost" id="btn-optimize" style="margin-top:var(--space-sm);font-size:10px;padding:8px 16px;letter-spacing:2px">OPTIMISER</button>
        </div>
      </div>

      <!-- Team Grid -->
      <div style="display:grid;grid-template-columns:repeat(${Math.min(a.length||1,4)},1fr);gap:var(--space-xl);margin-bottom:var(--space-xl)">
        ${a.length?a.map(e=>Va(e)).join(""):`<div style="color:var(--text-muted);text-align:center;padding:var(--space-xxxl);grid-column:1/-1">Aucun personnage dans l'equipe</div>`}
      </div>

      ${a.length?`
      <!-- Comparaison stats -->
      <div class="glass" style="padding:var(--space-xl);border-radius:var(--radius-xl)">
        <div style="font-family:var(--font-title);font-size:11px;letter-spacing:3px;color:var(--text-muted);margin-bottom:var(--space-lg)">— COMPARAISON STATS —</div>
        <div style="overflow-x:auto">
          <table style="width:100%;border-collapse:collapse;font-family:var(--font-ui)">
            <thead>
              <tr>
                <th style="text-align:left;padding:10px;font-size:10px;letter-spacing:2px;color:var(--text-muted);border-bottom:1px solid var(--border-metal)">PERSONNAGE</th>
                ${Object.values(Vt).map(e=>`<th style="text-align:center;padding:10px;font-size:10px;letter-spacing:2px;color:var(--text-muted);border-bottom:1px solid var(--border-metal)">${e}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${a.map((e,i)=>`
                <tr style="background:${i%2?"transparent":"rgba(200,155,60,0.02)"}">
                  <td style="padding:10px;border-bottom:1px solid rgba(200,155,60,0.04)">
                    <div style="font-weight:700;font-size:13px;color:var(--text-primary)">${e.name}</div>
                    <div style="font-size:10px;color:${zt[e.type]};letter-spacing:1px">${e.type.toUpperCase()}</div>
                  </td>
                  ${Object.keys(Vt).map(o=>{const r=Math.max(...a.map(s=>s.stats[o]||0)),n=e.stats[o]||0,l=r>0?Math.round(n/r*100):0;return`<td style="padding:10px;text-align:center;border-bottom:1px solid rgba(200,155,60,0.04)">
                      <div style="font-family:var(--font-stat);font-size:14px;font-weight:700;color:${n===r&&r>0?"var(--legendaire)":"var(--text-primary)"}">${n}</div>
                      <div style="width:40px;height:3px;background:rgba(0,0,0,0.4);border-radius:2px;margin:4px auto 0">
                        <div style="height:100%;width:${l}%;background:${zt[e.type]};border-radius:2px"></div>
                      </div>
                    </td>`}).join("")}
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
      `:""}
    </div>
  `}function Va(a){const t=Pe(a.stats,90),e=zt[a.type]||"var(--accent)",i=fi[a.rarity?.toUpperCase()]?.color||"#aaa",o=c.getCharacterBonusStats(a.id),r=Object.values(o).some(n=>n>0);return`
    <div class="glass" style="padding:var(--space-lg);border-radius:var(--radius-xl);text-align:center;border-color:rgba(${io(e)},0.2);position:relative">
      <div style="position:absolute;top:10px;right:12px;font-family:var(--font-stat);font-size:9px;font-weight:700;color:${i};letter-spacing:2px">${a.rarity?.toUpperCase()}</div>

      <!-- Radar SVG -->
      <svg viewBox="0 0 200 200" style="width:140px;height:140px;margin:0 auto var(--space-md)">
        <!-- Grid hexagons -->
        ${[.33,.66,1].map(n=>`<polygon points="${Pe({hp:1,atk:1,def:1,spd:1,magAtk:1,magDef:1},90*n)}" fill="none" stroke="rgba(200,155,60,0.12)" stroke-width="1"/>`).join("")}
        <!-- Axes -->
        ${ao(90).map(([n,l])=>`<line x1="100" y1="100" x2="${n}" y2="${l}" stroke="rgba(200,155,60,0.08)" stroke-width="1"/>`).join("")}
        <!-- Data -->
        <polygon points="${t}" fill="${e}22" stroke="${e}" stroke-width="1.5" opacity="0.9"/>
        <!-- Labels -->
        ${oo(a.stats,90)}
      </svg>

      <div style="font-family:var(--font-title);font-size:12px;color:var(--text-bright);letter-spacing:1px;margin-bottom:4px">${a.name}</div>
      <div style="font-family:var(--font-ui);font-size:10px;color:${e};letter-spacing:2px;margin-bottom:var(--space-sm)">${a.type.toUpperCase()} &nbsp;·&nbsp; NIV.${a.level}</div>

      <!-- HP Bar -->
      <div style="margin-bottom:var(--space-sm)">
        <div style="display:flex;justify-content:space-between;font-size:9px;color:var(--text-muted);margin-bottom:3px"><span>HP</span><span>${a.stats.hp}</span></div>
        <div style="height:5px;background:rgba(0,0,0,0.5);border-radius:2px;overflow:hidden">
          <div style="height:100%;width:100%;background:linear-gradient(90deg,#B91C1C,#EF4444);border-radius:2px"></div>
        </div>
      </div>

      ${r?'<div style="font-size:9px;color:var(--legendaire);letter-spacing:1px">+ BONUS ITEMS ACTIFS</div>':""}
    </div>
  `}function Xa(){document.getElementById("btn-optimize")?.addEventListener("click",()=>{const a=Ka();a&&(c.setTeam(a),dt())})}function Ya(a){if(!a.length)return{label:"Equipe vide",bonus:""};const t={};a.forEach(o=>{t[o.type]=(t[o.type]||0)+1});const e=Object.entries(t).sort((o,r)=>r[1]-o[1])[0],i=e[0].charAt(0).toUpperCase()+e[0].slice(1);return e[1]===4?{label:`Meute ${i}`,bonus:`+15% toutes les stats (${i})`}:e[1]===3?{label:`Formation ${i}`,bonus:`+10% ATK +5% SPD (${i})`}:e[1]===2?{label:`Duo ${i}`,bonus:`+5% ATK (${i})`}:Object.keys(t).length===4?{label:"Composition Mixte",bonus:"+3% SPD globale (flexibilite)"}:{label:"Standard",bonus:""}}function Ka(){const a=c.state.ownedCharacters;return a.length<1?null:a.map(e=>{const i=P.find(r=>r.id===e.id);if(!i)return null;const o={rare:1,epique:1.3,legendaire:1.7,ultimate:2.2}[i.rarity]||1;return{id:e.id,score:e.level*o}}).filter(Boolean).sort((e,i)=>i.score-e.score).slice(0,4).map(e=>e.id)}function Wa(){let t=c.getOwnedInstances();return Ot!=="all"&&(t=t.filter(e=>e.type===Ot)),t.sort((e,i)=>bt==="rarity"?Re.indexOf(i.rarity||"rare")-Re.indexOf(e.rarity||"rare"):bt==="level"?i.level-e.level:bt==="atk"?i.stats.atk+i.stats.magAtk-(e.stats.atk+e.stats.magAtk):0),`
    <div style="display:flex;height:100%">
      <!-- Left: list -->
      <div style="flex:0 0 320px;border-right:1px solid var(--border-metal);overflow-y:auto;padding:var(--space-md);">
        <!-- Filters -->
        <div style="display:flex;gap:6px;margin-bottom:var(--space-md);flex-wrap:wrap">
          ${["all","guerrier","mage","arche","assassin"].map(e=>`
            <button class="btn btn--sm ${e===Ot?"btn--primary":"btn--ghost"}" data-cfilter="${e}" style="flex:1;min-width:60px;padding:6px 4px;font-size:9px">${e==="all"?"TOUS":e.toUpperCase()}</button>
          `).join("")}
        </div>
        <div style="display:flex;gap:6px;margin-bottom:var(--space-md)">
          ${["rarity","level","atk"].map(e=>`
            <button class="btn btn--sm ${e===bt?"btn--primary":"btn--ghost"}" data-csort="${e}" style="flex:1;font-size:9px">${e==="atk"?"ATK":e.toUpperCase()}</button>
          `).join("")}
        </div>
        <!-- Char list -->
        <div style="display:flex;flex-direction:column;gap:8px">
          ${t.map(e=>{const i=e.id===$t,o=he[e.rarity]||{color:"#aaa"};return`
              <div class="char-list-item ${i?"char-list-item--active":""}" data-charid="${e.id}" style="
                display:flex;align-items:center;gap:12px;padding:12px;border-radius:var(--radius-md);
                background:${i?"rgba(192,57,11,0.15)":" rgba(20,12,6,0.6)"};
                border:1px solid ${i?"var(--accent)":"var(--border-metal)"};
                cursor:pointer;transition:all 0.2s
              ">
                <div style="width:40px;height:40px;border-radius:var(--radius-sm);background:rgba(200,155,60,0.05);border:1px solid ${o.color}22;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">
                  ${eo(e.type)}
                </div>
                <div style="flex:1;min-width:0">
                  <div style="font-family:var(--font-ui);font-size:12px;font-weight:700;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${e.name}</div>
                  <div style="display:flex;gap:8px;margin-top:3px">
                    <span style="font-size:9px;color:${o.color};letter-spacing:1px">${e.rarity?.toUpperCase()}</span>
                    <span style="font-size:9px;color:var(--text-muted)">NIV.${e.level}</span>
                  </div>
                </div>
              </div>
            `}).join("")}
          ${t.length===0?'<div style="text-align:center;padding:var(--space-xl);color:var(--text-muted);font-size:12px">Aucun personnage</div>':""}
        </div>
      </div>

      <!-- Right: detail -->
      <div style="flex:1;overflow-y:auto;padding:var(--space-xl)" id="char-detail-panel">
        ${$t?ei($t):pe()}
      </div>
    </div>
  `}function pe(){return`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:var(--text-muted);gap:var(--space-md)">
    <div style="font-size:48px;opacity:0.2">&#9876;</div>
    <div style="font-family:var(--font-title);font-size:12px;letter-spacing:3px">SELECTIONNEZ UN PERSONNAGE</div>
  </div>`}function ei(a){const t=c.state.ownedCharacters.find(d=>d.id===a);if(!t)return pe();const e=kt(a,t.level);if(!e)return pe();const i=c.getCharacterBonusStats(a),o=zt[e.type]||"var(--accent)",r=he[e.rarity]||{color:"#aaa"},n=e.skills.map(d=>{let g=0,p="",m="var(--text-secondary)";return d.type==="physical"?(g=Math.round(d.power/100*e.stats.atk),p=g+" DPS",m="#E85D20"):d.type==="magical"?(g=Math.round(d.power/100*e.stats.magAtk),p=g+" MAG",m="#c084fc"):d.type==="heal"?(g=Math.round(d.power/100*e.stats.magAtk),p=g+" SOIN",m="#4A7C59"):(p="Soutien",m="var(--text-muted)"),{...d,dps:g,dpsLabel:p,dpsColor:m}}),l=ii(e,a,3),s=c.getCharacterEquipped(a);return`
    <!-- Header -->
    <div style="display:flex;align-items:flex-start;gap:var(--space-xl);margin-bottom:var(--space-xl)">
      <div>
        <div style="font-family:var(--font-title);font-size:20px;color:var(--text-bright);letter-spacing:2px;margin-bottom:6px">${e.name}</div>
        <div style="display:flex;gap:var(--space-sm);flex-wrap:wrap">
          <span style="font-size:10px;color:${o};letter-spacing:2px;background:${o}15;padding:3px 10px;border-radius:var(--radius-sm);border:1px solid ${o}30">${e.type.toUpperCase()}</span>
          <span style="font-size:10px;color:${r.color};letter-spacing:2px;background:${r.color}15;padding:3px 10px;border-radius:var(--radius-sm);border:1px solid ${r.color}30">${e.rarity?.toUpperCase()}</span>
          <span style="font-size:10px;color:var(--text-muted);letter-spacing:2px;padding:3px 10px">NIV.${e.level}</span>
        </div>
        <div style="font-size:12px;color:var(--text-secondary);margin-top:var(--space-sm);font-style:italic">${e.desc||""}</div>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="glass" style="padding:var(--space-lg);border-radius:var(--radius-xl);margin-bottom:var(--space-lg)">
      <div style="font-family:var(--font-title);font-size:10px;letter-spacing:3px;color:var(--text-muted);margin-bottom:var(--space-md)">— STATISTIQUES —</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-md)">
        ${Object.entries(Vt).map(([d,g])=>{const p=e.stats[d]||0,m=i[d]||0,f=p+m;return`
            <div style="padding:10px;background:rgba(0,0,0,0.3);border-radius:var(--radius-md);border:1px solid var(--border)">
              <div style="font-size:9px;color:var(--text-muted);letter-spacing:2px;margin-bottom:4px">${g}</div>
              <div style="display:flex;align-items:baseline;gap:6px">
                <span style="font-family:var(--font-stat);font-size:22px;font-weight:700;color:var(--text-bright)">${f}</span>
                ${m>0?`<span style="font-size:11px;color:var(--legendaire);font-weight:700">+${m}</span>`:""}
              </div>
            </div>
          `}).join("")}
      </div>
    </div>

    <!-- Skills / DPS Table -->
    <div class="glass" style="padding:var(--space-lg);border-radius:var(--radius-xl);margin-bottom:var(--space-lg)">
      <div style="font-family:var(--font-title);font-size:10px;letter-spacing:3px;color:var(--text-muted);margin-bottom:var(--space-md)">— CAPACITES & DPS THEORIQUE —</div>
      <table style="width:100%;border-collapse:collapse">
        <thead>
          <tr>
            ${["CAPACITE","TYPE","PUISSANCE","DPS"].map(d=>`<th style="text-align:left;padding:8px 10px;font-size:9px;color:var(--text-muted);letter-spacing:2px;border-bottom:1px solid var(--border-metal)">${d}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${n.map((d,g)=>`
            <tr style="background:${g%2?"transparent":"rgba(200,155,60,0.02)"}">
              <td style="padding:10px;font-size:12px;font-weight:700;color:var(--text-primary);border-bottom:1px solid rgba(200,155,60,0.04)">${d.name}</td>
              <td style="padding:10px;border-bottom:1px solid rgba(200,155,60,0.04)">
                <span style="font-size:9px;letter-spacing:1px;padding:2px 8px;border-radius:3px;background:${d.dpsColor}15;color:${d.dpsColor};border:1px solid ${d.dpsColor}30">${d.type.toUpperCase()}</span>
              </td>
              <td style="padding:10px;font-family:var(--font-stat);font-size:14px;color:var(--text-secondary);border-bottom:1px solid rgba(200,155,60,0.04)">${d.power||0}</td>
              <td style="padding:10px;font-family:var(--font-stat);font-size:16px;font-weight:700;color:${d.dpsColor};border-bottom:1px solid rgba(200,155,60,0.04)">${d.dpsLabel}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>

    <!-- Equipped Items -->
    <div class="glass" style="padding:var(--space-lg);border-radius:var(--radius-xl);margin-bottom:var(--space-lg)">
      <div style="font-family:var(--font-title);font-size:10px;letter-spacing:3px;color:var(--text-muted);margin-bottom:var(--space-md)">— EQUIPEMENT ACTUEL —</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:var(--space-md)">
        ${Object.entries(pt).map(([d,g])=>{const p=s[d],m=p?c.state.inventory.find(v=>v.instanceId===p):null,f=m?H[m.itemId]:null,u=f?Q[f.rarity]?.color||"#aaa":"var(--text-muted)";return`
            <div style="text-align:center;padding:var(--space-md);background:rgba(0,0,0,0.3);border-radius:var(--radius-md);border:1px solid ${f?u+"40":"var(--border)"}">
              <div style="font-size:24px;margin-bottom:var(--space-xs)">${f?Xt(f.id):"&#9711;"}</div>
              <div style="font-size:9px;color:${f?u:"var(--text-muted)"};letter-spacing:1px">${f?f.name:g.name.toUpperCase()}</div>
              ${f?`<div style="font-size:8px;color:var(--text-muted);margin-top:4px">${Object.entries(f.stats||{}).map(([v,k])=>"+"+k+" "+v.toUpperCase()).join(" ")}</div>`:""}
            </div>
          `}).join("")}
      </div>
    </div>

    <!-- Recommandations -->
    ${l.length?`
    <div class="glass" style="padding:var(--space-lg);border-radius:var(--radius-xl);border-color:rgba(200,155,60,0.2)">
      <div style="font-family:var(--font-title);font-size:10px;letter-spacing:3px;color:var(--legendaire);margin-bottom:var(--space-md)">— ITEMS RECOMMANDES —</div>
      <div style="display:flex;flex-direction:column;gap:var(--space-sm)">
        ${l.map((d,g)=>{const p=Q[d.item.rarity]?.color||"#aaa";return`
            <div style="display:flex;align-items:center;gap:var(--space-md);padding:12px;background:rgba(0,0,0,0.3);border-radius:var(--radius-md);border:1px solid ${p}30">
              <div style="font-family:var(--font-stat);font-size:20px;font-weight:700;color:var(--text-muted);width:24px">#${g+1}</div>
              <div style="font-size:22px">${Xt(d.item.id)}</div>
              <div style="flex:1">
                <div style="font-size:13px;font-weight:700;color:var(--text-primary)">${d.item.name}</div>
                <div style="font-size:10px;color:${p};letter-spacing:1px">${d.item.rarity?.toUpperCase()} · ${d.item.slot.toUpperCase()}</div>
                <div style="font-size:10px;color:var(--text-secondary);margin-top:2px">${Object.entries(d.item.stats||{}).map(([m,f])=>"+"+f+" "+m.toUpperCase()).join(", ")}</div>
              </div>
              <div style="text-align:right">
                <div style="font-family:var(--font-stat);font-size:18px;font-weight:700;color:var(--legendaire)">${Math.round(d.score)}</div>
                <div style="font-size:9px;color:var(--text-muted);letter-spacing:1px">SCORE</div>
              </div>
            </div>
          `}).join("")}
      </div>
    </div>
    `:""}
  `}function Za(){document.querySelectorAll("[data-cfilter]").forEach(a=>{a.addEventListener("click",()=>{Ot=a.dataset.cfilter,dt()})}),document.querySelectorAll("[data-csort]").forEach(a=>{a.addEventListener("click",()=>{bt=a.dataset.csort,dt()})}),document.querySelectorAll("[data-charid]").forEach(a=>{a.addEventListener("click",()=>{$t=a.dataset.charid;const t=document.getElementById("char-detail-panel");t&&(t.innerHTML=ei($t))})})}function Qa(){let t=c.getInventoryItems();_t!=="all"&&(t=t.filter(o=>o.slot===_t)),Ut!=="all"&&(t=t.filter(o=>o.rarity===Ut));const i=c.getTeamInstances().map(o=>{const r=ii(o,o.id,2);return{char:o,recs:r}}).filter(o=>o.recs.length>0);return`
    <div style="padding:var(--space-xl);max-width:1100px;margin:0 auto">

      <!-- Filtres -->
      <div style="display:flex;gap:var(--space-sm);margin-bottom:var(--space-md);flex-wrap:wrap">
        ${["all","weapon","armor","accessory","amulet"].map(o=>`
          <button class="btn btn--sm ${o===_t?"btn--primary":"btn--ghost"}" data-ifilter="${o}">${o==="all"?"TOUS":pt[o]?.name.toUpperCase()||o.toUpperCase()}</button>
        `).join("")}
        <div style="width:1px;background:var(--border-metal);margin:0 4px"></div>
        ${["all","commun","peu_commun","rare","epique","legendaire"].map(o=>`
          <button class="btn btn--sm ${o===Ut?"btn--primary":"btn--ghost"}" data-irarity="${o}">${o==="all"?"ALL":o.toUpperCase()}</button>
        `).join("")}
      </div>

      <!-- Item Count -->
      <div style="font-size:11px;color:var(--text-muted);letter-spacing:2px;margin-bottom:var(--space-lg)">${t.length} objet(s)</div>

      <!-- Grid Items -->
      ${t.length?`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:var(--space-md);margin-bottom:var(--space-xxl)">
        ${t.map(o=>{const r=Q[o.rarity]?.color||"#aaa",n=Object.values(c.state.equipped).some(l=>Object.values(l).includes(o.instanceId));return`
            <div class="glass" style="padding:var(--space-md);border-radius:var(--radius-lg);text-align:center;cursor:default;border-color:${r}30;position:relative;transition:transform 0.2s" title="${o.desc||""}">
              ${n?'<div style="position:absolute;top:6px;right:6px;font-size:8px;color:var(--success);letter-spacing:1px;background:rgba(74,124,89,0.2);padding:2px 6px;border-radius:2px;border:1px solid rgba(74,124,89,0.3)">EQUIPE</div>':""}
              <div style="font-size:28px;margin-bottom:8px">${Xt(o.id)}</div>
              <div style="font-size:11px;font-weight:700;color:var(--text-primary);line-height:1.3;margin-bottom:4px">${o.name}</div>
              <div style="font-size:9px;color:${r};letter-spacing:1px;margin-bottom:6px">${o.rarity?.toUpperCase().replace("_"," ")}</div>
              <div style="font-size:9px;color:var(--text-secondary)">${Object.entries(o.stats||{}).map(([l,s])=>"+"+s+" "+l.toUpperCase()).join("<br>")}</div>
            </div>
          `}).join("")}
      </div>
      `:`<div style="text-align:center;padding:var(--space-xxxl);color:var(--text-muted)">Aucun item dans l'inventaire</div>`}

      <!-- Team Recommendations -->
      ${i.length?`
      <div class="glass" style="padding:var(--space-xl);border-radius:var(--radius-xl);border-color:rgba(200,155,60,0.2)">
        <div style="font-family:var(--font-title);font-size:10px;letter-spacing:3px;color:var(--legendaire);margin-bottom:var(--space-lg)">— RECOMMANDATIONS POUR L'EQUIPE —</div>
        <div style="display:flex;flex-direction:column;gap:var(--space-lg)">
          ${i.map(({char:o,recs:r})=>`
            <div>
              <div style="font-size:12px;font-weight:700;color:${zt[o.type]};letter-spacing:1px;margin-bottom:8px">${o.name.toUpperCase()}</div>
              <div style="display:flex;gap:var(--space-md);flex-wrap:wrap">
                ${r.map(n=>{const l=Q[n.item.rarity]?.color||"#aaa";return`
                    <div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(0,0,0,0.3);border-radius:var(--radius-md);border:1px solid ${l}30">
                      <span style="font-size:20px">${Xt(n.item.id)}</span>
                      <div>
                        <div style="font-size:11px;font-weight:700;color:var(--text-primary)">${n.item.name}</div>
                        <div style="font-size:9px;color:${l}">${n.item.rarity?.toUpperCase().replace("_"," ")}</div>
                      </div>
                    </div>
                  `}).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      </div>
      `:""}
    </div>
  `}function Ja(){document.querySelectorAll("[data-ifilter]").forEach(a=>{a.addEventListener("click",()=>{_t=a.dataset.ifilter,dt()})}),document.querySelectorAll("[data-irarity]").forEach(a=>{a.addEventListener("click",()=>{Ut=a.dataset.irarity,dt()})})}function to(){return`
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:80vh;padding:var(--space-xl);text-align:center">
      <div style="position:relative;margin-bottom:var(--space-xxl)">
        <div style="font-size:80px;filter:drop-shadow(0 0 30px rgba(192,57,11,0.5));animation:forgeGlow 2s ease-in-out infinite alternate">&#9874;</div>
        <div style="position:absolute;inset:0;background:radial-gradient(circle,rgba(192,57,11,0.15),transparent 70%);filter:blur(20px);pointer-events:none"></div>
      </div>
      <div style="font-family:var(--font-title);font-size:26px;letter-spacing:4px;color:var(--text-bright);margin-bottom:var(--space-md)">LA FORGE</div>
      <div style="font-size:13px;color:var(--text-muted);letter-spacing:2px;margin-bottom:var(--space-xxl)">SYSTEME DE TREMPE — PROCHAINEMENT</div>

      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-lg);max-width:700px;width:100%">
        ${[{icon:"&#9935;",title:"TREMPE",desc:"Eveille un personnage au-dela de son niveau max. Deverrouille des competences exclusives et un skin forge."},{icon:"&#9878;",title:"FUSION",desc:"Combine plusieurs items de meme rarete pour forger un item de rarete superieure."},{icon:"&#9762;",title:"DECONSTRUCTION",desc:"Detruit un item pour recuperer des Scories et des materiaux de forge rares."}].map(a=>`
          <div class="glass" style="padding:var(--space-xl);border-radius:var(--radius-xl);opacity:0.6">
            <div style="font-size:32px;margin-bottom:var(--space-md);color:var(--accent)">${a.icon}</div>
            <div style="font-family:var(--font-title);font-size:12px;letter-spacing:2px;color:var(--text-primary);margin-bottom:var(--space-sm)">${a.title}</div>
            <div style="font-size:11px;color:var(--text-secondary);line-height:1.6">${a.desc}</div>
          </div>
        `).join("")}
      </div>
    </div>
  `}function ii(a,t,e=3){const i=_a[a.type]||{},o=c.getCharacterEquipped(t),r=new Set(Object.values(o).filter(Boolean));return c.state.inventory.filter(n=>!r.has(n.instanceId)).map(n=>{const l=H[n.itemId];if(!l||!l.stats)return null;let s=0;for(const[d,g]of Object.entries(l.stats))s+=g*(i[d]||0);return{item:{...l,instanceId:n.instanceId},score:s}}).filter(Boolean).sort((n,l)=>l.score-n.score).slice(0,e)}function eo(a){return{guerrier:"&#9876;",mage:"&#9670;",arche:"&#8982;",assassin:"&#8693;"}[a]||"?"}function Xt(a){return{epee_rouille:"&#9876;",lame_forestiere:"&#9876;",baton_mage:"&#9670;",arc_elfique:"&#8982;",dague_ombre:"&#8693;",sceptre_samael:"&#9760;",gambison_use:"&#9711;",cuirasse_ecailles:"&#9680;",robe_arcane:"&#9670;",armure_maragorh:"&#9680;",egide_samael:"&#9680;",amulette_vitalite:"&#9711;",ceinture_force:"&#9711;",anneau_rapidite:"&#9711;",orbe_enchantement:"&#9670;",pendentif_chance:"&#9670;",collier_precision:"&#9671;",talisman_nature:"&#9671;",phylactere_samael:"&#9760;"}[a]||"&#9671;"}function io(a){if(!a.startsWith("#"))return"192,57,11";const t=parseInt(a.slice(1,3),16),e=parseInt(a.slice(3,5),16),i=parseInt(a.slice(5,7),16);return`${t},${e},${i}`}const Yt=["hp","atk","def","spd","magAtk","magDef"],we=a=>a*2*Math.PI/6-Math.PI/2;function Pe(a,t){const o={hp:800,atk:200,def:200,spd:150,magAtk:220,magDef:200},r={};for(const n of Yt)r[n]=Math.max(o[n],(a[n]||0)*1.2);return Yt.map((n,l)=>{const g=Math.min(a[n]||0,r[n])/(r[n]||1)*t,p=we(l),m=100+g*Math.cos(p),f=100+g*Math.sin(p);return`${m.toFixed(1)},${f.toFixed(1)}`}).join(" ")}function ao(a){return Yt.map((i,o)=>{const r=we(o);return[100+a*Math.cos(r),100+a*Math.sin(r)]})}function oo(a,t){return Yt.map((o,r)=>{const n=we(r),l=t+18,s=100+l*Math.cos(n),d=100+l*Math.sin(n);return`<text x="${s.toFixed(1)}" y="${d.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" fill="rgba(255,107,157,0.7)" font-size="11" font-family="DM Sans">${Vt[o]}</text>`}).join("")}function ro(){const a=document.getElementById("app"),t=c.state,e=c.ACHIEVEMENTS,i=t.achievements||{},o=Object.keys(i).length,r=e.length,n=Math.round(o/r*100);c.checkAchievements(),a.innerHTML=`
    <div style="width:100vw;height:100vh;background:#0c0a12;display:flex;flex-direction:column;overflow:hidden;position:relative">

      <!-- Ambient glow -->
      <div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:800px;height:400px;
        background:radial-gradient(ellipse,rgba(192,132,252,0.06),transparent 70%);
        pointer-events:none;z-index:0"></div>

      <!-- Top Bar -->
      <div style="display:flex;align-items:center;justify-content:space-between;
        padding:0 32px;height:56px;flex-shrink:0;
        background:rgba(14,10,20,0.97);border-bottom:1px solid rgba(192,132,252,0.08);z-index:10">
        <button id="back-btn" style="background:none;border:1px solid rgba(192,132,252,0.15);
          color:var(--text-secondary);width:36px;height:36px;border-radius:6px;
          cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;
          transition:all 0.15s">&#9664;</button>
        <div style="font-family:var(--font-title);font-size:16px;font-weight:700;letter-spacing:6px;color:var(--text-bright)">
          🏆 SUCCÈS
        </div>
        <div style="font-family:var(--font-stat);font-size:12px;color:var(--epique);letter-spacing:1px">
          ${o} / ${r}
        </div>
      </div>

      <!-- Progress Banner -->
      <div style="background:rgba(10,8,18,0.95);border-bottom:1px solid rgba(192,132,252,0.06);
        padding:20px 32px;flex-shrink:0;z-index:2">
        <div style="max-width:700px;margin:0 auto">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
            <div style="font-family:var(--font-ui);font-size:11px;letter-spacing:3px;color:var(--epique)">PROGRESSION GLOBALE</div>
            <div style="font-family:var(--font-stat);font-size:14px;font-weight:700;color:var(--text-bright)">${n}%</div>
          </div>
          <div style="height:8px;background:rgba(0,0,0,0.6);border-radius:4px;overflow:hidden;border:1px solid rgba(192,132,252,0.1)">
            <div style="height:100%;width:${n}%;border-radius:4px;
              background:linear-gradient(90deg,#c084fc,#ff6b9d);
              box-shadow:0 0 15px rgba(192,132,252,0.5);
              transition:width 1s cubic-bezier(0.4,0,0.2,1)"></div>
          </div>
          <div style="margin-top:8px;font-size:10px;color:var(--text-muted)">
            ${o<r?`${r-o} succès restants`:"🎉 Tous les succès débloqués !"}
          </div>
        </div>
      </div>

      <!-- Achievement Grid -->
      <div style="flex:1;overflow-y:auto;padding:24px 32px;scrollbar-width:thin;scrollbar-color:rgba(192,132,252,0.15) transparent">
        <div style="max-width:900px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px">
          ${e.map(l=>{const s=!!i[l.id],d=i[l.id]?.unlockedAt,g=d?new Date(d).toLocaleDateString("fr-FR"):null;return`
              <div style="
                position:relative;overflow:hidden;
                background:${s?"linear-gradient(135deg,rgba(18,12,30,0.97),rgba(12,8,22,0.99))":"rgba(10,8,16,0.6)"};
                border:1px solid ${s?"rgba(192,132,252,0.35)":"rgba(255,255,255,0.04)"};
                border-radius:12px;padding:20px;
                ${s?"box-shadow:0 0 20px rgba(192,132,252,0.08);":"opacity:0.6;"}
                transition:transform 0.2s ease,box-shadow 0.2s ease;
                ${s?"animation:achieveCardIn 0.3s ease;":""}
              " class="ach-card">
                <!-- Top glow line (only if unlocked) -->
                ${s?`<div style="position:absolute;top:0;left:20%;right:20%;height:1px;
                  background:linear-gradient(90deg,transparent,rgba(192,132,252,0.6),transparent)"></div>`:""}

                <div style="display:flex;align-items:flex-start;gap:14px">
                  <!-- Icon -->
                  <div style="
                    width:52px;height:52px;border-radius:10px;flex-shrink:0;
                    display:flex;align-items:center;justify-content:center;font-size:26px;
                    background:${s?"rgba(192,132,252,0.12)":"rgba(0,0,0,0.3)"};
                    border:1px solid ${s?"rgba(192,132,252,0.25)":"rgba(255,255,255,0.04)"};
                    ${s?"filter:drop-shadow(0 0 8px rgba(192,132,252,0.4));":"filter:grayscale(1);opacity:0.4;"}
                  ">${l.icon}</div>

                  <!-- Info -->
                  <div style="flex:1;min-width:0">
                    <div style="font-family:var(--font-title);font-size:13px;font-weight:700;
                      color:${s?"#faf5ff":"var(--text-muted)"};
                      letter-spacing:0.5px;margin-bottom:4px">
                      ${s?l.title:"???"}
                    </div>
                    <div style="font-size:11px;color:${s?"var(--text-secondary)":"var(--text-muted)"};line-height:1.5">
                      ${s?l.desc:"Condition non remplie"}
                    </div>
                    ${l.reward>0?`
                      <div style="margin-top:6px;font-family:var(--font-stat);font-size:10px;
                        color:${s?"rgba(252,211,77,0.8)":"rgba(252,211,77,0.2)"};font-weight:700">
                        ⭐ +${l.reward} Archirêves
                      </div>`:""}
                    ${g?`<div style="margin-top:4px;font-size:9px;color:var(--text-muted);letter-spacing:1px">
                      Débloqué le ${g}</div>`:""}
                  </div>

                  <!-- Badge -->
                  ${s?`
                    <div style="font-size:18px;filter:drop-shadow(0 0 8px rgba(192,132,252,0.6))">✓</div>
                  `:`
                    <div style="font-size:18px;opacity:0.15">🔒</div>
                  `}
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
    </div>

    <style>
      .ach-card:hover { transform:translateY(-2px) !important; box-shadow:0 8px 30px rgba(0,0,0,0.6),0 0 20px rgba(192,132,252,0.1) !important; }
      @keyframes achieveCardIn { from{opacity:0;transform:scale(0.95)} to{opacity:1;transform:scale(1)} }
    </style>
  `,document.getElementById("back-btn").addEventListener("click",()=>w.navigate("home"))}const ie={gardien_enchante:{line:`"Vous osez fouler ces terres sacrées ?
Seuls les dignes peuvent passer !"`,mood:"warn"},pharaon_ombre:{line:`"Je suis ressuscité pour régner éternellement.
Vous ne serez que des sacrifices."`,mood:"evil"},hydre_marais:{line:`* La créature à trois têtes vous fixe avec faim *
"...FAIM...DÉVORER..."`,mood:"beast"},ancien_maragorh:{line:`"La forêt rejette les intrus.
Retournez d'où vous venez... ou périssez."`,mood:"warn"},empereur_imotep:{line:`"Audacieux mortels ! Je suis l'Absolu.
Votre existence m'amuse... brièvement."`,mood:"evil"},kraken_ancien:{line:`* Les flots s'agitent. Des tentacules surgissent des profondeurs *
"GROOAAARR..."`,mood:"beast"},archonte_celeste:{line:`"Je suis le Juge Suprême des Cieux.
Votre jugement est sans appel. Préparez-vous."`,mood:"warn"},titan_volcanique:{line:`* La terre tremble sous votre équipe *
"DESTRUCTION... TOUT BRÛLERA..."`,mood:"beast"},architecte_originel:{line:`"Je vous ai créés. Je peux vous effacer.
La réalité elle-même fléchit à ma volonté."`,mood:"evil"},gardien_du_seuil:{line:`"Vous avez survécu jusqu'ici. Impressionnant.
Mais le Seuil ne laisse passer que les dieux."`,mood:"warn"},sentinelle_arc_en_ciel:{line:`"Le Bifröst ne peut être traversé par les mortels.
Je suis l'énergie pure. Je suis l'impassable."`,mood:"evil"},seigneur_divin:{line:`"... (Un silence oppressant envahit l'espace)
...Vous osez ? Vous OSEZ défier la divinité ?"`,mood:"evil"}},De=['"Préparez-vous à votre fin !"','"Vous ne passerez pas !"','"Ces terres vous sont interdites !"','"Vous êtes trop faibles pour avancer !"'],Fe={warn:{border:"rgba(252,211,77,0.5)",glow:"rgba(252,211,77,0.15)",text:"#fcd34d"},evil:{border:"rgba(239,68,68,0.5)",glow:"rgba(239,68,68,0.15)",text:"#fb7185"},beast:{border:"rgba(134,239,172,0.4)",glow:"rgba(134,239,172,0.1)",text:"#86efac"}};function no(a={}){const{zone:t,level:e}=a,i=parseInt(e||0),o=_.find(b=>b.id===t);if(!o){w.navigate("campaign");return}const r=i===(o.levels||20)-1,n=c.getTeamInstances(),l=document.getElementById("app");let s="",d="warn";r&&ie[o.boss.id]?(s=ie[o.boss.id].line,d=ie[o.boss.id].mood):r||(s=De[Math.floor(Math.random()*De.length)],d="warn");const g=Fe[d]||Fe.warn,p=r?o.boss.name:o.enemyTypes[Math.floor(Math.random()*o.enemyTypes.length)].replace(/_/g," ").replace(/\b\w/g,b=>b.toUpperCase()),m=r?o.boss.icon:o.icon,f=r?ge(!1):fe(),u=r?`BOSS — ${o.name}`:`Niveau ${i+1} — ${o.name}`;l.innerHTML=`
    <div id="vs-screen" style="
      width:100vw;height:100vh;overflow:hidden;position:relative;
      ${o.bgImage?`background-image:linear-gradient(to right,rgba(0,0,0,0.85),rgba(0,0,0,0.5),rgba(0,0,0,0.85)),url('${o.bgImage}');background-size:cover;background-position:center;`:"background:#0c0a12;"}
      display:flex;flex-direction:column;align-items:center;justify-content:center;
    ">

      <!-- Zone label -->
      <div style="position:absolute;top:24px;left:50%;transform:translateX(-50%);
        font-family:var(--font-stat);font-size:10px;letter-spacing:4px;
        color:rgba(255,255,255,0.4);z-index:10;text-transform:uppercase">
        ${u}
      </div>

      <!-- VS Layout -->
      <div style="display:flex;align-items:center;justify-content:center;gap:0;width:100%;max-width:1100px;z-index:5">

        <!-- LEFT: Player Team -->
        <div id="vs-left" style="flex:1;display:flex;flex-direction:column;align-items:center;
          opacity:0;animation:vsLeftIn 0.6s 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards">
          <div style="font-family:var(--font-title);font-size:11px;letter-spacing:5px;
            color:var(--accent-light);margin-bottom:24px;text-transform:uppercase">Ton Équipe</div>

          <!-- Team sprites in a 2x2 or 1x4 grid -->
          <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:16px;max-width:360px">
            ${n.map(b=>`
              <div style="text-align:center">
                <img src="${C((b.type||"guerrier").split("/")[0])}"
                  style="width:80px;height:80px;image-rendering:pixelated;
                  filter:drop-shadow(0 0 12px rgba(255,107,157,0.4)) drop-shadow(0 4px 8px rgba(0,0,0,0.8));
                  animation:spriteIdle 2.5s ease-in-out infinite">
                <div style="font-size:10px;color:var(--accent-light);margin-top:4px;
                  font-family:var(--font-title);letter-spacing:0.5px">${b.name.split(" ")[0]}</div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- VS CENTER -->
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;
          padding:0 40px;flex-shrink:0;z-index:10">

          <!-- VS Badge -->
          <div id="vs-badge" style="
            font-family:var(--font-title);font-size:72px;font-weight:900;
            color:var(--text-bright);letter-spacing:4px;
            text-shadow:0 0 40px rgba(255,107,157,0.5),0 0 80px rgba(192,132,252,0.3);
            opacity:0;animation:vsBadgeIn 0.5s 0.9s cubic-bezier(0.34,1.56,0.64,1) forwards;
          ">VS</div>

          <!-- Divider lines -->
          <div style="width:2px;height:80px;background:linear-gradient(to bottom,transparent,rgba(255,107,157,0.5),transparent);margin-top:16px;opacity:0;animation:vsLineIn 0.4s 1.1s ease forwards"></div>
        </div>

        <!-- RIGHT: Enemy/Boss -->
        <div id="vs-right" style="flex:1;display:flex;flex-direction:column;align-items:center;
          opacity:0;animation:vsRightIn 0.6s 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards">
          <div style="font-family:var(--font-title);font-size:11px;letter-spacing:5px;
            color:var(--danger);margin-bottom:24px;text-transform:uppercase">
            ${r?"⚠ BOSS":"Ennemis"}
          </div>

          <div style="text-align:center">
            <img src="${f}"
              style="width:${r?"120px":"90px"};height:${r?"120px":"90px"};image-rendering:pixelated;
              filter:drop-shadow(0 0 15px rgba(239,68,68,0.5)) drop-shadow(0 4px 8px rgba(0,0,0,0.9));
              animation:spriteIdle 2.5s ease-in-out infinite;transform:scaleX(-1)">
            <div style="font-family:var(--font-title);font-size:${r?"18px":"14px"};font-weight:700;
              color:var(--danger);letter-spacing:1px;margin-top:8px;
              text-shadow:0 0 15px rgba(239,68,68,0.4)">
              ${p}
            </div>
            ${r?`<div style="font-size:10px;color:var(--text-muted);letter-spacing:2px;margin-top:4px">${o.boss.type.toUpperCase()}</div>`:""}
          </div>
        </div>
      </div>

      <!-- Boss Dialogue (only for bosses or regular) -->
      ${s?`
      <div id="vs-dialogue" style="
        position:absolute;bottom:100px;left:50%;transform:translateX(-50%);
        max-width:600px;width:90%;
        background:rgba(8,6,14,0.95);
        border:1px solid ${g.border};
        border-radius:12px;padding:20px 24px;
        box-shadow:0 0 30px ${g.glow},0 8px 32px rgba(0,0,0,0.8);
        opacity:0;animation:vsDialogueIn 0.5s 1.4s ease forwards;
        z-index:20;
      ">
        <!-- Mood accent line -->
        <div style="position:absolute;top:0;left:20%;right:20%;height:1px;
          background:linear-gradient(90deg,transparent,${g.border},transparent)"></div>
        <div style="font-size:11px;color:${g.text};letter-spacing:2px;
          font-family:var(--font-ui);margin-bottom:8px;opacity:0.7">
          ${r?`${m} ${o.boss.name}`:`${o.icon} ENNEMI`}
        </div>
        <div style="font-family:var(--font-body);font-size:13px;color:var(--text-primary);
          line-height:1.7;white-space:pre-line;font-style:italic">${s}</div>
      </div>`:""}

      <!-- START COMBAT button -->
      <div id="vs-cta" style="
        position:absolute;bottom:28px;left:50%;transform:translateX(-50%);
        opacity:0;animation:vsDialogueIn 0.5s 1.8s ease forwards;
        z-index:20;display:flex;gap:12px;
      ">
        <button id="vs-fight-btn" style="
          font-family:var(--font-ui);font-size:13px;font-weight:700;letter-spacing:3px;
          padding:14px 40px;border-radius:8px;cursor:pointer;text-transform:uppercase;
          background:linear-gradient(135deg,#ff6b9d,#c084fc);border:none;color:#fff;
          box-shadow:0 0 20px rgba(255,107,157,0.4),0 4px 16px rgba(0,0,0,0.6);
          transition:transform 0.15s ease,box-shadow 0.15s ease;
        ">⚔ AU COMBAT !</button>
        <button id="vs-back-btn" style="
          font-family:var(--font-ui);font-size:12px;font-weight:600;letter-spacing:2px;
          padding:14px 24px;border-radius:8px;cursor:pointer;text-transform:uppercase;
          background:transparent;border:1px solid rgba(255,255,255,0.12);color:var(--text-muted);
          transition:all 0.15s ease;
        ">Annuler</button>
      </div>

      <!-- Skip hint -->
      <div id="vs-skip" style="position:absolute;top:24px;right:24px;
        font-size:9px;letter-spacing:2px;color:rgba(255,255,255,0.2);z-index:10;
        cursor:pointer">
        ESPACE / CLIC POUR PASSER
      </div>
    </div>

    <style>
      @keyframes vsLeftIn  { from{opacity:0;transform:translateX(-60px)} to{opacity:1;transform:translateX(0)} }
      @keyframes vsRightIn { from{opacity:0;transform:translateX(60px)}  to{opacity:1;transform:translateX(0)} }
      @keyframes vsBadgeIn { from{opacity:0;transform:scale(0.4) rotate(-10deg)} 60%{transform:scale(1.15) rotate(2deg)} to{opacity:1;transform:scale(1) rotate(0)} }
      @keyframes vsLineIn  { from{opacity:0;height:0} to{opacity:1;height:80px} }
      @keyframes vsDialogueIn { from{opacity:0;transform:translateX(-50%) translateY(12px)} to{opacity:1;transform:translateX(-50%) translateY(0)} }
      #vs-fight-btn:hover { transform:translateY(-2px) scale(1.03) !important; box-shadow:0 0 30px rgba(255,107,157,0.6),0 8px 24px rgba(0,0,0,0.7) !important; }
      #vs-back-btn:hover { color:var(--text-primary) !important; border-color:rgba(255,255,255,0.25) !important; }
    </style>
  `;const v=()=>{const b=document.getElementById("vs-screen");b?(b.style.transition="opacity 0.3s ease",b.style.opacity="0",setTimeout(()=>w.navigate("combat",{zone:t,level:i}),300)):w.navigate("combat",{zone:t,level:i})};document.getElementById("vs-fight-btn")?.addEventListener("click",v),document.getElementById("vs-back-btn")?.addEventListener("click",()=>w.navigate("campaign")),document.getElementById("vs-skip")?.addEventListener("click",v);const k=b=>{(b.code==="Space"||b.code==="Enter")&&(window.removeEventListener("keydown",k),v()),b.code==="Escape"&&(window.removeEventListener("keydown",k),w.navigate("campaign"))};window.addEventListener("keydown",k)}const ft=[{id:0,icon:"⚔️",title:"Bienvenue dans Rytiger",subtitle:"Le RPG gacha des abysses",content:`
      <p>Dans <strong>Rytiger</strong>, tu incarnes un commandant qui collecte des héros légendaires pour explorer des zones périlleuses et affronter des boss mythiques.</p>
      <div class="tuto-grid">
        <div class="tuto-item">🗺️<span>Campagne — 12 zones, 3 tiers de difficulté</span></div>
        <div class="tuto-item">⚔️<span>Combats ATB — système de timeline dynamique</span></div>
        <div class="tuto-item">🌸<span>Invocation — système de gacha 5★</span></div>
        <div class="tuto-item">💀<span>Donjon — 5 étages contre Samaël le Maudit</span></div>
      </div>
    `,bg:"linear-gradient(135deg, rgba(192,18,38,0.06), rgba(10,6,16,0.99))",accent:"#ff6b9d"},{id:1,icon:"⏱️",title:"Le Système ATB",subtitle:"Active Time Battle — agis avant tes ennemis !",content:`
      <p>La <strong>TIMELINE</strong> en haut de l'écran montre l'ordre d'action de chaque unité. Elle se remplit en temps réel selon la <strong>VITESSE (SPD)</strong> de chaque combattant.</p>
      <div class="tuto-grid">
        <div class="tuto-item">🟣<span>Barre violette = ton équipe en charge</span></div>
        <div class="tuto-item">🔴<span>Barre rouge = les ennemis en charge</span></div>
        <div class="tuto-item">✨<span>Quand ta jauge est pleine → choisis une compétence !</span></div>
        <div class="tuto-item">🤖<span>Bouton AUTO = l'IA joue pour toi automatiquement</span></div>
      </div>
      <div class="tuto-tip">💡 <strong>Astuce :</strong> Utilise ⚡ pour accélérer le combat en x2 ou x4 !</div>
    `,bg:"linear-gradient(135deg, rgba(192,132,252,0.06), rgba(10,6,16,0.99))",accent:"#c084fc"},{id:2,icon:"💥",title:"Le Système Break",subtitle:"Brise tes ennemis pour les stagger !",content:`
      <p>Chaque ennemi possède une <strong>JAUGE DE BREAK</strong> circulaire dorée. En l'attaquant avec son élément de faiblesse, tu la remplis plus vite.</p>
      <div class="tuto-grid">
        <div class="tuto-item">🟡<span>Jauge dorée = progression vers le BREAK</span></div>
        <div class="tuto-item">💥<span>BREAK → l'ennemi est staggeré et prend +50% de dégâts</span></div>
        <div class="tuto-item">🔥<span>Chaque ennemi a une faiblesse élémentaire (icône sous lui)</span></div>
        <div class="tuto-item">🛡️<span>ESPACE = Garde → réduit les dégâts reçus</span></div>
      </div>
      <div class="tuto-tip">⚠️ Les boss de Donjon ont des jauges de Break très résistantes !</div>
    `,bg:"linear-gradient(135deg, rgba(251,191,36,0.06), rgba(10,6,16,0.99))",accent:"#FBBF24"},{id:3,icon:"🌸",title:"Invocations & Équipement",subtitle:"Construis une équipe de légende",content:`
      <p>Dépense tes <strong>⭐ Archirêves</strong> pour invoquer de nouveaux héros. La rareté va de Rare à ULTIMATE. Les doublons font monter le niveau !</p>
      <div class="tuto-grid">
        <div class="tuto-item">⭐<span>Archirêves = monnaie principale</span></div>
        <div class="tuto-item">🏆<span>Pity à 90 invocations = ULTIMATE garanti</span></div>
        <div class="tuto-item">🎒<span>Inventaire → équipe tes héros avec des items</span></div>
        <div class="tuto-item">✨<span>Forge → fusionne 2 items légendaires en ULTIMATE</span></div>
      </div>
      <div class="tuto-tip">💡 <strong>Astuce :</strong> Équipe tes héros AVANT d'aller au Donjon !</div>
    `,bg:"linear-gradient(135deg, rgba(74,222,128,0.06), rgba(10,6,16,0.99))",accent:"#4ADE80"},{id:4,icon:"☠️",title:"Le Donjon de Samaël",subtitle:"Seuls les plus braves oseront y entrer",content:`
      <p>Le <strong>Donjon</strong> est un endgame à 5 étages qui s'enchaînent. Chaque étage est un boss unique avec des mécaniques spéciales. L'étage 5 : <strong>Samaël le Maudit</strong>.</p>
      <div class="tuto-grid">
        <div class="tuto-item">🏛️<span>Étage 1 → 4 : Gardiens de plus en plus puissants</span></div>
        <div class="tuto-item">☠️<span>Étage 5 : Samaël a 3 phases de combat</span></div>
        <div class="tuto-item">⏱️<span>Timer minimum par étage → sois efficace !</span></div>
        <div class="tuto-item">🏆<span>Récompenses exclusives : items Ultimate de Donjon</span></div>
      </div>
      <div class="tuto-tip">⚠️ Prépare une équipe entièrement équipée et de haut niveau avant d'y aller !</div>
    `,bg:"linear-gradient(135deg, rgba(220,38,38,0.08), rgba(10,6,16,0.99))",accent:"#EF4444"}];let F=0;function ai(a=null){const t=document.getElementById("app");F=0,Ht(t,a)}function Ht(a,t){const e=ft[F],i=F===ft.length-1,o=(F+1)/ft.length*100;a.innerHTML=`
    <div style="
      width:100vw;height:100vh;
      background:${e.bg};
      display:flex;flex-direction:column;
      position:relative;overflow:hidden;
    ">
      <!-- Ambient glow -->
      <div style="
        position:absolute;top:-200px;left:50%;transform:translateX(-50%);
        width:600px;height:600px;border-radius:50%;
        background:radial-gradient(circle,${e.accent}15,transparent 70%);
        pointer-events:none;
      "></div>

      <!-- Progress bar -->
      <div style="
        position:absolute;top:0;left:0;right:0;height:3px;
        background:rgba(255,255,255,0.05);z-index:10;
      ">
        <div style="
          height:100%;width:${o}%;
          background:linear-gradient(90deg,${e.accent},${e.accent}aa);
          transition:width 0.5s ease;
        "></div>
      </div>

      <!-- Skip button -->
      <div style="
        position:absolute;top:20px;right:24px;z-index:20;
        display:flex;align-items:center;gap:12px;
      ">
        <span style="font-family:var(--font-stat);font-size:10px;color:rgba(255,255,255,0.25);letter-spacing:2px">
          ${F+1} / ${ft.length}
        </span>
        <button id="tuto-skip" style="
          background:none;border:1px solid rgba(255,255,255,0.1);
          color:rgba(255,255,255,0.3);padding:6px 14px;border-radius:20px;
          font-family:var(--font-stat);font-size:10px;letter-spacing:2px;cursor:pointer;
          transition:all 0.2s;
        ">PASSER</button>
      </div>

      <!-- Main content -->
      <div style="
        flex:1;display:flex;flex-direction:column;
        align-items:center;justify-content:center;
        padding:60px 48px 40px;max-width:700px;margin:0 auto;width:100%;
        text-align:center;
      ">
        <!-- Slide icon -->
        <div style="
          font-size:72px;margin-bottom:24px;
          filter:drop-shadow(0 0 30px ${e.accent}80);
          animation:tutoPop 0.5s cubic-bezier(0.34,1.56,0.64,1);
        ">${e.icon}</div>

        <!-- Title -->
        <div style="
          font-family:var(--font-title);font-size:28px;font-weight:700;
          color:#faf5ff;letter-spacing:2px;margin-bottom:8px;
          animation:tutoPop 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.05s both;
        ">${e.title}</div>

        <!-- Subtitle -->
        <div style="
          font-family:var(--font-stat);font-size:12px;
          color:${e.accent};letter-spacing:3px;margin-bottom:32px;
          animation:tutoPop 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.1s both;
        ">${e.subtitle}</div>

        <!-- Content -->
        <div class="tuto-content" style="
          font-size:14px;color:rgba(255,255,255,0.75);line-height:1.8;
          text-align:left;width:100%;
          animation:tutoPop 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.15s both;
        ">
          ${e.content}
        </div>
      </div>

      <!-- Navigation -->
      <div style="
        padding:24px 48px;display:flex;justify-content:space-between;
        align-items:center;flex-shrink:0;
        border-top:1px solid rgba(255,255,255,0.04);
      ">
        <!-- Dots -->
        <div style="display:flex;gap:8px;">
          ${ft.map((r,n)=>`
            <div style="
              width:${n===F?24:8}px;height:8px;border-radius:4px;
              background:${n===F?e.accent:"rgba(255,255,255,0.15)"};
              transition:all 0.3s ease;cursor:pointer;
            " data-dot="${n}"></div>
          `).join("")}
        </div>

        <!-- Buttons -->
        <div style="display:flex;gap:12px;">
          ${F>0?`
            <button id="tuto-prev" style="
              background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);
              color:rgba(255,255,255,0.5);padding:12px 24px;border-radius:var(--radius-xl);
              font-family:var(--font-stat);font-size:12px;letter-spacing:2px;cursor:pointer;
              transition:all 0.2s;
            ">◀ Précédent</button>
          `:""}
          <button id="tuto-next" style="
            background:linear-gradient(135deg,${e.accent}40,${e.accent}20);
            border:1px solid ${e.accent}60;
            color:${e.accent};padding:12px 28px;border-radius:var(--radius-xl);
            font-family:var(--font-stat);font-size:12px;letter-spacing:2px;cursor:pointer;
            transition:all 0.2s;font-weight:700;
            box-shadow:0 0 20px ${e.accent}20;
          ">${i?"✓ Commencer !":"Suivant ▶"}</button>
        </div>
      </div>
    </div>

    <style>
      @keyframes tutoPop {
        from { opacity:0; transform:translateY(20px); }
        to   { opacity:1; transform:translateY(0); }
      }
      .tuto-content strong { color:#faf5ff; }
      .tuto-content p { margin-bottom:16px; }
      .tuto-grid {
        display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:16px 0;
      }
      .tuto-item {
        display:flex;align-items:center;gap:10px;
        background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);
        border-radius:8px;padding:10px 14px;
        font-size:12px;color:rgba(255,255,255,0.7);
      }
      .tuto-tip {
        background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);
        border-radius:8px;padding:12px 16px;margin-top:12px;
        font-size:12px;color:rgba(255,255,255,0.6);line-height:1.6;
      }
      .tuto-tip strong { color:rgba(255,255,255,0.9); }
      #tuto-skip:hover { color:rgba(255,255,255,0.6);border-color:rgba(255,255,255,0.2); }
      #tuto-next:hover { opacity:0.85;transform:translateY(-1px); }
      #tuto-prev:hover { color:rgba(255,255,255,0.8);border-color:rgba(255,255,255,0.2); }
    </style>
  `,document.getElementById("tuto-next").addEventListener("click",()=>{i?(c.completeTutorial(),t?t():w.navigate("home")):(F++,Ht(a,t))}),document.getElementById("tuto-prev")?.addEventListener("click",()=>{F--,Ht(a,t)}),document.getElementById("tuto-skip")?.addEventListener("click",()=>{c.completeTutorial(),t?t():w.navigate("home")}),document.querySelectorAll("[data-dot]").forEach(r=>{r.addEventListener("click",()=>{F=parseInt(r.dataset.dot),Ht(a,t)})})}function so(){const a=document.getElementById("app"),t=c.state.combatHistory||[],e=t.reduce((n,l)=>n+(l.totalDamage||0),0),i=t.length>0?Math.round(t.reduce((n,l)=>n+(l.timeSeconds||0),0)/t.length):0,o=t.filter(n=>n.won).length,r=t.filter(n=>n.isBerserk).length;a.innerHTML=`
    <div style="width:100vw;height:100vh;background:#06050a;display:flex;flex-direction:column;overflow:hidden;position:relative">

      <!-- Ambient glow -->
      <div style="position:absolute;top:0;left:50%;transform:translateX(-50%);width:700px;height:400px;
        background:radial-gradient(ellipse,rgba(192,132,252,0.05),transparent 70%);
        pointer-events:none;z-index:0"></div>

      <!-- Top Bar -->
      <div style="display:flex;align-items:center;justify-content:space-between;
        padding:0 32px;height:56px;flex-shrink:0;
        background:rgba(8,6,12,0.98);border-bottom:1px solid rgba(192,132,252,0.08);z-index:10">
        <button id="back-btn" style="background:none;border:1px solid rgba(192,132,252,0.15);
          color:var(--text-secondary);width:36px;height:36px;border-radius:6px;
          cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;
          transition:all 0.15s">◀</button>
        <div style="font-family:var(--font-title);font-size:16px;font-weight:700;letter-spacing:6px;color:var(--text-bright)">
          📜 HISTORIQUE
        </div>
        <div style="font-family:var(--font-stat);font-size:11px;color:var(--epique);letter-spacing:1px">
          ${t.length}/20
        </div>
      </div>

      <!-- Summary bar -->
      ${t.length>0?`
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:0;flex-shrink:0;
        border-bottom:1px solid rgba(192,132,252,0.06);background:rgba(10,8,16,0.95)">
        ${[{label:"VICTOIRES",val:o,color:"var(--accent)"},{label:"DMG TOTAL",val:e.toLocaleString(),color:"#E85D20"},{label:"TEMPS MOY.",val:`${Math.floor(i/60)}:${String(i%60).padStart(2,"0")}`,color:"var(--text-secondary)"},{label:"BERSERK",val:r,color:"#FBBF24"}].map((n,l)=>`
          <div style="padding:14px 24px;text-align:center;${l<3?"border-right:1px solid rgba(192,132,252,0.06)":""}">
            <div style="font-family:var(--font-stat);font-size:20px;font-weight:700;color:${n.color}">${n.val}</div>
            <div style="font-family:var(--font-ui);font-size:9px;color:var(--text-muted);letter-spacing:2px;margin-top:3px">${n.label}</div>
          </div>
        `).join("")}
      </div>
      `:""}

      <!-- History list -->
      <div style="flex:1;overflow-y:auto;padding:24px 32px;scrollbar-width:thin;scrollbar-color:rgba(192,132,252,0.15) transparent">
        <div style="max-width:800px;margin:0 auto;display:flex;flex-direction:column;gap:10px">

          ${t.length===0?`
            <div style="text-align:center;padding:80px 24px;color:var(--text-muted)">
              <div style="font-size:64px;margin-bottom:16px;opacity:0.2">📜</div>
              <div style="font-family:var(--font-title);font-size:13px;letter-spacing:3px">AUCUN COMBAT ENREGISTRÉ</div>
              <div style="font-size:11px;margin-top:8px;opacity:0.5">Joue ta première bataille pour voir l'historique !</div>
            </div>
          `:t.map((n,l)=>{const s=new Date(n.date),d=s.toLocaleDateString("fr-FR",{day:"2-digit",month:"short"})+" à "+s.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),g=n.timeSeconds?`${Math.floor(n.timeSeconds/60)}:${String(n.timeSeconds%60).padStart(2,"0")}`:"—",p=n.type==="dungeon"?`🏛️ Donjon — Étage ${n.floor||"?"}`:(()=>{const b=_.find(z=>z.id===n.zone);return b?`${b.icon} ${b.name}`:n.zone||"Zone inconnue"})(),m=n.flames>0?Array.from({length:3},(b,z)=>`<span style="opacity:${z<n.flames?1:.15}">🍃</span>`).join(""):"",f=n.won?"#4ADE80":"#EF4444",u=n.won?"✓ VICTOIRE":"✗ DÉFAITE",v=n.isBerserk?'<span style="font-size:8px;background:rgba(251,191,36,0.15);color:#FBBF24;border:1px solid rgba(251,191,36,0.3);padding:2px 6px;border-radius:3px;letter-spacing:1px">🔥 BERSERK</span>':"",k=n.type==="dungeon"?'<span style="font-size:8px;background:rgba(220,38,38,0.12);color:#EF4444;border:1px solid rgba(220,38,38,0.2);padding:2px 6px;border-radius:3px;letter-spacing:1px">⚰️ DONJON</span>':"";return`
              <div style="
                background:rgba(12,8,18,0.95);border:1px solid rgba(192,132,252,0.08);
                border-radius:10px;padding:16px 20px;
                display:grid;grid-template-columns:auto 1fr auto auto;
                align-items:center;gap:16px;
                transition:transform 0.15s ease,border-color 0.15s;
                animation:slideIn 0.3s ease ${l*.03}s both;
              " class="history-row">

                <!-- Index + status -->
                <div style="text-align:center;width:40px">
                  <div style="font-family:var(--font-stat);font-size:18px;font-weight:700;color:${f};
                    filter:drop-shadow(0 0 6px ${f}40)">${n.won?"🏆":"💀"}</div>
                  <div style="font-size:8px;color:var(--text-muted);margin-top:2px">#${t.length-l}</div>
                </div>

                <!-- Main info -->
                <div>
                  <div style="font-family:var(--font-ui);font-size:13px;font-weight:700;color:var(--text-primary);margin-bottom:4px">
                    ${p}
                  </div>
                  <div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center">
                    <span style="font-size:8px;background:${f}18;color:${f};border:1px solid ${f}30;padding:2px 7px;border-radius:3px;letter-spacing:1px;font-weight:700">${u}</span>
                    ${v}
                    ${k}
                    <span style="font-size:9px;color:var(--text-muted)">${d}</span>
                  </div>
                  ${m?`<div style="margin-top:6px;font-size:14px">${m}</div>`:""}
                </div>

                <!-- Damage -->
                <div style="text-align:right">
                  <div style="font-family:var(--font-stat);font-size:16px;font-weight:700;color:#E85D20">${(n.totalDamage||0).toLocaleString()}</div>
                  <div style="font-size:9px;color:var(--text-muted);letter-spacing:1px">dégâts</div>
                </div>

                <!-- Time -->
                <div style="text-align:right;min-width:50px">
                  <div style="font-family:var(--font-stat);font-size:16px;font-weight:700;color:var(--text-secondary)">⏱ ${g}</div>
                  <div style="font-size:9px;color:var(--text-muted);letter-spacing:1px">durée</div>
                </div>
              </div>
            `}).join("")}
        </div>

        <!-- Damage chart (bar chart) -->
        ${t.length>=3?`
        <div style="max-width:800px;margin:24px auto 0;
          background:rgba(12,8,18,0.95);border:1px solid rgba(192,132,252,0.08);border-radius:10px;padding:20px 24px">
          <div style="font-family:var(--font-title);font-size:10px;letter-spacing:3px;color:var(--epique);margin-bottom:16px">— ÉVOLUTION DES DÉGÂTS —</div>
          <div style="display:flex;align-items:flex-end;gap:6px;height:80px">
            ${[...t].reverse().slice(-10).map(n=>{const l=Math.max(...t.map(g=>g.totalDamage||0))||1,s=Math.max(5,Math.round((n.totalDamage||0)/l*100)),d=n.won?"#4ADE80":"#EF4444";return`
                <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px">
                  <div style="width:100%;background:${d}${n.won?"60":"40"};border-radius:3px 3px 0 0;height:${s}%;
                    box-shadow:0 0 8px ${d}20;transition:height 0.5s ease;min-height:4px"></div>
                </div>
              `}).join("")}
          </div>
          <div style="font-size:9px;color:var(--text-muted);text-align:center;margin-top:8px;letter-spacing:1px">10 derniers combats (vert = victoire)</div>
        </div>
        `:""}
      </div>
    </div>

    <style>
      @keyframes slideIn { from{opacity:0;transform:translateX(-10px)} to{opacity:1;transform:translateX(0)} }
      .history-row:hover { transform:translateX(4px);border-color:rgba(192,132,252,0.18) !important; }
    </style>
  `,document.getElementById("back-btn").addEventListener("click",()=>w.navigate("home"))}function ce(){const a=document.getElementById("app");c.state.tower||(c.state.tower={currentFloor:1,bestFloor:0,inRun:!1,boxState:{},activeBuffs:[]});const{inRun:t,currentFloor:e,bestFloor:i,activeBuffs:o}=c.state.tower;t&&o.some(p=>p.type==="fury");let r="",n=!1;if(t){const m=c.getTeamInstances().map(u=>{const v=c.state.tower.boxState[u.id];return v?(u.currentHp=v.hp,u.alive=!v.dead):(u.currentHp=0,u.alive=!1),u}),f=m.filter(u=>!u.alive).length;n=f<4,r=`
      <div style="font-family:var(--font-title);font-size:12px;letter-spacing:3px;color:var(--text-muted);margin-bottom:12px">ÉQUIPE D'EXPLORATION</div>
      <div style="display:flex;gap:16px;margin-bottom:24px;justify-content:center">
        ${m.map(u=>{const v=Math.max(0,u.currentHp/u.maxHp*100);return`
            <div style="width:70px;text-align:center;position:relative;opacity:${u.alive?"1":"0.4"};filter:${u.alive?"none":"grayscale(1)"}">
              <div style="width:60px;height:60px;background:url('${import.meta.url.replace("/screens/TowerScreen.js","")}/styles/imgs/characters/${u.id}.webp') center/cover;border-radius:8px;border:1px solid ${u.alive?"#bb86fc":"#ff0000"};margin:0 auto 8px"></div>
              <div style="font-size:10px;color:white;margin-bottom:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${u.name}</div>
              <div style="width:100%;height:4px;background:#333;border-radius:2px;overflow:hidden">
                <div style="height:100%;width:${v}%;background:${v>50?"#4ADE80":v>20?"#FBBF24":"#EF4444"}"></div>
              </div>
            </div>
          `}).join("")}
      </div>
      ${f>0&&n?'<div style="font-size:11px;color:#EF4444;margin-bottom:16px">Vous avez des héros morts dans votre équipe ! Remplacez-les dans le Menu (Dashboard).</div>':""}
      ${n?"":`<div style="font-size:13px;color:#EF4444;margin-bottom:16px;font-weight:bold">L'équipe active est totalement décimée.</div>`}
    `}let l="";t&&o&&o.length>0&&(l=`
      <div style="font-family:var(--font-title);font-size:12px;letter-spacing:3px;color:#bb86fc;margin-bottom:12px;margin-top:20px">BÉNÉDICTIONS ACTIVES</div>
      <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
        ${o.map(p=>`<div title="${p.desc}" style="font-size:24px;background:rgba(187,134,252,0.1);border:1px solid rgba(187,134,252,0.3);padding:8px;border-radius:8px;cursor:help">${p.icon}</div>`).join("")}
      </div>
    `),a.innerHTML=`
    <div style="width:100vw;height:100vh;background:#05000a;display:flex;flex-direction:column;position:relative;overflow:hidden">
      <!-- Background Effects -->
      <div style="position:absolute;inset:0;background:url('${import.meta.url.replace("/screens/TowerScreen.js","")}/styles/imgs/fond_zones/abysses_eternelles.webp') center/cover;opacity:0.1;pointer-events:none"></div>
      <div style="position:absolute;bottom:0;left:0;right:0;height:50vh;background:linear-gradient(0deg, #120025, transparent);pointer-events:none"></div>

      <!-- Header -->
      <div style="display:flex;align-items:center;padding:24px 32px;position:relative;z-index:10">
        <button id="back-btn" style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:var(--text-secondary);width:40px;height:40px;border-radius:8px;cursor:pointer;font-size:16px;transition:0.2s">&#9664;</button>
        <div style="flex:1;text-align:center">
          <div style="font-family:var(--font-title);font-size:16px;letter-spacing:6px;color:#bb86fc;text-shadow:0 0 20px rgba(187,134,252,0.5)">LA TOUR DE L'INFINI</div>
        </div>
        <div style="width:40px"></div>
      </div>

      <!-- Main Content -->
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;z-index:10;padding:20px;text-align:center">
        
        <div style="font-size:12px;color:var(--text-muted);letter-spacing:2px;margin-bottom:10px">RECORD ACTUEL : ÉTAGE ${i}</div>
        
        ${t?`
          <div style="font-family:var(--font-title);font-size:64px;color:white;margin-bottom:24px;text-shadow:0 0 30px rgba(255,255,255,0.2)">ÉTAGE ${e}</div>
          
          <div style="background:rgba(10,5,20,0.8);border:1px solid rgba(187,134,252,0.2);padding:24px;border-radius:16px;min-width:320px;backdrop-filter:blur(10px)">
            ${r}
            
            ${n?`
              <button id="fight-btn" style="padding:14px 30px;width:100%;border-radius:8px;background:#bb86fc;color:black;font-family:var(--font-ui);font-weight:700;font-size:14px;letter-spacing:1px;border:none;cursor:pointer;margin-bottom:12px">ENTRER DANS L'ARÈNE</button>
            `:`
              <button disabled style="padding:14px 30px;width:100%;border-radius:8px;background:#333;color:#888;font-family:var(--font-ui);font-weight:700;font-size:14px;letter-spacing:1px;border:none;margin-bottom:12px">ÉQUIPE DÉCIMÉE</button>
            `}
            
            <button id="abandon-btn" style="padding:10px 30px;width:100%;border-radius:8px;background:transparent;color:#EF4444;border:1px solid rgba(239, 68, 68, 0.3);cursor:pointer;font-size:12px;transition:0.2s">Mettre fin à l'ascension</button>
          </div>

          ${l}
        `:`
          <div style="max-width:500px;margin-bottom:40px">
            <h1 style="font-family:var(--font-title);font-size:42px;color:white;margin-bottom:16px">Pénétrez le Gouffre</h1>
            <p style="color:var(--text-muted);font-size:14px;line-height:1.6">
              Escaladez les étages d'une tour sans fin. Vos points de vie ne se régénèrent pas entre les combats. 
              Si un héros meurt, il le reste jusqu'à la fin de la tentative. Gérez votre Box entière et obtenez des <strong>Bénédictions Rogue-Like</strong> !
            </p>
          </div>
          <button id="start-run-btn" style="padding:16px 40px;border-radius:30px;background:#bb86fc;color:black;font-family:var(--font-title);font-size:16px;letter-spacing:2px;border:none;cursor:pointer;box-shadow:0 0 30px rgba(187,134,252,0.4);transition:0.2s">COMMENCER L'ASCENSION</button>
        `}
      </div>
    </div>
  `,document.getElementById("back-btn").addEventListener("click",()=>w.navigate("home"));const s=document.getElementById("start-run-btn");s&&s.addEventListener("click",()=>{c.startTowerRun(),ce()});const d=document.getElementById("fight-btn");d&&d.addEventListener("click",()=>{Et({isTower:!0,level:c.state.tower.currentFloor-1})});const g=document.getElementById("abandon-btn");g&&g.addEventListener("click",()=>{confirm("Êtes-vous sûr de vouloir abandonner cette ascension et perdre vos bénédictions ?")&&(c.abandonTowerRun(),ce())})}class lo{constructor(){this.playlist=["./song/Break_the_Iron_Sky.mp3","./song/Shatter_the_Sky.mp3"],this.currentIndex=0,this.audio=null,this._volume=.4,this._muted=!1,this.isPlaying=!1,this.fadeDuration=2e3,this._onTrackEnd=this._playNext.bind(this)}start(){this.isPlaying||(this.isPlaying=!0,this.currentIndex=Math.floor(Math.random()*this.playlist.length),this._loadAndPlay(this.currentIndex))}stop(){this.isPlaying=!1,this.audio&&(this.audio.pause(),this.audio.removeEventListener("ended",this._onTrackEnd),this.audio=null)}toggleMute(){return this._muted=!this._muted,this.audio&&(this.audio.muted=this._muted),this._savePref(),this._muted}setVolume(t){this._volume=Math.max(0,Math.min(1,t)),this.audio&&(this.audio.volume=this._volume),this._savePref()}get volume(){return this._volume}get muted(){return this._muted}loadPrefs(){try{const t=JSON.parse(localStorage.getItem("rytiger_audio")||"{}");typeof t.volume=="number"&&(this._volume=t.volume),typeof t.muted=="boolean"&&(this._muted=t.muted)}catch{}}_savePref(){try{localStorage.setItem("rytiger_audio",JSON.stringify({volume:this._volume,muted:this._muted}))}catch{}}_loadAndPlay(t){this.audio&&(this.audio.removeEventListener("ended",this._onTrackEnd),this.audio.pause());const e=this.playlist[t];this.audio=new Audio(e),this.audio.volume=0,this.audio.muted=this._muted,this.audio.addEventListener("ended",this._onTrackEnd),this.audio.play().then(()=>{this._fadeIn()}).catch(i=>{console.warn("[AudioManager] Playback blocked:",i.message)})}_playNext(){this.isPlaying&&(this.currentIndex=(this.currentIndex+1)%this.playlist.length,this._loadAndPlay(this.currentIndex))}_fadeIn(){if(!this.audio)return;const t=this._volume,e=30,i=this.fadeDuration/e;let o=0;const r=setInterval(()=>{if(o++,!this.audio||o>=e){clearInterval(r),this.audio&&(this.audio.volume=t);return}const n=o/e;this.audio.volume=t*(n*n)},i)}}const It=new lo;c.init();It.loadPrefs();w.on("profile",()=>Ge()).on("home",()=>je()).on("campaign",()=>_e()).on("combat",a=>Et(a)).on("vs",a=>no(a)).on("invocation",()=>re()).on("team",()=>q()).on("dungeon",()=>wa()).on("inventory",()=>za()).on("forge",()=>Sa()).on("dashboard",()=>ti()).on("achievements",()=>ro()).on("tutorial",()=>ai()).on("history",()=>so()).on("tower",()=>ce());po();function po(){const a=document.getElementById("app");let t=!1;a.innerHTML=`
    <div id="epic-loading" style="
      position:fixed;inset:0;z-index:9999;
      background:#06050a;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      overflow:hidden;cursor:pointer;
    ">
      <!-- Background layers -->
      <div id="load-bg-glow" style="position:absolute;inset:0;opacity:0;background:radial-gradient(ellipse at 50% 60%,rgba(232,93,32,0.12),transparent 70%);transition:opacity 2s ease"></div>
      <div id="load-bg-gold" style="position:absolute;inset:0;opacity:0;background:radial-gradient(ellipse at 50% 50%,rgba(200,150,60,0.08),transparent 50%);transition:opacity 1.5s ease"></div>

      <!-- Rune Circle SVG (LoL hextech style) -->
      <div id="rune-circle" style="position:absolute;width:500px;height:500px;opacity:0;transition:opacity 1.5s ease">
        <svg viewBox="0 0 500 500" style="width:100%;height:100%">
          <!-- Outer ring -->
          <circle cx="250" cy="250" r="230" fill="none" stroke="rgba(200,150,60,0.3)" stroke-width="1.5"
            stroke-dasharray="1445" stroke-dashoffset="1445" id="rune-outer">
            <animate attributeName="stroke-dashoffset" from="1445" to="0" dur="3s" begin="2s" fill="freeze"/>
          </circle>
          <!-- Inner ring (rotating) -->
          <circle cx="250" cy="250" r="180" fill="none" stroke="rgba(200,150,60,0.18)" stroke-width="1" stroke-dasharray="6 8"
            style="animation:portalRotate 12s linear infinite">
          </circle>
          <!-- Angular rune symbols (LoL/DS style) -->
          ${Array.from({length:16},(n,l)=>{const s=l/16*Math.PI*2-Math.PI/2,d=250+205*Math.cos(s),g=250+205*Math.sin(s),p=["☥","⛨","☦","⚳","♁","⛩","⯯","⛠","⬣","☥","⛨","⚳","☦","♁","⛩","⛠"];return`<text x="${d.toFixed(1)}" y="${g.toFixed(1)}" text-anchor="middle" dominant-baseline="middle"
              fill="rgba(200,150,60,0)" font-size="13" font-family="'Cinzel',serif" id="rune-${l}"
              style="transition:fill 0.6s ease ${3+l*.15}s">
              ${p[l]}
            </text>`}).join("")}
          <!-- Geometric lines -->
          <line x1="250" y1="20" x2="250" y2="480" stroke="rgba(200,150,60,0.03)" stroke-width="0.5"/>
          <line x1="20" y1="250" x2="480" y2="250" stroke="rgba(200,150,60,0.03)" stroke-width="0.5"/>
          <!-- Diagonal lines -->
          <line x1="75" y1="75" x2="425" y2="425" stroke="rgba(200,150,60,0.025)" stroke-width="0.5"/>
          <line x1="425" y1="75" x2="75" y2="425" stroke="rgba(200,150,60,0.025)" stroke-width="0.5"/>
        </svg>
      </div>

      <!-- Crest / Dark Souls bonfire symbol -->
      <div id="forge-symbol" style="
        font-size:0px;color:#C8963C;opacity:0;
        filter:drop-shadow(0 0 0px rgba(200,150,60,0));
        transition:font-size 1.2s cubic-bezier(0.34,1.56,0.64,1), opacity 0.8s ease, filter 2s ease;
        z-index:5;user-select:none;font-family:'Cinzel Decorative',serif;
        position:relative;
      ">☥</div>

      <!-- Title Letters (Cinzel epic font) -->
      <div id="title-container" style="
        display:flex;gap:6px;margin-top:24px;z-index:5;
        font-family:'Cinzel',serif;font-weight:900;font-size:0;
        letter-spacing:14px;
        transition:font-size 1s cubic-bezier(0.34,1.56,0.64,1);
      ">
        ${["R","Y","T","I","G","E","R"].map((n,l)=>`
          <span id="letter-${l}" style="
            opacity:0;
            background:linear-gradient(135deg,#7A5A1A,#C8963C,#F0D060,#C8963C);
            -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
            display:inline-block;
            filter:drop-shadow(0 0 0px rgba(200,150,60,0));
            transition:opacity 0.4s ease, filter 1.5s ease, transform 0.6s cubic-bezier(0.34,1.56,0.64,1);
            transform:translateY(20px) scale(0.5);
          ">${n}</span>
        `).join("")}
      </div>

      <!-- Subtitle -->
      <div id="load-subtitle" style="
        font-family:'Cinzel',serif;font-size:11px;letter-spacing:7px;
        color:rgba(200,150,60,0);margin-top:16px;z-index:5;
        transition:color 1.5s ease;text-transform:uppercase;
      ">RPG Tour par Tour — Runic Abyss</div>

      <!-- Progress Bar (gold) -->
      <div id="load-bar-wrap" style="
        width:280px;height:2px;background:rgba(200,150,60,0.08);border-radius:2px;overflow:hidden;
        margin-top:40px;z-index:5;opacity:0;transition:opacity 0.8s ease;
      ">
        <div id="load-bar-fill" style="
          height:100%;width:0%;background:linear-gradient(90deg,#8B6914,#C8963C,#F0D060);
          border-radius:2px;box-shadow:0 0 10px rgba(200,150,60,0.5);
          transition:width 0.3s ease;
        "></div>
      </div>

      <!-- Loading Text -->
      <div id="load-text" style="
        font-family:'Cinzel',serif;font-size:9px;letter-spacing:4px;
        color:rgba(200,150,60,0);margin-top:16px;z-index:5;
        transition:color 1s ease;text-transform:uppercase;
      ">L'Abyssal s'éveille...</div>

      <!-- Particle Container -->
      <div id="load-particles" style="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:3"></div>

      <!-- Golden Flash Overlay -->
      <div id="golden-flash" style="position:absolute;inset:0;background:radial-gradient(circle,rgba(255,107,157,0.6),rgba(192,132,252,0.3),transparent 70%);opacity:0;pointer-events:none;z-index:4;transition:opacity 0.15s ease"></div>

      <!-- Skip hint -->
      <div id="skip-hint" style="
        position:absolute;bottom:30px;font-family:'DM Sans',sans-serif;
        font-size:10px;letter-spacing:3px;color:rgba(90,74,56,0.3);z-index:10;
        animation:skipPulse 2s ease infinite;
      ">CLIQUEZ OU APPUYEZ SUR ESPACE POUR PASSER</div>
    </div>

    <style>
      @keyframes skipPulse { 0%,100%{opacity:0.2;} 50%{opacity:0.5;} }
    </style>
  `;const e=[{t:300,fn:()=>{A("load-bg-glow").style.opacity="1"}},{t:1500,fn:()=>{A("rune-circle").style.opacity="1"}},{t:2500,fn:()=>{for(let n=0;n<16;n++){const l=A(`rune-${n}`);l&&(l.style.fill="rgba(255,107,157,0.6)")}}},{t:3500,fn:()=>{const n=A("forge-symbol");n.style.fontSize="72px",n.style.opacity="1",n.style.filter="drop-shadow(0 0 30px rgba(200,150,60,0.8))"}},{t:4e3,fn:()=>co(80)},{t:4500,fn:()=>{const n=A("epic-loading");n.style.animation="screenShake 0.4s cubic-bezier(0.36,0.07,0.19,0.97)",setTimeout(()=>n.style.animation="",400)}},{t:4700,fn:()=>{const n=A("golden-flash");n.style.opacity="0.6",setTimeout(()=>n.style.opacity="0",200)}},{t:5e3,fn:()=>{A("load-bg-gold").style.opacity="1"}},{t:5500,fn:()=>{const n=A("title-container");n.style.fontSize="52px",["R","Y","T","I","G","E","R"].forEach((l,s)=>{setTimeout(()=>{const d=A(`letter-${s}`);d&&(d.style.opacity="1",d.style.transform="translateY(0) scale(1)",d.style.filter="drop-shadow(0 0 20px rgba(200,150,60,0.6))",go(d))},s*120)})}},{t:7500,fn:()=>{A("load-subtitle").style.color="rgba(200,150,60,0.5)"}},{t:8e3,fn:()=>{A("load-bar-wrap").style.opacity="1",A("load-text").style.color="rgba(200,150,60,0.55)",[{t:0,w:"15%"},{t:600,w:"35%"},{t:1200,w:"55%"},{t:2e3,w:"70%"},{t:2800,w:"85%"},{t:3500,w:"95%"},{t:4200,w:"100%"}].forEach(l=>{setTimeout(()=>{const s=A("load-bar-fill");s&&(s.style.width=l.w)},l.t)})}},{t:9e3,fn:()=>{fo(40,3e3)}},{t:12500,fn:()=>{const n=A("golden-flash");n.style.opacity="0.4",setTimeout(()=>n.style.opacity="0",300)}},{t:13500,fn:()=>r()}],i=[];e.forEach(n=>{i.push(setTimeout(()=>{t||n.fn()},n.t))});function o(){t||(t=!0,i.forEach(clearTimeout),r())}A("epic-loading")?.addEventListener("click",o),window.addEventListener("keydown",function n(l){(l.code==="Space"||l.key==="Escape")&&(o(),window.removeEventListener("keydown",n))}),ui(xi());function r(){const n=A("epic-loading");n&&(n.style.transition="opacity 0.8s ease",n.style.opacity="0",setTimeout(()=>{n.remove(),w.start();const l=window.location.hash;(l===""||l==="#")&&(c.state.initialized&&!c.state.tutorialDone?ai(()=>w.navigate("home")):w.navigate("home")),It.start(),mo()},800))}}function A(a){return document.getElementById(a)}function co(a){const t=A("load-particles");if(t)for(let e=0;e<a;e++)setTimeout(()=>{const i=document.createElement("div"),o=Math.random()*Math.PI*2,r=100+Math.random()*400,n=1+Math.random()*3,l=1+Math.random()*1.5,s=["#ff6b9d","#ff8db6","#c084fc","#fcd34d","#fda4af"],d=s[Math.floor(Math.random()*s.length)];i.style.cssText=`
        position:absolute;left:50%;top:50%;
        width:${n}px;height:${n}px;
        background:${d};border-radius:50%;
        box-shadow:0 0 ${n*4}px ${d};
        opacity:0;
        animation:emberBurstParticle ${l}s ease forwards;
        --dx:${Math.cos(o)*r}px;
        --dy:${Math.sin(o)*r}px;
      `,t.appendChild(i),setTimeout(()=>i.remove(),l*1e3+100)},e*15)}function go(a){const t=A("load-particles");if(!t||!a)return;const e=a.getBoundingClientRect();for(let i=0;i<6;i++){const o=document.createElement("div"),r=1+Math.random()*2;o.style.cssText=`
      position:absolute;
      left:${e.left+e.width*Math.random()}px;
      top:${e.top+e.height*Math.random()}px;
      width:${r}px;height:${r}px;
      background:#ff8db6;border-radius:50%;
      box-shadow:0 0 ${r*3}px #ff8db6;
      animation:letterSparkle 0.8s ease forwards;
      pointer-events:none;
    `,t.appendChild(o),setTimeout(()=>o.remove(),900)}}function fo(a,t){const e=A("load-particles");if(!e)return;const i=t/a;for(let o=0;o<a;o++)setTimeout(()=>{const r=document.createElement("div"),n=Math.random()*100,l=1+Math.random()*2.5,s=3+Math.random()*4,d=(Math.random()-.5)*80,g=["rgba(255,107,157,0.8)","rgba(192,132,252,0.7)","rgba(252,211,77,0.5)"],p=g[Math.floor(Math.random()*g.length)];r.style.cssText=`
        position:absolute;bottom:-10px;left:${n}%;
        width:${l}px;height:${l}px;
        background:${p};border-radius:50%;
        box-shadow:0 0 ${l*3}px ${p};
        opacity:0;
        animation:emberRise ${s}s ease-in forwards;
        --sway:${d}px;
      `,e.appendChild(r),setTimeout(()=>r.remove(),s*1e3+100)},o*i)}window.addEventListener("keydown",a=>{if(a.key==="Escape"&&window.location.hash!=="#home"&&window.location.hash!==""&&w.navigate("home"),a.key==="m"||a.key==="M"){const t=It.toggleMute();oi(t)}});function mo(){if(document.getElementById("music-controls"))return;const a=document.createElement("div");a.id="music-controls",a.innerHTML=ri(It.muted),a.title="Musique (M pour mute)",a.style.cssText=`
    position: fixed; bottom: 20px; right: 20px; z-index: 9998;
    width: 44px; height: 44px; border-radius: 50%;
    background: rgba(20, 16, 12, 0.85);
    border: 1px solid rgba(200, 155, 60, 0.3);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: all 0.3s ease;
    backdrop-filter: blur(8px);
    box-shadow: 0 2px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(200,155,60,0.1);
  `,a.addEventListener("mouseenter",()=>{a.style.borderColor="rgba(200, 155, 60, 0.6)",a.style.boxShadow="0 2px 20px rgba(192,57,11,0.3), inset 0 1px 0 rgba(200,155,60,0.2)",a.style.transform="scale(1.1)"}),a.addEventListener("mouseleave",()=>{a.style.borderColor="rgba(200, 155, 60, 0.3)",a.style.boxShadow="0 2px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(200,155,60,0.1)",a.style.transform="scale(1)"}),a.addEventListener("click",()=>{const t=It.toggleMute();oi(t)}),document.body.appendChild(a)}function oi(a){const t=document.getElementById("music-controls");t&&(t.innerHTML=ri(a))}function ri(a){return a?`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <line x1="23" y1="9" x2="17" y2="15"/>
      <line x1="17" y1="9" x2="23" y2="15"/>
    </svg>`:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
  </svg>`}
