"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

const HELP: Record<string, { title: string; body: string; tip: string }> = {
  home: {
    title: "Dashboard",
    body: "Vista general con KPIs en tiempo real, actividad reciente y accesos directos. De un vistazo sabes exactamente dónde estás.",
    tip: "Usa las Acciones rápidas para crear registros o navegar a informes sin perder el tiempo.",
  },
  listado: {
    title: "Registros",
    body: "Lista completa con filtros por estado. Pulsa cualquier registro para ver el detalle completo con notas e histórico.",
    tip: "Filtra por estado para reducir el ruido y enfocarte en lo que importa hoy.",
  },
  detalle: {
    title: "Detalle de Registro",
    body: "Toda la información de un registro en un vistazo. Cambia el estado, edita campos o añade notas desde aquí.",
    tip: "Mantén las notas actualizadas: tu yo del futuro te lo agradecerá.",
  },
  informe: {
    title: "Informes",
    body: "Filtros avanzados por estado, categoría y fechas. El gráfico y los KPIs se actualizan en tiempo real con cada filtro.",
    tip: "Combina filtros de estado + categoría para informes ejecutivos precisos.",
  },
  nuevo: {
    title: "Nuevo Registro",
    body: "Rellena los campos y guarda antes de que te llamen a otra reunión. El ID se genera automáticamente.",
    tip: "Las notas son opcionales pero muy útiles para el seguimiento posterior.",
  },
  perfil: {
    title: "Mi Perfil",
    body: "Actualiza tus datos personales, cargo y departamento. Los cambios se reflejan en toda la app.",
    tip: "Mantén el cargo actualizado para que los registros se asignen correctamente.",
  },
  ajustes: {
    title: "Ajustes",
    body: "Controla notificaciones, apariencia y seguridad desde aquí. Cada toggle se guarda automáticamente.",
    tip: "Activa la biometría para accesos más rápidos sin comprometer la seguridad.",
  },
  ayuda: {
    title: "Centro de Ayuda",
    body: "Documentación completa, flujo de uso recomendado y guía de instalación en Android.",
    tip: "El flujo de uso está en la pestaña 'Flujo': cinco pasos para dominar la app.",
  },
};

export function HelpButton({ helpKey }: { helpKey: string }) {
  const content = HELP[helpKey] ?? {
    title: "Ayuda",
    body: "No hay ayuda definida para esta pantalla.",
    tip: "Navega usando el menú lateral.",
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          style={{
            width: 34,
            height: 34,
            border: "1.5px solid #4E3535",
            borderRadius: 6,
            background: "#3D2C2C",
            color: "#C4A8A8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: 13,
            fontWeight: 700,
            fontFamily: "'Geist', sans-serif",
            flexShrink: 0,
            transition: "all 0.15s",
          }}
        >
          ?
        </button>
      </DialogTrigger>

      <DialogContent
        style={{
          background: "#3D2C2C",
          border: "1px solid #4E3535",
          borderRadius: 12,
          padding: 28,
          maxWidth: 440,
        }}
      >
        <DialogHeader>
          <div style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.14em",
            color: "#8A6A6A",
            marginBottom: 6,
          }}>
            AYUDA CONTEXTUAL
          </div>
          <DialogTitle style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: 18,
            fontWeight: 700,
            color: "#F8F6F6",
            letterSpacing: "-0.3px",
          }}>
            {content.title}
          </DialogTitle>
        </DialogHeader>

        {/* Body */}
        <div
          style={{
            background: "#3A2828",
            border: "1px solid #4E3535",
            borderRadius: 8,
            padding: "14px 16px",
            marginTop: 4,
          }}
        >
          <p style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: 13,
            color: "#C4A8A8",
            lineHeight: 1.7,
            margin: 0,
          }}>
            {content.body}
          </p>
        </div>

        {/* Tip */}
        <div
          style={{
            background: "rgba(245,76,73,0.07)",
            border: "1px solid rgba(245,76,73,0.18)",
            borderRadius: 8,
            padding: "12px 16px",
            marginTop: 10,
          }}
        >
          <div style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "#F54C49",
            marginBottom: 5,
          }}>
            CONSEJO
          </div>
          <p style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: 12,
            color: "#C4A8A8",
            lineHeight: 1.6,
            margin: 0,
          }}>
            {content.tip}
          </p>
        </div>

        {/* Footer link */}
        <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
          <Link href="/ayuda" style={{ textDecoration: "none", flex: 1 }}>
            <button style={{
              width: "100%",
              padding: "11px 0",
              background: "transparent",
              border: "1.5px solid #4E3535",
              borderRadius: 6,
              color: "#F8F6F6",
              fontFamily: "'Geist', sans-serif",
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              letterSpacing: "0.03em",
              transition: "all 0.15s",
            }}>
              Ver manual completo
            </button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
