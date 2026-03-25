export const INTEGRATIONS = [
  {
    id: "html",
    title: "HTML",
    icon: "/languages/html5.svg",
  },
  {
    id: "react",
    title: "React",
    icon: "/languages/react.svg",
  },
  {
    id: "nextjs",
    title: "Next.js",
    icon: "/languages/nextjs.svg",
  },
  {
    id: "javascript",
    title: "Javascript",
    icon: "/languages/javascript.svg",
  },
];

export type IntegrationId = (typeof INTEGRATIONS)[number]["id"];

export const HTML_SCRIPT = `<script src="https://astro-ai-new-widget.vercel.app/widget.js" data-organization-id="{{ORGANIZATION_ID}}">html</script>`;
export const REACT_SCRIPT = `<script data-organization-id="{{ORGANIZATION_ID}}">rea</script>`;
export const NEXTJS_SCRIPT = `<script data-organization-id="{{ORGANIZATION_ID}}">next</script>`;
export const JAVASCRIPT_SCRIPT = `<script data-organization-id="{{ORGANIZATION_ID}}">s</script>`;
