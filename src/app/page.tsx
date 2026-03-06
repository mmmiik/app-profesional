import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PageHeader } from "@/components/page-header";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Inicio"
        description="Demo para interfaz organizada, informes, ayuda contextual y distribución."
        helpKey="home"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Qué hace la peña de DAM2?</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Aplicar theme, mejorar layout, ordenar acciones en menús/toolbar, y generar APK (Capacitor).
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pistas</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Revisa <span className="font-medium">/informe</span> para filtros, KPIs y gráfico.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}