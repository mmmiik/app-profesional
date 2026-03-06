"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

const nav = [
  {
    section: "NAVEGACIÓN PRINCIPAL",
    items: [
      { href: "/", label: "Dashboard" },
      { href: "/listado", label: "Registros" },
      { href: "/informe", label: "Informes" },
    ],
  },
  {
    section: "GESTIÓN",
    items: [
      { href: "/nuevo", label: "Nuevo Registro" },
      { href: "/perfil", label: "Mi Perfil" },
      { href: "/ajustes", label: "Ajustes" },
    ],
  },
  {
    section: "SOPORTE",
    items: [
      { href: "/ayuda", label: "Centro de Ayuda" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="hidden md:flex md:flex-col"
      style={{
        width: 260,
        minWidth: 260,
        background: "#3D2C2C",
        borderRight: "1px solid #4E3535",
        minHeight: "100dvh",
        position: "sticky",
        top: 0,
        height: "100dvh",
        overflowY: "auto",
      }}
    >
      {/* Brand */}
      <div style={{ padding: "32px 28px 20px" }}>
        <div style={{
          fontFamily: "'Geist', sans-serif",
          fontWeight: 800,
          fontSize: 20,
          color: "#F54C49",
          letterSpacing: "0.06em",
        }}>
          EXEC·APP
        </div>
        <div style={{
          fontFamily: "'Noto Sans JP', sans-serif",
          fontSize: 10,
          color: "#8A6A6A",
          marginTop: 6,
          lineHeight: 1.7,
          letterSpacing: "0.06em",
        }}>
          Sophistication. Authority.<br />Modern Femininity.
        </div>
      </div>

      <Separator style={{ background: "#4E3535" }} />

      {/* User */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "16px 28px",
        borderBottom: "1px solid #4E3535",
      }}>
        <div style={{
          width: 38, height: 38,
          background: "#F54C49",
          borderRadius: "50%",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 700, fontSize: 13, color: "white",
          flexShrink: 0,
        }}>
          JD
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#F8F6F6" }}>Jane Doe</div>
          <div style={{
            fontSize: 9, color: "#8A6A6A",
            fontFamily: "'Noto Sans JP', sans-serif",
            letterSpacing: "0.1em", marginTop: 2,
          }}>
            EXECUTIVE DIRECTOR
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: "12px 0" }}>
        {nav.map((group) => (
          <div key={group.section}>
            <div style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "#8A6A6A",
              fontFamily: "'Noto Sans JP', sans-serif",
              padding: "14px 28px 6px",
            }}>
              {group.section}
            </div>
            {group.items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 28px",
                    fontSize: 13,
                    fontWeight: 500,
                    color: active ? "#F54C49" : "#C4A8A8",
                    borderLeft: active ? "2px solid #F54C49" : "2px solid transparent",
                    background: active ? "rgba(245,76,73,0.07)" : "transparent",
                    textDecoration: "none",
                    transition: "all 0.15s",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.background = "rgba(245,76,73,0.04)";
                      (e.currentTarget as HTMLElement).style.color = "#F8F6F6";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "#C4A8A8";
                    }
                  }}
                >
                  <span style={{
                    width: 5, height: 5,
                    borderRadius: "50%",
                    background: active ? "#F54C49" : "#8A6A6A",
                    flexShrink: 0,
                    transition: "background 0.15s",
                  }} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div style={{
        padding: "16px 28px",
        borderTop: "1px solid #4E3535",
        fontSize: 10,
        color: "#8A6A6A",
        fontFamily: "'Noto Sans JP', sans-serif",
        lineHeight: 1.8,
      }}>
        EXEC·APP v1.0.0 · Executive Platform<br />
        © 2025 All rights reserved
      </div>
    </aside>
  );
}
