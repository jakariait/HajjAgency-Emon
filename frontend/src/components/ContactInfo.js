import { Phone, Mail } from "lucide-react";
import { getEmailAddress, getPhoneNumber } from "@/utils/brand";

export default function ContactInfo() {
  const phone = getPhoneNumber();
  const email = getEmailAddress();

  return (
    <div className="flex gap-6">
      {/* Phone */}
      <a
        href={`tel:${phone}`}
        className="group flex items-center gap-2 cursor-pointer"
      >
        <Phone
          className="text-secondary group-hover:text-accent transition-all duration-300 ease-in-out"
          size={26}
        />

        <span className="text-md font-semibold text-accent group-hover:text-secondary transition-all duration-300 ease-in-out">
          {phone}
        </span>
      </a>

      {/* Email */}
      <a
        href={`mailto:${email}`}
        className="group flex items-center gap-2 cursor-pointer"
      >
        <Mail
          className="text-secondary group-hover:text-accent transition-all duration-300 ease-in-out"
          size={26}
        />

        <span className="text-md font-semibold text-accent group-hover:text-secondary transition-all duration-300 ease-in-out">
          {email}
        </span>
      </a>
    </div>
  );
}
