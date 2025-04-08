// Create floating particles
document.addEventListener('DOMContentLoaded', function() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random size between 1px and 3px
      const size = Math.random() * 2 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100 + 100}%`;
      
      // Random animation duration between 10s and 20s
      const duration = Math.random() * 10 + 10;
      particle.style.animationDuration = `${duration}s`;
      
      // Random delay
      particle.style.animationDelay = `${Math.random() * 5}s`;
      
      particlesContainer.appendChild(particle);
    }
    
    // Add interactive elements to mission cards
    const missionCards = document.querySelectorAll('.mission-card');
    missionCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const glowColor = card.querySelector('h3').style.color;
        card.style.boxShadow = `0 0 30px ${glowColor}`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'none';
      });
    });
  });