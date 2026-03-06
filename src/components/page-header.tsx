import { HelpButton } from "@/components/help-button";

export function PageHeader({
  title,
  description,
  helpKey,
}: {
  title: string;
  description?: string;
  helpKey: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: 16,
        marginBottom: 28,
        paddingBottom: 24,
        borderBottom: "1px solid #4E3535",
      }}
    >
      <div style={{ minWidth: 0 }}>
        {/* Label */}
        <div style={{
          fontFamily: "'Noto Sans JP', sans-serif",
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.16em",
          color: "#8A6A6A",
          marginBottom: 6,
        }}>
          EXEC·APP
        </div>
        <h1 style={{
          fontFamily: "'Geist', sans-serif",
          fontSize: 26,
          fontWeight: 800,
          color: "#F8F6F6",
          letterSpacing: "-0.5px",
          margin: 0,
          lineHeight: 1.1,
        }}>
          {title}
        </h1>
        {description && (
          <p style={{
            fontFamily: "'Noto Sans JP', sans-serif",
            fontSize: 12,
            color: "#8A6A6A",
            marginTop: 6,
            lineHeight: 1.6,
          }}>
            {description}
          </p>
        )}
      </div>
      <HelpButton helpKey={helpKey} />
    </div>
  );
}
