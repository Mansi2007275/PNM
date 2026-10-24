/**
 * Pull-N-Merge - Main Script
 *
 * This file intentionally has incomplete features so workshop
 * participants can practice real open-source contribution.
 *
 * Search for "ISSUE #" to find places that need work.
 */

// ============================================
// ISSUE #6 (Medium) – Progress Tracker
// ============================================
// TODO (ISSUE #6): Implement localStorage-backed progress tracker
//
// Requirements:
// 1. On page load, read prCount, issueCount, commitCount from localStorage (default 0)
// 2. Update the three number elements: #pr-count, #issue-count, #commit-count
// 3. Enable the three buttons (#btn-add-pr, #btn-add-issue, #btn-add-commit)
// 4. On button click → increment count → save to localStorage → update UI
// 5. (Bonus) Add a "Reset Progress" button
//
// Files involved: this file + optionally src/index.html

const prCountEl = document.getElementById('pr-count');
const issueCountEl = document.getElementById('issue-count');
const commitCountEl = document.getElementById('commit-count');

const btnAddPr = document.getElementById('btn-add-pr');
const btnAddIssue = document.getElementById('btn-add-issue');
const btnAddCommit = document.getElementById('btn-add-commit');

// Placeholder — currently does nothing useful
function initProgressTracker() {
  console.log('Progress tracker not yet implemented. See ISSUE #6!');
  // Buttons remain disabled until ISSUE #6 is solved
}

// ============================================
// ISSUE #7 (Medium) – Dark / Light Theme Toggle
// ============================================
// TODO (ISSUE #7): Implement dark/light theme toggle
//
// Requirements:
// 1. Add a theme toggle button in the header (see comment in index.html)
// 2. Toggle data-theme="dark" on the <html> element
// 3. Persist the preference in localStorage
// 4. On first visit, optionally respect prefers-color-scheme
//
// CSS variables for dark theme already exist in styles.css
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  if (!themeToggle) return;

  const savedTheme = localStorage.getItem('theme');
  let theme = savedTheme || (
    window.matchMedia('(prefers-color-scheme: dark)').matches? 'dark': 'light'
  );

  function applyTheme() {
    if (theme === 'dark') {
      html.setAttribute('data-theme', 'dark');
      themeToggle.textContent = '☀️ Light Mode';
      themeToggle.setAttribute('aria-label', 'Switch to light theme');
    } else {
      html.removeAttribute('data-theme');
      themeToggle.textContent = '🌙 Dark Mode';
      themeToggle.setAttribute('aria-label', 'Switch to dark theme');
    }
  }

  
  applyTheme();

  
  themeToggle.addEventListener('click', () => {
    theme = theme === 'light' ? 'dark' : 'light';

    localStorage.setItem('theme', theme);
    applyTheme();
  });
}


// ============================================
// ISSUE #8 (Medium) – Animate progress numbers
// ============================================
// TODO (ISSUE #8): When a counter increases, animate the number
// (smooth count-up over ~400-600ms) instead of instantly jumping.
// Only needed after ISSUE #6 is completed.

// ============================================
// Smooth Scroll for Navigation (already working)
// ============================================

document.querySelectorAll('.nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================================
// Simple Console Welcome
// ============================================

console.log('%c🚀 Welcome to Pull-N-Merge!', 'font-size: 16px; font-weight: bold; color: #2563eb;');
console.log('%cThis is a practice repository for learning open-source contribution.', 'color: #64748b;');
console.log('%cSearch the code for \"ISSUE #\" or check the Issues tab on GitHub!', 'color: #16a34a;');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initProgressTracker();
  initThemeToggle();
});
