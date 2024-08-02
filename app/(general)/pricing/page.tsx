
import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Princing Page',
 description: 'Pagino de precios',
 keywords: ['Princing Page','Contact Us','Price info','...']
};

export default function PricingPage(){
    return(
        <>
        <span className="text-7xl">Princing Page</span>
        </>
    )
}