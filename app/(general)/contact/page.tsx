
import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'Esta es la pagina para contactarnos',
 keywords: ['Contact Page','Contact Us','info','...']
};

export default function ContactPage(){
    return(
        <>
        <span className="text-7xl">Contact Page</span>
        </>
    )

}