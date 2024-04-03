import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const { pathname } = url;

  if (!pathname?.startsWith(`/api/`) && pathname === "/") {
    return NextResponse.rewrite(new URL("/entrypoint", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/((?!_next|fonts|examples|svg|[\\w-]+\\.\\w+).*)"],
};
