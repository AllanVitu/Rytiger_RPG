import{g,C as Q,P as vt,s as He,m as Ne,a as qe,b as Ge,x as Ve}from"./game-engine-Dvgh3h6x.js";import{C as R,Z as N,e as Xe,F as le,f as tt,c as ct,I as O,h as q,i as Ye,j as We,R as Ze}from"./game-data-BOrsUA7a.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();class Qe{constructor(){this.routes={},this.currentRoute=null,this.params={},window.addEventListener("hashchange",()=>this.handleRoute())}on(t,e){return this.routes[t]=e,this}navigate(t,e={}){this.params=e,window.location.hash=t}handleRoute(){const t=window.location.hash.slice(1)||"home",e=t.split("?")[0],i=t.split("?")[1];i&&i.split("&").forEach(r=>{const[n,s]=r.split("=");this.params[n]=decodeURIComponent(s)}),this.routes[e]?(this.currentRoute=e,this.routes[e](this.params),this.params={}):this.routes.home&&(this.currentRoute="home",this.routes.home({}))}start(){this.handleRoute()}}const k=new Qe;function it(a){const t={guerrier:"./assets/characters/guerrier.png",mage:"./assets/characters/mage.png",arche:"./assets/characters/arche.png",assassin:"./assets/characters/assassin.png"};return t[a]||t.guerrier}const de={};function B(a,t=null,e="rare"){return t&&de[t]?de[t]:it(a)}function Kt(a=!1){return a?new URL("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAFO0lEQVR42u2aT2wUVRzHP4scNjNvt4TGZWdrm+zSLS2CgpVuRWMjEi8QE+NBEsOFeOmpFzh4MPSmB+OJA/HsYb0YSkqkoVtSU5FiCIUCCmu7CZXddklju/tmXU/PQzvjTFkQYjIL43yTSXZm3mR2vu/7fn8fBAgQIECAAAECBAgQIIAbuiaUF8/8F2zy8F0qusV4qg/UNaGS2/cAKD8SQjgsOHrsxBORomtCDQ4Ne65iTwkpL+bt3339h9T6zDc61kiJRlleXvKUkM0evitk1qQq3l/g6LETnD51kl273yK27SV7gJRVHpSLFOavqeOffcX3IyNUVkoAIV8qBCA3lkVEdPs8brTZv197vc9aLuRv3+HK5XOYNenfJWPN9PnRM5z8/GsA3h54076Z7uzhxViCwaFhLubOup7x9A967Xqds55M7SWZ2oGUVW7dmLSvO8aE/KwQJzGMb+2g//4SIiKIGwZv/PkXI+GtTY2VPCfErMkQQCye5os/Spx9oYKsSmavXwXg25X7RLcYTVPw5mbNRL0uWdyVIWaaiIgAoJJ5j+tAuFxsmkKaRUioVMwrgNbWbciqpF6X1MxVAArz15qijmcBClBGIq2Sqb0KUF7nLs9isuc6mk1IM2WpdE0Qi6ep16Wd66wvl6b9t01NIkL19R/CrK3ZjnBYuNxxMrWXZqnFa6OqDhw8gpRVOtPd3LoxSc/OXvumiAhyi3k+/OhjfriYIG4Y5MayynLVvquH9PUfIm60ceXyOaItUQaHhpkYzzIxnmX60ii5sSxHj51AVk2uXD6HEC1k9h/2tB7iqUKEiNjLYmryAqnObg4cPEJ56XcAUp3dVFYr3JiZ/n9EqlJW+S3/q52nJNra6eruse93dXcTbYmi6S0A/PTjBFJW0TXhTxvyYEMEOjV5wXV+fvQMgE0IwMK9u56WADz3MlbVbHl5ya6GFeZmKMzN2NcX7t21xzo9kG8UomtCvfzKAEJEqNclZi1PqZhH1wSVlRKxeBqAm7NT6JqwFRGLp0mmdqDrOjdnp5QXsYknCnFKfr0kaH+wRYZVG3GeW2pyLiFfLZlfbl91RaHlxTzJ1A7X4ShEh8yaZPrSqD8Ds4V7d2lt3Uap+E/lPbl9D4X5O65xye17uDk75Tq3bIpfchn1/gefkGhr5/Spk873KoADB4+4Bk+MZ11jdE0wODTM+dEzFlGh514hi6USQrTYQZllU4xE2g7KLBiJtEtFZk0iq6ZndsQzG2JV0dfzEqVrgnfefZ/l5SXb7RbmZtiXGcBIpK1wPQQw8t03dpTrGxvi9C6AlaPQ3tEFHV32B8uqpGdnr0sllZUSUlb9oRAr7HYUjtE1gYgILubOIkTENfsbjaz1rG8UYtYkQkScs67WEr0WmwBdX+vkmaYJuLp5CmBfZgBZlf6xIVJWrXgipGvCpZbyYt4O4x3VMsuOAIRyY1l/BWYPykWsfR5mba1CJuWqraBSMe+yGYAzh1GZ/YcbLqXn1aiGCvPX1Mb44xHxUMN705dGrfZnyA+EPNWHWAXnDXbIv9shLPw8PdnwejgsnJ1//8PqxRiJ9EM7hnA0rhw9G3+ToWvC7tI94oNdY/y8CxGzJm2Xu957aQirJmIk0r7fQfSQe32cYbWqar4mxEistS4beZONpDxORb4hZF9mgJ6dvQ8lextV1N7Rxe5Xe/1PyJPmJDVzFVmVvrYh6vinX9LV3eOskzYKuEK6JijMzRA32qzdip55Gi+3HChntezf3u10t16F7QECBAgQIECAAAECBHhu8De9rTuG6WNGeQAAAABJRU5ErkJggg==",import.meta.url).href:"./assets/characters/boss.png"}function Jt(){return"./assets/characters/minion.png"}function Ke(a){return Promise.all(a.map(t=>new Promise(e=>{const i=new Image;i.src=t,i.onload=e,i.onerror=e})))}function Je(){return[it("guerrier"),it("mage"),it("arche"),it("assassin"),Kt(),Jt()]}function ti(){const a=document.getElementById("app"),t=R.filter(e=>e.starter);a.innerHTML=`
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
            <img src="${B(e.type)}" class="sprite sprite--xl sprite--animate" alt="${e.name}" style="margin:0 auto 16px;display:block">
            <div style="font-family:var(--font-title);font-size:16px;color:var(--legendaire);font-weight:700;letter-spacing:2px;margin-bottom:8px">${e.name}</div>
            <span class="type-badge type-badge--${e.type}" style="margin-bottom:8px">${e.type.toUpperCase()}</span>
            <p style="font-size:12px;color:var(--text-secondary);margin-top:12px;line-height:1.6">${e.desc}</p>
          </div>
        `).join("")}
      </div>
    </div>
  `,t.forEach(e=>{document.getElementById(`starter-${e.id}`).addEventListener("click",async()=>{await g.chooseStarter(e.id),g.addArchireve(500),$e()})})}function $e(){const a=g.state,t=document.getElementById("app");if(a.profile||(g.state.profile={pseudo:"Forgeron",avatar:"https://api.dicebear.com/7.x/pixel-art/svg?seed=local_hero",region:"Offline",level:1,xp:0},g.save()),!a.starterChosen){ti();return}const e=g.getTeamInstances(),i=a.totalBattles>0?Math.round(a.totalWins/a.totalBattles*100):0,r=(a.ownedCharacters||[]).some(p=>p.isNew),n=(a.inventory||[]).some(p=>p.isNew),s=g.canFuseAny(),d=["enchantement","osiris","supplice","maragorh","imotep"],o={enchantement:"Enchantement",osiris:"Osiris",supplice:"Supplice",maragorh:"Maragorh",imotep:"Imotep"};let l=d[0],c=0;for(const p of d){let f=0;for(let u=0;u<20;u++)g.getLevelFlames(p,u)>0&&f++;const m=Math.round(f/20*100);m>c&&(c=m,l=p)}t.innerHTML=`
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
              ${s?'<div style="position:absolute;top:10px;right:10px;width:8px;height:8px;background:var(--ember);border-radius:50%;box-shadow:0 0 10px var(--ember-glow);animation:pulseRed 2s infinite"></div>':""}
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
              ${r?'<div style="position:absolute;right:10px;background:var(--peucommun);color:#000;font-size:8px;font-weight:900;padding:2px 6px;border-radius:2px">NEW!</div>':""}
            </button>

            <button class="btn btn--ghost btn--full" id="btn-inventory" style="
              padding:11px 18px;font-size:10px;letter-spacing:3px;text-align:left;
              display:flex;align-items:center;gap:12px;border-radius:2px;position:relative;
            ">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:16px;height:16px;flex-shrink:0;opacity:0.6">
                <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
              </svg>
              INVENTAIRE
              ${n?'<div style="position:absolute;right:10px;background:var(--peucommun);color:#000;font-size:8px;font-weight:900;padding:2px 6px;border-radius:2px">NEW!</div>':""}
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
              ${(()=>{const p=g.state.achievements||{},f=g.ACHIEVEMENTS?.length||12;return`<div style="position:absolute;right:10px;font-family:var(--font-stat);font-size:8px;color:var(--epique);background:rgba(163,53,238,0.1);padding:2px 6px;border-radius:2px;border:1px solid rgba(163,53,238,0.2)">${Object.keys(p).length}/${f}</div>`})()}
            </button>
          </div>

          <!-- Zone Progress -->
          <div style="font-family:var(--font-title);font-size:9px;letter-spacing:5px;color:rgba(200,150,60,0.35);margin-bottom:14px">── PROGRESSION ──</div>
          <div style="display:flex;flex-direction:column;gap:10px">
            ${d.map(p=>{let f=0;for(let x=0;x<20;x++)g.getLevelFlames(p,x)>0&&f++;const m=Math.round(f/20*100),u=m===100;return`
                <div>
                  <div style="display:flex;justify-content:space-between;margin-bottom:4px">
                    <span style="font-family:var(--font-title);font-size:9px;font-weight:700;color:${u?"var(--accent-light)":"var(--text-secondary)"};letter-spacing:2px">${(o[p]||p).toUpperCase()}</span>
                    <span style="font-family:var(--font-stat);font-size:9px;color:var(--text-muted)">${f}/20</span>
                  </div>
                  <div style="height:3px;background:rgba(0,0,0,0.7);border-radius:1px;overflow:hidden;border:1px solid rgba(200,150,60,0.06)">
                    <div style="height:100%;width:${m}%;background:${u?"var(--star-gradient)":"linear-gradient(90deg,#8B6914,#C8963C)"};border-radius:1px;transition:width 0.8s ease;box-shadow:${u?"0 0 8px rgba(200,150,60,0.5)":"none"}"></div>
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
            ${[0,1,2,3].map(p=>{const f=e[p];if(f){const m=`var(--${f.rarity||"rare"})`;return`
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
                    <div style="position:absolute;top:0;left:0;right:0;height:2px;background:${m};opacity:0.7;box-shadow:0 0 12px ${m}"></div>
                    <!-- Corner ornament top-left -->
                    <div style="position:absolute;top:0;left:0;width:8px;height:8px;border-top:1px solid rgba(200,150,60,0.4);border-left:1px solid rgba(200,150,60,0.4)"></div>
                    <!-- Corner ornament top-right -->
                    <div style="position:absolute;top:0;right:0;width:8px;height:8px;border-top:1px solid rgba(200,150,60,0.4);border-right:1px solid rgba(200,150,60,0.4)"></div>
                    
                    <img src="${B((f.type||"").split("/")[0])}" class="sprite sprite--xl sprite--animate" alt="${f.name}" style="margin:0 auto 10px;display:block">
                    
                    <div style="font-family:var(--font-title);font-size:10px;color:${m};font-weight:700;letter-spacing:0.5px;margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:170px" title="${f.name}">${f.name}</div>
                    <div style="font-family:var(--font-stat);font-size:9px;color:var(--text-muted);letter-spacing:2px;margin-bottom:9px">${(f.type||"").toUpperCase()} · NIV.${f.level}</div>
                    
                    <!-- HP Bar —  WoW style thick -->
                    <div style="height:6px;background:rgba(0,0,0,0.7);border-radius:1px;overflow:hidden;border:1px solid rgba(200,150,60,0.06)">
                      <div style="height:100%;width:100%;background:linear-gradient(90deg,#7A0000,#CC2222,#EE3333);box-shadow:0 0 6px rgba(200,30,30,0.5)"></div>
                    </div>
                    <div style="font-family:var(--font-stat);font-size:8px;color:var(--text-muted);margin-top:4px">${f.maxHp}/${f.maxHp} HP</div>
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
            ${[{val:a.totalBattles,label:"COMBATS",color:"var(--text-bright)"},{val:a.totalWins,label:"VICTOIRES",color:"var(--peucommun)"},{val:i+"%",label:"TAUX",color:"var(--accent-light)"},{val:a.ownedCharacters.length,label:"HÉROS",color:"var(--rare-light)"}].map((p,f)=>`
              <div style="flex:1;text-align:center;padding:14px 8px;position:relative">
                ${f>0?'<div style="position:absolute;left:0;top:20%;bottom:20%;width:1px;background:rgba(200,150,60,0.08)"></div>':""}
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
            ${(()=>{const p=g.getDailyMissions(),f=p.every(m=>m.done);return p.map(m=>{const u=Math.min(100,Math.round(m.progress/m.target*100));return`
                  <div style="
                    padding:12px 14px;
                    background:${m.done?"rgba(134,239,172,0.06)":"rgba(0,0,0,0.3)"};
                    border:1px solid ${m.done?"rgba(134,239,172,0.25)":"rgba(255,107,157,0.06)"};
                    border-radius:8px;position:relative;overflow:hidden;
                    transition:all 0.3s ease;
                  ">
                    ${m.done?'<div style="position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,rgba(134,239,172,0.5),transparent)"></div>':""}
                    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px">
                      <span style="font-size:16px;flex-shrink:0">${m.icon}</span>
                      <div style="flex:1;min-width:0">
                        <div style="font-family:var(--font-ui);font-size:11px;font-weight:700;
                          color:${m.done?"var(--success)":"var(--text-primary)"};letter-spacing:0.5px;">
                          ${m.title}
                          ${m.done?'<span style="font-size:9px;margin-left:6px;opacity:0.7">✓</span>':""}
                        </div>
                        <div style="font-size:9px;color:var(--text-muted);letter-spacing:1px">${m.desc}</div>
                      </div>
                      <div style="font-family:var(--font-stat);font-size:10px;
                        color:${m.done?"var(--success)":"var(--star)"};font-weight:700;flex-shrink:0">
                        +${m.reward}⭐
                      </div>
                    </div>
                    <div style="height:3px;background:rgba(0,0,0,0.5);border-radius:2px;overflow:hidden">
                      <div style="height:100%;width:${u}%;
                        background:${m.done?"var(--success)":"var(--accent-gradient)"};
                        border-radius:2px;transition:width 0.5s ease;
                        box-shadow:${m.done?"0 0 6px rgba(134,239,172,0.5)":"0 0 6px rgba(255,107,157,0.4)"};"></div>
                    </div>
                    <div style="font-size:9px;color:var(--text-muted);margin-top:3px;text-align:right">${m.progress}/${m.target}</div>
                  </div>
                `}).join("")+(f?`
                <div style="text-align:center;padding:8px;font-size:10px;color:var(--success);letter-spacing:2px;animation:ultimateShine 2s infinite">
                  🌸 TOUTES LES MISSIONS COMPLÉTÉES !
                </div>`:"")})()}
          </div>

          <!-- COLLECTION -->
          <div style="font-family:var(--font-title);font-size:10px;letter-spacing:4px;color:var(--text-muted);margin-bottom:16px">— COLLECTION —</div>
          
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:32px">
            ${[{label:"RARE",count:a.ownedCharacters.filter(p=>R.find(m=>m.id===p.id)?.rarity==="rare").length,color:"var(--rare)"},{label:"EPIQUE",count:a.ownedCharacters.filter(p=>R.find(m=>m.id===p.id)?.rarity==="epique").length,color:"var(--epique)"},{label:"LEGEND.",count:a.ownedCharacters.filter(p=>R.find(m=>m.id===p.id)?.rarity==="legendaire").length,color:"var(--legendaire)"},{label:"ULTIMATE",count:a.ownedCharacters.filter(p=>R.find(m=>m.id===p.id)?.rarity==="ultimate").length,color:"var(--ultimate)"}].map(p=>`
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
            <div style="font-family:var(--font-title);font-size:11px;font-weight:700;color:var(--text-primary);letter-spacing:2px;margin-bottom:5px">${(o[l]||l).toUpperCase()}</div>
            <div style="font-family:var(--font-stat);font-size:10px;color:var(--text-muted)">${c}% accompli</div>
            <div style="height:3px;background:rgba(0,0,0,0.7);border-radius:1px;overflow:hidden;margin-top:8px;border:1px solid rgba(200,150,60,0.06)">
              <div style="height:100%;width:${c}%;background:linear-gradient(90deg,#8B6914,#C8963C);border-radius:1px;box-shadow:0 0 6px rgba(200,150,60,0.3)"></div>
            </div>
          </div>

          <!-- Spacer -->
          <div style="flex:1"></div>

          <!-- Quick play button -->
          <button class="btn btn--primary btn--full" id="btn-quick-play" style="
            padding:15px;font-size:11px;letter-spacing:4px;border-radius:2px;
            margin-top:20px;
          ">
            ⚔ JOUER — ${(o[l]||l).toUpperCase()}
          </button>
        </div>
      </div>
    </div>
  `,ei(),ii(),ai(),document.getElementById("btn-profile")?.addEventListener("click",()=>k.navigate("profile")),document.getElementById("btn-campaign")?.addEventListener("click",()=>k.navigate("campaign")),document.getElementById("btn-dungeon")?.addEventListener("click",()=>k.navigate("dungeon")),document.getElementById("btn-invocation")?.addEventListener("click",()=>k.navigate("invocation")),document.getElementById("btn-forge")?.addEventListener("click",()=>k.navigate("forge")),document.getElementById("btn-achievements")?.addEventListener("click",()=>k.navigate("achievements")),document.getElementById("btn-dashboard")?.addEventListener("click",()=>k.navigate("dashboard")),document.getElementById("btn-team")?.addEventListener("click",()=>{g.state.ownedCharacters&&(g.state.ownedCharacters.forEach(p=>delete p.isNew),g.save()),k.navigate("team")}),document.getElementById("btn-inventory")?.addEventListener("click",()=>{g.state.inventory&&(g.state.inventory.forEach(p=>delete p.isNew),g.save()),k.navigate("inventory")}),document.getElementById("btn-dashboard")?.addEventListener("click",()=>k.navigate("dashboard")),document.getElementById("btn-quick-play")?.addEventListener("click",()=>k.navigate("campaign"))}function ei(){const a=document.getElementById("ember-particles");if(!a)return;let t="";for(let e=0;e<65;e++){const i=Math.random()*100,r=Math.random()*12,n=5+Math.random()*12,s=1+Math.random()*2.5,d=.12+Math.random()*.35,o=(Math.random()-.5)*80,l=["rgba(255,107,157,0.8)","rgba(255,141,182,0.6)","rgba(192,132,252,0.5)","rgba(252,211,77,0.4)","rgba(255,182,193,0.5)"],c=l[Math.floor(Math.random()*l.length)];t+=`<div style="
      position:absolute;bottom:-10px;left:${i}%;
      width:${s}px;height:${s}px;
      background:${c};border-radius:50%;
      opacity:${d};
      box-shadow:0 0 ${s*3}px ${c};
      animation:emberRise ${n}s ${r}s ease-in infinite;
      --sway:${o}px;
      will-change:transform;
    "></div>`}a.innerHTML=t}function ii(){const a=document.getElementById("floating-runes");if(!a)return;const t=["花","月","雷","火","風","光","水","雪","星","龍","剣","神"];let e="";for(let i=0;i<12;i++){const r=5+Math.random()*90,n=5+Math.random()*90,s=14+Math.random()*18,d=Math.random()*20,o=15+Math.random()*15;e+=`<div class="floating-rune" style="
      left:${r}%;top:${n}%;font-size:${s}px;
      animation-duration:${o}s;
      animation-delay:${d}s;
    ">${t[i]}</div>`}a.innerHTML=e}function ai(){const a=document.getElementById("title-sparkles");if(!a)return;let t=setInterval(()=>{if(!document.getElementById("title-sparkles")){clearInterval(t);return}const e=document.createElement("div"),i=Math.random()*100,r=Math.random()*100,n=1+Math.random()*2,s=.8+Math.random()*.5,d=["#ff6b9d","#ff8db6","#c084fc","#fcd34d"],o=d[Math.floor(Math.random()*d.length)];e.style.cssText=`
      position:absolute;left:${i}%;top:${r}%;
      width:${n}px;height:${n}px;
      background:${o};border-radius:50%;
      box-shadow:0 0 ${n*4}px ${o};
      animation:titleSparkle ${s}s ease forwards;
      pointer-events:none;
    `,a.appendChild(e),setTimeout(()=>e.remove(),s*1e3+50)},300)}const ke={enchantement:"#C89B3C",osiris:"#E85D20",supplice:"#4A7C59",maragorh:"#c084fc",imotep:"#DC2626",abysses:"#22D3EE",citadelle:"#A78BFA",terre_desolee:"#EF4444",nexus:"#F5D060",preludes:"#FDE68A",bifrost:"#818CF8",domaine:"#FBBF24"};let Dt=0;function Ee(){const a=document.getElementById("app");a.innerHTML=`
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
          <span style="font-family:var(--font-stat);font-size:13px;font-weight:700;color:var(--text-bright)">${g.state.archireve.toLocaleString()}</span>
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
            ${N.map((t,e)=>{const i=g.isLevelUnlocked(t.id,0),r=t.levels||20,n=Object.keys(g.state.campaignProgress[t.id]||{}).length,s=Math.round(n/r*100),d=ke[t.id]||"#C89B3C",o=e===Dt,l=e===0,c=t.tier===2&&(e===0||N[e-1]?.tier!==2),p=t.tier===3&&(e===0||N[e-1]?.tier!==3);return`
                ${l?'<div style="font-family:var(--font-title);font-size:9px;letter-spacing:3px;color:var(--text-muted);padding:4px 8px 8px;margin-top:4px">⚔ CAMPAGNE</div>':c?'<div style="font-family:var(--font-title);font-size:9px;letter-spacing:3px;color:var(--legendaire);padding:12px 8px 8px;margin-top:8px;border-top:1px solid rgba(200,155,60,0.1)">👑 ENDGAME</div>':p?'<div style="font-family:var(--font-title);font-size:9px;letter-spacing:3px;color:#FBBF24;padding:12px 8px 8px;margin-top:8px;border-top:1px solid rgba(251,191,36,0.2)">✦ DIVINITÉ</div>':""}
                <button class="zone-list-btn" data-zone-idx="${e}" style="
                  display:flex;align-items:center;gap:14px;
                  padding:14px 16px;
                  background:${o?"rgba(192,57,11,0.12)":"transparent"};
                  border:1px solid ${o?"rgba(192,57,11,0.25)":"transparent"};
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
                        <div style="height:100%;width:${s}%;background:${d};border-radius:2px;transition:width 0.5s"></div>
                      </div>
                      <span style="font-family:var(--font-stat);font-size:10px;color:var(--text-muted)">${i?s+"%":"🔒"}</span>
                    </div>
                  </div>
                </button>
              `}).join("")}
          </div>
        </div>

        <!-- Right: Zone Detail (main area) -->
        <div id="zone-detail" style="flex:1;display:flex;flex-direction:column;overflow:hidden">
          ${ri(Dt)}
        </div>
      </div>
    </div>
  `,document.getElementById("back-btn").addEventListener("click",()=>k.navigate("home")),document.querySelectorAll(".zone-list-btn").forEach(t=>{t.addEventListener("click",()=>{const e=parseInt(t.dataset.zoneIdx),i=N[e];!i||!g.isLevelUnlocked(i.id,0)||(Dt=e,Ee())})}),document.querySelectorAll(".level-tile-btn").forEach(t=>{t.addEventListener("click",()=>{const e=t.dataset.zone,i=parseInt(t.dataset.level);k.navigate("vs",{zone:e,level:i})})})}function ri(a){const t=N[a];if(!t)return'<div style="flex:1;display:flex;align-items:center;justify-content:center;color:var(--text-muted)">Selectionnez une zone</div>';g.isLevelUnlocked(t.id,0);const e=t.levels||20,i=Object.keys(g.state.campaignProgress[t.id]||{}).length,r=g.getZoneStars(t.id),n=e*3,s=Math.round(i/e*100),d=ke[t.id]||"#C89B3C",o=e>50?10:e>20?6:5;return`
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
            <div style="height:100%;width:${s}%;background:${d};border-radius:3px;box-shadow:0 0 8px ${d}60;transition:width 0.8s"></div>
          </div>
          <span style="font-family:var(--font-stat);font-size:12px;color:${d};font-weight:700">${s}%</span>
        </div>
        <div style="font-family:var(--font-stat);font-size:10px;color:var(--text-muted);margin-top:6px;letter-spacing:1px">${r} / ${n} etoiles — Boss: ${t.boss.name}</div>
      </div>
    </div>

    <!-- Level Grid -->
    <div style="flex:1;overflow-y:auto;padding:24px 32px">
      <div style="font-family:var(--font-title);font-size:10px;letter-spacing:4px;color:var(--text-muted);margin-bottom:16px">— NIVEAUX —</div>
      
      <div style="display:grid;grid-template-columns:repeat(${o},1fr);gap:10px;max-width:${o===10?"900px":o===6?"800px":"700px"}">
        ${Array.from({length:e},(l,c)=>{const p=c===e-1,f=g.getLevelFlames(t.id,c),m=g.isLevelUnlocked(t.id,c),u=f>0,x=Array.from({length:3},(E,L)=>'<span style="font-size:10px;color:'+(L<f?d:"rgba(200,155,60,0.15)")+'">&#9670;</span>').join("");if(!m)return'<div style="padding:14px 8px;text-align:center;background:rgba(10,6,3,0.6);border:1px solid rgba(200,155,60,0.04);border-radius:6px;opacity:0.25"><div style="font-family:var(--font-stat);font-size:16px;color:var(--text-muted);margin-bottom:4px">&#9618;</div><div style="font-size:9px;color:var(--text-muted);letter-spacing:1px">VERR.</div></div>';const $=p?"linear-gradient(135deg,rgba(127,29,29,0.3),rgba(13,10,8,0.8))":u?"rgba(15,10,5,0.8)":"rgba(10,6,3,0.6)",b=p?"rgba(220,38,38,0.3)":u?d+"25":"rgba(200,155,60,0.06)",I=p?"var(--font-title)":"var(--font-stat)",P=p?"12px":"16px",A=p?"var(--danger)":u?d:"var(--text-primary)",y=p?"2px":"0",w=p?"BOSS":c+1,v=p?t.boss.name.split(" ")[0]:"NIV."+(t.levelRange[0]+c);return'<button class="level-tile-btn" data-zone="'+t.id+'" data-level="'+c+'" style="padding:14px 8px;text-align:center;background:'+$+";border:1px solid "+b+';border-radius:6px;cursor:pointer;transition:all 0.15s ease;color:var(--text-primary)"><div style="font-family:'+I+";font-size:"+P+";font-weight:700;color:"+A+";margin-bottom:4px;letter-spacing:"+y+'">'+w+'</div><div style="font-family:var(--font-stat);font-size:9px;color:var(--text-muted);margin-bottom:6px;letter-spacing:1px">'+v+'</div><div style="display:flex;justify-content:center;gap:2px">'+x+"</div></button>"}).join("")}
      </div>
    </div>
  `}const j=50,xt=6e3,ni=5e3,oi=35,si=8,li=.5,di=1.5;class pi{constructor(t,e){this.playerTeam=t.map((i,r)=>({...i,stats:{...i.stats},currentHp:i.currentHp??i.stats.hp,maxHp:i.stats.hp,alive:!0,buffs:[],debuffs:[],atbGauge:Math.random()*20,atbMax:100,isPlayer:!0,isGuarding:!1,x:400,y:300+r*120})),this.enemyTeam=e.map((i,r)=>({...i,stats:{...i.stats},currentHp:i.currentHp??i.stats.hp??i.maxHp,maxHp:i.maxHp??i.stats.hp,alive:!0,buffs:i.buffs||[],debuffs:i.debuffs||[],atbGauge:Math.random()*15,atbMax:100,isPlayer:!1,weakness:i.weakness||"physique",breakGauge:i.breakGauge||0,breakMax:i.breakMax||100,isBroken:i.isBroken||!1,breakTimer:0,x:1300+(i.isBoss?0:r*30),y:300+r*120})),this.running=!1,this.paused=!1,this.gameOver=!1,this.winner=null,this.tickInterval=null,this.elapsedTime=0,this.turnCount=0,this.activeUnit=null,this.log=[],this.totalDmgDealt=0,this.onTick=null,this.onPlayerReady=null,this.onActionExecuted=null,this.onLog=null,this.onBreak=null,this.onGameOver=null}start(){this.running||(this.running=!0,this.paused=!1,this.addLog("⚔️ Le combat commence !"),this.tickInterval=setInterval(()=>this._tick(),j))}stop(){this.running=!1,this.tickInterval&&(clearInterval(this.tickInterval),this.tickInterval=null)}destroy(){this.stop(),this.onTick=null,this.onPlayerReady=null,this.onActionExecuted=null,this.onLog=null,this.onBreak=null,this.onGameOver=null}setSpeed(t){const e=Math.round(j/t);this.tickInterval&&(clearInterval(this.tickInterval),this.tickInterval=setInterval(()=>this._tick(),e))}_tick(){if(!this.running||this.gameOver||this.paused)return;this.elapsedTime+=j;for(const i of this.enemyTeam)i.isBroken&&i.alive&&(i.breakTimer-=j,i.breakTimer<=0&&(i.isBroken=!1,i.breakGauge=0,i.breakTimer=0));this.elapsedTime%1e3<j&&this._processStatusEffects();const t=[...this.playerTeam,...this.enemyTeam];for(const i of t){if(!i.alive||i.isBroken)continue;const n=i.stats.spd/50*j*100/xt;i.atbGauge=Math.min(i.atbMax,i.atbGauge+n)}const e=t.filter(i=>i.alive&&i.atbGauge>=i.atbMax).sort((i,r)=>r.stats.spd-i.stats.spd);if(e.length>0){const i=e[0];i.isPlayer?(this.paused=!0,this.activeUnit=i,this.onPlayerReady?.(i)):(this._executeEnemyAction(i),i.atbGauge=0)}this._checkWinCondition(),this.onTick?.({playerTeam:this.playerTeam,enemyTeam:this.enemyTeam,timeline:this.getTimeline(),elapsedTime:this.elapsedTime,activeUnit:this.activeUnit,paused:this.paused})}executePlayerAction(t,e){if(!this.paused||!this.activeUnit)return null;const i=this.activeUnit,r=i.skills[t];if(!r)return null;const n=this._resolveAction(i,r,e,!0),d=(r.recovery||2e3)/xt*100;return i.atbGauge=-d,i.isGuarding=!1,this.turnCount++,this.paused=!1,this.activeUnit=null,setTimeout(()=>this._checkWinCondition(),100),n}executeGuard(){if(!this.paused||!this.activeUnit)return;const t=this.activeUnit;t.isGuarding=!0,t.atbGauge=-20,this.addLog(`🛡️ ${t.name} se met en garde !`),this.onActionExecuted?.({actor:t,skill:{id:"guard",name:"Garde",icon:"🛡️",type:"guard"},targets:[],results:{guards:[t.id]},isPlayer:!0}),this.turnCount++,this.paused=!1,this.activeUnit=null}_executeEnemyAction(t){const e=t.skills||[{id:"attaque",name:"Attaque",type:"physical",power:80,accuracy:100,icon:"👊",recovery:1800}],i=this.playerTeam.filter(p=>p.alive);if(i.length===0)return;let r=null,n=null;const s=e.find(p=>p.type==="heal"),d=this.enemyTeam.filter(p=>p.alive),o=d.find(p=>p.currentHp/p.maxHp<.4);if(s&&o&&(r=s,n=[...d].sort((p,f)=>p.currentHp/p.maxHp-f.currentHp/f.maxHp)[0].id),!r){const p=e.find(f=>f.type==="buff");p&&(!t.buffs||t.buffs.length===0)&&this.turnCount<=6&&(r=p,n=t.id)}if(!r){const p=e.filter(f=>f.type==="physical"||f.type==="magical");if(t.isBoss){const f=p.find(u=>u.aoe),m=p.find(u=>!u.aoe);f&&i.length>=2&&this.turnCount%3===0?r=f:m?r=m:r=p[0]||e[0],n=[...i].sort((u,x)=>u.currentHp-x.currentHp)[0].id}else if(t.type==="assassin"){r=p.find(u=>u.critBonus||u.executeMult)||p[0]||e[0];const f=i.filter(u=>u.type==="mage"||u.type==="arche");n=[...f.length>0?f:i].sort((u,x)=>u.currentHp-x.currentHp)[0].id}else t.type==="mage"?(r=p.length>0?p[Math.floor(Math.random()*p.length)]:e[0],n=[...i].sort((f,m)=>f.stats.magDef-m.stats.magDef)[0].id):(r=p.length>0?p[Math.floor(Math.random()*p.length)]:e[0],n=[...i].sort((f,m)=>f.stats.def-m.stats.def)[0].id)}r||(r=e[0]),n||(n=i[0].id),this._resolveAction(t,r,n,!1);const c=(r.recovery||2e3)/xt*100;t.atbGauge=-c}_resolveAction(t,e,i,r){const n={hits:[],heals:[],buffs:[],misses:[]};if(Math.random()*100>(e.accuracy||100))return this.addLog(`${r?"🎯":"👹"} ${t.name} — RATÉ !`),n.misses.push(i),this.onActionExecuted?.({actor:t,skill:e,targets:[i],results:n,isPlayer:r}),n;if(e.type==="heal"){const d=this.findUnit(i);if(d&&d.alive){const o=Math.floor(e.power*(1+this._getEffectiveStat(t,"magAtk")/200));d.currentHp=Math.min(d.maxHp,d.currentHp+o),this.addLog(`💚 ${t.name} soigne ${d.name} (+${o} PV)`),n.heals.push({targetId:i,amount:o})}}else if(e.type==="buff"){const d=e.effect?.aoe?(r?this.playerTeam:this.enemyTeam).filter(o=>o.alive):[this.findUnit(i)].filter(Boolean);for(const o of d)e.effect?.type==="stealth"?(o.buffs.push({type:"stealth",turns:e.effect.turns}),this.addLog(`👤 ${t.name} se rend invisible !`)):e.effect&&(o.buffs.push({stat:e.effect.stat,boost:e.effect.boost,turns:e.effect.turns}),this.addLog(`✨ ${t.name} → ${e.name}`)),n.buffs.push({targetId:o.id})}else{const d=e.aoe?(r?this.enemyTeam:this.playerTeam).filter(o=>o.alive):[this.findUnit(i)].filter(Boolean);for(const o of d){if(!o||!o.alive)continue;const l=e.type==="magical"?this._getEffectiveStat(t,"magAtk"):this._getEffectiveStat(t,"atk");let c=e.type==="magical"?this._getEffectiveStat(o,"magDef"):this._getEffectiveStat(o,"def");e.ignoreDefPercent&&(c=Math.floor(c*(1-e.ignoreDefPercent)));let p=Math.floor(l*e.power/(c+50)*(.85+Math.random()*.3));const f=10+(t.type==="assassin"?15:0)+(e.critBonus||0),m=Math.random()*100<f;if(m&&(p=Math.floor(p*1.5)),e.executeMult&&o.currentHp/o.maxHp<.3&&(p=Math.floor(p*e.executeMult)),e.aoe&&(p=Math.floor(p*.7)),o.isBroken&&(p=Math.floor(p*di)),o.isGuarding&&(p=Math.floor(p*(1-li)),o.isGuarding=!1),p=Math.max(1,p),o.currentHp-=p,r&&(this.totalDmgDealt+=p),this.addLog(`${r?"⚔️":"👹"} ${t.name} → ${e.name} → ${o.name} : -${p}${m?" 💥CRIT!":""}${o.isBroken?" 🔥BREAK!":""}`),o.currentHp<=0&&(o.currentHp=0,o.alive=!1,this.addLog(`💀 ${o.name} vaincu !`)),e.effect?.type==="poison"&&o.alive&&(o.debuffs.push({type:"poison",damage:e.effect.damage,turns:e.effect.turns}),this.addLog(`☠️ ${o.name} empoisonné !`)),r&&o.alive&&!o.isBroken&&o.weakness){const x=e.element===o.weakness?oi:si;o.breakGauge=Math.min(o.breakMax,(o.breakGauge||0)+x),o.breakGauge>=o.breakMax&&(o.isBroken=!0,o.breakTimer=ni,o.atbGauge=-60,this.addLog(`💥 ${o.name} est BRISÉ ! (+50% dégâts)`),this.onBreak?.(o))}n.hits.push({targetId:o.id,damage:p,isCrit:m,isBreakHit:o.isBroken})}}return this.onActionExecuted?.({actor:t,skill:e,targets:n.hits.map(d=>d.targetId),results:n,isPlayer:r}),n}getTimeline(){const t=[...this.playerTeam,...this.enemyTeam].filter(i=>i.alive),e=[];for(const i of t){const r=i.atbMax-i.atbGauge,s=i.stats.spd/50*j*100/xt,o=(r>0?Math.ceil(r/s):0)*j;e.push({id:i.id,name:i.name,type:i.type,isPlayer:i.isPlayer,isBoss:i.isBoss,atbPct:Math.max(0,Math.min(100,i.atbGauge/i.atbMax*100)),msToReady:o,isReady:i.atbGauge>=i.atbMax,isBroken:i.isBroken,rarity:i.rarity})}return e.sort((i,r)=>i.msToReady-r.msToReady),e}findUnit(t){return this.playerTeam.find(e=>e.id===t)||this.enemyTeam.find(e=>e.id===t)}_getEffectiveStat(t,e){let i=t.stats[e];for(const r of t.buffs||[])r.stat===e&&(i=Math.floor(i*(1+r.boost)));return i}_processStatusEffects(){const t=[...this.playerTeam,...this.enemyTeam];for(const e of t)e.alive&&(e.debuffs=(e.debuffs||[]).filter(i=>(i.type==="poison"&&(e.currentHp-=i.damage,e.currentHp<=0&&(e.currentHp=0,e.alive=!1,this.addLog(`💀 ${e.name} succombe au poison !`))),i.turns--,i.turns>0)),e.buffs=(e.buffs||[]).filter(i=>(i.turns--,i.turns>0)))}_checkWinCondition(){const t=this.playerTeam.filter(i=>i.alive).length,e=this.enemyTeam.filter(i=>i.alive).length;t===0&&!this.gameOver&&(this.gameOver=!0,this.winner="enemy",this.addLog("💀 Défaite... Votre équipe a été vaincue."),this.stop(),this.onGameOver?.("enemy")),e===0&&!this.gameOver&&(this.gameOver=!0,this.winner="player",this.addLog("🏆 Victoire ! Les ennemis sont vaincus !"),this.stop(),this.onGameOver?.("player"))}addLog(t){this.log.push({message:t,time:this.elapsedTime}),this.onLog?.(t)}getSummary(){return{won:this.winner==="player",turnsPlayed:this.turnCount,playerTeamState:this.playerTeam,enemyTeamState:this.enemyTeam,log:this.log,totalDmgDealt:this.totalDmgDealt}}}const pe={character:{frameW:48,frameH:48,idle:{row:0,frames:6,fps:8,loop:!0,holdLast:!1},walk:{row:1,frames:8,fps:12,loop:!0,holdLast:!1},attack:{row:2,frames:6,fps:14,loop:!1,holdLast:!1},hurt:{row:3,frames:3,fps:16,loop:!1,holdLast:!1},death:{row:4,frames:7,fps:8,loop:!1,holdLast:!0}},boss:{frameW:96,frameH:96,idle:{row:0,frames:6,fps:6,loop:!0,holdLast:!1},attack:{row:1,frames:6,fps:10,loop:!1,holdLast:!1},hurt:{row:2,frames:3,fps:14,loop:!1,holdLast:!1},death:{row:3,frames:8,fps:7,loop:!1,holdLast:!0}},minion:{frameW:48,frameH:48,idle:{row:0,frames:6,fps:10,loop:!0,holdLast:!1},walk:{row:1,frames:8,fps:14,loop:!0,holdLast:!1},attack:{row:2,frames:5,fps:14,loop:!1,holdLast:!1},hurt:{row:3,frames:3,fps:16,loop:!1,holdLast:!1},death:{row:4,frames:6,fps:8,loop:!1,holdLast:!0}}},Ie={guerrier:"/assets/characters/guerrier_sheet.png",mage:"/assets/characters/mage_sheet.png",arche:"/assets/characters/arche_sheet.png",assassin:"/assets/characters/assassin_sheet.png",boss:"/assets/characters/boss_sheet.png",minion:"/assets/characters/minion_sheet.png"},bt={};async function ci(a){return bt[a]!==void 0?bt[a]:new Promise(t=>{const e=new Image;e.onload=()=>{bt[a]=!0,t(!0)},e.onerror=()=>{bt[a]=!1,t(!1)},e.src=Ie[a]})}class gi{constructor(t,e,i="character"){this.el=t,this.type=e,this.config=pe[i]||pe.character,this.currentAnim=null,this.currentFrame=0,this.lastTime=0,this.rafId=null,this.onAnimEnd=null,this.hasSheet=!1,this._queue=null,this._init()}async _init(){const t=await ci(this.type);if(this.hasSheet=t,t){const{frameW:e,frameH:i}=this.config;this.el.style.backgroundImage=`url('${Ie[this.type]}')`,this.el.style.backgroundRepeat="no-repeat",this.el.style.backgroundSize="auto",this.el.style.imageRendering="pixelated",this.el.style.width=e+"px",this.el.style.height=i+"px";const r=this.el.querySelector("img");r&&(r.style.display="none"),this.play("idle")}}play(t,e=null){if(!this.hasSheet){this._triggerCSSFallback(t),e&&e();return}this.config[t]&&(this.currentAnim==="death"&&t!=="death"||(this.currentAnim=t,this.currentFrame=0,this.lastTime=performance.now(),this.onAnimEnd=e,this._queue=null,this.rafId&&cancelAnimationFrame(this.rafId),this._tick(this.lastTime)))}playThen(t,e){this.play(t,()=>this.play(e))}stop(){this.rafId&&cancelAnimationFrame(this.rafId),this.rafId=null}destroy(){this.stop(),this.el=null}_tick(t){if(!this.el)return;const e=this.config[this.currentAnim];if(!e)return;const i=1e3/e.fps,r=t-this.lastTime;if(r>=i&&(this.lastTime=t-r%i,this._renderFrame(e),this.currentFrame++,this.currentFrame>=e.frames))if(e.loop)this.currentFrame=0;else if(e.holdLast){this.currentFrame=e.frames-1,this._renderFrame(e),this.onAnimEnd&&(this.onAnimEnd(),this.onAnimEnd=null);return}else{this.currentFrame=0,this.onAnimEnd&&(this.onAnimEnd(),this.onAnimEnd=null);return}this.rafId=requestAnimationFrame(n=>this._tick(n))}_renderFrame(t){if(!this.el)return;const{frameW:e,frameH:i}=this.config,r=-(this.currentFrame*e),n=-(t.row*i);this.el.style.backgroundPosition=`${r}px ${n}px`}_triggerCSSFallback(t){if(!this.el)return;const i={attack:"combat-unit--attack-player",hurt:"combat-unit--hit",death:"combat-unit--death"}[t];i&&(this.el.classList.add(i),setTimeout(()=>this.el?.classList.remove(i),600))}}const At=new Map;function fi(a,t){At.set(a,t)}function Te(){At.forEach(a=>a.destroy()),At.clear()}function X(a,t,e=null){const i=At.get(a);i&&i.play(t,e)}let h=null,G=null,V=null,Nt=[],Y=null,M=null,H=!1,D=1;function mi(a,t,e){a.addEventListener(t,e),Nt.push({target:a,type:t,fn:e})}function gt(){Nt.forEach(({target:a,type:t,fn:e})=>a.removeEventListener(t,e)),Nt=[],h&&(h.destroy(),h=null),Y&&(clearInterval(Y),Y=null),Te(),M=null,H=!1,D=1}const te={feu:"🔥",glace:"❄️",foudre:"⚡",nature:"🌿",tenebres:"💀",physique:"⚔️"},Pt={feu:"#E85D20",glace:"#60A5FA",foudre:"#FBBF24",nature:"#4ADE80",tenebres:"#A855F7",physique:"#F87171"};function qt(a={}){const t=a.zone||G,e=parseInt(a.level??V??0);G=t,V=e;const i=N.find(o=>o.id===t);if(!i){gt(),k.navigate("campaign");return}const r=g.getTeamInstances();if(r.length===0){gt(),k.navigate("team");return}const n=e===(i.levels||20)-1,s=Xe(t,e,g.state.playerLevel);h=new pi(r,s),h.onTick=o=>{document.getElementById("atb-battlefield")&&(vi(o.timeline),$i(),Ci())},h.onPlayerReady=o=>{if(H){const l=o.skills||[],c=l.filter(b=>b.type==="physical"||b.type==="magical"),p=l.filter(b=>b.type==="heal"),m=h.playerTeam.filter(b=>b.alive).find(b=>b.currentHp/b.maxHp<.4);let u=0,x=null;if(p.length&&m)u=l.indexOf(p[0]),x=m.id;else if(c.length){const b=c.sort((A,y)=>y.power-A.power)[0];u=l.indexOf(b),x=h.enemyTeam.filter(A=>A.alive).sort((A,y)=>A.currentHp-y.currentHp)[0]?.id}const $=D>=4?80:200;setTimeout(()=>{h&&x!==null&&(M=x,ee(u,o))},$);return}Ei(o),ki(o.id)},h.onActionExecuted=o=>{Ii(o)},h.onLog=o=>{const l=document.getElementById("atb-combat-log");l&&(l.textContent=o)},h.onBreak=o=>{Ai(o.id)},h.onGameOver=o=>{setTimeout(()=>Li(i,n),600)};const d=h.enemyTeam.find(o=>o.alive);d&&(M=d.id),ui(i),h.start()}function ui(a,t){const e=document.getElementById("app");e.innerHTML=`
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
  `,hi(),bi(),mi(window,"keydown",r=>{if(!h||!h.paused)return;const n=h.activeUnit;if(!n)return;const d={a:0,z:1,e:2,r:3}[r.key.toLowerCase()];d!==void 0&&n.skills[d]&&ee(d,n),r.code==="Space"&&(r.preventDefault(),h.executeGuard(),Gt())}),document.getElementById("flee-btn").addEventListener("click",()=>{confirm("Fuir le combat ?")&&(gt(),k.navigate("campaign"))}),document.getElementById("speed-btn").addEventListener("click",()=>{D=D===1?2:D===2?4:1;const r=document.getElementById("speed-btn");r&&(r.textContent=`⚡ x${D}`,r.style.color=D===1?"var(--text-bright)":D===2?"#FBBF24":"#FF6B2C",r.style.borderColor=D===1?"rgba(200,155,60,0.3)":D===2?"rgba(251,191,36,0.5)":"rgba(255,107,44,0.5)"),h&&h.setSpeed(D)}),document.getElementById("auto-btn").addEventListener("click",()=>{H=!H;const r=document.getElementById("auto-btn");r&&(r.style.color=H?"#4ADE80":"var(--text-muted)",r.style.borderColor=H?"rgba(74,222,128,0.5)":"rgba(200,155,60,0.3)",r.style.background=H?"rgba(74,222,128,0.1)":"rgba(0,0,0,0.6)",r.textContent=H?"🤖 AUTO":"AUTO")}),document.getElementById("atb-guard-btn").addEventListener("click",()=>{h?.paused&&(h.executeGuard(),Gt())}),Mi(a.id)}function vi(a){const t=document.getElementById("atb-timeline-track");if(!t)return;const e=a.slice(0,10);t.innerHTML=e.map((i,r)=>{const n=i.isPlayer?"var(--accent-light)":"var(--danger)",s=i.isReady?"#fff":i.isPlayer?"var(--accent)":"rgba(220,38,38,0.5)",d=Math.min(100,i.atbPct),o=i.name.split(" ")[0].substring(0,5),l=i.isBroken?"atb-portrait--broken":"",c=i.isReady?"atb-portrait--ready":"";return`
      <div class="atb-portrait ${l} ${c}" style="--atb-pct:${d}%;border-color:${s}" title="${i.name}">
        <div class="atb-portrait-fill" style="width:${d}%;background:${n}"></div>
        <div class="atb-portrait-icon">${i.isPlayer?xi(i.type):i.isBoss?"💀":"👹"}</div>
        <div class="atb-portrait-name">${o}</div>
      </div>
    `}).join("")}function xi(a){return{guerrier:"⚔️",mage:"🔮",arche:"🏹",assassin:"🗡️"}[a]||"⚔️"}function bi(){const a=document.getElementById("player-portraits");!a||!h||(a.innerHTML=h.playerTeam.map(t=>{const e=t.currentHp/t.maxHp*100,i=Math.max(0,t.atbGauge/t.atbMax*100);return`
      <div class="atb-hero-portrait" data-portrait-id="${t.id}">
        <div class="atb-hero-img">
          <img src="${B(t.type)}" style="width:100%;height:100%;object-fit:cover;transform:scale(1.4) translateY(3px)">
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
    `}).join(""))}function yi(){if(h)for(const a of h.playerTeam){const t=document.querySelector(`[data-hp-bar="${a.id}"]`),e=document.querySelector(`[data-atb-bar="${a.id}"]`);if(t){const r=Math.max(0,a.currentHp/a.maxHp*100);t.style.width=r+"%";const n=r<=25?"low":r<=50?"medium":"";t.className=`bar-fill bar-fill--hp ${n}`}if(e){const r=Math.max(0,Math.min(100,a.atbGauge/a.atbMax*100));e.style.width=r+"%"}const i=document.querySelector(`[data-portrait-id="${a.id}"]`);i&&(i.style.opacity=a.alive?"1":"0.3",i.style.filter=a.alive?"":"grayscale(1)")}}function ze(){const a=document.getElementById("target-info-panel");if(!a||!h)return;const t=M?h.findUnit(M):null;if(!t||!t.alive||t.isPlayer){a.style.opacity="0";return}a.style.opacity="1";const e=t.currentHp/t.maxHp*100,i=(t.breakGauge||0)/(t.breakMax||100)*100,r=te[t.weakness]||"⚔️",n=Pt[t.weakness]||"#F87171";a.innerHTML=`
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
        <span style="font-size:14px;filter:drop-shadow(0 0 4px ${n})">${r}</span>
      </div>
      <div style="display:flex;align-items:center;gap:6px;margin-top:4px">
        <span style="font-size:9px;color:var(--text-muted);letter-spacing:1px">BREAK</span>
        <div class="bar-container" style="width:80px;height:4px">
          <div class="bar-fill" style="width:${i}%;background:linear-gradient(90deg,#FBBF24,#F59E0B);box-shadow:0 0 6px rgba(251,191,36,0.4);${t.isBroken?"animation:gaugeFullPulse 0.5s ease infinite":""}"></div>
        </div>
      </div>
    </div>
  `}function hi(){const a=document.getElementById("unit-container");if(!a||!h)return;const t=[...h.playerTeam,...h.enemyTeam];a.innerHTML=t.map(e=>wi(e)).join(""),Te(),t.forEach(e=>{if(!e.alive)return;const i=a.querySelector(`[data-unit-id="${e.id}"] img.sprite`);if(!i)return;const r=e.isBoss?"boss":e.isEnemy?"minion":e.type||"guerrier",n=e.isBoss?"boss":e.isEnemy?"minion":"character",s=new gi(i.parentElement,r,n);fi(e.id,s)}),a.querySelectorAll(".enemy-unit").forEach(e=>{e.addEventListener("click",()=>{const i=e.dataset.unitId,r=h?.findUnit(i);r&&!r.isPlayer&&r.alive&&(M=i,ze(),Se())})})}function wi(a){const t=Math.max(0,a.currentHp/a.maxHp)*100,e=a.isBoss,i=a.isPlayer,r=e?Kt(a.useNewBossSprite):a.isEnemy?Jt():B(a.type),n=a.x,s=a.id===M,d=!i&&a.weakness&&te[a.weakness]||"";return`
    <div class="${i?"player-unit":"enemy-unit"} combat-unit"
         data-unit-id="${a.id}"
         style="width:${e?"150px":"110px"}; text-align:center;
         position:absolute; left:${n}px; top:${a.y}px;
         ${a.alive?"":"opacity:0.2;filter:grayscale(1);pointer-events:none"};
         transition: left 0.6s cubic-bezier(0.4,0,0.2,1), top 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.3s ease;
         cursor: ${!i&&a.alive?"pointer":"default"}">

      ${s?'<div class="selection-ring" style="left:50%"></div>':""}

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
        <div class="atb-weakness-badge" style="--weak-color:${Pt[a.weakness]||"#F87171"}">
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
  `}function $i(){if(!h)return;const a=[...h.playerTeam,...h.enemyTeam];for(const t of a){const e=document.querySelector(`[data-unit-id="${t.id}"]`);if(!e)continue;const i=document.querySelector(`[data-unit-hp="${t.id}"]`);if(i){const s=Math.max(0,t.currentHp/t.maxHp*100);i.style.width=s+"%";const d=s<=25?"low":s<=50?"medium":"";i.className=`bar-fill bar-fill--hp ${d}`}const r=document.querySelector(`[data-unit-hp-text="${t.id}"]`);r&&(r.textContent=`${Math.max(0,t.currentHp)}/${t.maxHp}`),t.alive||(e.style.opacity="0.2",e.style.filter="grayscale(1)",e.style.pointerEvents="none");const n=document.querySelector(`[data-break-ring="${t.id}"] circle:nth-child(2)`);if(n){const s=(t.breakGauge||0)/(t.breakMax||100),d=2*Math.PI*18;n.setAttribute("stroke-dashoffset",d*(1-s)),n.setAttribute("stroke",t.isBroken?"#FF6B35":"#FBBF24")}}if(M){const t=h.findUnit(M);if(!t||!t.alive){const e=h.enemyTeam.find(i=>i.alive);M=e?e.id:null}}yi(),ze(),Se()}function Se(){if(document.querySelectorAll(".selection-ring").forEach(a=>a.remove()),M){const a=document.querySelector(`[data-unit-id="${M}"]`);if(a&&!a.querySelector(".selection-ring")){const t=document.createElement("div");t.className="selection-ring",t.style.left="50%",a.insertBefore(t,a.firstChild)}}}function ki(a){document.querySelectorAll(".atb-active-highlight").forEach(i=>i.remove());const t=document.querySelector(`[data-unit-id="${a}"]`);if(t){const i=document.createElement("div");i.className="atb-active-highlight",t.appendChild(i)}document.querySelectorAll(".atb-hero-portrait").forEach(i=>i.classList.remove("atb-hero-portrait--active"));const e=document.querySelector(`[data-portrait-id="${a}"]`);e&&e.classList.add("atb-hero-portrait--active")}function Ei(a,t,e){const i=document.getElementById("atb-skill-buttons");if(!i)return;i.innerHTML=a.skills.map((n,s)=>{const d=n.speed==="fast"?"atb-skill--fast":n.speed==="heavy"?"atb-skill--heavy":"atb-skill--medium",o=n.speed==="fast"?"⚡ Rapide":n.speed==="heavy"?"🐢 Lourd":"⚖️ Normal",l=((n.recovery||2e3)/1e3).toFixed(1),c=n.element&&te[n.element]||"",p=n.element&&Pt[n.element]||"#F87171",f=n.type==="heal"?"💚 Soin":n.type==="buff"?"✨ Buff":n.type==="magical"?"🔮 Magique":"⚔️ Physique",m=n.power?`${n.power}%`:"—",u=M?h?.findUnit(M):null,x=u&&u.weakness&&n.element===u.weakness;return`
      <button class="atb-skill-btn ${d}" data-skill-idx="${s}" style="position:relative">
        <div class="atb-skill-icon">${n.icon}</div>
        <div class="atb-skill-name" style="${x?"color:#FBBF24":""}">
          ${n.name}
          ${x?'<span style="font-size:8px;color:#FBBF24;margin-left:3px">FAIBLESSE!</span>':""}
        </div>
        <div class="atb-skill-meta">
          <span class="atb-skill-speed">${o}</span>
          ${c?`<span class="atb-skill-element" style="color:${p}">${c}</span>`:""}
        </div>
        <div class="atb-skill-key">${["A","Z","E","R"][s]}</div>

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
          <div style="font-family:var(--font-title);font-size:12px;font-weight:700;color:${x?"#FBBF24":"#faf5ff"};margin-bottom:6px">
            ${n.icon} ${n.name}
            ${x?' <span style="font-size:9px;color:#FBBF24">⚡FAIBLESSE</span>':""}
          </div>
          <div style="font-size:10px;color:var(--text-secondary);line-height:1.5;margin-bottom:8px">${n.desc||"Pas de description."}</div>
          <div style="display:flex;flex-direction:column;gap:4px">
            <div style="display:flex;justify-content:space-between;font-size:10px">
              <span style="color:var(--text-muted)">Type</span>
              <span style="color:var(--text-secondary)">${f}</span>
            </div>
            ${n.power?`<div style="display:flex;justify-content:space-between;font-size:10px">
              <span style="color:var(--text-muted)">Puissance</span>
              <span style="color:var(--text-bright);font-family:var(--font-stat);font-weight:700">${m}</span>
            </div>`:""}
            ${c?`<div style="display:flex;justify-content:space-between;font-size:10px">
              <span style="color:var(--text-muted)">Élément</span>
              <span style="color:${p}">${c} ${(n.element||"").charAt(0).toUpperCase()+(n.element||"").slice(1)}</span>
            </div>`:""}
            <div style="display:flex;justify-content:space-between;font-size:10px">
              <span style="color:var(--text-muted)">Vitesse</span>
              <span style="color:var(--text-secondary)">${o}</span>
            </div>
            <div style="display:flex;justify-content:space-between;font-size:10px">
              <span style="color:var(--text-muted)">Recovery</span>
              <span style="color:var(--text-secondary);font-family:var(--font-stat)">${l}s</span>
            </div>
          </div>
        </div>

      </button>
    `}).join(""),i.querySelectorAll(".atb-skill-btn").forEach(n=>{const s=n.querySelector(".skill-tooltip");s&&(n.addEventListener("mouseenter",()=>{s.style.opacity="1"}),n.addEventListener("mouseleave",()=>{s.style.opacity="0"}))}),i.querySelectorAll(".atb-skill-btn").forEach(n=>{n.addEventListener("click",()=>{const s=parseInt(n.dataset.skillIdx);ee(s,a)})});const r=document.getElementById("atb-action-panel");r&&r.classList.add("atb-action-panel--active")}function ee(a,t){if(!h?.paused)return;const e=t.skills[a];if(e){if(e.type==="heal"||e.type==="buff")h.executePlayerAction(a,t.id);else if(M)h.executePlayerAction(a,M);else{const i=document.getElementById("atb-combat-log");i&&(i.textContent="🎯 Ciblez un ennemi (Clic Gauche) !");return}Gt()}}function Gt(){const a=document.getElementById("atb-action-panel");a&&a.classList.remove("atb-action-panel--active"),document.querySelectorAll(".atb-active-highlight").forEach(e=>e.remove()),document.querySelectorAll(".atb-hero-portrait--active").forEach(e=>e.classList.remove("atb-hero-portrait--active"));const t=document.getElementById("atb-skill-buttons");t&&(t.innerHTML='<div style="color:var(--text-muted);font-size:11px;padding:10px;letter-spacing:1px">⏳ ATB en cours...</div>')}function Ii(a){const{actor:t,skill:e,results:i,isPlayer:r}=a,n=document.querySelector(`[data-unit-id="${t.id}"]`);n&&(e.type==="physical"?(n.classList.add(r?"combat-unit--dash-right":"combat-unit--dash-left"),X(t.id,"attack",()=>X(t.id,"idle")),setTimeout(()=>n.classList.remove("combat-unit--dash-right","combat-unit--dash-left"),600)):(n.classList.add("combat-unit--casting"),X(t.id,"attack",()=>X(t.id,"idle")),setTimeout(()=>n.classList.remove("combat-unit--casting"),600))),t.type==="mage"&&e.type!=="heal"&&e.type!=="buff"&&i.hits?.length>0&&Ti(t,i.hits[0].targetId,e),setTimeout(()=>{let s=!1,d=0;if(i.hits&&(i.hits.forEach(o=>{o.isCrit&&(s=!0),d+=o.damage||0,zi(o.targetId,o.isCrit),ce(o.targetId,o.damage,o.isCrit,!1);const l=h?.findUnit(o.targetId);l&&!l.alive&&setTimeout(()=>Si(o.targetId),300)}),d>0&&r&&g.updateDailyStat("damage",d),s)){const o=document.querySelector(".combat-screen");o&&(o.classList.add("screen--shake"),setTimeout(()=>o.classList.remove("screen--shake"),400))}i.heals&&i.heals.forEach(o=>{ce(o.targetId,o.amount,!1,!0)})},350)}function Ti(a,t,e){const i=document.getElementById("atb-battlefield"),r=document.querySelector(`[data-unit-id="${t}"]`);if(!i||!r)return;const n=i.getBoundingClientRect(),s=r.getBoundingClientRect(),d=s.left-n.left+s.width/2,o=s.top-n.top+s.height/2,l=a.x+55,c=a.y+60,p=e.element&&Pt[e.element]||"#ff6b9d",f=document.createElement("div");f.style.cssText=`position:absolute; left:${l}px; top:${c}px; width:24px; height:24px;
    background:radial-gradient(circle, ${p} 20%, transparent); border-radius:50%;
    box-shadow:0 0 15px ${p}; z-index:20; transition: all 0.45s cubic-bezier(0.4,0,0.2,1);`,i.appendChild(f),requestAnimationFrame(()=>{f.style.left=d+"px",f.style.top=o+"px",f.style.transform="scale(1.5)"}),setTimeout(()=>f.remove(),500)}function zi(a,t){const e=document.querySelector(`[data-unit-id="${a}"]`);if(!e)return;const i=t?"combat-unit--crit":"combat-unit--hit";e.classList.add(i),X(a,"hurt",()=>X(a,"idle")),setTimeout(()=>e.classList.remove(i),500)}function Si(a){const t=document.querySelector(`[data-unit-id="${a}"]`);t&&(t.classList.add("combat-unit--death"),X(a,"death"))}function Ai(a){const t=document.querySelector(`[data-unit-id="${a}"]`),e=document.getElementById("atb-battlefield");if(!t||!e)return;t.classList.add("combat-unit--break"),setTimeout(()=>t.classList.remove("combat-unit--break"),700);const i=document.createElement("div");i.style.cssText="position:absolute;inset:0;background:rgba(251,191,36,0.15);z-index:30;pointer-events:none;animation:fadeIn 0.1s ease, fadeOut 0.5s ease 0.2s forwards",e.appendChild(i),setTimeout(()=>i.remove(),700);const r=document.querySelector(".combat-screen");r&&(r.classList.add("screen--shake"),setTimeout(()=>r.classList.remove("screen--shake"),400));const n=t.getBoundingClientRect(),s=e.getBoundingClientRect(),d=document.createElement("div");d.style.cssText=`position:absolute;left:${n.left-s.left+n.width/2}px;top:${n.top-s.top-20}px;
    transform:translateX(-50%);font-family:var(--font-stat);font-size:28px;font-weight:900;color:#FBBF24;
    text-shadow:0 0 20px rgba(251,191,36,0.8),0 2px 4px rgba(0,0,0,0.9);
    animation:damageFloat 1.2s ease forwards;pointer-events:none;z-index:35;letter-spacing:3px`,d.textContent="💥 BREAK!",e.appendChild(d),setTimeout(()=>d.remove(),1200)}function ce(a,t,e,i){const r=document.querySelector(`[data-unit-id="${a}"]`);if(!r)return;const n=document.createElement("div");n.className=`damage-number ${i?"damage-number--heal":""} ${e?"damage-number--crit":""}`,n.textContent=`${i?"+":"-"}${t}`,r.appendChild(n),setTimeout(()=>n.remove(),1e3)}function Ci(){if(!h)return;const a=Math.floor(h.elapsedTime/1e3),t=Math.floor(a/60),e=a%60,i=document.getElementById("atb-timer");i&&(i.textContent=`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`);const r=document.getElementById("atb-dmg-total");r&&(r.textContent=`⚔ ${(h.totalDmgDealt||0).toLocaleString()} dmg`)}const ge={enchantement:{emoji:"✨",count:15,speed:4,opacity:.6,sway:40},osiris:{emoji:"🏜️",count:20,speed:3,opacity:.4,sway:60,altEmoji:"💨"},supplice:{emoji:"🫧",count:12,speed:5,opacity:.5,sway:30},maragorh:{emoji:"🍃",count:18,speed:3.5,opacity:.5,sway:50,altEmoji:"🌿"},imotep:{emoji:"🌋",count:15,speed:2.5,opacity:.4,sway:20,altEmoji:"✦"},abysses:{emoji:"🫧",count:20,speed:6,opacity:.5,sway:60,altEmoji:"💎"},citadelle:{emoji:"⚡",count:12,speed:2,opacity:.4,sway:30,altEmoji:"✦"},terre_desolee:{emoji:"🔥",count:25,speed:3,opacity:.5,sway:20,altEmoji:"💀"},nexus:{emoji:"🌌",count:18,speed:5,opacity:.6,sway:50,altEmoji:"💫"}};function Mi(a){const t=document.getElementById("ambient-particles");if(!t)return;const e=ge[a]||ge.enchantement;Y&&clearInterval(Y);function i(){if(!document.getElementById("ambient-particles")){clearInterval(Y);return}const r=document.createElement("div"),n=e.altEmoji&&Math.random()>.6,s=(Math.random()-.5)*2*e.sway,d=(Math.random()-.5)*720,o=Math.random()*100,l=e.speed+Math.random()*3,c=8+Math.random()*12;r.textContent=n?e.altEmoji:e.emoji,r.style.cssText=`position:absolute;left:${o}%;top:-20px;font-size:${c}px;
      --p-sway:${s}px;--p-rot:${d}deg;--p-opacity:${e.opacity};
      animation:ambientFall ${l}s linear forwards;pointer-events:none;z-index:0;`,t.appendChild(r),setTimeout(()=>r.remove(),l*1e3+100)}for(let r=0;r<Math.floor(e.count/3);r++)setTimeout(i,r*200);Y=setInterval(i,1e4/e.count)}function Li(a,t){if(!h)return;const e=h.winner==="player",i=document.getElementById("victory-overlay");if(i)if(e){const r=h.playerTeam,n=r.reduce((w,v)=>w+v.maxHp,0),d=r.reduce((w,v)=>w+Math.max(0,v.currentHp),0)/n,o=d>=.7?3:d>=.35?2:1,l=g.getLevelFlames(G,V),c=l===0,p=o>l;let m=(t?le.boss:le.normal)[o]||0;!c&&!p&&(m=Math.floor(m*.3));const u=V+1,x=Math.floor(t?u*8+150:o===3?u*5+80:o===2?u*3+50:u*2+30);let $=c?x:Math.floor(x*.3),b=Math.floor($/3);g.completeLevel(G,V,o),g.addArchireve(m);const I=g.addTeamXp($);g.addProfileXp(b),g.recordBattle(!0),g.updateDailyStat("wins",1),g.updateDailyStat("levels",1),g.checkAchievements(),g.getTeamInstances().forEach(w=>{const v=g.state.ownedCharacters.find(E=>E.id===w.id);v&&(v.currentHp=void 0)});const P=Math.floor(h.elapsedTime/1e3),A=`${Math.floor(P/60)}:${String(P%60).padStart(2,"0")}`,y=document.createElement("div");y.className="victory-banner",y.innerHTML=`
      <div style="font-family:var(--font-title);font-size:44px;letter-spacing:6px;color:#ff6b9d;text-shadow:0 0 30px rgba(255,107,157,0.5);margin-bottom:16px">VICTOIRE</div>
      ${c?'<div style="font-size:12px;color:var(--accent-light);letter-spacing:2px;margin-bottom:8px;background:rgba(232,93,32,0.1);padding:4px 12px;border-radius:20px;border:1px solid rgba(232,93,32,0.3)">🆕 PREMIÈRE VICTOIRE !</div>':""}
      ${p&&!c?'<div style="font-size:12px;color:var(--warning);letter-spacing:2px;margin-bottom:8px">⬆️ AMÉLIORATION !</div>':""}
      <div style="font-size:10px;color:var(--text-muted);margin-bottom:12px">⏱ ${A} · ⚔ ${(h.totalDmgDealt||0).toLocaleString()} dégâts</div>
      <div style="display:flex;justify-content:center;gap:14px;margin:16px 0 24px">
        ${Array.from({length:3},(w,v)=>`<span style="font-size:36px;filter:drop-shadow(0 0 12px #E85D20);transition:all 0.3s ease;${v>=o?"opacity:0.18;filter:grayscale(1)":""}">${t?"🔥":"🍃"}</span>`).join("")}
      </div>
      <div style="display:flex;flex-direction:column;align-items:center;gap:10px;padding:16px 24px;background:rgba(0,0,0,0.25);border-radius:var(--radius-xl);border:1px solid rgba(255,255,255,0.06);margin-bottom:8px">
        <div style="font-size:16px;color:var(--star);letter-spacing:2px;font-weight:700">+${m} ⭐</div>
        <div style="font-size:12px;color:var(--accent)">+${$} XP à l'équipe</div>
        ${I.some(w=>w.leveled)?'<div style="font-size:11px;color:var(--legendaire);font-weight:700">⬆️ Level Up !</div>':""}
        ${!c&&!p?'<div style="font-size:9px;color:var(--text-muted)">Récompenses réduites (déjà complété)</div>':""}
      </div>
    `,i.appendChild(y),setTimeout(()=>{const w=document.createElement("div");w.style.cssText="position:absolute;bottom:60px;left:50%;transform:translateX(-50%);z-index:50;display:flex;gap:12px;animation:fadeIn 0.5s ease";const v=V+1,E=N.find(Z=>Z.id===G),L=E&&v<E.levels;w.innerHTML=`
        ${L?'<button id="next-level-btn" class="btn btn--primary" style="border-radius:var(--radius-xl);padding:14px 28px;font-size:13px;letter-spacing:1px">▶ Niveau suivant</button>':""}
        <button id="back-campaign-btn" class="btn btn--ghost" style="border-radius:var(--radius-xl);padding:14px 24px;font-size:12px">◀ Retour</button>
      `,i.appendChild(w),document.getElementById("next-level-btn")?.addEventListener("click",()=>{M=null,qt({zone:G,level:v})}),document.getElementById("back-campaign-btn")?.addEventListener("click",()=>{gt(),k.navigate("campaign")})},1500)}else g.recordBattle(!1),i.innerHTML=`
      <div style="position:absolute; inset:0; background:rgba(0,0,0,0.8); display:flex; flex-direction:column; align-items:center; justify-content:center; z-index:100; animation: fadeIn 0.5s ease">
        <div style="font-family:var(--font-title); font-size:48px; color:var(--danger); margin-bottom:20px; text-shadow:0 0 20px rgba(220,38,38,0.3)">DÉFAITE</div>
        <div style="font-size:10px;color:var(--text-muted);margin-bottom:20px">⏱ ${Math.floor(h.elapsedTime/1e3)}s</div>
        <div style="display:flex; gap:15px">
          <button class="btn btn--primary" id="retry-btn">🔄 Réessayer</button>
          <button class="btn btn--ghost" id="back-btn">◀ Retour</button>
        </div>
      </div>
    `,document.getElementById("retry-btn").onclick=()=>qt({zone:G,level:V}),document.getElementById("back-btn").onclick=()=>{gt(),k.navigate("campaign")}}const Ot=75,Ft=15;function Vt(){const a=document.getElementById("app"),t=g.state,e=t.pityCount||0,i=t.pityEpic||0,r=t.scories||0,n=Math.min(100,Math.round(e/Ot*100)),s=Math.min(100,Math.round(i/Ft*100)),d=t.archireve>=Q.single,o=t.archireve>=Q.multi;a.innerHTML=`
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
              <span style="font-size:9px;opacity:0.7;letter-spacing:1px">◆ ${Q.single.toLocaleString()} · ×1 Héros</span>
            </button>
            <button class="btn btn--star btn--full" id="char-pull-multi" ${o?"":"disabled"}
              style="padding:14px;display:flex;flex-direction:column;align-items:center;gap:3px">
              <span style="font-size:12px;letter-spacing:2px">BRISER LE SCEAU</span>
              <span style="font-size:9px;opacity:0.7;letter-spacing:1px">◆ ${Q.multi.toLocaleString()} · ×10 — Epique+ garanti</span>
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
              <span style="font-size:9px;opacity:0.7;letter-spacing:1px">◆ ${Q.single.toLocaleString()} · ×1 Item</span>
            </button>
            <button class="btn btn--full" id="item-pull-multi" ${o?"":"disabled"}
              style="padding:14px;display:flex;flex-direction:column;align-items:center;gap:3px;
                background:linear-gradient(135deg,rgba(59,130,246,0.4),rgba(147,51,234,0.2));
                border:1px solid rgba(59,130,246,0.35);color:var(--text-primary)">
              <span style="font-size:12px;letter-spacing:2px">OUVRIR LE COFFRE</span>
              <span style="font-size:9px;opacity:0.7;letter-spacing:1px">◆ ${Q.multi.toLocaleString()} · ×10 — Epique+ garanti</span>
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
              <div style="font-family:var(--font-stat);font-size:12px;color:var(--legendaire)">${e} / ${Ot}</div>
            </div>
            <div class="pity-bar-track"><div class="pity-bar-fill" style="width:${n}%"></div></div>
            <div style="font-size:9px;color:var(--text-muted);letter-spacing:1px">${Ot-e} invocations avant un Legendaire garanti</div>
          </div>
          <!-- Pity Épique -->
          <div class="pity-container" style="margin-bottom:12px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
              <div style="font-family:var(--font-ui);font-size:10px;font-weight:700;letter-spacing:2px;color:var(--epique)">PITY EPIQUE</div>
              <div style="font-family:var(--font-stat);font-size:12px;color:var(--epique)">${i} / ${Ft}</div>
            </div>
            <div class="pity-bar-track"><div class="pity-bar-fill" style="width:${s}%;background:linear-gradient(90deg,rgba(147,51,234,0.4),var(--epique))"></div></div>
            <div style="font-size:9px;color:var(--text-muted);letter-spacing:1px">${Ft-i} invocations avant un Epique garanti</div>
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
            ${[{name:"Rare",color:"var(--rare)",pct:vt.rare},{name:"Epique",color:"var(--epique)",pct:vt.epique},{name:"Legendaire",color:"var(--legendaire)",pct:vt.legendaire},{name:"ULTIMATE",color:"var(--ultimate)",pct:vt.ultimate}].map(l=>`
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
  `,document.getElementById("back-btn").addEventListener("click",()=>k.navigate("home")),document.getElementById("char-pull-single").addEventListener("click",()=>{const l=He();l.success?(yt(1,l.results[0]?.rarity),g.updateDailyStat("pulls",1),ht(l.results)):wt(l.error,"error")}),document.getElementById("char-pull-multi").addEventListener("click",()=>{const l=Ne();l.success?(yt(10,null,l.characters.map(c=>c.rarity)),g.updateDailyStat("pulls",10),ht(l.characters)):wt(l.error,"error")}),document.getElementById("item-pull-single").addEventListener("click",()=>{const l=qe();l.success?(yt(1,l.results[0]?.rarity),g.updateDailyStat("pulls",1),ht(l.results)):wt(l.error,"error")}),document.getElementById("item-pull-multi").addEventListener("click",()=>{const l=Ge();l.success?(yt(10,null,l.characters.map(c=>c.rarity)),g.updateDailyStat("pulls",10),ht(l.characters)):wt(l.error,"error")})}function yt(a,t,e){const i=g.state;i.pityCount=(i.pityCount||0)+a,i.pityEpic=(i.pityEpic||0)+a,i.scories=(i.scories||0)+a*10;const r=e||(t?[t]:[]);for(const n of r)n==="legendaire"||n==="ultimate"?(i.pityCount=0,i.pityEpic=0):n==="epique"&&(i.pityEpic=0);g.save?.()}function ht(a){const t=document.createElement("div");t.className="modal-overlay",t.style.cssText="flex-direction:column;gap:0;background:rgba(0,0,0,0.97)";let e=0;const i={rare:{color:"#4a9eff",glow:"rgba(74,158,255,0.4)",name:"RARE"},epique:{color:"#c44aff",glow:"rgba(196,74,255,0.5)",name:"EPIQUE"},legendaire:{color:"#ffb84a",glow:"rgba(255,184,74,0.5)",name:"LEGENDAIRE"},ultimate:{color:"#ff4a6a",glow:"rgba(255,74,106,0.6)",name:"ULTIMATE"}},r={rare:0,epique:1,legendaire:2,ultimate:3};function n(d){const o=a[d],l=o.rarity||"rare",c=i[l]||i.rare,p=r[l]||0;t.innerHTML=`
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;position:relative;cursor:pointer" id="forge-phase">
        <div style="position:absolute;inset:0;opacity:0;background:radial-gradient(circle, ${c.glow}, transparent 70%);animation:gachaFlash 2s ease forwards"></div>
        <div style="position:relative;width:160px;height:160px;display:flex;align-items:center;justify-content:center">
          <div style="position:absolute;inset:0;border-radius:50%;border:2px solid ${c.color}88;animation:portalRotate 6s linear infinite;box-shadow:0 0 25px ${c.glow}"></div>
          <div style="position:absolute;inset:16px;border-radius:50%;border:1px dashed ${c.color}55;animation:portalRotate 4s linear infinite reverse"></div>
          <div style="font-size:64px;filter:drop-shadow(0 0 30px ${c.glow});animation:crystalGlow 1.5s ease infinite alternate;color:${c.color}">${o.type==="item"?"📦":"&#9874;"}</div>
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
    `;const f=document.getElementById("forge-sparks");if(f){for(let u=0;u<30;u++)setTimeout(()=>{const x=document.createElement("div"),$=Math.random()*Math.PI*2,b=80+Math.random()*200;x.style.cssText="position:absolute;left:50%;top:50%;width:"+(2+Math.random()*3)+"px;height:"+(4+Math.random()*8)+"px;background:linear-gradient("+c.color+",transparent);border-radius:50% 50% 0 0;opacity:0;transform-origin:bottom center;animation:particleBurst 1.2s "+(.6+Math.random()*.6)+"s ease forwards;--dx:"+Math.cos($)*b+"px;--dy:"+Math.sin($)*b+"px;",f.appendChild(x)},u*40);const m=document.createElement("style");m.textContent="@keyframes particleBurst { 0%{transform:translate(-50%,-50%) scale(0);opacity:1} 100%{transform:translate(calc(-50% + var(--dx)),calc(-50% + var(--dy))) scale(0.2);opacity:0} }",t.appendChild(m)}document.getElementById("forge-phase").addEventListener("click",()=>s(d))}function s(d){const o=a[d],l=o.type==="item",c=o.rarity||"rare",p=i[c]||i.rare;let f,m,u,x,$;if(l&&o.item){const b=o.item,I=tt[b.slot]||{name:b.slot,icon:""};f=b.name,m=b.desc||"",u='<div style="font-size:72px;margin:16px 0;filter:drop-shadow(0 0 25px '+p.glow+')">'+(b.icon||"📦")+"</div>";const P=Object.entries(b.stats||{}).map(A=>A[0].toUpperCase()+" +"+A[1]).join(" · ");x='<span class="type-badge" style="background:rgba(74,158,255,0.15);color:#4a9eff">'+I.icon+" "+I.name+'</span><span class="rarity-badge rarity-badge--'+c+'">'+c.toUpperCase()+"</span>",m+='<br><span style="color:var(--accent);font-size:10px;letter-spacing:1px">'+P+"</span>",$="📦 ITEM"}else{const b=o.character;f=b.name,m=b.desc,u='<img src="'+B(b.type)+'" class="sprite sprite--xxl" alt="'+b.name+'" style="filter:drop-shadow(0 0 25px '+p.glow+') drop-shadow(0 4px 8px rgba(0,0,0,0.5));animation:pullRevealSprite 0.6s ease">',x='<span class="type-badge type-badge--'+b.type+'">'+b.type.toUpperCase()+'</span><span class="rarity-badge rarity-badge--'+b.rarity+'">'+b.rarity.toUpperCase()+"</span>",$="⚔️ HÉROS"}t.innerHTML='<div class="modal" style="text-align:center;border-color:'+p.color+";box-shadow:0 0 60px "+p.glow+';min-width:320px;max-width:380px;border-radius:var(--radius-xl);overflow:hidden;position:relative;padding:0;animation:revealSlam 0.5s cubic-bezier(0.2,1.5,0.3,1)"><div style="height:3px;background:linear-gradient(90deg,transparent,'+p.color+',transparent)"></div><div style="padding:var(--space-xl) var(--space-lg)"><div style="font-family:var(--font-stat);font-size:9px;color:'+p.color+';letter-spacing:3px;margin-bottom:4px;opacity:0.7">'+$+'</div><div style="font-family:var(--font-title);font-size:11px;color:'+p.color+";letter-spacing:4px;margin-bottom:var(--space-sm);text-shadow:0 0 15px "+p.glow+'">◆ '+p.name+" ◆</div>"+(o.isNew?'<div style="color:var(--success);font-size:11px;font-weight:700;margin-bottom:var(--space-xs);letter-spacing:2px">NOUVEAU !</div>':"")+(o.levelUp?'<div style="color:var(--warning);font-size:11px;font-weight:700;margin-bottom:var(--space-xs);letter-spacing:2px">NIVEAU + !</div>':"")+'<div style="position:relative;margin:var(--space-md) auto;width:fit-content">'+u+'<div style="position:absolute;inset:-20px;background:radial-gradient(circle,'+p.glow+',transparent 60%);z-index:-1;filter:blur(20px)"></div></div><div style="font-family:var(--font-title);font-size:18px;color:'+p.color+";font-weight:800;margin:var(--space-md) 0 var(--space-sm);letter-spacing:1px;text-shadow:0 0 10px "+p.glow+'">'+f+'</div><div style="display:flex;justify-content:center;gap:var(--space-sm);margin-bottom:var(--space-sm)">'+x+'</div><p style="font-size:11px;color:var(--text-secondary);line-height:1.6;margin-bottom:var(--space-lg)">'+m+'</p><div style="font-size:10px;color:var(--text-muted);margin-bottom:var(--space-md);letter-spacing:1px">'+(d+1)+" / "+a.length+'</div><button class="btn btn--primary btn--full" id="pull-next" style="border-radius:var(--radius-lg)">'+(d<a.length-1?"SUIVANT":"TERMINER")+"</button>"+(a.length>1&&d<a.length-1?'<button class="btn btn--ghost btn--full btn--sm" id="skip-all" style="margin-top:var(--space-xs);font-size:9px;letter-spacing:2px">PASSER TOUT</button>':"")+"</div></div><style>@keyframes pullRevealSprite { 0%{transform:scale(0.2) rotate(-15deg);opacity:0;filter:brightness(3)} 50%{transform:scale(1.15) rotate(3deg)} 100%{transform:scale(1) rotate(0);opacity:1} }@keyframes revealSlam { 0%{transform:scale(0.5) translateY(30px);opacity:0} 60%{transform:scale(1.05) translateY(-5px)} 100%{transform:scale(1) translateY(0);opacity:1} }</style>",document.getElementById("pull-next").addEventListener("click",()=>{d<a.length-1?(e++,n(e)):(t.remove(),Vt())}),document.getElementById("skip-all")?.addEventListener("click",()=>{t.remove(),Vt()})}document.body.appendChild(t),n(0)}function wt(a,t="warning"){const e=document.createElement("div");e.className="toast toast--"+t,e.textContent=a,document.body.appendChild(e),setTimeout(()=>e.remove(),3e3)}let Et="all",It="all",at="rarity";const K={guerrier:"#f87171",mage:"#c084fc",arche:"#86efac",assassin:"#ff6b9d"},st={hp:"HP",atk:"ATK",def:"DEF",spd:"SPD",magAtk:"MAG",magDef:"RES"},fe=["ultimate","legendaire","epique","rare"];function F(){const a=document.getElementById("app"),t=g.state,e=t.team,i=g.getTeamInstances(),r=g.getOwnedInstances();let n=[...r];Et!=="all"&&(n=n.filter(o=>o.type===Et)),It!=="all"&&(n=n.filter(o=>o.rarity===It)),n.sort((o,l)=>at==="rarity"?fe.indexOf(o.rarity||"rare")-fe.indexOf(l.rarity||"rare"):at==="level"?l.level-o.level:at==="atk"?l.stats.atk+l.stats.magAtk-(o.stats.atk+o.stats.magAtk):0);const s=_i(i),d=i.reduce((o,l)=>o+Object.values(l.stats).reduce((c,p)=>c+p,0),0);a.innerHTML=`
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
              ${[0,1,2,3].map(o=>{const l=e[o];if(l){const c=t.ownedCharacters.find(f=>f.id===l),p=ct(l,c?.level||1)||g.getFusedCharacterData(l);if(p){const f=`var(--${p.rarity||"rare"})`,m=K[p.type]||"var(--accent)",u=Math.floor(100*Math.pow(1.1,p.level-1)),x=Math.round((c?.xp||0)/u*100);return`
                      <div class="team-slot-card" data-slot="${o}" data-char-id="${l}" style="
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
                        <div style="position:absolute;top:8px;left:10px;font-family:var(--font-stat);font-size:9px;color:var(--text-muted);letter-spacing:1px">${o+1}</div>

                        <!-- Remove button -->
                        <button class="remove-from-team" data-slot="${o}" style="
                          position:absolute;top:8px;right:8px;width:22px;height:22px;border-radius:50%;
                          background:rgba(220,38,38,0.1);border:1px solid rgba(220,38,38,0.25);
                          color:var(--danger);cursor:pointer;font-size:10px;
                          display:flex;align-items:center;justify-content:center;
                          transition:all 0.2s;z-index:2;
                        ">✕</button>

                        <img src="${B((p.type||"").split("/")[0])}" class="sprite sprite--lg sprite--animate" alt="${p.name}" style="margin:4px auto 10px;display:block">

                        <div style="font-family:var(--font-title);font-size:11px;color:${f};font-weight:700;letter-spacing:1px;margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis" title="${p.name}">${p.name.length>16?p.name.split(" ")[0]:p.name}</div>
                        <div style="font-family:var(--font-stat);font-size:9px;color:${m};letter-spacing:2px;margin-bottom:8px">${(p.type||"").toUpperCase()} · NIV.${p.level}</div>

                        <!-- XP Bar -->
                        <div style="height:4px;background:rgba(0,0,0,0.5);border-radius:2px;overflow:hidden;border:1px solid rgba(200,155,60,0.04)">
                          <div style="height:100%;width:${x}%;background:var(--accent-gradient);border-radius:2px;transition:width 0.6s"></div>
                        </div>

                        <!-- Mini stats row -->
                        <div style="display:flex;justify-content:space-around;margin-top:10px">
                          ${["hp","atk","spd"].map($=>`
                            <div style="text-align:center">
                              <div style="font-family:var(--font-stat);font-size:13px;font-weight:700;color:var(--text-primary)">${p.stats[$]}</div>
                              <div style="font-size:7px;color:var(--text-muted);letter-spacing:1px">${st[$]}</div>
                            </div>
                          `).join("")}
                        </div>
                      </div>
                    `}}return`
                  <div class="team-slot-empty" data-slot="${o}" style="
                    background:rgba(15,10,5,0.4);
                    border:1px dashed rgba(200,155,60,0.08);
                    border-radius:10px;
                    padding:36px 16px;
                    text-align:center;
                    cursor:default;
                    transition:border-color 0.2s;
                    position:relative;
                  ">
                    <div style="position:absolute;top:8px;left:10px;font-family:var(--font-stat);font-size:9px;color:var(--text-muted);letter-spacing:1px">${o+1}</div>
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
                  <div style="font-family:var(--font-stat);font-size:18px;color:var(--legendaire);font-weight:700;margin-top:4px">${s.label}</div>
                </div>
                <div style="text-align:right">
                  <div style="font-family:var(--font-stat);font-size:22px;font-weight:700;color:var(--accent-light)">${d}</div>
                  <div style="font-size:8px;color:var(--text-muted);letter-spacing:2px">PUISSANCE</div>
                </div>
              </div>
              ${s.bonus?`
                <div style="font-size:10px;color:var(--text-secondary);padding:8px 10px;background:rgba(200,155,60,0.04);border-radius:6px;border:1px solid rgba(200,155,60,0.06)">
                  ⚡ ${s.bonus}
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
                    ${Object.values(st).map(o=>`<th style="text-align:center;padding:6px 4px;font-size:8px;letter-spacing:1px;color:var(--text-muted);border-bottom:1px solid var(--border-metal)">${o}</th>`).join("")}
                  </tr>
                </thead>
                <tbody>
                  ${i.map((o,l)=>(K[o.type],`
                      <tr style="background:${l%2?"transparent":"rgba(200,155,60,0.015)"}">
                        <td style="padding:8px;border-bottom:1px solid rgba(200,155,60,0.03)">
                          <div style="font-weight:700;font-size:11px;color:var(--text-primary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:80px">${o.name.split(" ")[0]}</div>
                        </td>
                        ${Object.keys(st).map(c=>{const p=Math.max(...i.map(u=>u.stats[c]||0)),f=o.stats[c]||0;return`<td style="padding:6px 4px;text-align:center;border-bottom:1px solid rgba(200,155,60,0.03)">
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
              <div style="font-family:var(--font-stat);font-size:11px;color:var(--text-muted);letter-spacing:1px">${n.length} / ${r.length}</div>
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
              ${["all","guerrier","mage","arche","assassin"].map(o=>{const l=o===Et,c=o==="all"?"var(--accent)":K[o]||"var(--accent)";return`
                  <button class="filter-type-btn" data-filter-type="${o}" style="
                    padding:6px 14px;border-radius:4px;font-family:var(--font-ui);font-size:10px;font-weight:700;
                    letter-spacing:1px;cursor:pointer;transition:all 0.2s;text-transform:uppercase;
                    background:${l?c+"20":"transparent"};
                    border:1px solid ${l?c+"60":"var(--border-metal)"};
                    color:${l?c:"var(--text-muted)"};
                  ">${o==="all"?"TOUS":o.toUpperCase()}</button>
                `}).join("")}
            </div>

            <!-- Rarity + Sort -->
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              ${["all","rare","epique","legendaire","ultimate"].map(o=>{const l=o===It,c=o==="all"?"var(--text-muted)":`var(--${o})`;return`
                  <button class="filter-rarity-btn" data-filter-rarity="${o}" style="
                    padding:5px 11px;border-radius:4px;font-family:var(--font-ui);font-size:9px;font-weight:700;
                    letter-spacing:1px;cursor:pointer;transition:all 0.2s;text-transform:uppercase;
                    background:${l?c+"15":"transparent"};
                    border:1px solid ${l?c+"40":"var(--border)"};
                    color:${l?c:"var(--text-muted)"};
                  ">${o==="all"?"TOUS":o.toUpperCase()}</button>
                `}).join("")}

              <div style="width:1px;height:18px;background:var(--border-metal);margin:0 6px"></div>

              ${["rarity","level","atk"].map(o=>{const l=o===at;return`
                  <button class="sort-btn" data-sort="${o}" style="
                    padding:5px 11px;border-radius:4px;font-family:var(--font-ui);font-size:9px;font-weight:700;
                    letter-spacing:1px;cursor:pointer;transition:all 0.2s;text-transform:uppercase;
                    background:${l?"rgba(192,57,11,0.12)":"transparent"};
                    border:1px solid ${l?"rgba(192,57,11,0.3)":"var(--border)"};
                    color:${l?"var(--accent-light)":"var(--text-muted)"};
                  ">${o==="atk"?"⚔ ATK":o==="level"?"↑ NIV":"★ RARETÉ"}</button>
                `}).join("")}
            </div>
          </div>

          <!-- Character Grid (scrollable) -->
          <div style="flex:1;overflow-y:auto;padding:20px 28px;scrollbar-width:thin;scrollbar-color:rgba(200,155,60,0.1) transparent">
            ${n.length===0?`
              <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:300px;color:var(--text-muted);gap:var(--space-md)">
                <div style="font-size:40px;opacity:0.15">⚔</div>
                <div style="font-family:var(--font-title);font-size:11px;letter-spacing:3px">AUCUN PERSONNAGE TROUVÉ</div>
              </div>
            `:`
              <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:14px">
                ${n.map(o=>{const l=e.includes(o.id),c=`var(--${o.rarity||"rare"})`,p=K[o.type]||"var(--accent)",f=t.ownedCharacters.find(x=>x.id===o.id),m=Math.floor(100*Math.pow(1.1,o.level-1)),u=Math.round((f?.xp||0)/m*100);return`
                    <div class="roster-card ${l?"roster-card--in-team":""}" data-char-id="${o.id}" style="
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
                      <div style="position:absolute;top:7px;left:8px;font-family:var(--font-stat);font-size:7px;font-weight:700;color:${c};letter-spacing:1px">${(o.rarity||"").toUpperCase()}</div>

                      <img src="${B((o.type||"").split("/")[0])}" class="sprite sprite--md" alt="${o.name}" style="margin:6px auto 8px;display:block">

                      <div style="font-family:var(--font-title);font-size:10px;color:${c};font-weight:700;letter-spacing:0.5px;margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o.name}</div>

                      <div style="display:flex;align-items:center;justify-content:center;gap:6px;margin-bottom:8px">
                        <span style="font-size:8px;color:${p};letter-spacing:1px;padding:2px 6px;border-radius:3px;background:${p}10;border:1px solid ${p}25">${(o.type||"").toUpperCase()}</span>
                        <span style="font-family:var(--font-stat);font-size:9px;color:var(--text-muted)">NIV.${o.level}</span>
                      </div>

                      <!-- XP Bar -->
                      <div style="height:3px;background:rgba(0,0,0,0.5);border-radius:2px;overflow:hidden;margin-bottom:8px">
                        <div style="height:100%;width:${u}%;background:${c};opacity:0.7;border-radius:2px"></div>
                      </div>

                      <!-- Mini stat icons -->
                      <div style="display:flex;justify-content:space-around">
                        ${[{stat:"hp",icon:"♥",color:"#EF4444"},{stat:"atk",icon:"⚔",color:"#f87171"},{stat:"spd",icon:"↗",color:"#C89B3C"}].map(x=>`
                          <div style="text-align:center">
                            <div style="font-size:8px;color:${x.color};margin-bottom:1px">${x.icon}</div>
                            <div style="font-family:var(--font-stat);font-size:10px;font-weight:700;color:var(--text-secondary)">${o.stats[x.stat]}</div>
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
  `,Bi(t,e)}function Bi(a,t){document.getElementById("back-btn")?.addEventListener("click",()=>k.navigate("home")),document.querySelectorAll(".filter-type-btn").forEach(e=>{e.addEventListener("click",()=>{Et=e.dataset.filterType,F()})}),document.querySelectorAll(".filter-rarity-btn").forEach(e=>{e.addEventListener("click",()=>{It=e.dataset.filterRarity,F()})}),document.querySelectorAll(".sort-btn").forEach(e=>{e.addEventListener("click",()=>{at=e.dataset.sort,F()})}),document.querySelectorAll(".remove-from-team").forEach(e=>{e.addEventListener("click",i=>{i.stopPropagation();const r=[...a.team];r[parseInt(e.dataset.slot)]=null,g.setTeam(r),F()})}),document.querySelectorAll(".roster-card:not(.roster-card--in-team)").forEach(e=>{e.addEventListener("click",()=>{const i=e.dataset.charId;if(t.includes(i))return;const r=t.indexOf(null);if(r===-1){Pi(i);return}const n=[...a.team];n[r]=i,g.setTeam(n),Ri(e),setTimeout(()=>F(),250)}),e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-4px) scale(1.02)",e.style.borderColor="rgba(200,155,60,0.25)",e.style.boxShadow="0 8px 30px rgba(0,0,0,0.5), 0 0 15px rgba(192,57,11,0.08)"}),e.addEventListener("mouseleave",()=>{e.style.transform="",e.style.borderColor="",e.style.boxShadow=""}),e.addEventListener("contextmenu",i=>{i.preventDefault(),me(e.dataset.charId)})}),document.querySelectorAll(".team-slot-card").forEach(e=>{e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-3px)",e.style.borderColor="rgba(200,155,60,0.25)",e.style.boxShadow="0 6px 20px rgba(0,0,0,0.5), 0 0 12px rgba(192,57,11,0.1)"}),e.addEventListener("mouseleave",()=>{e.style.transform="",e.style.borderColor="",e.style.boxShadow=""}),e.addEventListener("click",i=>{i.target.closest(".remove-from-team")||me(e.dataset.charId)})}),document.getElementById("btn-optimize")?.addEventListener("click",()=>{const e=Di();e&&(g.setTeam(e),F())}),document.getElementById("btn-clear-all")?.addEventListener("click",()=>{g.setTeam([null,null,null,null]),F()})}function Ri(a){a.style.transition="all 0.25s cubic-bezier(0.34,1.56,0.64,1)",a.style.transform="scale(0.92)",a.style.opacity="0.5"}function Pi(a){const t=g.state,e=document.createElement("div");e.className="modal-overlay";const i=t.ownedCharacters.find(s=>s.id===a),r=ct(a,i?.level||1)||g.getFusedCharacterData(a);if(!r)return;const n=`var(--${r.rarity||"rare"})`;e.innerHTML=`
    <div class="modal" style="text-align:center;max-width:400px;border-radius:12px;padding:32px">
      <div style="font-family:var(--font-title);font-size:11px;letter-spacing:3px;color:var(--text-muted);margin-bottom:20px">REMPLACER QUI ?</div>

      <div style="display:flex;align-items:center;gap:12px;justify-content:center;margin-bottom:24px;padding:14px;background:rgba(200,155,60,0.04);border-radius:8px;border:1px solid rgba(200,155,60,0.08)">
        <img src="${B((r.type||"").split("/")[0])}" class="sprite sprite--md" alt="${r.name}">
        <div style="text-align:left">
          <div style="font-family:var(--font-title);font-size:13px;color:${n};font-weight:700">${r.name}</div>
          <div style="font-size:10px;color:var(--text-muted);letter-spacing:1px;margin-top:2px">${r.type.toUpperCase()} · NIV.${r.level}</div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:8px">
        ${t.team.map((s,d)=>{if(!s)return"";const o=t.ownedCharacters.find(p=>p.id===s),l=ct(s,o?.level||1)||g.getFusedCharacterData(s);if(!l)return"";const c=K[l.type]||"var(--accent)";return`
            <button class="swap-btn" data-slot="${d}" style="
              display:flex;align-items:center;gap:12px;padding:12px 16px;
              background:rgba(20,12,6,0.8);border:1px solid var(--border-metal);
              border-radius:8px;cursor:pointer;transition:all 0.2s;
              color:var(--text-primary);font-family:var(--font-ui);width:100%;text-align:left;
            ">
              <img src="${B((l.type||"").split("/")[0])}" class="sprite sprite--sm" alt="${l.name}">
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
  `,document.body.appendChild(e),e.querySelectorAll(".swap-btn").forEach(s=>{s.addEventListener("mouseenter",()=>{s.style.borderColor="var(--accent)",s.style.background="rgba(192,57,11,0.08)"}),s.addEventListener("mouseleave",()=>{s.style.borderColor="var(--border-metal)",s.style.background="rgba(20,12,6,0.8)"}),s.addEventListener("click",()=>{const d=[...t.team];d[parseInt(s.dataset.slot)]=a,g.setTeam(d),e.remove(),F()})}),document.getElementById("swap-cancel").addEventListener("click",()=>e.remove()),e.addEventListener("click",s=>{s.target===e&&e.remove()})}function me(a){const e=g.state.ownedCharacters.find(m=>m.id===a);if(!e)return;const i=ct(a,e.level)||g.getFusedCharacterData(a);if(!i)return;const r=K[i.type]||"var(--accent)",n=`var(--${i.rarity||"rare"})`,s=g.getCharacterBonusStats(a);Object.values(s).some(m=>m>0);const d=Math.floor(100*Math.pow(1.1,i.level-1)),o=Math.round((e?.xp||0)/d*100),l=120,c=ue(i.stats,l*.42),p=[.33,.66,1].map(m=>ue({hp:1,atk:1,def:1,spd:1,magAtk:1,magDef:1},l*.42*m)),f=document.createElement("div");f.className="modal-overlay",f.innerHTML=`
    <div class="modal" style="max-width:520px;border-radius:14px;padding:0;overflow:hidden;border-color:rgba(200,155,60,0.15)">
      <!-- Rarity accent top -->
      <div style="height:3px;background:linear-gradient(90deg,transparent,${n},transparent)"></div>

      <div style="padding:28px 32px">
        <!-- Header -->
        <div style="display:flex;align-items:center;gap:20px;margin-bottom:24px">
          <div style="position:relative">
            <img src="${B((i.type||"").split("/")[0])}" class="sprite sprite--xl sprite--animate" alt="${i.name}"
                 style="filter:drop-shadow(0 0 18px ${n})">
            <div style="position:absolute;bottom:-4px;right:-4px;background:var(--bg-surface-solid);border:2px solid ${n};
              border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;
              font-family:var(--font-stat);font-weight:900;font-size:12px;color:${n}">${i.level}</div>
          </div>
          <div style="flex:1">
            <div style="font-family:var(--font-title);font-size:18px;font-weight:800;color:${n};letter-spacing:1px;margin-bottom:6px">${i.name}</div>
            <div style="display:flex;gap:8px;margin-bottom:8px;flex-wrap:wrap">
              <span style="font-size:9px;color:${r};letter-spacing:1px;padding:3px 10px;border-radius:3px;background:${r}15;border:1px solid ${r}30">${(i.type||"").toUpperCase()}</span>
              <span style="font-size:9px;color:${n};letter-spacing:1px;padding:3px 10px;border-radius:3px;background:${n}15;border:1px solid ${n}30">${(i.rarity||"").toUpperCase()}</span>
            </div>
            <p style="font-size:11px;color:var(--text-secondary);line-height:1.5;font-style:italic">${i.desc||""}</p>
          </div>
        </div>

        <!-- Radar + Stats Grid side by side -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px">
          <!-- Radar Chart -->
          <div style="background:rgba(0,0,0,0.2);border:1px solid var(--border);border-radius:10px;padding:16px;display:flex;align-items:center;justify-content:center">
            <svg viewBox="0 0 ${l} ${l}" style="width:${l}px;height:${l}px">
              ${p.map(m=>`<polygon points="${m}" fill="none" stroke="rgba(200,155,60,0.1)" stroke-width="0.8"/>`).join("")}
              ${Oi(l*.42,l/2).map(([m,u])=>`<line x1="${l/2}" y1="${l/2}" x2="${m}" y2="${u}" stroke="rgba(200,155,60,0.06)" stroke-width="0.5"/>`).join("")}
              <polygon points="${c}" fill="${r}20" stroke="${r}" stroke-width="1.5" opacity="0.9"/>
              ${Fi(i.stats,l*.42,l/2)}
            </svg>
          </div>

          <!-- Stats Grid -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
            ${Object.entries(st).map(([m,u])=>{const x=i.stats[m]||0,$=s[m]||0,b=x+$;return`
                <div style="padding:8px;background:rgba(0,0,0,0.25);border-radius:6px;border:1px solid var(--border);text-align:center">
                  <div style="font-size:7px;color:var(--text-muted);letter-spacing:2px;margin-bottom:3px">${u}</div>
                  <div style="font-family:var(--font-stat);font-size:18px;font-weight:700;color:var(--text-bright);line-height:1">${b}</div>
                  ${$>0?`<div style="font-size:9px;color:var(--legendaire);font-weight:700;margin-top:2px">+${$}</div>`:""}
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
            <div style="height:100%;width:${o}%;background:var(--accent-gradient);border-radius:3px"></div>
          </div>
        </div>

        <!-- Skills -->
        <div style="font-family:var(--font-title);font-size:9px;letter-spacing:3px;color:var(--text-muted);margin-bottom:12px">— CAPACITES —</div>
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:24px">
          ${i.skills.map(m=>`
            <div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(0,0,0,0.2);border-radius:6px;border:1px solid var(--border)">
              <div style="font-size:18px;width:28px;text-align:center;flex-shrink:0">${m.icon}</div>
              <div style="flex:1">
                <div style="font-size:11px;font-weight:700;color:var(--text-bright)">${m.name}</div>
                <div style="font-size:9px;color:var(--text-secondary);margin-top:2px">${m.desc||""}</div>
              </div>
              <div style="text-align:right;flex-shrink:0">
                <div style="font-family:var(--font-stat);font-size:12px;font-weight:700;color:${m.type==="heal"?"var(--success)":m.type==="magical"?"#c084fc":"var(--accent-light)"}">
                  ${m.power>0?m.power:"—"}
                </div>
                <div style="font-size:8px;color:var(--text-muted)">${m.accuracy}%</div>
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
  `,document.body.appendChild(f),document.getElementById("detail-close").addEventListener("click",()=>f.remove()),f.addEventListener("click",m=>{m.target===f&&f.remove()})}function _i(a){if(!a.length)return{label:"Equipe vide",bonus:""};const t={};a.forEach(r=>{t[r.type]=(t[r.type]||0)+1});const e=Object.entries(t).sort((r,n)=>n[1]-r[1])[0],i=e[0].charAt(0).toUpperCase()+e[0].slice(1);return e[1]===4?{label:`Meute ${i}`,bonus:`+15% toutes les stats (${i})`}:e[1]===3?{label:`Formation ${i}`,bonus:`+10% ATK +5% SPD (${i})`}:e[1]===2?{label:`Duo ${i}`,bonus:`+5% ATK (${i})`}:Object.keys(t).length===4?{label:"Composition Mixte",bonus:"+3% SPD globale (flexibilite)"}:{label:"Standard",bonus:""}}function Di(){const a=g.state.ownedCharacters;return a.length<1?null:a.map(e=>{const i=R.find(n=>n.id===e.id)||g.getFusedCharacterData(e.id);if(!i)return null;const r={rare:1,epique:1.3,legendaire:1.7,ultimate:2.2,semi_ultimate:3.4,supreme:22}[i.rarity]||1;return{id:e.id,score:e.level*r}}).filter(Boolean).sort((e,i)=>i.score-e.score).slice(0,4).map(e=>e.id)}const ie=["hp","atk","def","spd","magAtk","magDef"],ae=a=>a*2*Math.PI/6-Math.PI/2;function ue(a,t){const e={hp:800,atk:200,def:200,spd:150,magAtk:220,magDef:200};return ie.map((i,r)=>{const d=Math.min(a[i]||0,e[i])/(e[i]||1)*t,o=ae(r),l=60+d*Math.cos(o),c=60+d*Math.sin(o);return`${l.toFixed(1)},${c.toFixed(1)}`}).join(" ")}function Oi(a,t){return ie.map((e,i)=>{const r=ae(i);return[t+a*Math.cos(r),t+a*Math.sin(r)]})}function Fi(a,t,e){return ie.map((i,r)=>{const n=ae(r),s=t+14,d=e+s*Math.cos(n),o=e+s*Math.sin(n);return`<text x="${d.toFixed(1)}" y="${o.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" fill="rgba(255,107,157,0.6)" font-size="8" font-family="DM Sans">${st[i]}</text>`}).join("")}const ji=[{id:"warrior",emoji:"⚔️",label:"Guerrier"},{id:"mage",emoji:"🔮",label:"Mage"},{id:"archer",emoji:"🏹",label:"Archer"},{id:"assassin",emoji:"🗡️",label:"Assassin"},{id:"paladin",emoji:"🛡️",label:"Paladin"},{id:"necro",emoji:"💀",label:"Nécromant"},{id:"dragon",emoji:"🐉",label:"Dragon"},{id:"wolf",emoji:"🐺",label:"Loup"},{id:"demon",emoji:"😈",label:"Démon"},{id:"phoenix",emoji:"🦅",label:"Phénix"},{id:"ghost",emoji:"👻",label:"Spectre"},{id:"king",emoji:"👑",label:"Roi"},{id:"samurai",emoji:"🥷",label:"Shinobi"},{id:"fire",emoji:"🔥",label:"Brasier"},{id:"skull",emoji:"💠",label:"Runique"},{id:"star",emoji:"⭐",label:"Étoile"}],et=[{id:"gold",label:"Or",from:"#7A5A1A",to:"#E8B84C"},{id:"ember",label:"Braise",from:"#8B2500",to:"#F07030"},{id:"royal",label:"Royal",from:"#1A0A4A",to:"#7B3FEE"},{id:"blood",label:"Sang",from:"#4A0808",to:"#CC2222"},{id:"ocean",label:"Océan",from:"#0A2040",to:"#0070DD"},{id:"forest",label:"Forêt",from:"#0A2A10",to:"#ABD473"},{id:"silver",label:"Acier",from:"#1A1A2A",to:"#9D9D9D"},{id:"sakura",label:"Sakura",from:"#2A0A1A",to:"#FF6B9D"}];function Ae(){const a=document.getElementById("app"),t=g.state,e=t.profile||{},i=e.pseudo||"Héros",r=e.avatar||"⚔️",n=e.avatarType||"preset",s=e.customImg||null,d=e.bannerId||"gold",o=e.region||"Monde",l=e.level||1,c=e.xp||0,p=l*100,f=Math.min(100,Math.round(c/p*100)),m=t.totalBattles||0,u=t.totalWins||0,x=m-u,$=m>0?Math.round(u/m*100):0,b=et.find(y=>y.id===d)||et[0];a.innerHTML=`
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
                  ${n==="custom"&&s?`<img src="${s}" style="width:100%;height:100%;object-fit:cover">`:`<span>${r}</span>`}
                  <!-- Level badge -->
                  <div style="
                    position:absolute;bottom:-1px;right:-1px;
                    background:linear-gradient(180deg,#8B6914,#C8963C);
                    color:#1A0A00;font-family:var(--font-title);font-weight:900;
                    font-size:10px;padding:3px 7px;border-radius:2px 0 4px 0;
                    box-shadow:0 0 10px rgba(200,150,60,0.3);
                  ">NIV.${l}</div>
                </div>

                <!-- Pseudo -->
                <div style="margin-top:14px;text-align:center">
                  <div id="pseudo-display" style="
                    font-family:var(--font-title);font-size:20px;font-weight:700;
                    color:var(--text-bright);letter-spacing:2px;margin-bottom:4px;
                  ">${i}</div>
                  <div style="font-family:var(--font-stat);font-size:9px;color:var(--text-muted);letter-spacing:3px">
                    ${o.toUpperCase()}
                  </div>
                </div>

                <!-- XP Bar -->
                <div style="width:100%;margin-top:16px">
                  <div style="display:flex;justify-content:space-between;margin-bottom:5px">
                    <span style="font-family:var(--font-title);font-size:9px;color:rgba(200,150,60,0.5);letter-spacing:3px">EXPÉRIENCE</span>
                    <span style="font-family:var(--font-stat);font-size:9px;color:var(--text-muted)">${c} / ${p}</span>
                  </div>
                  <div style="height:6px;background:rgba(0,0,0,0.8);border-radius:1px;overflow:hidden;border:1px solid rgba(200,150,60,0.08)">
                    <div style="height:100%;width:${f}%;background:linear-gradient(90deg,#8B6914,#C8963C,#E8B84C);box-shadow:0 0 8px rgba(200,150,60,0.4);transition:width 0.8s ease"></div>
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
              ${[{label:"COMBATS",val:m,color:"var(--text-bright)"},{label:"VICTOIRES",val:u,color:"var(--peucommun)"},{label:"DÉFAITES",val:x,color:"var(--danger)"},{label:"WIN RATE",val:$+"%",color:"var(--accent-light)"},{label:"HÉROS",val:t.ownedCharacters.length,color:"var(--rare-light)"}].map((y,w)=>`
                <div style="
                  display:flex;justify-content:space-between;align-items:center;
                  padding:12px 18px;
                  ${w>0?"border-top:1px solid rgba(200,150,60,0.06)":""}
                ">
                  <span style="font-family:var(--font-title);font-size:9px;letter-spacing:3px;color:var(--text-muted)">${y.label}</span>
                  <span style="font-family:var(--font-stat);font-size:15px;font-weight:700;color:${y.color}">${y.val}</span>
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
                ${ji.map(y=>`
                  <button
                    class="avatar-btn"
                    data-avatar-id="${y.id}"
                    data-emoji="${y.emoji}"
                    title="${y.label}"
                    style="
                      aspect-ratio:1;padding:8px;border-radius:3px;
                      background:${r===y.emoji&&n!=="custom"?"rgba(200,150,60,0.18)":"rgba(0,0,0,0.5)"};
                      border:1px solid ${r===y.emoji&&n!=="custom"?"rgba(200,150,60,0.5)":"rgba(200,150,60,0.08)"};
                      cursor:pointer;font-size:24px;
                      transition:all 0.15s ease;
                      display:flex;align-items:center;justify-content:center;
                    "
                  >${y.emoji}</button>
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
                  ${n==="custom"&&s?`<img src="${s}" style="width:100%;height:100%;object-fit:cover">`:"🖼️"}
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
                ${et.map(y=>`
                  <button
                    class="banner-btn"
                    data-banner-id="${y.id}"
                    title="${y.label}"
                    style="
                      height:44px;border-radius:3px;cursor:pointer;position:relative;overflow:hidden;
                      background:linear-gradient(135deg,${y.from},${y.to});
                      border:2px solid ${d===y.id?"rgba(255,255,255,0.6)":"rgba(0,0,0,0.5)"};
                      transition:all 0.15s ease;
                    "
                  >
                    ${d===y.id?'<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:14px">✓</div>':""}
                    <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.5);padding:2px 4px;font-family:var(--font-title);font-size:7px;letter-spacing:1px;text-align:center;color:rgba(255,255,255,0.8)">${y.label.toUpperCase()}</div>
                  </button>
                `).join("")}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  `;const I=document.getElementById("pseudo-input");I.addEventListener("focus",()=>{I.style.borderColor="rgba(200,150,60,0.55)",I.style.boxShadow="0 0 0 2px rgba(200,150,60,0.08)"}),I.addEventListener("blur",()=>{I.style.borderColor="rgba(200,150,60,0.25)",I.style.boxShadow="none"}),I.addEventListener("input",()=>{document.getElementById("pseudo-count").textContent=`${I.value.length}/18`}),document.getElementById("save-pseudo").addEventListener("click",()=>{const y=I.value.trim(),w=document.getElementById("pseudo-feedback");if(!y||y.length<2){w.textContent="Minimum 2 caractères !",w.style.color="var(--danger)";return}g.state.profile.pseudo=y,g.save(),document.getElementById("pseudo-display").textContent=y,w.textContent="✓ Nom sauvegardé",w.style.color="var(--peucommun)",setTimeout(()=>{w.textContent=""},2500)});const P=["Lord","Dark","Dire","Iron","Storm","Shadow","Blood","Silent","Brave","Void"],A=["Fang","Blade","Rune","Crest","Ash","Forge","Bane","Soul","Claw","Mark"];document.getElementById("random-pseudo").addEventListener("click",()=>{const y=P[Math.floor(Math.random()*P.length)],w=A[Math.floor(Math.random()*A.length)];I.value=y+w,document.getElementById("pseudo-count").textContent=`${I.value.length}/18`,I.focus()}),document.querySelectorAll(".avatar-btn").forEach(y=>{y.addEventListener("click",()=>{const w=y.dataset.emoji;document.querySelectorAll(".avatar-btn").forEach(v=>{v.style.background="rgba(0,0,0,0.5)",v.style.borderColor="rgba(200,150,60,0.08)"}),y.style.background="rgba(200,150,60,0.18)",y.style.borderColor="rgba(200,150,60,0.5)",document.getElementById("avatar-display").innerHTML=`
        <span>${w}</span>
        <div style="position:absolute;bottom:-1px;right:-1px;background:linear-gradient(180deg,#8B6914,#C8963C);color:#1A0A00;font-family:var(--font-title);font-weight:900;font-size:10px;padding:3px 7px;border-radius:2px 0 4px 0;">${l}</div>
      `,g.state.profile.avatar=w,g.state.profile.avatarType="preset",g.state.profile.customImg=null,g.save(),U("Emblème mis à jour !")})}),document.getElementById("upload-avatar").addEventListener("click",()=>{document.getElementById("avatar-file").click()}),document.getElementById("avatar-file").addEventListener("change",y=>{const w=y.target.files[0];if(!w)return;if(w.size>2*1024*1024){U("Image trop lourde (max 2MB)","error");return}const v=new FileReader;v.onload=E=>{const L=E.target.result;document.getElementById("custom-preview").innerHTML=`
        <img src="${L}" style="width:100%;height:100%;object-fit:cover">
      `,document.getElementById("avatar-display").innerHTML=`
        <img src="${L}" style="width:100%;height:100%;object-fit:cover">
        <div style="position:absolute;bottom:-1px;right:-1px;background:linear-gradient(180deg,#8B6914,#C8963C);color:#1A0A00;font-family:var(--font-title);font-weight:900;font-size:10px;padding:3px 7px;border-radius:2px 0 4px 0;">${l}</div>
      `,document.querySelectorAll(".avatar-btn").forEach(Z=>{Z.style.background="rgba(0,0,0,0.5)",Z.style.borderColor="rgba(200,150,60,0.08)"}),g.state.profile.avatarType="custom",g.state.profile.customImg=L,g.save(),U("Image sauvegardée !")},v.readAsDataURL(w)}),document.querySelectorAll(".banner-btn").forEach(y=>{y.addEventListener("click",()=>{const w=y.dataset.bannerId,v=et.find(E=>E.id===w);v&&(document.querySelectorAll(".banner-btn").forEach(E=>{E.style.border="2px solid rgba(0,0,0,0.5)",E.querySelector("div")?.remove(),E.innerHTML=`<div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.5);padding:2px 4px;font-family:var(--font-title);font-size:7px;letter-spacing:1px;text-align:center;color:rgba(255,255,255,0.8)">${et.find(L=>L.id===E.dataset.bannerId)?.label.toUpperCase()}</div>`}),y.style.border="2px solid rgba(255,255,255,0.6)",y.innerHTML=`
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:14px">✓</div>
        <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.5);padding:2px 4px;font-family:var(--font-title);font-size:7px;letter-spacing:1px;text-align:center;color:rgba(255,255,255,0.8)">${v.label.toUpperCase()}</div>
      `,document.getElementById("profile-banner").style.background=`linear-gradient(135deg,${v.from},${v.to})`,g.state.profile.bannerId=w,g.save(),U("Bannière mise à jour !"))})}),document.getElementById("back-btn").addEventListener("click",()=>k.navigate("home")),document.getElementById("export-save").addEventListener("click",()=>{const y=JSON.stringify(g.state,null,2),w=new Blob([y],{type:"application/json"}),v=URL.createObjectURL(w),E=document.createElement("a");E.href=v,E.download=`rytiger_save_${new Date().toISOString().slice(0,10)}.json`,E.click(),URL.revokeObjectURL(v),U("Sauvegarde exportée !")}),document.getElementById("import-save").addEventListener("click",()=>{document.getElementById("import-file").click()}),document.getElementById("import-file").addEventListener("change",y=>{const w=y.target.files[0];if(!w)return;const v=new FileReader;v.onload=E=>{try{const L=JSON.parse(E.target.result);if(!L.ownedCharacters||!L.team){U("Fichier invalide !","error");return}if(!confirm("Écraser la sauvegarde actuelle ?"))return;Object.assign(g.state,L),g.save(),U("Importée ! Rechargement..."),setTimeout(()=>Ae(),600)}catch{U("Erreur de lecture","error")}},v.readAsText(w)}),document.getElementById("reset-save").addEventListener("click",()=>{confirm(`⚠️ Supprimer TOUTE la progression ?
Cette action est irréversible !`)&&g.reset()})}function U(a,t="success"){const e={success:{bg:"rgba(30,255,0,0.06)",border:"rgba(30,255,0,0.25)",text:"#1EFF00"},error:{bg:"rgba(200,34,34,0.1)",border:"rgba(200,34,34,0.35)",text:"#FF6060"}},i=e[t]||e.success,r=document.createElement("div");r.style.cssText=`
    position:fixed;bottom:32px;left:50%;transform:translateX(-50%);
    padding:10px 24px;border-radius:2px;
    background:${i.bg};border:1px solid ${i.border};color:${i.text};
    font-family:var(--font-title);font-size:10px;letter-spacing:2px;text-transform:uppercase;
    z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,0.7);
    animation:toastIn 0.3s cubic-bezier(0.34,1.56,0.64,1);
  `,r.textContent=a,document.body.appendChild(r),setTimeout(()=>r.remove(),2800)}const Ui={subtitle:"Seuls les plus braves oseront y entrer"},Hi={coup_titan:{id:"coup_titan",name:"Coup Titanesque",type:"physical",power:200,accuracy:90,cooldown:8,icon:"💥",desc:"Frappe colossale qui ébranle le sol"},bouclier_seuil:{id:"bouclier_seuil",name:"Bouclier du Seuil",type:"buff",power:0,accuracy:100,cooldown:20,icon:"🛡️",desc:"Régénère un bouclier absorbant 30% des dégâts",effect:{type:"shield",value:.3,turns:999}},seisme_titan:{id:"seisme_titan",name:"Séisme Titanesque",type:"physical",power:120,accuracy:85,cooldown:15,aoe:!0,icon:"🌋",desc:"Écrase tous les ennemis"},rayon_oracle:{id:"rayon_oracle",name:"Rayon de l'Oracle",type:"magical",power:220,accuracy:95,cooldown:6,icon:"⚡",desc:"Rayon d'énergie pure dévastateur"},clone_oracle:{id:"clone_oracle",name:"Dédoublement",type:"special",power:0,accuracy:100,cooldown:30,icon:"👥",desc:"Crée un clone à 50% des HP du boss"},malediction:{id:"malediction",name:"Malédiction",type:"debuff",power:0,accuracy:90,cooldown:12,aoe:!0,icon:"🔮",desc:"Réduit l'ATK de toute l'équipe de 30%"},morsure_hydre:{id:"morsure_hydre",name:"Morsure de l'Hydre",type:"physical",power:180,accuracy:90,cooldown:5,icon:"🐉",desc:"Morsure venimeuse qui empoisonne"},triple_frappe:{id:"triple_frappe",name:"Triple Frappe",type:"physical",power:90,accuracy:80,cooldown:10,aoe:!0,icon:"🔱",desc:"Frappe 3 cibles simultanément"},enrage_hydre:{id:"enrage_hydre",name:"Enrage!",type:"buff",power:0,accuracy:100,cooldown:999,icon:"😡",desc:"À 30% HP: ATK +100%, SPD +50%"},lame_sacree:{id:"lame_sacree",name:"Lame Sacrée",type:"physical",power:240,accuracy:85,cooldown:8,icon:"⚔️",desc:"Tranche avec une lame bénie corrompue"},invisibilite_ange:{id:"invisibilite_ange",name:"Disparition Divine",type:"buff",power:0,accuracy:100,cooldown:25,icon:"🌫️",desc:"Devient invisible 5s puis frappe tous"},pluie_plumes:{id:"pluie_plumes",name:"Pluie de Plumes",type:"physical",power:80,accuracy:95,cooldown:8,aoe:!0,icon:"🪶",desc:"Pluie de plumes tranchantes"},frappe_abyssale:{id:"frappe_abyssale",name:"Frappe Abyssale",type:"physical",power:300,accuracy:90,cooldown:6,icon:"💀",desc:"Puissance des abysses"},vague_tenebres:{id:"vague_tenebres",name:"Vague de Ténèbres",type:"magical",power:180,accuracy:90,cooldown:10,aoe:!0,icon:"🌑",desc:"Vague d'obscurité dévastatrice"},domaine_samael:{id:"domaine_samael",name:"Domaine de Samaël",type:"special",power:0,accuracy:100,cooldown:999,icon:"🔴",desc:"Crée un domaine: tous perdent 3% HP/s"},absorption_ame:{id:"absorption_ame",name:"Absorption d'Âme",type:"heal",power:400,accuracy:100,cooldown:20,icon:"💜",desc:"Absorbe les âmes pour se soigner"},armageddon:{id:"armageddon",name:"Armageddon",type:"magical",power:350,accuracy:85,cooldown:15,aoe:!0,icon:"☄️",desc:"Déchaîne la fin du monde"},malédiction_finale:{id:"malédiction_finale",name:"Malédiction Finale",type:"debuff",power:0,accuracy:100,cooldown:20,aoe:!0,icon:"🌀",desc:"Réduit tous les stats de 50%"}},Ce=[{floor:1,name:"Le Gardien du Seuil",subtitle:"Porte-parole des anciens pactes",icon:"🏛️",bgGradient:"linear-gradient(180deg, #0d0d1f, #0a0a15)",accentColor:"#7777ff",minDuration:120,boss:{id:"gardien_seuil",name:"Gardien du Seuil",desc:"Le premier gardien du temple. Sa cuirasse absorbe les coups les plus puissants.",type:"guerrier",rarity:"legendaire",icon:"🏛️",phase:1,stats:{hp:12e3,maxHp:12e3,atk:180,def:200,spd:30,magAtk:80,magDef:150},skills:["coup_titan","bouclier_seuil","seisme_titan"],mechanics:{shieldRegen:{interval:20,value:.3},passiveHeal:{interval:3,amount:60}},rewards:{archireve:300,items:["armure_maragorh","ceinture_force"],xpBonus:200}},minions:[]},{floor:2,name:"L'Oracle Déchu",subtitle:"Il voit l'avenir mais ne peut l'éviter",icon:"🔮",bgGradient:"linear-gradient(180deg, #1a0a2a, #0d0520)",accentColor:"#aa44ff",minDuration:120,boss:{id:"oracle_dechu",name:"Oracle Déchu",desc:"Un voyant corrompu par sa propre prophétie. Quand il souffre, il se dédouble.",type:"mage",rarity:"legendaire",icon:"🔮",phase:1,stats:{hp:15e3,maxHp:15e3,atk:100,def:120,spd:55,magAtk:280,magDef:180},skills:["rayon_oracle","clone_oracle","malediction"],mechanics:{cloneAt:.5,passiveHeal:{interval:4,amount:75},magAtkBoost:{interval:30,value:.1}},rewards:{archireve:400,items:["baton_mage","orbe_enchantement"],xpBonus:280}},minions:[]},{floor:3,name:"L'Hydre des Ténèbres",subtitle:"Chaque blessure la rend plus furieuse",icon:"🐉",bgGradient:"linear-gradient(180deg, #0a1a0a, #050f05)",accentColor:"#22ff44",minDuration:120,boss:{id:"hydre_tenebres",name:"Hydre des Ténèbres",desc:"Une créature primordiale à trois têtes. Entamer sa vie déclenche son enrage.",type:"guerrier",rarity:"ultimate",icon:"🐉",phase:1,stats:{hp:2e4,maxHp:2e4,atk:250,def:160,spd:40,magAtk:120,magDef:100},skills:["morsure_hydre","triple_frappe"],mechanics:{enrageAt:.3,enrageSkills:["morsure_hydre","triple_frappe","enrage_hydre"],enrageStatBoost:{atk:1,spd:.5},passiveHeal:{interval:5,amount:100}},rewards:{archireve:550,items:["arc_elfique","dague_ombre"],xpBonus:380}},minions:[]},{floor:4,name:"L'Archange Corrompu",subtitle:"La lumière divine souillée par les ombres",icon:"😇",bgGradient:"linear-gradient(180deg, #1a1a0a, #0f0f05)",accentColor:"#ffdd44",minDuration:120,boss:{id:"archange_corrompu",name:"Archange Corrompu",desc:"Autrefois gardien des cieux, désormais serviteur des ombres. Frappe en toute impunité.",type:"assassin",rarity:"ultimate",icon:"😇",phase:1,stats:{hp:25e3,maxHp:25e3,atk:320,def:140,spd:110,magAtk:200,magDef:160},skills:["lame_sacree","invisibilite_ange","pluie_plumes"],mechanics:{invisPhase:{cooldown:25,duration:5,burstDamage:2},passiveHeal:{interval:4,amount:125}},rewards:{archireve:700,items:["sceptre_samael","anneau_rapidite"],xpBonus:500}},minions:[]},{floor:5,name:"SAMAËL",subtitle:"Le dieu déchu, maître de l'obscurité éternelle",icon:"☠️",bgGradient:"linear-gradient(180deg, #150008, #0a0005)",accentColor:"#ff2244",minDuration:180,boss:{id:"samael_final",name:"Samaël le Maudit",desc:"La forme finale de Samaël. Trois phases de pouvoir croissant. Ne le sous-estimez jamais.",type:"assassin",rarity:"ultimate",icon:"☠️",phase:1,currentPhase:1,stats:{hp:4e4,maxHp:4e4,atk:280,def:200,spd:90,magAtk:260,magDef:220},phase1Skills:["frappe_abyssale","vague_tenebres"],phase2Skills:["frappe_abyssale","vague_tenebres","domaine_samael","absorption_ame"],phase3Skills:["frappe_abyssale","armageddon","malédiction_finale","absorption_ame"],skills:["frappe_abyssale","vague_tenebres"],mechanics:{phases:[{hpThreshold:.66,activated:!1,label:"Phase I — Éveil"},{hpThreshold:.33,activated:!1,label:"Phase II — Domination"},{hpThreshold:0,activated:!1,label:"Phase III — Apocalypse"}],passiveHeal:{interval:3,amount:200},domain:{active:!1,damagePerSecond:.03}},rewards:{archireve:2e3,items:["phylactere_samael","egide_samael"],xpBonus:1e3,firstClear:{archireve:5e3,title:"Vainqueur de Samaël"}}},minions:[]}];function Ni(a){return Ce.find(t=>t.floor===a)||null}function $t(a){return a.map(t=>Hi[t]||{id:t,name:t,type:"physical",power:100,accuracy:90,cooldown:5,icon:"💥"})}const _=100,kt=2e3;class qi{constructor(t,e){this.floorData=e,this.minDuration=(e.minDuration||120)*1e3,this.startTime=null,this.elapsedTime=0,this.gameOver=!1,this.winner=null,this.running=!1,this.tickInterval=null,this.log=[],this.dpsTracker={},this.aggroTable={},this.playerTeam=t.map((r,n)=>({...r,stats:{...r.stats},currentHp:r.stats.hp,maxHp:r.stats.hp,alive:!0,buffs:[],debuffs:[],autoAttackTimer:kt-r.stats.spd*5,autoAttackCooldown:Math.max(800,kt-r.stats.spd*5),skillCooldowns:{},isPlayer:!0,x:80+n*5,y:80+n*90,aggro:0}));const i=e.boss;this.boss={...i,currentHp:i.stats.hp,maxHp:i.stats.hp,alive:!0,buffs:[],debuffs:[],skills:$t(i.skills||i.phase1Skills||[]),skillTimers:{},autoAttackTimer:Math.max(1e3,kt-i.stats.spd*5),autoAttackCooldown:Math.max(1e3,kt-i.stats.spd*5),isPlayer:!1,isBoss:!0,shieldValue:0,isInvisible:!1,invisTimer:0,currentPhase:1,enraged:!1,domainActive:!1,cloneCreated:!1},this.onTick=null,this.onSkillUsed=null,this.onLog=null,this.onPhaseChange=null,this.onBossAbility=null}start(){if(!this.running){this.startTime=Date.now(),this.running=!0,this.addLog("💀 L'Épreuve commence...");for(const t of this.boss.skills)this.boss.skillTimers[t.id]=(t.cooldown||10)*1e3*.3;this.tickInterval=setInterval(()=>this._tick(),_)}}pause(){this.running=!1}resume(){this.running=!0}stop(){this.running=!1,this.tickInterval&&(clearInterval(this.tickInterval),this.tickInterval=null)}_tick(){if(!this.running||this.gameOver)return;this.elapsedTime+=_;for(const e of this.playerTeam)if(e.alive){for(const i of Object.keys(e.skillCooldowns))e.skillCooldowns[i]=Math.max(0,e.skillCooldowns[i]-_);e.autoAttackTimer-=_,e.autoAttackTimer<=0&&(e.autoAttackTimer=e.autoAttackCooldown,this.boss.alive&&!this.boss.isInvisible&&this._doAutoAttack(e,this.boss)),this._tickStatusEffects(e)}if(this.boss.alive){if(this._checkBossPhases(),this._tickBossPassiveHeal(),this.boss.domainActive&&this._applyDomainDamage(),this.boss.isInvisible&&(this.boss.invisTimer-=_,this.boss.invisTimer<=0&&(this.boss.isInvisible=!1,this._doBossEmergeBurst())),this.boss.autoAttackTimer-=_,this.boss.autoAttackTimer<=0&&!this.boss.isInvisible){this.boss.autoAttackTimer=this.boss.autoAttackCooldown;const e=this._getBossTarget();e&&this._doBossAutoAttack(e)}for(const e of this.boss.skills)this.boss.skillTimers[e.id]||(this.boss.skillTimers[e.id]=0),this.boss.skillTimers[e.id]-=_,this.boss.skillTimers[e.id]<=0&&(this.boss.skillTimers[e.id]=(e.cooldown||10)*1e3,this._executeBossSkill(e))}if(this.playerTeam.filter(e=>e.alive).length===0){this._endCombat("enemy");return}if(!this.boss.alive)if(this.elapsedTime<this.minDuration)this.boss.currentHp=Math.floor(this.boss.maxHp*.25),this.boss.alive=!0,this.addLog(`⚠️ ${this.boss.name} refuse de mourir si vite !`),this.onBossAbility?.({type:"revive",boss:this.boss});else{this._endCombat("player");return}this.onTick?.({playerTeam:this.playerTeam,boss:this.boss,elapsedTime:this.elapsedTime,dpsTracker:this.dpsTracker,minDuration:this.minDuration})}activateSkill(t,e){const i=this.playerTeam.find(d=>d.id===t);if(!i||!i.alive)return!1;const r=i.skills[e];if(!r)return!1;const n=`${e}`;if((i.skillCooldowns[n]||0)>0)return!1;const s=this._executePlayerSkill(i,r);return i.skillCooldowns[n]=(r.cooldown||3)*1e3,s}_executePlayerSkill(t,e){const i={caster:t.id,skill:e.id,hits:[]};if(e.type==="heal"){const r=[...this.playerTeam.filter(s=>s.alive)].sort((s,d)=>s.currentHp/s.maxHp-d.currentHp/d.maxHp)[0],n=Math.floor(e.power*(1+t.stats.magAtk/200));r.currentHp=Math.min(r.maxHp,r.currentHp+n),this.addLog(`💚 ${t.name} soigne ${r.name} +${n} PV`),i.hits.push({target:r.id,heal:n})}else if(e.type==="buff"){const r=e.effect?.aoe?this.playerTeam.filter(n=>n.alive):[t];for(const n of r)e.effect?.stat&&n.buffs.push({stat:e.effect.stat,boost:e.effect.boost,durationMs:e.effect.turns*2e3,remainingMs:e.effect.turns*2e3});this.addLog(`✨ ${t.name} utilise ${e.name}`)}else{const r=e.aoe?[this.boss]:[this.boss];for(const n of r){if(!n.alive)continue;const s=this._calcDamage(t,n,e);this._applyDamageToTarget(n,s,t,e),i.hits.push({target:n.id,damage:s.amount,isCrit:s.isCrit})}}return this.onSkillUsed?.(i),i}_doAutoAttack(t,e){const i=Math.floor(t.stats.atk/(e.stats.def+50)*60*(.9+Math.random()*.2)),r=Math.max(1,i);this._applyDamageToTarget(e,{amount:r,isCrit:!1},t,{type:"physical",id:"auto"})}_doBossAutoAttack(t){const e=this.boss,i=Math.floor(e.stats.atk/(t.stats.def+50)*80*(.85+Math.random()*.3)),r=Math.random()<.08,n=Math.max(1,r?Math.floor(i*1.5):i);t.currentHp-=n,this.addLog(`👹 ${e.name} frappe ${t.name} -${n}${r?" CRIT!":""}`),t.currentHp<=0&&(t.currentHp=0,t.alive=!1,this.addLog(`💀 ${t.name} tombe !`))}_calcDamage(t,e,i){const r=i.type==="magical"?t.stats.magAtk:t.stats.atk;let n=i.type==="magical"?e.stats.magDef:e.stats.def;e.shieldValue>0&&(n+=100);let s=Math.floor(r*(i.power||80)/(n+50)*(.85+Math.random()*.3));i.aoe&&(s=Math.floor(s*.7));const d=10+(t.type==="assassin"?15:0),o=Math.random()*100<d;return o&&(s=Math.floor(s*1.5)),{amount:Math.max(1,s),isCrit:o}}_applyDamageToTarget(t,e,i,r){let{amount:n}=e;if(t.shieldValue>0){const s=Math.min(t.shieldValue,Math.floor(n*.4));t.shieldValue-=s,n-=s}t.currentHp=Math.max(0,t.currentHp-n),i.isPlayer&&(this.dpsTracker[i.id]=(this.dpsTracker[i.id]||0)+n,this.aggroTable[t.id]=this.aggroTable[t.id]||{},this.aggroTable[t.id][i.id]=(this.aggroTable[t.id][i.id]||0)+n,i.type==="guerrier"&&(this.aggroTable[t.id][i.id]*=1.5)),t.currentHp<=0&&(t.alive=!1)}_getBossTarget(){const t=this.playerTeam.filter(n=>n.alive);if(t.length===0)return null;const e=this.aggroTable[this.boss.id]||{};let i=-1,r=null;for(const n of t){const s=e[n.id]||0;s>i&&(i=s,r=n)}return!r||i<10?t.find(s=>s.type==="guerrier")||t[Math.floor(Math.random()*t.length)]:r}_executeBossSkill(t){if(!this.boss.alive)return;const e=this.playerTeam.filter(r=>r.alive);if(e.length===0)return;if(t.type==="special"){this._handleBossSpecial(t);return}if(t.type==="debuff"){this._handleBossDebuff(t);return}if(t.type==="buff"){this._handleBossBuff(t);return}const i=t.aoe?e:[this._getBossTarget()].filter(Boolean);for(const r of i){const n=this._calcDamage(this.boss,r,t);r.currentHp=Math.max(0,r.currentHp-n.amount),r.currentHp<=0&&(r.alive=!1,this.addLog(`💀 ${r.name} tombe !`))}this.addLog(`⚡ ${this.boss.name} utilise ${t.name}!`),this.onSkillUsed?.({caster:this.boss.id,skill:t.id,targets:i.map(r=>r.id)})}_handleBossSpecial(t){t.id==="clone_oracle"?this.boss.cloneCreated||(this.boss.cloneCreated=!0,this.addLog("👥 L'Oracle se dédouble !"),this.onBossAbility?.({type:"clone",boss:this.boss})):t.id==="domaine_samael"&&(this.boss.domainActive||(this.boss.domainActive=!0,this.addLog("🔴 Samaël active son Domaine ! Vous perdez 3% HP/s !"),this.onBossAbility?.({type:"domain",boss:this.boss})))}_handleBossDebuff(t){const e=this.playerTeam.filter(r=>r.alive),i=t.aoe?e:[this._getBossTarget()].filter(Boolean);for(const r of i)if(t.id==="malediction")r.buffs.push({stat:"atk",boost:-.3,durationMs:8e3,remainingMs:8e3,type:"debuff"});else if(t.id==="malédiction_finale")for(const n of["atk","magAtk","def","spd"])r.buffs.push({stat:n,boost:-.5,durationMs:15e3,remainingMs:15e3,type:"debuff"});this.addLog(`🔮 ${this.boss.name} lance ${t.name} !`),this.onBossAbility?.({type:"debuff",skill:t})}_handleBossBuff(t){if(t.id==="bouclier_seuil")this.boss.shieldValue=Math.floor(this.boss.maxHp*.3),this.addLog(`🛡️ ${this.boss.name} génère un bouclier !`),this.onBossAbility?.({type:"shield",value:this.boss.shieldValue});else if(t.id==="invisibilite_ange")this.boss.isInvisible=!0,this.boss.invisTimer=5e3,this.addLog("🌫️ L'Archange disparaît dans l'ombre..."),this.onBossAbility?.({type:"invisible"});else if(t.id==="absorption_ame"){const e=Math.min(t.power,this.boss.maxHp-this.boss.currentHp);this.boss.currentHp=Math.min(this.boss.maxHp,this.boss.currentHp+e),this.addLog(`💜 Samaël absorbe les âmes (+${e} PV)`),this.onBossAbility?.({type:"heal",amount:e})}}_doBossEmergeBurst(){const t=this.playerTeam.filter(i=>i.alive);let e=0;for(const i of t){const r=Math.floor(this.boss.stats.atk*2*(.9+Math.random()*.2));i.currentHp=Math.max(0,i.currentHp-r),i.currentHp<=0&&(i.alive=!1),e+=r}this.addLog("💥 L'Archange surgit ! Burst sur toute l'équipe !"),this.onBossAbility?.({type:"emerge_burst",totalDmg:e})}_checkBossPhases(){const t=this.boss.currentHp/this.boss.maxHp,e=this.boss.mechanics||{};if(e.enrageAt&&!this.boss.enraged&&t<=e.enrageAt){if(this.boss.enraged=!0,e.enrageStatBoost)for(const[i,r]of Object.entries(e.enrageStatBoost))this.boss.stats[i]=Math.floor(this.boss.stats[i]*(1+r));e.enrageSkills&&(this.boss.skills=$t(e.enrageSkills)),this.addLog(`😡 ${this.boss.name} entre en mode ENRAGE !`),this.onPhaseChange?.({boss:this.boss,newPhase:"enrage"})}this.boss.id==="samael_final"&&(t<=.33&&this.boss.currentPhase<3?(this.boss.currentPhase=3,this.boss.skills=$t(this.floorData.boss.phase3Skills||[]),this.addLog("☠️ SAMAËL — PHASE III : APOCALYPSE !"),this.onPhaseChange?.({boss:this.boss,newPhase:3})):t<=.66&&this.boss.currentPhase<2&&(this.boss.currentPhase=2,this.boss.skills=$t(this.floorData.boss.phase2Skills||[]),this.addLog("🌑 SAMAËL — PHASE II : DOMINATION !"),this.boss.domainActive=!0,this.onPhaseChange?.({boss:this.boss,newPhase:2})))}_tickBossPassiveHeal(){const t=this.boss.mechanics?.passiveHeal;if(t&&(this._passiveHealTimer||(this._passiveHealTimer=t.interval*1e3),this._passiveHealTimer-=_,this._passiveHealTimer<=0)){this._passiveHealTimer=t.interval*1e3;const e=t.amount;this.boss.currentHp=Math.min(this.boss.maxHp,this.boss.currentHp+e)}}_applyDomainDamage(){const e=(this.boss.mechanics?.domain?.damagePerSecond||.03)*_/1e3;for(const i of this.playerTeam){if(!i.alive)continue;const r=Math.max(1,Math.floor(i.maxHp*e));i.currentHp=Math.max(0,i.currentHp-r),i.currentHp<=0&&(i.alive=!1)}}_tickStatusEffects(t){t.buffs=(t.buffs||[]).filter(e=>e.durationMs!==void 0?(e.remainingMs-=_,e.remainingMs>0):!0)}_tickShieldRegen(){const t=this.boss.mechanics?.shieldRegen;t&&(this._shieldRegenTimer||(this._shieldRegenTimer=t.interval*1e3),this._shieldRegenTimer-=_,this._shieldRegenTimer<=0&&this.boss.shieldValue===0&&(this._shieldRegenTimer=t.interval*1e3,this.boss.shieldValue=Math.floor(this.boss.maxHp*t.value),this.addLog(`🛡️ Le bouclier du ${this.boss.name} se régénère !`),this.onBossAbility?.({type:"shield",value:this.boss.shieldValue})))}_endCombat(t){this.gameOver=!0,this.winner=t,this.stop();const e=Math.floor(this.elapsedTime/1e3);t==="player"?this.addLog(`🏆 Victoire ! Temps: ${Math.floor(e/60)}m${String(e%60).padStart(2,"0")}s`):this.addLog(`💀 Défaite après ${Math.floor(e/60)}m${String(e%60).padStart(2,"0")}s`),this.onTick?.({playerTeam:this.playerTeam,boss:this.boss,elapsedTime:this.elapsedTime,dpsTracker:this.dpsTracker,minDuration:this.minDuration,gameOver:!0,winner:t})}addLog(t){this.log.push({message:t,time:this.elapsedTime}),this.onLog?.(t)}getElapsedSeconds(){return Math.floor(this.elapsedTime/1e3)}getSummary(){return{won:this.winner==="player",duration:this.elapsedTime,dpsTracker:this.dpsTracker,playerTeamState:this.playerTeam,bossState:this.boss}}getSkillCooldownPct(t,e){const i=this.playerTeam.find(o=>o.id===t);if(!i)return 0;const r=i.skills[e];if(!r)return 0;const n=`${e}`,s=i.skillCooldowns[n]||0,d=(r.cooldown||3)*1e3;return s/d}getAutoAttackProgress(t){const e=this.playerTeam.find(i=>i.id===t);return e?1-e.autoAttackTimer/e.autoAttackCooldown:0}}let lt=null,Xt=!1,Yt=1;function dt(){lt&&(clearInterval(lt),lt=null),Xt=!1,Yt=1}function Gi(a,t,e,i){dt();const r=t.floor===5;a.innerHTML=`
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
        ${Array.from({length:6},(n,s)=>`
          <div style="position:absolute;bottom:160px;left:${5+s*16}%;width:22px;
            background:linear-gradient(to top,rgba(60,5,15,1),rgba(30,0,12,0.7),transparent);
            height:${45+Math.random()*15}%;border-radius:3px 3px 0 0;
            box-shadow:inset -4px 0 8px rgba(0,0,0,0.6),0 0 18px rgba(180,10,10,0.25)"></div>
          <div style="position:absolute;bottom:160px;right:${5+s*16}%;width:22px;
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
  `,document.getElementById("flee-btn").addEventListener("click",()=>{confirm("Fuir l'épreuve ?")&&(dt(),i())}),ta(t),Vi(t)}function Vi(a,t){let e=0;lt=setInterval(()=>{const i=document.getElementById("attack-lane");if(!i){clearInterval(lt);return}e++,e%2===0?Xi(i,a):Yi(i,a),e%4===0&&Le(i)},1100)}function Xi(a,t){const e=["#4ADE80","#60A5FA","#FBBF24","#F87171","#A78BFA","#34D399"],i=e[Math.floor(Math.random()*e.length)],r=30+Math.random()*25,n=document.createElement("div");n.style.cssText=`position:absolute;left:180px;top:${r}%;
    width:26px;height:9px;border-radius:50%;pointer-events:none;
    background:radial-gradient(circle,#fff 20%,${i} 60%,transparent);
    box-shadow:0 0 18px ${i},0 0 35px ${i}77;
    animation:projRight 0.5s cubic-bezier(0.25,0.1,0.85,1) forwards;z-index:10`,a.appendChild(n),setTimeout(()=>{n.remove(),Me(a,"72%",r,i,"right");const s=document.getElementById("boss-sprite");s&&(s.style.animation="bossHitFlash 0.35s ease-out",setTimeout(()=>{s.style.animation=`bossRage ${t.floor===5?"1.8":"3"}s ease-in-out infinite`},360))},470)}function Yi(a,t){const e=t.accentColor||"#ff2244",i=32+Math.random()*22,r=document.createElement("div");r.style.cssText=`position:absolute;right:200px;top:${i}%;
    width:32px;height:11px;border-radius:50%;pointer-events:none;
    background:radial-gradient(circle,#fff 10%,${e} 50%,transparent);
    box-shadow:0 0 22px ${e},0 0 45px ${e}66;
    animation:projLeft 0.48s cubic-bezier(0.25,0.1,0.85,1) forwards;z-index:10`,a.appendChild(r),setTimeout(()=>{r.remove(),Me(a,"12%",i,e,"left"),re()},460)}function Me(a,t,e,i,r){const n=document.createElement("div");n.style.cssText=`position:absolute;${r}:${t};top:${e}%;
    width:55px;height:55px;border-radius:50%;pointer-events:none;
    transform:translate(${r==="left"?"-50%":"50%"},-50%);
    background:radial-gradient(circle,#fff 8%,${i} 35%,transparent 65%);
    box-shadow:0 0 35px ${i};
    animation:impactBurst 0.4s ease-out forwards;z-index:11`,a.appendChild(n),setTimeout(()=>n.remove(),420)}function Le(a){const t=document.createElement("div");t.style.cssText=`position:absolute;bottom:168px;left:8%;height:2px;width:0;
    background:linear-gradient(90deg,transparent,rgba(255,80,0,0.9),rgba(255,200,0,0.7),transparent);
    animation:groundCrack 0.7s ease-out forwards;z-index:12;pointer-events:none`,a.appendChild(t),setTimeout(()=>t.remove(),720)}function re(){const a=document.getElementById("dungeon-combat-screen");a&&(a.style.animation="hellShake 0.32s ease-out",setTimeout(()=>{a.style.animation=""},340))}function Wi(a,t,e){const{playerTeam:i,boss:r,elapsedTime:n,dpsTracker:s,minDuration:d,gameOver:o,winner:l}=a,c=Math.floor(n/1e3),p=Math.max(0,r.currentHp/r.maxHp*100),f=document.getElementById("boss-hp-bar");f&&(f.style.width=`${p}%`,f.style.background=p>60?"linear-gradient(90deg,#990020,#dd2244,#ff6644)":p>30?"linear-gradient(90deg,#cc4400,#ff6600,#ffaa00)":"linear-gradient(90deg,#660000,#aa0000,#ff2200)");const m=document.getElementById("boss-hp-text");m&&(m.textContent=`${Math.max(0,r.currentHp).toLocaleString()} / ${r.maxHp.toLocaleString()}`);const u=document.getElementById("boss-shield-text");u&&(u.textContent=r.shieldValue>0?`🛡️ ${r.shieldValue.toLocaleString()}`:"");const x=r.currentPhase||1;x!==Yt&&(Yt=x,Zi(x));const $=document.getElementById("boss-phase-badge");if($){const v={1:"PHASE I",2:"⚡ PHASE II",3:"💀 PHASE III — ARMAGEDDON"};$.textContent=v[x]||"",$.style.color=x===3?"#ff2244":x===2?"#cc44ff":t.accentColor}if(t.floor===5&&x>=2&&!Xt){Xt=!0;const v=document.getElementById("domain-overlay");v&&(v.style.display="block");const E=document.getElementById("boss-domain-sigil");E&&(E.style.opacity="1")}const b=document.getElementById("timer-display");b&&(b.textContent=`⏱️ ${Math.floor(c/60)}:${String(c%60).padStart(2,"0")}`);const I=document.getElementById("min-timer-display");if(I){const v=Math.max(0,Math.floor(d/1e3)-c);I.textContent=v>0?`⏳ ${Math.floor(v/60)}:${String(v%60).padStart(2,"0")} restant`:"✅ Durée ok",I.style.color=v>0?"#ff8800":"#4ADE80"}const P=document.getElementById("boss-invisible-overlay");P&&(P.style.display=r.isInvisible?"block":"none");const A=document.getElementById("boss-sprite");A&&(A.style.opacity=r.isInvisible?"0.12":"1");const y=document.getElementById("player-sprites");y&&(y.innerHTML=i.map(v=>{const E=Math.max(0,v.currentHp/v.maxHp*100);return`
        <div id="ps-${v.id}" style="display:flex;align-items:center;gap:8px;
          opacity:${v.alive?1:.2};transition:opacity 0.5s">
          <div style="position:relative">
            <img src="${B(v.type)}" style="width:70px;height:70px;image-rendering:pixelated;
              filter:drop-shadow(0 0 12px ${v.alive?"rgba(100,200,255,0.55)":"rgba(255,0,0,0.2)"})
              ${v.alive?"":"grayscale(1)"};transition:filter 0.3s">
            <div style="position:absolute;bottom:-5px;left:2px;right:2px;height:4px;
              background:rgba(0,0,0,0.6);border-radius:2px;overflow:hidden">
              <div style="height:100%;width:${E}%;border-radius:2px;transition:width 0.3s;
                background:${E>55?"#4ADE80":E>25?"#FBBF24":"#ff2244"}"></div>
            </div>
            ${v.alive?"":'<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:22px">💀</div>'}
          </div>
        </div>`}).join(""));const w=document.getElementById("player-hud-bottom");w&&(w.innerHTML=i.map(v=>{const E=Math.max(0,v.currentHp/v.maxHp*100),L=s[v.id]||0,Z=e?e.getAutoAttackProgress(v.id)*100:0;return`<div style="flex:1;background:rgba(15,0,5,0.85);border-radius:8px;padding:8px;
        border:1px solid ${v.alive?"rgba(180,10,20,0.35)":"rgba(60,0,0,0.4)"}">
        <div style="display:flex;align-items:center;gap:6px;margin-bottom:5px">
          <img src="${B(v.type)}" style="width:26px;height:26px;image-rendering:pixelated;${v.alive?"":"filter:grayscale(1);opacity:0.35"}">
          <div>
            <div style="font-size:9px;font-weight:700;color:var(--${v.rarity})">${v.name.split(" ")[0]}</div>
            <div style="font-size:8px;color:rgba(255,255,255,0.35)">${L>0?Math.round(L/Math.max(1,c))+" DPS":v.type}</div>
          </div>
        </div>
        <div style="height:5px;background:rgba(0,0,0,0.55);border-radius:3px;margin-bottom:3px;overflow:hidden">
          <div style="height:100%;width:${E}%;border-radius:3px;transition:width 0.2s;
            background:${E>55?"#4ADE80":E>25?"#ff8800":"#ff2244"}"></div>
        </div>
        <div style="height:3px;background:rgba(255,255,255,0.06);border-radius:2px;margin-bottom:5px;overflow:hidden">
          <div style="height:100%;width:${Z}%;background:rgba(255,200,50,0.75);transition:width 0.1s linear;border-radius:2px"></div>
        </div>
        <div style="display:flex;gap:3px;flex-wrap:wrap">
          ${(v.skills||[]).slice(0,4).map((Ue,se)=>{const _t=e?e.getSkillCooldownPct(v.id,se)*100:0;return`<button class="dsk" data-char="${v.id}" data-skill="${se}"
              style="width:28px;height:28px;font-size:12px;border:1px solid rgba(180,10,20,0.35);
              border-radius:6px;background:rgba(0,0,0,0.45);cursor:pointer;position:relative;overflow:hidden;
              ${v.alive?"":"opacity:0.3;pointer-events:none"}${_t>0?";opacity:0.45":""}">
              ${Ue.icon}
              ${_t>0?`<div style="position:absolute;top:0;left:0;width:100%;height:${_t}%;background:rgba(0,0,0,0.65)"></div>`:""}
            </button>`}).join("")}
        </div>
      </div>`}).join(""),w.querySelectorAll(".dsk").forEach(v=>{v.addEventListener("click",()=>{e&&e.activateSkill(v.dataset.char,parseInt(v.dataset.skill));const E=document.getElementById(`ps-${v.dataset.char}`)?.querySelector("img");E&&(E.style.animation="playerDash 0.55s ease-out",setTimeout(()=>{E.style.animation=""},580)),Le(document.getElementById("attack-lane"))})}))}function Zi(a,t){const e=document.getElementById("phase-flash");e&&(e.style.display="block",e.style.animation="phaseFlash 1.3s ease-out forwards",setTimeout(()=>{e.style.display="none",e.style.animation=""},1320)),re();const i=document.getElementById("boss-aura");i&&(i.style.background=a===3?"radial-gradient(ellipse,rgba(255,0,0,0.55) 0%,rgba(80,0,200,0.3) 50%,transparent 70%)":"radial-gradient(ellipse,rgba(180,0,255,0.4) 0%,transparent 70%)"),Wt({newPhase:a})}function Wt(a){const t=document.getElementById("boss-ability-alert");if(!t)return;const e={2:{t:"— PHASE II : DOMINATION —",c:"#cc44ff"},3:{t:"☠ PHASE III : FIN DU MONDE ☠",c:"#ff2244"},enrage:{t:"⚡ ENRAGE !",c:"#FBBF24"},shield:{t:"🛡️ BOUCLIER RÉGÉNÉRÉ",c:"#60A5FA"},clone:{t:"👥 DÉDOUBLEMENT !",c:"#A78BFA"},domain:{t:"🔴 DOMAINE DE SAMAËL ACTIVÉ",c:"#ff2244"},invisible:{t:"🌫️ DISPARITION DIVINE",c:"#94A3B8"},emerge_burst:{t:"💥 BURST D'ÉMERGENCE !",c:"#FBBF24"},revive:{t:"⚠️ IL REFUSE LA MORT !",c:"#ff4400"}},i=a?.newPhase||a?.type,r=e[i]||{t:"Compétence!",c:"#fff"};if(t.innerHTML=`<div style="font-family:var(--font-title);font-size:${a?.newPhase?"30":"20"}px;
    letter-spacing:4px;color:${r.c};text-shadow:0 0 25px ${r.c}99;
    padding:12px 36px;background:rgba(0,0,0,0.75);border:1px solid ${r.c}44;
    border-radius:4px;animation:bannerIn 0.5s ease">${r.t}</div>`,t.style.display="block",i==="domain"){const n=document.getElementById("domain-overlay");n&&(n.style.display="block")}["domain","emerge_burst","revive","3"].includes(String(i))&&re(),setTimeout(()=>{t.style.display="none"},a?.newPhase?3e3:2200)}function Qi(a){const t=document.getElementById("dungeon-log");if(!t)return;const e=document.createElement("div");for(e.textContent=a,e.style.cssText="font-size:9px;color:rgba(255,180,180,0.75);padding:2px 6px;background:rgba(0,0,0,0.55);border-left:2px solid rgba(200,10,30,0.5);border-radius:0 3px 3px 0;animation:fadeIn 0.3s ease",t.prepend(e);t.children.length>11;)t.lastChild.remove()}function Ki(a,t,e){const i=document.getElementById("dungeon-result-overlay");if(!i)return;const{archireveEarned:r,xpAmount:n,xpResults:s,itemEarned:d}=e,o=a.floor===5;return i.style.cssText="position:absolute;inset:0;z-index:100",i.innerHTML=`
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

      <div style="font-size:${o?"78":"60"}px;
        animation:victoryZoom 0.9s cubic-bezier(0.175,0.885,0.32,1.275) forwards">${o?"☠️":"🏆"}</div>

      <div style="font-family:var(--font-title);font-size:${o?"54":"42"}px;letter-spacing:8px;
        background:linear-gradient(135deg,#FFD700 0%,#FFA500 40%,#FFED4E 70%,#FFD700 100%);
        -webkit-background-clip:text;-webkit-text-fill-color:transparent;
        filter:drop-shadow(0 0 35px rgba(255,200,0,0.85));
        animation:victoryZoom 0.9s 0.2s cubic-bezier(0.175,0.885,0.32,1.275) both">
        ${o?"SAMAËL VAINCU":"VICTOIRE"}
      </div>

      ${t.isFirstClear?'<div style="font-size:13px;color:#4ADE80;letter-spacing:3px;animation:slideUp 0.5s 0.5s ease-out both">✦ PREMIÈRE VICTOIRE ✦</div>':`<div style="font-size:11px;color:rgba(255,255,255,0.45);animation:slideUp 0.5s 0.5s ease-out both">${t.clears}ème victoire · Récompenses ×0.3</div>`}

      <div style="display:flex;gap:20px;margin-top:6px;animation:slideUp 0.5s 0.7s ease-out both">
        <div style="text-align:center;background:rgba(255,200,0,0.09);border:1px solid rgba(255,200,0,0.25);border-radius:10px;padding:14px 22px">
          <div style="font-size:24px;color:#FFD700;font-family:var(--font-stat);font-weight:900">+${r}</div>
          <div style="font-size:9px;color:rgba(255,255,255,0.4);letter-spacing:2px">ARCHIRÊVES</div>
        </div>
        <div style="text-align:center;background:rgba(74,222,128,0.09);border:1px solid rgba(74,222,128,0.25);border-radius:10px;padding:14px 22px">
          <div style="font-size:24px;color:#4ADE80;font-family:var(--font-stat);font-weight:900">+${n}</div>
          <div style="font-size:9px;color:rgba(255,255,255,0.4);letter-spacing:2px">XP ÉQUIPE</div>
        </div>
        ${d?`
        <div style="text-align:center;background:rgba(167,139,250,0.09);border:1px solid rgba(167,139,250,0.25);border-radius:10px;padding:14px 22px">
          <div style="font-size:30px">${d.icon}</div>
          <div style="font-size:10px;color:#A78BFA;font-weight:700">${d.name}</div>
          <div style="font-size:8px;color:rgba(255,255,255,0.35)">Obtenu !</div>
        </div>`:""}
      </div>

      ${s.some(l=>l.leveled)?`<div style="display:flex;gap:8px;animation:slideUp 0.5s 0.9s ease-out both">
        ${s.filter(l=>l.leveled).map(()=>'<div style="font-size:11px;color:#FFD700;background:rgba(255,200,0,0.12);border:1px solid rgba(255,200,0,0.3);padding:4px 14px;border-radius:20px">⬆️ LEVEL UP !</div>').join("")}
      </div>`:""}

      <div style="display:flex;gap:12px;margin-top:10px;animation:slideUp 0.5s 1.1s ease-out both" id="victory-btns"></div>
    </div>
  `,setTimeout(()=>{const l=document.getElementById("vp");if(l)for(let c=0;c<65;c++){const p=document.createElement("div"),f=4+Math.random()*8,m=Math.random()*100,u=Math.random()*3.5,x=2.5+Math.random()*4,$=["#FFD700","#FFA500","#FFED4E","#fff","#FFC107"];p.style.cssText=`position:absolute;top:-20px;left:${m}%;width:${f}px;height:${f}px;border-radius:50%;
        background:${$[Math.floor(Math.random()*$.length)]};
        animation:goldRain ${x}s ${u}s linear infinite`,l.appendChild(p)}},300),document.getElementById("victory-btns")}function Ji(a){const t=document.getElementById("dungeon-result-overlay");if(t)return t.style.cssText="position:absolute;inset:0;z-index:100",t.innerHTML=`
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
  `,document.getElementById("defeat-btns")}function ta(a){const t=document.getElementById("dungeon-particles");if(!t)return;const e=["ᚱ","ᚷ","ᛏ","ᚦ","ᛉ","☽","☿","⊕","❋","✦","⋆"];for(let i=0;i<28;i++){const r=document.createElement("div"),n=Math.random()*100,s=2+Math.random()*3.5,d=Math.random()*14,o=1.5+Math.random()*3;r.style.cssText=`position:absolute;left:${n}%;bottom:162px;width:${s}px;height:${s}px;
      background:${a.accentColor};border-radius:50%;opacity:0;
      animation:emberRise ${o}s ${d}s ease-out infinite;
      box-shadow:0 0 5px ${a.accentColor}`,t.appendChild(r)}for(let i=0;i<10;i++){const r=document.createElement("div"),n=5+Math.random()*90,s=12+Math.random()*10,d=Math.random()*18,o=10+Math.random()*14;r.style.cssText=`position:absolute;left:${n}%;bottom:0;font-size:${s}px;
      color:${a.accentColor};opacity:0;pointer-events:none;
      animation:floatRune ${o}s ${d}s linear infinite;
      text-shadow:0 0 10px ${a.accentColor}`,r.textContent=e[Math.floor(Math.random()*e.length)],t.appendChild(r)}}let C=null;function ea(){C=null,Ct()}function Ct(){const a=document.getElementById("app"),t=g.getTeamInstances();a.innerHTML=`
    <div class="screen" style="background:linear-gradient(180deg,#0a0010,#050005)">
      <div class="topbar" style="background:rgba(10,0,20,0.9);border-bottom:1px solid rgba(255,34,68,0.2)">
        <button class="topbar__back" id="back-btn">◀</button>
        <div class="topbar__title" style="color:#ff4466;font-family:var(--font-title);letter-spacing:4px">☠️ ÉPREUVE DE SAMAËL</div>
        <div class="currency"><span>⭐</span><span>${g.state.archireve.toLocaleString()}</span></div>
      </div>

      <div class="content" style="display:flex;flex-direction:column;align-items:center;gap:var(--space-xl);padding:var(--space-xl) var(--space-lg)">

        <!-- Warning banner -->
        <div style="background:rgba(255,34,68,0.08);border:1px solid rgba(255,34,68,0.3);border-radius:var(--radius-xl);padding:var(--space-lg);text-align:center;max-width:600px;width:100%">
          <div style="font-size:20px;margin-bottom:8px">⚠️</div>
          <div style="font-size:12px;color:#ff8899;line-height:1.6">${Ui.subtitle}</div>
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
          ${Ce.map(e=>ia(e)).join("")}
        </div>
      </div>
    </div>
  `,document.getElementById("back-btn").addEventListener("click",()=>k.navigate("home")),document.querySelectorAll(".floor-enter-btn").forEach(e=>{e.addEventListener("click",()=>{const i=parseInt(e.dataset.floor);Zt(i)})})}function ia(a){const t=g.getDungeonFloorProgress(a.floor),e=g.isDungeonFloorUnlocked(a.floor),i=a.floor===5,r=t.clears>0,n=t.bestTime?`${Math.floor(t.bestTime/60)}m${String(t.bestTime%60).padStart(2,"0")}s`:"——";return`
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
            ${r?`<span style="font-size:9px;color:var(--star)">🏆 Best: ${n}</span>`:""}
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
  `}function Zt(a){const t=Ni(a);if(!t)return;const e=g.getTeamInstances();if(e.length===0){ra("Votre équipe est vide !","error");return}dt(),C&&(C.stop(),C=null),C=new qi(e,t);let i=!1;C.onTick=n=>{Wi(n,t,C),n.gameOver&&!i&&(i=!0,dt(),C?.stop(),setTimeout(()=>aa(n.winner,t,Math.floor(n.elapsedTime/1e3)),500))},C.onLog=n=>Qi(n),C.onPhaseChange=n=>Wt(n),C.onBossAbility=n=>Wt(n);const r=document.getElementById("app");Gi(r,t,C,()=>{dt(),C?.stop(),C=null,Ct()}),C.start()}function aa(a,t,e){if(a==="player"){const i=g.recordDungeonClear(t.floor,e),r=i.isFirstClear?1:.3,n=Math.floor((t.boss.rewards?.archireve||300)*r);g.addArchireve(n);const s=Math.floor(Ve({isDungeon:!0,dungeonFloor:t.floor})*r),d=g.addTeamXp(s);let o=null;const l=t.boss.rewards?.items||[];if(i.isFirstClear&&l.length>0){const p=l[Math.floor(Math.random()*l.length)];O[p]&&(o=O[p],g.addItem(p))}g.recordBattle(!0);const c=Ki(t,i,{archireveEarned:n,xpAmount:s,xpResults:d,itemEarned:o});if(c){if(t.floor<5){const f=document.createElement("button");f.textContent=`→ ÉTAGE ${t.floor+1}`,f.style.cssText="padding:14px 32px;font-family:var(--font-title);font-size:13px;letter-spacing:3px;background:linear-gradient(135deg,rgba(255,200,0,0.3),rgba(255,100,0,0.2));border:1px solid rgba(255,200,0,0.4);border-radius:8px;color:#FFD700;cursor:pointer",f.addEventListener("click",()=>Zt(t.floor+1)),c.appendChild(f)}const p=document.createElement("button");p.textContent="◀ RETOUR",p.style.cssText="padding:14px 32px;font-family:var(--font-title);font-size:13px;letter-spacing:3px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.12);border-radius:8px;color:rgba(255,255,255,0.6);cursor:pointer",p.addEventListener("click",()=>{C=null,Ct()}),c.appendChild(p)}}else{g.recordBattle(!1);const i=Ji(t);if(i){const r=document.createElement("button");r.textContent="🔄 RÉESSAYER",r.style.cssText="padding:14px 32px;font-family:var(--font-title);font-size:13px;letter-spacing:3px;background:linear-gradient(135deg,rgba(180,0,20,0.35),rgba(80,0,0,0.45));border:1px solid rgba(180,0,20,0.45);border-radius:8px;color:#ff4444;cursor:pointer",r.addEventListener("click",()=>Zt(t.floor)),i.appendChild(r);const n=document.createElement("button");n.textContent="◀ RETOUR",n.style.cssText="padding:14px 32px;font-family:var(--font-title);font-size:13px;letter-spacing:3px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);border-radius:8px;color:rgba(255,255,255,0.5);cursor:pointer",n.addEventListener("click",()=>{C=null,Ct()}),i.appendChild(n)}}}function ra(a,t="success"){const e=document.createElement("div");e.className=`toast toast--${t}`,e.textContent=a,document.body.appendChild(e),setTimeout(()=>e.remove(),3e3)}function na(){const a=document.getElementById("app");try{rt(a,null)}catch(t){console.error("[InventoryScreen] Crash:",t),a.innerHTML=`
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
      </div>`,document.getElementById("err-back")?.addEventListener("click",()=>k.navigate("home"))}}function rt(a,t){const e=g.getOwnedInstances(),i=g.getInventoryItems(),r=t?e.find(n=>n.id===t):null;a.innerHTML=`
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
            ${e.map(n=>`
              <div class="glass char-picker-btn ${t===n.id?"char-picker-btn--active":""}"
                   data-char="${n.id}"
                   style="padding:8px 12px;cursor:pointer;display:flex;align-items:center;gap:8px;border-radius:var(--radius-md);
                   ${t===n.id?"border-color:var(--accent);background:rgba(34,197,94,0.1)":""}">
                <img src="${B(n.type)}" style="width:32px;height:32px;image-rendering:pixelated">
                <div>
                  <div style="font-size:11px;font-weight:700;color:var(--${n.rarity})">${n.name}</div>
                  <div style="font-size:9px;color:var(--text-muted)">Niv.${n.ownedData?.level||1}</div>
                </div>
              </div>
            `).join("")}
          </div>

          ${r?oa(r,i):`
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
              ${i.map(n=>sa(n,t,r)).join("")}
            </div>
          `}

          <!-- Debug: Add test items (dev only) -->
          <div style="margin-top:var(--space-xxl);border-top:1px solid var(--border);padding-top:var(--space-md)">
            <button class="btn btn--ghost btn--sm" id="dev-add-items">🎁 Ajouter objets de test</button>
          </div>
        </div>
      </div>
    </div>
  `,document.getElementById("back-btn").addEventListener("click",()=>k.navigate("home")),document.querySelectorAll(".char-picker-btn").forEach(n=>{n.addEventListener("click",()=>{rt(a,n.dataset.char)})}),document.querySelectorAll(".btn-equip").forEach(n=>{n.addEventListener("click",()=>{const{instanceId:s,charId:d}=n.dataset;g.equipItem(d,s)&&(jt("Objet équipé !","success"),rt(a,d))})}),document.querySelectorAll(".btn-unequip").forEach(n=>{n.addEventListener("click",()=>{const{charId:s,slot:d}=n.dataset;g.unequipItem(s,d),jt("Objet retiré","warning"),rt(a,s)})}),document.getElementById("dev-add-items")?.addEventListener("click",()=>{["epee_rouille","baton_mage","robe_arcane","anneau_rapidite","talisman_nature","dague_ombre"].forEach(s=>g.addItem(s)),jt("Objets ajoutés !","success"),rt(a,t)})}function oa(a,t){const e=g.getCharacterEquipped(a.id),i=g.getCharacterBonusStats(a.id);return`
    <div class="glass" style="padding:var(--space-md);border-radius:var(--radius-xl)">
      <div class="section-header" style="font-size:10px">⚔️ ÉQUIPEMENT — ${a.name}</div>
      
      ${Object.entries(tt).map(([r,n])=>{const s=e[r],d=s?t.find(c=>c.instanceId===s):null,o=d?d.fusedData||O[d.itemId]||d:null,l=o?q[o.rarity]||q.rare:null;return`
          <div style="display:flex;align-items:center;gap:var(--space-sm);padding:8px 0;border-bottom:1px solid var(--border)">
            <div style="width:36px;height:36px;border-radius:var(--radius-md);background:var(--bg-surface);
              border:1px solid ${l?l.color:"var(--border)"};display:flex;align-items:center;justify-content:center;font-size:18px;
              box-shadow: ${l?`0 0 8px ${l.glow}`:"none"}">
              ${o?o.icon:n.icon}
            </div>
            <div style="flex:1;min-width:0">
              <div style="font-size:10px;color:var(--text-muted);text-transform:uppercase;letter-spacing:1px">${n.name}</div>
              ${o?`
                <div style="font-size:11px;color:${l?.color||"var(--text-primary)"};font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o.name}</div>
                <div style="font-size:9px;color:var(--text-muted)">${Object.entries(o.stats||{}).map(([c,p])=>`+${p} ${c.toUpperCase()}`).join(" · ")}</div>
              `:'<div style="font-size:11px;color:var(--text-muted)">— Vide —</div>'}
            </div>
            ${o?`<button class="btn btn--danger btn--sm btn-unequip" data-char-id="${a.id}" data-slot="${r}" style="font-size:9px;padding:4px 8px">✕</button>`:""}
          </div>
        `}).join("")}

      <!-- Bonus stats -->
      ${Object.values(i).some(r=>r>0)?`
        <div style="margin-top:var(--space-sm);padding-top:var(--space-sm);border-top:1px solid var(--border)">
          <div style="font-size:9px;color:var(--accent);letter-spacing:1px;text-transform:uppercase;margin-bottom:4px">Bonus Total</div>
          <div style="display:flex;flex-wrap:wrap;gap:4px">
            ${Object.entries(i).filter(([,r])=>r>0).map(([r,n])=>`
              <span style="font-size:9px;background:rgba(34,197,94,0.1);color:var(--accent);padding:2px 6px;border-radius:4px;border:1px solid rgba(34,197,94,0.2)">+${n} ${r.toUpperCase()}</span>
            `).join("")}
          </div>
        </div>
      `:""}
    </div>
  `}function sa(a,t,e){const i=q[a.rarity]||q.rare,r=tt[a.slot];let n=!1;if(e){const o=g.getCharacterEquipped(e.id);n=Object.values(o).includes(a.instanceId)}const d=(e?g.getCharacterEquipped(e.id):{})[a.slot];return`
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
        ${Object.entries(a.stats||{}).map(([o,l])=>`+${l} ${o.toUpperCase()}`).join("<br>")}
      </div>
      ${t&&!n?`
        <button class="btn btn--primary btn--sm btn-equip btn--full" 
          data-instance-id="${a.instanceId}" data-char-id="${t}"
          style="font-size:8px;padding:4px 8px;border-radius:var(--radius-sm)">
          ${d?"🔄 Remplacer":"✓ Équiper"}
        </button>
      `:n?`
        <div style="text-align:center;font-size:9px;color:var(--accent);font-weight:700">✓ Équipé</div>
      `:""}
    </div>
  `}function jt(a,t="success"){const e=document.createElement("div");e.className=`toast toast--${t}`,e.textContent=a,document.body.appendChild(e),setTimeout(()=>e.remove(),3e3)}let W="characters",T=null,z=null;const ut={rare:"#4a9eff",epique:"#c44aff",legendaire:"#ffb84a",ultimate:"#ff4a4a",semi_ultimate:"#FF6B2C",supreme:"#FF1493"};function Mt(){T=null,z=null;const a=document.getElementById("app");a.innerHTML=Be(),Pe()}function Be(){const a=g.state,t=a.ownedCharacters.filter(o=>{const l=R.find(c=>c.id===o.id)||g.getFusedCharacterData(o.id);return l&&(l.rarity==="legendaire"||l.rarity==="ultimate")}),e=(a.inventory||[]).filter(o=>{const l=o.fusedData||O[o.itemId];return l&&(l.rarity==="legendaire"||l.rarity==="ultimate")}),i=ca(),r=ga(),n=i&&r&&i.rarity===r.rarity,s=W==="characters",d=n?Re():null;return'<div class="screen" style="background:var(--bg-primary);display:flex;flex-direction:column;height:100vh;overflow:hidden;background-image:radial-gradient(ellipse at 50% 80%,rgba(192,57,11,0.08),transparent 55%)"><div class="topbar" style="width:100%;position:relative;z-index:10;flex-shrink:0"><button class="topbar__back" id="forge-back">&#9664;</button><div class="topbar__title" style="letter-spacing:4px">⚒ FORGE DE FUSION</div><div></div></div><div style="display:flex;justify-content:center;gap:8px;padding:12px 20px 8px;flex-shrink:0"><button class="btn '+(s?"btn--primary":"btn--ghost")+'" id="tab-chars" style="padding:10px 28px;font-size:11px;letter-spacing:2px">⚔ PERSONNAGES</button><button class="btn '+(s?"btn--ghost":"btn--primary")+'" id="tab-items" style="padding:10px 28px;font-size:11px;letter-spacing:2px">📦 ITEMS</button></div><div style="display:flex;flex:1;overflow:hidden;gap:0"><div style="width:420px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;border-right:1px solid rgba(200,155,60,0.06)"><div style="font-family:var(--font-title);font-size:10px;letter-spacing:4px;color:var(--text-muted);margin-bottom:20px">— FUSION —</div><div style="display:flex;align-items:center;gap:20px">'+ve(i,1)+'<div style="font-size:28px;color:var(--text-muted)">+</div>'+ve(r,2)+'</div><div style="margin:20px 0;font-size:24px;color:var(--accent)">⇣</div>'+(d?la(d):'<div style="width:180px;height:100px;border:2px dashed rgba(200,155,60,0.08);border-radius:12px;display:flex;align-items:center;justify-content:center;color:var(--text-muted);font-size:12px;letter-spacing:1px">Résultat</div>')+'<div style="margin-top:20px;padding:14px 20px;background:rgba(0,0,0,0.3);border-radius:10px;border:1px solid rgba(200,155,60,0.06);max-width:350px"><div style="font-family:var(--font-stat);font-size:9px;color:var(--legendaire);letter-spacing:2px;margin-bottom:8px">RÈGLES DE FUSION</div><div style="font-size:10px;color:var(--text-secondary);line-height:1.8">⚔ Légendaire + Légendaire → <span style="color:#FF6B2C;font-weight:700">Semi-Ultimate</span> (stats ×2)<br>🔥 Ultimate + Ultimate → <span style="color:#FF1493;font-weight:700">Suprême Divin</span> (stats ×10)</div></div><button class="btn btn--star btn--large" id="fuse-btn" style="margin-top:24px;padding:16px 48px;font-size:14px;letter-spacing:3px" '+(n?"":"disabled")+'>⚒ FUSIONNER</button></div><div style="flex:1;overflow-y:auto;padding:20px"><div style="font-family:var(--font-title);font-size:10px;letter-spacing:3px;color:var(--text-muted);margin-bottom:12px">'+(s?"— PERSONNAGES ELIGIBLES ("+t.length+") —":"— ITEMS ÉLIGIBLES ("+e.length+") —")+'</div><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(130px,1fr));gap:10px">'+(s?da(t):pa(e))+"</div></div></div></div>"}function ve(a,t){if(!a)return'<div class="forge-slot forge-slot--empty" data-slot="'+t+'" style="width:130px;height:150px;border:2px dashed rgba(200,155,60,0.15);border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;background:rgba(0,0,0,0.2);transition:all 0.15s"><div style="font-size:32px;opacity:0.3;margin-bottom:8px">+</div><div style="font-size:9px;color:var(--text-muted);letter-spacing:1px">SLOT '+t+"</div></div>";const e=ut[a.rarity]||"#aaa",i=!!a.type&&!a.slot;return'<div class="forge-slot" data-slot="'+t+'" data-selected="true" style="width:130px;height:150px;border:2px solid '+e+'40;border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;background:rgba(0,0,0,0.3);position:relative;transition:all 0.15s">'+(i?'<img src="'+B(a.type.split("/")[0])+'" style="width:48px;height:48px;filter:drop-shadow(0 0 8px '+e+'60)">':'<div style="font-size:36px;filter:drop-shadow(0 0 8px '+e+'60)">'+(a.icon||"📦")+"</div>")+'<div style="font-family:var(--font-ui);font-size:10px;font-weight:700;color:'+e+';margin-top:8px;text-align:center;padding:0 4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:120px">'+a.name+'</div><div style="font-size:8px;color:var(--text-muted);letter-spacing:1px;margin-top:2px">'+a.rarity.toUpperCase()+'</div><button class="forge-slot-clear" data-clear="'+t+'" style="position:absolute;top:4px;right:4px;width:20px;height:20px;border:none;background:rgba(220,38,38,0.5);color:white;border-radius:50%;font-size:10px;cursor:pointer;display:flex;align-items:center;justify-content:center">✕</button></div>'}function la(a){const t=ut[a.rarity]||"#FF6B2C",e=Object.entries(a.stats||{}).map(function(i){return'<span style="color:'+t+'">'+i[0].toUpperCase()+"</span> "+i[1]}).join(" · ");return'<div style="width:220px;padding:16px;border:2px solid '+t+'30;border-radius:12px;background:rgba(0,0,0,0.4);text-align:center"><div style="font-family:var(--font-stat);font-size:8px;color:'+t+';letter-spacing:3px;margin-bottom:6px">'+a.rarity.toUpperCase().replace("_","-")+'</div><div style="font-family:var(--font-title);font-size:14px;color:var(--text-bright);margin-bottom:8px">'+a.name+'</div><div style="font-size:9px;color:var(--text-secondary);line-height:1.6">'+e+"</div></div>"}function da(a){return a.map(t=>{const e=R.find(n=>n.id===t.id)||g.getFusedCharacterData(t.id);if(!e)return"";const i=ut[e.rarity]||"#aaa",r=T===t.id||z===t.id;return'<button class="forge-grid-item" data-char-id="'+t.id+'" style="padding:12px 8px;text-align:center;border-radius:8px;cursor:pointer;border:1px solid '+(r?i:"rgba(200,155,60,0.06)")+";background:"+(r?"rgba(192,57,11,0.15)":"rgba(10,6,3,0.6)")+';color:var(--text-primary);transition:all 0.15s"><img src="'+B(e.type.split("/")[0])+'" style="width:40px;height:40px;filter:drop-shadow(0 0 6px '+i+'40)"><div style="font-family:var(--font-ui);font-size:9px;font-weight:700;color:'+i+';margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+e.name.split(" ")[0]+'</div><div style="font-size:8px;color:var(--text-muted);letter-spacing:1px">LV.'+t.level+'</div><div style="font-size:7px;color:'+i+';letter-spacing:1px;margin-top:2px">'+e.rarity.toUpperCase()+"</div></button>"}).join("")}function pa(a){return a.map(t=>{const e=t.fusedData||O[t.itemId];if(!e)return"";const i=ut[e.rarity]||"#aaa",r=T===t.instanceId||z===t.instanceId,n=tt[e.slot]||{name:"",icon:""};return'<button class="forge-grid-item" data-item-id="'+t.instanceId+'" style="padding:12px 8px;text-align:center;border-radius:8px;cursor:pointer;border:1px solid '+(r?i:"rgba(200,155,60,0.06)")+";background:"+(r?"rgba(192,57,11,0.15)":"rgba(10,6,3,0.6)")+';color:var(--text-primary);transition:all 0.15s"><div style="font-size:28px;filter:drop-shadow(0 0 6px '+i+'40)">'+(e.icon||"📦")+'</div><div style="font-family:var(--font-ui);font-size:9px;font-weight:700;color:'+i+';margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+e.name.split(" ").slice(0,2).join(" ")+'</div><div style="font-size:7px;color:var(--text-muted);letter-spacing:1px">'+n.icon+" "+n.name+'</div><div style="font-size:7px;color:'+i+';letter-spacing:1px;margin-top:2px">'+e.rarity.toUpperCase()+"</div></button>"}).join("")}function ca(){if(!T)return null;if(W==="characters")return R.find(a=>a.id===T)||g.getFusedCharacterData(T);{const a=(g.state.inventory||[]).find(t=>t.instanceId===T);return a?a.fusedData||O[a.itemId]:null}}function ga(){if(!z)return null;if(W==="characters")return R.find(a=>a.id===z)||g.getFusedCharacterData(z);{const a=(g.state.inventory||[]).find(t=>t.instanceId===z);return a?a.fusedData||O[a.itemId]:null}}function Re(){if(W==="characters"){const a=R.find(r=>r.id===T)||g.getFusedCharacterData(T),t=R.find(r=>r.id===z)||g.getFusedCharacterData(z);if(!a||!t)return null;const e=g.state.ownedCharacters.find(r=>r.id===T),i=g.state.ownedCharacters.find(r=>r.id===z);return Ye(a,t,e?.level||1,i?.level||1)}else{const a=(g.state.inventory||[]).find(r=>r.instanceId===T),t=(g.state.inventory||[]).find(r=>r.instanceId===z);if(!a||!t)return null;const e=a.fusedData||O[a.itemId],i=t.fusedData||O[t.itemId];return We(e,i)}}function Pe(){document.getElementById("forge-back")?.addEventListener("click",()=>k.navigate("home")),document.getElementById("tab-chars")?.addEventListener("click",()=>{W="characters",T=null,z=null,Mt()}),document.getElementById("tab-items")?.addEventListener("click",()=>{W="items",T=null,z=null,Mt()}),document.querySelectorAll(".forge-grid-item").forEach(a=>{a.addEventListener("click",()=>{const t=a.dataset.charId||a.dataset.itemId;t&&(t===T?T=null:t===z?z=null:T?z=t:T=t,xe())})}),document.querySelectorAll(".forge-slot-clear").forEach(a=>{a.addEventListener("click",t=>{t.stopPropagation();const e=a.dataset.clear;e==="1"&&(T=null),e==="2"&&(z=null),xe()})}),document.getElementById("fuse-btn")?.addEventListener("click",()=>{const a=Re();a&&(W==="characters"?(g.removeFusionIngredients(T,z),g.addFusedCharacter(a)):g.fuseItems(T,z,a),T=null,z=null,fa(a))})}function xe(){const a=document.getElementById("app");a.innerHTML=Be(),Pe()}function fa(a){const t=ut[a.rarity]||"#FF6B2C",e=document.createElement("div");e.className="modal-overlay",e.style.cssText="flex-direction:column;gap:0;background:rgba(0,0,0,0.95);z-index:9999",e.innerHTML='<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%;position:relative"><div style="position:absolute;inset:0;background:radial-gradient(circle,rgba('+(a.rarity==="supreme"?"255,20,147":"255,107,44")+',0.15),transparent 60%);animation:gachaFlash 2s ease forwards"></div><div style="position:relative;width:160px;height:160px;display:flex;align-items:center;justify-content:center"><div style="position:absolute;inset:0;border-radius:50%;border:2px solid '+t+"88;animation:portalRotate 4s linear infinite;box-shadow:0 0 30px "+t+'40"></div><div style="font-size:72px;filter:drop-shadow(0 0 30px '+t+');animation:crystalGlow 1.5s ease infinite alternate">⚒</div></div><div style="margin-top:32px;font-family:var(--font-title);font-size:16px;color:'+t+";letter-spacing:5px;text-shadow:0 0 20px "+t+'60;animation:fadeIn 1s 1s ease forwards;opacity:0">'+a.rarity.toUpperCase().replace("_","-")+'</div><div style="margin-top:12px;font-family:var(--font-title);font-size:28px;color:var(--text-bright);letter-spacing:3px;text-shadow:0 2px 20px rgba(0,0,0,0.5);animation:fadeIn 1s 1.5s ease forwards;opacity:0">'+a.name+'</div><div style="margin-top:12px;font-size:11px;color:var(--text-secondary);animation:fadeIn 1s 2s ease forwards;opacity:0">'+a.desc+'</div><button class="btn btn--primary" id="fusion-done" style="margin-top:32px;padding:14px 36px;animation:fadeIn 1s 2.5s ease forwards;opacity:0">CONTINUER</button></div><style>@keyframes crystalGlow { from{filter:drop-shadow(0 0 20px '+t+") brightness(1)} to{filter:drop-shadow(0 0 50px "+t+") brightness(1.4)} }</style>",document.body.appendChild(e),setTimeout(()=>{document.getElementById("fusion-done")?.addEventListener("click",()=>{e.remove(),Mt()})},100)}const ma={guerrier:{hp:1.5,def:1.5,atk:1,magDef:.5,spd:.3,magAtk:0},mage:{hp:.8,def:.3,atk:0,magDef:1.2,spd:.5,magAtk:2},arche:{hp:.7,def:.4,atk:1.8,magDef:.3,spd:1.5,magAtk:0},assassin:{hp:.6,def:.3,atk:1.6,magDef:.2,spd:2,magAtk:0}},be=["commun","peucommun","rare","epique","legendaire","mythique","ultimate"],ne={rare:{color:"#3B82F6",label:"Rare"},epique:{color:"#9333EA",label:"Epique"},legendaire:{color:"#C89B3C",label:"Legendaire"},ultimate:{color:"#F5F0E8",label:"Ultimate"}},ft={guerrier:"#f87171",mage:"#c084fc",arche:"#86efac",assassin:"#ff6b9d"},Lt={hp:"HP",atk:"ATK",def:"DEF",spd:"SPD",magAtk:"MAG",magDef:"RES"};let nt="overview",pt=null,Tt="all",ot="rarity",zt="all",St="all";function _e(){const a=document.getElementById("app");a.innerHTML=`
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
          <button class="dash-tab ${t===nt?"dash-tab--active":""}" data-tab="${t}" id="tab-${t}" style="
            flex:1;min-width:100px;padding:14px 8px;background:none;border:none;
            border-bottom:2px solid ${t===nt?"var(--accent)":"transparent"};
            color:${t===nt?"var(--accent-light)":"var(--text-muted)"};
            font-family:var(--font-ui);font-size:11px;font-weight:700;letter-spacing:2px;
            text-transform:uppercase;cursor:pointer;transition:all 0.2s;white-space:nowrap
          ">${ua(t)}</button>
        `).join("")}
      </div>

      <!-- Content -->
      <div id="dash-content" style="flex:1;overflow-y:auto;overflow-x:hidden;scrollbar-width:thin;scrollbar-color:rgba(200,155,60,0.1) transparent">
      </div>
    </div>
  `,document.getElementById("dash-back").addEventListener("click",()=>k.navigate("home")),document.querySelectorAll(".dash-tab").forEach(t=>{t.addEventListener("click",()=>{nt=t.dataset.tab,_e()})}),J()}function ua(a){return{overview:"Apercu",team:"Equipe",characters:"Personnages",inventory:"Inventaire",forge:"Forge"}[a]}function J(){const a=document.getElementById("dash-content");if(a)switch(nt){case"overview":a.innerHTML=va();break;case"team":a.innerHTML=xa(),ya();return;case"characters":a.innerHTML=$a(),ka();return;case"inventory":a.innerHTML=Ea(),Ia();return;case"forge":a.innerHTML=Ta();break}}function va(){const a=g.state,t=a.profile||{pseudo:"Forgeant",level:1,xp:0},e=a.totalBattles>0?Math.round(a.totalWins/a.totalBattles*100):0,i=a.ownedCharacters.length,r=t.level*100,n=Math.min(100,Math.round(t.xp/r*100)),s=["enchantement","osiris","supplice","maragorh","imotep"],d={enchantement:"Enchantement",osiris:"Osiris",supplice:"Supplice",maragorh:"Maragorh",imotep:"Imotep"},o=s.map(c=>{let p=0;for(let f=0;f<20;f++)g.getLevelFlames(c,f)>0&&p++;return{id:c,name:d[c],done:p,total:20,pct:Math.round(p/20*100)}}),l={rare:0,epique:0,legendaire:0,ultimate:0};return a.ownedCharacters.forEach(c=>{const p=R.find(f=>f.id===c.id);p&&l[p.rarity]!==void 0&&l[p.rarity]++}),Object.values(l).reduce((c,p)=>c+p,0),`
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
              <div style="height:100%;width:${n}%;background:var(--accent-gradient);border-radius:3px;transition:width 0.8s ease"></div>
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
        ${Ut("COMBATS",a.totalBattles,"#E8DCC8")}
        ${Ut("VICTOIRES",a.totalWins,"var(--success)")}
        ${Ut("TAUX VICTOIRE",e+"%",e>=50?"var(--legendaire)":"var(--danger)")}
      </div>

      <!-- Campaign Progress -->
      <div class="glass" style="padding:var(--space-xl);border-radius:var(--radius-xl);margin-bottom:var(--space-xl)">
        <div style="font-family:var(--font-title);font-size:11px;letter-spacing:3px;color:var(--text-muted);margin-bottom:var(--space-lg)">— PROGRESSION CAMPAGNE —</div>
        <div style="display:flex;flex-direction:column;gap:var(--space-md)">
          ${o.map(c=>`
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
          ${Object.entries(l).map(([c,p])=>{const f=ne[c],m=Math.round(p/i*100)||0;return`
              <div style="text-align:center">
                <div style="font-family:var(--font-stat);font-size:32px;font-weight:700;color:${f.color};margin-bottom:4px">${p}</div>
                <div style="font-size:9px;color:var(--text-muted);letter-spacing:2px">${f.label.toUpperCase()}</div>
                <div style="margin-top:8px;height:4px;background:rgba(0,0,0,0.5);border-radius:2px;overflow:hidden">
                  <div style="height:100%;width:${m}%;background:${f.color};border-radius:2px"></div>
                </div>
              </div>
            `}).join("")}
        </div>
      </div>

    </div>
  `}function Ut(a,t,e){return`
    <div class="glass" style="padding:var(--space-xl) var(--space-md);border-radius:var(--radius-xl);text-align:center">
      <div style="font-family:var(--font-stat);font-size:40px;font-weight:700;color:${e};line-height:1">${t}</div>
      <div style="font-family:var(--font-ui);font-size:9px;color:var(--text-muted);letter-spacing:3px;margin-top:8px">${a}</div>
    </div>
  `}function xa(){const a=g.getTeamInstances(),t=ha(a);return`
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
        ${a.length?a.map(e=>ba(e)).join(""):`<div style="color:var(--text-muted);text-align:center;padding:var(--space-xxxl);grid-column:1/-1">Aucun personnage dans l'equipe</div>`}
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
                ${Object.values(Lt).map(e=>`<th style="text-align:center;padding:10px;font-size:10px;letter-spacing:2px;color:var(--text-muted);border-bottom:1px solid var(--border-metal)">${e}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${a.map((e,i)=>`
                <tr style="background:${i%2?"transparent":"rgba(200,155,60,0.02)"}">
                  <td style="padding:10px;border-bottom:1px solid rgba(200,155,60,0.04)">
                    <div style="font-weight:700;font-size:13px;color:var(--text-primary)">${e.name}</div>
                    <div style="font-size:10px;color:${ft[e.type]};letter-spacing:1px">${e.type.toUpperCase()}</div>
                  </td>
                  ${Object.keys(Lt).map(r=>{const n=Math.max(...a.map(o=>o.stats[r]||0)),s=e.stats[r]||0,d=n>0?Math.round(s/n*100):0;return`<td style="padding:10px;text-align:center;border-bottom:1px solid rgba(200,155,60,0.04)">
                      <div style="font-family:var(--font-stat);font-size:14px;font-weight:700;color:${s===n&&n>0?"var(--legendaire)":"var(--text-primary)"}">${s}</div>
                      <div style="width:40px;height:3px;background:rgba(0,0,0,0.4);border-radius:2px;margin:4px auto 0">
                        <div style="height:100%;width:${d}%;background:${ft[e.type]};border-radius:2px"></div>
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
  `}function ba(a){const t=ye(a.stats,90),e=ft[a.type]||"var(--accent)",i=Ze[a.rarity?.toUpperCase()]?.color||"#aaa",r=g.getCharacterBonusStats(a.id),n=Object.values(r).some(s=>s>0);return`
    <div class="glass" style="padding:var(--space-lg);border-radius:var(--radius-xl);text-align:center;border-color:rgba(${Sa(e)},0.2);position:relative">
      <div style="position:absolute;top:10px;right:12px;font-family:var(--font-stat);font-size:9px;font-weight:700;color:${i};letter-spacing:2px">${a.rarity?.toUpperCase()}</div>

      <!-- Radar SVG -->
      <svg viewBox="0 0 200 200" style="width:140px;height:140px;margin:0 auto var(--space-md)">
        <!-- Grid hexagons -->
        ${[.33,.66,1].map(s=>`<polygon points="${ye({hp:1,atk:1,def:1,spd:1,magAtk:1,magDef:1},90*s)}" fill="none" stroke="rgba(200,155,60,0.12)" stroke-width="1"/>`).join("")}
        <!-- Axes -->
        ${Aa(90).map(([s,d])=>`<line x1="100" y1="100" x2="${s}" y2="${d}" stroke="rgba(200,155,60,0.08)" stroke-width="1"/>`).join("")}
        <!-- Data -->
        <polygon points="${t}" fill="${e}22" stroke="${e}" stroke-width="1.5" opacity="0.9"/>
        <!-- Labels -->
        ${Ca(a.stats,90)}
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

      ${n?'<div style="font-size:9px;color:var(--legendaire);letter-spacing:1px">+ BONUS ITEMS ACTIFS</div>':""}
    </div>
  `}function ya(){document.getElementById("btn-optimize")?.addEventListener("click",()=>{const a=wa();a&&(g.setTeam(a),J())})}function ha(a){if(!a.length)return{label:"Equipe vide",bonus:""};const t={};a.forEach(r=>{t[r.type]=(t[r.type]||0)+1});const e=Object.entries(t).sort((r,n)=>n[1]-r[1])[0],i=e[0].charAt(0).toUpperCase()+e[0].slice(1);return e[1]===4?{label:`Meute ${i}`,bonus:`+15% toutes les stats (${i})`}:e[1]===3?{label:`Formation ${i}`,bonus:`+10% ATK +5% SPD (${i})`}:e[1]===2?{label:`Duo ${i}`,bonus:`+5% ATK (${i})`}:Object.keys(t).length===4?{label:"Composition Mixte",bonus:"+3% SPD globale (flexibilite)"}:{label:"Standard",bonus:""}}function wa(){const a=g.state.ownedCharacters;return a.length<1?null:a.map(e=>{const i=R.find(n=>n.id===e.id);if(!i)return null;const r={rare:1,epique:1.3,legendaire:1.7,ultimate:2.2}[i.rarity]||1;return{id:e.id,score:e.level*r}}).filter(Boolean).sort((e,i)=>i.score-e.score).slice(0,4).map(e=>e.id)}function $a(){let t=g.getOwnedInstances();return Tt!=="all"&&(t=t.filter(e=>e.type===Tt)),t.sort((e,i)=>ot==="rarity"?be.indexOf(i.rarity||"rare")-be.indexOf(e.rarity||"rare"):ot==="level"?i.level-e.level:ot==="atk"?i.stats.atk+i.stats.magAtk-(e.stats.atk+e.stats.magAtk):0),`
    <div style="display:flex;height:100%">
      <!-- Left: list -->
      <div style="flex:0 0 320px;border-right:1px solid var(--border-metal);overflow-y:auto;padding:var(--space-md);">
        <!-- Filters -->
        <div style="display:flex;gap:6px;margin-bottom:var(--space-md);flex-wrap:wrap">
          ${["all","guerrier","mage","arche","assassin"].map(e=>`
            <button class="btn btn--sm ${e===Tt?"btn--primary":"btn--ghost"}" data-cfilter="${e}" style="flex:1;min-width:60px;padding:6px 4px;font-size:9px">${e==="all"?"TOUS":e.toUpperCase()}</button>
          `).join("")}
        </div>
        <div style="display:flex;gap:6px;margin-bottom:var(--space-md)">
          ${["rarity","level","atk"].map(e=>`
            <button class="btn btn--sm ${e===ot?"btn--primary":"btn--ghost"}" data-csort="${e}" style="flex:1;font-size:9px">${e==="atk"?"ATK":e.toUpperCase()}</button>
          `).join("")}
        </div>
        <!-- Char list -->
        <div style="display:flex;flex-direction:column;gap:8px">
          ${t.map(e=>{const i=e.id===pt,r=ne[e.rarity]||{color:"#aaa"};return`
              <div class="char-list-item ${i?"char-list-item--active":""}" data-charid="${e.id}" style="
                display:flex;align-items:center;gap:12px;padding:12px;border-radius:var(--radius-md);
                background:${i?"rgba(192,57,11,0.15)":" rgba(20,12,6,0.6)"};
                border:1px solid ${i?"var(--accent)":"var(--border-metal)"};
                cursor:pointer;transition:all 0.2s
              ">
                <div style="width:40px;height:40px;border-radius:var(--radius-sm);background:rgba(200,155,60,0.05);border:1px solid ${r.color}22;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0">
                  ${za(e.type)}
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
        ${pt?De(pt):Qt()}
      </div>
    </div>
  `}function Qt(){return`<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:var(--text-muted);gap:var(--space-md)">
    <div style="font-size:48px;opacity:0.2">&#9876;</div>
    <div style="font-family:var(--font-title);font-size:12px;letter-spacing:3px">SELECTIONNEZ UN PERSONNAGE</div>
  </div>`}function De(a){const t=g.state.ownedCharacters.find(l=>l.id===a);if(!t)return Qt();const e=ct(a,t.level);if(!e)return Qt();const i=g.getCharacterBonusStats(a),r=ft[e.type]||"var(--accent)",n=ne[e.rarity]||{color:"#aaa"},s=e.skills.map(l=>{let c=0,p="",f="var(--text-secondary)";return l.type==="physical"?(c=Math.round(l.power/100*e.stats.atk),p=c+" DPS",f="#E85D20"):l.type==="magical"?(c=Math.round(l.power/100*e.stats.magAtk),p=c+" MAG",f="#c084fc"):l.type==="heal"?(c=Math.round(l.power/100*e.stats.magAtk),p=c+" SOIN",f="#4A7C59"):(p="Soutien",f="var(--text-muted)"),{...l,dps:c,dpsLabel:p,dpsColor:f}}),d=Oe(e,a,3),o=g.getCharacterEquipped(a);return`
    <!-- Header -->
    <div style="display:flex;align-items:flex-start;gap:var(--space-xl);margin-bottom:var(--space-xl)">
      <div>
        <div style="font-family:var(--font-title);font-size:20px;color:var(--text-bright);letter-spacing:2px;margin-bottom:6px">${e.name}</div>
        <div style="display:flex;gap:var(--space-sm);flex-wrap:wrap">
          <span style="font-size:10px;color:${r};letter-spacing:2px;background:${r}15;padding:3px 10px;border-radius:var(--radius-sm);border:1px solid ${r}30">${e.type.toUpperCase()}</span>
          <span style="font-size:10px;color:${n.color};letter-spacing:2px;background:${n.color}15;padding:3px 10px;border-radius:var(--radius-sm);border:1px solid ${n.color}30">${e.rarity?.toUpperCase()}</span>
          <span style="font-size:10px;color:var(--text-muted);letter-spacing:2px;padding:3px 10px">NIV.${e.level}</span>
        </div>
        <div style="font-size:12px;color:var(--text-secondary);margin-top:var(--space-sm);font-style:italic">${e.desc||""}</div>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="glass" style="padding:var(--space-lg);border-radius:var(--radius-xl);margin-bottom:var(--space-lg)">
      <div style="font-family:var(--font-title);font-size:10px;letter-spacing:3px;color:var(--text-muted);margin-bottom:var(--space-md)">— STATISTIQUES —</div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-md)">
        ${Object.entries(Lt).map(([l,c])=>{const p=e.stats[l]||0,f=i[l]||0,m=p+f;return`
            <div style="padding:10px;background:rgba(0,0,0,0.3);border-radius:var(--radius-md);border:1px solid var(--border)">
              <div style="font-size:9px;color:var(--text-muted);letter-spacing:2px;margin-bottom:4px">${c}</div>
              <div style="display:flex;align-items:baseline;gap:6px">
                <span style="font-family:var(--font-stat);font-size:22px;font-weight:700;color:var(--text-bright)">${m}</span>
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
          ${s.map((l,c)=>`
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
        ${Object.entries(tt).map(([l,c])=>{const p=o[l],f=p?g.state.inventory.find(x=>x.instanceId===p):null,m=f?O[f.itemId]:null,u=m?q[m.rarity]?.color||"#aaa":"var(--text-muted)";return`
            <div style="text-align:center;padding:var(--space-md);background:rgba(0,0,0,0.3);border-radius:var(--radius-md);border:1px solid ${m?u+"40":"var(--border)"}">
              <div style="font-size:24px;margin-bottom:var(--space-xs)">${m?Bt(m.id):"&#9711;"}</div>
              <div style="font-size:9px;color:${m?u:"var(--text-muted)"};letter-spacing:1px">${m?m.name:c.name.toUpperCase()}</div>
              ${m?`<div style="font-size:8px;color:var(--text-muted);margin-top:4px">${Object.entries(m.stats||{}).map(([x,$])=>"+"+$+" "+x.toUpperCase()).join(" ")}</div>`:""}
            </div>
          `}).join("")}
      </div>
    </div>

    <!-- Recommandations -->
    ${d.length?`
    <div class="glass" style="padding:var(--space-lg);border-radius:var(--radius-xl);border-color:rgba(200,155,60,0.2)">
      <div style="font-family:var(--font-title);font-size:10px;letter-spacing:3px;color:var(--legendaire);margin-bottom:var(--space-md)">— ITEMS RECOMMANDES —</div>
      <div style="display:flex;flex-direction:column;gap:var(--space-sm)">
        ${d.map((l,c)=>{const p=q[l.item.rarity]?.color||"#aaa";return`
            <div style="display:flex;align-items:center;gap:var(--space-md);padding:12px;background:rgba(0,0,0,0.3);border-radius:var(--radius-md);border:1px solid ${p}30">
              <div style="font-family:var(--font-stat);font-size:20px;font-weight:700;color:var(--text-muted);width:24px">#${c+1}</div>
              <div style="font-size:22px">${Bt(l.item.id)}</div>
              <div style="flex:1">
                <div style="font-size:13px;font-weight:700;color:var(--text-primary)">${l.item.name}</div>
                <div style="font-size:10px;color:${p};letter-spacing:1px">${l.item.rarity?.toUpperCase()} · ${l.item.slot.toUpperCase()}</div>
                <div style="font-size:10px;color:var(--text-secondary);margin-top:2px">${Object.entries(l.item.stats||{}).map(([f,m])=>"+"+m+" "+f.toUpperCase()).join(", ")}</div>
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
  `}function ka(){document.querySelectorAll("[data-cfilter]").forEach(a=>{a.addEventListener("click",()=>{Tt=a.dataset.cfilter,J()})}),document.querySelectorAll("[data-csort]").forEach(a=>{a.addEventListener("click",()=>{ot=a.dataset.csort,J()})}),document.querySelectorAll("[data-charid]").forEach(a=>{a.addEventListener("click",()=>{pt=a.dataset.charid;const t=document.getElementById("char-detail-panel");t&&(t.innerHTML=De(pt))})})}function Ea(){let t=g.getInventoryItems();zt!=="all"&&(t=t.filter(r=>r.slot===zt)),St!=="all"&&(t=t.filter(r=>r.rarity===St));const i=g.getTeamInstances().map(r=>{const n=Oe(r,r.id,2);return{char:r,recs:n}}).filter(r=>r.recs.length>0);return`
    <div style="padding:var(--space-xl);max-width:1100px;margin:0 auto">

      <!-- Filtres -->
      <div style="display:flex;gap:var(--space-sm);margin-bottom:var(--space-md);flex-wrap:wrap">
        ${["all","weapon","armor","accessory","amulet"].map(r=>`
          <button class="btn btn--sm ${r===zt?"btn--primary":"btn--ghost"}" data-ifilter="${r}">${r==="all"?"TOUS":tt[r]?.name.toUpperCase()||r.toUpperCase()}</button>
        `).join("")}
        <div style="width:1px;background:var(--border-metal);margin:0 4px"></div>
        ${["all","commun","peu_commun","rare","epique","legendaire"].map(r=>`
          <button class="btn btn--sm ${r===St?"btn--primary":"btn--ghost"}" data-irarity="${r}">${r==="all"?"ALL":r.toUpperCase()}</button>
        `).join("")}
      </div>

      <!-- Item Count -->
      <div style="font-size:11px;color:var(--text-muted);letter-spacing:2px;margin-bottom:var(--space-lg)">${t.length} objet(s)</div>

      <!-- Grid Items -->
      ${t.length?`
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:var(--space-md);margin-bottom:var(--space-xxl)">
        ${t.map(r=>{const n=q[r.rarity]?.color||"#aaa",s=Object.values(g.state.equipped).some(d=>Object.values(d).includes(r.instanceId));return`
            <div class="glass" style="padding:var(--space-md);border-radius:var(--radius-lg);text-align:center;cursor:default;border-color:${n}30;position:relative;transition:transform 0.2s" title="${r.desc||""}">
              ${s?'<div style="position:absolute;top:6px;right:6px;font-size:8px;color:var(--success);letter-spacing:1px;background:rgba(74,124,89,0.2);padding:2px 6px;border-radius:2px;border:1px solid rgba(74,124,89,0.3)">EQUIPE</div>':""}
              <div style="font-size:28px;margin-bottom:8px">${Bt(r.id)}</div>
              <div style="font-size:11px;font-weight:700;color:var(--text-primary);line-height:1.3;margin-bottom:4px">${r.name}</div>
              <div style="font-size:9px;color:${n};letter-spacing:1px;margin-bottom:6px">${r.rarity?.toUpperCase().replace("_"," ")}</div>
              <div style="font-size:9px;color:var(--text-secondary)">${Object.entries(r.stats||{}).map(([d,o])=>"+"+o+" "+d.toUpperCase()).join("<br>")}</div>
            </div>
          `}).join("")}
      </div>
      `:`<div style="text-align:center;padding:var(--space-xxxl);color:var(--text-muted)">Aucun item dans l'inventaire</div>`}

      <!-- Team Recommendations -->
      ${i.length?`
      <div class="glass" style="padding:var(--space-xl);border-radius:var(--radius-xl);border-color:rgba(200,155,60,0.2)">
        <div style="font-family:var(--font-title);font-size:10px;letter-spacing:3px;color:var(--legendaire);margin-bottom:var(--space-lg)">— RECOMMANDATIONS POUR L'EQUIPE —</div>
        <div style="display:flex;flex-direction:column;gap:var(--space-lg)">
          ${i.map(({char:r,recs:n})=>`
            <div>
              <div style="font-size:12px;font-weight:700;color:${ft[r.type]};letter-spacing:1px;margin-bottom:8px">${r.name.toUpperCase()}</div>
              <div style="display:flex;gap:var(--space-md);flex-wrap:wrap">
                ${n.map(s=>{const d=q[s.item.rarity]?.color||"#aaa";return`
                    <div style="display:flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(0,0,0,0.3);border-radius:var(--radius-md);border:1px solid ${d}30">
                      <span style="font-size:20px">${Bt(s.item.id)}</span>
                      <div>
                        <div style="font-size:11px;font-weight:700;color:var(--text-primary)">${s.item.name}</div>
                        <div style="font-size:9px;color:${d}">${s.item.rarity?.toUpperCase().replace("_"," ")}</div>
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
  `}function Ia(){document.querySelectorAll("[data-ifilter]").forEach(a=>{a.addEventListener("click",()=>{zt=a.dataset.ifilter,J()})}),document.querySelectorAll("[data-irarity]").forEach(a=>{a.addEventListener("click",()=>{St=a.dataset.irarity,J()})})}function Ta(){return`
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
  `}function Oe(a,t,e=3){const i=ma[a.type]||{},r=g.getCharacterEquipped(t),n=new Set(Object.values(r).filter(Boolean));return g.state.inventory.filter(s=>!n.has(s.instanceId)).map(s=>{const d=O[s.itemId];if(!d||!d.stats)return null;let o=0;for(const[l,c]of Object.entries(d.stats))o+=c*(i[l]||0);return{item:{...d,instanceId:s.instanceId},score:o}}).filter(Boolean).sort((s,d)=>d.score-s.score).slice(0,e)}function za(a){return{guerrier:"&#9876;",mage:"&#9670;",arche:"&#8982;",assassin:"&#8693;"}[a]||"?"}function Bt(a){return{epee_rouille:"&#9876;",lame_forestiere:"&#9876;",baton_mage:"&#9670;",arc_elfique:"&#8982;",dague_ombre:"&#8693;",sceptre_samael:"&#9760;",gambison_use:"&#9711;",cuirasse_ecailles:"&#9680;",robe_arcane:"&#9670;",armure_maragorh:"&#9680;",egide_samael:"&#9680;",amulette_vitalite:"&#9711;",ceinture_force:"&#9711;",anneau_rapidite:"&#9711;",orbe_enchantement:"&#9670;",pendentif_chance:"&#9670;",collier_precision:"&#9671;",talisman_nature:"&#9671;",phylactere_samael:"&#9760;"}[a]||"&#9671;"}function Sa(a){if(!a.startsWith("#"))return"192,57,11";const t=parseInt(a.slice(1,3),16),e=parseInt(a.slice(3,5),16),i=parseInt(a.slice(5,7),16);return`${t},${e},${i}`}const Rt=["hp","atk","def","spd","magAtk","magDef"],oe=a=>a*2*Math.PI/6-Math.PI/2;function ye(a,t){const r={hp:800,atk:200,def:200,spd:150,magAtk:220,magDef:200},n={};for(const s of Rt)n[s]=Math.max(r[s],(a[s]||0)*1.2);return Rt.map((s,d)=>{const c=Math.min(a[s]||0,n[s])/(n[s]||1)*t,p=oe(d),f=100+c*Math.cos(p),m=100+c*Math.sin(p);return`${f.toFixed(1)},${m.toFixed(1)}`}).join(" ")}function Aa(a){return Rt.map((i,r)=>{const n=oe(r);return[100+a*Math.cos(n),100+a*Math.sin(n)]})}function Ca(a,t){return Rt.map((r,n)=>{const s=oe(n),d=t+18,o=100+d*Math.cos(s),l=100+d*Math.sin(s);return`<text x="${o.toFixed(1)}" y="${l.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" fill="rgba(255,107,157,0.7)" font-size="11" font-family="DM Sans">${Lt[r]}</text>`}).join("")}function Ma(){const a=document.getElementById("app"),t=g.state,e=g.ACHIEVEMENTS,i=t.achievements||{},r=Object.keys(i).length,n=e.length,s=Math.round(r/n*100);g.checkAchievements(),a.innerHTML=`
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
          ${r} / ${n}
        </div>
      </div>

      <!-- Progress Banner -->
      <div style="background:rgba(10,8,18,0.95);border-bottom:1px solid rgba(192,132,252,0.06);
        padding:20px 32px;flex-shrink:0;z-index:2">
        <div style="max-width:700px;margin:0 auto">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
            <div style="font-family:var(--font-ui);font-size:11px;letter-spacing:3px;color:var(--epique)">PROGRESSION GLOBALE</div>
            <div style="font-family:var(--font-stat);font-size:14px;font-weight:700;color:var(--text-bright)">${s}%</div>
          </div>
          <div style="height:8px;background:rgba(0,0,0,0.6);border-radius:4px;overflow:hidden;border:1px solid rgba(192,132,252,0.1)">
            <div style="height:100%;width:${s}%;border-radius:4px;
              background:linear-gradient(90deg,#c084fc,#ff6b9d);
              box-shadow:0 0 15px rgba(192,132,252,0.5);
              transition:width 1s cubic-bezier(0.4,0,0.2,1)"></div>
          </div>
          <div style="margin-top:8px;font-size:10px;color:var(--text-muted)">
            ${r<n?`${n-r} succès restants`:"🎉 Tous les succès débloqués !"}
          </div>
        </div>
      </div>

      <!-- Achievement Grid -->
      <div style="flex:1;overflow-y:auto;padding:24px 32px;scrollbar-width:thin;scrollbar-color:rgba(192,132,252,0.15) transparent">
        <div style="max-width:900px;margin:0 auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:16px">
          ${e.map(d=>{const o=!!i[d.id],l=i[d.id]?.unlockedAt,c=l?new Date(l).toLocaleDateString("fr-FR"):null;return`
              <div style="
                position:relative;overflow:hidden;
                background:${o?"linear-gradient(135deg,rgba(18,12,30,0.97),rgba(12,8,22,0.99))":"rgba(10,8,16,0.6)"};
                border:1px solid ${o?"rgba(192,132,252,0.35)":"rgba(255,255,255,0.04)"};
                border-radius:12px;padding:20px;
                ${o?"box-shadow:0 0 20px rgba(192,132,252,0.08);":"opacity:0.6;"}
                transition:transform 0.2s ease,box-shadow 0.2s ease;
                ${o?"animation:achieveCardIn 0.3s ease;":""}
              " class="ach-card">
                <!-- Top glow line (only if unlocked) -->
                ${o?`<div style="position:absolute;top:0;left:20%;right:20%;height:1px;
                  background:linear-gradient(90deg,transparent,rgba(192,132,252,0.6),transparent)"></div>`:""}

                <div style="display:flex;align-items:flex-start;gap:14px">
                  <!-- Icon -->
                  <div style="
                    width:52px;height:52px;border-radius:10px;flex-shrink:0;
                    display:flex;align-items:center;justify-content:center;font-size:26px;
                    background:${o?"rgba(192,132,252,0.12)":"rgba(0,0,0,0.3)"};
                    border:1px solid ${o?"rgba(192,132,252,0.25)":"rgba(255,255,255,0.04)"};
                    ${o?"filter:drop-shadow(0 0 8px rgba(192,132,252,0.4));":"filter:grayscale(1);opacity:0.4;"}
                  ">${d.icon}</div>

                  <!-- Info -->
                  <div style="flex:1;min-width:0">
                    <div style="font-family:var(--font-title);font-size:13px;font-weight:700;
                      color:${o?"#faf5ff":"var(--text-muted)"};
                      letter-spacing:0.5px;margin-bottom:4px">
                      ${o?d.title:"???"}
                    </div>
                    <div style="font-size:11px;color:${o?"var(--text-secondary)":"var(--text-muted)"};line-height:1.5">
                      ${o?d.desc:"Condition non remplie"}
                    </div>
                    ${d.reward>0?`
                      <div style="margin-top:6px;font-family:var(--font-stat);font-size:10px;
                        color:${o?"rgba(252,211,77,0.8)":"rgba(252,211,77,0.2)"};font-weight:700">
                        ⭐ +${d.reward} Archirêves
                      </div>`:""}
                    ${c?`<div style="margin-top:4px;font-size:9px;color:var(--text-muted);letter-spacing:1px">
                      Débloqué le ${c}</div>`:""}
                  </div>

                  <!-- Badge -->
                  ${o?`
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
  `,document.getElementById("back-btn").addEventListener("click",()=>k.navigate("home"))}const Ht={gardien_enchante:{line:`"Vous osez fouler ces terres sacrées ?
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
...Vous osez ? Vous OSEZ défier la divinité ?"`,mood:"evil"}},he=['"Préparez-vous à votre fin !"','"Vous ne passerez pas !"','"Ces terres vous sont interdites !"','"Vous êtes trop faibles pour avancer !"'],we={warn:{border:"rgba(252,211,77,0.5)",glow:"rgba(252,211,77,0.15)",text:"#fcd34d"},evil:{border:"rgba(239,68,68,0.5)",glow:"rgba(239,68,68,0.15)",text:"#fb7185"},beast:{border:"rgba(134,239,172,0.4)",glow:"rgba(134,239,172,0.1)",text:"#86efac"}};function La(a={}){const{zone:t,level:e}=a,i=parseInt(e||0),r=N.find(b=>b.id===t);if(!r){k.navigate("campaign");return}const n=i===(r.levels||20)-1,s=g.getTeamInstances(),d=document.getElementById("app");let o="",l="warn";n&&Ht[r.boss.id]?(o=Ht[r.boss.id].line,l=Ht[r.boss.id].mood):n||(o=he[Math.floor(Math.random()*he.length)],l="warn");const c=we[l]||we.warn,p=n?r.boss.name:r.enemyTypes[Math.floor(Math.random()*r.enemyTypes.length)].replace(/_/g," ").replace(/\b\w/g,b=>b.toUpperCase()),f=n?r.boss.icon:r.icon,m=n?Kt(!1):Jt(),u=n?`BOSS — ${r.name}`:`Niveau ${i+1} — ${r.name}`;d.innerHTML=`
    <div id="vs-screen" style="
      width:100vw;height:100vh;overflow:hidden;position:relative;
      ${r.bgImage?`background-image:linear-gradient(to right,rgba(0,0,0,0.85),rgba(0,0,0,0.5),rgba(0,0,0,0.85)),url('${r.bgImage}');background-size:cover;background-position:center;`:"background:#0c0a12;"}
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
            ${s.map(b=>`
              <div style="text-align:center">
                <img src="${B((b.type||"guerrier").split("/")[0])}"
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
            ${n?"⚠ BOSS":"Ennemis"}
          </div>

          <div style="text-align:center">
            <img src="${m}"
              style="width:${n?"120px":"90px"};height:${n?"120px":"90px"};image-rendering:pixelated;
              filter:drop-shadow(0 0 15px rgba(239,68,68,0.5)) drop-shadow(0 4px 8px rgba(0,0,0,0.9));
              animation:spriteIdle 2.5s ease-in-out infinite;transform:scaleX(-1)">
            <div style="font-family:var(--font-title);font-size:${n?"18px":"14px"};font-weight:700;
              color:var(--danger);letter-spacing:1px;margin-top:8px;
              text-shadow:0 0 15px rgba(239,68,68,0.4)">
              ${p}
            </div>
            ${n?`<div style="font-size:10px;color:var(--text-muted);letter-spacing:2px;margin-top:4px">${r.boss.type.toUpperCase()}</div>`:""}
          </div>
        </div>
      </div>

      <!-- Boss Dialogue (only for bosses or regular) -->
      ${o?`
      <div id="vs-dialogue" style="
        position:absolute;bottom:100px;left:50%;transform:translateX(-50%);
        max-width:600px;width:90%;
        background:rgba(8,6,14,0.95);
        border:1px solid ${c.border};
        border-radius:12px;padding:20px 24px;
        box-shadow:0 0 30px ${c.glow},0 8px 32px rgba(0,0,0,0.8);
        opacity:0;animation:vsDialogueIn 0.5s 1.4s ease forwards;
        z-index:20;
      ">
        <!-- Mood accent line -->
        <div style="position:absolute;top:0;left:20%;right:20%;height:1px;
          background:linear-gradient(90deg,transparent,${c.border},transparent)"></div>
        <div style="font-size:11px;color:${c.text};letter-spacing:2px;
          font-family:var(--font-ui);margin-bottom:8px;opacity:0.7">
          ${n?`${f} ${r.boss.name}`:`${r.icon} ENNEMI`}
        </div>
        <div style="font-family:var(--font-body);font-size:13px;color:var(--text-primary);
          line-height:1.7;white-space:pre-line;font-style:italic">${o}</div>
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
  `;const x=()=>{const b=document.getElementById("vs-screen");b?(b.style.transition="opacity 0.3s ease",b.style.opacity="0",setTimeout(()=>k.navigate("combat",{zone:t,level:i}),300)):k.navigate("combat",{zone:t,level:i})};document.getElementById("vs-fight-btn")?.addEventListener("click",x),document.getElementById("vs-back-btn")?.addEventListener("click",()=>k.navigate("campaign")),document.getElementById("vs-skip")?.addEventListener("click",x);const $=b=>{(b.code==="Space"||b.code==="Enter")&&(window.removeEventListener("keydown",$),x()),b.code==="Escape"&&(window.removeEventListener("keydown",$),k.navigate("campaign"))};window.addEventListener("keydown",$)}class Ba{constructor(){this.playlist=["./song/Break_the_Iron_Sky.mp3","./song/Shatter_the_Sky.mp3"],this.currentIndex=0,this.audio=null,this._volume=.4,this._muted=!1,this.isPlaying=!1,this.fadeDuration=2e3,this._onTrackEnd=this._playNext.bind(this)}start(){this.isPlaying||(this.isPlaying=!0,this.currentIndex=Math.floor(Math.random()*this.playlist.length),this._loadAndPlay(this.currentIndex))}stop(){this.isPlaying=!1,this.audio&&(this.audio.pause(),this.audio.removeEventListener("ended",this._onTrackEnd),this.audio=null)}toggleMute(){return this._muted=!this._muted,this.audio&&(this.audio.muted=this._muted),this._savePref(),this._muted}setVolume(t){this._volume=Math.max(0,Math.min(1,t)),this.audio&&(this.audio.volume=this._volume),this._savePref()}get volume(){return this._volume}get muted(){return this._muted}loadPrefs(){try{const t=JSON.parse(localStorage.getItem("rytiger_audio")||"{}");typeof t.volume=="number"&&(this._volume=t.volume),typeof t.muted=="boolean"&&(this._muted=t.muted)}catch{}}_savePref(){try{localStorage.setItem("rytiger_audio",JSON.stringify({volume:this._volume,muted:this._muted}))}catch{}}_loadAndPlay(t){this.audio&&(this.audio.removeEventListener("ended",this._onTrackEnd),this.audio.pause());const e=this.playlist[t];this.audio=new Audio(e),this.audio.volume=0,this.audio.muted=this._muted,this.audio.addEventListener("ended",this._onTrackEnd),this.audio.play().then(()=>{this._fadeIn()}).catch(i=>{console.warn("[AudioManager] Playback blocked:",i.message)})}_playNext(){this.isPlaying&&(this.currentIndex=(this.currentIndex+1)%this.playlist.length,this._loadAndPlay(this.currentIndex))}_fadeIn(){if(!this.audio)return;const t=this._volume,e=30,i=this.fadeDuration/e;let r=0;const n=setInterval(()=>{if(r++,!this.audio||r>=e){clearInterval(n),this.audio&&(this.audio.volume=t);return}const s=r/e;this.audio.volume=t*(s*s)},i)}}const mt=new Ba;g.init();mt.loadPrefs();k.on("profile",()=>Ae()).on("home",()=>$e()).on("campaign",()=>Ee()).on("combat",a=>qt(a)).on("vs",a=>La(a)).on("invocation",()=>Vt()).on("team",()=>F()).on("dungeon",()=>ea()).on("inventory",()=>na()).on("forge",()=>Mt()).on("dashboard",()=>_e()).on("achievements",()=>Ma());Ra();function Ra(){const a=document.getElementById("app");let t=!1;a.innerHTML=`
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
          ${Array.from({length:16},(s,d)=>{const o=d/16*Math.PI*2-Math.PI/2,l=250+205*Math.cos(o),c=250+205*Math.sin(o),p=["☥","⛨","☦","⚳","♁","⛩","⯯","⛠","⬣","☥","⛨","⚳","☦","♁","⛩","⛠"];return`<text x="${l.toFixed(1)}" y="${c.toFixed(1)}" text-anchor="middle" dominant-baseline="middle"
              fill="rgba(200,150,60,0)" font-size="13" font-family="'Cinzel',serif" id="rune-${d}"
              style="transition:fill 0.6s ease ${3+d*.15}s">
              ${p[d]}
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
        ${["R","Y","T","I","G","E","R"].map((s,d)=>`
          <span id="letter-${d}" style="
            opacity:0;
            background:linear-gradient(135deg,#7A5A1A,#C8963C,#F0D060,#C8963C);
            -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
            display:inline-block;
            filter:drop-shadow(0 0 0px rgba(200,150,60,0));
            transition:opacity 0.4s ease, filter 1.5s ease, transform 0.6s cubic-bezier(0.34,1.56,0.64,1);
            transform:translateY(20px) scale(0.5);
          ">${s}</span>
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
  `;const e=[{t:300,fn:()=>{S("load-bg-glow").style.opacity="1"}},{t:1500,fn:()=>{S("rune-circle").style.opacity="1"}},{t:2500,fn:()=>{for(let s=0;s<16;s++){const d=S(`rune-${s}`);d&&(d.style.fill="rgba(255,107,157,0.6)")}}},{t:3500,fn:()=>{const s=S("forge-symbol");s.style.fontSize="72px",s.style.opacity="1",s.style.filter="drop-shadow(0 0 30px rgba(200,150,60,0.8))"}},{t:4e3,fn:()=>Pa(80)},{t:4500,fn:()=>{const s=S("epic-loading");s.style.animation="screenShake 0.4s cubic-bezier(0.36,0.07,0.19,0.97)",setTimeout(()=>s.style.animation="",400)}},{t:4700,fn:()=>{const s=S("golden-flash");s.style.opacity="0.6",setTimeout(()=>s.style.opacity="0",200)}},{t:5e3,fn:()=>{S("load-bg-gold").style.opacity="1"}},{t:5500,fn:()=>{const s=S("title-container");s.style.fontSize="52px",["R","Y","T","I","G","E","R"].forEach((d,o)=>{setTimeout(()=>{const l=S(`letter-${o}`);l&&(l.style.opacity="1",l.style.transform="translateY(0) scale(1)",l.style.filter="drop-shadow(0 0 20px rgba(200,150,60,0.6))",_a(l))},o*120)})}},{t:7500,fn:()=>{S("load-subtitle").style.color="rgba(200,150,60,0.5)"}},{t:8e3,fn:()=>{S("load-bar-wrap").style.opacity="1",S("load-text").style.color="rgba(200,150,60,0.55)",[{t:0,w:"15%"},{t:600,w:"35%"},{t:1200,w:"55%"},{t:2e3,w:"70%"},{t:2800,w:"85%"},{t:3500,w:"95%"},{t:4200,w:"100%"}].forEach(d=>{setTimeout(()=>{const o=S("load-bar-fill");o&&(o.style.width=d.w)},d.t)})}},{t:9e3,fn:()=>{Da(40,3e3)}},{t:12500,fn:()=>{const s=S("golden-flash");s.style.opacity="0.4",setTimeout(()=>s.style.opacity="0",300)}},{t:13500,fn:()=>n()}],i=[];e.forEach(s=>{i.push(setTimeout(()=>{t||s.fn()},s.t))});function r(){t||(t=!0,i.forEach(clearTimeout),n())}S("epic-loading")?.addEventListener("click",r),window.addEventListener("keydown",function s(d){(d.code==="Space"||d.key==="Escape")&&(r(),window.removeEventListener("keydown",s))}),Ke(Je());function n(){const s=S("epic-loading");s&&(s.style.transition="opacity 0.8s ease",s.style.opacity="0",setTimeout(()=>{s.remove(),k.start(),(window.location.hash===""||window.location.hash==="#")&&k.navigate("home"),mt.start(),Oa()},800))}}function S(a){return document.getElementById(a)}function Pa(a){const t=S("load-particles");if(t)for(let e=0;e<a;e++)setTimeout(()=>{const i=document.createElement("div"),r=Math.random()*Math.PI*2,n=100+Math.random()*400,s=1+Math.random()*3,d=1+Math.random()*1.5,o=["#ff6b9d","#ff8db6","#c084fc","#fcd34d","#fda4af"],l=o[Math.floor(Math.random()*o.length)];i.style.cssText=`
        position:absolute;left:50%;top:50%;
        width:${s}px;height:${s}px;
        background:${l};border-radius:50%;
        box-shadow:0 0 ${s*4}px ${l};
        opacity:0;
        animation:emberBurstParticle ${d}s ease forwards;
        --dx:${Math.cos(r)*n}px;
        --dy:${Math.sin(r)*n}px;
      `,t.appendChild(i),setTimeout(()=>i.remove(),d*1e3+100)},e*15)}function _a(a){const t=S("load-particles");if(!t||!a)return;const e=a.getBoundingClientRect();for(let i=0;i<6;i++){const r=document.createElement("div"),n=1+Math.random()*2;r.style.cssText=`
      position:absolute;
      left:${e.left+e.width*Math.random()}px;
      top:${e.top+e.height*Math.random()}px;
      width:${n}px;height:${n}px;
      background:#ff8db6;border-radius:50%;
      box-shadow:0 0 ${n*3}px #ff8db6;
      animation:letterSparkle 0.8s ease forwards;
      pointer-events:none;
    `,t.appendChild(r),setTimeout(()=>r.remove(),900)}}function Da(a,t){const e=S("load-particles");if(!e)return;const i=t/a;for(let r=0;r<a;r++)setTimeout(()=>{const n=document.createElement("div"),s=Math.random()*100,d=1+Math.random()*2.5,o=3+Math.random()*4,l=(Math.random()-.5)*80,c=["rgba(255,107,157,0.8)","rgba(192,132,252,0.7)","rgba(252,211,77,0.5)"],p=c[Math.floor(Math.random()*c.length)];n.style.cssText=`
        position:absolute;bottom:-10px;left:${s}%;
        width:${d}px;height:${d}px;
        background:${p};border-radius:50%;
        box-shadow:0 0 ${d*3}px ${p};
        opacity:0;
        animation:emberRise ${o}s ease-in forwards;
        --sway:${l}px;
      `,e.appendChild(n),setTimeout(()=>n.remove(),o*1e3+100)},r*i)}window.addEventListener("keydown",a=>{if(a.key==="Escape"&&window.location.hash!=="#home"&&window.location.hash!==""&&k.navigate("home"),a.key==="m"||a.key==="M"){const t=mt.toggleMute();Fe(t)}});function Oa(){if(document.getElementById("music-controls"))return;const a=document.createElement("div");a.id="music-controls",a.innerHTML=je(mt.muted),a.title="Musique (M pour mute)",a.style.cssText=`
    position: fixed; bottom: 20px; right: 20px; z-index: 9998;
    width: 44px; height: 44px; border-radius: 50%;
    background: rgba(20, 16, 12, 0.85);
    border: 1px solid rgba(200, 155, 60, 0.3);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: all 0.3s ease;
    backdrop-filter: blur(8px);
    box-shadow: 0 2px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(200,155,60,0.1);
  `,a.addEventListener("mouseenter",()=>{a.style.borderColor="rgba(200, 155, 60, 0.6)",a.style.boxShadow="0 2px 20px rgba(192,57,11,0.3), inset 0 1px 0 rgba(200,155,60,0.2)",a.style.transform="scale(1.1)"}),a.addEventListener("mouseleave",()=>{a.style.borderColor="rgba(200, 155, 60, 0.3)",a.style.boxShadow="0 2px 12px rgba(0,0,0,0.5), inset 0 1px 0 rgba(200,155,60,0.1)",a.style.transform="scale(1)"}),a.addEventListener("click",()=>{const t=mt.toggleMute();Fe(t)}),document.body.appendChild(a)}function Fe(a){const t=document.getElementById("music-controls");t&&(t.innerHTML=je(a))}function je(a){return a?`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
      <line x1="23" y1="9" x2="17" y2="15"/>
      <line x1="17" y1="9" x2="23" y2="15"/>
    </svg>`:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C89B3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
  </svg>`}
