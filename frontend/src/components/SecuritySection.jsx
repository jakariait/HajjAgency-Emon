import React from "react";
import { ShieldCheck } from "lucide-react";

const securityPoints = [
  "Strong password policy (minimum 12 characters with complexity requirements)",
  "Multi-factor authentication (MFA) enabled wherever supported",
  "Credentials stored securely using encrypted password management tools",
  "Role-based user permissions and controlled access",
  "Practices aligned with Amazon’s Data Protection Policy (DPP)",
  "Client account security and confidentiality are a priority in every engagement",
];

export default function SecuritySection() {
  return (
    <section className="w-full max-w-6xl mx-auto p-6 md:p-8 bg-white rounded-2xl  border border-gray-200 text-sm">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <ShieldCheck className="w-7 h-7 text-green-600" />
        <h2 className="text-xl font-semibold text-gray-800">
          Security & Data Protection
        </h2>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        We follow strict data protection and credential management practices
        when accessing client Amazon Seller Central accounts under
        authorization. Access is limited to approved team members using
        role-based permissions.
      </p>

      {/* Points List */}
      <ul className="space-y-2">
        {securityPoints.map((point, index) => (
          <li key={index} className="flex items-start  gap-1 text-gray-700">
            <div className="flex items-center justify-center gap-2">
              <span className="mt-1 w-2 h-2 rounded-full bg-green-400 shrink-0" />
              <span className="leading-relaxed">{point}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
