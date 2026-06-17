import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Set this to where you host the docs (used for SEO / sitemap).
// Note: setting `site` currently crashes the bundled @astrojs/sitemap in this
// Starlight version; leave it unset (sitemap is skipped) until that is upgraded.
export default defineConfig({
  integrations: [
    starlight({
      title: 'Zero to 100',
      logo: { src: './src/assets/logo.png', replacesTitle: true },
      customCss: ['./src/styles/zt100.css'],
      // Top-level links (the gated partner docs live in the partner app, not here)
      // Replace the href with your real partner-app docs route.
      pagination: true,
      sidebar: [
        { label: 'Getting started', collapsed: true, items: [
          { label: 'What is Zero to 100', link: '/' },
          { label: 'The journey', link: '/getting-started/the-journey/' },
          { label: "Who it's for", link: '/getting-started/who-its-for/' },
        ]},
        { label: '1. The Platform', collapsed: true, items: [
          { label: 'Diagnostics', collapsed: true, items: [
            { label: 'AI Maturity Assessment', link: '/diagnostics/ai-maturity-assessment/' },
            { label: 'Insights dashboard', link: '/diagnostics/insights-dashboard/' },
            { label: 'Risk & Compliance', link: '/diagnostics/risk-compliance/' },
            { label: 'The browser extension', link: '/diagnostics/browser-extension/' },
          ]},
          { label: 'Learning', collapsed: true, items: [
            { label: 'Courses: journeys & micro-skills', link: '/learning/courses/' },
            { label: 'AI Lab', link: '/learning/ai-lab/' },
            { label: 'Community', link: '/learning/community/' },
          ]},
          { label: 'Workflows', collapsed: true, items: [
            { label: 'Workflow analysis & builder', link: '/workflows/workflow-builder/' },
            { label: 'AI Use Cases', link: '/workflows/ai-use-cases/' },
          ]},
        ]},
        { label: '2. Private AI', collapsed: true, items: [
          { label: 'Connected AI across your work', link: '/private-ai/connected-ai/' },
          { label: 'Meetings', link: '/private-ai/meetings/' },
          { label: 'Drive', link: '/private-ai/drive/' },
          { label: 'Workflows (Studio)', link: '/private-ai/studio/' },
          { label: 'Private deployment & controls', link: '/private-ai/private-deployment/' },
        ]},
        { label: '3. Agents & automation', collapsed: true, items: [
          { label: 'Agents & automation', link: '/agents/agents-automation/' },
        ]},
        { label: 'Resources', collapsed: true, items: [
          { label: 'Changelog', link: '/resources/changelog/' },
          { label: 'FAQ', link: '/resources/faq/' },
        ]},
      ],
    }),
  ],
});
