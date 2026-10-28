/**
 * RIYADVI SOFTWARE TECHNOLOGIES — LUXURY 3D INTERACTIVE SCRIPT
 * Three.js WebGL Engine, Custom Cursor, Project Estimator, Guardian Simulator, AI Assistant
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. CINEMATIC PRELOADER (1-2s Gold Particle Sequence)
  // ==========================================================================
  const preloader = document.getElementById('preloader');
  const preloaderBar = document.getElementById('preloader-bar-fill');
  let preloadProgress = 0;

  const preloadInterval = setInterval(() => {
    preloadProgress += 7;
    if (preloaderBar) preloaderBar.style.width = `${Math.min(100, preloadProgress)}%`;

    if (preloadProgress >= 100) {
      clearInterval(preloadInterval);
      setTimeout(() => {
        document.body.classList.remove('loading-state');
      }, 300);
    }
  }, 50);

  // ==========================================================================
  // 2. DESKTOP CUSTOM MAGNETIC GOLD CURSOR
  // ==========================================================================
  const cursor = document.getElementById('custom-cursor');
  const cursorText = document.getElementById('cursor-text');
  let mouseX = -100, mouseY = -100;
  let cursorX = -100, cursorY = -100;

  if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function updateCursor() {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      if (cursor) {
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }
      requestAnimationFrame(updateCursor);
    }
    requestAnimationFrame(updateCursor);

    // Hover Magnetism & Context Cues
    function attachCursorHover(elements, label = '') {
      elements.forEach(el => {
        el.addEventListener('mouseenter', () => {
          if (!cursor) return;
          cursor.classList.add('hovering');
          if (cursorText) {
            cursorText.textContent = label;
            cursorText.style.display = label ? 'block' : 'none';
          }
        });
        el.addEventListener('mouseleave', () => {
          if (!cursor) return;
          cursor.classList.remove('hovering');
          if (cursorText) {
            cursorText.textContent = '';
            cursorText.style.display = 'none';
          }
        });
      });
    }

    attachCursorHover(document.querySelectorAll('.btn-primary-gold, .nav-cta'), 'GO');
    attachCursorHover(document.querySelectorAll('.award-card'), 'VERIFY');
    attachCursorHover(document.querySelectorAll('.case-card'), 'VIEW');
    attachCursorHover(document.querySelectorAll('.service-box'), 'EXPLORE');
    attachCursorHover(document.querySelectorAll('.ind-tab, .wizard-option-btn'), 'SELECT');
  }

  // ==========================================================================
  // 3. AMBIENT GOLDEN ENERGY LINE (CANVAS)
  // ==========================================================================
  const energyCanvas = document.getElementById('energy-line-canvas');
  if (energyCanvas) {
    const eCtx = energyCanvas.getContext('2d');
    let width = energyCanvas.width = window.innerWidth;
    let height = energyCanvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = energyCanvas.width = window.innerWidth;
      height = energyCanvas.height = window.innerHeight;
    });

    let waveStep = 0;
    function drawEnergyLine() {
      eCtx.clearRect(0, 0, width, height);

      waveStep += 0.015;
      eCtx.beginPath();
      eCtx.moveTo(0, height * 0.5);

      for (let x = 0; x < width; x += 15) {
        const y = height * 0.5 + Math.sin(x * 0.003 + waveStep) * 90 + Math.cos(x * 0.001 - waveStep * 0.5) * 50;
        eCtx.lineTo(x, y);
      }

      eCtx.strokeStyle = 'rgba(212, 175, 55, 0.22)';
      eCtx.lineWidth = 1.8;
      eCtx.shadowColor = '#F4D36B';
      eCtx.shadowBlur = 12;
      eCtx.stroke();

      requestAnimationFrame(drawEnergyLine);
    }
    requestAnimationFrame(drawEnergyLine);
  }

  // ==========================================================================
  // ==========================================================================
  // 4. LENIS BUTTERY SMOOTH MOMENTUM SCROLL ENGINE
  // ==========================================================================
  let lenisInstance = null;
  if (typeof Lenis !== 'undefined') {
    lenisInstance = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // exponential luxury ease-out
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.3,
      infinite: false,
    });
    window.lenis = lenisInstance;

    function lenisRaf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(lenisRaf);
    }
    requestAnimationFrame(lenisRaf);

    // Smooth Anchor Navigation
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            lenisInstance.scrollTo(targetEl, { duration: 1.5, offset: -20 });
          }
        }
      });
    });
  }

  // ==========================================================================
  // 5. QUINTUPLE SCROLL ANIMATION ENGINE:
  //    STAGE 1 (SECTIONS 1-3): ROBOJUMP UPDATED (192 PNG FRAMES)
  //    STAGE 2 (SECTIONS 4-6): EARTHROBO (200 PNG FRAMES)
  //    STAGE 3 (SECTIONS 7-9): LAPP UPDATED (192 PNG FRAMES)
  //    STAGE 4 (SECTIONS 10-13): HAND ANIMATION (192 PNG FRAMES)
  //    STAGE 5 (SECTIONS 14-16): HUMAN UP (192 PNG FRAMES)
  // ==========================================================================
  const roboCanvas = document.getElementById('robojump-canvas');
  const earthCanvas = document.getElementById('earthrobo-canvas');
  const lappCanvas = document.getElementById('lapp-canvas');
  const handCanvas = document.getElementById('hand-canvas');
  const humanCanvas = document.getElementById('human-canvas');
  const roboBgViewport = document.getElementById('robo-bg-viewport');
  const contentStream = document.getElementById('content-stream');
  
  // Pinned Hero Track and Content references
  const heroSection = document.getElementById('hero');
  const heroScrollTrack = document.getElementById('hero-scroll-track');
  const heroTextContent = document.getElementById('hero-text-content');
  const heroCue = document.querySelector('.hero-bottom-left-cue');
  const siteHeader = document.getElementById('site-header');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  let lastHeaderScrollY = 0;
  const HEADER_SCROLL_DELTA = 8;

  // Animation constants & frame arrays
  const TOTAL_ROBO_FRAMES = 192;
  const TOTAL_EARTH_FRAMES = 200;
  const TOTAL_LAPP_FRAMES = 192;
  const TOTAL_HAND_FRAMES = 192;
  const TOTAL_HUMAN_FRAMES = 192;

  const roboFrames = new Array(TOTAL_ROBO_FRAMES);
  const earthFrames = new Array(TOTAL_EARTH_FRAMES);
  const lappFrames = new Array(TOTAL_LAPP_FRAMES);
  const handFrames = new Array(TOTAL_HAND_FRAMES);
  const humanFrames = new Array(TOTAL_HUMAN_FRAMES);

  let loadedRoboCount = 0;
  let loadedEarthCount = 0;
  let loadedLappCount = 0;
  let loadedHandCount = 0;
  let loadedHumanCount = 0;

  let targetRoboIndex = 0;
  let currentRoboIndex = 0;
  let lastRenderedRobo = -1;

  let targetEarthIndex = 0;
  let currentEarthIndex = 0;
  let lastRenderedEarth = -1;

  let targetLappIndex = 0;
  let currentLappIndex = 0;
  let lastRenderedLapp = -1;

  let targetHandIndex = 0;
  let currentHandIndex = 0;
  let lastRenderedHand = -1;

  let targetHumanIndex = 0;
  let currentHumanIndex = 0;
  let lastRenderedHuman = -1;

  const roboCtx = roboCanvas ? roboCanvas.getContext('2d') : null;
  const earthCtx = earthCanvas ? earthCanvas.getContext('2d') : null;
  const lappCtx = lappCanvas ? lappCanvas.getContext('2d') : null;
  const handCtx = handCanvas ? handCanvas.getContext('2d') : null;
  const humanCtx = humanCanvas ? humanCanvas.getContext('2d') : null;

  function getRoboFramePath(index) {
    const padded = String(index + 1).padStart(3, '0');
    return `robojump updated/ezgif-frame-${padded}.png`;
  }

  function getEarthFramePath(index) {
    const padded = String(index + 1).padStart(3, '0');
    return `earthrobo/ezgif-frame-${padded}.png`;
  }

  function getLappFramePath(index) {
    const padded = String(index + 1).padStart(3, '0');
    return `lapp updated/ezgif-frame-${padded}.png`;
  }

  function getHandFramePath(index) {
    const padded = String(index + 1).padStart(3, '0');
    return encodeURI(`Hand animation/ezgif-frame-${padded}.png`);
  }

  function getHumanFramePath(index) {
    const padded = String(index + 1).padStart(3, '0');
    return encodeURI(`human up/ezgif-frame-${padded}.png`);
  }

  function resizeAllCanvases() {
    const dpr = window.devicePixelRatio || 1;
    const w = Math.round(window.innerWidth * dpr);
    const h = Math.round(window.innerHeight * dpr);

    if (roboCanvas) {
      roboCanvas.width = w;
      roboCanvas.height = h;
      roboCanvas.style.width = '100%';
      roboCanvas.style.height = '100%';
      renderRoboFrame(Math.round(currentRoboIndex));
    }

    if (earthCanvas) {
      earthCanvas.width = w;
      earthCanvas.height = h;
      earthCanvas.style.width = '100%';
      earthCanvas.style.height = '100%';
      renderEarthFrame(Math.round(currentEarthIndex));
    }

    if (lappCanvas) {
      lappCanvas.width = w;
      lappCanvas.height = h;
      lappCanvas.style.width = '100%';
      lappCanvas.style.height = '100%';
      renderLappFrame(Math.round(currentLappIndex));
    }

    if (handCanvas) {
      handCanvas.width = w;
      handCanvas.height = h;
      handCanvas.style.width = '100%';
      handCanvas.style.height = '100%';
      renderHandFrame(Math.round(currentHandIndex));
    }

    if (humanCanvas) {
      humanCanvas.width = w;
      humanCanvas.height = h;
      humanCanvas.style.width = '100%';
      humanCanvas.style.height = '100%';
      renderHumanFrame(Math.round(currentHumanIndex));
    }
  }

  function renderRoboFrame(index) {
    if (!roboCtx || !roboCanvas) return;
    const safeIndex = Math.max(0, Math.min(TOTAL_ROBO_FRAMES - 1, index));
    const img = roboFrames[safeIndex];

    if (!img || !img.complete || img.naturalWidth === 0) return;

    roboCtx.imageSmoothingEnabled = true;
    roboCtx.imageSmoothingQuality = 'high';
    roboCtx.clearRect(0, 0, roboCanvas.width, roboCanvas.height);

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = roboCanvas.width / roboCanvas.height;
    let drawW, drawH, drawX, drawY;

    if (canvasRatio > imgRatio) {
      drawW = roboCanvas.width;
      drawH = Math.round(roboCanvas.width / imgRatio);
      drawX = 0;
      drawY = Math.round((roboCanvas.height - drawH) / 2);
    } else {
      drawH = roboCanvas.height;
      drawW = Math.round(roboCanvas.height * imgRatio);
      drawX = Math.round((roboCanvas.width - drawW) / 2);
      drawY = 0;
    }

    roboCtx.drawImage(img, drawX, drawY, drawW, drawH);
  }

  function renderEarthFrame(index) {
    if (!earthCtx || !earthCanvas) return;
    const safeIndex = Math.max(0, Math.min(TOTAL_EARTH_FRAMES - 1, index));
    const img = earthFrames[safeIndex];

    if (!img || !img.complete || img.naturalWidth === 0) return;

    earthCtx.imageSmoothingEnabled = true;
    earthCtx.imageSmoothingQuality = 'high';
    earthCtx.clearRect(0, 0, earthCanvas.width, earthCanvas.height);

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = earthCanvas.width / earthCanvas.height;
    let drawW, drawH, drawX, drawY;

    if (canvasRatio > imgRatio) {
      drawW = earthCanvas.width;
      drawH = Math.round(earthCanvas.width / imgRatio);
      drawX = 0;
      drawY = Math.round((earthCanvas.height - drawH) / 2);
    } else {
      drawH = earthCanvas.height;
      drawW = Math.round(earthCanvas.height * imgRatio);
      drawX = Math.round((earthCanvas.width - drawW) / 2);
      drawY = 0;
    }

    earthCtx.drawImage(img, drawX, drawY, drawW, drawH);
  }

  function renderLappFrame(index) {
    if (!lappCtx || !lappCanvas) return;
    const safeIndex = Math.max(0, Math.min(TOTAL_LAPP_FRAMES - 1, index));
    const img = lappFrames[safeIndex];

    if (!img || !img.complete || img.naturalWidth === 0) return;

    lappCtx.imageSmoothingEnabled = true;
    lappCtx.imageSmoothingQuality = 'high';
    lappCtx.clearRect(0, 0, lappCanvas.width, lappCanvas.height);

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = lappCanvas.width / lappCanvas.height;
    let drawW, drawH, drawX, drawY;

    if (canvasRatio > imgRatio) {
      drawW = lappCanvas.width;
      drawH = Math.round(lappCanvas.width / imgRatio);
      drawX = 0;
      drawY = Math.round((lappCanvas.height - drawH) / 2);
    } else {
      drawH = lappCanvas.height;
      drawW = Math.round(lappCanvas.height * imgRatio);
      drawX = Math.round((lappCanvas.width - drawW) / 2);
      drawY = 0;
    }

    lappCtx.drawImage(img, drawX, drawY, drawW, drawH);
  }

  function renderHandFrame(index) {
    if (!handCtx || !handCanvas) return;
    const safeIndex = Math.max(0, Math.min(TOTAL_HAND_FRAMES - 1, index));
    const img = handFrames[safeIndex];

    if (!img || !img.complete || img.naturalWidth === 0) return;

    handCtx.imageSmoothingEnabled = true;
    handCtx.imageSmoothingQuality = 'high';
    handCtx.clearRect(0, 0, handCanvas.width, handCanvas.height);

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = handCanvas.width / handCanvas.height;
    let drawW, drawH, drawX, drawY;

    if (canvasRatio > imgRatio) {
      drawW = handCanvas.width;
      drawH = Math.round(handCanvas.width / imgRatio);
      drawX = 0;
      drawY = Math.round((handCanvas.height - drawH) / 2);
    } else {
      drawH = handCanvas.height;
      drawW = Math.round(handCanvas.height * imgRatio);
      drawX = Math.round((handCanvas.width - drawW) / 2);
      drawY = 0;
    }

    handCtx.drawImage(img, drawX, drawY, drawW, drawH);
  }

  function renderHumanFrame(index) {
    if (!humanCtx || !humanCanvas) return;
    const safeIndex = Math.max(0, Math.min(TOTAL_HUMAN_FRAMES - 1, index));
    const img = humanFrames[safeIndex];

    if (!img || !img.complete || img.naturalWidth === 0) return;

    humanCtx.imageSmoothingEnabled = true;
    humanCtx.imageSmoothingQuality = 'high';
    humanCtx.clearRect(0, 0, humanCanvas.width, humanCanvas.height);

    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = humanCanvas.width / humanCanvas.height;
    let drawW, drawH, drawX, drawY;

    if (canvasRatio > imgRatio) {
      drawW = humanCanvas.width;
      drawH = Math.round(humanCanvas.width / imgRatio);
      drawX = 0;
      drawY = Math.round((humanCanvas.height - drawH) / 2);
    } else {
      drawH = humanCanvas.height;
      drawW = Math.round(humanCanvas.height * imgRatio);
      drawX = Math.round((humanCanvas.width - drawW) / 2);
      drawY = 0;
    }

    humanCtx.drawImage(img, drawX, drawY, drawW, drawH);
  }

  // Preload Robojump Updated frames
  function initRoboFrames() {
    const firstImg = new Image();
    firstImg.src = getRoboFramePath(0);
    firstImg.onload = async () => {
      if (firstImg.decode) {
        try { await firstImg.decode(); } catch (e) {}
      }
      roboFrames[0] = firstImg;
      loadedRoboCount++;
      resizeAllCanvases();
      renderRoboFrame(0);
    };

    for (let i = 1; i < TOTAL_ROBO_FRAMES; i++) {
      const img = new Image();
      img.src = getRoboFramePath(i);
      img.onload = () => {
        if (img.decode) {
          img.decode().then(() => {
            roboFrames[i] = img;
            loadedRoboCount++;
          }).catch(() => {
            roboFrames[i] = img;
            loadedRoboCount++;
          });
        } else {
          roboFrames[i] = img;
          loadedRoboCount++;
        }
      };
    }
  }

  // Preload Earthrobo frames
  function initEarthFrames() {
    const firstImg = new Image();
    firstImg.src = getEarthFramePath(0);
    firstImg.onload = async () => {
      if (firstImg.decode) {
        try { await firstImg.decode(); } catch (e) {}
      }
      earthFrames[0] = firstImg;
      loadedEarthCount++;
      resizeAllCanvases();
      renderEarthFrame(0);
    };

    for (let i = 1; i < TOTAL_EARTH_FRAMES; i++) {
      const img = new Image();
      img.src = getEarthFramePath(i);
      img.onload = () => {
        if (img.decode) {
          img.decode().then(() => {
            earthFrames[i] = img;
            loadedEarthCount++;
          }).catch(() => {
            earthFrames[i] = img;
            loadedEarthCount++;
          });
        } else {
          earthFrames[i] = img;
          loadedEarthCount++;
        }
      };
    }
  }

  // Preload Lapp Updated frames
  function initLappFrames() {
    const firstImg = new Image();
    firstImg.src = getLappFramePath(0);
    firstImg.onload = async () => {
      if (firstImg.decode) {
        try { await firstImg.decode(); } catch (e) {}
      }
      lappFrames[0] = firstImg;
      loadedLappCount++;
      resizeAllCanvases();
      renderLappFrame(0);
    };

    for (let i = 1; i < TOTAL_LAPP_FRAMES; i++) {
      const img = new Image();
      img.src = getLappFramePath(i);
      img.onload = () => {
        if (img.decode) {
          img.decode().then(() => {
            lappFrames[i] = img;
            loadedLappCount++;
          }).catch(() => {
            lappFrames[i] = img;
            loadedLappCount++;
          });
        } else {
          lappFrames[i] = img;
          loadedLappCount++;
        }
      };
    }
  }

  // Preload Hand animation frames
  function initHandFrames() {
    const firstImg = new Image();
    firstImg.src = getHandFramePath(0);
    firstImg.onload = async () => {
      if (firstImg.decode) {
        try { await firstImg.decode(); } catch (e) {}
      }
      handFrames[0] = firstImg;
      loadedHandCount++;
      resizeAllCanvases();
      renderHandFrame(0);
    };

    for (let i = 1; i < TOTAL_HAND_FRAMES; i++) {
      const img = new Image();
      img.src = getHandFramePath(i);
      img.onload = () => {
        if (img.decode) {
          img.decode().then(() => {
            handFrames[i] = img;
            loadedHandCount++;
          }).catch(() => {
            handFrames[i] = img;
            loadedHandCount++;
          });
        } else {
          handFrames[i] = img;
          loadedHandCount++;
        }
      };
    }
  }

  // Preload Human up frames
  function initHumanFrames() {
    const firstImg = new Image();
    firstImg.src = getHumanFramePath(0);
    firstImg.onload = async () => {
      if (firstImg.decode) {
        try { await firstImg.decode(); } catch (e) {}
      }
      humanFrames[0] = firstImg;
      loadedHumanCount++;
      resizeAllCanvases();
      renderHumanFrame(0);
    };

    for (let i = 1; i < TOTAL_HUMAN_FRAMES; i++) {
      const img = new Image();
      img.src = getHumanFramePath(i);
      img.onload = () => {
        if (img.decode) {
          img.decode().then(() => {
            humanFrames[i] = img;
            loadedHumanCount++;
          }).catch(() => {
            humanFrames[i] = img;
            loadedHumanCount++;
          });
        } else {
          humanFrames[i] = img;
          loadedHumanCount++;
        }
      };
    }
  }

  initRoboFrames();
  initEarthFrames();
  initLappFrames();
  initHandFrames();
  initHumanFrames();
  window.addEventListener('resize', resizeAllCanvases);

  // High-performance smooth LERP render loop for all 5 canvas sequences
  function multiRenderTick() {
    requestAnimationFrame(multiRenderTick);

    // 1. Lerp Robojump Updated
    const roboDiff = targetRoboIndex - currentRoboIndex;
    if (Math.abs(roboDiff) > 0.01) {
      currentRoboIndex += roboDiff * 0.35;
      const roundedRobo = Math.round(currentRoboIndex);
      if (roundedRobo !== lastRenderedRobo) {
        renderRoboFrame(roundedRobo);
        lastRenderedRobo = roundedRobo;
      }
    }

    // 2. Lerp Earthrobo
    const earthDiff = targetEarthIndex - currentEarthIndex;
    if (Math.abs(earthDiff) > 0.01) {
      currentEarthIndex += earthDiff * 0.35;
      const roundedEarth = Math.round(currentEarthIndex);
      if (roundedEarth !== lastRenderedEarth) {
        renderEarthFrame(roundedEarth);
        lastRenderedEarth = roundedEarth;
      }
    }

    // 3. Lerp Lapp Updated
    const lappDiff = targetLappIndex - currentLappIndex;
    if (Math.abs(lappDiff) > 0.01) {
      currentLappIndex += lappDiff * 0.35;
      const roundedLapp = Math.round(currentLappIndex);
      if (roundedLapp !== lastRenderedLapp) {
        renderLappFrame(roundedLapp);
        lastRenderedLapp = roundedLapp;
      }
    }

    // 4. Lerp Hand animation
    const handDiff = targetHandIndex - currentHandIndex;
    if (Math.abs(handDiff) > 0.01) {
      currentHandIndex += handDiff * 0.35;
      const roundedHand = Math.round(currentHandIndex);
      if (roundedHand !== lastRenderedHand) {
        renderHandFrame(roundedHand);
        lastRenderedHand = roundedHand;
      }
    }

    // 5. Lerp Human up
    const humanDiff = targetHumanIndex - currentHumanIndex;
    if (Math.abs(humanDiff) > 0.01) {
      currentHumanIndex += humanDiff * 0.35;
      const roundedHuman = Math.round(currentHumanIndex);
      if (roundedHuman !== lastRenderedHuman) {
        renderHumanFrame(roundedHuman);
        lastRenderedHuman = roundedHuman;
      }
    }
  }
  requestAnimationFrame(multiRenderTick);

  // Unified Scroll Handler across all 16 scrolling sections
  function handleMultiScroll(scrollY) {
    if (typeof scrollY !== 'number') {
      scrollY = window.scrollY;
    }

    const secServices = document.getElementById('services');
    const secPortfolio = document.getElementById('portfolio');
    const secStory = document.getElementById('story');
    const secTestimonials = document.getElementById('testimonials');
    const footerEl = document.querySelector('footer.site-footer') || document.querySelector('footer');

    // Section Stage boundaries:
    // Stage 1 (robojump updated, 192 frames): #hero, #awards, #about -> ends at #services
    // Stage 2 (earthrobo, 200 frames): #services, #guardian, #guardian-funnel -> ends at #portfolio
    // Stage 3 (lapp updated, 192 frames): #portfolio, #results, #industries -> ends at #story
    // Stage 4 (Hand animation, 192 frames): #story, #timeline, #tech-ecosystem, #ai-future -> ends at #testimonials
    // Stage 5 (human up, 192 frames): #testimonials, #estimator, #contact -> ends at footer
    const b1 = secServices ? secServices.offsetTop : (window.innerHeight * 3);
    const b2 = secPortfolio ? secPortfolio.offsetTop : (b1 + window.innerHeight * 3);
    const b3 = secStory ? secStory.offsetTop : (b2 + window.innerHeight * 3);
    const b4 = secTestimonials ? secTestimonials.offsetTop : (b3 + window.innerHeight * 4);
    const b5 = footerEl ? footerEl.offsetTop : (b4 + window.innerHeight * 3);

    // Fade bottom-left scroll cue as user starts scrolling
    if (heroCue) {
      const cueThreshold = window.innerHeight * 0.25;
      if (scrollY <= 0) {
        heroCue.style.opacity = '1';
      } else if (scrollY < cueThreshold) {
        heroCue.style.opacity = (1 - (scrollY / cueThreshold)).toFixed(3);
      } else {
        heroCue.style.opacity = '0';
      }
    }

    // 1. Robojump Updated (0 to b1, 192 frames)
    const p1 = Math.min(1, Math.max(0, scrollY / Math.max(1, b1)));
    targetRoboIndex = Math.min(TOTAL_ROBO_FRAMES - 1, Math.max(0, Math.floor(p1 * (TOTAL_ROBO_FRAMES - 1))));

    // 2. Earthrobo (b1 to b2, 200 frames)
    const p2 = Math.min(1, Math.max(0, (scrollY - b1) / Math.max(1, b2 - b1)));
    targetEarthIndex = Math.min(TOTAL_EARTH_FRAMES - 1, Math.max(0, Math.floor(p2 * (TOTAL_EARTH_FRAMES - 1))));

    // 3. Lapp Updated (b2 to b3, 192 frames)
    const p3 = Math.min(1, Math.max(0, (scrollY - b2) / Math.max(1, b3 - b2)));
    targetLappIndex = Math.min(TOTAL_LAPP_FRAMES - 1, Math.max(0, Math.floor(p3 * (TOTAL_LAPP_FRAMES - 1))));

    // 4. Hand Animation (b3 to b4, 192 frames)
    const p4 = Math.min(1, Math.max(0, (scrollY - b3) / Math.max(1, b4 - b3)));
    targetHandIndex = Math.min(TOTAL_HAND_FRAMES - 1, Math.max(0, Math.floor(p4 * (TOTAL_HAND_FRAMES - 1))));

    // 5. Human Up (b4 to b5, 192 frames)
    const p5 = Math.min(1, Math.max(0, (scrollY - b4) / Math.max(1, b5 - b4)));
    targetHumanIndex = Math.min(TOTAL_HUMAN_FRAMES - 1, Math.max(0, Math.floor(p5 * (TOTAL_HUMAN_FRAMES - 1))));

    // Smooth Crossfades between the 5 canvases around stage boundaries
    const crossfadeDist = Math.min(260, window.innerHeight * 0.3);

    if (scrollY < b1 - crossfadeDist) {
      if (roboCanvas) roboCanvas.style.opacity = '1';
      if (earthCanvas) earthCanvas.style.opacity = '0';
      if (lappCanvas) lappCanvas.style.opacity = '0';
      if (handCanvas) handCanvas.style.opacity = '0';
      if (humanCanvas) humanCanvas.style.opacity = '0';
    } else if (scrollY < b1) {
      const factor = (scrollY - (b1 - crossfadeDist)) / crossfadeDist;
      if (roboCanvas) roboCanvas.style.opacity = (1 - factor).toFixed(3);
      if (earthCanvas) earthCanvas.style.opacity = factor.toFixed(3);
      if (lappCanvas) lappCanvas.style.opacity = '0';
      if (handCanvas) handCanvas.style.opacity = '0';
      if (humanCanvas) humanCanvas.style.opacity = '0';
    } else if (scrollY < b2 - crossfadeDist) {
      if (roboCanvas) roboCanvas.style.opacity = '0';
      if (earthCanvas) earthCanvas.style.opacity = '1';
      if (lappCanvas) lappCanvas.style.opacity = '0';
      if (handCanvas) handCanvas.style.opacity = '0';
      if (humanCanvas) humanCanvas.style.opacity = '0';
    } else if (scrollY < b2) {
      const factor = (scrollY - (b2 - crossfadeDist)) / crossfadeDist;
      if (roboCanvas) roboCanvas.style.opacity = '0';
      if (earthCanvas) earthCanvas.style.opacity = (1 - factor).toFixed(3);
      if (lappCanvas) lappCanvas.style.opacity = factor.toFixed(3);
      if (handCanvas) handCanvas.style.opacity = '0';
      if (humanCanvas) humanCanvas.style.opacity = '0';
    } else if (scrollY < b3 - crossfadeDist) {
      if (roboCanvas) roboCanvas.style.opacity = '0';
      if (earthCanvas) earthCanvas.style.opacity = '0';
      if (lappCanvas) lappCanvas.style.opacity = '1';
      if (handCanvas) handCanvas.style.opacity = '0';
      if (humanCanvas) humanCanvas.style.opacity = '0';
    } else if (scrollY < b3) {
      const factor = (scrollY - (b3 - crossfadeDist)) / crossfadeDist;
      if (roboCanvas) roboCanvas.style.opacity = '0';
      if (earthCanvas) earthCanvas.style.opacity = '0';
      if (lappCanvas) lappCanvas.style.opacity = (1 - factor).toFixed(3);
      if (handCanvas) handCanvas.style.opacity = factor.toFixed(3);
      if (humanCanvas) humanCanvas.style.opacity = '0';
    } else if (scrollY < b4 - crossfadeDist) {
      if (roboCanvas) roboCanvas.style.opacity = '0';
      if (earthCanvas) earthCanvas.style.opacity = '0';
      if (lappCanvas) lappCanvas.style.opacity = '0';
      if (handCanvas) handCanvas.style.opacity = '1';
      if (humanCanvas) humanCanvas.style.opacity = '0';
    } else if (scrollY < b4) {
      const factor = (scrollY - (b4 - crossfadeDist)) / crossfadeDist;
      if (roboCanvas) roboCanvas.style.opacity = '0';
      if (earthCanvas) earthCanvas.style.opacity = '0';
      if (lappCanvas) lappCanvas.style.opacity = '0';
      if (handCanvas) handCanvas.style.opacity = (1 - factor).toFixed(3);
      if (humanCanvas) humanCanvas.style.opacity = factor.toFixed(3);
    } else {
      if (roboCanvas) roboCanvas.style.opacity = '0';
      if (earthCanvas) earthCanvas.style.opacity = '0';
      if (lappCanvas) lappCanvas.style.opacity = '0';
      if (handCanvas) handCanvas.style.opacity = '0';
      if (humanCanvas) humanCanvas.style.opacity = '1';
    }

    // Viewport gently rolls off when scrolling past contact into Footer
    if (roboBgViewport) {
      if (scrollY > b5 + window.innerHeight * 0.3) {
        roboBgViewport.style.opacity = '0';
      } else if (scrollY > b5) {
        const streamFade = Math.max(0, 1 - (scrollY - b5) / (window.innerHeight * 0.3));
        roboBgViewport.style.opacity = streamFade.toFixed(3);
      } else {
        roboBgViewport.style.opacity = '1';
      }
    }

    // Smart Auto-Hide Navigation Bar on Scroll
    if (siteHeader) {
      if (scrollY <= 50) {
        siteHeader.classList.remove('scrolled');
        siteHeader.classList.remove('header-hidden');
      } else {
        siteHeader.classList.add('scrolled');

        const scrollDiff = scrollY - lastHeaderScrollY;
        const isDrawerOpen = mobileDrawer && mobileDrawer.classList.contains('open');

        if (!isDrawerOpen) {
          if (scrollDiff > HEADER_SCROLL_DELTA && scrollY > 100) {
            siteHeader.classList.add('header-hidden');
          } else if (scrollDiff < -HEADER_SCROLL_DELTA) {
            siteHeader.classList.remove('header-hidden');
          }
        }
      }
      lastHeaderScrollY = scrollY;
    }

    // Nav active state updates
    updateHeaderNavState(scrollY);
  }

  // Hook into Lenis smooth scrolling or native fallback
  if (lenisInstance) {
    lenisInstance.on('scroll', (e) => {
      handleMultiScroll(e.scroll);
    });
  } else {
    window.addEventListener('scroll', () => {
      handleMultiScroll(window.scrollY);
    }, { passive: true });
  }

  // Navigation Links & Active Dot State
  const navItems = document.querySelectorAll('.nav-item');
  const allSections = document.querySelectorAll('section[id]');

  function updateHeaderNavState(scrollY) {
    const viewOffset = scrollY + window.innerHeight * 0.35;
    let currentId = 'hero';

    allSections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (viewOffset >= top && viewOffset < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      const href = item.getAttribute('href');
      const dataNav = item.getAttribute('data-nav');
      if (
        href === `#${currentId}` ||
        (currentId === 'hero' && dataNav === 'home') ||
        (currentId === 'awards' && dataNav === 'awards') ||
        (currentId === 'about' && dataNav === 'about') ||
        (currentId === 'services' && dataNav === 'services') ||
        (currentId === 'guardian' && dataNav === 'guardian') ||
        (currentId === 'guardian-funnel' && dataNav === 'guardian') ||
        (currentId === 'portfolio' && dataNav === 'portfolio') ||
        (currentId === 'results' && dataNav === 'portfolio') ||
        (currentId === 'industries' && dataNav === 'industries') ||
        (currentId === 'story' && dataNav === 'insights') ||
        (currentId === 'timeline' && dataNav === 'about') ||
        (currentId === 'tech-ecosystem' && dataNav === 'insights') ||
        (currentId === 'ai-future' && dataNav === 'insights') ||
        (currentId === 'testimonials' && dataNav === 'portfolio') ||
        (currentId === 'estimator' && dataNav === 'contact') ||
        (currentId === 'contact' && dataNav === 'contact')
      ) {
        item.classList.add('active');
      }
    });
  }

  // Desktop luxury gesture: Reveal header if mouse moves near top of screen
  window.addEventListener('mousemove', (e) => {
    if (siteHeader && e.clientY < 50) {
      siteHeader.classList.remove('header-hidden');
    }
  });

  if (menuToggle && mobileDrawer) {
    menuToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      document.body.style.overflow = mobileDrawer.classList.contains('open') ? 'hidden' : '';
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ==========================================================================
  // 6. ANIMATED STATISTICS COUNTERS
  // ==========================================================================
  const counters = document.querySelectorAll('.counter, .counter-val');
  let countersStarted = false;

  function runCounters() {
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target, 10);
      const isPlus = counter.classList.contains('counter-val') || (counter.textContent && counter.textContent.includes('+'));
      const duration = 1800; // ms
      const startTime = performance.now();

      function updateNumber(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOutProgress * target);
        counter.textContent = isPlus ? `${current}+` : current;

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          counter.textContent = isPlus ? `${target}+` : target;
        }
      }
      requestAnimationFrame(updateNumber);
    });
  }

  // Trigger when hero is in view
  if (heroSection) {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !countersStarted) {
        countersStarted = true;
        runCounters();
      }
    }, { threshold: 0.2 });
    observer.observe(heroSection);
  }

  // ==========================================================================
  // 7. RIYADVI GUARDIAN INTERACTIVE SEQUENCE
  // ==========================================================================
  const stepChips = [
    document.getElementById('chip-1'),
    document.getElementById('chip-2'),
    document.getElementById('chip-3'),
    document.getElementById('chip-4'),
    document.getElementById('chip-5')
  ];

  let currentChip = 0;
  setInterval(() => {
    stepChips.forEach(c => c && c.classList.remove('active'));
    if (stepChips[currentChip]) {
      stepChips[currentChip].classList.add('active');
    }
    currentChip = (currentChip + 1) % stepChips.length;
  }, 1600);

  // ==========================================================================
  // 8. INTERACTIVE INDUSTRY ECOSYSTEM DATA
  // ==========================================================================
  const industryData = {
    realestate: {
      category: 'SECTOR FOCUS // REAL ESTATE',
      title: 'High-Impact Spatial Visualization & Lead Capture',
      desc: 'From interactive WebGL 3D property tours to automated WhatsApp lead qualification funnels, we help real estate developers sell premium developments faster.',
      bullets: [
        '✓ 3D Virtual Walkthroughs & Interactive Floorplans',
        '✓ CRM Integration (Salesforce, HubSpot, LeadSquared)',
        '✓ Multi-Channel Meta & Google Real Estate Ad Funnels'
      ],
      stats: [
        { num: '3.2x', label: 'Lead Conversion Jump' },
        { num: '< 2s', label: 'Instant Brochure Delivery' },
        { num: '100%', label: 'GDPR / RERA Compliance' }
      ]
    },
    healthcare: {
      category: 'SECTOR FOCUS // HEALTHCARE & MEDTECH',
      title: 'HIPAA-Compliant Patient Portals & Telemedicine',
      desc: 'Secure digital infrastructure tailored for healthcare networks, automated doctor appointment engines, and encrypted records synchronization.',
      bullets: [
        '✓ End-to-End HIPAA & HL7 Data Encryption',
        '✓ Real-Time Video Consultations (WebRTC)',
        '✓ Automated Prescription & Pharmacy Dispatch'
      ],
      stats: [
        { num: '99.99%', label: 'Infrastructure Availability' },
        { num: '< 150ms', label: 'Telemetry Synchronization' },
        { num: '50k+', label: 'Patients Managed Securely' }
      ]
    },
    ecommerce: {
      category: 'SECTOR FOCUS // E-COMMERCE & RETAIL',
      title: 'High-Throughput Global Commerce & Cart Optimization',
      desc: 'Sub-second headless storefronts, automated recurring subscription billing, and predictive search driving superior checkout conversion.',
      bullets: [
        '✓ Multi-Currency Global Gateways (Stripe, Razorpay)',
        '✓ Automated Abandoned Cart Recovery Sequences',
        '✓ Real-Time ERP & Warehouse Stock Sync'
      ],
      stats: [
        { num: '+85%', label: 'Direct Online Sales' },
        { num: '< 0.8s', label: 'Page Load Speed' },
        { num: '2.8x', label: 'Average ROAS on Ad Spend' }
      ]
    },
    education: {
      category: 'SECTOR FOCUS // EDTECH & ACADEMIES',
      title: 'Immersive Learning Platforms & Course Management',
      desc: 'Interactive virtual classrooms, gamified student progress tracking, automated fee collections, and scalable video streaming runtimes.',
      bullets: [
        '✓ Scalable Video On Demand (HLS Streaming)',
        '✓ Automated Assessment & Certification Engines',
        '✓ Student Analytics & Drop-off Prevention Funnels'
      ],
      stats: [
        { num: '95%', label: 'Course Completion Rate' },
        { num: '10k+', label: 'Concurrent Learners' },
        { num: 'Zero', label: 'Video Buffering Downtime' }
      ]
    },
    sports: {
      category: 'SECTOR FOCUS // SPORTS & FITNESS',
      title: 'Turf Management, Booking & Member Platforms',
      desc: 'Automated slot booking systems, live arena scheduling, membership recurring passes, and high-engagement brand websites.',
      bullets: [
        '✓ Instant Slot Lock & Payment Confirmation',
        '✓ Multi-Venue Centralized Dashboard',
        '✓ Automated WhatsApp Match Reminders'
      ],
      stats: [
        { num: '+120%', label: 'Off-Peak Slot Utilization' },
        { num: '1-Click', label: 'Slot Rebooking' },
        { num: '100%', label: 'Automated Reconciliation' }
      ]
    },
    startups: {
      category: 'SECTOR FOCUS // STARTUPS & SCALEUPS',
      title: 'Rapid MVP Acceleration & Product Architecture',
      desc: 'Take your product from concept to seed round in 60 days with clean, extensible TypeScript and cloud-native architecture ready for investor scrutiny.',
      bullets: [
        '✓ Modular Microservices Built for Scale',
        '✓ Integrated Analytics & Cohort Tracking',
        '✓ Rapid Iteration Deployment Pipelines'
      ],
      stats: [
        { num: '60 Days', label: 'Average MVP Launch' },
        { num: '$10M+', label: 'Client Funding Secured' },
        { num: '100%', label: 'IP Ownership Transfer' }
      ]
    },
    enterprise: {
      category: 'SECTOR FOCUS // GLOBAL ENTERPRISE',
      title: 'Mission-Critical Digital Modernization',
      desc: 'Enterprise architecture migration, multi-region cloud resilience, automated security compliance, and custom operational portals.',
      bullets: [
        '✓ Kubernetes Multi-Region Orchestration',
        '✓ Dedicated 24/7 SLA Support Engineers',
        '✓ Comprehensive Penetration & Load Testing'
      ],
      stats: [
        { num: '99.999%', label: 'Enterprise Uptime SLA' },
        { num: 'SOC2', label: 'Readiness Framework' },
        { num: '24/7', label: 'Dedicated Monitoring' }
      ]
    }
  };

  const indTabs = document.querySelectorAll('.ind-tab');
  const indCat = document.getElementById('ind-cat');
  const indTitle = document.getElementById('ind-title');
  const indDesc = document.getElementById('ind-desc');
  const indBullets = document.getElementById('ind-bullets');
  const indStats = document.getElementById('ind-stats');

  indTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      indTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const data = industryData[tab.dataset.ind];
      if (!data) return;

      if (indCat) indCat.textContent = data.category;
      if (indTitle) indTitle.textContent = data.title;
      if (indDesc) indDesc.textContent = data.desc;

      if (indBullets) {
        indBullets.innerHTML = data.bullets.map(b => `<div class="ind-bullet-item">${b}</div>`).join('');
      }

      if (indStats) {
        indStats.innerHTML = data.stats.map(s => `
          <div class="ind-stat-item">
            <span class="is-num">${s.num}</span>
            <span class="is-label">${s.label}</span>
          </div>
        `).join('');
      }
    });
  });

  // ==========================================================================
  // 9. INTERACTIVE 7-STEP PROJECT ESTIMATOR
  // ==========================================================================
  const wizardSteps = [
    {
      title: 'What type of solution do you need?',
      options: [
        { label: 'Web Application / Next.js', key: 'web' },
        { label: 'Mobile App (iOS & Android)', key: 'mobile' },
        { label: 'Riyadvi Guardian Growth System', key: 'guardian' },
        { label: '3D WebGL / Spatial AR Experience', key: '3d' },
        { label: 'Full Digital Transformation Suite', key: 'suite' }
      ]
    },
    {
      title: 'What is your organization profile?',
      options: [
        { label: 'Early-Stage Startup', key: 'startup' },
        { label: 'Growing Business / SME', key: 'sme' },
        { label: 'Established Corporate Enterprise', key: 'enterprise' },
        { label: 'Digital Agency / Partner', key: 'agency' }
      ]
    },
    {
      title: 'What is the required project scale?',
      options: [
        { label: 'MVP Prototype (Fast Launch)', key: 'mvp' },
        { label: 'Full Commercial Platform', key: 'commercial' },
        { label: 'High-Volume Enterprise Architecture', key: 'enterprise_scale' }
      ]
    },
    {
      title: 'Select priority system capabilities:',
      options: [
        { label: 'Autonomous AI & Intelligent Agents', key: 'ai' },
        { label: 'Global Payment & E-Commerce Flow', key: 'payment' },
        { label: '3D Interactive Product Models', key: '3d_models' },
        { label: 'High-Performance Ad Funnel Integration', key: 'ads' }
      ]
    },
    {
      title: 'What is your target launch timeline?',
      options: [
        { label: 'Urgent (< 30 Days)', key: 'urgent' },
        { label: '1 – 3 Months', key: 'standard' },
        { label: '3 – 6 Months', key: 'extended' },
        { label: 'Flexible / Strategic Timeline', key: 'flexible' }
      ]
    },
    {
      title: 'What is your projected investment budget?',
      options: [
        { label: '$2,000 – $5,000', key: '2k-5k' },
        { label: '$5,000 – $15,000', key: '5k-15k' },
        { label: '$15,000 – $50,000', key: '15k-50k' },
        { label: '$50,000+ (Enterprise Custom)', key: '50k+' }
      ]
    },
    {
      title: 'Your Tailored Project Estimate is Ready',
      isFinal: true
    }
  ];

  let currentWizardStep = 0;
  const userSelections = {};

  const wizardBody = document.getElementById('wizard-step-body');
  const wizardTitle = document.getElementById('wizard-step-title');
  const wizardIndicator = document.getElementById('wizard-step-indicator');
  const wizardProgressFill = document.getElementById('wizard-progress-fill');
  const wizardBackBtn = document.getElementById('wizard-back-btn');
  const wizardNextBtn = document.getElementById('wizard-next-btn');

  function renderWizardStep() {
    const step = wizardSteps[currentWizardStep];
    if (wizardTitle) wizardTitle.textContent = step.title;
    if (wizardIndicator) wizardIndicator.textContent = `STEP ${currentWizardStep + 1} OF ${wizardSteps.length}`;
    if (wizardProgressFill) {
      wizardProgressFill.style.width = `${((currentWizardStep + 1) / wizardSteps.length) * 100}%`;
    }

    if (currentWizardStep === 0) {
      if (wizardBackBtn) wizardBackBtn.classList.add('hidden');
    } else {
      if (wizardBackBtn) wizardBackBtn.classList.remove('hidden');
    }

    if (step.isFinal) {
      renderFinalProfile();
      return;
    }

    if (wizardNextBtn) wizardNextBtn.textContent = 'Next Step →';

    let html = '<div class="wizard-options-grid">';
    step.options.forEach(opt => {
      const isSelected = userSelections[currentWizardStep] === opt.label ? 'selected' : '';
      html += `
        <button class="wizard-option-btn ${isSelected}" data-label="${opt.label}">
          <span>${opt.label}</span>
          <span style="color: var(--gold-bright);">→</span>
        </button>
      `;
    });
    html += '</div>';
    if (wizardBody) wizardBody.innerHTML = html;

    // Attach click events
    document.querySelectorAll('.wizard-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.wizard-option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        userSelections[currentWizardStep] = btn.dataset.label;
      });
    });
  }

  function renderFinalProfile() {
    const solution = userSelections[0] || 'Custom Software Solution';
    const profile = userSelections[1] || 'Growing Organization';
    const scale = userSelections[2] || 'Commercial Scale';
    const budget = userSelections[5] || 'Tailored Scoping';

    const whatsappText = encodeURIComponent(
      `Hello Riyadvi Team! I completed your project estimator for:\n- Solution: ${solution}\n- Profile: ${profile}\n- Scale: ${scale}\n- Budget: ${budget}\nI'd like to schedule our consultation.`
    );

    if (wizardBody) {
      wizardBody.innerHTML = `
        <div style="background: rgba(10,10,10,0.8); border: 1px solid var(--gold-border); border-radius: 16px; padding: 2rem; margin-bottom: 2rem;">
          <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--gold-bright); margin-bottom: 0.8rem;">
            PROJECT ROADMAP SPECIFICATION // GENERATED
          </div>
          <h4 style="font-family: var(--font-display); font-size: 1.4rem; color: #fff; margin-bottom: 1.2rem;">
            ${solution} — Architecture Scoped
          </h4>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
            <div><strong>Profile:</strong> ${profile}</div>
            <div><strong>Scale:</strong> ${scale}</div>
            <div><strong>Est. Investment:</strong> <span style="color: var(--gold-bright); font-weight: bold;">${budget}</span></div>
            <div><strong>Turnaround:</strong> 24h Executive Briefing</div>
          </div>
          <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="https://wa.me/918072487427?text=${whatsappText}" target="_blank" rel="noopener" class="btn-primary-gold">
              CONNECT ON WHATSAPP WITH THIS PROFILE
            </a>
            <a href="#contact" class="btn-secondary-outline">
              SUBMIT VIA BRIEFING FORM
            </a>
          </div>
        </div>
      `;
    }

    if (wizardNextBtn) {
      wizardNextBtn.textContent = 'Restart Estimator ↺';
    }
  }

  if (wizardNextBtn) {
    wizardNextBtn.addEventListener('click', () => {
      if (currentWizardStep >= wizardSteps.length - 1) {
        currentWizardStep = 0;
        renderWizardStep();
        return;
      }
      currentWizardStep++;
      renderWizardStep();
    });
  }

  if (wizardBackBtn) {
    wizardBackBtn.addEventListener('click', () => {
      if (currentWizardStep > 0) {
        currentWizardStep--;
        renderWizardStep();
      }
    });
  }

  renderWizardStep();

  // ==========================================================================
  // 10. RIYADVI AI ASSISTANT CHAT ENGINE
  // ==========================================================================
  const assistantToggle = document.getElementById('assistant-toggle');
  const assistantModal = document.getElementById('assistant-modal');
  const assistantClose = document.getElementById('assistant-close');
  const chatMessages = document.getElementById('chat-messages');
  const aiInput = document.getElementById('ai-input');
  const aiSendBtn = document.getElementById('ai-send-btn');
  const sugChips = document.querySelectorAll('.sug-chip');

  function openAssistant() {
    if (assistantModal) {
      assistantModal.classList.remove('hidden');
      if (aiInput) setTimeout(() => aiInput.focus(), 150);
    }
  }

  function closeAssistant(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (assistantModal) {
      assistantModal.classList.add('hidden');
    }
  }

  if (assistantToggle && assistantModal) {
    assistantToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      if (assistantModal.classList.contains('hidden')) {
        openAssistant();
      } else {
        closeAssistant();
      }
    });
  }

  if (assistantClose && assistantModal) {
    assistantClose.addEventListener('click', closeAssistant);
    assistantClose.addEventListener('touchend', closeAssistant);
  }

  // Close modal when clicking outside
  document.addEventListener('click', (e) => {
    if (assistantModal && !assistantModal.classList.contains('hidden')) {
      const isInside = assistantModal.contains(e.target) || (assistantToggle && assistantToggle.contains(e.target));
      if (!isInside) {
        closeAssistant();
      }
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && assistantModal && !assistantModal.classList.contains('hidden')) {
      closeAssistant();
    }
  });

  const aiKnowledge = {
    services: "We provide high-impact Web Development (Next.js/React), Native Mobile Apps (Flutter/React Native), Digital Marketing (Meta & Google Ads), UI/UX Design (Figma), E-Commerce, 3D WebGL Modeling, AR/VR Solutions, and Custom Enterprise Architecture.",
    website: "We specialize in ultra-fast, luxury web applications using React 19, Next.js, and Three.js 3D. We ensure sub-second load times, sub-pixel responsive layouts, and conversion-engineered landing pages.",
    guardian: "Riyadvi Guardian is our proprietary growth protector: combining marketing signal interception, 100+ verified lead funnels, and real-time conversion monitoring to guarantee compounding client revenue.",
    consultation: "You can book a free consultation directly with our founders! Call +91 8072487427, message us on WhatsApp, or submit our consultation briefing form below.",
    mobile: "Our mobile engineering team builds native iOS and Android apps with React Native and Flutter, complete with offline SQLite syncing, biometric auth, and push notification architectures."
  };

  function appendMessage(sender, text) {
    if (!chatMessages) return;
    const msg = document.createElement('div');
    msg.className = sender === 'user' ? 'user-msg' : 'ai-msg';
    msg.innerHTML = `<p>${text}</p>`;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function handleUserQuery(query) {
    appendMessage('user', query);

    setTimeout(() => {
      const lower = query.toLowerCase();
      let response = "Thank you for reaching out! A senior Riyadvi growth architect can review your specific project requirements. Would you like to connect directly on WhatsApp or review our project estimator?";

      if (lower.includes('service') || lower.includes('offer')) response = aiKnowledge.services;
      else if (lower.includes('website') || lower.includes('web')) response = aiKnowledge.website;
      else if (lower.includes('guardian') || lower.includes('growth')) response = aiKnowledge.guardian;
      else if (lower.includes('consultation') || lower.includes('meeting')) response = aiKnowledge.consultation;
      else if (lower.includes('mobile') || lower.includes('app')) response = aiKnowledge.mobile;

      appendMessage('ai', response);
    }, 450);
  }

  if (aiSendBtn && aiInput) {
    aiSendBtn.addEventListener('click', () => {
      const val = aiInput.value.trim();
      if (val) {
        handleUserQuery(val);
        aiInput.value = '';
      }
    });

    aiInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const val = aiInput.value.trim();
        if (val) {
          handleUserQuery(val);
          aiInput.value = '';
        }
      }
    });
  }

  sugChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const queryType = chip.dataset.query;
      const text = chip.textContent;
      appendMessage('user', text);

      setTimeout(() => {
        const response = aiKnowledge[queryType] || "I would be delighted to assist you with that. Let's arrange a consultation!";
        appendMessage('ai', response);
      }, 400);
    });
  });

  // ==========================================================================
  // 11. SERVICE DETAIL 8-STEP WORKFLOW MODAL
  // ==========================================================================
  const serviceModal = document.getElementById('service-modal');
  const serviceModalContent = document.getElementById('service-modal-content');
  const serviceModalClose = document.getElementById('service-modal-close');

  const serviceWorkflowDetails = {
    web: {
      name: 'Web Development Lifecycle',
      tech: 'React, Next.js, WordPress, WooCommerce, Node.js, TypeScript',
      steps: [
        '01. Strategy — Commercial goals, user intent & technical scoping',
        '02. UX — Wireframing, intuitive information architecture & flows',
        '03. UI — Bespoke luxury design systems & responsive interfaces',
        '04. Development — Modular frontend & backend engineering with strict typing',
        '05. Testing — Rigorous automated regression, security & cross-browser QA',
        '06. Deployment — Multi-region cloud staging & zero-downtime release',
        '07. Optimization — Sub-second Core Web Vitals & lightweight asset delivery',
        '08. Maintenance — Continuous 24/7 SLA monitoring & iterative feature updates'
      ]
    },
    mobile: {
      name: 'Mobile App Development Lifecycle',
      tech: 'React Native, Flutter, Swift, Kotlin, Firebase, REST/GraphQL',
      steps: [
        '01. Strategy — Platform targeting (iOS/Android) & feature roadmap',
        '02. UX — Ergonomic mobile navigation & gesture mapping',
        '03. UI — 60fps native design tokens & micro-interactions',
        '04. Development — Cross-platform business logic & offline SQLite sync',
        '05. Testing — Device hardware lab testing & automated unit suites',
        '06. Deployment — App Store & Google Play expedited submission',
        '07. Optimization — Memory leak profiling & battery efficiency tuning',
        '08. Maintenance — Real-time crash diagnostics & continuous updates'
      ]
    },
    marketing: {
      name: 'Digital Marketing & Growth Engine',
      tech: 'Google Ads, Meta Ads Manager, GA4, Server-Side CAPI, HubSpot',
      steps: [
        '01. Strategy — High-intent keyword targeting & audience segmentation',
        '02. Campaign Architecture — Multi-channel ad funnel & budget allocation',
        '03. Creative Execution — High-converting copy & visual assets',
        '04. Conversion Tracking — Server-side CAPI & offline event attribution',
        '05. A/B Testing — Split-testing landers, hooks & call-to-actions',
        '06. Retargeting — Dynamic remarketing & automated lead nurturing',
        '07. Optimization — ROAS scaling & customer acquisition cost reduction',
        '08. Analytics & Reporting — Transparent KPI dashboard & monthly reviews'
      ]
    },
    design: {
      name: 'UI/UX Design Systems & Spatial Experience',
      tech: 'Figma, Design Tokens, Spline 3D, Wireframing, UserTesting',
      steps: [
        '01. Discovery — User behavioral research & stakeholder mapping',
        '02. Information Architecture — Journey maps & user flows',
        '03. Wireframing — Low-fidelity structural validation',
        '04. Design Tokens — Standardized color, type, spacing & elevation',
        '05. High-Fidelity UI — Luxury typography & cinematic spatial aesthetics',
        '06. Interactive Prototyping — Realistic micro-interactions & feedback states',
        '07. Usability Testing — Ergonomic heatmaps & user validation sessions',
        '08. Design System Handoff — Developer documentation & style guides'
      ]
    },
    ecommerce: {
      name: 'E-Commerce Storefront Architecture',
      tech: 'WooCommerce, Shopify, Stripe, Razorpay, Headless APIs',
      steps: [
        '01. Strategy — Product taxonomy & multi-currency requirements',
        '02. UX Design — Frictionless sub-second cart & checkout workflows',
        '03. Integration — Secure payment gateways & anti-fraud defense',
        '04. Logistics — Real-time inventory & ERP warehouse synchronization',
        '05. Automation — Abandoned cart recovery & WhatsApp order notifications',
        '06. Compliance — Automated tax calculation, GST & invoicing',
        '07. Scalability — High-throughput flash-sale optimization',
        '08. Growth — LTV expansion & automated loyalty programs'
      ]
    },
    '3d': {
      name: '3D Modeling & Interactive WebGL',
      tech: 'Three.js, WebGL, GLSL Shaders, Blender, Draco Compression',
      steps: [
        '01. Asset Modeling — Topology optimization & low-poly mesh modeling',
        '02. Material Engineering — PBR metallic materials, roughness & normal maps',
        '03. Compression — Draco geometry & WebP texture compression',
        '04. Scene Lighting — Real-time dynamic shadows & ambient reflection probes',
        '05. Interactivity — Orbiting camera controls & interactive product hotspots',
        '06. Performance — Viewport throttling & fallback visuals for low-power devices',
        '07. Framerate Profiling — Constant 60fps execution across modern browsers',
        '08. Delivery — Progressive asset streaming with zero blocking lag'
      ]
    },
    arvr: {
      name: 'AR/VR Spatial Digital Experiences',
      tech: 'WebXR, Three.js, Spatial UX, ARKit, ARCore, GLTF/USDZ',
      steps: [
        '01. Concept & Feasibility — Spatial user requirements & hardware targets',
        '02. Spatial UX — 3D spatial interface & eye/controller raycasting',
        '03. 3D Environment — Photorealistic spatial environment assembly',
        '04. WebXR Integration — In-browser Augmented & Virtual Reality sessions',
        '05. Interaction Testing — Hand tracking & spatial physics feedback',
        '06. Optimization — Low-latency stereoscopic rendering & comfort tuning',
        '07. Multi-Device QA — Apple Vision Pro, Meta Quest & mobile web testing',
        '08. Deployment — Frictionless web-based spatial launching'
      ]
    },
    custom: {
      name: 'Custom Software Development Lifecycle',
      tech: 'Node.js, TypeScript, PostgreSQL, Redis, Docker, Microservices',
      steps: [
        '01. Business Architecture — Domain-driven design & schema blueprints',
        '02. API Design — Strict OpenAPI / GraphQL contracts & validation',
        '03. Core Implementation — Resilient transactional business logic',
        '04. Database Architecture — Scalable PostgreSQL schemas & Redis caching',
        '05. Security — Zero-trust access controls, JWT & data encryption',
        '06. Integration — Third-party webhooks, ERP & CRM connectors',
        '07. QA & Audits — Automated unit, integration & vulnerability scans',
        '08. Support & SLA — 24/7 infrastructure defense & continuous patches'
      ]
    },
    wordpress: {
      name: 'WordPress / WooCommerce Enterprise Solutions',
      tech: 'WordPress, WooCommerce, PHP 8+, Custom Blocks, REST API',
      steps: [
        '01. Architecture — Bespoke theme design & database schema tuning',
        '02. Custom Blocks — Intuitive Gutenberg editing components',
        '03. Security Hardening — OWASP defenses, brute-force & XML-RPC lockout',
        '04. Speed Optimization — Redis object cache, OPcache & image optimization',
        '05. WooCommerce Setup — Custom checkout, tax & gateway configuration',
        '06. Content Migration — Automated zero-data-loss content staging',
        '07. Multi-Lingual & SEO — Schema markup, hreflang & sitemap generation',
        '08. Maintenance — Automated daily backups & safe plugin update pipelines'
      ]
    },
    seo: {
      name: 'SEO & Social Media Management (SMM)',
      tech: 'Technical SEO, Meta Business Suite, Schema.org, Search Console, GA4',
      steps: [
        '01. Technical Audit — Crawl budget, indexation & canonical architecture',
        '02. Keyword Strategy — Commercial intent & local search domination',
        '03. On-Page SEO — Semantic HTML5, structured Schema data & meta tags',
        '04. Content Engine — High-value authoritative industry publications',
        '05. Social Branding — Consistent visual brand voice & executive thought leadership',
        '06. Audience Engagement — Community interaction & viral social hooks',
        '07. Backlink Strategy — Ethical authority citations & digital PR',
        '08. Conversion Attribution — Organic traffic to sales lead pipeline tracking'
      ]
    },
    guardian: {
      name: 'Riyadvi Guardian Growth System',
      tech: 'Autonomous AI, Google Ads API, Meta CAPI, CRM Webhooks',
      steps: [
        '01. Audit — Revenue leakage & customer touchpoint analysis',
        '02. Attract — High-intent search interception & audience targeting',
        '03. Engage — 3D interaction, intuitive UI & compelling value messaging',
        '04. Capture — Verified landing pages & WhatsApp instant response',
        '05. Nurture — Automated follow-up workflows & retargeting sequences',
        '06. Convert — Frictionless CRM dispatch & consultation bookings',
        '07. Grow — LTV cohort analytics & scaling profitable channels',
        '08. Protect — Continuous monitoring against competitor encroachment'
      ]
    }
  };

  window.openServiceModal = function (serviceKey) {
    const data = serviceWorkflowDetails[serviceKey] || serviceWorkflowDetails.web;
    if (!serviceModal || !serviceModalContent) return;

    serviceModalContent.innerHTML = `
      <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--gold-bright); margin-bottom: 0.5rem;">
        TECHNICAL SPECIFICATION & WORKFLOW // 8 STAGES
      </div>
      <h3 style="font-family: var(--font-display); font-size: 1.8rem; color: #fff; margin-bottom: 0.8rem;">
        ${data.name}
      </h3>
      <div style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 1.8rem;">
        <strong>Core Stack:</strong> ${data.tech}
      </div>
      <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem;">
        ${data.steps.map(s => `
          <div style="padding: 0.75rem 1rem; background: var(--bg-elevated); border-left: 2px solid var(--gold-primary); border-radius: 6px; font-family: var(--font-mono); font-size: 0.82rem; color: #fff;">
            ${s}
          </div>
        `).join('')}
      </div>
      <a href="#contact" class="btn-primary-gold" onclick="document.getElementById('service-modal').classList.add('hidden')">
        START THIS WORKFLOW WITH US →
      </a>
    `;

    serviceModal.classList.remove('hidden');
  };

  if (serviceModalClose && serviceModal) {
    serviceModalClose.addEventListener('click', () => {
      serviceModal.classList.add('hidden');
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === serviceModal) {
      serviceModal.classList.add('hidden');
    }
  });

  // ==========================================================================
  // 12. CONTACT FORM VALIDATION & DIRECT CONNECT
  // ==========================================================================
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value;
      const company = document.getElementById('form-company').value;
      const phone = document.getElementById('form-phone').value;
      const service = document.getElementById('form-service').value;

      if (formFeedback) {
        formFeedback.className = 'form-feedback-msg success';
        formFeedback.innerHTML = `
          <strong>✓ Consultation Request Received</strong><br>
          Thank you, ${name} from ${company}. A senior Riyadvi technology architect will review your ${service} requirements and reach out via phone/WhatsApp at ${phone} within 24 hours.
        `;
        formFeedback.classList.remove('hidden');
      }

      contactForm.reset();
    });
  }

})();
