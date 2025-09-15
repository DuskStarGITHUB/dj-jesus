"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function PagePrivacyPolicy() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);
  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment.trim()]);
      setComment("");
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center p-6 md:p-12 border-t-50">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Políticas de Privacidad
      </h1>
      <Card className="max-w-3xl w-full mb-8">
        <CardHeader>
          <CardTitle>Información General</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Bienvenido a nuestro sitio web de DJ. Respetamos tu privacidad y nos
            comprometemos a proteger tu información personal. Esta política
            explica cómo recopilamos, usamos y protegemos tus datos.
          </p>
          <p className="mb-4">
            No recopilamos datos personales sensibles. Solo se permiten
            comentarios anónimos en el blog, sin necesidad de registro.
          </p>
          <p className="mb-4">
            Podemos utilizar cookies para mejorar la experiencia de navegación,
            pero no compartimos información con terceros.
          </p>
        </CardContent>
      </Card>
      <Card className="max-w-3xl w-full mb-8">
        <CardHeader>
          <CardTitle>Datos que recopilamos</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2">
            <li>Comentarios anónimos publicados en nuestro sitio.</li>
            <li>
              Datos técnicos como la dirección IP y tipo de navegador (para
              estadísticas).
            </li>
            <li>Cookies y tecnologías similares para mejorar la navegación.</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="max-w-3xl w-full mb-8">
        <CardHeader>
          <CardTitle>Uso de la información</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">
            La información recopilada se utiliza únicamente para:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Mejorar la experiencia del usuario en el sitio.</li>
            <li>Analizar tendencias y uso del sitio para optimización.</li>
            <li>Responder a comentarios o preguntas, si se proporcionan.</li>
          </ul>
        </CardContent>
      </Card>
      <Card className="max-w-3xl w-full mb-8">
        <CardHeader>
          <CardTitle>Seguridad de la información</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">
            Implementamos medidas técnicas y organizativas para proteger tus
            datos contra acceso no autorizado, pérdida o alteración.
          </p>
        </CardContent>
      </Card>
      <Card className="max-w-3xl w-full mb-8">
        <CardHeader>
          <CardTitle>Derechos del usuario</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">Como visitante, tienes derecho a:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Solicitar información sobre los datos que recopilamos.</li>
            <li>Solicitar la eliminación de tus datos, cuando aplique.</li>
            <li>
              Retirar el consentimiento para el uso de cookies en cualquier
              momento.
            </li>
          </ul>
        </CardContent>
      </Card>
      <Card className="max-w-3xl w-full mb-12">
        <CardHeader>
          <CardTitle>Contacto</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-2">
            Para cualquier duda o solicitud relacionada con la privacidad, no es
            necesario contactarmos pues realmente la navegacion es segura.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
