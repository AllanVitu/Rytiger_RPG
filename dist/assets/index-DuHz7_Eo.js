import{g as m,C as Z,P as mt,s as De,m as Fe,a as Ue,b as He,x as je}from"./game-engine-C6yGxn0f.js";import{C,Z as G,e as Ne,F as re,f as K,c as lt,I as _,h as H,i as Ge,j as qe,R as Ve}from"./game-data-BOrsUA7a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();class Xe{constructor(){this.routes={},this.currentRoute=null,this.params={},window.addEventListener("hashchange",()=>this.handleRoute())}on(t,e){return this.routes[t]=e,this}navigate(t,e={}){this.params=e,window.location.hash=t}handleRoute(){const t=window.location.hash.slice(1)||"home",e=t.split("?")[0],i=t.split("?")[1];i&&i.split("&").forEach(r=>{const[s,o]=r.split("=");this.params[s]=decodeURIComponent(o)}),this.routes[e]?(this.currentRoute=e,this.routes[e](this.params),this.params={}):this.routes.home&&(this.currentRoute="home",this.routes.home({}))}start(){this.handleRoute()}}const w=new Xe;function J(a){const t={guerrier:"./assets/characters/guerrier.png",mage:"./assets/characters/mage.png",arche:"./assets/characters/arche.png",assassin:"./assets/characters/assassin.png"};return t[a]||t.guerrier}const se={};function L(a,t=null,e="rare"){return t&&se[t]?se[t]:J(a)}function ve(a=!1){return a?new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAFO0lEQVR42u2aT2wUVRzHP4scNjNvt4TGZWdrm+zSLS2CgpVuRWMjEi8QE+NBEsOFeOmpFzh4MPSmB+OJA/HsYb0YSkqkoVtSU5FiCIUCCmu7CZXddklju/tmXU/PQzvjTFkQYjIL43yTSXZm3mR2vu/7fn8fBAgQIECAAAECBAgQIIAbuiaUF8/8F2zy8F0qusV4qg/UNaGS2/cAKD8SQjgsOHrsxBORomtCDQ4Ne65iTwkpL+bt3339h9T6zDc61kiJRlleXvKUkM0evitk1qQq3l/g6LETnD51kl273yK27SV7gJRVHpSLFOavqeOffcX3IyNUVkoAIV8qBCA3lkVEdPs8brTZv197vc9aLuRv3+HK5XOYNenfJWPN9PnRM5z8/GsA3h54076Z7uzhxViCwaFhLubOup7x9A967Xqds55M7SWZ2oGUVW7dmLSvO8aE/KwQJzGMb+2g//4SIiKIGwZv/PkXI+GtTY2VPCfErMkQQCye5os/Spx9oYKsSmavXwXg25X7RLcYTVPw5mbNRL0uWdyVIWaaiIgAoJJ5j+tAuFxsmkKaRUioVMwrgNbWbciqpF6X1MxVAArz15qijmcBClBGIq2Sqb0KUF7nLs9isuc6mk1IM2WpdE0Qi6ep16Wd66wvl6b9t01NIkL19R/CrK3ZjnBYuNxxMrWXZqnFa6OqDhw8gpRVOtPd3LoxSc/OXvumiAhyi3k+/OhjfriYIG4Y5MayynLVvquH9PUfIm60ceXyOaItUQaHhpkYzzIxnmX60ii5sSxHj51AVk2uXD6HEC1k9h/2tB7iqUKEiNjLYmryAqnObg4cPEJ56XcAUp3dVFYr3JiZ/n9EqlJW+S3/q52nJNra6eruse93dXcTbYmi6S0A/PTjBFJW0TXhTxvyYEMEOjV5wXV+fvQMgE0IwMK9u56WADz3MlbVbHl5ya6GFeZmKMzN2NcX7t21xzo9kG8UomtCvfzKAEJEqNclZi1PqZhH1wSVlRKxeBqAm7NT6JqwFRGLp0mmdqDrOjdnp5QXsYknCnFKfr0kaH+wRYZVG3GeW2pyLiFfLZlfbl91RaHlxTzJ1A7X4ShEh8yaZPrSqD8Ds4V7d2lt3Uap+E/lPbl9D4X5O65xye17uDk75Tq3bIpfchn1/gefkGhr5/Spk873KoADB4+4Bk+MZ11jdE0wODTM+dEzFlGh514hi6USQrTYQZllU4xE2g7KLBiJtEtFZk0iq6ZndsQzG2JV0dfzEqVrgnfefZ/l5SXb7RbmZtiXGcBIpK1wPQQw8t03dpTrGxvi9C6AlaPQ3tEFHV32B8uqpGdnr0sllZUSUlb9oRAr7HYUjtE1gYgILubOIkTENfsbjaz1rG8UYtYkQkScs67WEr0WmwBdX+vkmaYJuLp5CmBfZgBZlf6xIVJWrXgipGvCpZbyYt4O4x3VMsuOAIRyY1l/BWYPykWsfR5mba1CJuWqraBSMe+yGYAzh1GZ/YcbLqXn1aiGCvPX1Mb44xHxUMN705dGrfZnyA+EPNWHWAXnDXbIv9shLPw8PdnwejgsnJ1//8PqxRiJ9EM7hnA0rhw9G3+ToWvC7tI94oNdY/y8CxGzJm2Xu957aQirJmIk0r7fQfSQe32cYbWqar4mxEistS4beZONpDxORb4hZF9mgJ6dvQ8lextV1N7Rxe5Xe/1PyJPmJDVzFVmVvrYh6vinX9LV3eOskzYKuEK6JijMzRA32qzdip55Gi+3HChntezf3u10t16F7QECBAgQIECAAAECBHhu8De9rTuG6WNGeQAAAABJRU5ErkJggg==",import.meta.url).href:"./assets/characters/boss.png"}function xe(){return"./assets/characters/minion.png"}function Ye(a){return Promise.all(a.map(t=>new Promise(e=>{const i=new Image;i.src=t,i.onload=e,i.onerror=e})))}function Ze(){return[J("guerrier"),J("mage"),J("arche"),J("assassin"),ve(),xe()]}function Qe(){const a=document.getElementById("app"),t=C.filter(e=>e.starter);a.innerHTML=`
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
            <img src="${L(e.type)}" class="sprite sprite--xl sprite--animate" alt="${e.name}" style="margin:0 auto 16px;display:block">
            <div style="font-family:var(--font-title);font-size:16px;color:var(--legendaire);font-weight:700;letter-spacing:2px;margin-bottom:8px">${e.name}</div>
            <span class="type-badge type-badge--${e.type}" style="margin-bottom:8px">${e.type.toUpperCase()}</span>
            <p style="font-size:12px;color:var(--text-secondary);margin-top:12px;line-height:1.6">${e.desc}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `,t.forEach(e=>{document.getElementById(`starter-${e.id}`).addEventListener("click",async()=>{await m.chooseStarter(e.id),m.addArchireve(500),be()})})}function be(){const a=m.state,t=document.getElementById("app");if(a.profile||(m.state.profile={pseudo:"Forgeron",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=local_hero",region:"Offline",level:1,xp:0},m.save()),!a.starterChosen){Qe();return}const e=m.getTeamInstances(),i=a.totalBattles>0?Math.round(a.totalWins/a.totalBattles*100):0,r=(a.ownedCharacters||[]).some(p=>p.isNew),s=(a.inventory||[]).some(p=>p.isNew),o=m.canFuseAny(),d=["enchantement","osiris","supplice","maragorh","imotep"],n={enchantement:"Enchantement",osiris:"Osiris",supplice:"Supplice",maragorh:"Maragorh",imotep:"Imotep"};let l=d[0],c=0;for(const p of d){let f=0;for(let u=0;u<20;u++)m.getLevelFlames(p,u)>0&&f++;const g=Math.round(f/20*100);g>c&&(c=g,l=p)}t.innerHTML=`
    <div style="width:100vw;height:100vh;background:#0c0a12;display:flex;flex-direction:column;overflow:hidden;position:relative">

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

      <!-- Forge glow bottom (void edition) -->
      <div style="position:absolute;bottom:0;left:0;right:0;height:220px;background:radial-gradient(ellipse at 50% 100%,rgba(0,119,182,0.12),transparent 70%);pointer-events:none;z-index:0;animation:forgeGlow 6s ease-in-out infinite"></div>
      <div style="position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,rgba(0,180,216,0.35),rgba(124,58,237,0.25),rgba(0,180,216,0.35),transparent);z-index:1"></div>

      <!-- ═══ TOP BAR ═══ -->
      <div style="
        display:flex;align-items:center;justify-content:space-between;
        padding:0 32px;height:56px;flex-shrink:0;
        background:rgba(14,10,20,0.97);
        border-bottom:1px solid rgba(255,107,157,0.06);
        z-index:10;
      ">
        <!-- Left: Profile -->
        <div style="display:flex;align-items:center;gap:14px;cursor:pointer" id="btn-profile">
          <div style="
            width:38px;height:38px;border-radius:6px;
            background:linear-gradient(135deg,rgba(255,107,157,0.2),rgba(192,132,252,0.12));
            border:1px solid rgba(255,107,157,0.18);
            display:flex;align-items:center;justify-content:center;
            font-family:var(--font-title);font-size:16px;font-weight:900;color:var(--accent-light);
          ">${(a.profile.pseudo||"F").charAt(0).toUpperCase()}</div>
          <div>
            <div style="font-family:var(--font-ui);font-size:13px;font-weight:700;color:var(--text-bright);letter-spacing:1px">${a.profile.pseudo}</div>
            <div style="font-family:var(--font-stat);font-size:10px;color:var(--text-muted);letter-spacing:2px">NIVEAU ${a.profile.level}</div>
          </div>
        </div>

        <!-- Center: Title with sparkle VFX -->
        <div style="position:relative">
          <div style="font-family:var(--font-title);font-size:20px;font-weight:900;letter-spacing:8px;color:var(--text-bright);text-shadow:0 0 20px rgba(192,57,11,0.3)">
            RYTIGER
          </div>
          <!-- VFX: Title sparkle particles -->
          <div id="title-sparkles" style="position:absolute;inset:-10px;pointer-events:none;overflow:visible"></div>
        </div>

        <!-- Right: Currency -->
        <div style="display:flex;align-items:center;gap:12px">
          <div style="
            display:flex;align-items:center;gap:8px;
            padding:8px 18px;
            background:rgba(252,211,77,0.05);
            border:1px solid rgba(252,211,77,0.12);
            border-radius:6px;
          ">
            <span style="font-family:var(--font-stat);font-size:11px;color:var(--star);font-weight:700">◈</span>
            <span style="font-family:var(--font-stat);font-size:14px;font-weight:700;color:var(--text-bright);letter-spacing:1px">${a.archireve.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <!-- ═══ MAIN CONTENT ═══ -->
      <div style="flex:1;display:grid;grid-template-columns:300px 1fr 320px;gap:0;overflow:hidden;z-index:2">

        <!-- ═══ LEFT PANEL: Navigation ═══ -->
        <div style="
          background:rgba(14,10,20,0.94);
          border-right:1px solid rgba(255,107,157,0.05);
          display:flex;flex-direction:column;
          padding:24px 18px;
          overflow-y:auto;
        ">
          <!-- Section: Actions -->
          <div style="font-family:var(--font-title);font-size:10px;letter-spacing:4px;color:var(--text-muted);margin-bottom:16px">— ACTIONS —</div>
          
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:32px">
            <button class="btn btn--primary btn--full" id="btn-campaign" style="
              padding:16px 20px;font-size:13px;letter-spacing:3px;text-align:left;
              display:flex;align-items:center;gap:14px;
              border-radius:6px;position:relative;overflow:hidden;
            ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px;flex-shrink:0;opacity:0.8">
                <circle cx="12" cy="12" r="9"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4"/><circle cx="12" cy="12" r="3"/>
              </svg>
              CAMPAGNE
            </button>

            <button class="btn btn--full" id="btn-dungeon" style="
              padding:16px 20px;font-size:13px;letter-spacing:3px;text-align:left;
              display:flex;align-items:center;gap:14px;
              border-radius:6px;
              background:linear-gradient(135deg,rgba(127,29,29,0.6),rgba(153,27,27,0.4));
              border:1px solid rgba(220,38,38,0.3);
              color:var(--text-primary);
            ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px;flex-shrink:0;opacity:0.8">
                <path d="M12 2L8 8H3l4 4-1.5 6L12 15l6.5 3L17 12l4-4h-5L12 2z"/>
              </svg>
              EPREUVE DE SAMAEL
            </button>

            <button class="btn btn--star btn--full" id="btn-invocation" style="
              padding:16px 20px;font-size:13px;letter-spacing:3px;text-align:left;
              display:flex;align-items:center;gap:14px;border-radius:6px;
            ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px;flex-shrink:0;opacity:0.8">
                <polygon points="12,2 15,9 22,9 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9 9,9"/>
              </svg>
              INVOCATION
            </button>

            <button class="btn btn--full" id="btn-forge" style="
              padding:16px 20px;font-size:13px;letter-spacing:3px;text-align:left;
              display:flex;align-items:center;gap:14px;border-radius:6px;position:relative;
              background:linear-gradient(135deg,rgba(255,107,44,0.4),rgba(255,20,147,0.2));
              border:1px solid rgba(255,107,44,0.3);
              color:var(--text-primary);
            ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px;flex-shrink:0;opacity:0.8">
                <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
              </svg>
              FORGE DE FUSION
              ${o?'<div style="position:absolute;top:10px;right:10px;width:10px;height:10px;background:var(--danger);border-radius:50%;box-shadow:0 0 10px var(--danger);animation:pulseRed 2s infinite"></div>':""}
            </button>
          </div>
          <style>@keyframes pulseRed { 0%{transform:scale(1);opacity:1;} 50%{transform:scale(1.3);opacity:0.7;} 100%{transform:scale(1);opacity:1;} }</style>

          <!-- Section: Gestion -->
          <div style="font-family:var(--font-title);font-size:10px;letter-spacing:4px;color:var(--text-muted);margin-bottom:16px">— GESTION —</div>
          
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:32px">
            <button class="btn btn--ghost btn--full" id="btn-team" style="
              padding:12px 20px;font-size:11px;letter-spacing:3px;text-align:left;
              display:flex;align-items:center;gap:14px;border-radius:6px;position:relative;
            ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:18px;height:18px;flex-shrink:0;opacity:0.6">
                <circle cx="9" cy="7" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2 20c0-4 3-6 7-6s7 2 7 6"/><path d="M16 14c2.5 0 5 1.5 5 4.5"/>
              </svg>
              EQUIPE
              ${r?'<div style="position:absolute;right:10px;background:var(--success);color:#000;font-size:9px;font-weight:900;padding:2px 6px;border-radius:4px">NEW!</div>':""}
            </button>

            <button class="btn btn--ghost btn--full" id="btn-inventory" style="
              padding:12px 20px;font-size:11px;letter-spacing:3px;text-align:left;
              display:flex;align-items:center;gap:14px;border-radius:6px;position:relative;
            ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:18px;height:18px;flex-shrink:0;opacity:0.6">
                <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
              </svg>
              INVENTAIRE
              ${s?'<div style="position:absolute;right:10px;background:var(--success);color:#000;font-size:9px;font-weight:900;padding:2px 6px;border-radius:4px">NEW!</div>':""}
            </button>

            <button class="btn btn--ghost btn--full" id="btn-dashboard" style="
              padding:12px 20px;font-size:11px;letter-spacing:3px;text-align:left;
              display:flex;align-items:center;gap:14px;border-radius:6px;
            ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:18px;height:18px;flex-shrink:0;opacity:0.6">
                <path d="M3 3h18v18H3z"/><path d="M3 9h18M9 3v18"/>
              </svg>
              TABLEAU DE BORD
            </button>
          </div>

          <!-- Zone Progress -->
          <div style="font-family:var(--font-title);font-size:10px;letter-spacing:4px;color:var(--text-muted);margin-bottom:16px">— PROGRESSION —</div>
          <div style="display:flex;flex-direction:column;gap:10px">
            ${d.map(p=>{let f=0;for(let v=0;v<20;v++)m.getLevelFlames(p,v)>0&&f++;const g=Math.round(f/20*100),u=g===100;return`
                <div>
                  <div style="display:flex;justify-content:space-between;margin-bottom:4px">
                    <span style="font-family:var(--font-ui);font-size:11px;font-weight:700;color:${u?"var(--legendaire)":"var(--text-secondary)"};letter-spacing:1px">${(n[p]||p).toUpperCase()}</span>
                    <span style="font-family:var(--font-stat);font-size:11px;color:var(--text-muted)">${f}/20</span>
                  </div>
                  <div style="height:4px;background:rgba(0,0,0,0.5);border-radius:2px;overflow:hidden;border:1px solid rgba(200,155,60,0.04)">
                    <div style="height:100%;width:${g}%;background:${u?"var(--star-gradient)":"var(--accent-gradient)"};border-radius:2px;transition:width 0.8s ease"></div>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>

        <!-- ═══ CENTER: Team / Main Focus ═══ -->
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 40px;position:relative;overflow:hidden">

          <!-- Ambient background orbs -->
          <div style="position:absolute;top:10%;left:20%;width:350px;height:350px;border-radius:50%;background:rgba(255,107,157,0.04);filter:blur(80px);pointer-events:none;animation:forgeGlow 12s ease-in-out infinite"></div>
          <div style="position:absolute;bottom:15%;right:15%;width:280px;height:280px;border-radius:50%;background:rgba(192,132,252,0.03);filter:blur(60px);pointer-events:none;animation:forgeGlow 16s ease-in-out infinite 4s"></div>

          <div style="font-family:var(--font-title);font-size:12px;letter-spacing:5px;color:var(--text-muted);margin-bottom:32px;z-index:1">— MON EQUIPE —</div>

          <!-- Team Grid (4 cards, large) -->
          <div style="display:grid;grid-template-columns:repeat(4,180px);gap:20px;z-index:1;margin-bottom:40px">
            ${[0,1,2,3].map(p=>{const f=e[p];if(f){const g=`var(--${f.rarity||"rare"})`;return`
                  <div style="
                    background:rgba(15,10,5,0.8);
                    border:1px solid rgba(200,155,60,0.1);
                    border-radius:10px;
                    padding:20px 16px;
                    text-align:center;
                    position:relative;
                    transition:transform 0.2s ease,box-shadow 0.2s ease;
                    cursor:default;
                  ">
                    <!-- Rarity top line -->
                    <div style="position:absolute;top:0;left:20%;right:20%;height:2px;background:${g};border-radius:0 0 2px 2px;opacity:0.6;box-shadow:0 0 10px ${g}"></div>
                    
                    <img src="${L((f.type||"").split("/")[0])}" class="sprite sprite--xl sprite--animate" alt="${f.name}" style="margin:0 auto 12px;display:block">
                    
                    <div style="font-family:var(--font-title);font-size:11px;color:${g};font-weight:700;letter-spacing:0.5px;margin-bottom:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:170px" title="${f.name}">${f.name}</div>
                    <div style="font-family:var(--font-stat);font-size:10px;color:var(--text-muted);letter-spacing:2px;margin-bottom:10px">${(f.type||"").toUpperCase()} · NIV.${f.level}</div>
                    
                    <!-- HP Bar -->
                    <div style="height:5px;background:rgba(0,0,0,0.5);border-radius:3px;overflow:hidden;border:1px solid rgba(200,155,60,0.04)">
                      <div style="height:100%;width:100%;background:linear-gradient(90deg,#B91C1C,#EF4444);border-radius:3px;box-shadow:0 0 6px rgba(239,68,68,0.4)"></div>
                    </div>
                    <div style="font-family:var(--font-stat);font-size:9px;color:var(--accent-light);margin-top:4px">${f.maxHp}/${f.maxHp} HP</div>
                  </div>
                `}return`
                <div style="
                  background:rgba(15,10,5,0.4);
                  border:1px dashed rgba(200,155,60,0.08);
                  border-radius:10px;
                  padding:48px 16px;text-align:center;
                  cursor:pointer;
                  transition:border-color 0.2s;
                " onclick="window.location.hash='team'">
                  <div style="font-size:32px;color:var(--text-muted);opacity:0.2;margin-bottom:8px">+</div>
                  <div style="font-family:var(--font-ui);font-size:10px;color:var(--text-muted);letter-spacing:2px">RECRUTER</div>
                </div>
              `}).join("")}
          </div>

          <!-- Quick stats row -->
          <div style="
            display:flex;align-items:center;gap:40px;
            padding:16px 40px;
            background:rgba(10,6,3,0.7);
            border:1px solid rgba(200,155,60,0.06);
            border-radius:8px;
            z-index:1;
          ">
            <div style="text-align:center">
              <div style="font-family:var(--font-stat);font-size:28px;font-weight:700;color:var(--text-bright)">${a.totalBattles}</div>
              <div style="font-family:var(--font-ui);font-size:9px;color:var(--text-muted);letter-spacing:3px">COMBATS</div>
            </div>
            <div style="width:1px;height:32px;background:rgba(200,155,60,0.08)"></div>
            <div style="text-align:center">
              <div style="font-family:var(--font-stat);font-size:28px;font-weight:700;color:var(--success)">${a.totalWins}</div>
              <div style="font-family:var(--font-ui);font-size:9px;color:var(--text-muted);letter-spacing:3px">VICTOIRES</div>
            </div>
            <div style="width:1px;height:32px;background:rgba(200,155,60,0.08)"></div>
            <div style="text-align:center">
              <div style="font-family:var(--font-stat);font-size:28px;font-weight:700;color:var(--legendaire)">${i}%</div>
              <div style="font-family:var(--font-ui);font-size:9px;color:var(--text-muted);letter-spacing:3px">TAUX</div>
            </div>
            <div style="width:1px;height:32px;background:rgba(200,155,60,0.08)"></div>
            <div style="text-align:center">
              <div style="font-family:var(--font-stat);font-size:28px;font-weight:700;color:var(--accent-light)">${a.ownedCharacters.length}</div>
              <div style="font-family:var(--font-ui);font-size:9px;color:var(--text-muted);letter-spacing:3px">HEROS</div>
            </div>
          </div>
        </div>

        <!-- ═══ RIGHT PANEL: Info & Actus ═══ -->
        <div style="
          background:rgba(14,10,20,0.94);
          border-left:1px solid rgba(255,107,157,0.05);
          display:flex;flex-direction:column;
          padding:24px 18px;
          overflow-y:auto;
        ">
          <!-- RIGHT PANEL section header -->
          <div style="font-family:var(--font-title);font-size:10px;letter-spacing:4px;color:var(--text-muted);margin-bottom:16px">— COLLECTION —</div>
          
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:32px">
            ${[{label:"RARE",count:a.ownedCharacters.filter(p=>C.find(g=>g.id===p.id)?.rarity==="rare").length,color:"var(--rare)"},{label:"EPIQUE",count:a.ownedCharacters.filter(p=>C.find(g=>g.id===p.id)?.rarity==="epique").length,color:"var(--epique)"},{label:"LEGEND.",count:a.ownedCharacters.filter(p=>C.find(g=>g.id===p.id)?.rarity==="legendaire").length,color:"var(--legendaire)"},{label:"ULTIMATE",count:a.ownedCharacters.filter(p=>C.find(g=>g.id===p.id)?.rarity==="ultimate").length,color:"var(--ultimate)"}].map(p=>`
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
          <div style="font-family:var(--font-title);font-size:10px;letter-spacing:4px;color:var(--text-muted);margin-bottom:16px">— DERNIERE ZONE —</div>
          <div style="
            padding:16px;
            background:rgba(0,0,0,0.3);
            border:1px solid rgba(200,155,60,0.06);
            border-radius:8px;
            margin-bottom:32px;
          ">
            <div style="font-family:var(--font-ui);font-size:13px;font-weight:700;color:var(--text-primary);letter-spacing:1px;margin-bottom:6px">${(n[l]||l).toUpperCase()}</div>
            <div style="font-family:var(--font-stat);font-size:11px;color:var(--text-muted)">${c}% complete</div>
            <div style="height:4px;background:rgba(0,0,0,0.5);border-radius:2px;overflow:hidden;margin-top:8px;border:1px solid rgba(200,155,60,0.04)">
              <div style="height:100%;width:${c}%;background:var(--accent-gradient);border-radius:2px"></div>
            </div>
          </div>

          <!-- Server Info / Game Version -->
          <div style="font-family:var(--font-title);font-size:10px;letter-spacing:4px;color:var(--text-muted);margin-bottom:16px">— INFOS —</div>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="display:flex;justify-content:space-between;font-size:11px">
              <span style="color:var(--text-muted);letter-spacing:1px">Version</span>
              <span style="color:var(--text-secondary);font-family:var(--font-stat);font-weight:600">2.0.0</span>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:11px">
              <span style="color:var(--text-muted);letter-spacing:1px">Build</span>
              <span style="color:var(--text-secondary);font-family:var(--font-stat);font-weight:600">Forge Donjon</span>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:11px">
              <span style="color:var(--text-muted);letter-spacing:1px">Heros</span>
              <span style="color:var(--text-secondary);font-family:var(--font-stat);font-weight:600">${a.ownedCharacters.length} / ${C.length}</span>
            </div>
          </div>

          <!-- Spacer -->
          <div style="flex:1"></div>

          <!-- Quick play button -->
          <button class="btn btn--primary btn--full" id="btn-quick-play" style="
            padding:14px;font-size:12px;letter-spacing:3px;border-radius:6px;
            margin-top:24px;
          ">
            JOUER — ${(n[l]||l).toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  `,We(),Ke(),Je(),document.getElementById("btn-profile")?.addEventListener("click",()=>w.navigate("profile")),document.getElementById("btn-campaign")?.addEventListener("click",()=>w.navigate("campaign")),document.getElementById("btn-dungeon")?.addEventListener("click",()=>w.navigate("dungeon")),document.getElementById("btn-invocation")?.addEventListener("click",()=>w.navigate("invocation")),document.getElementById("btn-forge")?.addEventListener("click",()=>w.navigate("forge")),document.getElementById("btn-team")?.addEventListener("click",()=>{m.state.ownedCharacters&&(m.state.ownedCharacters.forEach(p=>delete p.isNew),m.save()),w.navigate("team")}),document.getElementById("btn-inventory")?.addEventListener("click",()=>{m.state.inventory&&(m.state.inventory.forEach(p=>delete p.isNew),m.save()),w.navigate("inventory")}),document.getElementById("btn-dashboard")?.addEventListener("click",()=>w.navigate("dashboard")),document.getElementById("btn-quick-play")?.addEventListener("click",()=>w.navigate("campaign"))}function We(){const a=document.getElementById("ember-particles");if(!a)return;let t="";for(let e=0;e<65;e++){const i=Math.random()*100,r=Math.random()*12,s=5+Math.random()*12,o=1+Math.random()*2.5,d=.12+Math.random()*.35,n=(Math.random()-.5)*80,l=["rgba(255,107,157,0.8)","rgba(255,141,182,0.6)","rgba(192,132,252,0.5)","rgba(252,211,77,0.4)","rgba(255,182,193,0.5)"],c=l[Math.floor(Math.random()*l.length)];t+=`<div style="
      position:absolute;bottom:-10px;left:${i}%;
      width:${o}px;height:${o}px;
      background:${c};border-radius:50%;
      opacity:${d};
      box-shadow:0 0 ${o*3}px ${c};
      animation:emberRise ${s}s ${r}s ease-in infinite;
      --sway:${n}px;
      will-change:transform;
    "></div>`}a.innerHTML=t}function Ke(){const a=document.getElementById("floating-runes");if(!a)return;const t=["花","月","雷","火","風","光","水","雪","星","龍","剣","神"];let e="";for(let i=0;i<12;i++){const r=5+Math.random()*90,s=5+Math.random()*90,o=14+Math.random()*18,d=Math.random()*20,n=15+Math.random()*15;e+=`<div class="floating-rune" style="
      left:${r}%;top:${s}%;font-size:${o}px;
      animation-duration:${n}s;
      animation-delay:${d}s;
    ">${t[i]}</div>`}a.innerHTML=e}function Je(){const a=document.getElementById("title-sparkles");if(!a)return;let t=setInterval(()=>{if(!document.getElementById("title-sparkles")){clearInterval(t);return}const e=document.createElement("div"),i=Math.random()*100,r=Math.random()*100,s=1+Math.random()*2,o=.8+Math.random()*.5,d=["#ff6b9d","#ff8db6","#c084fc","#fcd34d"],n=d[Math.floor(Math.random()*d.length)];e.style.cssText=`
      position:absolute;left:${i}%;top:${r}%;
      width:${s}px;height:${s}px;
      background:${n};border-radius:50%;
      box-shadow:0 0 ${s*4}px ${n};
      animation:titleSparkle ${o}s ease forwards;
      pointer-events:none;
    `,a.appendChild(e),setTimeout(()=>e.remove(),o*1e3+50)},300)}const ye={enchantement:"#C89B3C",osiris:"#E85D20",supplice:"#4A7C59",maragorh:"#c084fc",imotep:"#DC2626",abysses:"#22D3EE",citadelle:"#A78BFA",terre_desolee:"#EF4444",nexus:"#F5D060",preludes:"#FDE68A",bifrost:"#818CF8",domaine:"#FBBF24"};let Pt=0;function he(){const a=document.getElementById("app");a.innerHTML=`
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
          <span style="font-family:var(--font-stat);font-size:13px;font-weight:700;color:var(--text-bright)">${m.state.archireve.toLocaleString()}</span>
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
            ${G.map((t,e)=>{const i=m.isLevelUnlocked(t.id,0),r=t.levels||20,s=Object.keys(m.state.campaignProgress[t.id]||{}).length,o=Math.round(s/r*100),d=ye[t.id]||"#C89B3C",n=e===Pt,l=e===0,c=t.tier===2&&(e===0||G[e-1]?.tier!==2),p=t.tier===3&&(e===0||G[e-1]?.tier!==3);return`
                ${l?'<div style="font-family:var(--font-title);font-size:9px;letter-spacing:3px;color:var(--text-muted);padding:4px 8px 8px;margin-top:4px">⚔ CAMPAGNE</div>':c?'<div style="font-family:var(--font-title);font-size:9px;letter-spacing:3px;color:var(--legendaire);padding:12px 8px 8px;margin-top:8px;border-top:1px solid rgba(200,155,60,0.1)">👑 ENDGAME</div>':p?'<div style="font-family:var(--font-title);font-size:9px;letter-spacing:3px;color:#FBBF24;padding:12px 8px 8px;margin-top:8px;border-top:1px solid rgba(251,191,36,0.2)">✦ DIVINITÉ</div>':""}
                <button class="zone-list-btn" data-zone-idx="${e}" style="
                  display:flex;align-items:center;gap:14px;
                  padding:14px 16px;
                  background:${n?"rgba(192,57,11,0.12)":"transparent"};
                  border:1px solid ${n?"rgba(192,57,11,0.25)":"transparent"};
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
                    background:${i?d+"18":"rgba(0,0,0,0.3)"};
                    border:1px solid ${d}40;
                    display:flex;align-items:center;justify-content:center;
                    font-family:var(--font-stat);font-size:14px;font-weight:700;
                    color:${d};
                  ">${i?t.icon:"&#9618;"}</div>

                  <!-- Zone Info -->
                  <div style="flex:1;min-width:0">
                    <div style="font-family:var(--font-ui);font-size:12px;font-weight:700;letter-spacing:1px;color:${i?"var(--text-bright)":"var(--text-muted)"};white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${t.name.toUpperCase()}</div>
                    <div style="display:flex;align-items:center;gap:8px;margin-top:4px">
                      <div style="flex:1;height:3px;background:rgba(0,0,0,0.5);border-radius:2px;overflow:hidden">
                        <div style="height:100%;width:${o}%;background:${d};border-radius:2px;transition:width 0.5s"></div>
                      </div>
                      <span style="font-family:var(--font-stat);font-size:10px;color:var(--text-muted)">${i?o+"%":"🔒"}</span>
                    </div>
                  </div>
                </button>
              `}).join("")}
          </div>
        </div>

        <!-- Right: Zone Detail (main area) -->
        <div id="zone-detail" style="flex:1;display:flex;flex-direction:column;overflow:hidden">
          ${ti(Pt)}
        </div>
      </div>
    </div>
  `,document.getElementById("back-btn").addEventListener("click",()=>w.navigate("home")),document.querySelectorAll(".zone-list-btn").forEach(t=>{t.addEventListener("click",()=>{const e=parseInt(t.dataset.zoneIdx),i=G[e];!i||!m.isLevelUnlocked(i.id,0)||(Pt=e,he())})}),document.querySelectorAll(".level-tile-btn").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.zone,i=parseInt(t.dataset.level);w.navigate("combat",{zone:e,level:i})})})}function ti(a){const t=G[a];if(!t)return'<div style="flex:1;display:flex;align-items:center;justify-content:center;color:var(--text-muted)">Selectionnez une zone</div>';m.isLevelUnlocked(t.id,0);const e=t.levels||20,i=Object.keys(m.state.campaignProgress[t.id]||{}).length,r=m.getZoneStars(t.id),s=e*3,o=Math.round(i/e*100),d=ye[t.id]||"#C89B3C",n=e>50?10:e>20?6:5;return`
    <!-- Zone Header with BG -->
    <div style="
      position:relative;flex-shrink:0;
      height:200px;overflow:hidden;
      ${t.bgImage?"background-image:url('"+t.bgImage+"');background-size:cover;background-position:center;":""}
    ">
      <!-- Dark overlays -->
      <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(13,10,8,0.5),rgba(13,10,8,0.95))"></div>
      <div style="position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,${d}80,transparent)"></div>

      <!-- Zone info centered -->
      <div style="position:relative;z-index:1;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">
          <div style="font-family:var(--font-ui);font-size:10px;letter-spacing:4px;color:${d}">ZONE ${a+1}</div>
          ${t.tier===2?'<span style="font-size:8px;letter-spacing:2px;color:var(--legendaire);background:rgba(200,155,60,0.1);padding:2px 8px;border-radius:10px;border:1px solid rgba(200,155,60,0.2)">ENDGAME</span>':""}
        </div>
        <h2 style="font-family:var(--font-title);font-size:28px;font-weight:900;color:var(--text-bright);letter-spacing:4px;text-shadow:0 2px 20px rgba(0,0,0,0.5);margin-bottom:8px">${t.name.toUpperCase()}</h2>
        <div style="font-family:var(--font-stat);font-size:11px;color:var(--text-muted);letter-spacing:2px;margin-bottom:12px">NIV. ${t.levelRange[0]} — ${t.levelRange[1]} · ${e} niveaux</div>
        <p style="font-family:var(--font-body);font-size:13px;color:var(--text-secondary);text-align:center;max-width:500px;line-height:1.6">${t.desc}</p>

        <!-- Progress bar -->
        <div style="display:flex;align-items:center;gap:12px;margin-top:16px;width:300px">
          <div style="flex:1;height:5px;background:rgba(0,0,0,0.5);border-radius:3px;overflow:hidden;border:1px solid rgba(200,155,60,0.04)">
            <div style="height:100%;width:${o}%;background:${d};border-radius:3px;box-shadow:0 0 8px ${d}60;transition:width 0.8s"></div>
          </div>
          <span style="font-family:var(--font-stat);font-size:12px;color:${d};font-weight:700">${o}%</span>
        </div>
        <div style="font-family:var(--font-stat);font-size:10px;color:var(--text-muted);margin-top:6px;letter-spacing:1px">${r} / ${s} etoiles — Boss: ${t.boss.name}</div>
      </div>
    </div>

    <!-- Level Grid -->
    <div style="flex:1;overflow-y:auto;padding:24px 32px">
      <div style="font-family:var(--font-title);font-size:10px;letter-spacing:4px;color:var(--text-muted);margin-bottom:16px">— NIVEAUX —</div>
      
      <div style="display:grid;grid-template-columns:repeat(${n},1fr);gap:10px;max-width:${n===10?"900px":n===6?"800px":"700px"}">
        ${Array.from({length:e},(l,c)=>{const p=c===e-1,f=m.getLevelFlames(t.id,c),g=m.isLevelUnlocked(t.id,c),u=f>0,v=Array.from({length:3},(E,Y)=>'<span style="font-size:10px;color:'+(Y<f?d:"rgba(200,155,60,0.15)")+'">&#9670;</span>').join("");if(!g)return'<div style="padding:14px 8px;text-align:center;background:rgba(10,6,3,0.6);border:1px solid rgba(200,155,60,0.04);border-radius:6px;opacity:0.25"><div style="font-family:var(--font-stat);font-size:16px;color:var(--text-muted);margin-bottom:4px">&#9618;</div><div style="font-size:9px;color:var(--text-muted);letter-spacing:1px">VERR.</div></div>';const h=p?"linear-gradient(135deg,rgba(127,29,29,0.3),rgba(13,10,8,0.8))":u?"rgba(15,10,5,0.8)":"rgba(10,6,3,0.6)",y=p?"rgba(220,38,38,0.3)":u?d+"25":"rgba(200,155,60,0.06)",A=p?"var(--font-title)":"var(--font-stat)",O=p?"12px":"16px",S=p?"var(--danger)":u?d:"var(--text-primary)",B=p?"2px":"0",I=p?"BOSS":c+1,x=p?t.boss.name.split(" ")[0]:"NIV."+(t.levelRange[0]+c);return'<button class="level-tile-btn" data-zone="'+t.id+'" data-level="'+c+'" style="padding:14px 8px;text-align:center;background:'+h+";border:1px solid "+y+';border-radius:6px;cursor:pointer;transition:all 0.15s ease;color:var(--text-primary)"><div style="font-family:'+A+";font-size:"+O+";font-weight:700;color:"+S+";margin-bottom:4px;letter-spacing:"+B+'">'+I+'</div><div style="font-family:var(--font-stat);font-size:9px;color:var(--text-muted);margin-bottom:6px;letter-spacing:1px">'+x+'</div><div style="display:flex;justify-content:center;gap:2px">'+v+"</div></button>"}).join("")}
      </div>
    </div>
  `}const F=50,gt=6e3,ei=5e3,ii=35,ai=8,ri=.5,si=1.5;class ni{constructor(t,e){this.playerTeam=t.map((i,r)=>({...i,stats:{...i.stats},currentHp:i.currentHp??i.stats.hp,maxHp:i.stats.hp,alive:!0,buffs:[],debuffs:[],atbGauge:Math.random()*20,atbMax:100,isPlayer:!0,isGuarding:!1,x:400,y:300+r*120})),this.enemyTeam=e.map((i,r)=>({...i,stats:{...i.stats},currentHp:i.currentHp??i.stats.hp??i.maxHp,maxHp:i.maxHp??i.stats.hp,alive:!0,buffs:i.buffs||[],debuffs:i.debuffs||[],atbGauge:Math.random()*15,atbMax:100,isPlayer:!1,weakness:i.weakness||"physique",breakGauge:i.breakGauge||0,breakMax:i.breakMax||100,isBroken:i.isBroken||!1,breakTimer:0,x:1300+(i.isBoss?0:r*30),y:300+r*120})),this.running=!1,this.paused=!1,this.gameOver=!1,this.winner=null,this.tickInterval=null,this.elapsedTime=0,this.turnCount=0,this.activeUnit=null,this.log=[],this.totalDmgDealt=0,this.onTick=null,this.onPlayerReady=null,this.onActionExecuted=null,this.onLog=null,this.onBreak=null,this.onGameOver=null}start(){this.running||(this.running=!0,this.paused=!1,this.addLog("⚔️ Le combat commence !"),this.tickInterval=setInterval(()=>this._tick(),F))}stop(){this.running=!1,this.tickInterval&&(clearInterval(this.tickInterval),this.tickInterval=null)}destroy(){this.stop(),this.onTick=null,this.onPlayerReady=null,this.onActionExecuted=null,this.onLog=null,this.onBreak=null,this.onGameOver=null}setSpeed(t){const e=Math.round(F/t);this.tickInterval&&(clearInterval(this.tickInterval),this.tickInterval=setInterval(()=>this._tick(),e))}_tick(){if(!this.running||this.gameOver||this.paused)return;this.elapsedTime+=F;for(const i of this.enemyTeam)i.isBroken&&i.alive&&(i.breakTimer-=F,i.breakTimer<=0&&(i.isBroken=!1,i.breakGauge=0,i.breakTimer=0));this.elapsedTime%1e3<F&&this._processStatusEffects();const t=[...this.playerTeam,...this.enemyTeam];for(const i of t){if(!i.alive||i.isBroken)continue;const s=i.stats.spd/50*F*100/gt;i.atbGauge=Math.min(i.atbMax,i.atbGauge+s)}const e=t.filter(i=>i.alive&&i.atbGauge>=i.atbMax).sort((i,r)=>r.stats.spd-i.stats.spd);if(e.length>0){const i=e[0];i.isPlayer?(this.paused=!0,this.activeUnit=i,this.onPlayerReady?.(i)):(this._executeEnemyAction(i),i.atbGauge=0)}this._checkWinCondition(),this.onTick?.({playerTeam:this.playerTeam,enemyTeam:this.enemyTeam,timeline:this.getTimeline(),elapsedTime:this.elapsedTime,activeUnit:this.activeUnit,paused:this.paused})}executePlayerAction(t,e){if(!this.paused||!this.activeUnit)return null;const i=this.activeUnit,r=i.skills[t];if(!r)return null;const s=this._resolveAction(i,r,e,!0),d=(r.recovery||2e3)/gt*100;return i.atbGauge=-d,i.isGuarding=!1,this.turnCount++,this.paused=!1,this.activeUnit=null,setTimeout(()=>this._checkWinCondition(),100),s}executeGuard(){if(!this.paused||!this.activeUnit)return;const t=this.activeUnit;t.isGuarding=!0,t.atbGauge=-20,this.addLog(`🛡️ ${t.name} se met en garde !`),this.onActionExecuted?.({actor:t,skill:{id:"guard",name:"Garde",icon:"🛡️",type:"guard"},targets:[],results:{guards:[t.id]},isPlayer:!0}),this.turnCount++,this.paused=!1,this.activeUnit=null}_executeEnemyAction(t){const e=t.skills||[{id:"attaque",name:"Attaque",type:"physical",power:80,accuracy:100,icon:"👊",recovery:1800}],i=this.playerTeam.filter(p=>p.alive);if(i.length===0)return;let r=null,s=null;const o=e.find(p=>p.type==="heal"),d=this.enemyTeam.filter(p=>p.alive),n=d.find(p=>p.currentHp/p.maxHp<.4);if(o&&n&&(r=o,s=[...d].sort((p,f)=>p.currentHp/p.maxHp-f.currentHp/f.maxHp)[0].id),!r){const p=e.find(f=>f.type==="buff");p&&(!t.buffs||t.buffs.length===0)&&this.turnCount<=6&&(r=p,s=t.id)}if(!r){const p=e.filter(f=>f.type==="physical"||f.type==="magical");if(t.isBoss){const f=p.find(u=>u.aoe),g=p.find(u=>!u.aoe);f&&i.length>=2&&this.turnCount%3===0?r=f:g?r=g:r=p[0]||e[0],s=[...i].sort((u,v)=>u.currentHp-v.currentHp)[0].id}else if(t.type==="assassin"){r=p.find(u=>u.critBonus||u.executeMult)||p[0]||e[0];const f=i.filter(u=>u.type==="mage"||u.type==="arche");s=[...f.length>0?f:i].sort((u,v)=>u.currentHp-v.currentHp)[0].id}else t.type==="mage"?(r=p.length>0?p[Math.floor(Math.random()*p.length)]:e[0],s=[...i].sort((f,g)=>f.stats.magDef-g.stats.magDef)[0].id):(r=p.length>0?p[Math.floor(Math.random()*p.length)]:e[0],s=[...i].sort((f,g)=>f.stats.def-g.stats.def)[0].id)}r||(r=e[0]),s||(s=i[0].id),this._resolveAction(t,r,s,!1);const c=(r.recovery||2e3)/gt*100;t.atbGauge=-c}_resolveAction(t,e,i,r){const s={hits:[],heals:[],buffs:[],misses:[]};if(Math.random()*100>(e.accuracy||100))return this.addLog(`${r?"🎯":"👹"} ${t.name} — RATÉ !`),s.misses.push(i),this.onActionExecuted?.({actor:t,skill:e,targets:[i],results:s,isPlayer:r}),s;if(e.type==="heal"){const d=this.findUnit(i);if(d&&d.alive){const n=Math.floor(e.power*(1+this._getEffectiveStat(t,"magAtk")/200));d.currentHp=Math.min(d.maxHp,d.currentHp+n),this.addLog(`💚 ${t.name} soigne ${d.name} (+${n} PV)`),s.heals.push({targetId:i,amount:n})}}else if(e.type==="buff"){const d=e.effect?.aoe?(r?this.playerTeam:this.enemyTeam).filter(n=>n.alive):[this.findUnit(i)].filter(Boolean);for(const n of d)e.effect?.type==="stealth"?(n.buffs.push({type:"stealth",turns:e.effect.turns}),this.addLog(`👤 ${t.name} se rend invisible !`)):e.effect&&(n.buffs.push({stat:e.effect.stat,boost:e.effect.boost,turns:e.effect.turns}),this.addLog(`✨ ${t.name} → ${e.name}`)),s.buffs.push({targetId:n.id})}else{const d=e.aoe?(r?this.enemyTeam:this.playerTeam).filter(n=>n.alive):[this.findUnit(i)].filter(Boolean);for(const n of d){if(!n||!n.alive)continue;const l=e.type==="magical"?this._getEffectiveStat(t,"magAtk"):this._getEffectiveStat(t,"atk");let c=e.type==="magical"?this._getEffectiveStat(n,"magDef"):this._getEffectiveStat(n,"def");e.ignoreDefPercent&&(c=Math.floor(c*(1-e.ignoreDefPercent)));let p=Math.floor(l*e.power/(c+50)*(.85+Math.random()*.3));const f=10+(t.type==="assassin"?15:0)+(e.critBonus||0),g=Math.random()*100<f;if(g&&(p=Math.floor(p*1.5)),e.executeMult&&n.currentHp/n.maxHp<.3&&(p=Math.floor(p*e.executeMult)),e.aoe&&(p=Math.floor(p*.7)),n.isBroken&&(p=Math.floor(p*si)),n.isGuarding&&(p=Math.floor(p*(1-ri)),n.isGuarding=!1),p=Math.max(1,p),n.currentHp-=p,r&&(this.totalDmgDealt+=p),this.addLog(`${r?"⚔️":"👹"} ${t.name} → ${e.name} → ${n.name} : -${p}${g?" 💥CRIT!":""}${n.isBroken?" 🔥BREAK!":""}`),n.currentHp<=0&&(n.currentHp=0,n.alive=!1,this.addLog(`💀 ${n.name} vaincu !`)),e.effect?.type==="poison"&&n.alive&&(n.debuffs.push({type:"poison",damage:e.effect.damage,turns:e.effect.turns}),this.addLog(`☠️ ${n.name} empoisonné !`)),r&&n.alive&&!n.isBroken&&n.weakness){const v=e.element===n.weakness?ii:ai;n.breakGauge=Math.min(n.breakMax,(n.breakGauge||0)+v),n.breakGauge>=n.breakMax&&(n.isBroken=!0,n.breakTimer=ei,n.atbGauge=-60,this.addLog(`💥 ${n.name} est BRISÉ ! (+50% dégâts)`),this.onBreak?.(n))}s.hits.push({targetId:n.id,damage:p,isCrit:g,isBreakHit:n.isBroken})}}return this.onActionExecuted?.({actor:t,skill:e,targets:s.hits.map(d=>d.targetId),results:s,isPlayer:r}),s}getTimeline(){const t=[...this.playerTeam,...this.enemyTeam].filter(i=>i.alive),e=[];for(const i of t){const r=i.atbMax-i.atbGauge,o=i.stats.spd/50*F*100/gt,n=(r>0?Math.ceil(r/o):0)*F;e.push({id:i.id,name:i.name,type:i.type,isPlayer:i.isPlayer,isBoss:i.isBoss,atbPct:Math.max(0,Math.min(100,i.atbGauge/i.atbMax*100)),msToReady:n,isReady:i.atbGauge>=i.atbMax,isBroken:i.isBroken,rarity:i.rarity})}return e.sort((i,r)=>i.msToReady-r.msToReady),e}findUnit(t){return this.playerTeam.find(e=>e.id===t)||this.enemyTeam.find(e=>e.id===t)}_getEffectiveStat(t,e){let i=t.stats[e];for(const r of t.buffs||[])r.stat===e&&(i=Math.floor(i*(1+r.boost)));return i}_processStatusEffects(){const t=[...this.playerTeam,...this.enemyTeam];for(const e of t)e.alive&&(e.debuffs=(e.debuffs||[]).filter(i=>(i.type==="poison"&&(e.currentHp-=i.damage,e.currentHp<=0&&(e.currentHp=0,e.alive=!1,this.addLog(`💀 ${e.name} succombe au poison !`))),i.turns--,i.turns>0)),e.buffs=(e.buffs||[]).filter(i=>(i.turns--,i.turns>0)))}_checkWinCondition(){const t=this.playerTeam.filter(i=>i.alive).length,e=this.enemyTeam.filter(i=>i.alive).length;t===0&&!this.gameOver&&(this.gameOver=!0,this.winner="enemy",this.addLog("💀 Défaite... Votre équipe a été vaincue."),this.stop(),this.onGameOver?.("enemy")),e===0&&!this.gameOver&&(this.gameOver=!0,this.winner="player",this.addLog("🏆 Victoire ! Les ennemis sont vaincus !"),this.stop(),this.onGameOver?.("player"))}addLog(t){this.log.push({message:t,time:this.elapsedTime}),this.onLog?.(t)}getSummary(){return{won:this.winner==="player",turnsPlayed:this.turnCount,playerTeamState:this.playerTeam,enemyTeamState:this.enemyTeam,log:this.log,totalDmgDealt:this.totalDmgDealt}}}const ne={character:{frameW:48,frameH:48,idle:{row:0,frames:6,fps:8,loop:!0,holdLast:!1},walk:{row:1,frames:8,fps:12,loop:!0,holdLast:!1},attack:{row:2,frames:6,fps:14,loop:!1,holdLast:!1},hurt:{row:3,frames:3,fps:16,loop:!1,holdLast:!1},death:{row:4,frames:7,fps:8,loop:!1,holdLast:!0}},boss:{frameW:96,frameH:96,idle:{row:0,frames:6,fps:6,loop:!0,holdLast:!1},attack:{row:1,frames:6,fps:10,loop:!1,holdLast:!1},hurt:{row:2,frames:3,fps:14,loop:!1,holdLast:!1},death:{row:3,frames:8,fps:7,loop:!1,holdLast:!0}},minion:{frameW:48,frameH:48,idle:{row:0,frames:6,fps:10,loop:!0,holdLast:!1},walk:{row:1,frames:8,fps:14,loop:!0,holdLast:!1},attack:{row:2,frames:5,fps:14,loop:!1,holdLast:!1},hurt:{row:3,frames:3,fps:16,loop:!1,holdLast:!1},death:{row:4,frames:6,fps:8,loop:!1,holdLast:!0}}},we={guerrier:"/assets/characters/guerrier_sheet.png",mage:"/assets/characters/mage_sheet.png",arche:"/assets/characters/arche_sheet.png",assassin:"/assets/characters/assassin_sheet.png",boss:"/assets/characters/boss_sheet.png",minion:"/assets/characters/minion_sheet.png"},ut={};async function oi(a){return ut[a]!==void 0?ut[a]:new Promise(t=>{const e=new Image;e.onload=()=>{ut[a]=!0,t(!0)},e.onerror=()=>{ut[a]=!1,t(!1)},e.src=we[a]})}class li{constructor(t,e,i="character"){this.el=t,this.type=e,this.config=ne[i]||ne.character,this.currentAnim=null,this.currentFrame=0,this.lastTime=0,this.rafId=null,this.onAnimEnd=null,this.hasSheet=!1,this._queue=null,this._init()}async _init(){const t=await oi(this.type);if(this.hasSheet=t,t){const{frameW:e,frameH:i}=this.config;this.el.style.backgroundImage=`url('${we[this.type]}')`,this.el.style.backgroundRepeat="no-repeat",this.el.style.backgroundSize="auto",this.el.style.imageRendering="pixelated",this.el.style.width=e+"px",this.el.style.height=i+"px";const r=this.el.querySelector("img");r&&(r.style.display="none"),this.play("idle")}}play(t,e=null){if(!this.hasSheet){this._triggerCSSFallback(t),e&&e();return}this.config[t]&&(this.currentAnim==="death"&&t!=="death"||(this.currentAnim=t,this.currentFrame=0,this.lastTime=performance.now(),this.onAnimEnd=e,this._queue=null,this.rafId&&cancelAnimationFrame(this.rafId),this._tick(this.lastTime)))}playThen(t,e){this.play(t,()=>this.play(e))}stop(){this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=null}destroy(){this.stop(),this.el=null}_tick(t){if(!this.el)return;const e=this.config[this.currentAnim];if(!e)return;const i=1e3/e.fps,r=t-this.lastTime;if(r>=i&&(this.lastTime=t-r%i,this._renderFrame(e),this.currentFrame++,this.currentFrame>=e.frames))if(e.loop)this.currentFrame=0;else if(e.holdLast){this.currentFrame=e.frames-1,this._renderFrame(e),this.onAnimEnd&&(this.onAnimEnd(),this.onAnimEnd=null);return}else{this.currentFrame=0,this.onAnimEnd&&(this.onAnimEnd(),this.onAnimEnd=null);return}this.rafId=requestAnimationFrame(s=>this._tick(s))}_renderFrame(t){if(!this.el)return;const{frameW:e,frameH:i}=this.config,r=-(this.currentFrame*e),s=-(t.row*i);this.el.style.backgroundPosition=`${r}px ${s}px`}_triggerCSSFallback(t){if(!this.el)return;const i={attack:"combat-unit--attack-player",hurt:"combat-unit--hit",death:"combat-unit--death"}[t];i&&(this.el.classList.add(i),setTimeout(()=>this.el?.classList.remove(i),600))}}const zt=new Map;function di(a,t){zt.set(a,t)}function $e(){zt.forEach(a=>a.destroy()),zt.clear()}function q(a,t,e=null){const i=zt.get(a);i&&i.play(t,e)}let b=null,j=null,N=null,Ut=[],V=null,M=null,U=!1,P=1;function pi(a,t,e){a.addEventListener(t,e),Ut.push({target:a,type:t,fn:e})}function dt(){Ut.forEach(({target:a,type:t,fn:e})=>a.removeEventListener(t,e)),Ut=[],b&&(b.destroy(),b=null),V&&(clearInterval(V),V=null),$e(),M=null,U=!1,P=1}const Zt={feu:"🔥",glace:"❄️",foudre:"⚡",nature:"🌿",tenebres:"💀",physique:"⚔️"},Qt={feu:"#E85D20",glace:"#60A5FA",foudre:"#FBBF24",nature:"#4ADE80",tenebres:"#A855F7",physique:"#F87171"};function Ht(a={}){const t=a.zone||j,e=parseInt(a.level??N??0);j=t,N=e;const i=G.find(n=>n.id===t);if(!i){dt(),w.navigate("campaign");return}const r=m.getTeamInstances();if(r.length===0){dt(),w.navigate("team");return}const s=e===(i.levels||20)-1,o=Ne(t,e,m.state.playerLevel);b=new ni(r,o),b.onTick=n=>{document.getElementById("atb-battlefield")&&(fi(n.timeline),bi(),Ii())},b.onPlayerReady=n=>{if(U){const l=n.skills||[],c=l.filter(y=>y.type==="physical"||y.type==="magical"),p=l.filter(y=>y.type==="heal"),g=b.playerTeam.filter(y=>y.alive).find(y=>y.currentHp/y.maxHp<.4);let u=0,v=null;if(p.length&&g)u=l.indexOf(p[0]),v=g.id;else if(c.length){const y=c.sort((S,B)=>B.power-S.power)[0];u=l.indexOf(y),v=b.enemyTeam.filter(S=>S.alive).sort((S,B)=>S.currentHp-B.currentHp)[0]?.id}const h=P>=4?80:200;setTimeout(()=>{b&&v!==null&&(M=v,Wt(u,n))},h);return}hi(n),yi(n.id)},b.onActionExecuted=n=>{wi(n)},b.onLog=n=>{const l=document.getElementById("atb-combat-log");l&&(l.textContent=n)},b.onBreak=n=>{Ti(n.id)},b.onGameOver=n=>{setTimeout(()=>Ai(i,s),600)};const d=b.enemyTeam.find(n=>n.alive);d&&(M=d.id),ci(i),b.start()}function ci(a,t){const e=document.getElementById("app");e.innerHTML=`
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
    </div>
  `,vi(),gi(),pi(window,"keydown",r=>{if(!b||!b.paused)return;const s=b.activeUnit;if(!s)return;const d={a:0,z:1,e:2,r:3}[r.key.toLowerCase()];d!==void 0&&s.skills[d]&&Wt(d,s),r.code==="Space"&&(r.preventDefault(),b.executeGuard(),jt())}),document.getElementById("flee-btn").addEventListener("click",()=>{confirm("Fuir le combat ?")&&(dt(),w.navigate("campaign"))}),document.getElementById("speed-btn").addEventListener("click",()=>{P=P===1?2:P===2?4:1;const r=document.getElementById("speed-btn");r&&(r.textContent=`⚡ x${P}`,r.style.color=P===1?"var(--text-bright)":P===2?"#FBBF24":"#FF6B2C",r.style.borderColor=P===1?"rgba(200,155,60,0.3)":P===2?"rgba(251,191,36,0.5)":"rgba(255,107,44,0.5)"),b&&b.setSpeed(P)}),document.getElementById("auto-btn").addEventListener("click",()=>{U=!U;const r=document.getElementById("auto-btn");r&&(r.style.color=U?"#4ADE80":"var(--text-muted)",r.style.borderColor=U?"rgba(74,222,128,0.5)":"rgba(200,155,60,0.3)",r.style.background=U?"rgba(74,222,128,0.1)":"rgba(0,0,0,0.6)",r.textContent=U?"🤖 AUTO":"AUTO")}),document.getElementById("atb-guard-btn").addEventListener("click",()=>{b?.paused&&(b.executeGuard(),jt())}),zi(a.id)}function fi(a){const t=document.getElementById("atb-timeline-track");if(!t)return;const e=a.slice(0,10);t.innerHTML=e.map((i,r)=>{const s=i.isPlayer?"var(--accent-light)":"var(--danger)",o=i.isReady?"#fff":i.isPlayer?"var(--accent)":"rgba(220,38,38,0.5)",d=Math.min(100,i.atbPct),n=i.name.split(" ")[0].substring(0,5),l=i.isBroken?"atb-portrait--broken":"",c=i.isReady?"atb-portrait--ready":"";return`
      <div class="atb-portrait ${l} ${c}" style="--atb-pct:${d}%;border-color:${o}" title="${i.name}">
        <div class="atb-portrait-fill" style="width:${d}%;background:${s}"></div>
        <div class="atb-portrait-icon">${i.isPlayer?mi(i.type):i.isBoss?"💀":"👹"}</div>
        <div class="atb-portrait-name">${n}</div>
      </div>
    `}).join("")}function mi(a){return{guerrier:"⚔️",mage:"🔮",arche:"🏹",assassin:"🗡️"}[a]||"⚔️"}function gi(){const a=document.getElementById("player-portraits");!a||!b||(a.innerHTML=b.playerTeam.map(t=>{const e=t.currentHp/t.maxHp*100,i=Math.max(0,t.atbGauge/t.atbMax*100);return`
      <div class="atb-hero-portrait" data-portrait-id="${t.id}">
        <div class="atb-hero-img">
          <img src="${L(t.type)}" style="width:100%;height:100%;object-fit:cover;transform:scale(1.4) translateY(3px)">
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
    `}).join(""))}function ui(){if(b)for(const a of b.playerTeam){const t=document.querySelector(`[data-hp-bar="${a.id}"]`),e=document.querySelector(`[data-atb-bar="${a.id}"]`);if(t){const r=Math.max(0,a.currentHp/a.maxHp*100);t.style.width=r+"%";const s=r<=25?"low":r<=50?"medium":"";t.className=`bar-fill bar-fill--hp ${s}`}if(e){const r=Math.max(0,Math.min(100,a.atbGauge/a.atbMax*100));e.style.width=r+"%"}const i=document.querySelector(`[data-portrait-id="${a.id}"]`);i&&(i.style.opacity=a.alive?"1":"0.3",i.style.filter=a.alive?"":"grayscale(1)")}}function ke(){const a=document.getElementById("target-info-panel");if(!a||!b)return;const t=M?b.findUnit(M):null;if(!t||!t.alive||t.isPlayer){a.style.opacity="0";return}a.style.opacity="1";const e=t.currentHp/t.maxHp*100,i=(t.breakGauge||0)/(t.breakMax||100)*100,r=Zt[t.weakness]||"⚔️",s=Qt[t.weakness]||"#F87171";a.innerHTML=`
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
        <span style="font-size:14px;filter:drop-shadow(0 0 4px ${s})">${r}</span>
      </div>
      <div style="display:flex;align-items:center;gap:6px;margin-top:4px">
        <span style="font-size:9px;color:var(--text-muted);letter-spacing:1px">BREAK</span>
        <div class="bar-container" style="width:80px;height:4px">
          <div class="bar-fill" style="width:${i}%;background:linear-gradient(90deg,#FBBF24,#F59E0B);box-shadow:0 0 6px rgba(251,191,36,0.4);${t.isBroken?"animation:gaugeFullPulse 0.5s ease infinite":""}"></div>
        </div>
      </div>
    </div>
  `}function vi(){const a=document.getElementById("unit-container");if(!a||!b)return;const t=[...b.playerTeam,...b.enemyTeam];a.innerHTML=t.map(e=>xi(e)).join(""),$e(),t.forEach(e=>{if(!e.alive)return;const i=a.querySelector(`[data-unit-id="${e.id}"] img.sprite`);if(!i)return;const r=e.isBoss?"boss":e.isEnemy?"minion":e.type||"guerrier",s=e.isBoss?"boss":e.isEnemy?"minion":"character",o=new li(i.parentElement,r,s);di(e.id,o)}),a.querySelectorAll(".enemy-unit").forEach(e=>{e.addEventListener("click",()=>{const i=e.dataset.unitId,r=b?.findUnit(i);r&&!r.isPlayer&&r.alive&&(M=i,ke(),Ee())})})}function xi(a){const t=Math.max(0,a.currentHp/a.maxHp)*100,e=a.isBoss,i=a.isPlayer,r=e?ve(a.useNewBossSprite):a.isEnemy?xe():L(a.type),s=a.x,o=a.id===M,d=!i&&a.weakness&&Zt[a.weakness]||"";return`
    <div class="${i?"player-unit":"enemy-unit"} combat-unit"
         data-unit-id="${a.id}"
         style="width:${e?"150px":"110px"}; text-align:center;
         position:absolute; left:${s}px; top:${a.y}px;
         ${a.alive?"":"opacity:0.2;filter:grayscale(1);pointer-events:none"};
         transition: left 0.6s cubic-bezier(0.4,0,0.2,1), top 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.3s ease;
         cursor: ${!i&&a.alive?"pointer":"default"}">

      ${o?'<div class="selection-ring" style="left:50%"></div>':""}

      <img src="${r}" class="sprite ${e?"sprite--boss":"sprite--md"} ${a.alive?"sprite--animate":""}" alt="${a.name}" style="margin:0 auto 4px">

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
        <div class="atb-weakness-badge" style="--weak-color:${Qt[a.weakness]||"#F87171"}">
          ${d}
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
  `}function bi(){if(!b)return;const a=[...b.playerTeam,...b.enemyTeam];for(const t of a){const e=document.querySelector(`[data-unit-id="${t.id}"]`);if(!e)continue;const i=document.querySelector(`[data-unit-hp="${t.id}"]`);if(i){const o=Math.max(0,t.currentHp/t.maxHp*100);i.style.width=o+"%";const d=o<=25?"low":o<=50?"medium":"";i.className=`bar-fill bar-fill--hp ${d}`}const r=document.querySelector(`[data-unit-hp-text="${t.id}"]`);r&&(r.textContent=`${Math.max(0,t.currentHp)}/${t.maxHp}`),t.alive||(e.style.opacity="0.2",e.style.filter="grayscale(1)",e.style.pointerEvents="none");const s=document.querySelector(`[data-break-ring="${t.id}"] circle:nth-child(2)`);if(s){const o=(t.breakGauge||0)/(t.breakMax||100),d=2*Math.PI*18;s.setAttribute("stroke-dashoffset",d*(1-o)),s.setAttribute("stroke",t.isBroken?"#FF6B35":"#FBBF24")}}if(M){const t=b.findUnit(M);if(!t||!t.alive){const e=b.enemyTeam.find(i=>i.alive);M=e?e.id:null}}ui(),ke(),Ee()}function Ee(){if(document.querySelectorAll(".selection-ring").forEach(a=>a.remove()),M){const a=document.querySelector(`[data-unit-id="${M}"]`);if(a&&!a.querySelector(".selection-ring")){const t=document.createElement("div");t.className="selection-ring",t.style.left="50%",a.insertBefore(t,a.firstChild)}}}function yi(a){document.querySelectorAll(".atb-active-highlight").forEach(i=>i.remove());const t=document.querySelector(`[data-unit-id="${a}"]`);if(t){const i=document.createElement("div");i.className="atb-active-highlight",t.appendChild(i)}document.querySelectorAll(".atb-hero-portrait").forEach(i=>i.classList.remove("atb-hero-portrait--active"));const e=document.querySelector(`[data-portrait-id="${a}"]`);e&&e.classList.add("atb-hero-portrait--active")}function hi(a,t,e){const i=document.getElementById("atb-skill-buttons");if(!i)return;i.innerHTML=a.skills.map((s,o)=>{const d=s.speed==="fast"?"atb-skill--fast":s.speed==="heavy"?"atb-skill--heavy":"atb-skill--medium",n=s.speed==="fast"?"⚡":s.speed==="heavy"?"🐢":"⚖️",l=((s.recovery||2e3)/1e3).toFixed(1),c=s.element&&Zt[s.element]||"";return`
      <button class="atb-skill-btn ${d}" data-skill-idx="${o}" title="${s.desc}">
        <div class="atb-skill-icon">${s.icon}</div>
        <div class="atb-skill-name">${s.name}</div>
        <div class="atb-skill-meta">
          <span class="atb-skill-speed">${n} ${l}s</span>
          ${c?`<span class="atb-skill-element">${c}</span>`:""}
        </div>
        <div class="atb-skill-key">${["A","Z","E","R"][o]}</div>
      </button>
    `}).join(""),i.querySelectorAll(".atb-skill-btn").forEach(s=>{s.addEventListener("click",()=>{const o=parseInt(s.dataset.skillIdx);Wt(o,a)})});const r=document.getElementById("atb-action-panel");r&&r.classList.add("atb-action-panel--active")}function Wt(a,t){if(!b?.paused)return;const e=t.skills[a];if(e){if(e.type==="heal"||e.type==="buff")b.executePlayerAction(a,t.id);else if(M)b.executePlayerAction(a,M);else{const i=document.getElementById("atb-combat-log");i&&(i.textContent="🎯 Ciblez un ennemi (Clic Gauche) !");return}jt()}}function jt(){const a=document.getElementById("atb-action-panel");a&&a.classList.remove("atb-action-panel--active"),document.querySelectorAll(".atb-active-highlight").forEach(e=>e.remove()),document.querySelectorAll(".atb-hero-portrait--active").forEach(e=>e.classList.remove("atb-hero-portrait--active"));const t=document.getElementById("atb-skill-buttons");t&&(t.innerHTML='<div style="color:var(--text-muted);font-size:11px;padding:10px;letter-spacing:1px">⏳ ATB en cours...</div>')}function wi(a){const{actor:t,skill:e,results:i,isPlayer:r}=a,s=document.querySelector(`[data-unit-id="${t.id}"]`);s&&(e.type==="physical"?(s.classList.add(r?"combat-unit--dash-right":"combat-unit--dash-left"),q(t.id,"attack",()=>q(t.id,"idle")),setTimeout(()=>s.classList.remove("combat-unit--dash-right","combat-unit--dash-left"),600)):(s.classList.add("combat-unit--casting"),q(t.id,"attack",()=>q(t.id,"idle")),setTimeout(()=>s.classList.remove("combat-unit--casting"),600))),t.type==="mage"&&e.type!=="heal"&&e.type!=="buff"&&i.hits?.length>0&&$i(t,i.hits[0].targetId,e),setTimeout(()=>{let o=!1;if(i.hits&&(i.hits.forEach(d=>{d.isCrit&&(o=!0),ki(d.targetId,d.isCrit),oe(d.targetId,d.damage,d.isCrit,!1);const n=b?.findUnit(d.targetId);n&&!n.alive&&setTimeout(()=>Ei(d.targetId),300)}),o)){const d=document.querySelector(".combat-screen");d&&(d.classList.add("screen--shake"),setTimeout(()=>d.classList.remove("screen--shake"),400))}i.heals&&i.heals.forEach(d=>{oe(d.targetId,d.amount,!1,!0)})},350)}function $i(a,t,e){const i=document.getElementById("atb-battlefield"),r=document.querySelector(`[data-unit-id="${t}"]`);if(!i||!r)return;const s=i.getBoundingClientRect(),o=r.getBoundingClientRect(),d=o.left-s.left+o.width/2,n=o.top-s.top+o.height/2,l=a.x+55,c=a.y+60,p=e.element&&Qt[e.element]||"#ff6b9d",f=document.createElement("div");f.style.cssText=`position:absolute; left:${l}px; top:${c}px; width:24px; height:24px;
    background:radial-gradient(circle, ${p} 20%, transparent); border-radius:50%;
    box-shadow:0 0 15px ${p}; z-index:20; transition: all 0.45s cubic-bezier(0.4,0,0.2,1);`,i.appendChild(f),requestAnimationFrame(()=>{f.style.left=d+"px",f.style.top=n+"px",f.style.transform="scale(1.5)"}),setTimeout(()=>f.remove(),500)}function ki(a,t){const e=document.querySelector(`[data-unit-id="${a}"]`);if(!e)return;const i=t?"combat-unit--crit":"combat-unit--hit";e.classList.add(i),q(a,"hurt",()=>q(a,"idle")),setTimeout(()=>e.classList.remove(i),500)}function Ei(a){const t=document.querySelector(`[data-unit-id="${a}"]`);t&&(t.classList.add("combat-unit--death"),q(a,"death"))}function Ti(a){const t=document.querySelector(`[data-unit-id="${a}"]`),e=document.getElementById("atb-battlefield");if(!t||!e)return;t.classList.add("combat-unit--break"),setTimeout(()=>t.classList.remove("combat-unit--break"),700);const i=document.createElement("div");i.style.cssText="position:absolute;inset:0;background:rgba(251,191,36,0.15);z-index:30;pointer-events:none;animation:fadeIn 0.1s ease, fadeOut 0.5s ease 0.2s forwards",e.appendChild(i),setTimeout(()=>i.remove(),700);const r=document.querySelector(".combat-screen");r&&(r.classList.add("screen--shake"),setTimeout(()=>r.classList.remove("screen--shake"),400));const s=t.getBoundingClientRect(),o=e.getBoundingClientRect(),d=document.createElement("div");d.style.cssText=`position:absolute;left:${s.left-o.left+s.width/2}px;top:${s.top-o.top-20}px;
    transform:translateX(-50%);font-family:var(--font-stat);font-size:28px;font-weight:900;color:#FBBF24;
    text-shadow:0 0 20px rgba(251,191,36,0.8),0 2px 4px rgba(0,0,0,0.9);
    animation:damageFloat 1.2s ease forwards;pointer-events:none;z-index:35;letter-spacing:3px`,d.textContent="💥 BREAK!",e.appendChild(d),setTimeout(()=>d.remove(),1200)}function oe(a,t,e,i){const r=document.querySelector(`[data-unit-id="${a}"]`);if(!r)return;const s=document.createElement("div");s.className=`damage-number ${i?"damage-number--heal":""} ${e?"damage-number--crit":""}`,s.textContent=`${i?"+":"-"}${t}`,r.appendChild(s),setTimeout(()=>s.remove(),1e3)}function Ii(){if(!b)return;const a=Math.floor(b.elapsedTime/1e3),t=Math.floor(a/60),e=a%60,i=document.getElementById("atb-timer");i&&(i.textContent=`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`);const r=document.getElementById("atb-dmg-total");r&&(r.textContent=`⚔ ${(b.totalDmgDealt||0).toLocaleString()} dmg`)}const le={enchantement:{emoji:"✨",count:15,speed:4,opacity:.6,sway:40},osiris:{emoji:"🏜️",count:20,speed:3,opacity:.4,sway:60,altEmoji:"💨"},supplice:{emoji:"🫧",count:12,speed:5,opacity:.5,sway:30},maragorh:{emoji:"🍃",count:18,speed:3.5,opacity:.5,sway:50,altEmoji:"🌿"},imotep:{emoji:"🌋",count:15,speed:2.5,opacity:.4,sway:20,altEmoji:"✦"},abysses:{emoji:"🫧",count:20,speed:6,opacity:.5,sway:60,altEmoji:"💎"},citadelle:{emoji:"⚡",count:12,speed:2,opacity:.4,sway:30,altEmoji:"✦"},terre_desolee:{emoji:"🔥",count:25,speed:3,opacity:.5,sway:20,altEmoji:"💀"},nexus:{emoji:"🌌",count:18,speed:5,opacity:.6,sway:50,altEmoji:"💫"}};function zi(a){const t=document.getElementById("ambient-particles");if(!t)return;const e=le[a]||le.enchantement;V&&clearInterval(V);function i(){if(!document.getElementById("ambient-particles")){clearInterval(V);return}const r=document.createElement("div"),s=e.altEmoji&&Math.random()>.6,o=(Math.random()-.5)*2*e.sway,d=(Math.random()-.5)*720,n=Math.random()*100,l=e.speed+Math.random()*3,c=8+Math.random()*12;r.textContent=s?e.altEmoji:e.emoji,r.style.cssText=`position:absolute;left:${n}%;top:-20px;font-size:${c}px;
      --p-sway:${o}px;--p-rot:${d}deg;--p-opacity:${e.opacity};
      animation:ambientFall ${l}s linear forwards;pointer-events:none;z-index:0;`,t.appendChild(r),setTimeout(()=>r.remove(),l*1e3+100)}for(let r=0;r<Math.floor(e.count/3);r++)setTimeout(i,r*200);V=setInterval(i,1e4/e.count)}function Ai(a,t){if(!b)return;const e=b.winner==="player",i=document.getElementById("victory-overlay");if(i)if(e){const r=b.playerTeam,s=r.reduce((I,x)=>I+x.maxHp,0),d=r.reduce((I,x)=>I+Math.max(0,x.currentHp),0)/s,n=d>=.7?3:d>=.35?2:1,l=m.getLevelFlames(j,N),c=l===0,p=n>l;let g=(t?re.boss:re.normal)[n]||0;!c&&!p&&(g=Math.floor(g*.3));const u=N+1,v=Math.floor(t?u*8+150:n===3?u*5+80:n===2?u*3+50:u*2+30);let h=c?v:Math.floor(v*.3),y=Math.floor(h/3);m.completeLevel(j,N,n),m.addArchireve(g);const A=m.addTeamXp(h);m.addProfileXp(y),m.recordBattle(!0),m.getTeamInstances().forEach(I=>{const x=m.state.ownedCharacters.find(E=>E.id===I.id);x&&(x.currentHp=void 0)});const O=Math.floor(b.elapsedTime/1e3),S=`${Math.floor(O/60)}:${String(O%60).padStart(2,"0")}`,B=document.createElement("div");B.className="victory-banner",B.innerHTML=`
      <div style="font-family:var(--font-title);font-size:44px;letter-spacing:6px;color:#ff6b9d;text-shadow:0 0 30px rgba(255,107,157,0.5);margin-bottom:16px">VICTOIRE</div>
      ${c?'<div style="font-size:12px;color:var(--accent-light);letter-spacing:2px;margin-bottom:8px;background:rgba(232,93,32,0.1);padding:4px 12px;border-radius:20px;border:1px solid rgba(232,93,32,0.3)">🆕 PREMIÈRE VICTOIRE !</div>':""}
      ${p&&!c?'<div style="font-size:12px;color:var(--warning);letter-spacing:2px;margin-bottom:8px">⬆️ AMÉLIORATION !</div>':""}
      <div style="font-size:10px;color:var(--text-muted);margin-bottom:12px">⏱ ${S} · ⚔ ${(b.totalDmgDealt||0).toLocaleString()} dégâts</div>
      <div style="display:flex;justify-content:center;gap:14px;margin:16px 0 24px">
        ${Array.from({length:3},(I,x)=>`<span style="font-size:36px;filter:drop-shadow(0 0 12px #E85D20);transition:all 0.3s ease;${x>=n?"opacity:0.18;filter:grayscale(1)":""}">${t?"🔥":"🍃"}</span>`).join("")}
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:10px;padding:16px 24px;background:rgba(0,0,0,0.25);border-radius:var(--radius-xl);border:1px solid rgba(255,255,255,0.06);margin-bottom:8px">
        <div style="font-size:16px;color:var(--star);letter-spacing:2px;font-weight:700">+${g} ⭐</div>
        <div style="font-size:12px;color:var(--accent)">+${h} XP à l'équipe</div>
        ${A.some(I=>I.leveled)?'<div style="font-size:11px;color:var(--legendaire);font-weight:700">⬆️ Level Up !</div>':""}
        ${!c&&!p?'<div style="font-size:9px;color:var(--text-muted)">Récompenses réduites (déjà complété)</div>':""}
      </div>
    `,i.appendChild(B),setTimeout(()=>{const I=document.createElement("div");I.style.cssText="position:absolute;bottom:60px;left:50%;transform:translateX(-50%);z-index:50;display:flex;gap:12px;animation:fadeIn 0.5s ease";const x=N+1,E=G.find(Bt=>Bt.id===j),Y=E&&x<E.levels;I.innerHTML=`
        ${Y?'<button id="next-level-btn" class="btn btn--primary" style="border-radius:var(--radius-xl);padding:14px 28px;font-size:13px;letter-spacing:1px">▶ Niveau suivant</button>':""}
        <button id="back-campaign-btn" class="btn btn--ghost" style="border-radius:var(--radius-xl);padding:14px 24px;font-size:12px">◀ Retour</button>
      `,i.appendChild(I),document.getElementById("next-level-btn")?.addEventListener("click",()=>{M=null,Ht({zone:j,level:x})}),document.getElementById("back-campaign-btn")?.addEventListener("click",()=>{dt(),w.navigate("campaign")})},1500)}else m.recordBattle(!1),i.innerHTML=`
      <div style="position:absolute; inset:0; background:rgba(0,0,0,0.8); display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:100; animation: fadeIn 0.5s ease">
        <div style="font-family:var(--font-title); font-size:48px; color:var(--danger); margin-bottom:20px; text-shadow:0 0 20px rgba(220,38,38,0.3)">DÉFAITE</div>
        <div style="font-size:10px;color:var(--text-muted);margin-bottom:20px">⏱ ${Math.floor(b.elapsedTime/1e3)}s</div>
        <div style="display:flex; gap:15px">
          <button class="btn btn--primary" id="retry-btn">🔄 Réessayer</button>
          <button class="btn btn--ghost" id="back-btn">◀ Retour</button>
        </div>
      </div>
    `,document.getElementById("retry-btn").onclick=()=>Ht({zone:j,level:N}),document.getElementById("back-btn").onclick=()=>{dt(),w.navigate("campaign")}}const _t=75,Ot=15;function Nt(){const a=document.getElementById("app"),t=m.state,e=t.pityCount||0,i=t.pityEpic||0,r=t.scories||0,s=Math.min(100,Math.round(e/_t*100)),o=Math.min(100,Math.round(i/Ot*100)),d=t.archireve>=Z.single,n=t.archireve>=Z.multi;a.innerHTML=`
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
            <button class="btn btn--primary btn--full" id="char-pull-single" ${d?"":"disabled"}
              style="padding:14px;display:flex;flex-direction:column;align-items:center;gap:3px">
              <span style="font-size:12px;letter-spacing:2px">FORGER UN LIEN</span>
              <span style="font-size:9px;opacity:0.7;letter-spacing:1px">◆ ${Z.single.toLocaleString()} · ×1 Héros</span>
            </button>
            <button class="btn btn--star btn--full" id="char-pull-multi" ${n?"":"disabled"}
              style="padding:14px;display:flex;flex-direction:column;align-items:center;gap:3px">
              <span style="font-size:12px;letter-spacing:2px">BRISER LE SCEAU</span>
              <span style="font-size:9px;opacity:0.7;letter-spacing:1px">◆ ${Z.multi.toLocaleString()} · ×10 — Epique+ garanti</span>
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
            <button class="btn btn--full" id="item-pull-single" ${d?"":"disabled"}
              style="padding:14px;display:flex;flex-direction:column;align-items:center;gap:3px;
                background:linear-gradient(135deg,rgba(59,130,246,0.3),rgba(59,130,246,0.15));
                border:1px solid rgba(59,130,246,0.3);color:var(--text-primary)">
              <span style="font-size:12px;letter-spacing:2px">FORGER UN OBJET</span>
              <span style="font-size:9px;opacity:0.7;letter-spacing:1px">◆ ${Z.single.toLocaleString()} · ×1 Item</span>
            </button>
            <button class="btn btn--full" id="item-pull-multi" ${n?"":"disabled"}
              style="padding:14px;display:flex;flex-direction:column;align-items:center;gap:3px;
                background:linear-gradient(135deg,rgba(59,130,246,0.4),rgba(147,51,234,0.2));
                border:1px solid rgba(59,130,246,0.35);color:var(--text-primary)">
              <span style="font-size:12px;letter-spacing:2px">OUVRIR LE COFFRE</span>
              <span style="font-size:9px;opacity:0.7;letter-spacing:1px">◆ ${Z.multi.toLocaleString()} · ×10 — Epique+ garanti</span>
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
              <div style="font-family:var(--font-stat);font-size:12px;color:var(--legendaire)">${e} / ${_t}</div>
            </div>
            <div class="pity-bar-track"><div class="pity-bar-fill" style="width:${s}%"></div></div>
            <div style="font-size:9px;color:var(--text-muted);letter-spacing:1px">${_t-e} invocations avant un Legendaire garanti</div>
          </div>
          <!-- Pity Épique -->
          <div class="pity-container" style="margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
              <div style="font-family:var(--font-ui);font-size:10px;font-weight:700;letter-spacing:2px;color:var(--epique)">PITY EPIQUE</div>
              <div style="font-family:var(--font-stat);font-size:12px;color:var(--epique)">${i} / ${Ot}</div>
            </div>
            <div class="pity-bar-track"><div class="pity-bar-fill" style="width:${o}%;background:linear-gradient(90deg,rgba(147,51,234,0.4),var(--epique))"></div></div>
            <div style="font-size:9px;color:var(--text-muted);letter-spacing:1px">${Ot-i} invocations avant un Epique garanti</div>
          </div>
          <!-- Scories -->
          <div class="glass" style="padding:14px 18px;border-radius:12px;display:flex;align-items:center;justify-content:space-between">
            <div>
              <div style="font-family:var(--font-ui);font-size:10px;font-weight:700;letter-spacing:2px;color:var(--text-muted);margin-bottom:4px">SCORIES DE FORGE</div>
              <div style="font-family:var(--font-stat);font-size:22px;font-weight:700;color:var(--star)">${r.toLocaleString()}</div>
            </div>
            <div style="text-align:right;font-size:10px;color:var(--text-muted);letter-spacing:1px">Chaque invocation<br>génère 10 Scories</div>
          </div>
        </div>

        <!-- Drop Rates -->
        <div class="glass" style="flex:1;min-width:280px;max-width:480px;padding:20px;border-radius:16px">
          <div style="font-family:var(--font-title);font-size:10px;letter-spacing:3px;color:var(--text-muted);margin-bottom:12px">— TAUX DE DROP (identiques) —</div>
          <div style="display:flex;flex-direction:column;gap:8px">
            ${[{name:"Rare",color:"var(--rare)",pct:mt.rare},{name:"Epique",color:"var(--epique)",pct:mt.epique},{name:"Legendaire",color:"var(--legendaire)",pct:mt.legendaire},{name:"ULTIMATE",color:"var(--ultimate)",pct:mt.ultimate}].map(l=>`
              <div style="display:flex;align-items:center;gap:8px">
                <div style="width:80px;font-family:var(--font-ui);font-size:10px;font-weight:700;color:${l.color};letter-spacing:1px">${l.name.toUpperCase()}</div>
                <div style="flex:1;height:6px;background:rgba(0,0,0,0.4);border-radius:3px;overflow:hidden;border:1px solid rgba(255,255,255,0.04)">
                  <div style="height:100%;width:${Math.min(l.pct*5,100)}%;background:${l.color};border-radius:3px;opacity:0.9"></div>
                </div>
                <div style="width:36px;text-align:right;font-family:var(--font-stat);font-size:11px;color:var(--text-secondary)">${l.pct}%</div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </div>
  `,document.getElementById("back-btn").addEventListener("click",()=>w.navigate("home")),document.getElementById("char-pull-single").addEventListener("click",()=>{const l=De();l.success?(vt(1,l.results[0]?.rarity),xt(l.results)):bt(l.error,"error")}),document.getElementById("char-pull-multi").addEventListener("click",()=>{const l=Fe();l.success?(vt(10,null,l.characters.map(c=>c.rarity)),xt(l.characters)):bt(l.error,"error")}),document.getElementById("item-pull-single").addEventListener("click",()=>{const l=Ue();l.success?(vt(1,l.results[0]?.rarity),xt(l.results)):bt(l.error,"error")}),document.getElementById("item-pull-multi").addEventListener("click",()=>{const l=He();l.success?(vt(10,null,l.characters.map(c=>c.rarity)),xt(l.characters)):bt(l.error,"error")})}function vt(a,t,e){const i=m.state;i.pityCount=(i.pityCount||0)+a,i.pityEpic=(i.pityEpic||0)+a,i.scories=(i.scories||0)+a*10;const r=e||(t?[t]:[]);for(const s of r)s==="legendaire"||s==="ultimate"?(i.pityCount=0,i.pityEpic=0):s==="epique"&&(i.pityEpic=0);m.save?.()}function xt(a){const t=document.createElement("div");t.className="modal-overlay",t.style.cssText="flex-direction:column;gap:0;background:rgba(0,0,0,0.97)";let e=0;const i={rare:{color:"#4a9eff",glow:"rgba(74,158,255,0.4)",name:"RARE"},epique:{color:"#c44aff",glow:"rgba(196,74,255,0.5)",name:"EPIQUE"},legendaire:{color:"#ffb84a",glow:"rgba(255,184,74,0.5)",name:"LEGENDAIRE"},ultimate:{color:"#ff4a6a",glow:"rgba(255,74,106,0.6)",name:"ULTIMATE"}},r={rare:0,epique:1,legendaire:2,ultimate:3};function s(d){const n=a[d],l=n.rarity||"rare",c=i[l]||i.rare,p=r[l]||0;t.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;position:relative;cursor:pointer" id="forge-phase">
        <div style="position:absolute;inset:0;opacity:0;background:radial-gradient(circle, ${c.glow}, transparent 70%);animation:gachaFlash 2s ease forwards"></div>
        <div style="position:relative;width:160px;height:160px;display:flex;align-items:center;justify-content:center">
          <div style="position:absolute;inset:0;border-radius:50%;border:2px solid ${c.color}88;animation:portalRotate 6s linear infinite;box-shadow:0 0 25px ${c.glow}"></div>
          <div style="position:absolute;inset:16px;border-radius:50%;border:1px dashed ${c.color}55;animation:portalRotate 4s linear infinite reverse"></div>
          <div style="font-size:64px;filter:drop-shadow(0 0 30px ${c.glow});animation:crystalGlow 1.5s ease infinite alternate;color:${c.color}">${n.type==="item"?"📦":"&#9874;"}</div>
          <div style="position:absolute;inset:-10px;border-radius:50%;border:2px solid ${c.color};opacity:0;animation:ringExpand 2s 0.5s ease forwards"></div>
          <div style="position:absolute;inset:-30px;border-radius:50%;border:2px solid ${c.color}88;opacity:0;animation:ringExpand 2s 0.9s ease forwards"></div>
          ${p>=2?`<div style="position:absolute;inset:-55px;border-radius:50%;border:2px solid ${c.color}55;opacity:0;animation:ringExpand 2s 1.3s ease forwards"></div>`:""}
        </div>
        <div id="forge-sparks" style="position:absolute;inset:0;pointer-events:none;overflow:hidden"></div>
        <div style="position:absolute;bottom:40px;font-family:var(--font-ui);font-size:11px;color:rgba(255,255,255,0.3);letter-spacing:3px">
          CLIQUEZ POUR FORGER — ${d+1}/${a.length}
        </div>
      </div>
      <style>
        @keyframes crystalGlow { from{filter:drop-shadow(0 0 20px ${c.glow}) brightness(1)} to{filter:drop-shadow(0 0 50px ${c.glow}) brightness(1.4)} }
        @keyframes ringExpand { 0%{transform:scale(0.5);opacity:0.9} 100%{transform:scale(1.6);opacity:0} }
        @keyframes gachaFlash { 0%{opacity:0} 60%{opacity:0} 70%{opacity:0.6} 85%{opacity:0.1} 100%{opacity:0.3} }
      </style>
    `;const f=document.getElementById("forge-sparks");if(f){for(let u=0;u<30;u++)setTimeout(()=>{const v=document.createElement("div"),h=Math.random()*Math.PI*2,y=80+Math.random()*200;v.style.cssText="position:absolute;left:50%;top:50%;width:"+(2+Math.random()*3)+"px;height:"+(4+Math.random()*8)+"px;background:linear-gradient("+c.color+",transparent);border-radius:50% 50% 0 0;opacity:0;transform-origin:bottom center;animation:particleBurst 1.2s "+(.6+Math.random()*.6)+"s ease forwards;--dx:"+Math.cos(h)*y+"px;--dy:"+Math.sin(h)*y+"px;",f.appendChild(v)},u*40);const g=document.createElement("style");g.textContent="@keyframes particleBurst { 0%{transform:translate(-50%,-50%) scale(0);opacity:1} 100%{transform:translate(calc(-50% + var(--dx)),calc(-50% + var(--dy))) scale(0.2);opacity:0} }",t.appendChild(g)}document.getElementById("forge-phase").addEventListener("click",()=>o(d))}function o(d){const n=a[d],l=n.type==="item",c=n.rarity||"rare",p=i[c]||i.rare;let f,g,u,v,h;if(l&&n.item){const y=n.item,A=K[y.slot]||{name:y.slot,icon:""};f=y.name,g=y.desc||"",u='<div style="font-size:72px;margin:16px 0;filter:drop-shadow(0 0 25px '+p.glow+')">'+(y.icon||"📦")+"</div>";const O=Object.entries(y.stats||{}).map(S=>S[0].toUpperCase()+" +"+S[1]).join(" · ");v='<span class="type-badge" style="background:rgba(74,158,255,0.15);color:#4a9eff">'+A.icon+" "+A.name+'</span><span class="rarity-badge rarity-badge--'+c+'">'+c.toUpperCase()+"</span>",g+='<br><span style="color:var(--accent);font-size:10px;letter-spacing:1px">'+O+"</span>",h="📦 ITEM"}else{const y=n.character;f=y.name,g=y.desc,u='<img src="'+L(y.type)+'" class="sprite sprite--xxl" alt="'+y.name+'" style="filter:drop-shadow(0 0 25px '+p.glow+') drop-shadow(0 4px 8px rgba(0,0,0,0.5));animation:pullRevealSprite 0.6s ease">',v='<span class="type-badge type-badge--'+y.type+'">'+y.type.toUpperCase()+'</span><span class="rarity-badge rarity-badge--'+y.rarity+'">'+y.rarity.toUpperCase()+"</span>",h="⚔️ HÉROS"}t.innerHTML='<div class="modal" style="text-align:center;border-color:'+p.color+";box-shadow:0 0 60px "+p.glow+';min-width:320px;max-width:380px;border-radius:var(--radius-xl);overflow:hidden;position:relative;padding:0;animation:revealSlam 0.5s cubic-bezier(0.2,1.5,0.3,1)"><div style="height:3px;background:linear-gradient(90deg,transparent,'+p.color+',transparent)"></div><div style="padding:var(--space-xl) var(--space-lg)"><div style="font-family:var(--font-stat);font-size:9px;color:'+p.color+';letter-spacing:3px;margin-bottom:4px;opacity:0.7">'+h+'</div><div style="font-family:var(--font-title);font-size:11px;color:'+p.color+";letter-spacing:4px;margin-bottom:var(--space-sm);text-shadow:0 0 15px "+p.glow+'">◆ '+p.name+" ◆</div>"+(n.isNew?'<div style="color:var(--success);font-size:11px;font-weight:700;margin-bottom:var(--space-xs);letter-spacing:2px">NOUVEAU !</div>':"")+(n.levelUp?'<div style="color:var(--warning);font-size:11px;font-weight:700;margin-bottom:var(--space-xs);letter-spacing:2px">NIVEAU + !</div>':"")+'<div style="position:relative;margin:var(--space-md) auto;width:fit-content">'+u+'<div style="position:absolute;inset:-20px;background:radial-gradient(circle,'+p.glow+',transparent 60%);z-index:-1;filter:blur(20px)"></div></div><div style="font-family:var(--font-title);font-size:18px;color:'+p.color+";font-weight:800;margin:var(--space-md) 0 var(--space-sm);letter-spacing:1px;text-shadow:0 0 10px "+p.glow+'">'+f+'</div><div style="display:flex;justify-content:center;gap:var(--space-sm);margin-bottom:var(--space-sm)">'+v+'</div><p style="font-size:11px;color:var(--text-secondary);line-height:1.6;margin-bottom:var(--space-lg)">'+g+'</p><div style="font-size:10px;color:var(--text-muted);margin-bottom:var(--space-md);letter-spacing:1px">'+(d+1)+" / "+a.length+'</div><button class="btn btn--primary btn--full" id="pull-next" style="border-radius:var(--radius-lg)">'+(d<a.length-1?"SUIVANT":"TERMINER")+"</button>"+(a.length>1&&d<a.length-1?'<button class="btn btn--ghost btn--full btn--sm" id="skip-all" style="margin-top:var(--space-xs);font-size:9px;letter-spacing:2px">PASSER TOUT</button>':"")+"</div></div><style>@keyframes pullRevealSprite { 0%{transform:scale(0.2) rotate(-15deg);opacity:0;filter:brightness(3)} 50%{transform:scale(1.15) rotate(3deg)} 100%{transform:scale(1) rotate(0);opacity:1} }@keyframes revealSlam { 0%{transform:scale(0.5) translateY(30px);opacity:0} 60%{transform:scale(1.05) translateY(-5px)} 100%{transform:scale(1) translateY(0);opacity:1} }</style>",document.getElementById("pull-next").addEventListener("click",()=>{d<a.length-1?(e++,s(e)):(t.remove(),Nt())}),document.getElementById("skip-all")?.addEventListener("click",()=>{t.remove(),Nt()})}document.body.appendChild(t),s(0)}function bt(a,t="warning"){const e=document.createElement("div");e.className="toast toast--"+t,e.textContent=a,document.body.appendChild(e),setTimeout(()=>e.remove(),3e3)}let $t="all",kt="all",tt="rarity";const Q={guerrier:"#f87171",mage:"#c084fc",arche:"#86efac",assassin:"#ff6b9d"},rt={hp:"HP",atk:"ATK",def:"DEF",spd:"SPD",magAtk:"MAG",magDef:"RES"},de=["ultimate","legendaire","epique","rare"];function D(){const a=document.getElementById("app"),t=m.state,e=t.team,i=m.getTeamInstances(),r=m.getOwnedInstances();let s=[...r];$t!=="all"&&(s=s.filter(n=>n.type===$t)),kt!=="all"&&(s=s.filter(n=>n.rarity===kt)),s.sort((n,l)=>tt==="rarity"?de.indexOf(n.rarity||"rare")-de.indexOf(l.rarity||"rare"):tt==="level"?l.level-n.level:tt==="atk"?l.stats.atk+l.stats.magAtk-(n.stats.atk+n.stats.magAtk):0);const o=Li(i),d=i.reduce((n,l)=>n+Object.values(l.stats).reduce((c,p)=>c+p,0),0);a.innerHTML=`
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
              ${[0,1,2,3].map(n=>{const l=e[n];if(l){const c=t.ownedCharacters.find(f=>f.id===l),p=lt(l,c?.level||1)||m.getFusedCharacterData(l);if(p){const f=`var(--${p.rarity||"rare"})`,g=Q[p.type]||"var(--accent)",u=Math.floor(100*Math.pow(1.1,p.level-1)),v=Math.round((c?.xp||0)/u*100);return`
                      <div class="team-slot-card" data-slot="${n}" data-char-id="${l}" style="
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
                        <div style="position:absolute;top:0;left:20%;right:20%;height:2px;background:${f};border-radius:0 0 2px 2px;opacity:0.7;box-shadow:0 0 8px ${f}"></div>

                        <!-- Slot number -->
                        <div style="position:absolute;top:8px;left:10px;font-family:var(--font-stat);font-size:9px;color:var(--text-muted);letter-spacing:1px">${n+1}</div>

                        <!-- Remove button -->
                        <button class="remove-from-team" data-slot="${n}" style="
                          position:absolute;top:8px;right:8px;width:22px;height:22px;border-radius:50%;
                          background:rgba(220,38,38,0.1);border:1px solid rgba(220,38,38,0.25);
                          color:var(--danger);cursor:pointer;font-size:10px;
                          display:flex;align-items:center;justify-content:center;
                          transition:all 0.2s;z-index:2;
                        ">✕</button>

                        <img src="${L((p.type||"").split("/")[0])}" class="sprite sprite--lg sprite--animate" alt="${p.name}" style="margin:4px auto 10px;display:block">

                        <div style="font-family:var(--font-title);font-size:11px;color:${f};font-weight:700;letter-spacing:1px;margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="${p.name}">${p.name.length>16?p.name.split(" ")[0]:p.name}</div>
                        <div style="font-family:var(--font-stat);font-size:9px;color:${g};letter-spacing:2px;margin-bottom:8px">${(p.type||"").toUpperCase()} · NIV.${p.level}</div>

                        <!-- XP Bar -->
                        <div style="height:4px;background:rgba(0,0,0,0.5);border-radius:2px;overflow:hidden;border:1px solid rgba(200,155,60,0.04)">
                          <div style="height:100%;width:${v}%;background:var(--accent-gradient);border-radius:2px;transition:width 0.6s"></div>
                        </div>

                        <!-- Mini stats row -->
                        <div style="display:flex;justify-content:space-around;margin-top:10px">
                          ${["hp","atk","spd"].map(h=>`
                            <div style="text-align:center">
                              <div style="font-family:var(--font-stat);font-size:13px;font-weight:700;color:var(--text-primary)">${p.stats[h]}</div>
                              <div style="font-size:7px;color:var(--text-muted);letter-spacing:1px">${rt[h]}</div>
                            </div>
                          `).join("")}
                        </div>
                      </div>
                    `}}return`
                  <div class="team-slot-empty" data-slot="${n}" style="
                    background:rgba(15,10,5,0.4);
                    border:1px dashed rgba(200,155,60,0.08);
                    border-radius:10px;
                    padding:36px 16px;
                    text-align:center;
                    cursor:default;
                    transition:border-color 0.2s;
                    position:relative;
                  ">
                    <div style="position:absolute;top:8px;left:10px;font-family:var(--font-stat);font-size:9px;color:var(--text-muted);letter-spacing:1px">${n+1}</div>
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
                  <div style="font-family:var(--font-stat);font-size:18px;color:var(--legendaire);font-weight:700;margin-top:4px">${o.label}</div>
                </div>
                <div style="text-align:right">
                  <div style="font-family:var(--font-stat);font-size:22px;font-weight:700;color:var(--accent-light)">${d}</div>
                  <div style="font-size:8px;color:var(--text-muted);letter-spacing:2px">PUISSANCE</div>
                </div>
              </div>
              ${o.bonus?`
                <div style="font-size:10px;color:var(--text-secondary);padding:8px 10px;background:rgba(200,155,60,0.04);border-radius:6px;border:1px solid rgba(200,155,60,0.06)">
                  ⚡ ${o.bonus}
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
                    ${Object.values(rt).map(n=>`<th style="text-align:center;padding:6px 4px;font-size:8px;letter-spacing:1px;color:var(--text-muted);border-bottom:1px solid var(--border-metal)">${n}</th>`).join("")}
                  </tr>
                </thead>
                <tbody>
                  ${i.map((n,l)=>(Q[n.type],`
                      <tr style="background:${l%2?"transparent":"rgba(200,155,60,0.015)"}">
                        <td style="padding:8px;border-bottom:1px solid rgba(200,155,60,0.03)">
                          <div style="font-weight:700;font-size:11px;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:80px">${n.name.split(" ")[0]}</div>
                        </td>
                        ${Object.keys(rt).map(c=>{const p=Math.max(...i.map(u=>u.stats[c]||0)),f=n.stats[c]||0;return`<td style="padding:6px 4px;text-align:center;border-bottom:1px solid rgba(200,155,60,0.03)">
                            <div style="font-family:var(--font-stat);font-size:12px;font-weight:700;color:${f===p&&p>0?"var(--legendaire)":"var(--text-secondary)"}">${f}</div>
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
              <div style="font-family:var(--font-stat);font-size:11px;color:var(--text-muted);letter-spacing:1px">${s.length} / ${r.length}</div>
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
              ${["all","guerrier","mage","arche","assassin"].map(n=>{const l=n===$t,c=n==="all"?"var(--accent)":Q[n]||"var(--accent)";return`
                  <button class="filter-type-btn" data-filter-type="${n}" style="
                    padding:6px 14px;border-radius:4px;font-family:var(--font-ui);font-size:10px;font-weight:700;
                    letter-spacing:1px;cursor:pointer;transition:all 0.2s;text-transform:uppercase;
                    background:${l?c+"20":"transparent"};
                    border:1px solid ${l?c+"60":"var(--border-metal)"};
                    color:${l?c:"var(--text-muted)"};
                  ">${n==="all"?"TOUS":n.toUpperCase()}</button>
                `}).join("")}
            </div>

            <!-- Rarity + Sort -->
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              ${["all","rare","epique","legendaire","ultimate"].map(n=>{const l=n===kt,c=n==="all"?"var(--text-muted)":`var(--${n})`;return`
                  <button class="filter-rarity-btn" data-filter-rarity="${n}" style="
                    padding:5px 11px;border-radius:4px;font-family:var(--font-ui);font-size:9px;font-weight:700;
                    letter-spacing:1px;cursor:pointer;transition:all 0.2s;text-transform:uppercase;
                    background:${l?c+"15":"transparent"};
                    border:1px solid ${l?c+"40":"var(--border)"};
                    color:${l?c:"var(--text-muted)"};
                  ">${n==="all"?"TOUS":n.toUpperCase()}</button>
                `}).join("")}

              <div style="width:1px;height:18px;background:var(--border-metal);margin:0 6px"></div>

              ${["rarity","level","atk"].map(n=>{const l=n===tt;return`
                  <button class="sort-btn" data-sort="${n}" style="
                    padding:5px 11px;border-radius:4px;font-family:var(--font-ui);font-size:9px;font-weight:700;
                    letter-spacing:1px;cursor:pointer;transition:all 0.2s;text-transform:uppercase;
                    background:${l?"rgba(192,57,11,0.12)":"transparent"};
                    border:1px solid ${l?"rgba(192,57,11,0.3)":"var(--border)"};
                    color:${l?"var(--accent-light)":"var(--text-muted)"};
                  ">${n==="atk"?"⚔ ATK":n==="level"?"↑ NIV":"★ RARETÉ"}</button>
                `}).join("")}
            </div>
          </div>

          <!-- Character Grid (scrollable) -->
          <div style="flex:1;overflow-y:auto;padding:20px 28px;scrollbar-width:thin;scrollbar-color:rgba(200,155,60,0.1) transparent">
            ${s.length===0?`
              <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:300px;color:var(--text-muted);gap:var(--space-md)">
                <div style="font-size:40px;opacity:0.15">⚔</div>
                <div style="font-family:var(--font-title);font-size:11px;letter-spacing:3px">AUCUN PERSONNAGE TROUVÉ</div>
              </div>
            `:`
              <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:14px">
                ${s.map(n=>{const l=e.includes(n.id),c=`var(--${n.rarity||"rare"})`,p=Q[n.type]||"var(--accent)",f=t.ownedCharacters.find(v=>v.id===n.id),g=Math.floor(100*Math.pow(1.1,n.level-1)),u=Math.round((f?.xp||0)/g*100);return`
                    <div class="roster-card ${l?"roster-card--in-team":""}" data-char-id="${n.id}" style="
                      background:linear-gradient(160deg,rgba(28,18,10,0.88),rgba(15,10,6,0.95));
                      border:1px solid ${l?"rgba(74,124,89,0.3)":"rgba(200,155,60,0.08)"};
                      border-radius:10px;
                      padding:16px 14px 14px;
                      text-align:center;
                      cursor:${l?"default":"pointer"};
                      transition:all 0.25s ease;
                      position:relative;
                      ${l?"opacity:0.45;":""}
                    ">
                      <!-- Rarity accent -->
                      <div style="position:absolute;top:0;left:25%;right:25%;height:2px;background:${c};opacity:0.5;border-radius:0 0 2px 2px"></div>

                      ${l?`
                        <div style="position:absolute;top:7px;right:8px;width:20px;height:20px;border-radius:50%;
                          background:rgba(74,124,89,0.15);border:1px solid rgba(74,124,89,0.35);
                          display:flex;align-items:center;justify-content:center;font-size:10px;color:var(--success)">✓</div>
                      `:""}

                      <!-- Rarity badge -->
                      <div style="position:absolute;top:7px;left:8px;font-family:var(--font-stat);font-size:7px;font-weight:700;color:${c};letter-spacing:1px">${(n.rarity||"").toUpperCase()}</div>

                      <img src="${L((n.type||"").split("/")[0])}" class="sprite sprite--md" alt="${n.name}" style="margin:6px auto 8px;display:block">

                      <div style="font-family:var(--font-title);font-size:10px;color:${c};font-weight:700;letter-spacing:0.5px;margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${n.name}</div>

                      <div style="display:flex;align-items:center;justify-content:center;gap:6px;margin-bottom:8px">
                        <span style="font-size:8px;color:${p};letter-spacing:1px;padding:2px 6px;border-radius:3px;background:${p}10;border:1px solid ${p}25">${(n.type||"").toUpperCase()}</span>
                        <span style="font-family:var(--font-stat);font-size:9px;color:var(--text-muted)">NIV.${n.level}</span>
                      </div>

                      <!-- XP Bar -->
                      <div style="height:3px;background:rgba(0,0,0,0.5);border-radius:2px;overflow:hidden;margin-bottom:8px">
                        <div style="height:100%;width:${u}%;background:${c};opacity:0.7;border-radius:2px"></div>
                      </div>

                      <!-- Mini stat icons -->
                      <div style="display:flex;justify-content:space-around">
                        ${[{stat:"hp",icon:"♥",color:"#EF4444"},{stat:"atk",icon:"⚔",color:"#f87171"},{stat:"spd",icon:"↗",color:"#C89B3C"}].map(v=>`
                          <div style="text-align:center">
                            <div style="font-size:8px;color:${v.color};margin-bottom:1px">${v.icon}</div>
                            <div style="font-family:var(--font-stat);font-size:10px;font-weight:700;color:var(--text-secondary)">${n.stats[v.stat]}</div>
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
  `,Si(t,e)}function Si(a,t){document.getElementById("back-btn")?.addEventListener("click",()=>w.navigate("home")),document.querySelectorAll(".filter-type-btn").forEach(e=>{e.addEventListener("click",()=>{$t=e.dataset.filterType,D()})}),document.querySelectorAll(".filter-rarity-btn").forEach(e=>{e.addEventListener("click",()=>{kt=e.dataset.filterRarity,D()})}),document.querySelectorAll(".sort-btn").forEach(e=>{e.addEventListener("click",()=>{tt=e.dataset.sort,D()})}),document.querySelectorAll(".remove-from-team").forEach(e=>{e.addEventListener("click",i=>{i.stopPropagation();const r=[...a.team];r[parseInt(e.dataset.slot)]=null,m.setTeam(r),D()})}),document.querySelectorAll(".roster-card:not(.roster-card--in-team)").forEach(e=>{e.addEventListener("click",()=>{const i=e.dataset.charId;if(t.includes(i))return;const r=t.indexOf(null);if(r===-1){Mi(i);return}const s=[...a.team];s[r]=i,m.setTeam(s),Ci(e),setTimeout(()=>D(),250)}),e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-4px) scale(1.02)",e.style.borderColor="rgba(200,155,60,0.25)",e.style.boxShadow="0 8px 30px rgba(0,0,0,0.5), 0 0 15px rgba(192,57,11,0.08)"}),e.addEventListener("mouseleave",()=>{e.style.transform="",e.style.borderColor="",e.style.boxShadow=""}),e.addEventListener("contextmenu",i=>{i.preventDefault(),pe(e.dataset.charId)})}),document.querySelectorAll(".team-slot-card").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-3px)",e.style.borderColor="rgba(200,155,60,0.25)",e.style.boxShadow="0 6px 20px rgba(0,0,0,0.5), 0 0 12px rgba(192,57,11,0.1)"}),e.addEventListener("mouseleave",()=>{e.style.transform="",e.style.borderColor="",e.style.boxShadow=""}),e.addEventListener("click",i=>{i.target.closest(".remove-from-team")||pe(e.dataset.charId)})}),document.getElementById("btn-optimize")?.addEventListener("click",()=>{const e=Bi();e&&(m.setTeam(e),D())}),document.getElementById("btn-clear-all")?.addEventListener("click",()=>{m.setTeam([null,null,null,null]),D()})}function Ci(a){a.style.transition="all 0.25s cubic-bezier(0.34,1.56,0.64,1)",a.style.transform="scale(0.92)",a.style.opacity="0.5"}function Mi(a){const t=m.state,e=document.createElement("div");e.className="modal-overlay";const i=t.ownedCharacters.find(o=>o.id===a),r=lt(a,i?.level||1)||m.getFusedCharacterData(a);if(!r)return;const s=`var(--${r.rarity||"rare"})`;e.innerHTML=`
    <div class="modal" style="text-align:center;max-width:400px;border-radius:12px;padding:32px">
      <div style="font-family:var(--font-title);font-size:11px;letter-spacing:3px;color:var(--text-muted);margin-bottom:20px">REMPLACER QUI ?</div>

      <div style="display:flex;align-items:center;gap:12px;justify-content:center;margin-bottom:24px;padding:14px;background:rgba(200,155,60,0.04);border-radius:8px;border:1px solid rgba(200,155,60,0.08)">
        <img src="${L((r.type||"").split("/")[0])}" class="sprite sprite--md" alt="${r.name}">
        <div style="text-align:left">
          <div style="font-family:var(--font-title);font-size:13px;color:${s};font-weight:700">${r.name}</div>
          <div style="font-size:10px;color:var(--text-muted);letter-spacing:1px;margin-top:2px">${r.type.toUpperCase()} · NIV.${r.level}</div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:8px">
        ${t.team.map((o,d)=>{if(!o)return"";const n=t.ownedCharacters.find(p=>p.id===o),l=lt(o,n?.level||1)||m.getFusedCharacterData(o);if(!l)return"";const c=Q[l.type]||"var(--accent)";return`
            <button class="swap-btn" data-slot="${d}" style="
              display:flex;align-items:center;gap:12px;padding:12px 16px;
              background:rgba(20,12,6,0.8);border:1px solid var(--border-metal);
              border-radius:8px;cursor:pointer;transition:all 0.2s;
              color:var(--text-primary);font-family:var(--font-ui);width:100%;text-align:left;
            ">
              <img src="${L((l.type||"").split("/")[0])}" class="sprite sprite--sm" alt="${l.name}">
              <div style="flex:1">
                <div style="font-size:12px;font-weight:700;color:var(--text-primary)">${l.name}</div>
                <div style="font-size:9px;color:${c};letter-spacing:1px;margin-top:2px">${l.type.toUpperCase()} · NIV.${l.level}</div>
              </div>
              <div style="font-family:var(--font-stat);font-size:9px;color:var(--text-muted);letter-spacing:1px">SLOT ${d+1}</div>
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
  `,document.body.appendChild(e),e.querySelectorAll(".swap-btn").forEach(o=>{o.addEventListener("mouseenter",()=>{o.style.borderColor="var(--accent)",o.style.background="rgba(192,57,11,0.08)"}),o.addEventListener("mouseleave",()=>{o.style.borderColor="var(--border-metal)",o.style.background="rgba(20,12,6,0.8)"}),o.addEventListener("click",()=>{const d=[...t.team];d[parseInt(o.dataset.slot)]=a,m.setTeam(d),e.remove(),D()})}),document.getElementById("swap-cancel").addEventListener("click",()=>e.remove()),e.addEventListener("click",o=>{o.target===e&&e.remove()})}function pe(a){const e=m.state.ownedCharacters.find(g=>g.id===a);if(!e)return;const i=lt(a,e.level)||m.getFusedCharacterData(a);if(!i)return;const r=Q[i.type]||"var(--accent)",s=`var(--${i.rarity||"rare"})`,o=m.getCharacterBonusStats(a);Object.values(o).some(g=>g>0);const d=Math.floor(100*Math.pow(1.1,i.level-1)),n=Math.round((e?.xp||0)/d*100),l=120,c=ce(i.stats,l*.42),p=[.33,.66,1].map(g=>ce({hp:1,atk:1,def:1,spd:1,magAtk:1,magDef:1},l*.42*g)),f=document.createElement("div");f.className="modal-overlay",f.innerHTML=`
    <div class="modal" style="max-width:520px;border-radius:14px;padding:0;overflow:hidden;border-color:rgba(200,155,60,0.15)">
      <!-- Rarity accent top -->
      <div style="height:3px;background:linear-gradient(90deg,transparent,${s},transparent)"></div>

      <div style="padding:28px 32px">
        <!-- Header -->
        <div style="display:flex;align-items:center;gap:20px;margin-bottom:24px">
          <div style="position:relative">
            <img src="${L((i.type||"").split("/")[0])}" class="sprite sprite--xl sprite--animate" alt="${i.name}"
                 style="filter:drop-shadow(0 0 18px ${s})">
            <div style="position:absolute;bottom:-4px;right:-4px;background:var(--bg-surface-solid);border:2px solid ${s};
              border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;
              font-family:var(--font-stat);font-weight:900;font-size:12px;color:${s}">${i.level}</div>
          </div>
          <div style="flex:1">
            <div style="font-family:var(--font-title);font-size:18px;font-weight:800;color:${s};letter-spacing:1px;margin-bottom:6px">${i.name}</div>
            <div style="display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap">
              <span style="font-size:9px;color:${r};letter-spacing:1px;padding:3px 10px;border-radius:3px;background:${r}15;border:1px solid ${r}30">${(i.type||"").toUpperCase()}</span>
              <span style="font-size:9px;color:${s};letter-spacing:1px;padding:3px 10px;border-radius:3px;background:${s}15;border:1px solid ${s}30">${(i.rarity||"").toUpperCase()}</span>
            </div>
            <p style="font-size:11px;color:var(--text-secondary);line-height:1.5;font-style:italic">${i.desc||""}</p>
          </div>
        </div>

        <!-- Radar + Stats Grid side by side -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px">
          <!-- Radar Chart -->
          <div style="background:rgba(0,0,0,0.2);border:1px solid var(--border);border-radius:10px;padding:16px;display:flex;align-items:center;justify-content:center">
            <svg viewBox="0 0 ${l} ${l}" style="width:${l}px;height:${l}px">
              ${p.map(g=>`<polygon points="${g}" fill="none" stroke="rgba(200,155,60,0.1)" stroke-width="0.8"/>`).join("")}
              ${Ri(l*.42,l/2).map(([g,u])=>`<line x1="${l/2}" y1="${l/2}" x2="${g}" y2="${u}" stroke="rgba(200,155,60,0.06)" stroke-width="0.5"/>`).join("")}
              <polygon points="${c}" fill="${r}20" stroke="${r}" stroke-width="1.5" opacity="0.9"/>
              ${Pi(i.stats,l*.42,l/2)}
            </svg>
          </div>

          <!-- Stats Grid -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
            ${Object.entries(rt).map(([g,u])=>{const v=i.stats[g]||0,h=o[g]||0,y=v+h;return`
                <div style="padding:8px;background:rgba(0,0,0,0.25);border-radius:6px;border:1px solid var(--border);text-align:center">
                  <div style="font-size:7px;color:var(--text-muted);letter-spacing:2px;margin-bottom:3px">${u}</div>
                  <div style="font-family:var(--font-stat);font-size:18px;font-weight:700;color:var(--text-bright);line-height:1">${y}</div>
                  ${h>0?`<div style="font-size:9px;color:var(--legendaire);font-weight:700;margin-top:2px">+${h}</div>`:""}
                </div>
              `}).join("")}
          </div>
        </div>

        <!-- XP Progress -->
        <div style="margin-bottom:24px">
          <div style="display:flex;justify-content:space-between;margin-bottom:4px">
            <span style="font-size:9px;color:var(--text-muted);letter-spacing:2px">EXPERIENCE</span>
            <span style="font-family:var(--font-stat);font-size:10px;color:var(--text-muted)">${e.xp||0} / ${d} XP</span>
          </div>
          <div style="height:6px;background:rgba(0,0,0,0.5);border-radius:3px;overflow:hidden;border:1px solid var(--border)">
            <div style="height:100%;width:${n}%;background:var(--accent-gradient);border-radius:3px"></div>
          </div>
        </div>

        <!-- Skills -->
        <div style="font-family:var(--font-title);font-size:9px;letter-spacing:3px;color:var(--text-muted);margin-bottom:12px">— CAPACITES —</div>
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px">
          ${i.skills.map(g=>`
            <div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(0,0,0,0.2);border-radius:6px;border:1px solid var(--border)">
              <div style="font-size:18px;width:28px;text-align:center;flex-shrink:0">${g.icon}</div>
              <div style="flex:1">
                <div style="font-size:11px;font-weight:700;color:var(--text-bright)">${g.name}</div>
                <div style="font-size:9px;color:var(--text-secondary);margin-top:2px">${g.desc||""}</div>
              </div>
              <div style="text-align:right;flex-shrink:0">
                <div style="font-family:var(--font-stat);font-size:12px;font-weight:700;color:${g.type==="heal"?"var(--success)":g.type==="magical"?"#c084fc":"var(--accent-light)"}">
                  ${g.power>0?g.power:"—"}
                </div>
                <div style="font-size:8px;color:var(--text-muted)">${g.accuracy}%</div>
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
  `,document.body.appendChild(f),document.getElementById("detail-close").addEventListener("click",()=>f.remove()),f.addEventListener("click",g=>{g.target===f&&f.remove()})}function Li(a){if(!a.length)return{label:"Equipe vide",bonus:""};const t={};a.forEach(r=>{t[r.type]=(t[r.type]||0)+1});const e=Object.entries(t).sort((r,s)=>s[1]-r[1])[0],i=e[0].charAt(0).toUpperCase()+e[0].slice(1);return e[1]===4?{label:`Meute ${i}`,bonus:`+15% toutes les stats (${i})`}:e[1]===3?{label:`Formation ${i}`,bonus:`+10% ATK +5% SPD (${i})`}:e[1]===2?{label:`Duo ${i}`,bonus:`+5% ATK (${i})`}:Object.keys(t).length===4?{label:"Composition Mixte",bonus:"+3% SPD globale (flexibilite)"}:{label:"Standard",bonus:""}}function Bi(){const a=m.state.ownedCharacters;return a.length<1?null:a.map(e=>{const i=C.find(s=>s.id===e.id)||m.getFusedCharacterData(e.id);if(!i)return null;const r={rare:1,epique:1.3,legendaire:1.7,ultimate:2.2,semi_ultimate:3.4,supreme:22}[i.rarity]||1;return{id:e.id,score:e.level*r}}).filter(Boolean).sort((e,i)=>i.score-e.score).slice(0,4).map(e=>e.id)}const Kt=["hp","atk","def","spd","magAtk","magDef"],Jt=a=>a*2*Math.PI/6-Math.PI/2;function ce(a,t){const e={hp:800,atk:200,def:200,spd:150,magAtk:220,magDef:200};return Kt.map((i,r)=>{const d=Math.min(a[i]||0,e[i])/(e[i]||1)*t,n=Jt(r),l=60+d*Math.cos(n),c=60+d*Math.sin(n);return`${l.toFixed(1)},${c.toFixed(1)}`}).join(" ")}function Ri(a,t){return Kt.map((e,i)=>{const r=Jt(i);return[t+a*Math.cos(r),t+a*Math.sin(r)]})}function Pi(a,t,e){return Kt.map((i,r)=>{const s=Jt(r),o=t+14,d=e+o*Math.cos(s),n=e+o*Math.sin(s);return`<text x="${d.toFixed(1)}" y="${n.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" fill="rgba(255,107,157,0.6)" font-size="8" font-family="DM Sans">${rt[i]}</text>`}).join("")}function Te(){const a=document.getElementById("app"),t=m.state,{pseudo:e,avatar:i,region:r,level:s,xp:o}=t.profile,d=s*100,n=o/d*100,l=t.totalBattles,c=t.totalWins,p=l-c,f=l>0?Math.round(c/l*100):0,g=t.ownedCharacters.length;a.innerHTML=`
    <div class="screen">
      <div class="topbar">
        <button class="topbar__back" id="back-btn">◀</button>
        <div class="topbar__title">👤 Profil Joueur</div>
      </div>

      <div class="content" style="display:flex;flex-direction:column;align-items:center;gap:var(--space-xl);padding-top:var(--space-xl)">
        
        <!-- Avatar & Basic Info -->
        <div class="glass" style="width:100%;max-width:500px;padding:var(--space-xl);border-radius:var(--radius-xl);display:flex;flex-direction:column;align-items:center;position:relative;overflow:hidden">
          <div style="position:absolute;top:0;left:0;right:0;height:4px;background:var(--accent-gradient)"></div>
          
          <div style="position:relative;margin-bottom:var(--space-md)">
            <img src="${i}" style="width:96px;height:96px;border-radius:50%;border:4px solid var(--border-light);background:var(--bg-primary);object-fit:cover" alt="Avatar">
            <div style="position:absolute;bottom:0;right:0;background:var(--accent-gradient);color:#fff;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-family:var(--font-title);font-weight:800;font-size:14px;border:2px solid var(--bg-surface)">
              ${s}
            </div>
          </div>
          
          <h2 style="font-family:var(--font-title);font-size:24px;font-weight:700;color:var(--text-bright);margin-bottom:var(--space-xs);letter-spacing:1px">${e}</h2>
          <div style="font-size:11px;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px">🌍 Région: ${r}</div>
          
          <div style="width:100%;margin-top:var(--space-lg)">
            <div style="display:flex;justify-content:space-between;margin-bottom:var(--space-xs);font-size:10px;color:var(--text-secondary)">
              <span>EXP globale</span>
              <span>${o} / ${d}</span>
            </div>
            <div class="bar-container bar-container--thick">
              <div class="bar-fill bar-fill--xp" style="width:${n}%"></div>
            </div>
          </div>
        </div>

        <!-- Stats Grid -->
        <div class="grid-2" style="width:100%;max-width:500px">
          <div class="glass" style="padding:var(--space-lg);border-radius:var(--radius-lg);text-align:center">
            <div style="font-size:11px;color:var(--text-muted);margin-bottom:var(--space-sm);text-transform:uppercase;letter-spacing:1px">Win/Loss</div>
            <div style="font-family:var(--font-title);font-size:24px;color:var(--text-bright);font-weight:700">
              <span style="color:var(--success)">${c}</span> <span style="font-size:16px;color:var(--text-secondary)">-</span> <span style="color:var(--danger)">${p}</span>
            </div>
            <div style="font-size:10px;color:var(--accent);margin-top:var(--space-xs)">${f}% de victoires</div>
          </div>
          
          <div class="glass" style="padding:var(--space-lg);border-radius:var(--radius-lg);text-align:center">
            <div style="font-size:11px;color:var(--text-muted);margin-bottom:var(--space-sm);text-transform:uppercase;letter-spacing:1px">Collection</div>
            <div style="font-family:var(--font-title);font-size:24px;color:var(--star);font-weight:700;text-shadow:0 0 10px rgba(255,215,0,0.3)">
              ${g} <span style="font-size:14px;color:var(--text-secondary)">/ 32</span>
            </div>
            <div style="font-size:10px;color:var(--text-muted);margin-top:var(--space-xs)">Personnages obtenus</div>
          </div>
        </div>
        </div>

        <!-- Save Management -->
        <div class="glass" style="width:100%;max-width:500px;padding:var(--space-lg);border-radius:var(--radius-xl)">
          <div class="section-header" style="font-size:10px">💾 SAUVEGARDE</div>
          <div style="display:flex;flex-direction:column;gap:var(--space-sm)">
            <button class="btn btn--primary btn--full" id="export-save" style="border-radius:var(--radius-md)">
              📤 Exporter la sauvegarde
            </button>
            <button class="btn btn--ghost btn--full" id="import-save" style="border-radius:var(--radius-md)">
              📥 Importer une sauvegarde
            </button>
            <input type="file" id="import-file" accept=".json" style="display:none">
            <div class="divider"></div>
            <button class="btn btn--danger btn--full" id="reset-save" style="border-radius:var(--radius-md);font-size:11px">
              🗑️ Réinitialiser la partie
            </button>
          </div>
        </div>
        
      </div>


    </div>
  `,document.getElementById("back-btn").addEventListener("click",()=>w.navigate("home")),document.getElementById("export-save").addEventListener("click",()=>{const u=JSON.stringify(m.state,null,2),v=new Blob([u],{type:"application/json"}),h=URL.createObjectURL(v),y=document.createElement("a");y.href=h,y.download=`rytiger_save_${new Date().toISOString().slice(0,10)}.json`,y.click(),URL.revokeObjectURL(h),yt("Sauvegarde exportée !","success")}),document.getElementById("import-save").addEventListener("click",()=>{document.getElementById("import-file").click()}),document.getElementById("import-file").addEventListener("change",u=>{const v=u.target.files[0];if(!v)return;const h=new FileReader;h.onload=y=>{try{const A=JSON.parse(y.target.result);if(!A.ownedCharacters||!A.team){yt("Fichier invalide !","error");return}if(!confirm("Écraser la sauvegarde actuelle ?"))return;Object.assign(m.state,A),m.save(),yt("Sauvegarde importée !","success"),setTimeout(()=>Te(),500)}catch{yt("Erreur de lecture du fichier","error")}},h.readAsText(v)}),document.getElementById("reset-save").addEventListener("click",()=>{confirm(`⚠️ Supprimer TOUTE la progression ?
Cette action est irréversible !`)&&m.reset()})}function yt(a,t="success"){const e=document.createElement("div");e.className=`toast toast--${t}`,e.textContent=a,document.body.appendChild(e),setTimeout(()=>e.remove(),3e3)}const _i={subtitle:"Seuls les plus braves oseront y entrer"},Oi={coup_titan:{id:"coup_titan",name:"Coup Titanesque",type:"physical",power:200,accuracy:90,cooldown:8,icon:"💥",desc:"Frappe colossale qui ébranle le sol"},bouclier_seuil:{id:"bouclier_seuil",name:"Bouclier du Seuil",type:"buff",power:0,accuracy:100,cooldown:20,icon:"🛡️",desc:"Régénère un bouclier absorbant 30% des dégâts",effect:{type:"shield",value:.3,turns:999}},seisme_titan:{id:"seisme_titan",name:"Séisme Titanesque",type:"physical",power:120,accuracy:85,cooldown:15,aoe:!0,icon:"🌋",desc:"Écrase tous les ennemis"},rayon_oracle:{id:"rayon_oracle",name:"Rayon de l'Oracle",type:"magical",power:220,accuracy:95,cooldown:6,icon:"⚡",desc:"Rayon d'énergie pure dévastateur"},clone_oracle:{id:"clone_oracle",name:"Dédoublement",type:"special",power:0,accuracy:100,cooldown:30,icon:"👥",desc:"Crée un clone à 50% des HP du boss"},malediction:{id:"malediction",name:"Malédiction",type:"debuff",power:0,accuracy:90,cooldown:12,aoe:!0,icon:"🔮",desc:"Réduit l'ATK de toute l'équipe de 30%"},morsure_hydre:{id:"morsure_hydre",name:"Morsure de l'Hydre",type:"physical",power:180,accuracy:90,cooldown:5,icon:"🐉",desc:"Morsure venimeuse qui empoisonne"},triple_frappe:{id:"triple_frappe",name:"Triple Frappe",type:"physical",power:90,accuracy:80,cooldown:10,aoe:!0,icon:"🔱",desc:"Frappe 3 cibles simultanément"},enrage_hydre:{id:"enrage_hydre",name:"Enrage!",type:"buff",power:0,accuracy:100,cooldown:999,icon:"😡",desc:"À 30% HP: ATK +100%, SPD +50%"},lame_sacree:{id:"lame_sacree",name:"Lame Sacrée",type:"physical",power:240,accuracy:85,cooldown:8,icon:"⚔️",desc:"Tranche avec une lame bénie corrompue"},invisibilite_ange:{id:"invisibilite_ange",name:"Disparition Divine",type:"buff",power:0,accuracy:100,cooldown:25,icon:"🌫️",desc:"Devient invisible 5s puis frappe tous"},pluie_plumes:{id:"pluie_plumes",name:"Pluie de Plumes",type:"physical",power:80,accuracy:95,cooldown:8,aoe:!0,icon:"🪶",desc:"Pluie de plumes tranchantes"},frappe_abyssale:{id:"frappe_abyssale",name:"Frappe Abyssale",type:"physical",power:300,accuracy:90,cooldown:6,icon:"💀",desc:"Puissance des abysses"},vague_tenebres:{id:"vague_tenebres",name:"Vague de Ténèbres",type:"magical",power:180,accuracy:90,cooldown:10,aoe:!0,icon:"🌑",desc:"Vague d'obscurité dévastatrice"},domaine_samael:{id:"domaine_samael",name:"Domaine de Samaël",type:"special",power:0,accuracy:100,cooldown:999,icon:"🔴",desc:"Crée un domaine: tous perdent 3% HP/s"},absorption_ame:{id:"absorption_ame",name:"Absorption d'Âme",type:"heal",power:400,accuracy:100,cooldown:20,icon:"💜",desc:"Absorbe les âmes pour se soigner"},armageddon:{id:"armageddon",name:"Armageddon",type:"magical",power:350,accuracy:85,cooldown:15,aoe:!0,icon:"☄️",desc:"Déchaîne la fin du monde"},malédiction_finale:{id:"malédiction_finale",name:"Malédiction Finale",type:"debuff",power:0,accuracy:100,cooldown:20,aoe:!0,icon:"🌀",desc:"Réduit tous les stats de 50%"}},Ie=[{floor:1,name:"Le Gardien du Seuil",subtitle:"Porte-parole des anciens pactes",icon:"🏛️",bgGradient:"linear-gradient(180deg, #0d0d1f, #0a0a15)",accentColor:"#7777ff",minDuration:120,boss:{id:"gardien_seuil",name:"Gardien du Seuil",desc:"Le premier gardien du temple. Sa cuirasse absorbe les coups les plus puissants.",type:"guerrier",rarity:"legendaire",icon:"🏛️",phase:1,stats:{hp:12e3,maxHp:12e3,atk:180,def:200,spd:30,magAtk:80,magDef:150},skills:["coup_titan","bouclier_seuil","seisme_titan"],mechanics:{shieldRegen:{interval:20,value:.3},passiveHeal:{interval:3,amount:60}},rewards:{archireve:300,items:["armure_maragorh","ceinture_force"],xpBonus:200}},minions:[]},{floor:2,name:"L'Oracle Déchu",subtitle:"Il voit l'avenir mais ne peut l'éviter",icon:"🔮",bgGradient:"linear-gradient(180deg, #1a0a2a, #0d0520)",accentColor:"#aa44ff",minDuration:120,boss:{id:"oracle_dechu",name:"Oracle Déchu",desc:"Un voyant corrompu par sa propre prophétie. Quand il souffre, il se dédouble.",type:"mage",rarity:"legendaire",icon:"🔮",phase:1,stats:{hp:15e3,maxHp:15e3,atk:100,def:120,spd:55,magAtk:280,magDef:180},skills:["rayon_oracle","clone_oracle","malediction"],mechanics:{cloneAt:.5,passiveHeal:{interval:4,amount:75},magAtkBoost:{interval:30,value:.1}},rewards:{archireve:400,items:["baton_mage","orbe_enchantement"],xpBonus:280}},minions:[]},{floor:3,name:"L'Hydre des Ténèbres",subtitle:"Chaque blessure la rend plus furieuse",icon:"🐉",bgGradient:"linear-gradient(180deg, #0a1a0a, #050f05)",accentColor:"#22ff44",minDuration:120,boss:{id:"hydre_tenebres",name:"Hydre des Ténèbres",desc:"Une créature primordiale à trois têtes. Entamer sa vie déclenche son enrage.",type:"guerrier",rarity:"ultimate",icon:"🐉",phase:1,stats:{hp:2e4,maxHp:2e4,atk:250,def:160,spd:40,magAtk:120,magDef:100},skills:["morsure_hydre","triple_frappe"],mechanics:{enrageAt:.3,enrageSkills:["morsure_hydre","triple_frappe","enrage_hydre"],enrageStatBoost:{atk:1,spd:.5},passiveHeal:{interval:5,amount:100}},rewards:{archireve:550,items:["arc_elfique","dague_ombre"],xpBonus:380}},minions:[]},{floor:4,name:"L'Archange Corrompu",subtitle:"La lumière divine souillée par les ombres",icon:"😇",bgGradient:"linear-gradient(180deg, #1a1a0a, #0f0f05)",accentColor:"#ffdd44",minDuration:120,boss:{id:"archange_corrompu",name:"Archange Corrompu",desc:"Autrefois gardien des cieux, désormais serviteur des ombres. Frappe en toute impunité.",type:"assassin",rarity:"ultimate",icon:"😇",phase:1,stats:{hp:25e3,maxHp:25e3,atk:320,def:140,spd:110,magAtk:200,magDef:160},skills:["lame_sacree","invisibilite_ange","pluie_plumes"],mechanics:{invisPhase:{cooldown:25,duration:5,burstDamage:2},passiveHeal:{interval:4,amount:125}},rewards:{archireve:700,items:["sceptre_samael","anneau_rapidite"],xpBonus:500}},minions:[]},{floor:5,name:"SAMAËL",subtitle:"Le dieu déchu, maître de l'obscurité éternelle",icon:"☠️",bgGradient:"linear-gradient(180deg, #150008, #0a0005)",accentColor:"#ff2244",minDuration:180,boss:{id:"samael_final",name:"Samaël le Maudit",desc:"La forme finale de Samaël. Trois phases de pouvoir croissant. Ne le sous-estimez jamais.",type:"assassin",rarity:"ultimate",icon:"☠️",phase:1,currentPhase:1,stats:{hp:4e4,maxHp:4e4,atk:280,def:200,spd:90,magAtk:260,magDef:220},phase1Skills:["frappe_abyssale","vague_tenebres"],phase2Skills:["frappe_abyssale","vague_tenebres","domaine_samael","absorption_ame"],phase3Skills:["frappe_abyssale","armageddon","malédiction_finale","absorption_ame"],skills:["frappe_abyssale","vague_tenebres"],mechanics:{phases:[{hpThreshold:.66,activated:!1,label:"Phase I — Éveil"},{hpThreshold:.33,activated:!1,label:"Phase II — Domination"},{hpThreshold:0,activated:!1,label:"Phase III — Apocalypse"}],passiveHeal:{interval:3,amount:200},domain:{active:!1,damagePerSecond:.03}},rewards:{archireve:2e3,items:["phylactere_samael","egide_samael"],xpBonus:1e3,firstClear:{archireve:5e3,title:"Vainqueur de Samaël"}}},minions:[]}];function Di(a){return Ie.find(t=>t.floor===a)||null}function ht(a){return a.map(t=>Oi[t]||{id:t,name:t,type:"physical",power:100,accuracy:90,cooldown:5,icon:"💥"})}const R=100,wt=2e3;class Fi{constructor(t,e){this.floorData=e,this.minDuration=(e.minDuration||120)*1e3,this.startTime=null,this.elapsedTime=0,this.gameOver=!1,this.winner=null,this.running=!1,this.tickInterval=null,this.log=[],this.dpsTracker={},this.aggroTable={},this.playerTeam=t.map((r,s)=>({...r,stats:{...r.stats},currentHp:r.stats.hp,maxHp:r.stats.hp,alive:!0,buffs:[],debuffs:[],autoAttackTimer:wt-r.stats.spd*5,autoAttackCooldown:Math.max(800,wt-r.stats.spd*5),skillCooldowns:{},isPlayer:!0,x:80+s*5,y:80+s*90,aggro:0}));const i=e.boss;this.boss={...i,currentHp:i.stats.hp,maxHp:i.stats.hp,alive:!0,buffs:[],debuffs:[],skills:ht(i.skills||i.phase1Skills||[]),skillTimers:{},autoAttackTimer:Math.max(1e3,wt-i.stats.spd*5),autoAttackCooldown:Math.max(1e3,wt-i.stats.spd*5),isPlayer:!1,isBoss:!0,shieldValue:0,isInvisible:!1,invisTimer:0,currentPhase:1,enraged:!1,domainActive:!1,cloneCreated:!1},this.onTick=null,this.onSkillUsed=null,this.onLog=null,this.onPhaseChange=null,this.onBossAbility=null}start(){if(!this.running){this.startTime=Date.now(),this.running=!0,this.addLog("💀 L'Épreuve commence...");for(const t of this.boss.skills)this.boss.skillTimers[t.id]=(t.cooldown||10)*1e3*.3;this.tickInterval=setInterval(()=>this._tick(),R)}}pause(){this.running=!1}resume(){this.running=!0}stop(){this.running=!1,this.tickInterval&&(clearInterval(this.tickInterval),this.tickInterval=null)}_tick(){if(!this.running||this.gameOver)return;this.elapsedTime+=R;for(const e of this.playerTeam)if(e.alive){for(const i of Object.keys(e.skillCooldowns))e.skillCooldowns[i]=Math.max(0,e.skillCooldowns[i]-R);e.autoAttackTimer-=R,e.autoAttackTimer<=0&&(e.autoAttackTimer=e.autoAttackCooldown,this.boss.alive&&!this.boss.isInvisible&&this._doAutoAttack(e,this.boss)),this._tickStatusEffects(e)}if(this.boss.alive){if(this._checkBossPhases(),this._tickBossPassiveHeal(),this.boss.domainActive&&this._applyDomainDamage(),this.boss.isInvisible&&(this.boss.invisTimer-=R,this.boss.invisTimer<=0&&(this.boss.isInvisible=!1,this._doBossEmergeBurst())),this.boss.autoAttackTimer-=R,this.boss.autoAttackTimer<=0&&!this.boss.isInvisible){this.boss.autoAttackTimer=this.boss.autoAttackCooldown;const e=this._getBossTarget();e&&this._doBossAutoAttack(e)}for(const e of this.boss.skills)this.boss.skillTimers[e.id]||(this.boss.skillTimers[e.id]=0),this.boss.skillTimers[e.id]-=R,this.boss.skillTimers[e.id]<=0&&(this.boss.skillTimers[e.id]=(e.cooldown||10)*1e3,this._executeBossSkill(e))}if(this.playerTeam.filter(e=>e.alive).length===0){this._endCombat("enemy");return}if(!this.boss.alive)if(this.elapsedTime<this.minDuration)this.boss.currentHp=Math.floor(this.boss.maxHp*.25),this.boss.alive=!0,this.addLog(`⚠️ ${this.boss.name} refuse de mourir si vite !`),this.onBossAbility?.({type:"revive",boss:this.boss});else{this._endCombat("player");return}this.onTick?.({playerTeam:this.playerTeam,boss:this.boss,elapsedTime:this.elapsedTime,dpsTracker:this.dpsTracker,minDuration:this.minDuration})}activateSkill(t,e){const i=this.playerTeam.find(d=>d.id===t);if(!i||!i.alive)return!1;const r=i.skills[e];if(!r)return!1;const s=`${e}`;if((i.skillCooldowns[s]||0)>0)return!1;const o=this._executePlayerSkill(i,r);return i.skillCooldowns[s]=(r.cooldown||3)*1e3,o}_executePlayerSkill(t,e){const i={caster:t.id,skill:e.id,hits:[]};if(e.type==="heal"){const r=[...this.playerTeam.filter(o=>o.alive)].sort((o,d)=>o.currentHp/o.maxHp-d.currentHp/d.maxHp)[0],s=Math.floor(e.power*(1+t.stats.magAtk/200));r.currentHp=Math.min(r.maxHp,r.currentHp+s),this.addLog(`💚 ${t.name} soigne ${r.name} +${s} PV`),i.hits.push({target:r.id,heal:s})}else if(e.type==="buff"){const r=e.effect?.aoe?this.playerTeam.filter(s=>s.alive):[t];for(const s of r)e.effect?.stat&&s.buffs.push({stat:e.effect.stat,boost:e.effect.boost,durationMs:e.effect.turns*2e3,remainingMs:e.effect.turns*2e3});this.addLog(`✨ ${t.name} utilise ${e.name}`)}else{const r=e.aoe?[this.boss]:[this.boss];for(const s of r){if(!s.alive)continue;const o=this._calcDamage(t,s,e);this._applyDamageToTarget(s,o,t,e),i.hits.push({target:s.id,damage:o.amount,isCrit:o.isCrit})}}return this.onSkillUsed?.(i),i}_doAutoAttack(t,e){const i=Math.floor(t.stats.atk/(e.stats.def+50)*60*(.9+Math.random()*.2)),r=Math.max(1,i);this._applyDamageToTarget(e,{amount:r,isCrit:!1},t,{type:"physical",id:"auto"})}_doBossAutoAttack(t){const e=this.boss,i=Math.floor(e.stats.atk/(t.stats.def+50)*80*(.85+Math.random()*.3)),r=Math.random()<.08,s=Math.max(1,r?Math.floor(i*1.5):i);t.currentHp-=s,this.addLog(`👹 ${e.name} frappe ${t.name} -${s}${r?" CRIT!":""}`),t.currentHp<=0&&(t.currentHp=0,t.alive=!1,this.addLog(`💀 ${t.name} tombe !`))}_calcDamage(t,e,i){const r=i.type==="magical"?t.stats.magAtk:t.stats.atk;let s=i.type==="magical"?e.stats.magDef:e.stats.def;e.shieldValue>0&&(s+=100);let o=Math.floor(r*(i.power||80)/(s+50)*(.85+Math.random()*.3));i.aoe&&(o=Math.floor(o*.7));const d=10+(t.type==="assassin"?15:0),n=Math.random()*100<d;return n&&(o=Math.floor(o*1.5)),{amount:Math.max(1,o),isCrit:n}}_applyDamageToTarget(t,e,i,r){let{amount:s}=e;if(t.shieldValue>0){const o=Math.min(t.shieldValue,Math.floor(s*.4));t.shieldValue-=o,s-=o}t.currentHp=Math.max(0,t.currentHp-s),i.isPlayer&&(this.dpsTracker[i.id]=(this.dpsTracker[i.id]||0)+s,this.aggroTable[t.id]=this.aggroTable[t.id]||{},this.aggroTable[t.id][i.id]=(this.aggroTable[t.id][i.id]||0)+s,i.type==="guerrier"&&(this.aggroTable[t.id][i.id]*=1.5)),t.currentHp<=0&&(t.alive=!1)}_getBossTarget(){const t=this.playerTeam.filter(s=>s.alive);if(t.length===0)return null;const e=this.aggroTable[this.boss.id]||{};let i=-1,r=null;for(const s of t){const o=e[s.id]||0;o>i&&(i=o,r=s)}return!r||i<10?t.find(o=>o.type==="guerrier")||t[Math.floor(Math.random()*t.length)]:r}_executeBossSkill(t){if(!this.boss.alive)return;const e=this.playerTeam.filter(r=>r.alive);if(e.length===0)return;if(t.type==="special"){this._handleBossSpecial(t);return}if(t.type==="debuff"){this._handleBossDebuff(t);return}if(t.type==="buff"){this._handleBossBuff(t);return}const i=t.aoe?e:[this._getBossTarget()].filter(Boolean);for(const r of i){const s=this._calcDamage(this.boss,r,t);r.currentHp=Math.max(0,r.currentHp-s.amount),r.currentHp<=0&&(r.alive=!1,this.addLog(`💀 ${r.name} tombe !`))}this.addLog(`⚡ ${this.boss.name} utilise ${t.name}!`),this.onSkillUsed?.({caster:this.boss.id,skill:t.id,targets:i.map(r=>r.id)})}_handleBossSpecial(t){t.id==="clone_oracle"?this.boss.cloneCreated||(this.boss.cloneCreated=!0,this.addLog("👥 L'Oracle se dédouble !"),this.onBossAbility?.({type:"clone",boss:this.boss})):t.id==="domaine_samael"&&(this.boss.domainActive||(this.boss.domainActive=!0,this.addLog("🔴 Samaël active son Domaine ! Vous perdez 3% HP/s !"),this.onBossAbility?.({type:"domain",boss:this.boss})))}_handleBossDebuff(t){const e=this.playerTeam.filter(r=>r.alive),i=t.aoe?e:[this._getBossTarget()].filter(Boolean);for(const r of i)if(t.id==="malediction")r.buffs.push({stat:"atk",boost:-.3,durationMs:8e3,remainingMs:8e3,type:"debuff"});else if(t.id==="malédiction_finale")for(const s of["atk","magAtk","def","spd"])r.buffs.push({stat:s,boost:-.5,durationMs:15e3,remainingMs:15e3,type:"debuff"});this.addLog(`🔮 ${this.boss.name} lance ${t.name} !`),this.onBossAbility?.({type:"debuff",skill:t})}_handleBossBuff(t){if(t.id==="bouclier_seuil")this.boss.shieldValue=Math.floor(this.boss.maxHp*.3),this.addLog(`🛡️ ${this.boss.name} génère un bouclier !`),this.onBossAbility?.({type:"shield",value:this.boss.shieldValue});else if(t.id==="invisibilite_ange")this.boss.isInvisible=!0,this.boss.invisTimer=5e3,this.addLog("🌫️ L'Archange disparaît dans l'ombre..."),this.onBossAbility?.({type:"invisible"});else if(t.id==="absorption_ame"){const e=Math.min(t.power,this.boss.maxHp-this.boss.currentHp);this.boss.currentHp=Math.min(this.boss.maxHp,this.boss.currentHp+e),this.addLog(`💜 Samaël absorbe les âmes (+${e} PV)`),this.onBossAbility?.({type:"heal",amount:e})}}_doBossEmergeBurst(){const t=this.playerTeam.filter(i=>i.alive);let e=0;for(const i of t){const r=Math.floor(this.boss.stats.atk*2*(.9+Math.random()*.2));i.currentHp=Math.max(0,i.currentHp-r),i.currentHp<=0&&(i.alive=!1),e+=r}this.addLog("💥 L'Archange surgit ! Burst sur toute l'équipe !"),this.onBossAbility?.({type:"emerge_burst",totalDmg:e})}_checkBossPhases(){const t=this.boss.currentHp/this.boss.maxHp,e=this.boss.mechanics||{};if(e.enrageAt&&!this.boss.enraged&&t<=e.enrageAt){if(this.boss.enraged=!0,e.enrageStatBoost)for(const[i,r]of Object.entries(e.enrageStatBoost))this.boss.stats[i]=Math.floor(this.boss.stats[i]*(1+r));e.enrageSkills&&(this.boss.skills=ht(e.enrageSkills)),this.addLog(`😡 ${this.boss.name} entre en mode ENRAGE !`),this.onPhaseChange?.({boss:this.boss,newPhase:"enrage"})}this.boss.id==="samael_final"&&(t<=.33&&this.boss.currentPhase<3?(this.boss.currentPhase=3,this.boss.skills=ht(this.floorData.boss.phase3Skills||[]),this.addLog("☠️ SAMAËL — PHASE III : APOCALYPSE !"),this.onPhaseChange?.({boss:this.boss,newPhase:3})):t<=.66&&this.boss.currentPhase<2&&(this.boss.currentPhase=2,this.boss.skills=ht(this.floorData.boss.phase2Skills||[]),this.addLog("🌑 SAMAËL — PHASE II : DOMINATION !"),this.boss.domainActive=!0,this.onPhaseChange?.({boss:this.boss,newPhase:2})))}_tickBossPassiveHeal(){const t=this.boss.mechanics?.passiveHeal;if(t&&(this._passiveHealTimer||(this._passiveHealTimer=t.interval*1e3),this._passiveHealTimer-=R,this._passiveHealTimer<=0)){this._passiveHealTimer=t.interval*1e3;const e=t.amount;this.boss.currentHp=Math.min(this.boss.maxHp,this.boss.currentHp+e)}}_applyDomainDamage(){const e=(this.boss.mechanics?.domain?.damagePerSecond||.03)*R/1e3;for(const i of this.playerTeam){if(!i.alive)continue;const r=Math.max(1,Math.floor(i.maxHp*e));i.currentHp=Math.max(0,i.currentHp-r),i.currentHp<=0&&(i.alive=!1)}}_tickStatusEffects(t){t.buffs=(t.buffs||[]).filter(e=>e.durationMs!==void 0?(e.remainingMs-=R,e.remainingMs>0):!0)}_tickShieldRegen(){const t=this.boss.mechanics?.shieldRegen;t&&(this._shieldRegenTimer||(this._shieldRegenTimer=t.interval*1e3),this._shieldRegenTimer-=R,this._shieldRegenTimer<=0&&this.boss.shieldValue===0&&(this._shieldRegenTimer=t.interval*1e3,this.boss.shieldValue=Math.floor(this.boss.maxHp*t.value),this.addLog(`🛡️ Le bouclier du ${this.boss.name} se régénère !`),this.onBossAbility?.({type:"shield",value:this.boss.shieldValue})))}_endCombat(t){this.gameOver=!0,this.winner=t,this.stop();const e=Math.floor(this.elapsedTime/1e3);t==="player"?this.addLog(`🏆 Victoire ! Temps: ${Math.floor(e/60)}m${String(e%60).padStart(2,"0")}s`):this.addLog(`💀 Défaite après ${Math.floor(e/60)}m${String(e%60).padStart(2,"0")}s`),this.onTick?.({playerTeam:this.playerTeam,boss:this.boss,elapsedTime:this.elapsedTime,dpsTracker:this.dpsTracker,minDuration:this.minDuration,gameOver:!0,winner:t})}addLog(t){this.log.push({message:t,time:this.elapsedTime}),this.onLog?.(t)}getElapsedSeconds(){return Math.floor(this.elapsedTime/1e3)}getSummary(){return{won:this.winner==="player",duration:this.elapsedTime,dpsTracker:this.dpsTracker,playerTeamState:this.playerTeam,bossState:this.boss}}getSkillCooldownPct(t,e){const i=this.playerTeam.find(n=>n.id===t);if(!i)return 0;const r=i.skills[e];if(!r)return 0;const s=`${e}`,o=i.skillCooldowns[s]||0,d=(r.cooldown||3)*1e3;return o/d}getAutoAttackProgress(t){const e=this.playerTeam.find(i=>i.id===t);return e?1-e.autoAttackTimer/e.autoAttackCooldown:0}}let st=null,Gt=!1,qt=1;function nt(){st&&(clearInterval(st),st=null),Gt=!1,qt=1}function Ui(a,t,e,i){nt();const r=t.floor===5;a.innerHTML=`
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
        ${Array.from({length:6},(s,o)=>`
          <div style="position:absolute;bottom:160px;left:${5+o*16}%;width:22px;
            background:linear-gradient(to top,rgba(60,5,15,1),rgba(30,0,12,0.7),transparent);
            height:${45+Math.random()*15}%;border-radius:3px 3px 0 0;
            box-shadow:inset -4px 0 8px rgba(0,0,0,0.6),0 0 18px rgba(180,10,10,0.25)"></div>
          <div style="position:absolute;bottom:160px;right:${5+o*16}%;width:22px;
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
          <div id="boss-hud-icon" style="font-size:34px;animation:bossRage ${r?"2":"3.5"}s ease-in-out infinite">${t.boss.icon}</div>
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
          <div id="boss-sprite" style="font-size:${r?"130":"105"}px;position:relative;z-index:1;
            filter:drop-shadow(0 0 45px ${t.accentColor});
            animation:bossRage ${r?"1.8":"3"}s ease-in-out infinite">${t.boss.icon}</div>
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
  `,document.getElementById("flee-btn").addEventListener("click",()=>{confirm("Fuir l'épreuve ?")&&(nt(),i())}),Zi(t),Hi(t)}function Hi(a,t){let e=0;st=setInterval(()=>{const i=document.getElementById("attack-lane");if(!i){clearInterval(st);return}e++,e%2===0?ji(i,a):Ni(i,a),e%4===0&&Ae(i)},1100)}function ji(a,t){const e=["#4ADE80","#60A5FA","#FBBF24","#F87171","#A78BFA","#34D399"],i=e[Math.floor(Math.random()*e.length)],r=30+Math.random()*25,s=document.createElement("div");s.style.cssText=`position:absolute;left:180px;top:${r}%;
    width:26px;height:9px;border-radius:50%;pointer-events:none;
    background:radial-gradient(circle,#fff 20%,${i} 60%,transparent);
    box-shadow:0 0 18px ${i},0 0 35px ${i}77;
    animation:projRight 0.5s cubic-bezier(0.25,0.1,0.85,1) forwards;z-index:10`,a.appendChild(s),setTimeout(()=>{s.remove(),ze(a,"72%",r,i,"right");const o=document.getElementById("boss-sprite");o&&(o.style.animation="bossHitFlash 0.35s ease-out",setTimeout(()=>{o.style.animation=`bossRage ${t.floor===5?"1.8":"3"}s ease-in-out infinite`},360))},470)}function Ni(a,t){const e=t.accentColor||"#ff2244",i=32+Math.random()*22,r=document.createElement("div");r.style.cssText=`position:absolute;right:200px;top:${i}%;
    width:32px;height:11px;border-radius:50%;pointer-events:none;
    background:radial-gradient(circle,#fff 10%,${e} 50%,transparent);
    box-shadow:0 0 22px ${e},0 0 45px ${e}66;
    animation:projLeft 0.48s cubic-bezier(0.25,0.1,0.85,1) forwards;z-index:10`,a.appendChild(r),setTimeout(()=>{r.remove(),ze(a,"12%",i,e,"left"),te()},460)}function ze(a,t,e,i,r){const s=document.createElement("div");s.style.cssText=`position:absolute;${r}:${t};top:${e}%;
    width:55px;height:55px;border-radius:50%;pointer-events:none;
    transform:translate(${r==="left"?"-50%":"50%"},-50%);
    background:radial-gradient(circle,#fff 8%,${i} 35%,transparent 65%);
    box-shadow:0 0 35px ${i};
    animation:impactBurst 0.4s ease-out forwards;z-index:11`,a.appendChild(s),setTimeout(()=>s.remove(),420)}function Ae(a){const t=document.createElement("div");t.style.cssText=`position:absolute;bottom:168px;left:8%;height:2px;width:0;
    background:linear-gradient(90deg,transparent,rgba(255,80,0,0.9),rgba(255,200,0,0.7),transparent);
    animation:groundCrack 0.7s ease-out forwards;z-index:12;pointer-events:none`,a.appendChild(t),setTimeout(()=>t.remove(),720)}function te(){const a=document.getElementById("dungeon-combat-screen");a&&(a.style.animation="hellShake 0.32s ease-out",setTimeout(()=>{a.style.animation=""},340))}function Gi(a,t,e){const{playerTeam:i,boss:r,elapsedTime:s,dpsTracker:o,minDuration:d,gameOver:n,winner:l}=a,c=Math.floor(s/1e3),p=Math.max(0,r.currentHp/r.maxHp*100),f=document.getElementById("boss-hp-bar");f&&(f.style.width=`${p}%`,f.style.background=p>60?"linear-gradient(90deg,#990020,#dd2244,#ff6644)":p>30?"linear-gradient(90deg,#cc4400,#ff6600,#ffaa00)":"linear-gradient(90deg,#660000,#aa0000,#ff2200)");const g=document.getElementById("boss-hp-text");g&&(g.textContent=`${Math.max(0,r.currentHp).toLocaleString()} / ${r.maxHp.toLocaleString()}`);const u=document.getElementById("boss-shield-text");u&&(u.textContent=r.shieldValue>0?`🛡️ ${r.shieldValue.toLocaleString()}`:"");const v=r.currentPhase||1;v!==qt&&(qt=v,qi(v));const h=document.getElementById("boss-phase-badge");if(h){const x={1:"PHASE I",2:"⚡ PHASE II",3:"💀 PHASE III — ARMAGEDDON"};h.textContent=x[v]||"",h.style.color=v===3?"#ff2244":v===2?"#cc44ff":t.accentColor}if(t.floor===5&&v>=2&&!Gt){Gt=!0;const x=document.getElementById("domain-overlay");x&&(x.style.display="block");const E=document.getElementById("boss-domain-sigil");E&&(E.style.opacity="1")}const y=document.getElementById("timer-display");y&&(y.textContent=`⏱️ ${Math.floor(c/60)}:${String(c%60).padStart(2,"0")}`);const A=document.getElementById("min-timer-display");if(A){const x=Math.max(0,Math.floor(d/1e3)-c);A.textContent=x>0?`⏳ ${Math.floor(x/60)}:${String(x%60).padStart(2,"0")} restant`:"✅ Durée ok",A.style.color=x>0?"#ff8800":"#4ADE80"}const O=document.getElementById("boss-invisible-overlay");O&&(O.style.display=r.isInvisible?"block":"none");const S=document.getElementById("boss-sprite");S&&(S.style.opacity=r.isInvisible?"0.12":"1");const B=document.getElementById("player-sprites");B&&(B.innerHTML=i.map(x=>{const E=Math.max(0,x.currentHp/x.maxHp*100);return`
        <div id="ps-${x.id}" style="display:flex;align-items:center;gap:8px;
          opacity:${x.alive?1:.2};transition:opacity 0.5s">
          <div style="position:relative">
            <img src="${L(x.type)}" style="width:70px;height:70px;image-rendering:pixelated;
              filter:drop-shadow(0 0 12px ${x.alive?"rgba(100,200,255,0.55)":"rgba(255,0,0,0.2)"})
              ${x.alive?"":"grayscale(1)"};transition:filter 0.3s">
            <div style="position:absolute;bottom:-5px;left:2px;right:2px;height:4px;
              background:rgba(0,0,0,0.6);border-radius:2px;overflow:hidden">
              <div style="height:100%;width:${E}%;border-radius:2px;transition:width 0.3s;
                background:${E>55?"#4ADE80":E>25?"#FBBF24":"#ff2244"}"></div>
            </div>
            ${x.alive?"":'<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:22px">💀</div>'}
          </div>
        </div>`}).join(""));const I=document.getElementById("player-hud-bottom");I&&(I.innerHTML=i.map(x=>{const E=Math.max(0,x.currentHp/x.maxHp*100),Y=o[x.id]||0,Bt=e?e.getAutoAttackProgress(x.id)*100:0;return`<div style="flex:1;background:rgba(15,0,5,0.85);border-radius:8px;padding:8px;
        border:1px solid ${x.alive?"rgba(180,10,20,0.35)":"rgba(60,0,0,0.4)"}">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:5px">
          <img src="${L(x.type)}" style="width:26px;height:26px;image-rendering:pixelated;${x.alive?"":"filter:grayscale(1);opacity:0.35"}">
          <div>
            <div style="font-size:9px;font-weight:700;color:var(--${x.rarity})">${x.name.split(" ")[0]}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.35)">${Y>0?Math.round(Y/Math.max(1,c))+" DPS":x.type}</div>
          </div>
        </div>
        <div style="height:5px;background:rgba(0,0,0,0.55);border-radius:3px;margin-bottom:3px;overflow:hidden">
          <div style="height:100%;width:${E}%;border-radius:3px;transition:width 0.2s;
            background:${E>55?"#4ADE80":E>25?"#ff8800":"#ff2244"}"></div>
        </div>
        <div style="height:3px;background:rgba(255,255,255,0.06);border-radius:2px;margin-bottom:5px;overflow:hidden">
          <div style="height:100%;width:${Bt}%;background:rgba(255,200,50,0.75);transition:width 0.1s linear;border-radius:2px"></div>
        </div>
        <div style="display:flex;gap:3px;flex-wrap:wrap">
          ${(x.skills||[]).slice(0,4).map((Oe,ae)=>{const Rt=e?e.getSkillCooldownPct(x.id,ae)*100:0;return`<button class="dsk" data-char="${x.id}" data-skill="${ae}"
              style="width:28px;height:28px;font-size:12px;border:1px solid rgba(180,10,20,0.35);
              border-radius:6px;background:rgba(0,0,0,0.45);cursor:pointer;position:relative;overflow:hidden;
              ${x.alive?"":"opacity:0.3;pointer-events:none"}${Rt>0?";opacity:0.45":""}">
              ${Oe.icon}
              ${Rt>0?`<div style="position:absolute;top:0;left:0;width:100%;height:${Rt}%;background:rgba(0,0,0,0.65)"></div>`:""}
            </button>`}).join("")}
        </div>
      </div>`}).join(""),I.querySelectorAll(".dsk").forEach(x=>{x.addEventListener("click",()=>{e&&e.activateSkill(x.dataset.char,parseInt(x.dataset.skill));const E=document.getElementById(`ps-${x.dataset.char}`)?.querySelector("img");E&&(E.style.animation="playerDash 0.55s ease-out",setTimeout(()=>{E.style.animation=""},580)),Ae(document.getElementById("attack-lane"))})}))}function qi(a,t){const e=document.getElementById("phase-flash");e&&(e.style.display="block",e.style.animation="phaseFlash 1.3s ease-out forwards",setTimeout(()=>{e.style.display="none",e.style.animation=""},1320)),te();const i=document.getElementById("boss-aura");i&&(i.style.background=a===3?"radial-gradient(ellipse,rgba(255,0,0,0.55) 0%,rgba(80,0,200,0.3) 50%,transparent 70%)":"radial-gradient(ellipse,rgba(180,0,255,0.4) 0%,transparent 70%)"),Vt({newPhase:a})}function Vt(a){const t=document.getElementById("boss-ability-alert");if(!t)return;const e={2:{t:"— PHASE II : DOMINATION —",c:"#cc44ff"},3:{t:"☠ PHASE III : FIN DU MONDE ☠",c:"#ff2244"},enrage:{t:"⚡ ENRAGE !",c:"#FBBF24"},shield:{t:"🛡️ BOUCLIER RÉGÉNÉRÉ",c:"#60A5FA"},clone:{t:"👥 DÉDOUBLEMENT !",c:"#A78BFA"},domain:{t:"🔴 DOMAINE DE SAMAËL ACTIVÉ",c:"#ff2244"},invisible:{t:"🌫️ DISPARITION DIVINE",c:"#94A3B8"},emerge_burst:{t:"💥 BURST D'ÉMERGENCE !",c:"#FBBF24"},revive:{t:"⚠️ IL REFUSE LA MORT !",c:"#ff4400"}},i=a?.newPhase||a?.type,r=e[i]||{t:"Compétence!",c:"#fff"};if(t.innerHTML=`<div style="font-family:var(--font-title);font-size:${a?.newPhase?"30":"20"}px;
    letter-spacing:4px;color:${r.c};text-shadow:0 0 25px ${r.c}99;
    padding:12px 36px;background:rgba(0,0,0,0.75);border:1px solid ${r.c}44;
    border-radius:4px;animation:bannerIn 0.5s ease">${r.t}</div>`,t.style.display="block",i==="domain"){const s=document.getElementById("domain-overlay");s&&(s.style.display="block")}["domain","emerge_burst","revive","3"].includes(String(i))&&te(),setTimeout(()=>{t.style.display="none"},a?.newPhase?3e3:2200)}function Vi(a){const t=document.getElementById("dungeon-log");if(!t)return;const e=document.createElement("div");for(e.textContent=a,e.style.cssText="font-size:9px;color:rgba(255,180,180,0.75);padding:2px 6px;background:rgba(0,0,0,0.55);border-left:2px solid rgba(200,10,30,0.5);border-radius:0 3px 3px 0;animation:fadeIn 0.3s ease",t.prepend(e);t.children.length>11;)t.lastChild.remove()}function Xi(a,t,e){const i=document.getElementById("dungeon-result-overlay");if(!i)return;const{archireveEarned:r,xpAmount:s,xpResults:o,itemEarned:d}=e,n=a.floor===5;return i.style.cssText="position:absolute;inset:0;z-index:100",i.innerHTML=`
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

      <div style="font-size:${n?"78":"60"}px;
        animation:victoryZoom 0.9s cubic-bezier(0.175,0.885,0.32,1.275) forwards">${n?"☠️":"🏆"}</div>

      <div style="font-family:var(--font-title);font-size:${n?"54":"42"}px;letter-spacing:8px;
        background:linear-gradient(135deg,#FFD700 0%,#FFA500 40%,#FFED4E 70%,#FFD700 100%);
        -webkit-background-clip:text;-webkit-text-fill-color:transparent;
        filter:drop-shadow(0 0 35px rgba(255,200,0,0.85));
        animation:victoryZoom 0.9s 0.2s cubic-bezier(0.175,0.885,0.32,1.275) both">
        ${n?"SAMAËL VAINCU":"VICTOIRE"}
      </div>

      ${t.isFirstClear?'<div style="font-size:13px;color:#4ADE80;letter-spacing:3px;animation:slideUp 0.5s 0.5s ease-out both">✦ PREMIÈRE VICTOIRE ✦</div>':`<div style="font-size:11px;color:rgba(255,255,255,0.45);animation:slideUp 0.5s 0.5s ease-out both">${t.clears}ème victoire · Récompenses ×0.3</div>`}

      <div style="display:flex;gap:20px;margin-top:6px;animation:slideUp 0.5s 0.7s ease-out both">
        <div style="text-align:center;background:rgba(255,200,0,0.09);border:1px solid rgba(255,200,0,0.25);border-radius:10px;padding:14px 22px">
          <div style="font-size:24px;color:#FFD700;font-family:var(--font-stat);font-weight:900">+${r}</div>
          <div style="font-size:9px;color:rgba(255,255,255,0.4);letter-spacing:2px">ARCHIRÊVES</div>
        </div>
        <div style="text-align:center;background:rgba(74,222,128,0.09);border:1px solid rgba(74,222,128,0.25);border-radius:10px;padding:14px 22px">
          <div style="font-size:24px;color:#4ADE80;font-family:var(--font-stat);font-weight:900">+${s}</div>
          <div style="font-size:9px;color:rgba(255,255,255,0.4);letter-spacing:2px">XP ÉQUIPE</div>
        </div>
        ${d?`
        <div style="text-align:center;background:rgba(167,139,250,0.09);border:1px solid rgba(167,139,250,0.25);border-radius:10px;padding:14px 22px">
          <div style="font-size:30px">${d.icon}</div>
          <div style="font-size:10px;color:#A78BFA;font-weight:700">${d.name}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.35)">Obtenu !</div>
        </div>`:""}
      </div>

      ${o.some(l=>l.leveled)?`<div style="display:flex;gap:8px;animation:slideUp 0.5s 0.9s ease-out both">
        ${o.filter(l=>l.leveled).map(()=>'<div style="font-size:11px;color:#FFD700;background:rgba(255,200,0,0.12);border:1px solid rgba(255,200,0,0.3);padding:4px 14px;border-radius:20px">⬆️ LEVEL UP !</div>').join("")}
      </div>`:""}

      <div style="display:flex;gap:12px;margin-top:10px;animation:slideUp 0.5s 1.1s ease-out both" id="victory-btns"></div>
    </div>
  `,setTimeout(()=>{const l=document.getElementById("vp");if(l)for(let c=0;c<65;c++){const p=document.createElement("div"),f=4+Math.random()*8,g=Math.random()*100,u=Math.random()*3.5,v=2.5+Math.random()*4,h=["#FFD700","#FFA500","#FFED4E","#fff","#FFC107"];p.style.cssText=`position:absolute;top:-20px;left:${g}%;width:${f}px;height:${f}px;border-radius:50%;
        background:${h[Math.floor(Math.random()*h.length)]};
        animation:goldRain ${v}s ${u}s linear infinite`,l.appendChild(p)}},300),document.getElementById("victory-btns")}function Yi(a){const t=document.getElementById("dungeon-result-overlay");if(t)return t.style.cssText="position:absolute;inset:0;z-index:100",t.innerHTML=`
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
  `,document.getElementById("defeat-btns")}function Zi(a){const t=document.getElementById("dungeon-particles");if(!t)return;const e=["ᚱ","ᚷ","ᛏ","ᚦ","ᛉ","☽","☿","⊕","❋","✦","⋆"];for(let i=0;i<28;i++){const r=document.createElement("div"),s=Math.random()*100,o=2+Math.random()*3.5,d=Math.random()*14,n=1.5+Math.random()*3;r.style.cssText=`position:absolute;left:${s}%;bottom:162px;width:${o}px;height:${o}px;
      background:${a.accentColor};border-radius:50%;opacity:0;
      animation:emberRise ${n}s ${d}s ease-out infinite;
      box-shadow:0 0 5px ${a.accentColor}`,t.appendChild(r)}for(let i=0;i<10;i++){const r=document.createElement("div"),s=5+Math.random()*90,o=12+Math.random()*10,d=Math.random()*18,n=10+Math.random()*14;r.style.cssText=`position:absolute;left:${s}%;bottom:0;font-size:${o}px;
      color:${a.accentColor};opacity:0;pointer-events:none;
      animation:floatRune ${n}s ${d}s linear infinite;
      text-shadow:0 0 10px ${a.accentColor}`,r.textContent=e[Math.floor(Math.random()*e.length)],t.appendChild(r)}}let z=null;function Qi(){z=null,At()}function At(){const a=document.getElementById("app"),t=m.getTeamInstances();a.innerHTML=`
    <div class="screen" style="background:linear-gradient(180deg,#0a0010,#050005)">
      <div class="topbar" style="background:rgba(10,0,20,0.9);border-bottom:1px solid rgba(255,34,68,0.2)">
        <button class="topbar__back" id="back-btn">◀</button>
        <div class="topbar__title" style="color:#ff4466;font-family:var(--font-title);letter-spacing:4px">☠️ ÉPREUVE DE SAMAËL</div>
        <div class="currency"><span>⭐</span><span>${m.state.archireve.toLocaleString()}</span></div>
      </div>

      <div class="content" style="display:flex;flex-direction:column;align-items:center;gap:var(--space-xl);padding:var(--space-xl) var(--space-lg)">

        <!-- Warning banner -->
        <div style="background:rgba(255,34,68,0.08);border:1px solid rgba(255,34,68,0.3);border-radius:var(--radius-xl);padding:var(--space-lg);text-align:center;max-width:600px;width:100%">
          <div style="font-size:20px;margin-bottom:8px">⚠️</div>
          <div style="font-size:12px;color:#ff8899;line-height:1.6">${_i.subtitle}</div>
          <div style="font-size:10px;color:var(--text-muted);margin-top:8px">Combat MMORPG temps-réel • Team 4v1 Boss • Minimum 2-3 min par étage</div>
        </div>

        <!-- Team check -->
        ${t.length<4?`
          <div style="background:rgba(245,158,11,0.08);border:1px solid rgba(245,158,11,0.3);border-radius:var(--radius-lg);padding:var(--space-md);text-align:center">
            <div style="font-size:11px;color:var(--warning)">⚠️ Équipe incomplète (${t.length}/4) — Vous pouvez quand même entrer</div>
          </div>
        `:""}

        <!-- Floor map -->
        <div style="display:flex;flex-direction:column;gap:var(--space-md);width:100%;max-width:600px">
          ${Ie.map(e=>Wi(e)).join("")}
        </div>
      </div>
    </div>
  `,document.getElementById("back-btn").addEventListener("click",()=>w.navigate("home")),document.querySelectorAll(".floor-enter-btn").forEach(e=>{e.addEventListener("click",()=>{const i=parseInt(e.dataset.floor);Xt(i)})})}function Wi(a){const t=m.getDungeonFloorProgress(a.floor),e=m.isDungeonFloorUnlocked(a.floor),i=a.floor===5,r=t.clears>0,s=t.bestTime?`${Math.floor(t.bestTime/60)}m${String(t.bestTime%60).padStart(2,"0")}s`:"——";return`
    <div class="glass" style="border-radius:var(--radius-xl);overflow:hidden;
      border-color:${e?i?"rgba(255,34,68,0.4)":"rgba(170,68,255,0.3)":"rgba(50,50,50,0.3)"};
      ${e?"":"opacity:0.5"}
      ${i&&e?"box-shadow:0 0 30px rgba(255,34,68,0.15)":""}">
      <div style="padding:var(--space-md);display:flex;align-items:center;gap:var(--space-md)">
        <!-- Floor icon -->
        <div style="width:56px;height:56px;border-radius:var(--radius-lg);display:flex;align-items:center;justify-content:center;font-size:28px;flex-shrink:0;
          background:${a.bgGradient};border:1px solid ${a.accentColor}44">
          ${a.boss.icon}
        </div>
        <!-- Floor info -->
        <div style="flex:1">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:2px">
            <span style="font-size:9px;color:var(--text-muted);text-transform:uppercase;letter-spacing:2px">Étage ${a.floor}</span>
            ${r?`<span style="font-size:9px;color:var(--accent);background:rgba(34,197,94,0.1);padding:1px 6px;border-radius:4px">✓ ${t.clears}× clear</span>`:""}
          </div>
          <div style="font-family:var(--font-title);font-size:${i?"18px":"14px"};color:${a.accentColor};margin-bottom:2px">
            ${i?"☠️ ":""}${a.name}
          </div>
          <div style="font-size:10px;color:var(--text-muted)">${a.boss.desc.substring(0,70)}...</div>
          <div style="display:flex;gap:var(--space-md);margin-top:6px">
            <span style="font-size:9px;color:var(--text-muted)">🩸 HP: ${a.boss.stats.hp.toLocaleString()}</span>
            <span style="font-size:9px;color:var(--text-muted)">⏱️ Min: ${Math.floor(a.minDuration/60)} min</span>
            ${r?`<span style="font-size:9px;color:var(--star)">🏆 Best: ${s}</span>`:""}
          </div>
        </div>
        <!-- Enter button -->
        <div style="flex-shrink:0">
          ${e?`
            <button class="btn ${i?"btn--danger":"btn--primary"} floor-enter-btn"
              data-floor="${a.floor}" style="border-radius:var(--radius-lg);padding:10px 16px;font-size:11px">
              ${r?"🔄 Refaire":"⚔️ Entrer"}
            </button>
          `:`
            <div style="text-align:center;font-size:20px;color:var(--text-muted)">🔒</div>
          `}
        </div>
      </div>
      <!-- HP bar for boss preview -->
      <div style="height:2px;background:${a.accentColor};opacity:0.4"></div>
    </div>
  `}function Xt(a){const t=Di(a);if(!t)return;const e=m.getTeamInstances();if(e.length===0){Ji("Votre équipe est vide !","error");return}nt(),z&&(z.stop(),z=null),z=new Fi(e,t);let i=!1;z.onTick=s=>{Gi(s,t,z),s.gameOver&&!i&&(i=!0,nt(),z?.stop(),setTimeout(()=>Ki(s.winner,t,Math.floor(s.elapsedTime/1e3)),500))},z.onLog=s=>Vi(s),z.onPhaseChange=s=>Vt(s),z.onBossAbility=s=>Vt(s);const r=document.getElementById("app");Ui(r,t,z,()=>{nt(),z?.stop(),z=null,At()}),z.start()}function Ki(a,t,e){if(a==="player"){const i=m.recordDungeonClear(t.floor,e),r=i.isFirstClear?1:.3,s=Math.floor((t.boss.rewards?.archireve||300)*r);m.addArchireve(s);const o=Math.floor(je({isDungeon:!0,dungeonFloor:t.floor})*r),d=m.addTeamXp(o);let n=null;const l=t.boss.rewards?.items||[];if(i.isFirstClear&&l.length>0){const p=l[Math.floor(Math.random()*l.length)];_[p]&&(n=_[p],m.addItem(p))}m.recordBattle(!0);const c=Xi(t,i,{archireveEarned:s,xpAmount:o,xpResults:d,itemEarned:n});if(c){if(t.floor<5){const f=document.createElement("button");f.textContent=`→ ÉTAGE ${t.floor+1}`,f.style.cssText="padding:14px 32px;font-family:var(--font-title);font-size:13px;letter-spacing:3px;background:linear-gradient(135deg,rgba(255,200,0,0.3),rgba(255,100,0,0.2));border:1px solid rgba(255,200,0,0.4);border-radius:8px;color:#FFD700;cursor:pointer",f.addEventListener("click",()=>Xt(t.floor+1)),c.appendChild(f)}const p=document.createElement("button");p.textContent="◀ RETOUR",p.style.cssText="padding:14px 32px;font-family:var(--font-title);font-size:13px;letter-spacing:3px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:rgba(255,255,255,0.6);cursor:pointer",p.addEventListener("click",()=>{z=null,At()}),c.appendChild(p)}}else{m.recordBattle(!1);const i=Yi(t);if(i){const r=document.createElement("button");r.textContent="🔄 RÉESSAYER",r.style.cssText="padding:14px 32px;font-family:var(--font-title);font-size:13px;letter-spacing:3px;background:linear-gradient(135deg,rgba(180,0,20,0.35),rgba(80,0,0,0.45));border:1px solid rgba(180,0,20,0.45);border-radius:8px;color:#ff4444;cursor:pointer",r.addEventListener("click",()=>Xt(t.floor)),i.appendChild(r);const s=document.createElement("button");s.textContent="◀ RETOUR",s.style.cssText="padding:14px 32px;font-family:var(--font-title);font-size:13px;letter-spacing:3px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:8px;color:rgba(255,255,255,0.5);cursor:pointer",s.addEventListener("click",()=>{z=null,At()}),i.appendChild(s)}}}function Ji(a,t="success"){const e=document.createElement("div");e.className=`toast toast--${t}`,e.textContent=a,document.body.appendChild(e),setTimeout(()=>e.remove(),3e3)}function ta(){const a=document.getElementById("app");try{et(a,null)}catch(t){console.error("[InventoryScreen] Crash:",t),a.innerHTML=`
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
      </div>`,document.getElementById("err-back")?.addEventListener("click",()=>w.navigate("home"))}}function et(a,t){const e=m.getOwnedInstances(),i=m.getInventoryItems(),r=t?e.find(s=>s.id===t):null;a.innerHTML=`
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
            ${e.map(s=>`
              <div class="glass char-picker-btn ${t===s.id?"char-picker-btn--active":""}"
                   data-char="${s.id}"
                   style="padding:8px 12px;cursor:pointer;display:flex;align-items:center;gap:8px;border-radius:var(--radius-md);
                   ${t===s.id?"border-color:var(--accent);background:rgba(34,197,94,0.1)":""}">
                <img src="${L(s.type)}" style="width:32px;height:32px;image-rendering:pixelated">
                <div>
                  <div style="font-size:11px;font-weight:700;color:var(--${s.rarity})">${s.name}</div>
                  <div style="font-size:9px;color:var(--text-muted)">Niv.${s.ownedData?.level||1}</div>
                </div>
              </div>
            `).join("")}
          </div>

          ${r?ea(r,i):`
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
              ${i.map(s=>ia(s,t,r)).join("")}
            </div>
          `}

          <!-- Debug: Add test items (dev only) -->
          <div style="margin-top:var(--space-xxl);border-top:1px solid var(--border);padding-top:var(--space-md)">
            <button class="btn btn--ghost btn--sm" id="dev-add-items">🎁 Ajouter objets de test</button>
          </div>
        </div>
      </div>
    </div>
  `,document.getElementById("back-btn").addEventListener("click",()=>w.navigate("home")),document.querySelectorAll(".char-picker-btn").forEach(s=>{s.addEventListener("click",()=>{et(a,s.dataset.char)})}),document.querySelectorAll(".btn-equip").forEach(s=>{s.addEventListener("click",()=>{const{instanceId:o,charId:d}=s.dataset;m.equipItem(d,o)&&(Dt("Objet équipé !","success"),et(a,d))})}),document.querySelectorAll(".btn-unequip").forEach(s=>{s.addEventListener("click",()=>{const{charId:o,slot:d}=s.dataset;m.unequipItem(o,d),Dt("Objet retiré","warning"),et(a,o)})}),document.getElementById("dev-add-items")?.addEventListener("click",()=>{["epee_rouille","baton_mage","robe_arcane","anneau_rapidite","talisman_nature","dague_ombre"].forEach(o=>m.addItem(o)),Dt("Objets ajoutés !","success"),et(a,t)})}function ea(a,t){const e=m.getCharacterEquipped(a.id),i=m.getCharacterBonusStats(a.id);return`
    <div class="glass" style="padding:var(--space-md);border-radius:var(--radius-xl)">
      <div class="section-header" style="font-size:10px">⚔️ ÉQUIPEMENT — ${a.name}</div>
      
      ${Object.entries(K).map(([r,s])=>{const o=e[r],d=o?t.find(c=>c.instanceId===o):null,n=d?d.fusedData||_[d.itemId]||d:null,l=n?H[n.rarity]||H.rare:null;return`
          <div style="display:flex;align-items:center;gap:var(--space-sm);padding:8px 0;border-bottom:1px solid var(--border)">
            <div style="width:36px;height:36px;border-radius:var(--radius-md);background:var(--bg-surface);
              border:1px solid ${l?l.color:"var(--border)"};display:flex;align-items:center;justify-content:center;font-size:18px;
              box-shadow: ${l?`0 0 8px ${l.glow}`:"none"}">
              ${n?n.icon:s.icon}
            </div>
            <div style="flex:1;min-width:0">
              <div style="font-size:10px;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px">${s.name}</div>
              ${n?`
                <div style="font-size:11px;color:${l?.color||"var(--text-primary)"};font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${n.name}</div>
                <div style="font-size:9px;color:var(--text-muted)">${Object.entries(n.stats||{}).map(([c,p])=>`+${p} ${c.toUpperCase()}`).join(" · ")}</div>
              `:'<div style="font-size:11px;color:var(--text-muted)">— Vide —</div>'}
            </div>
            ${n?`<button class="btn btn--danger btn--sm btn-unequip" data-char-id="${a.id}" data-slot="${r}" style="font-size:9px;padding:4px 8px">✕</button>`:""}
          </div>
        `}).join("")}

      <!-- Bonus stats -->
      ${Object.values(i).some(r=>r>0)?`
        <div style="margin-top:var(--space-sm);padding-top:var(--space-sm);border-top:1px solid var(--border)">
          <div style="font-size:9px;color:var(--accent);letter-spacing:1px;text-transform:uppercase;margin-bottom:4px">Bonus Total</div>
          <div style="display:flex;flex-wrap:wrap;gap:4px">
            ${Object.entries(i).filter(([,r])=>r>0).map(([r,s])=>`
              <span style="font-size:9px;background:rgba(34,197,94,0.1);color:var(--accent);padding:2px 6px;border-radius:4px;border:1px solid rgba(34,197,94,0.2)">+${s} ${r.toUpperCase()}</span>
            `).join("")}
          </div>
        </div>
      `:""}
    </div>
  `}function ia(a,t,e){const i=H[a.rarity]||H.rare,r=K[a.slot];let s=!1;if(e){const n=m.getCharacterEquipped(e.id);s=Object.values(n).includes(a.instanceId)}const d=(e?m.getCharacterEquipped(e.id):{})[a.slot];return`
    <div class="glass" style="padding:var(--space-sm);border-radius:var(--radius-lg);
      border-color:${i.color}33;box-shadow:0 0 10px ${i.glow};
      cursor:default;transition:all var(--transition-normal)">
      <div style="text-align:center;margin-bottom:6px">
        <div style="font-size:28px;filter:drop-shadow(0 0 6px ${i.color})">${a.icon}</div>
        <div style="font-size:9px;color:${i.color};font-weight:700;letter-spacing:1px;text-transform:uppercase">${i.name}</div>
      </div>
      <div style="font-size:10px;font-weight:700;color:var(--text-primary);margin-bottom:2px;text-align:center">${a.name}</div>
      <div style="font-size:9px;color:var(--text-muted);margin-bottom:6px;text-align:center">${r?.name||a.slot}</div>
      <div style="font-size:8px;color:var(--accent);margin-bottom:8px;text-align:center">
        ${Object.entries(a.stats||{}).map(([n,l])=>`+${l} ${n.toUpperCase()}`).join("<br>")}
      </div>
      ${t&&!s?`
        <button class="btn btn--primary btn--sm btn-equip btn--full" 
          data-instance-id="${a.instanceId}" data-char-id="${t}"
          style="font-size:8px;padding:4px 8px;border-radius:var(--radius-sm)">
          ${d?"🔄 Remplacer":"✓ Équiper"}
        </button>
      `:s?`
        <div style="text-align:center;font-size:9px;color:var(--accent);font-weight:700">✓ Équipé</div>
      `:""}
    </div>
  `}function Dt(a,t="success"){const e=document.createElement("div");e.className=`toast toast--${t}`,e.textContent=a,document.body.appendChild(e),setTimeout(()=>e.remove(),3e3)}let X="characters",$=null,k=null;const ft={rare:"#4a9eff",epique:"#c44aff",legendaire:"#ffb84a",ultimate:"#ff4a4a",semi_ultimate:"#FF6B2C",supreme:"#FF1493"};function St(){$=null,k=null;const a=document.getElementById("app");a.innerHTML=Se(),Me()}function Se(){const a=m.state,t=a.ownedCharacters.filter(n=>{const l=C.find(c=>c.id===n.id)||m.getFusedCharacterData(n.id);return l&&(l.rarity==="legendaire"||l.rarity==="ultimate")}),e=(a.inventory||[]).filter(n=>{const l=n.fusedData||_[n.itemId];return l&&(l.rarity==="legendaire"||l.rarity==="ultimate")}),i=na(),r=oa(),s=i&&r&&i.rarity===r.rarity,o=X==="characters",d=s?Ce():null;return'<div class="screen" style="background:var(--bg-primary);display:flex;flex-direction:column;height:100vh;overflow:hidden;background-image:radial-gradient(ellipse at 50% 80%,rgba(192,57,11,0.08),transparent 55%)"><div class="topbar" style="width:100%;position:relative;z-index:10;flex-shrink:0"><button class="topbar__back" id="forge-back">&#9664;</button><div class="topbar__title" style="letter-spacing:4px">⚒ FORGE DE FUSION</div><div></div></div><div style="display:flex;justify-content:center;gap:8px;padding:12px 20px 8px;flex-shrink:0"><button class="btn '+(o?"btn--primary":"btn--ghost")+'" id="tab-chars" style="padding:10px 28px;font-size:11px;letter-spacing:2px">⚔ PERSONNAGES</button><button class="btn '+(o?"btn--ghost":"btn--primary")+'" id="tab-items" style="padding:10px 28px;font-size:11px;letter-spacing:2px">📦 ITEMS</button></div><div style="display:flex;flex:1;overflow:hidden;gap:0"><div style="width:420px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;border-right:1px solid rgba(200,155,60,0.06)"><div style="font-family:var(--font-title);font-size:10px;letter-spacing:4px;color:var(--text-muted);margin-bottom:20px">— FUSION —</div><div style="display:flex;align-items:center;gap:20px">'+fe(i,1)+'<div style="font-size:28px;color:var(--text-muted)">+</div>'+fe(r,2)+'</div><div style="margin:20px 0;font-size:24px;color:var(--accent)">⇣</div>'+(d?aa(d):'<div style="width:180px;height:100px;border:2px dashed rgba(200,155,60,0.08);border-radius:12px;display:flex;align-items:center;justify-content:center;color:var(--text-muted);font-size:12px;letter-spacing:1px">Résultat</div>')+'<div style="margin-top:20px;padding:14px 20px;background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(200,155,60,0.06);max-width:350px"><div style="font-family:var(--font-stat);font-size:9px;color:var(--legendaire);letter-spacing:2px;margin-bottom:8px">RÈGLES DE FUSION</div><div style="font-size:10px;color:var(--text-secondary);line-height:1.8">⚔ Légendaire + Légendaire → <span style="color:#FF6B2C;font-weight:700">Semi-Ultimate</span> (stats ×2)<br>🔥 Ultimate + Ultimate → <span style="color:#FF1493;font-weight:700">Suprême Divin</span> (stats ×10)</div></div><button class="btn btn--star btn--large" id="fuse-btn" style="margin-top:24px;padding:16px 48px;font-size:14px;letter-spacing:3px" '+(s?"":"disabled")+'>⚒ FUSIONNER</button></div><div style="flex:1;overflow-y:auto;padding:20px"><div style="font-family:var(--font-title);font-size:10px;letter-spacing:3px;color:var(--text-muted);margin-bottom:12px">'+(o?"— PERSONNAGES ELIGIBLES ("+t.length+") —":"— ITEMS ÉLIGIBLES ("+e.length+") —")+'</div><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:10px">'+(o?ra(t):sa(e))+"</div></div></div></div>"}function fe(a,t){if(!a)return'<div class="forge-slot forge-slot--empty" data-slot="'+t+'" style="width:130px;height:150px;border:2px dashed rgba(200,155,60,0.15);border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;background:rgba(0,0,0,0.2);transition:all 0.15s"><div style="font-size:32px;opacity:0.3;margin-bottom:8px">+</div><div style="font-size:9px;color:var(--text-muted);letter-spacing:1px">SLOT '+t+"</div></div>";const e=ft[a.rarity]||"#aaa",i=!!a.type&&!a.slot;return'<div class="forge-slot" data-slot="'+t+'" data-selected="true" style="width:130px;height:150px;border:2px solid '+e+'40;border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;background:rgba(0,0,0,0.3);position:relative;transition:all 0.15s">'+(i?'<img src="'+L(a.type.split("/")[0])+'" style="width:48px;height:48px;filter:drop-shadow(0 0 8px '+e+'60)">':'<div style="font-size:36px;filter:drop-shadow(0 0 8px '+e+'60)">'+(a.icon||"📦")+"</div>")+'<div style="font-family:var(--font-ui);font-size:10px;font-weight:700;color:'+e+';margin-top:8px;text-align:center;padding:0 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:120px">'+a.name+'</div><div style="font-size:8px;color:var(--text-muted);letter-spacing:1px;margin-top:2px">'+a.rarity.toUpperCase()+'</div><button class="forge-slot-clear" data-clear="'+t+'" style="position:absolute;top:4px;right:4px;width:20px;height:20px;border:none;background:rgba(220,38,38,0.5);color:white;border-radius:50%;font-size:10px;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button></div>'}function aa(a){const t=ft[a.rarity]||"#FF6B2C",e=Object.entries(a.stats||{}).map(function(i){return'<span style="color:'+t+'">'+i[0].toUpperCase()+"</span> "+i[1]}).join(" · ");return'<div style="width:220px;padding:16px;border:2px solid '+t+'30;border-radius:12px;background:rgba(0,0,0,0.4);text-align:center"><div style="font-family:var(--font-stat);font-size:8px;color:'+t+';letter-spacing:3px;margin-bottom:6px">'+a.rarity.toUpperCase().replace("_","-")+'</div><div style="font-family:var(--font-title);font-size:14px;color:var(--text-bright);margin-bottom:8px">'+a.name+'</div><div style="font-size:9px;color:var(--text-secondary);line-height:1.6">'+e+"</div></div>"}function ra(a){return a.map(t=>{const e=C.find(s=>s.id===t.id)||m.getFusedCharacterData(t.id);if(!e)return"";const i=ft[e.rarity]||"#aaa",r=$===t.id||k===t.id;return'<button class="forge-grid-item" data-char-id="'+t.id+'" style="padding:12px 8px;text-align:center;border-radius:8px;cursor:pointer;border:1px solid '+(r?i:"rgba(200,155,60,0.06)")+";background:"+(r?"rgba(192,57,11,0.15)":"rgba(10,6,3,0.6)")+';color:var(--text-primary);transition:all 0.15s"><img src="'+L(e.type.split("/")[0])+'" style="width:40px;height:40px;filter:drop-shadow(0 0 6px '+i+'40)"><div style="font-family:var(--font-ui);font-size:9px;font-weight:700;color:'+i+';margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+e.name.split(" ")[0]+'</div><div style="font-size:8px;color:var(--text-muted);letter-spacing:1px">LV.'+t.level+'</div><div style="font-size:7px;color:'+i+';letter-spacing:1px;margin-top:2px">'+e.rarity.toUpperCase()+"</div></button>"}).join("")}function sa(a){return a.map(t=>{const e=t.fusedData||_[t.itemId];if(!e)return"";const i=ft[e.rarity]||"#aaa",r=$===t.instanceId||k===t.instanceId,s=K[e.slot]||{name:"",icon:""};return'<button class="forge-grid-item" data-item-id="'+t.instanceId+'" style="padding:12px 8px;text-align:center;border-radius:8px;cursor:pointer;border:1px solid '+(r?i:"rgba(200,155,60,0.06)")+";background:"+(r?"rgba(192,57,11,0.15)":"rgba(10,6,3,0.6)")+';color:var(--text-primary);transition:all 0.15s"><div style="font-size:28px;filter:drop-shadow(0 0 6px '+i+'40)">'+(e.icon||"📦")+'</div><div style="font-family:var(--font-ui);font-size:9px;font-weight:700;color:'+i+';margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+e.name.split(" ").slice(0,2).join(" ")+'</div><div style="font-size:7px;color:var(--text-muted);letter-spacing:1px">'+s.icon+" "+s.name+'</div><div style="font-size:7px;color:'+i+';letter-spacing:1px;margin-top:2px">'+e.rarity.toUpperCase()+"</div></button>"}).join("")}function na(){if(!$)return null;if(X==="characters")return C.find(a=>a.id===$)||m.getFusedCharacterData($);{const a=(m.state.inventory||[]).find(t=>t.instanceId===$);return a?a.fusedData||_[a.itemId]:null}}function oa(){if(!k)return null;if(X==="characters")return C.find(a=>a.id===k)||m.getFusedCharacterData(k);{const a=(m.state.inventory||[]).find(t=>t.instanceId===k);return a?a.fusedData||_[a.itemId]:null}}function Ce(){if(X==="characters"){const a=C.find(r=>r.id===$)||m.getFusedCharacterData($),t=C.find(r=>r.id===k)||m.getFusedCharacterData(k);if(!a||!t)return null;const e=m.state.ownedCharacters.find(r=>r.id===$),i=m.state.ownedCharacters.find(r=>r.id===k);return Ge(a,t,e?.level||1,i?.level||1)}else{const a=(m.state.inventory||[]).find(r=>r.instanceId===$),t=(m.state.inventory||[]).find(r=>r.instanceId===k);if(!a||!t)return null;const e=a.fusedData||_[a.itemId],i=t.fusedData||_[t.itemId];return qe(e,i)}}function Me(){document.getElementById("forge-back")?.addEventListener("click",()=>w.navigate("home")),document.getElementById("tab-chars")?.addEventListener("click",()=>{X="characters",$=null,k=null,St()}),document.getElementById("tab-items")?.addEventListener("click",()=>{X="items",$=null,k=null,St()}),document.querySelectorAll(".forge-grid-item").forEach(a=>{a.addEventListener("click",()=>{const t=a.dataset.charId||a.dataset.itemId;t&&(t===$?$=null:t===k?k=null:$?k=t:$=t,me())})}),document.querySelectorAll(".forge-slot-clear").forEach(a=>{a.addEventListener("click",t=>{t.stopPropagation();const e=a.dataset.clear;e==="1"&&($=null),e==="2"&&(k=null),me()})}),document.getElementById("fuse-btn")?.addEventListener("click",()=>{const a=Ce();a&&(X==="characters"?(m.removeFusionIngredients($,k),m.addFusedCharacter(a)):m.fuseItems($,k,a),$=null,k=null,la(a))})}function me(){const a=document.getElementById("app");a.innerHTML=Se(),Me()}function la(a){const t=ft[a.rarity]||"#FF6B2C",e=document.createElement("div");e.className="modal-overlay",e.style.cssText="flex-direction:column;gap:0;background:rgba(0,0,0,0.95);z-index:9999",e.innerHTML='<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;position:relative"><div style="position:absolute;inset:0;background:radial-gradient(circle,rgba('+(a.rarity==="supreme"?"255,20,147":"255,107,44")+',0.15),transparent 60%);animation:gachaFlash 2s ease forwards"></div><div style="position:relative;width:160px;height:160px;display:flex;align-items:center;justify-content:center"><div style="position:absolute;inset:0;border-radius:50%;border:2px solid '+t+"88;animation:portalRotate 4s linear infinite;box-shadow:0 0 30px "+t+'40"></div><div style="font-size:72px;filter:drop-shadow(0 0 30px '+t+');animation:crystalGlow 1.5s ease infinite alternate">⚒</div></div><div style="margin-top:32px;font-family:var(--font-title);font-size:16px;color:'+t+";letter-spacing:5px;text-shadow:0 0 20px "+t+'60;animation:fadeIn 1s 1s ease forwards;opacity:0">'+a.rarity.toUpperCase().replace("_","-")+'</div><div style="margin-top:12px;font-family:var(--font-title);font-size:28px;color:var(--text-bright);letter-spacing:3px;text-shadow:0 2px 20px rgba(0,0,0,0.5);animation:fadeIn 1s 1.5s ease forwards;opacity:0">'+a.name+'</div><div style="margin-top:12px;font-size:11px;color:var(--text-secondary);animation:fadeIn 1s 2s ease forwards;opacity:0">'+a.desc+'</div><button class="btn btn--primary" id="fusion-done" style="margin-top:32px;padding:14px 36px;animation:fadeIn 1s 2.5s ease forwards;opacity:0">CONTINUER</button></div><style>@keyframes crystalGlow { from{filter:drop-shadow(0 0 20px '+t+") brightness(1)} to{filter:drop-shadow(0 0 50px "+t+") brightness(1.4)} }</style>",document.body.appendChild(e),setTimeout(()=>{document.getElementById("fusion-done")?.addEventListener("click",()=>{e.remove(),St()})},100)}const da={guerrier:{hp:1.5,def:1.5,atk:1,magDef:.5,spd:.3,magAtk:0},mage:{hp:.8,def:.3,atk:0,magDef:1.2,spd:.5,magAtk:2},arche:{hp:.7,def:.4,atk:1.8,magDef:.3,spd:1.5,magAtk:0},assassin:{hp:.6,def:.3,atk:1.6,magDef:.2,spd:2,magAtk:0}},ge=["commun","peucommun","rare","epique","legendaire","mythique","ultimate"],ee={rare:{color:"#3B82F6",label:"Rare"},epique:{color:"#9333EA",label:"Epique"},legendaire:{color:"#C89B3C",label:"Legendaire"},ultimate:{color:"#F5F0E8",label:"Ultimate"}},pt={guerrier:"#f87171",mage:"#c084fc",arche:"#86efac",assassin:"#ff6b9d"},Ct={hp:"HP",atk:"ATK",def:"DEF",spd:"SPD",magAtk:"MAG",magDef:"RES"};let it="overview",ot=null,Et="all",at="rarity",Tt="all",It="all";function Le(){const a=document.getElementById("app");a.innerHTML=`
    <div class="screen" style="background:var(--bg-primary);overflow:hidden;display:flex;flex-direction:column;">

      <!-- Topbar -->
      <div class="topbar" style="position:relative;z-index:10">
        <button class="topbar__back" id="dash-back">&#9664;</button>
        <div class="topbar__title" style="font-size:13px;letter-spacing:4px">TABLEAU DE BORD</div>
        <div style="width:36px"></div>
      </div>

      <!-- Tab Bar -->
      <div id="dash-tabs" style="display:flex;background:rgba(10,6,3,0.97);border-bottom:1px solid var(--border-metal);flex-shrink:0;overflow-x:auto;">
        ${["overview","team","characters","inventory","forge"].map(t=>`
          <button class="dash-tab ${t===it?"dash-tab--active":""}" data-tab="${t}" id="tab-${t}" style="
            flex:1;min-width:100px;padding:14px 8px;background:none;border:none;
            border-bottom:2px solid ${t===it?"var(--accent)":"transparent"};
            color:${t===it?"var(--accent-light)":"var(--text-muted)"};
            font-family:var(--font-ui);font-size:11px;font-weight:700;letter-spacing:2px;
            text-transform:uppercase;cursor:pointer;transition:all 0.2s;white-space:nowrap
          ">${pa(t)}</button>
        `).join("")}
      </div>

      <!-- Content -->
      <div id="dash-content" style="flex:1;overflow-y:auto;overflow-x:hidden;scrollbar-width:thin;scrollbar-color:rgba(200,155,60,0.1) transparent">
      </div>
    </div>
  `,document.getElementById("dash-back").addEventListener("click",()=>w.navigate("home")),document.querySelectorAll(".dash-tab").forEach(t=>{t.addEventListener("click",()=>{it=t.dataset.tab,Le()})}),W()}function pa(a){return{overview:"Apercu",team:"Equipe",characters:"Personnages",inventory:"Inventaire",forge:"Forge"}[a]}function W(){const a=document.getElementById("dash-content");if(a)switch(it){case"overview":a.innerHTML=ca();break;case"team":a.innerHTML=fa(),ga();return;case"characters":a.innerHTML=xa(),ba();return;case"inventory":a.innerHTML=ya(),ha();return;case"forge":a.innerHTML=wa();break}}function ca(){const a=m.state,t=a.profile||{pseudo:"Forgeant",level:1,xp:0},e=a.totalBattles>0?Math.round(a.totalWins/a.totalBattles*100):0,i=a.ownedCharacters.length,r=t.level*100,s=Math.min(100,Math.round(t.xp/r*100)),o=["enchantement","osiris","supplice","maragorh","imotep"],d={enchantement:"Enchantement",osiris:"Osiris",supplice:"Supplice",maragorh:"Maragorh",imotep:"Imotep"},n=o.map(c=>{let p=0;for(let f=0;f<20;f++)m.getLevelFlames(c,f)>0&&p++;return{id:c,name:d[c],done:p,total:20,pct:Math.round(p/20*100)}}),l={rare:0,epique:0,legendaire:0,ultimate:0};return a.ownedCharacters.forEach(c=>{const p=C.find(f=>f.id===c.id);p&&l[p.rarity]!==void 0&&l[p.rarity]++}),Object.values(l).reduce((c,p)=>c+p,0),`
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
              <div style="height:100%;width:${s}%;background:var(--accent-gradient);border-radius:3px;transition:width 0.8s ease"></div>
            </div>
            <span style="font-family:var(--font-stat);font-size:11px;color:var(--text-muted)">${t.xp}/${r} XP</span>
          </div>
        </div>
        <div style="text-align:right;font-family:var(--font-stat)">
          <div style="font-size:24px;font-weight:700;color:var(--star)">${a.archireve.toLocaleString()}</div>
          <div style="font-size:10px;color:var(--text-muted);letter-spacing:2px">ARCHIREVES</div>
        </div>
      </div>

      <!-- Stat Cards -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-md);margin-bottom:var(--space-xl)">
        ${Ft("COMBATS",a.totalBattles,"#E8DCC8")}
        ${Ft("VICTOIRES",a.totalWins,"var(--success)")}
        ${Ft("TAUX VICTOIRE",e+"%",e>=50?"var(--legendaire)":"var(--danger)")}
      </div>

      <!-- Campaign Progress -->
      <div class="glass" style="padding:var(--space-xl);border-radius:var(--radius-xl);margin-bottom:var(--space-xl)">
        <div style="font-family:var(--font-title);font-size:11px;letter-spacing:3px;color:var(--text-muted);margin-bottom:var(--space-lg)">— PROGRESSION CAMPAGNE —</div>
        <div style="display:flex;flex-direction:column;gap:var(--space-md)">
          ${n.map(c=>`
            <div>
              <div style="display:flex;justify-content:space-between;margin-bottom:6px">
                <span style="font-family:var(--font-ui);font-size:12px;font-weight:700;color:var(--text-primary);letter-spacing:1px">${c.name.toUpperCase()}</span>
                <span style="font-family:var(--font-stat);font-size:12px;color:${c.pct===100?"var(--legendaire)":"var(--text-muted)"}">${c.done}/${c.total}</span>
              </div>
              <div style="height:8px;background:rgba(0,0,0,0.5);border-radius:var(--radius-sm);overflow:hidden;border:1px solid var(--border)">
                <div style="height:100%;width:${c.pct}%;background:${c.pct===100?"var(--star-gradient)":"var(--accent-gradient)"};border-radius:var(--radius-sm);transition:width 1s ease;${c.pct===100?"box-shadow:0 0 10px var(--star-glow)":""}"></div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Collection Rarity Chart -->
      <div class="glass" style="padding:var(--space-xl);border-radius:var(--radius-xl)">
        <div style="font-family:var(--font-title);font-size:11px;letter-spacing:3px;color:var(--text-muted);margin-bottom:var(--space-lg)">— COLLECTION —</div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:var(--space-md)">
          ${Object.entries(l).map(([c,p])=>{const f=ee[c],g=Math.round(p/i*100)||0;return`
              <div style="text-align:center">
                <div style="font-family:var(--font-stat);font-size:32px;font-weight:700;color:${f.color};margin-bottom:4px">${p}</div>
                <div style="font-size:9px;color:var(--text-muted);letter-spacing:2px">${f.label.toUpperCase()}</div>
                <div style="margin-top:8px;height:4px;background:rgba(0,0,0,0.5);border-radius:2px;overflow:hidden">
                  <div style="height:100%;width:${g}%;background:${f.color};border-radius:2px"></div>
                </div>
              </div>
            `}).join("")}
        </div>
      </div>

    </div>
  `}function Ft(a,t,e){return`
    <div class="glass" style="padding:var(--space-xl) var(--space-md);border-radius:var(--radius-xl);text-align:center">
      <div style="font-family:var(--font-stat);font-size:40px;font-weight:700;color:${e};line-height:1">${t}</div>
      <div style="font-family:var(--font-ui);font-size:9px;color:var(--text-muted);letter-spacing:3px;margin-top:8px">${a}</div>
    </div>
  `}function fa(){const a=m.getTeamInstances(),t=ua(a);return`
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
        ${a.length?a.map(e=>ma(e)).join(""):`<div style="color:var(--text-muted);text-align:center;padding:var(--space-xxxl);grid-column:1/-1">Aucun personnage dans l'equipe</div>`}
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
                ${Object.values(Ct).map(e=>`<th style="text-align:center;padding:10px;font-size:10px;letter-spacing:2px;color:var(--text-muted);border-bottom:1px solid var(--border-metal)">${e}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${a.map((e,i)=>`
                <tr style="background:${i%2?"transparent":"rgba(200,155,60,0.02)"}">
                  <td style="padding:10px;border-bottom:1px solid rgba(200,155,60,0.04)">
                    <div style="font-weight:700;font-size:13px;color:var(--text-primary)">${e.name}</div>
                    <div style="font-size:10px;color:${pt[e.type]};letter-spacing:1px">${e.type.toUpperCase()}</div>
                  </td>
                  ${Object.keys(Ct).map(r=>{const s=Math.max(...a.map(n=>n.stats[r]||0)),o=e.stats[r]||0,d=s>0?Math.round(o/s*100):0;return`<td style="padding:10px;text-align:center;border-bottom:1px solid rgba(200,155,60,0.04)">
                      <div style="font-family:var(--font-stat);font-size:14px;font-weight:700;color:${o===s&&s>0?"var(--legendaire)":"var(--text-primary)"}">${o}</div>
                      <div style="width:40px;height:3px;background:rgba(0,0,0,0.4);border-radius:2px;margin:4px auto 0">
                        <div style="height:100%;width:${d}%;background:${pt[e.type]};border-radius:2px"></div>
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
  `}function ma(a){const t=ue(a.stats,90),e=pt[a.type]||"var(--accent)",i=Ve[a.rarity?.toUpperCase()]?.color||"#aaa",r=m.getCharacterBonusStats(a.id),s=Object.values(r).some(o=>o>0);return`
    <div class="glass" style="padding:var(--space-lg);border-radius:var(--radius-xl);text-align:center;border-color:rgba(${ka(e)},0.2);position:relative">
      <div style="position:absolute;top:10px;right:12px;font-family:var(--font-stat);font-size:9px;font-weight:700;color:${i};letter-spacing:2px">${a.rarity?.toUpperCase()}</div>

      <!-- Radar SVG -->
      <svg viewBox="0 0 200 200" style="width:140px;height:140px;margin:0 auto var(--space-md)">
        <!-- Grid hexagons -->
        ${[.33,.66,1].map(o=>`<polygon points="${ue({hp:1,atk:1,def:1,spd:1,magAtk:1,magDef:1},90*o)}" fill="none" stroke="rgba(200,155,60,0.12)" stroke-width="1"/>`).join("")}
        <!-- Axes -->
        ${Ea(90).map(([o,d])=>`<line x1="100" y1="100" x2="${o}" y2="${d}" stroke="rgba(200,155,60,0.08)" stroke-width="1"/>`).join("")}
        <!-- Data -->
        <polygon points="${t}" fill="${e}22" stroke="${e}" stroke-width="1.5" opacity="0.9"/>
        <!-- Labels -->
        ${Ta(a.stats,90)}
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

      ${s?'<div style="font-size:9px;color:var(--legendaire);letter-spacing:1px">+ BONUS ITEMS ACTIFS</div>':""}
    </div>
  `}function ga(){document.getElementById("btn-optimize")?.addEventListener("click",()=>{const a=va();a&&(m.setTeam(a),W())})}function ua(a){if(!a.length)return{label:"Equipe vide",bonus:""};const t={};a.forEach(r=>{t[r.type]=(t[r.type]||0)+1});const e=Object.entries(t).sort((r,s)=>s[1]-r[1])[0],i=e[0].charAt(0).toUpperCase()+e[0].slice(1);return e[1]===4?{label:`Meute ${i}`,bonus:`+15% toutes les stats (${i})`}:e[1]===3?{label:`Formation ${i}`,bonus:`+10% ATK +5% SPD (${i})`}:e[1]===2?{label:`Duo ${i}`,bonus:`+5% ATK (${i})`}:Object.keys(t).length===4?{label:"Composition Mixte",bonus:"+3% SPD globale (flexibilite)"}:{label:"Standard",bonus:""}}function va(){const a=m.state.ownedCharacters;return a.length<1?null:a.map(e=>{const i=C.find(s=>s.id===e.id);if(!i)return null;const r={rare:1,epique:1.3,legendaire:1.7,ultimate:2.2}[i.rarity]||1;return{id:e.id,score:e.level*r}}).filter(Boolean).sort((e,i)=>i.score-e.score).slice(0,4).map(e=>e.id)}function xa(){let t=m.getOwnedInstances();return Et!=="all"&&(t=t.filter(e=>e.type===Et)),t.sort((e,i)=>at==="rarity"?ge.indexOf(i.rarity||"rare")-ge.indexOf(e.rarity||"rare"):at==="level"?i.level-e.level:at==="atk"?i.stats.atk+i.stats.magAtk-(e.stats.atk+e.stats.magAtk):0),`
    <div style="display:flex;height:100%">
      <!-- Left: list -->
      <div style="flex:0 0 320px;border-right:1px solid var(--border-metal);overflow-y:auto;padding:var(--space-md);">
        <!-- Filters -->
        <div style="display:flex;gap:6px;margin-bottom:var(--space-md);flex-wrap:wrap">
          ${["all","guerrier","mage","arche","assassin"].map(e=>`
            <button class="btn btn--sm ${e===Et?"btn--primary":"btn--ghost"}" data-cfilter="${e}" style="flex:1;min-width:60px;padding:6px 4px;font-size:9px">${e==="all"?"TOUS":e.toUpperCase()}</button>
          `).join("")}
        </div>
        <div style="display:flex;gap:6px;margin-bottom:var(--space-md)">
          ${["rarity","level","atk"].map(e=>`
            <button class="btn btn--sm ${e===at?"btn--primary":"btn--ghost"}" data-csort="${e}" style="flex:1;font-size:9px">${e==="atk"?"ATK":e.toUpperCase()}</button>
          `).join("")}
        </div>
        <!-- Char list -->
        <div style="display:flex;flex-direction:column;gap:8px">
          ${t.map(e=>{const i=e.id===ot,r=ee[e.rarity]||{color:"#aaa"};return`
              <div class="char-list-item ${i?"char-list-item--active":""}" data-charid="${e.id}" style="
                display:flex;align-items:center;gap:12px;padding:12px;border-radius:var(--radius-md);
                background:${i?"rgba(192,57,11,0.15)":" rgba(20,12,6,0.6)"};
                border:1px solid ${i?"var(--accent)":"var(--border-metal)"};
                cursor:pointer;transition:all 0.2s
              ">
                <div style="width:40px;height:40px;border-radius:var(--radius-sm);background:rgba(200,155,60,0.05);border:1px solid ${r.color}22;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">
                  ${$a(e.type)}
                </div>
                <div style="flex:1;min-width:0">
                  <div style="font-family:var(--font-ui);font-size:12px;font-weight:700;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${e.name}</div>
                  <div style="display:flex;gap:8px;margin-top:3px">
                    <span style="font-size:9px;color:${r.color};letter-spacing:1px">${e.rarity?.toUpperCase()}</span>
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
        ${ot?Be(ot):Yt()}
      </div>
    </div>
  `}function Yt(){return`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:var(--text-muted);gap:var(--space-md)">
    <div style="font-size:48px;opacity:0.2">&#9876;</div>
    <div style="font-family:var(--font-title);font-size:12px;letter-spacing:3px">SELECTIONNEZ UN PERSONNAGE</div>
  </div>`}function Be(a){const t=m.state.ownedCharacters.find(l=>l.id===a);if(!t)return Yt();const e=lt(a,t.level);if(!e)return Yt();const i=m.getCharacterBonusStats(a),r=pt[e.type]||"var(--accent)",s=ee[e.rarity]||{color:"#aaa"},o=e.skills.map(l=>{let c=0,p="",f="var(--text-secondary)";return l.type==="physical"?(c=Math.round(l.power/100*e.stats.atk),p=c+" DPS",f="#E85D20"):l.type==="magical"?(c=Math.round(l.power/100*e.stats.magAtk),p=c+" MAG",f="#c084fc"):l.type==="heal"?(c=Math.round(l.power/100*e.stats.magAtk),p=c+" SOIN",f="#4A7C59"):(p="Soutien",f="var(--text-muted)"),{...l,dps:c,dpsLabel:p,dpsColor:f}}),d=Re(e,a,3),n=m.getCharacterEquipped(a);return`
    <!-- Header -->
    <div style="display:flex;align-items:flex-start;gap:var(--space-xl);margin-bottom:var(--space-xl)">
      <div>
        <div style="font-family:var(--font-title);font-size:20px;color:var(--text-bright);letter-spacing:2px;margin-bottom:6px">${e.name}</div>
        <div style="display:flex;gap:var(--space-sm);flex-wrap:wrap">
          <span style="font-size:10px;color:${r};letter-spacing:2px;background:${r}15;padding:3px 10px;border-radius:var(--radius-sm);border:1px solid ${r}30">${e.type.toUpperCase()}</span>
          <span style="font-size:10px;color:${s.color};letter-spacing:2px;background:${s.color}15;padding:3px 10px;border-radius:var(--radius-sm);border:1px solid ${s.color}30">${e.rarity?.toUpperCase()}</span>
          <span style="font-size:10px;color:var(--text-muted);letter-spacing:2px;padding:3px 10px">NIV.${e.level}</span>
        </div>
        <div style="font-size:12px;color:var(--text-secondary);margin-top:var(--space-sm);font-style:italic">${e.desc||""}</div>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="glass" style="padding:var(--space-lg);border-radius:var(--radius-xl);margin-bottom:var(--space-lg)">
      <div style="font-family:var(--font-title);font-size:10px;letter-spacing:3px;color:var(--text-muted);margin-bottom:var(--space-md)">— STATISTIQUES —</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-md)">
        ${Object.entries(Ct).map(([l,c])=>{const p=e.stats[l]||0,f=i[l]||0,g=p+f;return`
            <div style="padding:10px;background:rgba(0,0,0,0.3);border-radius:var(--radius-md);border:1px solid var(--border)">
              <div style="font-size:9px;color:var(--text-muted);letter-spacing:2px;margin-bottom:4px">${c}</div>
              <div style="display:flex;align-items:baseline;gap:6px">
                <span style="font-family:var(--font-stat);font-size:22px;font-weight:700;color:var(--text-bright)">${g}</span>
                ${f>0?`<span style="font-size:11px;color:var(--legendaire);font-weight:700">+${f}</span>`:""}
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
            ${["CAPACITE","TYPE","PUISSANCE","DPS"].map(l=>`<th style="text-align:left;padding:8px 10px;font-size:9px;color:var(--text-muted);letter-spacing:2px;border-bottom:1px solid var(--border-metal)">${l}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${o.map((l,c)=>`
            <tr style="background:${c%2?"transparent":"rgba(200,155,60,0.02)"}">
              <td style="padding:10px;font-size:12px;font-weight:700;color:var(--text-primary);border-bottom:1px solid rgba(200,155,60,0.04)">${l.name}</td>
              <td style="padding:10px;border-bottom:1px solid rgba(200,155,60,0.04)">
                <span style="font-size:9px;letter-spacing:1px;padding:2px 8px;border-radius:3px;background:${l.dpsColor}15;color:${l.dpsColor};border:1px solid ${l.dpsColor}30">${l.type.toUpperCase()}</span>
              </td>
              <td style="padding:10px;font-family:var(--font-stat);font-size:14px;color:var(--text-secondary);border-bottom:1px solid rgba(200,155,60,0.04)">${l.power||0}</td>
              <td style="padding:10px;font-family:var(--font-stat);font-size:16px;font-weight:700;color:${l.dpsColor};border-bottom:1px solid rgba(200,155,60,0.04)">${l.dpsLabel}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>

    <!-- Equipped Items -->
    <div class="glass" style="padding:var(--space-lg);border-radius:var(--radius-xl);margin-bottom:var(--space-lg)">
      <div style="font-family:var(--font-title);font-size:10px;letter-spacing:3px;color:var(--text-muted);margin-bottom:var(--space-md)">— EQUIPEMENT ACTUEL —</div>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:var(--space-md)">
        ${Object.entries(K).map(([l,c])=>{const p=n[l],f=p?m.state.inventory.find(v=>v.instanceId===p):null,g=f?_[f.itemId]:null,u=g?H[g.rarity]?.color||"#aaa":"var(--text-muted)";return`
            <div style="text-align:center;padding:var(--space-md);background:rgba(0,0,0,0.3);border-radius:var(--radius-md);border:1px solid ${g?u+"40":"var(--border)"}">
              <div style="font-size:24px;margin-bottom:var(--space-xs)">${g?Mt(g.id):"&#9711;"}</div>
              <div style="font-size:9px;color:${g?u:"var(--text-muted)"};letter-spacing:1px">${g?g.name:c.name.toUpperCase()}</div>
              ${g?`<div style="font-size:8px;color:var(--text-muted);margin-top:4px">${Object.entries(g.stats||{}).map(([v,h])=>"+"+h+" "+v.toUpperCase()).join(" ")}</div>`:""}
            </div>
          `}).join("")}
      </div>
    </div>

    <!-- Recommandations -->
    ${d.length?`
    <div class="glass" style="padding:var(--space-lg);border-radius:var(--radius-xl);border-color:rgba(200,155,60,0.2)">
      <div style="font-family:var(--font-title);font-size:10px;letter-spacing:3px;color:var(--legendaire);margin-bottom:var(--space-md)">— ITEMS RECOMMANDES —</div>
      <div style="display:flex;flex-direction:column;gap:var(--space-sm)">
        ${d.map((l,c)=>{const p=H[l.item.rarity]?.color||"#aaa";return`
            <div style="display:flex;align-items:center;gap:var(--space-md);padding:12px;background:rgba(0,0,0,0.3);border-radius:var(--radius-md);border:1px solid ${p}30">
              <div style="font-family:var(--font-stat);font-size:20px;font-weight:700;color:var(--text-muted);width:24px">#${c+1}</div>
              <div style="font-size:22px">${Mt(l.item.id)}</div>
              <div style="flex:1">
                <div style="font-size:13px;font-weight:700;color:var(--text-primary)">${l.item.name}</div>
                <div style="font-size:10px;color:${p};letter-spacing:1px">${l.item.rarity?.toUpperCase()} · ${l.item.slot.toUpperCase()}</div>
                <div style="font-size:10px;color:var(--text-secondary);margin-top:2px">${Object.entries(l.item.stats||{}).map(([f,g])=>"+"+g+" "+f.toUpperCase()).join(", ")}</div>
              </div>
              <div style="text-align:right">
                <div style="font-family:var(--font-stat);font-size:18px;font-weight:700;color:var(--legendaire)">${Math.round(l.score)}</div>
                <div style="font-size:9px;color:var(--text-muted);letter-spacing:1px">SCORE</div>
              </div>
            </div>
          `}).join("")}
      </div>
    </div>
    `:""}
  `}function ba(){document.querySelectorAll("[data-cfilter]").forEach(a=>{a.addEventListener("click",()=>{Et=a.dataset.cfilter,W()})}),document.querySelectorAll("[data-csort]").forEach(a=>{a.addEventListener("click",()=>{at=a.dataset.csort,W()})}),document.querySelectorAll("[data-charid]").forEach(a=>{a.addEventListener("click",()=>{ot=a.dataset.charid;const t=document.getElementById("char-detail-panel");t&&(t.innerHTML=Be(ot))})})}function ya(){let t=m.getInventoryItems();Tt!=="all"&&(t=t.filter(r=>r.slot===Tt)),It!=="all"&&(t=t.filter(r=>r.rarity===It));const i=m.getTeamInstances().map(r=>{const s=Re(r,r.id,2);return{char:r,recs:s}}).filter(r=>r.recs.length>0);return`
    <div style="padding:var(--space-xl);max-width:1100px;margin:0 auto">

      <!-- Filtres -->
      <div style="display:flex;gap:var(--space-sm);margin-bottom:var(--space-md);flex-wrap:wrap">
        ${["all","weapon","armor","accessory","amulet"].map(r=>`
          <button class="btn btn--sm ${r===Tt?"btn--primary":"btn--ghost"}" data-ifilter="${r}">${r==="all"?"TOUS":K[r]?.name.toUpperCase()||r.toUpperCase()}</button>
        `).join("")}
        <div style="width:1px;background:var(--border-metal);margin:0 4px"></div>
        ${["all","commun","peu_commun","rare","epique","legendaire"].map(r=>`
          <button class="btn btn--sm ${r===It?"btn--primary":"btn--ghost"}" data-irarity="${r}">${r==="all"?"ALL":r.toUpperCase()}</button>
        `).join("")}
      </div>

      <!-- Item Count -->
      <div style="font-size:11px;color:var(--text-muted);letter-spacing:2px;margin-bottom:var(--space-lg)">${t.length} objet(s)</div>

      <!-- Grid Items -->
      ${t.length?`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:var(--space-md);margin-bottom:var(--space-xxl)">
        ${t.map(r=>{const s=H[r.rarity]?.color||"#aaa",o=Object.values(m.state.equipped).some(d=>Object.values(d).includes(r.instanceId));return`
            <div class="glass" style="padding:var(--space-md);border-radius:var(--radius-lg);text-align:center;cursor:default;border-color:${s}30;position:relative;transition:transform 0.2s" title="${r.desc||""}">
              ${o?'<div style="position:absolute;top:6px;right:6px;font-size:8px;color:var(--success);letter-spacing:1px;background:rgba(74,124,89,0.2);padding:2px 6px;border-radius:2px;border:1px solid rgba(74,124,89,0.3)">EQUIPE</div>':""}
              <div style="font-size:28px;margin-bottom:8px">${Mt(r.id)}</div>
              <div style="font-size:11px;font-weight:700;color:var(--text-primary);line-height:1.3;margin-bottom:4px">${r.name}</div>
              <div style="font-size:9px;color:${s};letter-spacing:1px;margin-bottom:6px">${r.rarity?.toUpperCase().replace("_"," ")}</div>
              <div style="font-size:9px;color:var(--text-secondary)">${Object.entries(r.stats||{}).map(([d,n])=>"+"+n+" "+d.toUpperCase()).join("<br>")}</div>
            </div>
          `}).join("")}
      </div>
      `:`<div style="text-align:center;padding:var(--space-xxxl);color:var(--text-muted)">Aucun item dans l'inventaire</div>`}

      <!-- Team Recommendations -->
      ${i.length?`
      <div class="glass" style="padding:var(--space-xl);border-radius:var(--radius-xl);border-color:rgba(200,155,60,0.2)">
        <div style="font-family:var(--font-title);font-size:10px;letter-spacing:3px;color:var(--legendaire);margin-bottom:var(--space-lg)">— RECOMMANDATIONS POUR L'EQUIPE —</div>
        <div style="display:flex;flex-direction:column;gap:var(--space-lg)">
          ${i.map(({char:r,recs:s})=>`
            <div>
              <div style="font-size:12px;font-weight:700;color:${pt[r.type]};letter-spacing:1px;margin-bottom:8px">${r.name.toUpperCase()}</div>
              <div style="display:flex;gap:var(--space-md);flex-wrap:wrap">
                ${s.map(o=>{const d=H[o.item.rarity]?.color||"#aaa";return`
                    <div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(0,0,0,0.3);border-radius:var(--radius-md);border:1px solid ${d}30">
                      <span style="font-size:20px">${Mt(o.item.id)}</span>
                      <div>
                        <div style="font-size:11px;font-weight:700;color:var(--text-primary)">${o.item.name}</div>
                        <div style="font-size:9px;color:${d}">${o.item.rarity?.toUpperCase().replace("_"," ")}</div>
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
  `}function ha(){document.querySelectorAll("[data-ifilter]").forEach(a=>{a.addEventListener("click",()=>{Tt=a.dataset.ifilter,W()})}),document.querySelectorAll("[data-irarity]").forEach(a=>{a.addEventListener("click",()=>{It=a.dataset.irarity,W()})})}function wa(){return`
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
  `}function Re(a,t,e=3){const i=da[a.type]||{},r=m.getCharacterEquipped(t),s=new Set(Object.values(r).filter(Boolean));return m.state.inventory.filter(o=>!s.has(o.instanceId)).map(o=>{const d=_[o.itemId];if(!d||!d.stats)return null;let n=0;for(const[l,c]of Object.entries(d.stats))n+=c*(i[l]||0);return{item:{...d,instanceId:o.instanceId},score:n}}).filter(Boolean).sort((o,d)=>d.score-o.score).slice(0,e)}function $a(a){return{guerrier:"&#9876;",mage:"&#9670;",arche:"&#8982;",assassin:"&#8693;"}[a]||"?"}function Mt(a){return{epee_rouille:"&#9876;",lame_forestiere:"&#9876;",baton_mage:"&#9670;",arc_elfique:"&#8982;",dague_ombre:"&#8693;",sceptre_samael:"&#9760;",gambison_use:"&#9711;",cuirasse_ecailles:"&#9680;",robe_arcane:"&#9670;",armure_maragorh:"&#9680;",egide_samael:"&#9680;",amulette_vitalite:"&#9711;",ceinture_force:"&#9711;",anneau_rapidite:"&#9711;",orbe_enchantement:"&#9670;",pendentif_chance:"&#9670;",collier_precision:"&#9671;",talisman_nature:"&#9671;",phylactere_samael:"&#9760;"}[a]||"&#9671;"}function ka(a){if(!a.startsWith("#"))return"192,57,11";const t=parseInt(a.slice(1,3),16),e=parseInt(a.slice(3,5),16),i=parseInt(a.slice(5,7),16);return`${t},${e},${i}`}const Lt=["hp","atk","def","spd","magAtk","magDef"],ie=a=>a*2*Math.PI/6-Math.PI/2;function ue(a,t){const r={hp:800,atk:200,def:200,spd:150,magAtk:220,magDef:200},s={};for(const o of Lt)s[o]=Math.max(r[o],(a[o]||0)*1.2);return Lt.map((o,d)=>{const c=Math.min(a[o]||0,s[o])/(s[o]||1)*t,p=ie(d),f=100+c*Math.cos(p),g=100+c*Math.sin(p);return`${f.toFixed(1)},${g.toFixed(1)}`}).join(" ")}function Ea(a){return Lt.map((i,r)=>{const s=ie(r);return[100+a*Math.cos(s),100+a*Math.sin(s)]})}function Ta(a,t){return Lt.map((r,s)=>{const o=ie(s),d=t+18,n=100+d*Math.cos(o),l=100+d*Math.sin(o);return`<text x="${n.toFixed(1)}" y="${l.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" fill="rgba(255,107,157,0.7)" font-size="11" font-family="DM Sans">${Ct[r]}</text>`}).join("")}class Ia{constructor(){this.playlist=["./song/Break_the_Iron_Sky.mp3","./song/Shatter_the_Sky.mp3"],this.currentIndex=0,this.audio=null,this._volume=.4,this._muted=!1,this.isPlaying=!1,this.fadeDuration=2e3,this._onTrackEnd=this._playNext.bind(this)}start(){this.isPlaying||(this.isPlaying=!0,this.currentIndex=Math.floor(Math.random()*this.playlist.length),this._loadAndPlay(this.currentIndex))}stop(){this.isPlaying=!1,this.audio&&(this.audio.pause(),this.audio.removeEventListener("ended",this._onTrackEnd),this.audio=null)}toggleMute(){return this._muted=!this._muted,this.audio&&(this.audio.muted=this._muted),this._savePref(),this._muted}setVolume(t){this._volume=Math.max(0,Math.min(1,t)),this.audio&&(this.audio.volume=this._volume),this._savePref()}get volume(){return this._volume}get muted(){return this._muted}loadPrefs(){try{const t=JSON.parse(localStorage.getItem("rytiger_audio")||"{}");typeof t.volume=="number"&&(this._volume=t.volume),typeof t.muted=="boolean"&&(this._muted=t.muted)}catch{}}_savePref(){try{localStorage.setItem("rytiger_audio",JSON.stringify({volume:this._volume,muted:this._muted}))}catch{}}_loadAndPlay(t){this.audio&&(this.audio.removeEventListener("ended",this._onTrackEnd),this.audio.pause());const e=this.playlist[t];this.audio=new Audio(e),this.audio.volume=0,this.audio.muted=this._muted,this.audio.addEventListener("ended",this._onTrackEnd),this.audio.play().then(()=>{this._fadeIn()}).catch(i=>{console.warn("[AudioManager] Playback blocked:",i.message)})}_playNext(){this.isPlaying&&(this.currentIndex=(this.currentIndex+1)%this.playlist.length,this._loadAndPlay(this.currentIndex))}_fadeIn(){if(!this.audio)return;const t=this._volume,e=30,i=this.fadeDuration/e;let r=0;const s=setInterval(()=>{if(r++,!this.audio||r>=e){clearInterval(s),this.audio&&(this.audio.volume=t);return}const o=r/e;this.audio.volume=t*(o*o)},i)}}const ct=new Ia;m.init();ct.loadPrefs();w.on("profile",()=>Te()).on("home",()=>be()).on("campaign",()=>he()).on("combat",a=>Ht(a)).on("invocation",()=>Nt()).on("team",()=>D()).on("dungeon",()=>Qi()).on("inventory",()=>ta()).on("forge",()=>St()).on("dashboard",()=>Le());za();function za(){const a=document.getElementById("app");let t=!1;a.innerHTML=`
    <div id="epic-loading" style="
      position:fixed;inset:0;z-index:9999;
      background:#0c0a12;
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      overflow:hidden;cursor:pointer;
    ">
      <!-- Background layers -->
      <div id="load-bg-glow" style="position:absolute;inset:0;opacity:0;background:radial-gradient(ellipse at 50% 60%,rgba(255,107,157,0.15),transparent 70%);transition:opacity 2s ease"></div>
      <div id="load-bg-gold" style="position:absolute;inset:0;opacity:0;background:radial-gradient(ellipse at 50% 50%,rgba(192,132,252,0.1),transparent 50%);transition:opacity 1.5s ease"></div>

      <!-- Rune Circle SVG -->
      <div id="rune-circle" style="position:absolute;width:500px;height:500px;opacity:0;transition:opacity 1.5s ease">
        <svg viewBox="0 0 500 500" style="width:100%;height:100%">
          <!-- Outer ring -->
          <circle cx="250" cy="250" r="230" fill="none" stroke="rgba(255,107,157,0.25)" stroke-width="1.5"
            stroke-dasharray="1445" stroke-dashoffset="1445" id="rune-outer">
            <animate attributeName="stroke-dashoffset" from="1445" to="0" dur="3s" begin="2s" fill="freeze"/>
          </circle>
          <!-- Inner ring -->
          <circle cx="250" cy="250" r="180" fill="none" stroke="rgba(192,132,252,0.3)" stroke-width="1" stroke-dasharray="6 8"
            style="animation:portalRotate 12s linear infinite">
          </circle>
          <!-- Rune symbols around the circle -->
          ${Array.from({length:16},(o,d)=>{const n=d/16*Math.PI*2-Math.PI/2,l=250+205*Math.cos(n),c=250+205*Math.sin(n),p=["花","月","桜","雷","風","星","光","水","火","雪","龍","剣","神","夢","魂","刃"];return`<text x="${l.toFixed(1)}" y="${c.toFixed(1)}" text-anchor="middle" dominant-baseline="middle"
              fill="rgba(255,107,157,0)" font-size="16" font-family="'Noto Serif JP',serif" id="rune-${d}"
              style="transition:fill 0.6s ease ${3+d*.15}s">
              ${p[d]}
            </text>`}).join("")}
          <!-- Center cross lines -->
          <line x1="250" y1="100" x2="250" y2="400" stroke="rgba(255,107,157,0.04)" stroke-width="0.5"/>
          <line x1="100" y1="250" x2="400" y2="250" stroke="rgba(255,107,157,0.04)" stroke-width="0.5"/>
        </svg>
      </div>

      <!-- Anvil / Forge Symbol -->
      <div id="forge-symbol" style="
        font-size:0px;color:#ff6b9d;opacity:0;
        filter:drop-shadow(0 0 0px rgba(255,107,157,0));
        transition:font-size 1.2s cubic-bezier(0.34,1.56,0.64,1), opacity 0.8s ease, filter 2s ease;
        z-index:5;user-select:none;font-family:'Noto Serif JP',serif;
        position:relative;
      ">桜</div>

      <!-- Title Letters -->
      <div id="title-container" style="
        display:flex;gap:6px;margin-top:24px;z-index:5;
        font-family:'Outfit',sans-serif;font-weight:900;font-size:0;
        letter-spacing:14px;
        transition:font-size 1s cubic-bezier(0.34,1.56,0.64,1);
      ">
        ${["R","Y","T","I","G","E","R"].map((o,d)=>`
          <span id="letter-${d}" style="
            opacity:0;color:#faf5ff;display:inline-block;
            text-shadow:0 0 0px rgba(192,57,11,0);
            transition:opacity 0.4s ease, text-shadow 1.5s ease, transform 0.6s cubic-bezier(0.34,1.56,0.64,1);
            transform:translateY(20px) scale(0.5);
          ">${o}</span>
        `).join("")}
      </div>

      <!-- Subtitle -->
      <div id="load-subtitle" style="
        font-family:'DM Sans',sans-serif;font-size:12px;letter-spacing:6px;
        color:rgba(255,107,157,0);margin-top:16px;z-index:5;
        transition:color 1.5s ease;text-transform:uppercase;
      ">RPG Tour par Tour — Éclipse Sakura</div>

      <!-- Progress Bar -->
      <div id="load-bar-wrap" style="
        width:280px;height:3px;background:rgba(200,155,60,0.08);border-radius:3px;overflow:hidden;
        margin-top:40px;z-index:5;opacity:0;transition:opacity 0.8s ease;
      ">
        <div id="load-bar-fill" style="
          height:100%;width:0%;background:linear-gradient(90deg,#ff6b9d,#c084fc,#fcd34d);
          border-radius:3px;box-shadow:0 0 10px rgba(255,107,157,0.4);
          transition:width 0.3s ease;
        "></div>
      </div>

      <!-- Loading Text -->
      <div id="load-text" style="
        font-family:'DM Sans',sans-serif;font-size:10px;letter-spacing:2px;
        color:rgba(90,74,56,0);margin-top:16px;z-index:5;
        transition:color 1s ease;
      ">La forge s'éveille...</div>

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
  `;const e=[{t:300,fn:()=>{T("load-bg-glow").style.opacity="1"}},{t:1500,fn:()=>{T("rune-circle").style.opacity="1"}},{t:2500,fn:()=>{for(let o=0;o<16;o++){const d=T(`rune-${o}`);d&&(d.style.fill="rgba(255,107,157,0.6)")}}},{t:3500,fn:()=>{const o=T("forge-symbol");o.style.fontSize="72px",o.style.opacity="1",o.style.filter="drop-shadow(0 0 30px rgba(255,107,157,0.7))"}},{t:4e3,fn:()=>Aa(80)},{t:4500,fn:()=>{const o=T("epic-loading");o.style.animation="screenShake 0.4s cubic-bezier(0.36,0.07,0.19,0.97)",setTimeout(()=>o.style.animation="",400)}},{t:4700,fn:()=>{const o=T("golden-flash");o.style.opacity="0.6",setTimeout(()=>o.style.opacity="0",200)}},{t:5e3,fn:()=>{T("load-bg-gold").style.opacity="1"}},{t:5500,fn:()=>{const o=T("title-container");o.style.fontSize="52px",["R","Y","T","I","G","E","R"].forEach((d,n)=>{setTimeout(()=>{const l=T(`letter-${n}`);l&&(l.style.opacity="1",l.style.transform="translateY(0) scale(1)",l.style.textShadow="0 0 30px rgba(255,107,157,0.5), 0 0 60px rgba(192,132,252,0.25)",Sa(l))},n*120)})}},{t:7500,fn:()=>{T("load-subtitle").style.color="rgba(255,107,157,0.5)"}},{t:8e3,fn:()=>{T("load-bar-wrap").style.opacity="1",T("load-text").style.color="rgba(90,74,56,0.6)",[{t:0,w:"15%"},{t:600,w:"35%"},{t:1200,w:"55%"},{t:2e3,w:"70%"},{t:2800,w:"85%"},{t:3500,w:"95%"},{t:4200,w:"100%"}].forEach(d=>{setTimeout(()=>{const n=T("load-bar-fill");n&&(n.style.width=d.w)},d.t)})}},{t:9e3,fn:()=>{Ca(40,3e3)}},{t:12500,fn:()=>{const o=T("golden-flash");o.style.opacity="0.4",setTimeout(()=>o.style.opacity="0",300)}},{t:13500,fn:()=>s()}],i=[];e.forEach(o=>{i.push(setTimeout(()=>{t||o.fn()},o.t))});function r(){t||(t=!0,i.forEach(clearTimeout),s())}T("epic-loading")?.addEventListener("click",r),window.addEventListener("keydown",function o(d){(d.code==="Space"||d.key==="Escape")&&(r(),window.removeEventListener("keydown",o))}),Ye(Ze());function s(){const o=T("epic-loading");o&&(o.style.transition="opacity 0.8s ease",o.style.opacity="0",setTimeout(()=>{o.remove(),w.start(),(window.location.hash===""||window.location.hash==="#")&&w.navigate("home"),ct.start(),Ma()},800))}}function T(a){return document.getElementById(a)}function Aa(a){const t=T("load-particles");if(t)for(let e=0;e<a;e++)setTimeout(()=>{const i=document.createElement("div"),r=Math.random()*Math.PI*2,s=100+Math.random()*400,o=1+Math.random()*3,d=1+Math.random()*1.5,n=["#ff6b9d","#ff8db6","#c084fc","#fcd34d","#fda4af"],l=n[Math.floor(Math.random()*n.length)];i.style.cssText=`
        position:absolute;left:50%;top:50%;
        width:${o}px;height:${o}px;
        background:${l};border-radius:50%;
        box-shadow:0 0 ${o*4}px ${l};
        opacity:0;
        animation:emberBurstParticle ${d}s ease forwards;
        --dx:${Math.cos(r)*s}px;
        --dy:${Math.sin(r)*s}px;
      `,t.appendChild(i),setTimeout(()=>i.remove(),d*1e3+100)},e*15)}function Sa(a){const t=T("load-particles");if(!t||!a)return;const e=a.getBoundingClientRect();for(let i=0;i<6;i++){const r=document.createElement("div"),s=1+Math.random()*2;r.style.cssText=`
      position:absolute;
      left:${e.left+e.width*Math.random()}px;
      top:${e.top+e.height*Math.random()}px;
      width:${s}px;height:${s}px;
      background:#ff8db6;border-radius:50%;
      box-shadow:0 0 ${s*3}px #ff8db6;
      animation:letterSparkle 0.8s ease forwards;
      pointer-events:none;
    `,t.appendChild(r),setTimeout(()=>r.remove(),900)}}function Ca(a,t){const e=T("load-particles");if(!e)return;const i=t/a;for(let r=0;r<a;r++)setTimeout(()=>{const s=document.createElement("div"),o=Math.random()*100,d=1+Math.random()*2.5,n=3+Math.random()*4,l=(Math.random()-.5)*80,c=["rgba(255,107,157,0.8)","rgba(192,132,252,0.7)","rgba(252,211,77,0.5)"],p=c[Math.floor(Math.random()*c.length)];s.style.cssText=`
        position:absolute;bottom:-10px;left:${o}%;
        width:${d}px;height:${d}px;
        background:${p};border-radius:50%;
        box-shadow:0 0 ${d*3}px ${p};
        opacity:0;
        animation:emberRise ${n}s ease-in forwards;
        --sway:${l}px;
      `,e.appendChild(s),setTimeout(()=>s.remove(),n*1e3+100)},r*i)}window.addEventListener("keydown",a=>{if(a.key==="Escape"&&window.location.hash!=="#home"&&window.location.hash!==""&&w.navigate("home"),a.key==="m"||a.key==="M"){const t=ct.toggleMute();Pe(t)}});function Ma(){if(document.getElementById("music-controls"))return;const a=document.createElement("div");a.id="music-controls",a.innerHTML=_e(ct.muted),a.title="Musique (M pour mute)",a.style.cssText=`
    position: fixed; bottom: 20px; right: 20px; z-index: 9998;
    width: 44px; height: 44px; border-radius: 50%;
    background: rgba(20, 16, 12, 0.85);
    border: 1px solid rgba(200, 155, 60, 0.3);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: all 0.3s ease;
    backdrop-filter: blur(8px);
    box-shadow: 0 2px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(200,155,60,0.1);
  `,a.addEventListener("mouseenter",()=>{a.style.borderColor="rgba(200, 155, 60, 0.6)",a.style.boxShadow="0 2px 20px rgba(192,57,11,0.3), inset 0 1px 0 rgba(200,155,60,0.2)",a.style.transform="scale(1.1)"}),a.addEventListener("mouseleave",()=>{a.style.borderColor="rgba(200, 155, 60, 0.3)",a.style.boxShadow="0 2px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(200,155,60,0.1)",a.style.transform="scale(1)"}),a.addEventListener("click",()=>{const t=ct.toggleMute();Pe(t)}),document.body.appendChild(a)}function Pe(a){const t=document.getElementById("music-controls");t&&(t.innerHTML=_e(a))}function _e(a){return a?`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <line x1="23" y1="9" x2="17" y2="15"/>
      <line x1="17" y1="9" x2="23" y2="15"/>
    </svg>`:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
  </svg>`}
