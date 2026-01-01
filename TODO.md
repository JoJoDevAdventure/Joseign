# Joseign Website TODO

## Content & Assets

### 1. Gather Project Assets
- [ ] Collect all images for new projects:
  - [ ] Gearshare (MVP & SaaS) - screenshots, mockups
  - [ ] LMS Electrical (Landing Page) - screenshots
  - [ ] Diamond Air (Landing Page) - screenshots
  - [ ] PEARSON (Landing Page) - screenshots
- [ ] Optimize images (compress, resize for web)
- [ ] Add images to `/public/projects/` directory with proper naming

### 2. Update Services "WHAT WE DO" Section Images
- [ ] Create/update service images in `/public/services/`
- [ ] Update images in Services component (`src/components/Services.js`)
- [ ] Ensure images are optimized and properly sized
- [ ] Test responsive behavior on all screen sizes

## Projects Section Updates

### 3. Add New Projects to Data
- [x] Add Gearshare to "SaaS & MVP" category in `src/components/Projects.js`
  - [x] Add project title, description, link, case study link
  - [ ] Add images (placeholder paths set, need actual images)
- [x] Add LMS Electrical to "Landing Page" category
  - [x] Add project title, description, link, case study link
  - [ ] Add landing page screenshot
- [x] Add Diamond Air to "Landing Page" category
  - [x] Add project title, description, link, case study link
  - [ ] Add landing page screenshot
- [x] Add PEARSON to "Landing Page" category
  - [x] Add project title, description, link, case study link
  - [ ] Add landing page screenshot

### 4. Update /projects Page
- [ ] Update categories in `/src/pages/projects.js`
- [ ] Add all new projects to their respective categories
- [ ] Ensure filtering works correctly
- [ ] Update project count displays
- [ ] Test navigation between categories

## Case Studies

### 5. Create Case Study Pages
- [x] Create `/src/pages/projects/gearshare/index.js`
  - [x] Hero section with project overview
  - [x] Challenge/Problem section
  - [x] Solution/Approach section
  - [x] Results/Metrics section
  - [x] Tech stack & deliverables
  - [ ] Screenshots/visuals (placeholder paths set, need actual images)
  - [x] CTA section
- [x] Create `/src/pages/projects/lms-electrical/index.js`
  - [x] Same structure as above
  - [ ] Screenshots/visuals (placeholder paths set, need actual images)
- [x] Create `/src/pages/projects/diamond-air/index.js`
  - [x] Same structure as above
  - [ ] Screenshots/visuals (placeholder paths set, need actual images)
- [x] Create `/src/pages/projects/pearson/index.js`
  - [x] Same structure as above
  - [ ] Screenshots/visuals (placeholder paths set, need actual images)

### 6. Update Case Studies Data
- [x] Add new case studies to "Case Studies" tab in `src/components/Projects.js`
- [ ] Ensure iframe embeds work properly (test after images added)
- [x] Update case study links in all project entries

## Testing & Final Steps

### 7. Quality Assurance
- [ ] Test all new project links (live sites)
- [ ] Test all case study page links
- [ ] Verify all images load correctly
- [ ] Test responsive design on mobile/tablet
- [ ] Check SEO meta tags for new pages
- [ ] Test service page navigation from navbar dropdown

### 8. Deployment
- [ ] Commit all changes with descriptive message
- [ ] Push to repository
- [ ] Deploy to production
- [ ] Verify everything works in production
- [ ] Update sitemap if needed

---

## Notes
- Complete tasks in order for best workflow
- Each case study should follow same structure for consistency
- Make sure all images are optimized before adding to repo
- Test locally before deploying to production
