const fs = require('fs');

const name = '\u5F6D\u5B87\u6770';
const email = 'pengyujie2004@163.com';
const wechat = '\u63A2\u8BA2--2050';

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name} - AIGC\u89C6\u9891\u4F5C\u54C1\u96C6</title>
    <style>
        :root { --bg-primary:#0a0a0f;--bg-secondary:#111118;--bg-card:#1a1a24;--bg-card-hover:#22222e;--text-primary:#f0f0f5;--text-secondary:#b0b0c0;--text-muted:#78788c;--accent:#9b8cf0;--accent-glow:rgba(155,140,240,0.35);--border-subtle:rgba(255,255,255,0.06);--border-card:rgba(255,255,255,0.1);--radius-sm:8px;--radius-md:14px;--radius-lg:22px;--shadow-card:0 8px 30px rgba(0,0,0,0.5);--shadow-modal:0 20px 60px rgba(0,0,0,0.8);--transition-fast:0.2s cubic-bezier(0.4,0,0.2,1);--transition-smooth:0.35s cubic-bezier(0.4,0,0.2,1);--nav-height:60px;--max-width:1200px; }
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei',sans-serif;background:var(--bg-primary);color:var(--text-primary);line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden}
        .nav-bar{position:fixed;top:0;left:0;right:0;z-index:1000;height:var(--nav-height);background:rgba(10,10,15,0.8);backdrop-filter:blur(20px);border-bottom:1px solid var(--border-subtle);display:flex;align-items:center;justify-content:space-between;padding:0 28px}
        .nav-logo{font-weight:700;font-size:1.1rem;color:#fff;text-decoration:none;display:flex;align-items:center;gap:8px}
        .nav-logo .dot{width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 12px var(--accent-glow);animation:pulse 2.5s infinite}
        @keyframes pulse{0%,100%{box-shadow:0 0 8px var(--accent-glow)}50%{box-shadow:0 0 20px rgba(155,140,240,0.7)}}
        .nav-actions{display:flex;align-items:center;gap:12px}
        .nav-link{color:var(--text-secondary);text-decoration:none;font-size:0.9rem;padding:8px 16px;border-radius:20px;transition:all var(--transition-fast)}
        .nav-link:hover{color:#fff;background:rgba(255,255,255,0.06)}
        .btn-resume-nav{background:var(--accent);color:#fff;border:none;padding:8px 20px;border-radius:22px;font-size:0.9rem;font-weight:600;cursor:pointer;text-decoration:none;transition:all var(--transition-fast);box-shadow:0 4px 18px var(--accent-glow)}
        .hero-section{position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden;padding:0 24px}
        .hero-overlay{position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(10,10,15,0.4) 0%,rgba(10,10,15,0.85) 80%)}
        .hero-inner{position:relative;z-index:2;max-width:750px;width:100%;backdrop-filter:blur(4px);padding:30px 20px;border-radius:30px;background:rgba(10,10,15,0.2)}
        .hero-badge{display:inline-block;font-size:0.8rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--accent);border:1px solid rgba(155,140,240,0.4);border-radius:20px;padding:5px 18px;margin-bottom:28px;background:rgba(155,140,240,0.08)}
        .hero-name{font-size:clamp(3rem,7vw,4.5rem);font-weight:800;letter-spacing:-0.03em;line-height:1.1;margin-bottom:10px;color:#fff}
        .hero-name .accent{color:var(--accent);text-shadow:0 0 25px var(--accent-glow)}
        .hero-subtitle{font-size:clamp(1rem,2.2vw,1.25rem);color:rgba(255,255,255,0.85);margin-bottom:30px}
        .hero-tags{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-bottom:38px}
        .hero-tag{font-size:0.85rem;padding:6px 18px;border-radius:20px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.15);color:rgba(255,255,255,0.85);transition:all var(--transition-fast)}
        .hero-tag:hover{border-color:rgba(255,255,255,0.4);background:rgba(255,255,255,0.1);color:#fff}
        .hero-buttons{display:flex;flex-wrap:wrap;justify-content:center;gap:14px}
        .btn-primary{display:inline-flex;align-items:center;gap:8px;background:var(--accent);color:#fff;border:none;padding:14px 32px;border-radius:28px;font-size:1rem;font-weight:600;cursor:pointer;text-decoration:none;transition:all var(--transition-fast);box-shadow:0 6px 24px var(--accent-glow)}
        .btn-primary:hover{background:#b0a0ff;transform:translateY(-2px)}
        .btn-outline{display:inline-flex;align-items:center;gap:8px;background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,0.35);padding:14px 32px;border-radius:28px;font-size:1rem;cursor:pointer;text-decoration:none;transition:all var(--transition-fast)}
        .btn-outline:hover{border-color:rgba(255,255,255,0.7);background:rgba(255,255,255,0.06);transform:translateY(-2px)}
        .section{padding:80px 24px 90px;max-width:var(--max-width);margin:0 auto}
        .section-header{text-align:center;margin-bottom:55px}
        .section-label{font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;color:var(--accent);margin-bottom:8px;font-weight:600}
        .section-title{font-size:clamp(1.8rem,4vw,2.5rem);font-weight:700;letter-spacing:-0.02em;color:#fff}
        .section-divider{width:50px;height:4px;border-radius:2px;background:var(--accent);margin:18px auto 0;opacity:0.7}
        .filter-bar{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-bottom:40px}
        .filter-tag{font-size:0.85rem;padding:8px 20px;border-radius:22px;border:1.5px solid var(--border-card);background:transparent;color:var(--text-secondary);cursor:pointer;transition:all var(--transition-fast);font-family:inherit}
        .filter-tag:hover{border-color:rgba(255,255,255,0.4);color:#fff}
        .filter-tag.active{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:600;box-shadow:0 4px 16px var(--accent-glow)}
        .works-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:28px}
        @media(max-width:768px){.works-grid{grid-template-columns:1fr}}
        .work-card{background:var(--bg-card);border-radius:var(--radius-lg);overflow:hidden;border:1px solid var(--border-card);transition:all var(--transition-smooth);opacity:0;transform:translateY(30px);display:flex;flex-direction:column;max-width:480px;margin:0 auto;width:100%}
        .work-card.visible{opacity:1;transform:translateY(0)}
        .work-card:hover{border-color:rgba(255,255,255,0.25);transform:translateY(-6px);box-shadow:0 20px 50px rgba(0,0,0,0.6);background:var(--bg-card-hover)}
        .work-card.hidden-by-filter{display:none}
        .card-cover{position:relative;width:100%;aspect-ratio:9/16;overflow:hidden;background:#12121c}
        .card-badge{position:absolute;top:14px;left:14px;font-size:0.72rem;font-weight:700;padding:5px 14px;border-radius:14px;color:#fff;backdrop-filter:blur(8px);z-index:2}
        .badge-project{background:rgba(224,85,112,0.85)}
        .badge-short-drama{background:rgba(91,141,239,0.85)}
        .badge-commercial{background:rgba(240,160,80,0.85)}
        .badge-3d{background:rgba(77,201,184,0.85)}
        .card-body{padding:18px 20px 22px;flex:1;display:flex;flex-direction:column;background:rgba(0,0,0,0.2)}
        .card-title{font-size:1.15rem;font-weight:700;margin-bottom:6px;color:#fff}
        .card-highlight{font-size:0.85rem;color:var(--text-muted);line-height:1.5;margin-bottom:16px;flex:1}
        .card-highlight strong{color:var(--accent)}
        .card-actions{display:flex;gap:10px;flex-wrap:wrap}
        .btn-card{font-size:0.85rem;padding:9px 20px;border-radius:20px;cursor:pointer;font-weight:500;transition:all var(--transition-fast);text-decoration:none;display:inline-flex;align-items:center;gap:5px;font-family:inherit;border:none}
        .btn-card-play{background:var(--accent);color:#fff;box-shadow:0 2px 12px var(--accent-glow)}
        .btn-card-play:hover{background:#b0a0ff}
        .btn-card-detail{background:rgba(255,255,255,0.04);color:var(--text-secondary);border:1px solid var(--border-card)}
        .btn-card-detail:hover{background:rgba(255,255,255,0.1);color:#fff}
        .design-section{background:var(--bg-secondary);border-top:1px solid var(--border-subtle);border-bottom:1px solid var(--border-subtle)}
        .design-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:750px;margin:0 auto}
        @media(max-width:600px){.design-grid{grid-template-columns:repeat(2,1fr)}}
        .design-thumb{aspect-ratio:4/3;border-radius:var(--radius-md);overflow:hidden;cursor:pointer;border:1px solid var(--border-card);transition:all var(--transition-smooth);background:#1a1a24;opacity:0;transform:translateY(20px)}
        .design-thumb.visible{opacity:1;transform:translateY(0)}
        .design-thumb:hover{border-color:rgba(255,255,255,0.3);transform:translateY(-4px)}
        .design-thumb-inner{width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:0.8rem;color:rgba(255,255,255,0.25)}
        .design-note{text-align:center;margin-top:22px;font-size:0.9rem;color:var(--text-muted)}
        .design-note em{color:var(--accent);font-style:normal;font-weight:600}
        .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:start}
        @media(max-width:768px){.about-grid{grid-template-columns:1fr}}
        .about-intro{font-size:0.95rem;color:var(--text-secondary);line-height:1.7}
        .about-intro strong{color:#fff;font-weight:600}
        .skill-group{margin-bottom:22px}
        .skill-group-title{font-size:0.8rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--accent);margin-bottom:10px;font-weight:600}
        .skill-list{display:flex;flex-wrap:wrap;gap:8px}
        .skill-item{font-size:0.82rem;padding:6px 16px;border-radius:18px;background:rgba(255,255,255,0.03);border:1px solid var(--border-card);color:var(--text-secondary)}
        .contact-list{list-style:none;margin-top:18px}
        .contact-list li{font-size:0.9rem;color:var(--text-secondary);margin-bottom:8px;display:flex;align-items:center;gap:10px}
        .contact-list li .label{color:var(--text-muted);min-width:45px}
        .contact-list li .value{color:#fff;font-weight:500}
        .contact-list li .value a{color:var(--accent);text-decoration:none}
        .contact-list li .value a:hover{text-decoration:underline}
        .modal-overlay{position:fixed;inset:0;z-index:2000;background:rgba(0,0,0,0.8);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;padding:24px;opacity:0;pointer-events:none;transition:opacity var(--transition-smooth)}
        .modal-overlay.active{opacity:1;pointer-events:auto}
        .modal-dialog{background:var(--bg-card);border:1px solid var(--border-card);border-radius:var(--radius-lg);max-width:800px;width:100%;max-height:85vh;overflow-y:auto;box-shadow:var(--shadow-modal);position:relative;transform:translateY(20px);transition:transform var(--transition-smooth)}
        .modal-overlay.active .modal-dialog{transform:translateY(0)}
        .modal-close{position:sticky;top:12px;float:right;z-index:10;width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,0.25);background:rgba(20,20,28,0.9);backdrop-filter:blur(10px);color:#fff;cursor:pointer;font-size:1.2rem;display:flex;align-items:center;justify-content:center;transition:all var(--transition-fast);margin:10px 10px 0 0}
        .modal-close:hover{background:rgba(255,255,255,0.15)}
        .modal-body{padding:12px 28px 32px;clear:both}
        .modal-body h3{font-size:1.4rem;font-weight:700;margin-bottom:8px}
        .video-placeholder{background:#000;aspect-ratio:16/9;border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.5)}
        .img-placeholder-large{background:#1e1e2a;aspect-ratio:4/3;border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.3);max-width:600px;margin:0 auto}
        .toast{position:fixed;bottom:30px;left:50%;transform:translateX(-50%) translateY(80px);background:#2a2a38;color:#fff;padding:10px 24px;border-radius:24px;font-size:0.85rem;z-index:3000;pointer-events:none;opacity:0;transition:all 0.35s;white-space:nowrap}
        .toast.show{opacity:1;transform:translateX(-50%) translateY(0)}
        .site-footer{text-align:center;padding:28px;font-size:0.8rem;color:var(--text-muted);border-top:1px solid var(--border-subtle)}
        .cover-placeholder{width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:rgba(255,255,255,0.2);letter-spacing:0.06em;font-weight:500;text-align:center;padding:20px}
        .cover-placeholder-icon{font-size:3.5rem;margin-bottom:12px;opacity:0.5}
        .cover-placeholder-text{font-size:0.8rem;opacity:0.4}
        .cover-placeholder.project{background:linear-gradient(180deg,#1e1a30,#141a2a)}
        .cover-placeholder.short-drama{background:linear-gradient(180deg,#1a1a2e,#14182a)}
        .cover-placeholder.commercial{background:linear-gradient(180deg,#1a1f28,#151d28)}
        .cover-placeholder.anim3d{background:linear-gradient(180deg,#192028,#151e26)}
    </style>
</head>
<body>
    <nav class="nav-bar" id="navBar">
        <a href="#hero" class="nav-logo"><span class="dot"></span>${name}</a>
        <div class="nav-actions">
            <a href="#works" class="nav-link">\u4F5C\u54C1\u96C6</a>
            <a href="#design" class="nav-link">\u8BBE\u8BA1\u80FD\u529B</a>
            <a href="#about" class="nav-link">\u5173\u4E8E\u6211</a>
            <a href="resume.pdf" download class="btn-resume-nav">\u4E0B\u8F7D\u7B80\u5386</a>
        </div>
    </nav>
    <section class="hero-section" id="hero">
        <div class="hero-overlay"></div>
        <div class="hero-inner">
            <span class="hero-badge">AIGC Video Creator</span>
            <h1 class="hero-name">${name}</h1>
            <p class="hero-subtitle">AIGC\u89C6\u9891\u521B\u4F5C\u8005 | \u4E13\u6CE8AI\u77ED\u5267\u3001\u5546\u4E1A\u5E7F\u544A\u30013D\u52A8\u6001\u5185\u5BB9</p>
            <div class="hero-tags">
                <span class="hero-tag">\u5373\u68A6</span>
                <span class="hero-tag">\u53EF\u7075</span>
                <span class="hero-tag">ComfyUI</span>
                <span class="hero-tag">\u526A\u6620</span>
                <span class="hero-tag">Blender</span>
            </div>
            <div class="hero-buttons">
                <a href="#works" class="btn-primary">\u67E5\u770B\u4F5C\u54C1\u96C6</a>
                <a href="resume.pdf" download class="btn-outline">\u4E0B\u8F7D\u7B80\u5386</a>
            </div>
        </div>
    </section>
    <section class="section" id="works">
        <div class="section-header">
            <p class="section-label">Portfolio</p>
            <h2 class="section-title">\u6838\u5FC3\u4F5C\u54C1</h2>
            <div class="section-divider"></div>
        </div>
        <div class="filter-bar">
            <button class="filter-tag active" data-filter="all">\u5168\u90E8</button>
            <button class="filter-tag" data-filter="\u5B9E\u6218\u9879\u76EE">\u5B9E\u6218\u9879\u76EE</button>
            <button class="filter-tag" data-filter="AI\u77ED\u5267">AI\u77ED\u5267</button>
            <button class="filter-tag" data-filter="\u5546\u4E1A\u5E7F\u544A">\u5546\u4E1A\u5E7F\u544A</button>
            <button class="filter-tag" data-filter="3D\u52A8\u753B">3D\u52A8\u753B</button>
        </div>
        <div class="works-grid" id="worksGrid">
            <article class="work-card" data-category="\u5B9E\u6218\u9879\u76EE">
                <div class="card-cover">
                    <div class="cover-placeholder project"><div class="cover-placeholder-icon">\uD83C\uDFAF</div><div class="cover-placeholder-text">\u5B9E\u6218\u9879\u76EE</div></div>
                    <span class="card-badge badge-project">\u5B9E\u6218\u9879\u76EE</span>
                </div>
                <div class="card-body">
                    <h3 class="card-title">\u3010\u6293\u6253\u8C01\u4E0D\u597D\uFF0C\u4F60\u6253\u5979\uFF1F\u5979\u53EF\u662FSSS\u7EA7\u50AC\u7720\u5E08\u3011</h3>
                    <p class="card-highlight">\u5F31\u5A07\u5B9E\u4E60\u751F\u7ADF\u662FSSS\u7EA7\u50AC\u7720\u5E08\uFF0C\u804C\u573A\u624B\u626D\u90BB\u8F9B\u5BCC\u4EE3\u8D22</p>
                    <div class="card-actions">
                        <button class="btn-card btn-card-play" onclick="openVideoModal('brand-ad')">\u25B6 \u89C2\u770B\u6210\u7247</button>
                        <button class="btn-card btn-card-detail" onclick="openDetailModal('brand-ad')">\u67E5\u770B\u8BE6\u60C5</button>
                    </div>
                </div>
            </article>
            <article class="work-card" data-category="AI\u77ED\u5267">
                <div class="card-cover">
                    <div class="cover-placeholder short-drama"><div class="cover-placeholder-icon">\uD83C\uDFAD</div><div class="cover-placeholder-text">AI\u77ED\u5267</div></div>
                    <span class="card-badge badge-short-drama">AI\u77ED\u5267</span>
                </div>
                <div class="card-body">
                    <h3 class="card-title">\u3010\u6293\u6253\u8C01\u4E0D\u597D\uFF0C\u4F60\u6253\u5979\uFF1F\u5979\u53EF\u662FSSS\u7EA7\u50AC\u7720\u5E08\u3011</h3>
                    <p class="card-highlight">\u5F31\u5A07\u5B9E\u4E60\u751F\u7ADF\u662FSSS\u7EA7\u50AC\u7720\u5E08\uFF0C\u804C\u573A\u624B\u626D\u90BB\u8F9B\u5BCC\u4EE3\u8D22</p>
                    <div class="card-actions">
                        <button class="btn-card btn-card-play" onclick="openVideoModal('short-drama')">\u25B6 \u89C2\u770B\u6210\u7247</button>
                        <button class="btn-card btn-card-detail" onclick="openDetailModal('short-drama')">\u67E5\u770B\u8BE6\u60C5</button>
                    </div>
                </div>
            </article>
            <article class="work-card" data-category="\u5546\u4E1A\u5E7F\u544A">
                <div class="card-cover">
                    <div class="cover-placeholder commercial"><div class="cover-placeholder-icon">\uD83D\uDCCA</div><div class="cover-placeholder-text">\u5546\u4E1A\u5E7F\u544A</div></div>
                    <span class="card-badge badge-commercial">\u5546\u4E1A\u5E7F\u544A</span>
                </div>
                <div class="card-body">
                    <h3 class="card-title">\u3010\u592A\u7A7A\u4EBA\u7684 duang \u5B87\u5B99\u3011</h3>
                    <p class="card-highlight">\u5B9E\u62CD+AI\u878D\u5408\uFF0C\u4EA7\u54C1\u8D28\u611F\u8FDD\u539F\u5EA6<strong>\u6781\u9AD8</strong></p>
                    <div class="card-actions">
                        <button class="btn-card btn-card-play" onclick="openVideoModal('commercial')">\u25B6 \u89C2\u770B\u6210\u7247</button>
                        <button class="btn-card btn-card-detail" onclick="openDetailModal('commercial')">\u67E5\u770B\u8BE6\u60C5</button>
                    </div>
                </div>
            </article>
            <article class="work-card" data-category="3D\u52A8\u753B">
                <div class="card-cover">
                    <div class="cover-placeholder anim3d"><div class="cover-placeholder-icon">\u2728</div><div class="cover-placeholder-text">3D\u52A8\u753B</div></div>
                    <span class="card-badge badge-3d">3D\u52A8\u753B</span>
                </div>
                <div class="card-body">
                    <h3 class="card-title">\u3010\u53CC\u706F\u8BB0\u3011</h3>
                    <p class="card-highlight">\u4E1C\u65B9\u5947\u5E7B\u6B66\u4FA0 · \u5149\u5F71\u5BBF\u547D\u4F20\u8BF4</p>
                    <div class="card-actions">
                        <button class="btn-card btn-card-play" onclick="openVideoModal('3d-animation')">\u25B6 \u89C2\u770B\u6210\u7247</button>
                        <button class="btn-card btn-card-detail" onclick="openDetailModal('3d-animation')">\u67E5\u770B\u8BE6\u60C5</button>
                    </div>
                </div>
            </article>
        </div>
    </section>
    <div class="design-section" id="design">
        <section class="section" style="padding-top:60px;padding-bottom:60px;">
            <div class="section-header">
                <p class="section-label">Additional Skills</p>
                <h2 class="section-title">\u9644\u52A0\u8BBE\u8BA1\u80FD\u529B</h2>
                <div class="section-divider"></div>
            </div>
            <div class="design-grid" id="designGrid">
                <div class="design-thumb" onclick="openImageViewer('\u5E73\u9762\u8BBE\u8BA1')"><div class="design-thumb-inner" style="background:linear-gradient(135deg,#2a1f30,#1f2a30)">\u5E73\u9762\u8BBE\u8BA1</div></div>
                <div class="design-thumb" onclick="openImageViewer('UI\u8BBE\u8BA1')"><div class="design-thumb-inner" style="background:linear-gradient(135deg,#1e2a30,#261f2a)">UI\u8BBE\u8BA1</div></div>
                <div class="design-thumb" onclick="openImageViewer('\u7F51\u9875\u8BBE\u8BA1')"><div class="design-thumb-inner" style="background:linear-gradient(135deg,#1f2830,#2a1f26)">\u7F51\u9875\u8BBE\u8BA1</div></div>
            </div>
            <p class="design-note"><em>\u672C\u7AD9\u70B9\u7531\u672C\u4EBA\u72EC\u7ACB\u8BBE\u8BA1\u4E0E\u5F00\u53D1</em></p>
        </section>
    </div>
    <section class="section" id="about">
        <div class="section-header">
            <p class="section-label">About & Contact</p>
            <h2 class="section-title">\u5173\u4E8E\u6211</h2>
            <div class="section-divider"></div>
        </div>
        <div class="about-grid">
            <div>
                <p class="about-intro">\u72EC\u7ACB\u7CFB\u7EDF\u5B66\u4E60<strong>AIGC\u5168\u94FE\u8DEF\u5236\u4F5C</strong>\uFF0C\u53EF\u72EC\u7ACB\u5B8C\u6210\u4ECE<strong>\u5267\u672C\u7B56\u5212\u5230\u6210\u7247\u8F93\u51FA</strong>\u7684\u5168\u6D41\u7A0B\u3002\u719F\u7EC3\u4F7F\u7528 LiblibAI\u3001\u5373\u68A6 AI \u7B49 AI \u751F\u6210\u5E73\u53F0\uFF0C\u638C\u63E1\u63D0\u793A\u8BCD\u62C6\u89E3\u3001\u573A\u666F\u89C6\u89C9\u751F\u6210\u3001\u98CE\u683C\u5316\u753B\u9762\u8C03\u8BD5\u3002<br><br>\u610F\u5411\u57CE\u5E02\uFF1A<strong>\u676D\u5DDE</strong> | \u5C97\u4F4D\u65B9\u5411\uFF1A<strong>AIGC\u89C6\u9891\u7C7B\u5C97\u4F4D</strong></p>
            </div>
            <div>
                <div class="skill-group"><p class="skill-group-title">AIGC\u5DE5\u5177</p><div class="skill-list"><span class="skill-item">\u8C46\u5305</span><span class="skill-item">image2</span><span class="skill-item">Deepseek</span><span class="skill-item">\u5373\u68A6</span><span class="skill-item">LibTV</span></div></div>
                <div class="skill-group"><p class="skill-group-title">\u89C6\u9891\u5236\u4F5C</p><div class="skill-list"><span class="skill-item">\u526A\u6620</span><span class="skill-item">PR</span><span class="skill-item">Blender</span></div></div>
                <div class="skill-group"><p class="skill-group-title">\u8BBE\u8BA1\u8F85\u52A9</p><div class="skill-list"><span class="skill-item">PS</span><span class="skill-item">Figma</span><span class="skill-item">HTML/CSS</span></div></div>
                <ul class="contact-list">
                    <li><span class="label">\u90AE\u7BB1</span><span class="value"><a href="mailto:${email}">${email}</a></span></li>
                    <li><span class="label">\u5FAE\u4FE1</span><span class="value">${wechat}</span></li>
                </ul>
            </div>
        </div>
    </section>
    <footer class="site-footer">&copy; 2026 ${name} · AIGC\u89C6\u9891\u4F5C\u54C1\u96C6</footer>
    <div class="modal-overlay" id="videoModal"><div class="modal-dialog"><button class="modal-close" onclick="closeModal('videoModal')">\u2715</button><div class="modal-body" id="videoModalBody"></div></div></div>
    <div class="modal-overlay" id="detailModal"><div class="modal-dialog"><button class="modal-close" onclick="closeModal('detailModal')">\u2715</button><div class="modal-body" id="detailModalBody"></div></div></div>
    <div class="modal-overlay" id="imageModal"><div class="modal-dialog" style="max-width:600px;"><button class="modal-close" onclick="closeModal('imageModal')">\u2715</button><div class="modal-body" id="imageModalBody"></div></div></div>
    <div class="toast" id="toast"></div>
    <script>
(function(){
    const navBar=document.getElementById('navBar');
    window.addEventListener('scroll',()=>{navBar.style.background=window.scrollY>40?'rgba(10,10,15,0.92)':'rgba(10,10,15,0.8)'});
    const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
    document.querySelectorAll('.work-card,.design-thumb').forEach(el=>observer.observe(el));
    const filterTags=document.querySelectorAll('.filter-tag');
    filterTags.forEach(tag=>{tag.addEventListener('click',()=>{filterTags.forEach(t=>t.classList.remove('active'));tag.classList.add('active');const f=tag.dataset.filter;document.querySelectorAll('.work-card').forEach(c=>{if(f==='all'||c.dataset.category===f){c.classList.remove('hidden-by-filter');if(!c.classList.contains('visible'))observer.observe(c)}else{c.classList.add('hidden-by-filter')}})})});
    function openModal(id){const m=document.getElementById(id);m.classList.add('active');document.body.style.overflow='hidden'}
    function closeModal(id){const m=document.getElementById(id);m.classList.remove('active');document.body.style.overflow=''}
    window.closeModal=closeModal;
    document.querySelectorAll('.modal-overlay').forEach(o=>{o.addEventListener('click',e=>{if(e.target===o)closeModal(o.id)})});
    document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.modal-overlay.active').forEach(m=>closeModal(m.id))});
    const vd={'brand-ad':{t:'\u3010\u6293\u6253\u8C01\u4E0D\u597D\uFF0C\u4F60\u6253\u5979\uFF1F\u5979\u53EF\u662FSSS\u7EA7\u50AC\u7720\u5E08\u3011',ty:'\u5B9E\u6218\u9879\u76EE'},'short-drama':{t:'\u3010\u6293\u6253\u8C01\u4E0D\u597D\uFF0C\u4F60\u6253\u5979\uFF1F\u5979\u53EF\u662FSSS\u7EA7\u50AC\u7720\u5E08\u3011',ty:'AI\u77ED\u5267'},'commercial':{t:'\u3010\u592A\u7A7A\u4EBA\u7684 duang \u5B87\u5B99\u3011',ty:'\u5546\u4E1A\u5E7F\u544A'},'3d-animation':{t:'\u3010\u53CC\u706F\u8BB0\u3011',ty:'3D\u52A8\u753B'}};
    window.openVideoModal=function(k){const d=vd[k];if(!d)return;document.getElementById('videoModalBody').innerHTML='<h3>'+d.t+'</h3><p style="color:var(--text-muted)">\u7C7B\u578B\uFF1A'+d.ty+'</p><div class="video-placeholder">\u89C6\u9891\u64AD\u653E\u533A\u57DF</div>';openModal('videoModal')};
    const dd={'brand-ad':{t:'\u3010\u6293\u6253\u8C01\u4E0D\u597D\uFF0C\u4F60\u6253\u5979\uFF1F\u5979\u53EF\u662FSSS\u7EA7\u50AC\u7720\u5E08\u3011',tools:'image2 \u00B7 LibTV \u00B7 \u526A\u6620',p:'\u5267\u672C\u521B\u4F5C \u2192 \u89D2\u8272\u5B9A\u578B \u2192 \u573A\u666F\u751F\u6210 \u2192 \u5206\u955C\u62C6\u89E3 \u2192 \u62BD\u5361\u5236\u4F5C \u2192 \u540E\u671F\u5408\u6210',h:'\u5F31\u5A07\u5B9E\u4E60\u751F\u7ADF\u662F SSS \u7EA7\u50AC\u7720\u5E08\uFF0C\u804C\u573A\u624B\u626D\u90BB\u8F9B\u5BCC\u4EE3\u8D22\uFF0C\u593A\u611F\u6CE2\u8D85\u53C8\u517C\u5177\u6B63\u5411\u5185\u683C\u3002'},'short-drama':{t:'\u3010\u6293\u6253\u8C01\u4E0D\u597D\uFF0C\u4F60\u6253\u5979\uFF1F\u5979\u53EF\u662FSSS\u7EA7\u50AC\u7720\u5E08\u3011',tools:'image2 \u00B7 LibTV \u00B7 \u526A\u6620',p:'\u5267\u672C\u521B\u4F5C \u2192 \u89D2\u8272\u5B9A\u578B \u2192 \u573A\u666F\u751F\u6210 \u2192 \u5206\u955C\u62C6\u89E3 \u2192 \u62BD\u5361\u5236\u4F5C \u2192 \u540E\u671F\u5408\u6210',h:'\u5F31\u5A07\u5B9E\u4E60\u751F\u7ADF\u662F SSS \u7EA7\u50AC\u7720\u5E08\uFF0C\u804C\u573A\u624B\u626D\u90BB\u8F9B\u5BCC\u4EE3\u8D22\uFF0C\u593A\u611F\u6CE2\u8D85\u53C8\u517C\u5177\u6B63\u5411\u5185\u683C\u3002'},'commercial':{t:'\u3010\u592A\u7A7A\u4EBA\u7684 duang \u5B87\u5B99\u3011',tools:'LibTV \u00B7 \u526A\u6620',p:'\u4EA7\u54C1\u5206\u6790 \u2192 \u521B\u610F\u751F\u6210 \u2192 \u89D2\u8272\u5B9A\u4F4D \u2192 \u591A\u98CE\u683C\u878D\u5408 \u2192 \u5206\u955C\u62C6\u89E3 \u2192 \u62BD\u5361\u5236\u4F5C \u2192 \u540E\u671F\u5408\u6210',h:'\u6253\u5DE5\u4EBA\u6309\u538B\u559C\u4E4B\u90CE\u679C\u81EA\u52A8\u89E6\u53D1 duang \u6548\u5E94\uFF0C\u8DDD\u968F\u592A\u7A7A\u4EBA\u7A7F\u8D8A\u4E09\u5EA7\u98CE\u683C\u8FF7\u5F02\u7684\u538B\u529B\u661F\u7403\u9010\u5C42\u91CA\u653E\u7126\u8651\uFF0C\u4EE5\u591A\u5143AIGC\u89C6\u89C9\u6F14\u7EC3\u91CA\u653E\u538B\u529B\uFF0C\u7EE7\u7EED\u8FFD\u68A6\u7684\u54C1\u724C\u5185\u683C\u3002'},'3d-animation':{t:'\u3010\u53CC\u706F\u8BB0\u3011',tools:'Seedance2.0 \u00B7 LibTV \u00B7 \u526A\u6620',p:'\u5267\u672C\u8BBE\u8BA1 \u2192 \u521B\u5EFA\u89D2\u8272 \u2192 \u811A\u672C\u7B56\u5212 \u2192 \u62BD\u5361\u5236\u4F5C \u2192 \u540E\u671F\u526A\u8F91 \u2192 BGM\u751F\u6210',h:'\u7EA2\u53D1\u5F02\u4EBA\u643A\u9547\u90AA\u9633\u706F\u8D94\u8352\u7940\uFF0C\u4E0E\u5B88\u5B50\u767E\u5E74\u7684\u7075\u6BCD\u82CF\u665A\u5408\u529B\u50AC\u52A8\u9634\u9633\u53CC\u706F\u51C0\u5316\u77F3\u50CF\u9B54\uFF0C\u4EE5\u4E1C\u65B9\u5947\u5E7B\u7F8E\u5B66\u6F14\u7EC3\u6BCD\u7231\u6551\u6551\u4E0E\u4FE1\u4FA0\u4F20\u627F\u7684\u5BBF\u547D\u4F20\u8BF4\u3002'}};
    window.openDetailModal=function(k){const d=dd[k];if(!d)return;document.getElementById('detailModalBody').innerHTML='<h3>'+d.t+'</h3><p style="color:var(--text-muted)">\u5DE5\u5177\uFF1A'+d.tools+'</p><h4 style="color:var(--accent);margin-top:16px">\u5236\u4F5C\u6D41\u7A0B</h4><p>'+d.p+'</p><h4 style="color:var(--accent);margin-top:16px">\u6838\u5FC3\u4EAE\u70B9</h4><p>'+d.h+'</p>';openModal('detailModal')};
    window.openImageViewer=function(n){document.getElementById('imageModalBody').innerHTML='<h3>'+n+'</h3><div class="img-placeholder-large">'+n+'</div>';openModal('imageModal')};
    window.showToast=function(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');clearTimeout(window.tt);window.tt=setTimeout(()=>t.classList.remove('show'),2200)};
    document.querySelectorAll('a[download]').forEach(a=>{a.addEventListener('click',function(e){if(this.getAttribute('href')==='resume.pdf'){fetch('resume.pdf',{method:'HEAD'}).catch(()=>{e.preventDefault();showToast('\u8BF7\u5C06\u7B80\u5386PDF\u4FDD\u5B58\u4E3A resume.pdf \u5373\u53EF\u4E0B\u8F7D')})}})})})()
    </script>
</body>
</html>`;

fs.writeFileSync('Portfolio.html', html, 'utf8');
console.log('SUCCESS! File written with correct Chinese characters.');