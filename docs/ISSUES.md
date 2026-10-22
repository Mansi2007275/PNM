# Pre-defined Issues for Workshop

Use this list to create GitHub Issues before or during the workshop.  
Copy-paste the content into new issues and apply the suggested labels.

---

## 🟢 Easy / Good First Issues

### Issue 1: Fix typo in README
**Title:** Fix small typo / improve wording in README.md  
**Labels:** `good-first-issue`, `documentation`  
**Body:**
```
There is a minor opportunity to improve clarity in the README.

**Task:**
- Open `README.md`
- Review the "About This Project" and "Features" sections
- Fix any awkward phrasing or make one sentence clearer
- Keep the friendly, welcoming tone

**Acceptance Criteria:**
- [ ] No breaking changes to structure
- [ ] Clearer or more polished language
```

### Issue 2: Add more learning resources
**Title:** Add 2–3 high-quality resources to the Resources section  
**Labels:** `good-first-issue`, `documentation`  
**Body:**
```
The Resources section currently has 4 links. Let's expand it.

**Task:**
- Open `src/index.html`
- Find the `#resources` section
- Add 2 or 3 more high-quality, beginner-friendly resources about Git/GitHub/Open Source
- Examples: freeCodeCamp Git course, Oh My Git game, GitHub Skills, etc.

**Acceptance Criteria:**
- [ ] Links open in new tab (`target="_blank" rel="noopener"`)
- [ ] Resources are relevant and high quality
```

### Issue 3: Improve footer year
**Title:** Make the copyright year dynamic or update it  
**Labels:** `good-first-issue`, `enhancement`  
**Body:**
```
In the footer there is a comment about the year.

**Task:**
- Either hardcode the correct year or (better) make it dynamic with a tiny bit of JavaScript
- Or simply ensure the year shown is accurate

**Acceptance Criteria:**
- [ ] Year is correct / updates automatically
```

### Issue 4: Add alt text / improve accessibility of icons
**Title:** Improve accessibility – add meaningful labels for emoji icons  
**Labels:** `good-first-issue`, `accessibility`  
**Body:**
```
Emoji icons in cards currently have no accessible text.

**Task:**
- Add `aria-hidden="true"` to decorative emojis **or** provide accessible labels
- Ensure the page is more screen-reader friendly

**Acceptance Criteria:**
- [ ] Decorative icons properly marked
- [ ] No visual regression
```

### Issue 5: Fix/Improve button hover styles
**Title:** Polish button hover and focus states  
**Labels:** `good-first-issue`, `css`  
**Body:**
```
Buttons work, but hover/focus can be nicer.

**Task:**
- Improve `.btn-primary:hover` and `.btn-secondary:hover` transitions
- Ensure focus states are clearly visible (important for keyboard users)

**Acceptance Criteria:**
- [ ] Smooth, pleasant hover effect
- [ ] Visible focus outline
```

---

## 🟡 Medium Issues

### Issue 6: Implement Progress Tracker
**Title:** Implement the Contribution Progress Tracker with localStorage  
**Labels:** `medium`, `javascript`, `feature`  
**Body:**
```
The Progress section exists but buttons are disabled and counts stay at 0.

**Requirements:**
1. On page load, read `prCount`, `issueCount`, `commitCount` from `localStorage` (default to 0)
2. Update the three number displays
3. Enable the three buttons
4. Clicking a button increments the corresponding count, saves to localStorage, and updates the UI
5. (Bonus) Add a small "Reset" button that clears the counts

**Files to modify:**
- `src/script.js` (main logic)
- Optionally `src/index.html` if you add a Reset button

**Acceptance Criteria:**
- [ ] Counts persist across page reloads
- [ ] Buttons work and update the UI immediately
- [ ] Code is clean and commented
```

### Issue 7: Add Dark / Light Theme Toggle
**Title:** Implement dark mode / light mode theme toggle  
**Labels:** `medium`, `css`, `javascript`, `feature`  
**Body:**
```
CSS already contains `[data-theme="dark"]` variables, but there is no toggle.

**Requirements:**
1. Add a theme toggle button in the header (near the nav links)
2. Clicking it toggles `data-theme="dark"` on the `<html>` element
3. Persist the preference in `localStorage`
4. On load, apply the saved preference (or system preference as fallback)

**Hints:**
- Use `document.documentElement.setAttribute('data-theme', 'dark')`
- CSS variables will automatically switch

**Acceptance Criteria:**
- [ ] Toggle button is visible and accessible
- [ ] Theme switches instantly
- [ ] Preference survives page reload
```

### Issue 8: Make the Progress numbers animate on change
**Title:** Add smooth number animation when progress increases  
**Labels:** `medium`, `javascript`, `enhancement`  
**Body:**
```
When a user increments a counter, the number should animate (count up) instead of jumping.

**Requirements:**
- When a count changes, animate from old value to new value over ~400–600ms
- Keep it lightweight (no external libraries)

**Acceptance Criteria:**
- [ ] Smooth count-up animation
- [ ] Works for all three counters
- [ ] Doesn’t break existing functionality
```

### Issue 9: Improve mobile navigation
**Title:** Add a simple mobile-friendly navigation menu  
**Labels:** `medium`, `css`, `html`, `responsive`  
**Body:**
```
On small screens the nav links can feel cramped.

**Task:**
- Implement a hamburger menu for screens < 640px
- Or improve spacing / wrapping so it still looks good
- Keep it simple (no frameworks)

**Acceptance Criteria:**
- [ ] Usable navigation on mobile
- [ ] No horizontal overflow
```

---

## 🔴 Advanced / Hard Issues

### Issue 10: Add a simple Git & GitHub Quiz
**Title:** Create an interactive quiz section  
**Labels:** `advanced`, `javascript`, `feature`  
**Body:**
```
Add a new section with 5–8 multiple-choice questions about Git and GitHub.

**Requirements:**
- Questions + options + correct answer tracking
- Score displayed at the end
- Ability to restart the quiz
- Clean UI that matches the existing design
- Store high score in localStorage (optional)

**Acceptance Criteria:**
- [ ] At least 5 well-written questions
- [ ] Immediate feedback or final score
- [ ] Responsive and accessible
- [ ] Code is modular and readable
```

### Issue 11: Contributor Leaderboard (local)
**Title:** Build a local contributor leaderboard  
**Labels:** `advanced`, `javascript`, `feature`  
**Body:**
```
Allow users to “claim” contributions by entering a name / GitHub username.

**Ideas:**
- A form to add a contributor name + number of PRs
- Display a sorted leaderboard
- Persist in localStorage
- Nice empty state and styling

**Acceptance Criteria:**
- [ ] Users can add themselves
- [ ] Leaderboard sorts by contribution count
- [ ] Data persists
- [ ] Polished UI
```

### Issue 12: Accessibility audit & improvements
**Title:** Full accessibility pass (a11y)  
**Labels:** `advanced`, `accessibility`, `css`, `html`  
**Body:**
```
Perform a thorough accessibility review and fix issues.

**Areas to check:**
- Color contrast
- Keyboard navigation
- Focus management
- ARIA labels where needed
- Semantic HTML
- Reduced motion preference

**Acceptance Criteria:**
- [ ] Passes basic axe / Lighthouse accessibility checks
- [ ] Fully keyboard navigable
- [ ] Good contrast ratios
```

### Issue 13: Add a “How to Contribute” interactive checklist
**Title:** Interactive “First Contribution” checklist  
**Labels:** `advanced`, `javascript`, `feature`  
**Body:**
```
Create a step-by-step interactive checklist that walks a beginner through making their first PR.

Steps could include:
1. Fork the repo
2. Clone it
3. Create a branch
4. Make a change
5. Commit
6. Push
7. Open PR

Each step can be marked as done (persisted in localStorage).

**Acceptance Criteria:**
- [ ] Clear, encouraging steps
- [ ] Progress is saved
- [ ] Looks consistent with the rest of the site
```

---

## Tips for Maintainers

1. Create these issues **before** the workshop starts.
2. Assign the correct labels (`good-first-issue`, `medium`, `advanced`).
3. During the workshop, encourage participants to comment “I’d like to work on this” before starting.
4. Review PRs live if possible — it’s a great learning moment.
5. Celebrate every merged PR!

Happy mentoring! 🚀
