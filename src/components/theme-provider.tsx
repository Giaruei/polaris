/*
 * @Author: giaruei
 * @Date: 2026-01-07 21:07:58
 * @LastEditors: Joshua.Cai Joshua.Cai@agilex.ai
 * @LastEditTime: 2026-01-07 21:09:31
 * @FilePath: /polaris/src/components/theme-provider.tsx
 * @Description: 
 */
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}