/**
 * Premium Web Interactivity Script
 * Handles mouse tracking glow, 3D card tilt effect, and interactive actions.
 */

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const interactiveGlow = document.getElementById('js-interactive-glow');
  const cardContainer = document.getElementById('js-card-container');
  const exploreBtn = document.getElementById('js-explore-btn');

  let tick = false;

  // 1. Mouse coordinates updates for interactive glow and 3D card rotation
  window.addEventListener('mousemove', (e) => {
    if (!tick) {
      window.requestAnimationFrame(() => {
        // Update interactive glow coordinates
        root.style.setProperty('--mouse-x', `${e.clientX}px`);
        root.style.setProperty('--mouse-y', `${e.clientY}px`);

        // Compute relative mouse position within viewport to tilt the card
        if (cardContainer) {
          const halfWidth = window.innerWidth / 2;
          const halfHeight = window.innerHeight / 2;
          
          // Normalized value between -1 and 1
          const rotateX = -(e.clientY - halfHeight) / halfHeight; // vertical tilt
          const rotateY = (e.clientX - halfWidth) / halfWidth;   // horizontal tilt

          // Apply mild 3D rotation (max 10 degrees tilt for premium subtlety)
          cardContainer.style.transform = `rotateX(${rotateX * 10}deg) rotateY(${rotateY * 10}deg)`;
        }

        tick = false;
      });
      tick = true;
    }
  });

  // Reset card tilt when mouse leaves the viewport
  document.addEventListener('mouseleave', () => {
    if (cardContainer) {
      cardContainer.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  });

  // 2. Click effect on the interactive action button
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      // Gentle vibration/haptic feedback if supported on mobile
      if (navigator.vibrate) {
        navigator.vibrate(10);
      }

      // Elegant scale-down keyframe or transition triggers
      exploreBtn.style.transform = 'scale(0.95)';
      setTimeout(() => {
        exploreBtn.style.transform = '';
      }, 150);

      // Create a floating particle or ripple just for visual premium feedback
      createParticleEffect(exploreBtn);
    });
  }

  /**
   * Helper to create elegant particle spark on button click
   */
  function createParticleEffect(element) {
    const rect = element.getBoundingClientRect();
    const center = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };

    for (let i = 0; i < 6; i++) {
      const particle = document.createElement('div');
      particle.className = 'sparkle-particle';
      
      const angle = (i / 6) * Math.PI * 2;
      const distance = 40 + Math.random() * 20;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      particle.style.cssText = `
        position: fixed;
        left: ${center.x}px;
        top: ${center.y}px;
        width: 8px;
        height: 8px;
        background: var(--color-accent-secondary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 100;
        transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        opacity: 0.8;
      `;

      document.body.appendChild(particle);

      // Trigger standard transition in requestAnimationFrame
      requestAnimationFrame(() => {
        particle.style.transform = `translate(${x}px, ${y}px) scale(0)`;
        particle.style.opacity = '0';
      });

      setTimeout(() => {
        particle.remove();
      }, 600);
    }
  }
});
