import Image from "next/image";
import { siteConfig } from "../config/siteConfig";
import { WhatsAppIcon } from "./SocialIcons";

export default function WhatsAppFloat() {
    return (
        
         <a  href={`https://wa.me/${siteConfig?.contact?.phone}`}
           target="_blank"
           className="whatsapp-float"
         >
           <Image
             src="/images/whatsapp-logo.webp"
             alt="WhatsApp"
             width={45}
             height={45}
           />
         </a>
    );
}

{/* <a href={`https://wa.me/${siteConfig?.contact?.phone}`} className="whatsapp-float">
            <WhatsAppIcon size={40} />
        </a> */}