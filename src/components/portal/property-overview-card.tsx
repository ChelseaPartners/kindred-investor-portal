import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, TrendingUp, Calendar } from "lucide-react";
import { formatCurrency } from "@/lib/utils";

interface PropertyOverviewCardProps {
  id: string;
  name: string;
  location: string;
  type: string;
  status: string;
  currentValuation?: number;
  ownershipPercentage?: number;
  imageUrl?: string;
}

export function PropertyOverviewCard({
  id,
  name,
  location,
  type,
  status,
  currentValuation,
  ownershipPercentage,
  imageUrl,
}: PropertyOverviewCardProps) {
  const statusVariant = status === "active" ? "success" : status === "sold" ? "default" : "info";

  return (
    <Link href={`/portal/properties/${id}`}>
      <Card className="transition-all hover:shadow-md hover:border-gray-300">
        <div className="aspect-[16/9] bg-gray-100">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="h-full w-full rounded-t-xl object-cover" />
          ) : (
            <div className="flex h-full items-center justify-center rounded-t-xl bg-gradient-to-br from-[#1a2332] to-[#243044]">
              <Building2 className="h-10 w-10 text-[#c9a96e]/50" />
            </div>
          )}
        </div>
        <CardContent className="p-5">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-gray-900">{name}</h3>
            <Badge variant={statusVariant}>{status}</Badge>
          </div>
          <div className="mt-2 flex items-center gap-1 text-sm text-gray-500">
            <MapPin className="h-3.5 w-3.5" />
            {location}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 border-t border-gray-100 pt-4">
            {currentValuation && (
              <div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <TrendingUp className="h-3 w-3" />
                  Current Value
                </div>
                <div className="mt-0.5 text-sm font-semibold text-gray-900">
                  {formatCurrency(currentValuation)}
                </div>
              </div>
            )}
            {ownershipPercentage && (
              <div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Calendar className="h-3 w-3" />
                  Ownership
                </div>
                <div className="mt-0.5 text-sm font-semibold text-gray-900">
                  {ownershipPercentage}%
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
