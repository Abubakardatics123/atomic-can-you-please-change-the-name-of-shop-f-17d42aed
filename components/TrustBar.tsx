import { Truck, Shield, RotateCcw, Headphones } from "lucide-react";

const perks = [
  {
    icon: Truck,
    title: "Free UK Delivery",
    description: "On all orders over £30",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "256-bit SSL encryption",
  },
  {
    icon: RotateCcw,
    title: "30-Day Returns",
    description: "Hassle-free returns policy",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "We're always here to help",
  },
];

export default function TrustBar() {
  return (
    <section className="py-12 bg-indigo-50 border-y border-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk) => (
            <div key={perk.title} className="flex items-start gap-4">
              <div className="shrink-0 w-11 h-11 bg-indigo-600 rounded-xl flex items-center justify-center">
                <perk.icon size={22} className="text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{perk.title}</p>
                <p className="text-xs text-gray-500 mt-0.5">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
