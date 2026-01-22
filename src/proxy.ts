/*
 * @Author: giaruei
 * @Date: 2026-01-09 11:33:13
 * @LastEditors: Joshua.Cai Joshua.Cai@agilex.ai
 * @LastEditTime: 2026-01-22 11:59:46
 * @FilePath: /polaris/src/proxy.ts
 * @Description:
 */
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["api/inngest(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
