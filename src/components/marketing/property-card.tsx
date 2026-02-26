import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin } from "lucide-react";

interface PropertyCardProps {
  name: string;
  location: string;
  type: string;
  units?: number;
  status: string;
  imageUrl?: string;
}

export function PropertyCard({
  name,
  location,
  type,
  units,
  status,
  imageUrl,
}: PropertyCardProps) {
  const statusVariant = status === "active" ? "success" : status === "sold" ? "default" : "info";

  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-md">
      <div className="aspect-[16/10] bg-gray-100">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#1a2332] to-[#243044]">
            <Building2 className="h-12 w-12 text-[#c9a96e]/50" />
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <Badge variant={statusVariant}>{status}</Badge>
        </div>
        <div className="mt-2 flex items-center gap-1 text-sm text-gray-500">
          <MapPin className="h-3.5 w-3.5" />
          {location}
        </div>
        <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
          <span>{type}</span>
          {units && <span>{units} units</span>}
        </div>
      </div>
    </Card>
  );
}
