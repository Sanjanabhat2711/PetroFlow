// Vercel Serverless Function Entry Point
// Handles all /api/* requests and forwards them to the Express app.

let app;

async function getApp() {
  if (!app) {
    const { default: serverApp } = await import("../server.bundle.js");
    app = serverApp;
  }
  return app;
}

export default async function handler(req, res) {
  const serverApp = await getApp();
  serverApp(req, res);
}
