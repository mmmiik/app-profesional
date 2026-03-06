import { PageHeader } from "@/components/page-header";
import Link from "next/link";

// ── Shared style tokens ──────────────────────────────────────────────────────
const card: React.CSSProperties = {
  background: "#3A2828",
  border: "1px solid #4E3535",
  borderRadius: 10,
  padding: "20px 22px",
};

const sectionLabel: React.CSSProperties = {
  fontFamily: "'Noto Sans JP', sans-serif",
  fontSize: 9,
  fontWeight: 700,
  letterSpacing: "0.14em",
  color: "#8A6A6A",
  marginBottom: 12,
};

// ── KPI Card ─────────────────────────────────────────────────────────────────
function KpiCard({
  label, value, sub, variant = "default",
}: {
  label: string; value: string; sub: string; variant?: "default" | "accent" | "muted" | "taupe";
}) {
  return (
    <div className={`kpi-card ${variant !== "default" ? variant : ""}`} style={{
      background: "#3A2828",
      border: "1px solid #4E3535",
      borderRadius: 10,
      padding: "18px 20px",
    }}>
      <div style={{ ...sectionLabel, marginBottom: 10 }}>{label}</div>
      <div style={{
        fontFamily: "'Geist', sans-serif",
        fontSize: 30,
        fontWeight: 800,
        color: "#F8F6F6",
        letterSpacing: "-1.5px",
        lineHeight: 1,
      }}>
        {value}
      </div>
      <div style={{
        fontFamily: "'Noto Sans JP', sans-serif",
        fontSize: 11,
        color: "#8A6A6A",
        marginTop: 6,
      }}>
        {sub}
      </div>
    </div>
  );
}

// ── Activity Item ─────────────────────────────────────────────────────────────
function ActivityItem({
  text, time, variant = "default",
}: {
  text: React.ReactNode; time: string; variant?: "default" | "accent" | "muted";
}) {
  const dotColor = variant === "accent" ? "#CA605E" : variant === "muted" ? "#A06665" : "#F54C49";
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "13px 0",
      borderBottom: "1px solid rgba(255,255,255,0.03)",
    }}>
      <div style={{ width: 6, height: 6, borderRadius: "50%", background: dotColor, flexShrink: 0 }} />
      <div style={{
        flex: 1,
        fontFamily: "'Noto Sans JP', sans-serif",
        fontSize: 12,
        color: "#C4A8A8",
        lineHeight: 1.5,
      }}>
        {text}
      </div>
      <div style={{
        fontFamily: "'Noto Sans JP', sans-serif",
        fontSize: 10,
        color: "#8A6A6A",
        whiteSpace: "nowrap",
      }}>
        {time}
      </div>
    </div>
  );
}

// ── Quick Action Button ───────────────────────────────────────────────────────
function QuickBtn({
  href, label, primary = false,
}: {
  href: string; label: string; primary?: boolean;
}) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <button style={{
        width: "100%",
        padding: "11px 16px",
        background: primary ? "#F54C49" : "transparent",
        border: primary ? "none" : "1.5px solid #4E3535",
        borderRadius: 6,
        color: primary ? "white" : "#F8F6F6",
        fontFamily: "'Geist', sans-serif",
        fontSize: 12,
        fontWeight: primary ? 700 : 600,
        cursor: "pointer",
        letterSpacing: "0.03em",
        transition: "all 0.15s",
        textAlign: "center",
      }}>
        {label}
      </button>
    </Link>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Resumen ejecutivo — métricas, actividad reciente y accesos directos."
        helpKey="home"
      />

      {/* Welcome */}
      <div style={{ marginBottom: 32 }}>
        <div style={{
          fontFamily: "'Noto Sans JP', sans-serif",
          fontSize: 11,
          color: "#8A6A6A",
          letterSpacing: "0.06em",
          marginBottom: 3,
        }}>
          De vuelta al circo corporativo,
        </div>
        <div style={{
          fontFamily: "'Geist', sans-serif",
          fontSize: 32,
          fontWeight: 800,
          color: "#F8F6F6",
          letterSpacing: "-1px",
          lineHeight: 1,
        }}>
          Jane Doe
        </div>
        <div style={{
          fontFamily: "'Noto Sans JP', sans-serif",
          fontSize: 10,
          fontWeight: 700,
          color: "#F54C49",
          letterSpacing: "0.14em",
          marginTop: 5,
        }}>
          EXECUTIVE DIRECTOR
        </div>
      </div>

      {/* KPIs */}
      <div style={{ marginBottom: 10 }}>
        <div style={sectionLabel}>INDICADORES CLAVE</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 32 }}>
          <KpiCard label="TOTAL REGISTROS" value="48" sub="+12% este mes" />
          <KpiCard label="ABIERTOS" value="23" sub="En progreso" variant="accent" />
          <KpiCard label="CERRADOS" value="25" sub="Completados" variant="muted" />
          <KpiCard label="IMPORTE TOTAL" value="€142K" sub="+8% vs anterior" variant="taupe" />
        </div>
      </div>

      {/* Two-column layout: activity + quick actions */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 20 }}>

        {/* Activity */}
        <div>
          <div style={sectionLabel}>ACTIVIDAD RECIENTE</div>
          <div style={{ ...card, padding: "4px 20px" }}>
            <ActivityItem
              text={<>Registro <strong style={{ color: "#F8F6F6" }}>#A-2048</strong> actualizado a <strong style={{ color: "#F8F6F6" }}>Aprobado</strong> (el jefe no se desmayó)</>}
              time="hace 2h"
            />
            <ActivityItem
              text={<>Nuevo registro <strong style={{ color: "#F8F6F6" }}>Consultoría Q4</strong> creado y sobrevivió al comité</>}
              time="hace 5h"
              variant="accent"
            />
            <ActivityItem
              text={<>Informe mensual <strong style={{ color: "#F8F6F6" }}>exportado</strong> sin drama en Excel</>}
              time="ayer"
              variant="muted"
            />
            <ActivityItem
              text={<>Registro <strong style={{ color: "#F8F6F6" }}>#B-1203</strong> cerrado exitosamente y sin reunión eterna</>}
              time="ayer"
            />
          </div>
        </div>

        {/* Quick actions + stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <div style={sectionLabel}>ACCIONES RÁPIDAS</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <QuickBtn href="/nuevo"    label="+ Nuevo Registro"        primary />
              <QuickBtn href="/informe"  label="Ver Informes"            />
              <QuickBtn href="/listado"  label="Gestionar Registros"     />
              <QuickBtn href="/ayuda"    label="Centro de Ayuda"         />
            </div>
          </div>

          {/* Mini status card */}
          <div style={{ ...card }}>
            <div style={{ ...sectionLabel, marginBottom: 14 }}>ESTADO DEL SISTEMA</div>
            {[
              { label: "Sync automático",    on: true  },
              { label: "Notificaciones",     on: true  },
              { label: "Backup en la nube",  on: true  },
              { label: "Modo mantenimiento", on: false },
            ].map(({ label, on }) => (
              <div key={label} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "9px 0",
                borderBottom: "1px solid rgba(255,255,255,0.03)",
              }}>
                <span style={{
                  fontFamily: "'Noto Sans JP', sans-serif",
                  fontSize: 12,
                  color: "#C4A8A8",
                }}>
                  {label}
                </span>
                <span style={{
                  width: 7, height: 7,
                  borderRadius: "50%",
                  background: on ? "#F54C49" : "#4E3535",
                  display: "inline-block",
                }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
