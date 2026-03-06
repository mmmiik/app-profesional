"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const screenLabels: Record<string, string> = {
  "/":        "DASHBOARD",
  "/listado": "REGISTROS",
  "/informe": "INFORMES",
  "/nuevo":   "NUEVO REGISTRO",
  "/perfil":  "MI PERFIL",
  "/ajustes": "AJUSTES",
  "/ayuda":   "CENTRO DE AYUDA",
};

export function Topbar() {
  const pathname = usePathname();
  const label = screenLabels[pathname] ?? pathname.replace("/", "").toUpperCase();

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "rgba(51,34,34,0.92)",
      borderBottom: "1px solid #4E3535",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
    }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 28px",
      }}>
        {/* Left: current screen */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}>
          <div style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.16em",
            color: "#8A6A6A",
          }}>
            {label}
          </div>
        </div>

        {/* Right: actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Button
            asChild
            variant="outline"
            size="sm"
            style={{
              background: "transparent",
              border: "1.5px solid #4E3535",
              color: "#C4A8A8",
              fontFamily: "'Geist', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.03em",
              height: 34,
              padding: "0 16px",
              borderRadius: 6,
              transition: "all 0.15s",
            }}
          >
            <Link href="/informe">Ver Informes</Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size="sm"
                style={{
                  background: "#F54C49",
                  border: "none",
                  color: "white",
                  fontFamily: "'Geist', sans-serif",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  height: 34,
                  padding: "0 16px",
                  borderRadius: 6,
                  cursor: "pointer",
                  transition: "background 0.15s",
                }}
              >
                Acciones
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              style={{
                background: "#3D2C2C",
                border: "1px solid #4E3535",
                borderRadius: 8,
                padding: "6px 0",
                minWidth: 180,
              }}
            >
              <DropdownMenuItem
                onClick={() => alert("Exportar (placeholder)")}
                style={{
                  fontSize: 13,
                  color: "#C4A8A8",
                  padding: "9px 16px",
                  cursor: "pointer",
                  fontFamily: "'Geist', sans-serif",
                }}
              >
                Exportar datos
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => alert("Sincronizar (placeholder)")}
                style={{
                  fontSize: 13,
                  color: "#C4A8A8",
                  padding: "9px 16px",
                  cursor: "pointer",
                  fontFamily: "'Geist', sans-serif",
                }}
              >
                Sincronizar
              </DropdownMenuItem>
              <DropdownMenuItem
                asChild
                style={{
                  fontSize: 13,
                  color: "#C4A8A8",
                  padding: "9px 16px",
                  cursor: "pointer",
                  fontFamily: "'Geist', sans-serif",
                }}
              >
                <Link href="/nuevo">+ Nuevo Registro</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Help button */}
          <button
            style={{
              width: 34, height: 34,
              border: "1.5px solid #4E3535",
              borderRadius: 6,
              background: "#3D2C2C",
              color: "#C4A8A8",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 700,
              fontFamily: "'Geist', sans-serif",
              transition: "all 0.15s",
            }}
            onClick={() => alert("Abre ayuda contextual")}
          >
            ?
          </button>

          {/* Profile */}
          <Link href="/perfil" style={{ textDecoration: "none" }}>
            <button
              style={{
                width: 34, height: 34,
                border: "1.5px solid #4E3535",
                borderRadius: 6,
                background: "#3D2C2C",
                color: "#C4A8A8",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M2 13.5c0-2.5 2.686-4.5 6-4.5s6 2 6 4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
