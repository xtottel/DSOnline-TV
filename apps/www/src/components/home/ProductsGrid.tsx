import {
  LockIcon,
  CheckCircle,
  MessageCircleIcon,
  MailCheck,
  MessageSquareText,
  PhoneCall,
  Hash,
} from "lucide-react";
import { Container } from "@/layout/Container";

const products = [
  {
    icon: <MessageCircleIcon className="w-6 h-6" />,
    name: "SMS API",
    description: "Bulk SMS with direct African carrier connections",
    features: ["Ghana numbers first", "99% deliverability", "Real-time analytics"],
    color: "bg-blue-100 text-blue-800",
  },
  {
    icon: <LockIcon className="w-6 h-6" />,
    name: "OTP Service",
    description: "Secure 2FA for African users with instant code delivery",
    features: ["1-tap verify", "Retry logic", "Fraud detection"],
    color: "bg-green-100 text-green-800",
  },
  {
    icon: <MailCheck className="w-6 h-6" />,
    name: "Email API",
    description: "High-speed transactional email with top deliverability",
    features: ["Spam-free delivery", "Detailed logs", "Domain branding"],
    color: "bg-emerald-100 text-emerald-800",
  },
  {
    icon: <PhoneCall className="w-6 h-6" />,
    name: "Voice API",
    description: "Crystal-clear programmable voice calls for Africa",
    features: ["Call masking", "IVR flows", "Call recordings"],
    color: "bg-rose-100 text-rose-800",
  },
  {
    icon: <Hash className="w-6 h-6" />,
    name: "USSD API",
    description: "Zero-data USSD flows for payments and surveys",
    features: ["Instant response", "No internet required", "All networks"],
    color: "bg-blue-100 text-blue-800",
  },
  {
    icon: <MessageSquareText className="w-6 h-6" />,
    name: "Chat API",
    description: "WhatsApp, Messenger, and Instagram chat in one API",
    features: ["Unified inbox", "Bot support", "Delivery receipts"],
    color: "bg-purple-100 text-purple-800",
  },
];

export default function ProductsGrid() {
  return (
    <section className="py-15 bg-gradient-to-b from-purple-50 via-violet-100 to-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#111e4f] mb-2">
            Communication Building Blocks
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            APIs designed for African connectivity challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              {/* Icon Badge */}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 ${product.color} bg-opacity-40`}
              >
                {product.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#111e4f] mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {product.description}
              </p>

              <ul className="space-y-2 text-sm">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#fcd116]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
